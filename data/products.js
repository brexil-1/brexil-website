/**
 * Brexil — product catalog (single source of truth)
 * Edit items here; the site renders from this list.
 *
 * category: 'beef' | 'chicken' | 'eggs' | 'ready-cut' | 'combo' (internal keys — keep as-is)
 * image: Unsplash URLs (raw retail / butcher / prep — no live animals, no plated restaurant meals)
 */
window.BREXIL_PRODUCTS = [
  /* Beef */
  {
    id: 'beef-mince',
    category: 'beef',
    name: 'Premium Beef Mince',
    description: 'Lean mince for kofta, burgers, and everyday cooking.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1612078894671-f11ba41d713e?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'beef-cubes',
    category: 'beef',
    name: 'Beef Cubes for Stew',
    description: 'Even cubes, trimmed for curries and slow cooks.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1616689079156-8e8e1a25a923?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'beef-steak',
    category: 'beef',
    name: 'Steak Cuts',
    description: 'Selected cuts for grilling and pan-searing at home.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85',
  },

  /* Chicken — raw poultry only */
  {
    id: 'chicken-whole',
    category: 'chicken',
    name: 'Whole Chicken',
    description: 'Fresh whole bird, cleaned and chilled.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1708782342351-74f02e9a16c4?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'chicken-breast',
    category: 'chicken',
    name: 'Chicken Breast',
    description: 'Skinless breast fillets for salads, grills, and weekday meals.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'chicken-wings',
    category: 'chicken',
    name: 'Chicken Wings',
    description: 'Party-ready wings for the oven or air fryer.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1759493321741-883fbf9f433c?auto=format&fit=crop&w=900&q=85',
  },

  /* Eggs */
  {
    id: 'eggs-tray-30',
    category: 'eggs',
    name: 'Fresh Eggs — 30 Tray',
    description: 'Farm-fresh eggs, handled with care.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'eggs-tray-15',
    category: 'eggs',
    name: 'Fresh Eggs — 15 Tray',
    description: 'A compact tray for smaller households.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1590577976322-484d032b9db2?auto=format&fit=crop&w=900&q=85',
  },

  /* Ready-cut — prepared raw portions */
  {
    id: 'ready-strips',
    category: 'ready-cut',
    name: 'Stir-Fry Strips',
    description: 'Pre-cut strips for the wok and quick dinners.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc353d2d5?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'ready-diced',
    category: 'ready-cut',
    name: 'Diced Mixed Pack',
    description: 'Time-saving diced portions for busy weeknights.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1600180786608-28d06391d25c?auto=format&fit=crop&w=900&q=85',
  },

  /* Combo deals */
  {
    id: 'combo-burger-kit',
    category: 'combo',
    name: 'Burger Kit',
    description: 'Patties, burger-ready mince, and essentials for burger night at home.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1578000506877-bc947ed8dcc7?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'combo-bbq-pack',
    category: 'combo',
    name: 'BBQ Pack',
    description: 'Mixed cuts and skewer-friendly pieces for the grill.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1770838519139-913994813534?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'combo-nihari-pack',
    category: 'combo',
    name: 'Nihari Pack',
    description: 'Cuts chosen for rich, slow-cooked nihari and stews.',
    price: 'AED —',
    image:
      'https://images.unsplash.com/photo-1678127095367-f776ac0601bc?auto=format&fit=crop&w=900&q=85',
  },
];
