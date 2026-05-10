/**
 * Brexil — product catalog (single source of truth)
 * Edit items here; the site renders from this list.
 *
 * category: 'beef' | 'chicken' | 'mutton' | 'lamb' | 'eggs' (internal keys — keep as-is)
 * eggsOrigin (eggs only): 'white' | 'brown' | 'organic-farm' — matches data-eggs-view-origin in index.html
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

/**
 * Beef “today’s pick” — set productId to any beef sku below (not paya-only rows), or edit that product.
 */
window.BREXIL_BEEF_FEATURED = {
  sectionHeading: "Today's Recommended Beef Cut",
  productId: 'beef-featured-striploin',
};

/**
 * Chicken “today’s pick” — set productId to any chicken sku in this file, or edit that product.
 */
window.BREXIL_CHICKEN_FEATURED = {
  sectionHeading: "Today's Recommended Chicken Cut",
  productId: 'chicken-featured-boneless-cubes',
};

/**
 * Eggs “today’s pick” — set productId to any eggs sku below (not featured-only duplicates), or edit that product.
 */
window.BREXIL_EGGS_FEATURED = {
  sectionHeading: "Today's Recommended Eggs",
  productId: 'eggs-featured-brown-farm',
};

window.BREXIL_PRODUCTS = [

  /* Beef — featured (hub detail only) */
  {
    id: 'beef-featured-striploin',
    category: 'beef',
    beefFeatured: true,
    name: 'Premium Striploin – Australian',
    description: 'Marbled striploin suited to grilling and premium home dinners.',
    price: 'AED —',
    image: 'assets/images/beef-steak-cuts.jpg',
  },

  /* Beef — Pakistani Traditional */
  {
    id: 'beef-pk-nihari',
    category: 'beef',
    beefOrigin: 'pk-traditional',
    name: 'Beef Nihari Cut',
    description: 'Traditional cuts ideal for nihari, curry, mince, BBQ, and everyday family cooking.',
    price: 'AED —',
    image: 'assets/images/beef-nihari-cut.jpg',
  },
  {
    id: 'beef-pk-mince',
    category: 'beef',
    beefOrigin: 'pk-traditional',
    name: 'Beef Mince',
    description: 'Fresh mince for keema, stuffing, and daily curries.',
    price: 'AED —',
    image: IMG_BEEF,
  },
  {
    id: 'beef-pk-bbq',
    category: 'beef',
    beefOrigin: 'pk-traditional',
    name: 'Beef BBQ Cut',
    description: 'Bone-in and balanced pieces for grills and charcoal cooking.',
    price: 'AED —',
    image: 'assets/images/beef-steak-cuts.jpg',
  },
  {
    id: 'beef-pk-boneless-curry',
    category: 'beef',
    beefOrigin: 'pk-traditional',
    name: 'Boneless Curry Cut',
    description: 'Boneless pieces cut for even cooking in rich gravies.',
    price: 'AED —',
    image: IMG_BEEF,
  },

  /* Beef — Brazilian Premium */
  {
    id: 'beef-br-ribeye',
    category: 'beef',
    beefOrigin: 'brazilian',
    name: 'Ribeye Steak',
    description: 'Premium beef selected for steaks, grilling, and tender everyday cooking.',
    price: 'AED —',
    image: 'assets/images/beef-steak-cuts.jpg',
  },
  {
    id: 'beef-br-tenderloin',
    category: 'beef',
    beefOrigin: 'brazilian',
    name: 'Tenderloin',
    description: 'Lean tenderloin portions for quick searing or roasting.',
    price: 'AED —',
    image: IMG_BEEF,
  },
  {
    id: 'beef-br-steak-cut',
    category: 'beef',
    beefOrigin: 'brazilian',
    name: 'Steak Cut',
    description: 'Versatile steak portions trimmed for the grill or pan.',
    price: 'AED —',
    image: 'assets/images/beef-steak-cuts.jpg',
  },
  {
    id: 'beef-br-boneless-cubes',
    category: 'beef',
    beefOrigin: 'brazilian',
    name: 'Boneless Beef Cubes',
    description: 'Even cubes for stir-fry, tikka-style prep, and fast meals.',
    price: 'AED —',
    image: IMG_BEEF,
  },
  {
    id: 'beef-br-bbq-premium',
    category: 'beef',
    beefOrigin: 'brazilian',
    name: 'BBQ Premium Cuts',
    description: 'Selected premium barbecue cuts for gatherings.',
    price: 'AED —',
    image: 'assets/images/beef-steak-cuts.jpg',
  },

  /* Beef — Australian Premium */
  {
    id: 'beef-au-premium-ribeye',
    category: 'beef',
    beefOrigin: 'australian',
    name: 'Premium Ribeye',
    description: 'Premium beef known for tenderness, marbling, and rich flavour.',
    price: 'AED —',
    image: 'assets/images/beef-steak-cuts.jpg',
  },
  {
    id: 'beef-au-striploin',
    category: 'beef',
    beefOrigin: 'australian',
    name: 'Striploin',
    description: 'Balanced marbling — ideal for steaks and roasting.',
    price: 'AED —',
    image: IMG_BEEF,
  },
  {
    id: 'beef-au-tenderloin',
    category: 'beef',
    beefOrigin: 'australian',
    name: 'Tenderloin',
    description: 'Buttery tenderloin for premium home cooking.',
    price: 'AED —',
    image: 'assets/images/beef-steak-cuts.jpg',
  },
  {
    id: 'beef-au-steak-selection',
    category: 'beef',
    beefOrigin: 'australian',
    name: 'Steak Selection',
    description: 'Curated steak selection — confirm preferred thickness on WhatsApp.',
    price: 'AED —',
    image: IMG_BEEF,
  },

  /* Beef — Buffalo Meat Essentials */
  {
    id: 'beef-buf-boneless',
    category: 'beef',
    beefOrigin: 'buffalo',
    name: 'Buffalo Boneless',
    description: 'Budget-friendly buffalo boneless options for curries and everyday cooking.',
    price: 'AED —',
    image: IMG_BEEF,
  },
  {
    id: 'beef-buf-mince',
    category: 'beef',
    beefOrigin: 'buffalo',
    name: 'Buffalo Mince',
    description: 'Hearty mince for keema and bulk family recipes.',
    price: 'AED —',
    image: 'assets/images/beef-nihari-cut.jpg',
  },
  {
    id: 'beef-buf-curry-cut',
    category: 'beef',
    beefOrigin: 'buffalo',
    name: 'Buffalo Curry Cut',
    description: 'Bone-in curry pieces suited to slow-simmered dishes.',
    price: 'AED —',
    image: IMG_BEEF,
  },

  /* Beef — Paya (separate from origin rows above) */
  {
    id: 'beef-paya-indo-pk',
    category: 'beef',
    beefOrigin: 'paya-indo-pk',
    name: 'Indian / Pakistani Beef Paya',
    description: 'Cleaned paya suited to traditional nihari-style and slow-cooked recipes.',
    price: 'AED —',
    image: 'assets/images/beef-nihari-cut.jpg',
  },
  {
    id: 'beef-paya-au-br',
    category: 'beef',
    beefOrigin: 'paya-au-br',
    name: 'Australian / Brazilian Beef Paya',
    description: 'Paya sourced via Australian / Brazilian supply channels — confirm on WhatsApp.',
    price: 'AED —',
    image: IMG_BEEF,
  },

  /* Chicken — featured (hub detail only) */
  {
    id: 'chicken-featured-boneless-cubes',
    category: 'chicken',
    chickenFeatured: true,
    name: 'Chicken Boneless Cubes – Fresh Cut',
    description: 'Neat boneless cubes — ideal for quick curries, stir-fry, and meal prep.',
    price: 'AED —',
    image: 'assets/images/chicken-boneless.jpg',
  },

  /* Chicken — Fresh Whole Chicken */
  {
    id: 'chicken-whole-small',
    category: 'chicken',
    chickenOrigin: 'whole',
    name: 'Small Chicken',
    description: 'Fresh whole chicken cleaned and prepared for everyday cooking and family meals.',
    price: 'AED —',
    image: 'assets/images/chicken-fresh-broiler.jpg',
  },
  {
    id: 'chicken-whole-medium',
    category: 'chicken',
    chickenOrigin: 'whole',
    name: 'Medium Chicken',
    description: 'Fresh whole chicken cleaned and prepared for everyday cooking and family meals.',
    price: 'AED —',
    image: 'assets/images/chicken-fresh-broiler.jpg',
  },
  {
    id: 'chicken-whole-large',
    category: 'chicken',
    chickenOrigin: 'whole',
    name: 'Large Chicken',
    description: 'Fresh whole chicken cleaned and prepared for everyday cooking and family meals.',
    price: 'AED —',
    image: 'assets/images/chicken-fresh-broiler.jpg',
  },

  /* Chicken — Boneless & Fillet Cuts */
  {
    id: 'chicken-breast-fillet',
    category: 'chicken',
    chickenOrigin: 'boneless-fillet',
    name: 'Chicken Breast Fillet',
    description: 'Convenient boneless chicken cuts prepared for quick cooking, grilling, and meal prep.',
    price: 'AED —',
    image: 'assets/images/chicken-boneless.jpg',
  },
  {
    id: 'chicken-boneless-cubes',
    category: 'chicken',
    chickenOrigin: 'boneless-fillet',
    name: 'Chicken Boneless Cubes',
    description: 'Convenient boneless chicken cuts prepared for quick cooking, grilling, and meal prep.',
    price: 'AED —',
    image: 'assets/images/chicken-boneless.jpg',
  },
  {
    id: 'chicken-strips',
    category: 'chicken',
    chickenOrigin: 'boneless-fillet',
    name: 'Chicken Strips',
    description: 'Convenient boneless chicken cuts prepared for quick cooking, grilling, and meal prep.',
    price: 'AED —',
    image: IMG_CHICKEN,
  },
  {
    id: 'chicken-mince',
    category: 'chicken',
    chickenOrigin: 'boneless-fillet',
    name: 'Chicken Mince',
    description: 'Convenient boneless chicken cuts prepared for quick cooking, grilling, and meal prep.',
    price: 'AED —',
    image: IMG_CHICKEN,
  },

  /* Chicken — BBQ & Grill Selection */
  {
    id: 'chicken-bbq-cut',
    category: 'chicken',
    chickenOrigin: 'bbq-grill',
    name: 'Chicken BBQ Cut',
    description: 'Selected chicken cuts ideal for BBQ, grilling, frying, and restaurant-style cooking.',
    price: 'AED —',
    image: 'assets/images/chicken-fresh-broiler.jpg',
  },
  {
    id: 'chicken-wings',
    category: 'chicken',
    chickenOrigin: 'bbq-grill',
    name: 'Chicken Wings',
    description: 'Selected chicken cuts ideal for BBQ, grilling, frying, and restaurant-style cooking.',
    price: 'AED —',
    image: IMG_CHICKEN,
  },
  {
    id: 'chicken-drumsticks',
    category: 'chicken',
    chickenOrigin: 'bbq-grill',
    name: 'Chicken Drumsticks',
    description: 'Selected chicken cuts ideal for BBQ, grilling, frying, and restaurant-style cooking.',
    price: 'AED —',
    image: IMG_CHICKEN,
  },
  {
    id: 'chicken-thighs',
    category: 'chicken',
    chickenOrigin: 'bbq-grill',
    name: 'Chicken Thighs',
    description: 'Selected chicken cuts ideal for BBQ, grilling, frying, and restaurant-style cooking.',
    price: 'AED —',
    image: 'assets/images/chicken-boneless.jpg',
  },

  /* Chicken — Premium / Farm Chicken */
  {
    id: 'chicken-desi',
    category: 'chicken',
    chickenOrigin: 'premium-farm',
    name: 'Desi Chicken',
    description: 'Carefully sourced farm-style chicken with richer texture and traditional taste.',
    price: 'AED —',
    image: IMG_CHICKEN,
  },
  {
    id: 'chicken-farm-fresh',
    category: 'chicken',
    chickenOrigin: 'premium-farm',
    name: 'Farm Fresh Chicken',
    description: 'Carefully sourced farm-style chicken with richer texture and traditional taste.',
    price: 'AED —',
    image: 'assets/images/chicken-fresh-broiler.jpg',
  },
  {
    id: 'chicken-fresh-slaughtered',
    category: 'chicken',
    chickenOrigin: 'premium-farm',
    name: 'Freshly Slaughtered Chicken',
    description: 'Carefully sourced farm-style chicken with richer texture and traditional taste.',
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

  /* Eggs — featured (hub detail only) */
  {
    id: 'eggs-featured-brown-farm',
    category: 'eggs',
    eggsFeatured: true,
    name: 'Fresh Brown Eggs – Farm Selection',
    description: 'Premium brown eggs selected for consistent freshness and everyday cooking.',
    price: 'AED —',
    image: IMG_EGGS,
  },

  /* Eggs — White */
  {
    id: 'eggs-white-medium-tray',
    category: 'eggs',
    eggsOrigin: 'white',
    name: 'White Eggs Medium Tray',
    description: 'Fresh white eggs for everyday household and restaurant use.',
    price: 'AED —',
    image: IMG_EGGS,
  },
  {
    id: 'eggs-white-large-tray',
    category: 'eggs',
    eggsOrigin: 'white',
    name: 'White Eggs Large Tray',
    description: 'Fresh white eggs for everyday household and restaurant use.',
    price: 'AED —',
    image: IMG_EGGS,
  },

  /* Eggs — Brown */
  {
    id: 'eggs-brown-medium-tray',
    category: 'eggs',
    eggsOrigin: 'brown',
    name: 'Brown Eggs Medium Tray',
    description: 'Premium brown eggs with rich taste and reliable freshness.',
    price: 'AED —',
    image: IMG_EGGS,
  },
  {
    id: 'eggs-brown-large-tray',
    category: 'eggs',
    eggsOrigin: 'brown',
    name: 'Brown Eggs Large Tray',
    description: 'Premium brown eggs with rich taste and reliable freshness.',
    price: 'AED —',
    image: IMG_EGGS,
  },

  /* Eggs — Organic / Farm */
  {
    id: 'eggs-organic',
    category: 'eggs',
    eggsOrigin: 'organic-farm',
    name: 'Organic Eggs',
    description: 'Farm-style eggs selected for freshness and natural quality.',
    price: 'AED —',
    image: 'assets/images/eggs-farm-origin.png',
  },
  {
    id: 'eggs-free-range',
    category: 'eggs',
    eggsOrigin: 'organic-farm',
    name: 'Free Range Eggs',
    description: 'Farm-style eggs selected for freshness and natural quality.',
    price: 'AED —',
    image: 'assets/images/eggs-farm-origin.png',
  },
];
