/**
 * Brexil — product catalog (single source of truth)
 * Edit items here; the site renders from this list.
 *
 * category: 'beef' | 'chicken' | 'mutton' | 'lamb' | 'eggs' (internal keys — keep as-is)
 * image: Unsplash URLs (raw retail / butcher / prep — no live animals, no plated restaurant meals)
 */
var IMG_BEEF =
  'https://images.unsplash.com/photo-1603048297172-f699998208c6?auto=format&fit=crop&w=900&q=85';
var IMG_CHICKEN =
  'https://images.unsplash.com/photo-1708782342351-74f02e9a16c4?auto=format&fit=crop&w=900&q=85';
var IMG_MUTTON =
  'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=85';
var IMG_EGGS =
  'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=900&q=85';

/**
 * Mutton “today’s pick” — set productId to any mutton item id in this file, or edit that product directly.
 * Optional sectionHeading overrides the title above the featured card (same string as in index.html by default).
 */
window.BREXIL_MUTTON_FEATURED = {
  sectionHeading: "Today's Recommended Mutton Cut",
  productId: 'mutton-recommended-shoulder',
};

/**
 * Lamb “today’s pick” — same pattern as BREXIL_MUTTON_FEATURED.
 */
window.BREXIL_LAMB_FEATURED = {
  sectionHeading: "Today's Recommended Lamb Cut",
  productId: 'lamb-recommended-chops',
};

