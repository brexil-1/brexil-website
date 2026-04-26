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
