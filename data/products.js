/**
 * Brexil — product catalog (single source of truth)
 * Edit items here; the site renders from this list.
 *
 * category: 'beef' | 'chicken' | 'mutton' | 'eggs' (internal keys — keep as-is)
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

  /* Mutton */
  {
    id: 'mutton-mix',
    category: 'mutton',
    name: 'Mutton Mix',
    description: 'Balanced premium mix cuts, freshly prepared for rich home curries.',
    price: 'AED —',
    image: IMG_MUTTON,
  },
  {
    id: 'mutton-paya-cleaned',
    category: 'mutton',
    name: 'Fresh Mutton Paya (Cleaned & Ready)',
    description: 'Carefully cleaned and ready-to-cook paya with hygienic preparation.',
    price: 'AED —',
    image: IMG_MUTTON,
  },
  {
    id: 'mutton-chops',
    category: 'mutton',
    name: 'Mutton Chops',
    description: 'Premium fresh chops with quality trimming for perfect tenderness.',
    price: 'AED —',
    image: 'assets/images/mutton-chops.jpg',
  },
  {
    id: 'mutton-mince',
    category: 'mutton',
    name: 'Mutton Mince',
    description: 'Freshly minced mutton prepared with strict hygiene and consistency.',
    price: 'AED —',
    image: IMG_MUTTON,
  },
  {
    id: 'mutton-boneless-boti-tikka',
    category: 'mutton',
    name: 'Boneless Mutton (Boti / Tikka Cut)',
    description: 'Quality boneless pieces cut evenly for premium grills and curries.',
    price: 'AED —',
    image: IMG_MUTTON,
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
