/* ============================================================
   PowerNest — script.js
   Populates: sidebar, hero, product grids, stats, brands, trust badges
   Handles: mobile hamburger menu, mobile search toggle, responsive hero
   ============================================================ */

// ── DATA ────────────────────────────────────────────────────

const CATEGORIES = [
  {
    icon: 'fas fa-th-large',
    label: 'All Products',
    count: 40,
    href: '/products.html'
  },
  {
    icon: 'fas fa-wind',
    label: 'Air Conditioners',
    count: 8,
    href: '/products.html?cat=air-conditioners'
  },
  {
    icon: 'fas fa-solar-panel',
    label: 'Solar Panels',
    count: 6,
    href: '/products.html?cat=solar-panels'
  },
  {
    icon: 'fas fa-tv',
    label: 'Televisions',
    count: 5,
    href: '/products.html?cat=televisions'
  },
  {
    icon: 'fas fa-snowflake',
    label: 'Refrigerators',
    count: 5,
    href: '/products.html?cat=refrigerators'
  },
  {
    icon: 'fas fa-soap',
    label: 'Washing Machines',
    count: 4,
    href: '/products.html?cat=washing-machines'
  },
  {
    icon: 'fas fa-tint',
    label: 'Water Purifiers',
    count: 3,
    href: '/products.html?cat=water-purifiers'
  },
  {
    icon: 'fas fa-kitchen-set',
    label: 'Kitchen Cabinets',
    count: 4,
    href: '/products.html?cat=kitchen-cabinets'
  },
  {
    icon: 'fas fa-lightbulb',
    label: 'Lighting & Fixtures',
    count: 5,
    href: '/products.html?cat=lighting-fixtures'
  }
];

const HERO_SLIDES = [
  {
    bg: 'linear-gradient(120deg,#003087 0%,#0050c8 60%,#1a6fff 100%)',
    tag: 'New Arrival',
    tagColor: '#F5A623',
    title: 'Daikin Inverter<br>Split AC — 2.5 HP',
    sub: 'R-32 Refrigerant · 5-Star Energy · WiFi Control',
    price: '$689',
    badge: 'Save 18%',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=380&q=80',
    cta: 'Shop Now',
    href: '/products.html?cat=ac',
  },
  {
    bg: 'linear-gradient(120deg,#0a5e2a 0%,#1a8a3e 55%,#22c55e 100%)',
    tag: 'Solar Season',
    tagColor: '#fff',
    title: '400W Monocrystalline<br>Solar Panel Kit',
    sub: 'Grid-Tie &amp; Off-Grid Ready · 25-Year Warranty',
    price: '$1,299',
    badge: 'Bundle Deal',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=380&q=80',
    cta: 'Explore Solar',
    href: '/solar.html',
  },
  {
    bg: 'linear-gradient(120deg,#4a0080 0%,#7c00c0 55%,#a855f7 100%)',
    tag: 'Premium Pick',
    tagColor: '#F5A623',
    title: 'Samsung 85" QLED<br>4K Smart TV',
    sub: 'Quantum Matrix · Neural Quantum · Tizen OS',
    price: '$2,499',
    badge: 'Free Delivery',
    img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=380&q=80',
    cta: 'View Details',
    href: '/products.html?cat=tv',
  },
];

