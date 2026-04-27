/**
 * Brexil — site behaviour
 * - Loads HTML partials (header, footer, product card)
 * - Renders products from data/products.js
 * - WhatsApp deep links with pre-filled product message (number: js/whatsapp-config.js)
 *
 * Serve the site over HTTP (e.g. VS Code Live Server) so fetch() can load /components/*.html.
 */

(function () {
  'use strict';

  var BRAND_NAME = 'Brexil';

  /**
   * @returns {string}
   */
  function getWhatsAppNumber() {
    var n = window.BREXIL_WHATSAPP_NUMBER;
    if (typeof n === 'string' && /^[0-9]+$/.test(n)) return n;
    console.error('Set window.BREXIL_WHATSAPP_NUMBER in js/whatsapp-config.js');
    return '';
  }

  var PATHS = {
    header: 'components/header.html',
    footer: 'components/footer.html',
    productCard: 'components/product-card.html',
  };

  /** Dark overlays so text stays readable on photo heroes / banners */
  var HERO_IMAGE_OVERLAY =
    'linear-gradient(105deg, rgba(10,10,10,0.93) 0%, rgba(10,10,10,0.82) 45%, rgba(10,10,10,0.9) 100%)';
  var SECTION_BANNER_OVERLAY =
    'linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.9) 100%)';

  /**
   * Applies hero + category banner backgrounds from data/media.js (optional).
   */
  function applyMediaDecor() {
    var media = window.BREXIL_MEDIA;
    if (!media) return;
    var heroMedia = document.querySelector('.hero__media');
    if (heroMedia && media.hero) {
      heroMedia.style.backgroundImage = HERO_IMAGE_OVERLAY + ', url(' + media.hero + ')';
    }
    var banners = media.sectionBanners || {};
    document.querySelectorAll('[data-banner-key]').forEach(function (el) {
      var key = el.getAttribute('data-banner-key');
      var url = banners[key];
      if (url) {
        el.style.backgroundImage = SECTION_BANNER_OVERLAY + ', url(' + url + ')';
      }
    });
  }

  /**
   * Builds wa.me URL with optional product line for orders.
   * @param {string} [productName]
   * @returns {string}
   */
  function buildWhatsAppUrl(productName) {
    var base = 'https://wa.me/' + getWhatsAppNumber();
    var lines = ['Hello ' + BRAND_NAME + ',', 'I would like to place an order.'];
    if (productName) {
      lines.push('Product: ' + productName);
    }
    var text = lines.join('\n');
    return base + '?text=' + encodeURIComponent(text);
  }

  /**
   * Simple fetch → text for HTML fragments.
   * @param {string} url
   * @returns {Promise<string>}
   */
  function fetchText(url) {
    return fetch(url).then(function (res) {
      if (!res.ok) throw new Error('Failed to load ' + url);
      return res.text();
    });
  }

  /**
   * Replace {{key}} in template string using object values.
   * @param {string} template
   * @param {Record<string, string>} map
   */
  function applyTemplate(template, map) {
    return template.replace(/\{\{(\w+)\}\}/g, function (_, key) {
      return map[key] != null ? String(map[key]) : '';
    });
  }

  /**
   * Escape HTML attribute text (for data-product-name in template we use separate replacement).
   * @param {string} str
   */
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /**
   * @param {HTMLElement} root
   */
  function initMobileNav(root) {
    var toggle = root.querySelector('.nav-toggle');
    var nav = root.querySelector('#site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    nav.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.closest && t.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  /**
   * Escape for use inside HTML attribute (href).
   * @param {string} str
   */
  function escapeAttr(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/'/g, '&#39;');
  }

  /**
   * @param {string} category
   * @returns {string}
   */
  function categoryToLabel(category) {
    if (category === 'ready-cut') return 'Ready-Cut';
    return category.charAt(0).toUpperCase() + category.slice(1);
  }

  /**
   * Safe fragment for use in id="" / for="" (alphanumeric, hyphen, underscore only).
   * @param {string} raw
   * @returns {string}
   */
  function productIdDomSafe(raw) {
    var s = String(raw == null ? 'x' : raw).replace(/[^a-zA-Z0-9_-]/g, '-');
    if (s.length === 0) s = 'x';
    return s;
  }

  /**
   * Quantity UI injected per product from product.category (data/products.js).
   * Renders only one block: weight options for beef/chicken/mutton, or egg options for eggs.
   * @param {typeof window.BREXIL_PRODUCTS[0]} product
   * @returns {string}
   */
  function buildQuantityBlockHtml(product) {
    var cat = product && product.category;
    var idDom = productIdDomSafe(product && product.id);
    if (cat === 'beef' || cat === 'chicken' || cat === 'mutton') {
      return (
        '<div class="product-qty product-qty-meat">' +
        '<label class="product-qty-field-label" for="pq-meat-' +
        idDom +
        '">Weight</label>' +
        '<select class="product-qty-select product-qty-select--meat" id="pq-meat-' +
        idDom +
        '" name="meat-weight" aria-label="Select weight for meat or poultry">' +
        '<option value="500g">500g</option>' +
        '<option value="1kg">1kg</option>' +
        '<option value="1.5kg">1.5kg</option>' +
        '<option value="2kg">2kg</option>' +
        '<option value="3kg">3kg</option>' +
        '<option value="5kg">5kg</option>' +
        '<option value="custom">Custom quantity</option>' +
        '</select>' +
        '<div class="product-qty-custom-wrap" hidden>' +
        '<label class="product-qty-sublabel" for="pq-meat-custom-' +
        idDom +
        '">Custom weight (0.5–10 kg, steps of 0.5)</label>' +
        '<input type="number" class="product-qty-custom-meat" id="pq-meat-custom-' +
        idDom +
        '" min="0.5" max="10" step="0.5" inputmode="decimal" placeholder="e.g. 0.5, 1, 1.5 … 10" />' +
        '</div>' +
        '</div>'
      );
    }
    if (cat === 'eggs') {
      return (
        '<div class="product-qty product-qty-eggs">' +
        '<label class="product-qty-field-label" for="pq-eggs-' +
        idDom +
        '">Quantity</label>' +
        '<select class="product-qty-select product-qty-select--eggs" id="pq-eggs-' +
        idDom +
        '" name="egg-qty" aria-label="Select egg quantity">' +
        '<option value="15pcs">15 pcs</option>' +
        '<option value="30pcs">30 pcs / 1 tray</option>' +
        '<option value="custom">Custom quantity</option>' +
        '</select>' +
        '<div class="product-qty-custom-wrap" hidden>' +
        '<label class="product-qty-sublabel" for="pq-eggs-custom-' +
        idDom +
        '">Custom quantity (30–360 pcs, steps of 15; 12 trays = 360 pcs)</label>' +
        '<input type="number" class="product-qty-custom-eggs" id="pq-eggs-custom-' +
        idDom +
        '" min="30" max="360" step="15" inputmode="numeric" placeholder="e.g. 30, 45, 60… 360" />' +
        '</div>' +
        '</div>'
      );
    }
    return '';
  }

  /**
   * Creates a visible fallback image with category text.
   * @param {string} label
   * @returns {string}
   */
  function buildFallbackImageDataUrl(label) {
    var safe = (label || 'Product').replace(/[^a-z0-9\- ]/gi, '');
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="675" viewBox="0 0 900 675">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#101010"/><stop offset="100%" stop-color="#1a1a1a"/></linearGradient></defs>' +
      '<rect width="900" height="675" fill="url(#g)"/>' +
      '<rect x="36" y="36" width="828" height="603" rx="18" fill="none" stroke="#c9a962" stroke-opacity="0.55" stroke-width="3"/>' +
      '<text x="450" y="320" fill="#e4c77a" font-family="Arial, Helvetica, sans-serif" font-size="52" text-anchor="middle" font-weight="700">' +
      safe +
      '</text>' +
      '<text x="450" y="374" fill="#d8d2c5" font-family="Arial, Helvetica, sans-serif" font-size="26" text-anchor="middle">Image unavailable</text>' +
      '</svg>';
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }

  /**
   * @param {string} cardHtml
   * @param {typeof window.BREXIL_PRODUCTS[0]} product
   */
  function productToHtml(cardHtml, product) {
    var map = {
      id: escapeHtml(product.id),
      category: escapeHtml(product.category),
      categoryLabel: escapeHtml(categoryToLabel(product.category)),
      name: escapeHtml(product.name),
      description: escapeHtml(product.description),
      price: escapeHtml(product.price),
      image: escapeHtml(product.image),
      whatsappUrl: escapeAttr(buildWhatsAppUrl(product.name)),
      quantityBlock: buildQuantityBlockHtml(product),
    };
    return applyTemplate(cardHtml, map);
  }

  function renderProducts(cardTemplate, products) {
    var grids = document.querySelectorAll('.product-grid[data-category]');
    grids.forEach(function (grid) {
      var cat = grid.getAttribute('data-category');
      var items = products.filter(function (p) {
        return p.category === cat;
      });
      grid.innerHTML = items
        .map(function (p) {
          return productToHtml(cardTemplate, p);
        })
        .join('');
    });
  }

  function initProductImageFallbacks() {
    document.querySelectorAll('.product-card-image').forEach(function (img) {
      img.addEventListener('error', function onError() {
        var label = img.getAttribute('data-category-label') || 'Product';
        img.removeEventListener('error', onError);
        img.src = buildFallbackImageDataUrl(label);
      });
    });
  }

  function setFooterYear() {
    var y = document.querySelector('[data-year]');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function initWhatsAppLinks() {
    var url = buildWhatsAppUrl();
    document.querySelectorAll('[data-brexil-whatsapp="general"]').forEach(function (el) {
      el.href = url;
    });
  }

  function run() {
    applyMediaDecor();

    var products = window.BREXIL_PRODUCTS;
    if (!Array.isArray(products)) {
      console.error('BREXIL_PRODUCTS missing — check data/products.js');
      return;
    }

    Promise.all([
      fetchText(PATHS.header),
      fetchText(PATHS.footer),
      fetchText(PATHS.productCard),
    ])
      .then(function (parts) {
        var headerHtml = parts[0];
        var footerHtml = parts[1];
        var cardTpl = parts[2];

        var headerHost = document.getElementById('site-header');
        var footerHost = document.getElementById('site-footer');
        if (headerHost) {
          headerHost.innerHTML = headerHtml;
          initMobileNav(headerHost);
        }
        if (footerHost) footerHost.innerHTML = footerHtml;

        setFooterYear();
        initWhatsAppLinks();
        renderProducts(cardTpl, products);
        initProductImageFallbacks();
      })
      .catch(function (err) {
        console.error(err);
        var msg =
          '<p style="padding:1rem;font-family:system-ui,sans-serif;background:#111;color:#c9a962;text-align:center;">Could not load page parts. Open the site via a local server (not file://) so components load correctly.</p>';
        var h = document.getElementById('site-header');
        if (h) h.innerHTML = msg;
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();

/* ----- Cart & WhatsApp order (uses window.BREXIL_WHATSAPP_NUMBER from whatsapp-config.js) ----- */
var cart = [];

/** One-time: show / hide custom quantity row when "Custom" is chosen */
(function initProductQtySelectDelegationOnce() {
  if (window.__BREXIL_QTY_DELEGATION__) return;
  window.__BREXIL_QTY_DELEGATION__ = true;
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (!t || !t.classList) return;
    if (!t.classList.contains('product-qty-select--meat') && !t.classList.contains('product-qty-select--eggs')) {
      return;
    }
    var card = t.closest('.product-card');
    if (!card) return;
    var isMeat = t.classList.contains('product-qty-select--meat');
    var block = isMeat ? card.querySelector('.product-qty-meat') : card.querySelector('.product-qty-eggs');
    if (!block) return;
    var customWrap = block.querySelector('.product-qty-custom-wrap');
    if (!customWrap) return;
    customWrap.hidden = t.value !== 'custom';
  });
})();

function getOrderWhatsAppNumber() {
  var n = window.BREXIL_WHATSAPP_NUMBER;
  if (typeof n === 'string' && /^[0-9]+$/.test(n)) return n;
  return '';
}

function cartEscapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function cartEscapeAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

/**
 * @param {string} s
 * @returns {string}
 */
function normalizeSpecialRequest(s) {
  return String(s || '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map(function (line) {
      return line.replace(/\s+/g, ' ').trim();
    })
    .filter(function (line) {
      return line.length > 0;
    })
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * @param {HTMLElement} card
 * @returns {string}
 */
function getSpecialRequestFromProductCard(card) {
  if (!card) return '';
  var el = card.querySelector('.product-special-input');
  if (!el) return '';
  return normalizeSpecialRequest(String(el.value || ''));
}

/**
 * Total units in cart (sum of line quantities).
 * @returns {number}
 */
function getCartTotalItemCount() {
  var t = 0;
  for (var i = 0; i < cart.length; i++) {
    t += Number(cart[i].qty) || 0;
  }
  return t;
}

function updateHeaderCartCount() {
  var n = getCartTotalItemCount();
  var countEl = document.getElementById('header-cart-count');
  var link = document.getElementById('header-cart-link');
  if (countEl) countEl.textContent = '(' + n + ')';
  if (link) {
    link.setAttribute('aria-label', 'Your order, ' + n + ' item' + (n === 1 ? '' : 's'));
  }
}

function renderCart() {
  var list = document.getElementById('cart-items');
  var empty = document.getElementById('cart-empty');
  if (!list) return;
  if (cart.length === 0) {
    list.innerHTML = '';
    list.hidden = true;
    if (empty) empty.hidden = false;
    syncProductCardCartBadges();
    updateHeaderCartCount();
    return;
  }
  if (empty) empty.hidden = true;
  list.hidden = false;
  list.innerHTML = cart
    .map(function (item, lineIndex) {
      var sr = item.specialRequest ? String(item.specialRequest).trim() : '';
      return (
        '<li class="cart-line">' +
        '<div class="cart-line-main">' +
        '<div class="cart-line-top">' +
        '<span class="cart-line-name">' +
        cartEscapeHtml(item.name) +
        '</span>' +
        (item.optionLabel
          ? ' <span class="cart-line-opts">— ' + cartEscapeHtml(item.optionLabel) + '</span>'
          : '') +
        ' <span class="cart-line-qty">×' +
        item.qty +
        '</span>' +
        (item.price ? ' <span class="cart-line-price">' + cartEscapeHtml(item.price) + '</span>' : '') +
        '</div>' +
        (sr
          ? '<p class="cart-line-special">Special request: ' + cartEscapeHtml(sr) + '</p>'
          : '') +
        '</div>' +
        '<button type="button" class="btn btn-ghost cart-remove" data-line-index="' +
        lineIndex +
        '">Remove</button>' +
        '</li>'
      );
    })
    .join('');
  syncProductCardCartBadges();
  updateHeaderCartCount();
}

/**
 * Same id + same quantity option + same special request (normalized) = merge line.
 * @param {string} id
 * @param {string} optionKey
 * @param {string} specialRequestNorm
 * @returns {{ item: { id: string, name: string, optionKey: string, qty: number, optionLabel: string, price: string, specialRequest?: string }, index: number } | null}
 */
function findCartLineByProductAndOption(id, optionKey, specialRequestNorm) {
  var a = specialRequestNorm || '';
  for (var i = 0; i < cart.length; i++) {
    var c = cart[i];
    if (c.id === id && c.optionKey === optionKey) {
      var b = c.specialRequest ? String(c.specialRequest) : '';
      if (a === b) {
        return { item: c, index: i };
      }
    }
  }
  return null;
}

var MEAT_CUSTOM_MIN_KG = 0.5;
var MEAT_CUSTOM_MAX_KG = 10;
var MEAT_CUSTOM_STEP_KG = 0.5;
var MEAT_QTY_ERR = 'Meat quantity must be in 0.5kg steps, from 0.5kg up to 10kg.';

/**
 * Valid custom weight: 0.5, 1, 1.5, …, 10 (kg), i.e. 1..20 in half-kg steps.
 * @param {number} kg
 * @returns {boolean}
 */
function isValidMeatCustomKg(kg) {
  if (typeof kg !== 'number' || !Number.isFinite(kg)) return false;
  if (kg < MEAT_CUSTOM_MIN_KG - 1e-6 || kg > MEAT_CUSTOM_MAX_KG + 1e-6) return false;
  var inHalfUnits = kg * 2;
  if (Math.abs(inHalfUnits - Math.round(inHalfUnits)) > 1e-5) return false;
  var n = Math.round(inHalfUnits);
  return n >= 1 && n <= 20;
}

/**
 * @param {number} kg — normalized to nearest 0.5
 * @returns {string}
 */
function formatMeatCustomOptionLabel(kg) {
  var d = Math.round(kg * 2) / 2;
  var s = d % 1 === 0 ? String(d) : d.toFixed(1);
  return s + ' kg (custom order)';
}

function readMeatOptionFromCard(card) {
  var sel = card.querySelector('.product-qty-select--meat');
  if (!sel) return { ok: false, error: 'Select a weight' };
  var v = sel.value;
  if (v === 'custom') {
    var input = card.querySelector('.product-qty-custom-meat');
    var raw = input ? String(input.value).trim() : '';
    var kg = parseFloat(raw.replace(/,/g, '.'));
    if (!raw || isNaN(kg) || !isValidMeatCustomKg(kg)) {
      return { ok: false, error: MEAT_QTY_ERR };
    }
    var kgNorm = Math.round(kg * 2) / 2;
    return { ok: true, optionKey: 'w:c:' + kgNorm, optionLabel: formatMeatCustomOptionLabel(kgNorm) };
  }
  var labelMap = {
    '500g': '500 g',
    '1kg': '1 kg',
    '1.5kg': '1.5 kg',
    '2kg': '2 kg',
    '3kg': '3 kg',
    '5kg': '5 kg',
  };
  return { ok: true, optionKey: 'w:' + v, optionLabel: labelMap[v] || v };
}

var EGG_CUSTOM_MIN = 30;
var EGG_CUSTOM_MAX = 360;
var EGG_CUSTOM_STEP = 15;
var EGG_QTY_ERR =
  'Egg quantity must be in steps of 15 pcs, starting from 30 pcs, up to 360 pcs / 12 trays.';

function isValidEggCustomQty(n) {
  if (typeof n !== 'number' || !Number.isFinite(n) || !Number.isInteger(n)) return false;
  if (n < EGG_CUSTOM_MIN || n > EGG_CUSTOM_MAX) return false;
  return n % EGG_CUSTOM_STEP === 0;
}

/**
 * @param {number} n
 * @returns {string}
 */
function formatEggCustomOptionLabel(n) {
  var trays = n / 30;
  var trayPart = Number.isInteger(trays)
    ? ' — ' + trays + (trays === 1 ? ' tray' : ' trays')
    : '';
  return n + ' pcs (custom order)' + trayPart;
}

function readEggOptionFromCard(card) {
  var sel = card.querySelector('.product-qty-select--eggs');
  if (!sel) return { ok: false, error: 'Select a quantity' };
  var v = sel.value;
  if (v === 'custom') {
    var input = card.querySelector('.product-qty-custom-eggs');
    var raw = input ? String(input.value).trim() : '';
    var n = parseInt(raw, 10);
    if (!raw || isNaN(n) || !isValidEggCustomQty(n)) {
      return { ok: false, error: EGG_QTY_ERR };
    }
    return { ok: true, optionKey: 'e:c:' + n, optionLabel: formatEggCustomOptionLabel(n) };
  }
  if (v === '15pcs') return { ok: true, optionKey: 'e:15', optionLabel: '15 pcs' };
  if (v === '30pcs') return { ok: true, optionKey: 'e:30', optionLabel: '30 pcs / 1 tray' };
  return { ok: false, error: 'Select a valid option' };
}

function readOptionFromProductCard(card) {
  var cat = (card.getAttribute('data-category') || '').trim();
  if (cat === 'eggs') return readEggOptionFromCard(card);
  if (cat === 'beef' || cat === 'chicken' || cat === 'mutton') {
    return readMeatOptionFromCard(card);
  }
  return { ok: false, error: 'Choose a valid quantity for this product.' };
}

/**
 * One badge line per product: each cart line (same product, different option) is listed with option and ×qty.
 */
function syncProductCardCartBadges() {
  var byProduct = {};
  for (var i = 0; i < cart.length; i++) {
    var it = cart[i];
    if (!it.id) continue;
    if (!byProduct[it.id]) byProduct[it.id] = [];
    byProduct[it.id].push(it);
  }
  document.querySelectorAll('.product-card').forEach(function (card) {
    var id = card.getAttribute('data-product-id');
    var row = card.querySelector('.product-in-cart');
    var qtyEl = card.querySelector('.product-in-cart-qty');
    if (!row || !qtyEl) return;
    var lines = id ? byProduct[id] : null;
    if (!lines || !lines.length) {
      row.hidden = true;
      qtyEl.textContent = '';
      return;
    }
    var parts = lines.map(function (c) {
      var p = (c.optionLabel || '—') + ' (×' + c.qty + ')';
      var sr = c.specialRequest ? String(c.specialRequest).trim() : '';
      if (sr) {
        p += ' — ' + (sr.length > 36 ? sr.slice(0, 33) + '…' : sr);
      }
      return p;
    });
    qtyEl.textContent = parts.join(' · ');
    row.hidden = false;
  });
}

var cartToastTimer = null;
var cartToastHideTimer = null;

/**
 * @param {string} message
 * @param {{ goToCart?: boolean }} [opts]
 */
function showCartToast(message, opts) {
  opts = opts || {};
  var el = document.getElementById('cart-toast');
  if (!el) return;
  if (cartToastTimer) {
    clearTimeout(cartToastTimer);
    cartToastTimer = null;
  }
  if (cartToastHideTimer) {
    clearTimeout(cartToastHideTimer);
    cartToastHideTimer = null;
  }
  el.classList.remove('is-visible', 'cart-toast--interactive');
  var durationMs = opts.goToCart ? 5200 : 2800;
  if (opts.goToCart) {
    el.innerHTML =
      '<p class="cart-toast-line">Added to cart</p>' +
      '<a class="cart-toast-goto" href="#order">Go to Cart</a>';
    el.classList.add('cart-toast--interactive');
  } else {
    el.innerHTML = '';
    el.textContent = message || '';
  }
  el.hidden = false;
  requestAnimationFrame(function () {
    el.classList.add('is-visible');
  });
  cartToastTimer = setTimeout(function () {
    el.classList.remove('is-visible');
    cartToastTimer = null;
    cartToastHideTimer = setTimeout(function () {
      if (!el.classList.contains('is-visible')) {
        el.hidden = true;
        el.innerHTML = '';
        el.textContent = '';
        el.classList.remove('cart-toast--interactive');
      }
      cartToastHideTimer = null;
    }, 360);
  }, durationMs);
}

function addToCartFromButton(btn) {
  var card = btn.closest('.product-card');
  if (!card) return;
  var id = btn.getAttribute('data-id');
  if (!id) return;
  var name = btn.getAttribute('data-name') || '';
  var price = btn.getAttribute('data-price') || '';
  var opt = readOptionFromProductCard(card);
  if (!opt.ok) {
    showCartToast(opt.error || 'Check quantity');
    return;
  }
  var srNorm = getSpecialRequestFromProductCard(card);
  var found = findCartLineByProductAndOption(id, opt.optionKey, srNorm);
  if (found) {
    found.item.qty += 1;
  } else {
    var line = {
      id: id,
      name: name,
      price: price,
      optionKey: opt.optionKey,
      optionLabel: opt.optionLabel,
      qty: 1,
    };
    if (srNorm) {
      line.specialRequest = srNorm;
    }
    cart.push(line);
  }
  renderCart();
  showCartToast('', { goToCart: true });
}

function placeOrderOnWhatsApp() {
  if (cart.length === 0) {
    window.alert('Please add at least one product to your cart.');
    return;
  }
  var nameInput = document.getElementById('order-name');
  var phoneInput = document.getElementById('order-phone');
  var addressInput = document.getElementById('order-address');
  var mapsInput = document.getElementById('order-maps-link');
  var timeInput = document.getElementById('order-time');
  if (!nameInput || !phoneInput) return;
  var customerName = nameInput.value.trim();
  var phone = phoneInput.value.trim();
  if (!customerName || !phone) {
    window.alert('Please enter your name and phone number.');
    return;
  }
  var num = getOrderWhatsAppNumber();
  if (!num) {
    window.alert('WhatsApp number is not configured. Set BREXIL_WHATSAPP_NUMBER in js/whatsapp-config.js');
    return;
  }
  var address = addressInput ? addressInput.value.trim() : '';
  var mapsLink = mapsInput ? mapsInput.value.trim() : '';
  var deliveryTime = timeInput ? timeInput.value.trim() : '';
  var lines = [
    'Hello Brexil,',
    '',
    'I would like to place the following order:',
    '',
    'Items:',
  ];
  cart.forEach(function (item) {
    var line = '- ' + item.name;
    if (item.optionLabel) {
      line += ' — ' + item.optionLabel;
    }
    line += ' (×' + item.qty + ')';
    if (item.price) line += ' — ' + item.price;
    lines.push(line);
    var req = item.specialRequest ? String(item.specialRequest).trim() : '';
    if (req) {
      lines.push('Request: ' + req);
    }
  });
  lines.push('');
  lines.push('Name: ' + customerName);
  lines.push('Phone: ' + phone);
  lines.push('Address: ' + (address || '—'));
  lines.push('Google Maps location link: ' + (mapsLink || '—'));
  lines.push('Delivery time preference: ' + (deliveryTime || '—'));
  lines.push('');
  lines.push('Thank you.');
  var text = lines.join('\n');
  var url = 'https://wa.me/' + num + '?text=' + encodeURIComponent(text);
  window.open(url, '_blank', 'noopener,noreferrer');
}

function closeMobileNavIfOpen() {
  var nav = document.getElementById('site-nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && nav.classList.contains('is-open')) {
    nav.classList.remove('is-open');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  }
}

document.addEventListener('click', function (e) {
  var t = e.target;
  if (t && t.nodeType === 3) t = t.parentElement;
  if (!t || typeof t.closest !== 'function') return;
  if (t.closest('#header-cart-link') || t.closest('.cart-toast-goto')) {
    closeMobileNavIfOpen();
  }
  var addBtn = t.closest('.add-to-cart');
  if (addBtn) {
    addToCartFromButton(addBtn);
    return;
  }
  var removeBtn = t.closest('.cart-remove');
  if (removeBtn) {
    var idx = removeBtn.getAttribute('data-line-index');
    if (idx !== null && idx !== undefined) {
      var n = parseInt(String(idx), 10);
      if (!isNaN(n) && n >= 0 && n < cart.length) {
        cart.splice(n, 1);
        renderCart();
      }
    }
    return;
  }
  if (t.closest('#place-order-wa')) {
    placeOrderOnWhatsApp();
  }
});

renderCart();

function setOrderLocationMessage(text, kind, showDeniedHelp) {
  var el = document.getElementById('order-location-status');
  var deniedExtra = document.getElementById('order-location-denied-extra');
  if (!el) return;
  el.classList.remove('form-location-status--success', 'form-location-status--error', 'form-location-status--muted');
  if (deniedExtra) {
    deniedExtra.hidden = showDeniedHelp !== true;
  }
  if (text) {
    el.textContent = text;
    el.hidden = false;
    if (kind === 'success') el.classList.add('form-location-status--success');
    else if (kind === 'error') el.classList.add('form-location-status--error');
    else if (kind === 'muted') el.classList.add('form-location-status--muted');
  } else {
    el.textContent = '';
    el.hidden = true;
    if (deniedExtra) deniedExtra.hidden = true;
  }
}

(function initOrderLocationPasteInstead() {
  var pasteBtn = document.getElementById('order-location-paste-instead');
  if (!pasteBtn) return;
  pasteBtn.addEventListener('click', function () {
    var maps = document.getElementById('order-maps-link');
    if (!maps) return;
    maps.focus();
    if (typeof maps.scrollIntoView === 'function') {
      maps.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
})();

(function initUseCurrentLocation() {
  var btn = document.getElementById('order-use-location');
  var mapsField = document.getElementById('order-maps-link');
  if (!btn) return;
  if (!navigator.geolocation) {
    btn.disabled = true;
    btn.setAttribute('title', 'Location is not available in this browser.');
    return;
  }
  btn.addEventListener('click', function () {
    if (!mapsField) return;
    setOrderLocationMessage('Getting your location…', 'muted', false);
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        var link = 'https://www.google.com/maps?q=' + lat + ',' + lon;
        mapsField.value = link;
        setOrderLocationMessage('Location added successfully.', 'success', false);
      },
      function (err) {
        if (err && err.code === 1) {
          setOrderLocationMessage(
            'Please allow location access or paste your Google Maps location for accurate delivery.',
            'error',
            true,
          );
        } else {
          setOrderLocationMessage('Location could not be captured. Please paste location manually.', 'error', false);
        }
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 },
    );
  });
})();

(function initOrderFormNoSubmit() {
  var form = document.getElementById('order-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  }
})();