window.BREXIL_PRODUCTS = [

  /* Beef */
  {
    id: 'beef-mince-keema',
    category: 'beef',
    name: 'Beef Mince (Keema)',
    description: 'Freshly minced daily with hygienic handling for premium family meals.',
    price: 'AED —',
    image: 'https://www.freefoodphotos.com/imagelibrary/meat/slides/mince.jpg',
  },
  {
    id: 'beef-steak-cuts',
    category: 'beef',
    name: 'Beef Steak Cuts',
    description: 'Quality steak portions, carefully trimmed for tender home cooking.',
    price: 'AED —',
    image: 'assets/images/beef-steak-cuts.jpg',
  },
  {
    id: 'beef-nihari-cut',
    category: 'beef',
    name: 'Nihari Cut',
    description: 'Premium nihari pieces selected for rich flavor and slow-cooked depth.',
    price: 'AED —',
    image: 'assets/images/beef-nihari-cut.jpg',
  },
  {
    id: 'beef-bbq-cuts',
    category: 'beef',
    name: 'BBQ Cuts',
    description: 'Clean, quality barbecue cuts prepared for grills and gatherings.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'beef-paya',
    category: 'beef',
    name: 'Beef Paya',
    description: 'Thoroughly cleaned paya, fresh and hygienic for traditional recipes.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1625944525903-dc5cdd0a2f03?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'beef-boneless-boti-tikka',
    category: 'beef',
    name: 'Boneless Beef (Boti / Tikka Cut)',
    description: 'Premium boneless cubes cut evenly for tikka, curry, and stir-fry.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=85',
  },

  /* Chicken */
  {
    id: 'chicken-fresh-broiler',
    category: 'chicken',
    name: 'Fresh Broiler Chicken',
    description: 'Fresh daily broiler chicken, hygienically cleaned and chilled.',
    price: 'AED —',
    image: 'assets/images/chicken-fresh-broiler.jpg',
  },
  {
    id: 'chicken-desi-on-order',
    category: 'chicken',
    name: 'Freshly Slaughtered Desi Chicken (On Order)',
    description: 'Prepared on request with premium hygiene and careful handling.',
    price: 'AED —',
    image: IMG_CHICKEN,
  },
  {
    id: 'chicken-boneless',
    category: 'chicken',
    name: 'Chicken Boneless',
    description: 'Quality boneless cuts, neatly trimmed for quick and clean cooking.',
    price: 'AED —',
    image: 'assets/images/chicken-boneless.jpg',
  },
  {
    id: 'chicken-mince',
    category: 'chicken',
    name: 'Chicken Mince',
    description: 'Fresh premium mince prepared in hygienic batches for daily recipes.',
    price: 'AED —',
    image: IMG_CHICKEN,
  },
  {
    id: 'chicken-drumsticks',
    category: 'chicken',
    name: 'Chicken Drumsticks',
    description: 'Juicy, quality drumsticks cleaned well and packed with care.',
    price: 'AED —',
    image: IMG_CHICKEN,
  },
  {
    id: 'chicken-wings',
    category: 'chicken',
    name: 'Chicken Wings',
    description: 'Fresh hygienic wings in premium portions for family platters.',
    price: 'AED —',
    image: IMG_CHICKEN,
  },

  /* Mutton — featured (not tied to an origin row); edited via BREXIL_MUTTON_FEATURED.productId */
  {
    id: 'mutton-recommended-shoulder',
    category: 'mutton',
    muttonFeatured: true,
    name: 'Mutton Shoulder – Fresh Cut',
    description: 'Recommended for curry, slow cooking, and family meals.',
    price: 'AED —',
    image: 'assets/images/mutton-recommended.jpg',
  },

  /* Mutton — Pakistani */
  {
    id: 'mutton-pk-curry-cut',
    category: 'mutton',
    muttonOrigin: 'pakistani',
    name: 'Pakistani Mutton Curry Cut',
    description: 'Classic bone-in pieces for everyday curries and slow cooking.',
    price: 'AED —',
    image: 'assets/images/mutton-pk-curry-cut.jpg',
  },
  {
    id: 'mutton-pk-boneless',
    category: 'mutton',
    muttonOrigin: 'pakistani',
    name: 'Pakistani Mutton Boneless',
    description: 'Neat boneless cuts for quick meals and even cooking.',
    price: 'AED —',
    image: 'assets/images/mutton-pk-boneless.jpg',
  },
  {
    id: 'mutton-pk-leg',
    category: 'mutton',
    muttonOrigin: 'pakistani',
    name: 'Pakistani Mutton Leg',
    description: 'Lean leg portions ideal for roasting or rich curries.',
    price: 'AED —',
    image: 'assets/images/mutton-pk-leg.jpg',
  },
  {
    id: 'mutton-pk-chops',
    category: 'mutton',
    muttonOrigin: 'pakistani',
    name: 'Pakistani Mutton Chops',
    description: 'Premium chops with careful trimming for tenderness.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },
  {
    id: 'mutton-pk-mince',
    category: 'mutton',
    muttonOrigin: 'pakistani',
    name: 'Pakistani Mutton Mince',
    description: 'Fresh mince prepared with consistent texture for keema dishes.',
    price: 'AED —',
    image: 'assets/images/mutton-pk-mince.jpg',
  },

  /* Mutton — Indian */
  {
    id: 'mutton-in-curry-cut',
    category: 'mutton',
    muttonOrigin: 'indian',
    name: 'Indian Mutton Curry Cut',
    description: 'Balanced cuts suited to regional curries and slow braises.',
    price: 'AED —',
    image: 'assets/images/mutton-in-curry-cut.jpg',
  },
  {
    id: 'mutton-in-boneless',
    category: 'mutton',
    muttonOrigin: 'indian',
    name: 'Indian Mutton Boneless',
    description: 'Boneless portions for grills, stir-fry, and tender curries.',
    price: 'AED —',
    image: 'assets/images/mutton-in-boneless.jpg',
  },
  {
    id: 'mutton-in-leg',
    category: 'mutton',
    muttonOrigin: 'indian',
    name: 'Indian Mutton Leg',
    description: 'Versatile leg cuts for roasting or hearty family recipes.',
    price: 'AED —',
    image: 'assets/images/mutton-in-leg.jpg',
  },
  {
    id: 'mutton-in-shoulder',
    category: 'mutton',
    muttonOrigin: 'indian',
    name: 'Indian Mutton Shoulder',
    description: 'Rich shoulder meat — excellent for slow cooking and flavourful gravies.',
    price: 'AED —',
    image: 'assets/images/mutton-in-shoulder.jpg',
  },

  /* Mutton — African origin */
  {
    id: 'mutton-af-curry-cut',
    category: 'mutton',
    muttonOrigin: 'african',
    name: 'African Origin Mutton Curry Cut',
    description: 'Hearty curry-cut pieces with robust flavour for slow cooking.',
    price: 'AED —',
    image: 'assets/images/mutton-af-curry-cut.jpg',
  },
  {
    id: 'mutton-af-leg',
    category: 'mutton',
    muttonOrigin: 'african',
    name: 'African Origin Mutton Leg',
    description: 'Lean leg cuts suitable for roasting and traditional curries.',
    price: 'AED —',
    image: 'assets/images/mutton-af-leg.jpg',
  },
  {
    id: 'mutton-af-shoulder',
    category: 'mutton',
    muttonOrigin: 'african',
    name: 'African Origin Mutton Shoulder',
    description: 'Shoulder portions ideal for rich gravies and family-sized meals.',
    price: 'AED —',
    image: 'assets/images/mutton-af-shoulder.jpg',
  },
  {
    id: 'mutton-af-half-whole-carcass',
    category: 'mutton',
    muttonOrigin: 'african',
    name: 'African Origin Mutton Half / Whole Carcass',
    description: 'For larger household orders — confirm portion size on WhatsApp.',
    price: 'AED —',
    image: 'assets/images/mutton-af-carcass.jpg',
  },

  /* Lamb — featured (hub detail only; not tied to an origin row) */
  {
    id: 'lamb-recommended-chops',
    category: 'lamb',
    lambFeatured: true,
    name: 'Lamb Chops – Fresh Cut',
    description: 'Tender chops — excellent on the grill or in the oven.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },

  /* Lamb — Australian / New Zealand */
  {
    id: 'lamb-au-chops',
    category: 'lamb',
    lambOrigin: 'aus-nz',
    name: 'Lamb Chops',
    description: 'Premium chops with mild flavour — perfect for quick family meals.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },
  {
    id: 'lamb-au-leg',
    category: 'lamb',
    lambOrigin: 'aus-nz',
    name: 'Lamb Leg',
    description: 'Lean leg cuts ideal for roasting or slow Sunday dinners.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },
  {
    id: 'lamb-au-shoulder',
    category: 'lamb',
    lambOrigin: 'aus-nz',
    name: 'Lamb Shoulder',
    description: 'Rich shoulder meat for slow cooking and hearty flavours.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },
  {
    id: 'lamb-au-rack',
    category: 'lamb',
    lambOrigin: 'aus-nz',
    name: 'Lamb Rack',
    description: 'Elegant rack portions for grilling or oven roasting.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },
  {
    id: 'lamb-au-mince',
    category: 'lamb',
    lambOrigin: 'aus-nz',
    name: 'Lamb Mince',
    description: 'Fresh lamb mince for keema, kofta, and everyday recipes.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },

  /* Lamb — Sudanese / East African */
  {
    id: 'lamb-sudan-curry-cut',
    category: 'lamb',
    lambOrigin: 'sudan-east-africa',
    name: 'Lamb Curry Cut',
    description: 'Bone-in curry pieces from Sudan/Ethiopia-region style supply — hearty and aromatic.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },
  {
    id: 'lamb-sudan-shoulder',
    category: 'lamb',
    lambOrigin: 'sudan-east-africa',
    name: 'Lamb Shoulder',
    description: 'Shoulder portions suited to bold curries and long simmers.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },
  {
    id: 'lamb-sudan-leg',
    category: 'lamb',
    lambOrigin: 'sudan-east-africa',
    name: 'Lamb Leg',
    description: 'Versatile leg cuts for roasting or generous family trays.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },
  {
    id: 'lamb-sudan-whole-half',
    category: 'lamb',
    lambOrigin: 'sudan-east-africa',
    name: 'Whole / Half Lamb',
    description: 'Larger formats for gatherings — portion and availability on WhatsApp.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },

  /* Eggs */
  {
    id: 'eggs-white-medium-large',
    category: 'eggs',
    name: 'White Eggs (Medium / Large)',
    description: 'Fresh white eggs, hygienically packed for daily family use.',
    price: 'AED —',
    image: IMG_EGGS,
  },
  {
    id: 'eggs-brown',
    category: 'eggs',
    name: 'Brown Eggs',
    description: 'Premium brown eggs selected for freshness, quality, and clean handling.',
    price: 'AED —',
    image: IMG_EGGS,
  },
  {
    id: 'eggs-organic',
    category: 'eggs',
    name: 'Organic Eggs',
    description: 'Quality organic eggs supplied fresh and packed with hygienic care.',
    price: 'AED —',
    image: IMG_EGGS,
  },
  {
    id: 'eggs-desi-farm-fresh',
    category: 'eggs',
    name: 'Farm Fresh Desi Eggs',
    description: 'Farm-fresh desi eggs for households seeking premium everyday nutrition.',
    price: 'AED —',
    image: IMG_EGGS,
  },
];