const PRODUCTS_BROWSING = [
  { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=75', label: 'Daikin 2.5HP Inverter AC', brand: 'Daikin', price: '$689', old: '$840', badge: 'HOT', badgeClass: 'badge-hot' },
  { img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&q=75', label: 'Samsung 65" QLED 4K', brand: 'Samsung', price: '$1,299', old: '$1,599', badge: 'SALE', badgeClass: 'badge-sale' },
  { img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&q=75', label: '400W Solar Panel Mono', brand: 'Fujita', price: '$229', old: '$280', badge: 'NEW', badgeClass: 'badge-new' },
  { img: 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=200&q=75', label: 'LG 550L French Door Fridge', brand: 'LG', price: '$1,450', old: '$1,800', badge: 'HOT', badgeClass: 'badge-hot' },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=75', label: 'Panasonic 10kg Washer', brand: 'Panasonic', price: '$399', old: '$480', badge: null },
  { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=75', label: 'Hitachi 3HP Cassette AC', brand: 'Hitachi', price: '$980', old: '$1,150', badge: 'SALE', badgeClass: 'badge-sale' },
  { img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&q=75', label: 'TCL 55" 4K Android TV', brand: 'TCL', price: '$519', old: '$649', badge: null },
  { img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&q=75', label: '5kW Solar Inverter Hybrid', brand: 'SEC', price: '$760', old: '$920', badge: 'HOT', badgeClass: 'badge-hot' },
  { img: 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=200&q=75', label: 'Sharp 320L Upright Fridge', brand: 'Sharp', price: '$590', old: '$720', badge: null },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=75', label: 'Panasonic Air Fryer 6L', brand: 'Panasonic', price: '$129', old: '$165', badge: 'NEW', badgeClass: 'badge-new' },
];

const TRENDING_CATEGORIES = [
  { label: 'Televisions',        sub: '240+ Models', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80', large: true },
  { label: 'Split Air Conditioners', sub: '180+ Models', img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=320&q=80', large: false },
  { label: 'Solar Panels',       sub: '90+ SKUs',   img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=320&q=80', large: false },
  { label: 'Air Fryers',         sub: '60+ Models', img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=320&q=80', large: false },
  { label: 'Refrigerators',      sub: '150+ Models',img: 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=320&q=80', large: false },
  { label: 'Washing Machines',   sub: '80+ Models', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=320&q=80', large: false },
  { label: 'Water Purifiers',    sub: '45+ Models', img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=320&q=80', large: false },
];

const TOP_PICKS = [
  { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=75', label: 'Daikin 1.5HP Inverter R32', brand: 'Daikin', price: '$499', old: '$620', badge: '⭐ Best Seller', badgeClass: 'badge-sale' },
  { img: 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=200&q=75', label: 'Samsung 450L Fridge Twin', brand: 'Samsung', price: '$1,140', old: '$1,390', badge: 'HOT', badgeClass: 'badge-hot' },
  { img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&q=75', label: 'Philips 75" Ambilight TV', brand: 'Philips', price: '$1,899', old: '$2,299', badge: 'NEW', badgeClass: 'badge-new' },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=75', label: 'Electrolux 9kg Front Load', brand: 'Electrolux', price: '$620', old: '$760', badge: null },
  { img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&q=75', label: '600W Bifacial Solar Panel', brand: 'Fujita', price: '$320', old: '$390', badge: '⭐ Best Seller', badgeClass: 'badge-sale' },
  { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=75', label: 'Midea 2HP Ceiling Cassette', brand: 'Midea', price: '$740', old: '$890', badge: 'HOT', badgeClass: 'badge-hot' },
  { img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&q=75', label: 'Sony Bravia XR 65" OLED', brand: 'Sony', price: '$2,199', old: '$2,799', badge: null },
  { img: 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=200&q=75', label: 'LG Dishwasher 14 Place', brand: 'LG', price: '$499', old: '$620', badge: 'SALE', badgeClass: 'badge-sale' },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=75', label: 'Tefal Air Fryer XL 8L', brand: 'Tefal', price: '$99', old: '$130', badge: 'NEW', badgeClass: 'badge-new' },
  { img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&q=75', label: '10kW Lithium Battery Storage', brand: 'SEC', price: '$2,950', old: '$3,500', badge: '⭐ Best Seller', badgeClass: 'badge-sale' },
];

const FRESH_ADDITIONS = [
  { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=75', label: 'Fujita 2HP Inverter R410A', brand: 'Fujita', price: '$510', old: '$620' },
  { img: 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=200&q=75', label: 'Beko 380L Side-By-Side', brand: 'Beko', price: '$870', old: '$1,050' },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=75', label: 'Midea 8kg Dryer Condenser', brand: 'Midea', price: '$460', old: '$560' },
  { img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&q=75', label: 'Fujita 550W Mono Half-Cell', brand: 'Fujita', price: '$260', old: '$320' },
  { img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&q=75', label: 'TCL 43" FHD LED TV', brand: 'TCL', price: '$299', old: '$380' },
  { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=75', label: 'Panasonic 1HP Wall AC', brand: 'Panasonic', price: '$340', old: '$420' },
  { img: 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=200&q=75', label: 'LG 260L Upright Freezer', brand: 'LG', price: '$520', old: '$640' },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=75', label: 'Electrolux 10kg TwinWash', brand: 'Electrolux', price: '$720', old: '$890' },
  { img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&q=75', label: 'GoodWe 5kW Hybrid Inverter', brand: 'GoodWe', price: '$690', old: '$850' },
  { img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&q=75', label: 'Hisense 50" 4K ULED TV', brand: 'Hisense', price: '$389', old: '$490' },
  { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=75', label: 'Daikin 3HP Ceiling Cassette', brand: 'Daikin', price: '$1,290', old: '$1,560' },
  { img: 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=200&q=75', label: 'Browse View All New In →', brand: '', price: null, old: null, isViewAll: true },
];

const EXPERT_PICKS = [
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=75', label: 'Brita Maxtra Water Filter', brand: 'Brita', price: '$105', old: '$130', expert: true },
  { img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&q=75', label: 'Fronius 6kW Grid Solar Inv.', brand: 'Fronius', price: '$1,490', old: '$1,800', expert: true },
  { img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&q=75', label: 'Samsung Frame TV 55"', brand: 'Samsung', price: '$1,099', old: '$1,350', expert: true },
  { img: 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=200&q=75', label: 'TCL 450L Top Mount Fridge', brand: 'TCL', price: '$499', old: '$620', expert: true },
  { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=75', label: 'Panasonic 1.5HP NanoeX AC', brand: 'Panasonic', price: '$680', old: '$820', expert: true },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=75', label: 'Tefal Pressure Cooker 8L', brand: 'Tefal', price: '$89', old: '$115', expert: true },
  { img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&q=75', label: 'LG ThinQ 1HP Dual Inverter', brand: 'LG', price: '$590', old: '$720', expert: true },
  { img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&q=75', label: 'Sony HT-A7000 Soundbar', brand: 'Sony', price: '$1,299', old: '$1,599', expert: true },
  { img: 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=200&q=75', label: 'Panasonic 14kg Top Load', brand: 'Panasonic', price: '$620', old: '$760', expert: true },
  { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=75', label: 'Hitachi 2HP Plasma AC', brand: 'Hitachi', price: '$890', old: '$1,070', expert: true },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=75', label: 'Breville Juicer Pro 1000W', brand: 'Breville', price: '$149', old: '$189', expert: true },
  { img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&q=75', label: 'See Every Expert Pick →', brand: '', price: null, old: null, isViewAll: true },
];

const BRANDS = [
  { name: 'Fujita',   color: '#c00' },
  { name: 'TCL',      color: '#1a56a0' },
  { name: 'HITACHI',  color: '#CC0000' },
  { name: 'SHARP',    color: '#1a1a1a' },
  { name: 'LG',       color: '#a50034' },
  { name: 'Philips',  color: '#0075C9' },
  { name: 'Samsung',  color: '#1428A0' },
  { name: 'Panasonic',color: '#004B8D' },
  { name: 'SONY',     color: '#000' },
  { name: 'Tefal',    color: '#E2001A' },
  { name: 'Daikin',   color: '#007DC3' },
  { name: 'SEC',      color: '#003087' },
];

const STATS = [
  { value: '40+', label: 'Years of Experience' },
  { value: '16',  label: 'Showrooms' },
  { value: '100+', label: 'Premium Brands' },
  { value: 'ISO', label: 'Certified Quality' },
];

const TRUST_BADGES = [
  { icon: 'fas fa-shipping-fast', title: 'International Shipping', sub: 'Delivered to 30+ countries' },
  { icon: 'fas fa-certificate',   title: 'Genuine Products Only', sub: 'All items factory-direct' },
  { icon: 'fas fa-undo',          title: 'Easy Returns',          sub: '30-day hassle-free policy' },
  { icon: 'fas fa-headset',       title: 'Dedicated Support',     sub: '24/7 phone &amp; live chat' },
];

const FOOTER_STATS = [
  { icon: 'fas fa-award',     value: '40+ Years',    label: 'Established Trust' },
  { icon: 'fas fa-store',     value: '16 Showrooms', label: 'Across Malaysia' },
  { icon: 'fas fa-box-open',  value: '2,000+ SKUs',  label: 'Products In-Stock' },
  { icon: 'fas fa-globe',     value: '30+ Countries',label: 'Export Partners' },
];

const BRAND_STRIP = ['Daikin','Samsung','LG','Sony','Panasonic','Philips','TCL','Tefal'];

const SIDE_BANNERS = [
  {
    bg: '#F5A623',
    text: 'Bulk Order<br>Discounts',
    sub: 'Up to 22% off on orders $5K+',
    href: '/bulk-order.html',
    icon: 'fas fa-boxes'
  },
  {
    bg: '#003087',
    text: 'Solar<br>Solutions',
    sub: 'Complete system packages',
    href: '/solar.html',
    icon: 'fas fa-solar-panel'
  },
  {
    bg: '#E63329',
    text: 'Flash<br>Deals',
    sub: 'Ends in 24 hrs',
    href: '/deals.html',
    icon: 'fas fa-bolt'
  }
];

// ── RENDER HELPERS ───────────────────────────────────────────

function productCard(p) {
  if (p.isViewAll) {
    return `
      <a href="/products.html" class="product-card bg-lightBg rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[180px] border-2 border-dashed border-border hover:border-primary transition-all cursor-pointer">
        <i class="fas fa-th-large text-3xl text-primary mb-3"></i>
        <span class="text-sm font-semibold text-primary">${p.label}</span>
      </a>`;
  }
  const badge = p.badge ? `<span class="badge-text absolute top-2 left-2 ${p.badgeClass} text-white text-[10px] font-bold px-1.5 py-0.5 rounded">${p.badge}</span>` : '';
  const oldPrice = p.old ? `<span class="price-original">${p.old}</span>` : '';
  return `
    <div class="product-card bg-white rounded-xl overflow-hidden shadow-sm border border-border cursor-pointer">
      <div class="relative bg-lightBg">
        <img src="${p.img}" alt="${p.label}" class="w-full h-[110px] sm:h-[130px] object-cover" loading="lazy" />
        ${badge}
        <button class="absolute top-2 right-2 w-7 h-7 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-colors">
          <i class="far fa-heart text-xs text-textSub hover:text-accentRed"></i>
        </button>
      </div>
      <div class="p-2.5 sm:p-3">
        <div class="text-[10px] text-textSub font-medium mb-0.5 uppercase tracking-wide">${p.brand}</div>
        <div class="text-xs font-semibold text-textMain leading-snug mb-2 line-clamp-2">${p.label}</div>
        <div class="flex items-center gap-1.5 mb-2 flex-wrap">
          <span class="price-current text-sm">${p.price}</span>
          ${oldPrice}
        </div>
        <button class="add-to-cart-btn w-full transition-colors">
          <i class="fas fa-cart-plus mr-1"></i> Add to Cart
        </button>
      </div>
    </div>`;
}

function categoryCard(c) {
  const spanClass = c.large ? 'span-col' : '';
  const h = c.large ? 'h-[200px] sm:h-[260px]' : 'h-[110px] sm:h-[122px]';
  return `
    <a href="/products.html" class="cat-card ${spanClass} ${h} block">
      <img src="${c.img}" alt="${c.label}" class="w-full h-full object-cover" loading="lazy" />
      <div class="cat-card-label">
        <div class="font-bold text-sm">${c.label}</div>
        <div class="text-[11px] opacity-75">${c.sub}</div>
      </div>
    </a>`;
}

// ── POPULATE FUNCTIONS ───────────────────────────────────────

function populateSidebar() {
  const el = document.getElementById('sidebar-categories');
  if (!el) return;

  el.innerHTML = CATEGORIES.map(c => `
    <a href="${c.href}"
       class="sidebar-item flex items-center gap-3 px-4 py-2.5 text-sm text-textSub transition-colors">

      <i class="${c.icon} w-4 text-center text-primary/70"></i>

      <div class="flex items-center justify-between flex-1">
        <span>${c.label}</span>
        <span class="text-xs text-gray-400">(${c.count})</span>
      </div>

      <i class="fas fa-chevron-right text-[9px] opacity-40"></i>
    </a>
  `).join('');
}

function populateMobileSidebar() {
  const el = document.getElementById('mobile-sidebar-categories');
  if (!el) return;

  el.innerHTML = CATEGORIES.map(c => `
    <a href="${c.href}"
       class="mobile-cat-item flex items-center gap-3 px-4 py-2.5 text-sm text-textSub transition-colors rounded-lg">

      <i class="${c.icon} w-4 text-center text-primary/70"></i>

      <div class="flex items-center justify-between flex-1">
        <span>${c.label}</span>
        <span class="text-xs text-gray-400">(${c.count})</span>
      </div>

      <i class="fas fa-chevron-right text-[9px] opacity-40"></i>
    </a>
  `).join('');
}

function populateHero() {
  const slidesEl = document.getElementById('hero-slides');
  const dotsEl   = document.getElementById('hero-dots');
  if (!slidesEl) return;

  // Slides fill the absolute-inset-0 container — use inline styles + responsive classes
  let html = '';
  HERO_SLIDES.forEach(function(s, i) {
    const vis = i === 0 ? 1 : 0;
    const pe  = i === 0 ? 'auto' : 'none';
    html += '<div class="hero-slide" style="position:absolute;inset:0;background:' + s.bg + ';opacity:' + vis + ';transition:opacity 0.5s ease;pointer-events:' + pe + ';">'
      + '<div class="hero-slide-inner" style="display:flex;align-items:center;height:100%;padding:0 16px;gap:16px;">'

      // Text column
      + '<div class="hero-slide-text" style="flex:1;color:#fff;min-width:0;">'
      + '<span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;background:' + s.tagColor + ';color:#fff;padding:4px 10px;border-radius:20px;display:inline-block;margin-bottom:10px;">' + s.tag + '</span>'
      + '<h1 class="hero-slide-title" style="font-size:clamp(18px,4vw,36px);font-weight:900;line-height:1.18;margin:0 0 8px;">' + s.title + '</h1>'
      + '<p class="hero-slide-sub" style="font-size:12px;opacity:.82;margin:0 0 14px;">' + s.sub + '</p>'
      + '<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap;">'
      + '<span class="hero-slide-price" style="font-size:clamp(22px,4vw,40px);font-weight:900;">' + s.price + '</span>'
      + '<span style="background:rgba(255,255,255,.22);font-size:10px;font-weight:700;padding:5px 10px;border-radius:20px;">' + s.badge + '</span>'
      + '</div>'
      + '<a href="' + s.href + '" style="display:inline-flex;align-items:center;gap:8px;background:#F5A623;color:#fff;font-weight:700;font-size:12px;padding:10px 20px;border-radius:8px;text-decoration:none;"'
      + ' onmouseover="this.style.background=\'#e09500\'" onmouseout="this.style.background=\'#F5A623\'">'
      + s.cta + ' &#8594;</a>'
      + '</div>'

      // Image column
      + '<div class="hero-slide-img" style="flex-shrink:0;display:flex;align-items:center;justify-content:center;">'
      + '<img src="' + s.img + '" alt="' + s.tag + '" loading="lazy" />'
      + '</div>'

      + '</div>'
      + '</div>';
  });
  slidesEl.innerHTML = html;

  if (dotsEl) {
    let dhtml = '';
    HERO_SLIDES.forEach(function(_, i) {
      dhtml += '<button onclick="goHeroSlide(' + i + ')" class="hero-dot" style="'
        + 'width:' + (i === 0 ? '20px' : '8px') + ';height:8px;border-radius:4px;'
        + 'background:' + (i === 0 ? '#fff' : 'rgba(255,255,255,.4)') + ';'
        + 'border:none;cursor:pointer;padding:0;transition:all .3s;"></button>';
    });
    dotsEl.innerHTML = dhtml;
  }

  injectHeroResponsiveStyles();
}

// Inject responsive rules for the hero slide image / layout once
function injectHeroResponsiveStyles() {
  if (document.getElementById('hero-responsive-style')) return;
  const style = document.createElement('style');
  style.id = 'hero-responsive-style';
  style.textContent = `
    .hero-slide-img img {
      height: 230px;
      width: 310px;
      object-fit: cover;
      border-radius: 14px;
      box-shadow: 0 16px 40px rgba(0,0,0,.35);
    }
    @media (max-width: 1023px) {
      .hero-slide-inner { padding: 0 28px !important; gap: 24px !important; }
      .hero-slide-img img { height: 190px; width: 230px; }
    }
    @media (max-width: 767px) {
      .hero-slide-img { display: none !important; }
      .hero-slide-inner { padding: 0 20px !important; justify-content: center; }
      .hero-slide-text { text-align: left; }
    }
    @media (max-width: 480px) {
      .hero-slide-inner { padding: 0 16px !important; }
    }
  `;
  document.head.appendChild(style);
}

function populateBrandStrip() {
  const el = document.getElementById('brand-strip');
  if (!el) return;
  el.innerHTML = BRAND_STRIP.map(b =>
    `<span class="text-xs font-bold text-textSub whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity cursor-pointer">${b}</span>`
  ).join('');
}

function populateSideBanners() {
  const html = SIDE_BANNERS.map(b => `
    <a href="${b.href}" class="rounded-xl overflow-hidden flex flex-col items-center justify-center text-center text-white p-4 flex-1 min-h-[85px]" style="background:${b.bg};">
      <i class="${b.icon} text-xl mb-1"></i>
      <div class="font-black text-sm leading-tight">${b.text}</div>
      <div class="text-[10px] opacity-80 mt-1">${b.sub}</div>
    </a>`).join('');

  const desktopEl = document.getElementById('side-banners');
  if (desktopEl) desktopEl.innerHTML = html;

  const mobileEl = document.getElementById('side-banners-mobile');
  if (mobileEl) mobileEl.innerHTML = html;
}

function populateProductGrid(id, data) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = data.map(productCard).join('');
}

function populateTrendingCategories() {
  const el = document.getElementById('trending-categories');
  if (!el) return;
  el.innerHTML = TRENDING_CATEGORIES.map(categoryCard).join('');
}

function populateStats() {
  const el = document.getElementById('stats-grid');
  if (!el) return;
  el.innerHTML = STATS.map(s => `
    <div class="flex flex-col items-center">
      <div class="text-3xl sm:text-4xl font-black text-primary">${s.value}</div>
      <div class="text-xs sm:text-sm text-textSub font-medium mt-1">${s.label}</div>
    </div>`).join('');
}

function populateBrands() {
  const el = document.getElementById('brands-grid');
  if (!el) return;
  el.innerHTML = BRANDS.map(b => `
    <div class="brand-logo cursor-pointer flex items-center justify-center h-10 sm:h-12 px-2 sm:px-4">
      <span class="font-black text-sm sm:text-lg tracking-tight" style="color:${b.color}">${b.name}</span>
    </div>`).join('');
}

function populateTrustBadges() {
  const el = document.getElementById('trust-badges');
  if (!el) return;
  el.innerHTML = TRUST_BADGES.map(t => `
    <div class="flex items-center gap-4 p-3">
      <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
        <i class="${t.icon} text-primary text-xl"></i>
      </div>
      <div>
        <div class="font-bold text-sm text-textMain">${t.title}</div>
        <div class="text-xs text-textSub mt-0.5">${t.sub}</div>
      </div>
    </div>`).join('');
}

function populateFooterStats() {
  const el = document.getElementById('footer-stats-row');
  if (!el) return;
  el.innerHTML = FOOTER_STATS.map(s => `
    <div class="flex items-center gap-3 justify-center md:justify-start py-2">
      <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
        <i class="${s.icon} text-primary"></i>
      </div>
      <div>
        <div class="font-bold text-sm text-textMain">${s.value}</div>
        <div class="text-xs text-textSub">${s.label}</div>
      </div>
    </div>`).join('');
}

// ── HERO SLIDER ──────────────────────────────────────────────

let currentSlide = 0;
let slideTimer;

function goHeroSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  slides.forEach(function(s, i) {
    s.style.opacity       = i === n ? '1' : '0';
    s.style.pointerEvents = i === n ? 'auto' : 'none';
  });
  dots.forEach(function(d, i) {
    d.style.width      = i === n ? '20px' : '8px';
    d.style.background = i === n ? '#fff' : 'rgba(255,255,255,.4)';
  });
  currentSlide = n;
}

function heroSlide(dir) {
  const total = HERO_SLIDES.length;
  goHeroSlide((currentSlide + dir + total) % total);
  resetSlideTimer();
}

function resetSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => heroSlide(1), 5000);
}

// ── MOBILE MENU (hamburger) ──────────────────────────────────

function initMobileMenu() {
  const menuBtn   = document.getElementById('mobile-menu-btn');
  const closeBtn  = document.getElementById('mobile-menu-close');
  const overlay   = document.getElementById('mobile-menu-overlay');
  const panel     = document.getElementById('mobile-menu-panel');

  if (!menuBtn || !overlay || !panel) return;

  function openMenu() {
    overlay.classList.add('open');
    panel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('open');
    panel.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn && closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close menu when a link inside the panel is tapped
  panel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close menu if viewport grows to desktop size while open
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) closeMenu();
  });
}

// ── MOBILE SEARCH TOGGLE ─────────────────────────────────────

function initMobileSearch() {
  const btn = document.getElementById('mobile-search-btn');
  const bar = document.getElementById('mobile-search-bar');
  if (!btn || !bar) return;

  btn.addEventListener('click', () => {
    const isHidden = bar.classList.contains('hidden');
    if (isHidden) {
      bar.classList.remove('hidden');
      bar.classList.add('block');
      const input = bar.querySelector('input');
      if (input) setTimeout(() => input.focus(), 50);
    } else {
      bar.classList.add('hidden');
      bar.classList.remove('block');
    }
  });
}

// ── SCROLL TO TOP ────────────────────────────────────────────

window.addEventListener('scroll', () => {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  btn.style.opacity = window.scrollY > 400 ? '1' : '0';
});

// ── INIT ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  populateSidebar();
  populateMobileSidebar();
  populateHero();
  populateBrandStrip();
  populateSideBanners();
  populateProductGrid('browsing-now-grid', PRODUCTS_BROWSING);
  populateTrendingCategories();
  populateProductGrid('top-picks-grid', TOP_PICKS);
  populateStats();
  populateProductGrid('fresh-additions-grid', FRESH_ADDITIONS);
  populateProductGrid('expert-picks-grid', EXPERT_PICKS);
  populateBrands();
  populateTrustBadges();
  populateFooterStats();
  resetSlideTimer();
  initMobileMenu();
  initMobileSearch();
});