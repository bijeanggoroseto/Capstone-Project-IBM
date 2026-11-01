/* =====================================================
   Clothes Market — app.js
   Vanilla JavaScript, no external libraries
   ===================================================== */

/* ─────────────────────────────────────────
   DATA PRODUK
   Setiap produk memiliki:
     id, name, category, description, price,
     colors    : [{ name, hex }]
     sizes     : [{ label, stock }]   <- stok per ukuran
     isPreorder: boolean (produk segera datang)
     image     : URL string (pakai placeholder warna)
   ───────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1, name: 'Kaos Polos Premium', category: 'kaos',
    description: 'Kaos polos berbahan cotton 30s combed, nyaman dipakai sehari-hari.',
    price: 89000, isPreorder: false,
    colors: [{ name: 'Putih', hex: '#FFFFFF' }, { name: 'Hitam', hex: '#111111' }, { name: 'Abu', hex: '#9CA3AF' }],
    sizes: [{ label: 'S', stock: 10 }, { label: 'M', stock: 5 }, { label: 'L', stock: 0 }, { label: 'XL', stock: 3 }],
    image: 'https://placehold.co/300x400/E5E7EB/374151?text=Kaos+Polos',
  },
  {
    id: 2, name: 'Kemeja Flannel Kotak', category: 'kemeja',
    description: 'Kemeja flannel motif kotak, cocok untuk casual maupun semi-formal.',
    price: 175000, isPreorder: false,
    colors: [{ name: 'Merah', hex: '#DC2626' }, { name: 'Biru', hex: '#2563EB' }, { name: 'Hijau', hex: '#16A34A' }],
    sizes: [{ label: 'S', stock: 2 }, { label: 'M', stock: 8 }, { label: 'L', stock: 6 }, { label: 'XL', stock: 0 }],
    image: 'https://placehold.co/300x400/DBEAFE/1E40AF?text=Kemeja+Flannel',
  },
  {
    id: 3, name: 'Celana Chino Slim', category: 'celana',
    description: 'Celana chino slim fit berbahan twill stretch, elegan dan fleksibel.',
    price: 220000, isPreorder: false,
    colors: [{ name: 'Krem', hex: '#F5F0E8' }, { name: 'Navy', hex: '#1E3A5F' }, { name: 'Hitam', hex: '#111111' }],
    sizes: [{ label: '28', stock: 3 }, { label: '30', stock: 7 }, { label: '32', stock: 4 }, { label: '34', stock: 0 }],
    image: 'https://placehold.co/300x400/F5F0E8/78716C?text=Celana+Chino',
  },
  {
    id: 4, name: 'Gaun Midi Floral', category: 'gaun',
    description: 'Gaun midi bermotif floral, ringan dan cocok untuk acara semi-formal.',
    price: 315000, isPreorder: false,
    colors: [{ name: 'Pink', hex: '#FDB6D4' }, { name: 'Lavender', hex: '#C4B5FD' }],
    sizes: [{ label: 'S', stock: 0 }, { label: 'M', stock: 0 }, { label: 'L', stock: 2 }, { label: 'XL', stock: 1 }],
    image: 'https://placehold.co/300x400/FDB6D4/9D174D?text=Gaun+Floral',
  },
  {
    id: 5, name: 'Jaket Bomber Varsity', category: 'jaket',
    description: 'Jaket bomber varsity style dengan aksen tipping, hangat dan stylish.',
    price: 450000, isPreorder: false,
    colors: [{ name: 'Hitam', hex: '#111111' }, { name: 'Olive', hex: '#6B7C3B' }],
    sizes: [{ label: 'M', stock: 4 }, { label: 'L', stock: 2 }, { label: 'XL', stock: 0 }, { label: 'XXL', stock: 1 }],
    image: 'https://placehold.co/300x400/1F2937/F9FAFB?text=Jaket+Bomber',
  },
  {
    id: 6, name: 'Topi Bucket Canvas', category: 'topi',
    description: 'Topi bucket berbahan canvas tebal, cocok untuk outdoor.',
    price: 95000, isPreorder: false,
    colors: [{ name: 'Krem', hex: '#F5F0E8' }, { name: 'Hitam', hex: '#111111' }, { name: 'Biru', hex: '#2563EB' }],
    sizes: [{ label: 'Free Size', stock: 12 }],
    image: 'https://placehold.co/300x400/D1FAE5/065F46?text=Topi+Bucket',
  },
  {
    id: 7, name: 'Sepatu Sneakers Putih', category: 'sepatu',
    description: 'Sneakers low-cut bersol karet, ringan dan breathable.',
    price: 380000, isPreorder: false,
    colors: [{ name: 'Putih', hex: '#FFFFFF' }, { name: 'Hitam', hex: '#111111' }],
    sizes: [{ label: '39', stock: 2 }, { label: '40', stock: 5 }, { label: '41', stock: 0 }, { label: '42', stock: 3 }, { label: '43', stock: 1 }],
    image: 'https://placehold.co/300x400/F3F4F6/374151?text=Sneakers',
  },
  {
    id: 8, name: 'Kaos Oversize Graphic', category: 'kaos',
    description: 'Kaos oversize dengan print grafis eksklusif, bahan cotton 24s.',
    price: 145000, isPreorder: false,
    colors: [{ name: 'Putih', hex: '#FFFFFF' }, { name: 'Kuning', hex: '#FDE68A' }, { name: 'Hitam', hex: '#111111' }],
    sizes: [{ label: 'M', stock: 0 }, { label: 'L', stock: 0 }, { label: 'XL', stock: 0 }],
    image: 'https://placehold.co/300x400/FDE68A/92400E?text=Kaos+Oversize',
  },
  {
    id: 9, name: 'Celana Jogger Fleece', category: 'celana',
    description: 'Celana jogger berbahan fleece lembut, ideal untuk bersantai.',
    price: 185000, isPreorder: false,
    colors: [{ name: 'Abu', hex: '#9CA3AF' }, { name: 'Navy', hex: '#1E3A5F' }],
    sizes: [{ label: 'M', stock: 6 }, { label: 'L', stock: 8 }, { label: 'XL', stock: 4 }],
    image: 'https://placehold.co/300x400/E5E7EB/4B5563?text=Jogger+Fleece',
  },
  {
    id: 10, name: 'Gaun Mini Bodycon', category: 'gaun',
    description: 'Gaun mini bodycon berbahan jersey stretch, elegan untuk pesta.',
    price: 275000, isPreorder: true,  // Pre-order produk baru
    colors: [{ name: 'Hitam', hex: '#111111' }, { name: 'Merah', hex: '#DC2626' }],
    sizes: [{ label: 'S', stock: 0 }, { label: 'M', stock: 0 }, { label: 'L', stock: 0 }],
    image: 'https://placehold.co/300x400/111111/F9FAFB?text=Gaun+Mini',
  },
  {
    id: 11, name: 'Jaket Denim Vintage', category: 'jaket',
    description: 'Jaket denim washed look dengan detail distressed, gaya retro modern.',
    price: 520000, isPreorder: true,  // Pre-order produk baru
    colors: [{ name: 'Biru Muda', hex: '#BFDBFE' }, { name: 'Biru Tua', hex: '#1E3A5F' }],
    sizes: [{ label: 'M', stock: 0 }, { label: 'L', stock: 0 }, { label: 'XL', stock: 0 }],
    image: 'https://placehold.co/300x400/BFDBFE/1E3A5F?text=Jaket+Denim',
  },
  {
    id: 12, name: 'Kemeja Oxford Classic', category: 'kemeja',
    description: 'Kemeja oxford plain, sempurna untuk smart casual sehari-hari.',
    price: 195000, isPreorder: false,
    colors: [{ name: 'Putih', hex: '#FFFFFF' }, { name: 'Biru Muda', hex: '#BFDBFE' }, { name: 'Pink', hex: '#FDB6D4' }],
    sizes: [{ label: 'S', stock: 5 }, { label: 'M', stock: 9 }, { label: 'L', stock: 3 }, { label: 'XL', stock: 2 }],
    image: 'https://placehold.co/300x400/BFDBFE/1E40AF?text=Kemeja+Oxford',
  },
];

/* ─────────────────────────────────────────
   STATE APLIKASI
   ───────────────────────────────────────── */
let state = {
  currentUser: null,        // { name, email, password }
  users: [],                // daftar pengguna terdaftar
  cart: [],                 // [{ productId, name, color, size, price, qty, isPreorder }]
  orders: [],               // [{ id, items, total, payment, status, date, address }]
  // ratings: { [productId]: [{ user, score, comment, date }] }
  ratings: {},
  currentView: 'home',      // 'home' | 'search' | 'detail' | 'cart' | 'checkout' | 'orders'
  previousView: 'home',
  activeCategory: 'semua',
  searchQuery: '',
  selectedProductId: null,
  // Seleksi sementara di halaman detail
  detail: { color: null, size: null, qty: 1 },
  // Seleksi checkout
  checkout: { paymentMethod: 'cod', address: '', subMethod: '' },
};

/* ─────────────────────────────────────────
   INISIALISASI
   ───────────────────────────────────────── */
(function init() {
  // Muat data dari localStorage
  const saved = localStorage.getItem('clothesMarketState');
  if (saved) {
    const parsed = JSON.parse(saved);
    state.users   = parsed.users   || [];
    state.orders  = parsed.orders  || [];
    state.ratings = parsed.ratings || {};
    // Cek sesi aktif
    const session = localStorage.getItem('clothesMarketSession');
    if (session) {
      const user = state.users.find(u => u.email === session);
      if (user) loginSuccess(user);
    }
  }
})();

/* ─────────────────────────────────────────
   PERSISTENSI — simpan ke localStorage
   ───────────────────────────────────────── */
function saveState() {
  localStorage.setItem('clothesMarketState', JSON.stringify({
    users:   state.users,
    orders:  state.orders,
    ratings: state.ratings,
  }));
}

/* ─────────────────────────────────────────
   AUTH — Login / Signup / Logout
   ───────────────────────────────────────── */

/** Beralih tab Login / Signup */
function switchAuthTab(tab) {
  const loginForm  = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const tabLogin   = document.getElementById('tabLogin');
  const tabSignup  = document.getElementById('tabSignup');

  if (tab === 'login') {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    tabLogin.classList.add('text-primary', 'border-primary');
    tabLogin.classList.remove('text-gray-400', 'border-transparent');
    tabSignup.classList.remove('text-primary', 'border-primary');
    tabSignup.classList.add('text-gray-400', 'border-transparent');
  } else {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    tabSignup.classList.add('text-primary', 'border-primary');
    tabSignup.classList.remove('text-gray-400', 'border-transparent');
    tabLogin.classList.remove('text-primary', 'border-primary');
    tabLogin.classList.add('text-gray-400', 'border-transparent');
  }
}

/** Handle form login */
function handleLogin(e) {
  e.preventDefault();
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl    = document.getElementById('loginError');

  const user = state.users.find(u => u.email === email && u.password === password);
  if (!user) {
    errEl.textContent = 'Email atau password salah.';
    errEl.classList.remove('hidden');
    return;
  }
  errEl.classList.add('hidden');
  loginSuccess(user);
}

/** Handle form signup */
function handleSignup(e) {
  e.preventDefault();
  const name     = document.getElementById('signupName').value.trim();
  const email    = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const errEl    = document.getElementById('signupError');

  if (password.length < 6) {
    errEl.textContent = 'Password minimal 6 karakter.';
    errEl.classList.remove('hidden');
    return;
  }
  if (state.users.find(u => u.email === email)) {
    errEl.textContent = 'Email sudah terdaftar.';
    errEl.classList.remove('hidden');
    return;
  }

  const newUser = { name, email, password };
  state.users.push(newUser);
  saveState();
  errEl.classList.add('hidden');
  loginSuccess(newUser);
}

/** Berhasil login — tampilkan app */
function loginSuccess(user) {
  state.currentUser = user;
  localStorage.setItem('clothesMarketSession', user.email);

  // Update UI profil
  document.getElementById('avatarInitial').textContent = user.name.charAt(0).toUpperCase();
  document.getElementById('profileName').textContent   = user.name;
  document.getElementById('profileEmail').textContent  = user.email;

  // Sembunyikan overlay auth, tampilkan app
  document.getElementById('authOverlay').classList.add('hidden');
  const app = document.getElementById('mainApp');
  app.classList.remove('hidden');
  app.style.display = 'flex';

  // Render produk awal
  renderHomeProducts();
  updateCartBadge();
}

/** Logout */
function handleLogout() {
  state.currentUser = null;
  state.cart = [];
  localStorage.removeItem('clothesMarketSession');
  document.getElementById('authOverlay').classList.remove('hidden');
  const app = document.getElementById('mainApp');
  app.style.display = 'none';
  app.classList.add('hidden');
  toggleProfileMenu(true); // tutup menu
}

/* ─────────────────────────────────────────
   NAVIGASI VIEW
   ───────────────────────────────────────── */

/** Tampilkan view tertentu, sembunyikan yang lain */
function showView(viewName) {
  const views = ['Home', 'Search', 'Detail', 'Cart', 'Checkout', 'Orders'];
  views.forEach(v => {
    const el = document.getElementById('view' + v);
    if (el) el.classList.add('hidden');
  });

  state.previousView = state.currentView;
  state.currentView  = viewName;

  const target = document.getElementById('view' + capitalize(viewName));
  if (target) target.classList.remove('hidden');

  // Render konten sesuai view
  if (viewName === 'home')     renderHomeProducts();
  if (viewName === 'cart')     renderCart();
  if (viewName === 'orders')   renderOrders();
  if (viewName === 'checkout') renderCheckout();

  // Scroll ke atas
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Tutup profile menu jika terbuka
  toggleProfileMenu(true);
}

/** Kembali ke view sebelumnya */
function goBack() {
  showView(state.previousView || 'home');
}

/** Capitalize huruf pertama */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ─────────────────────────────────────────
   PROFILE MENU TOGGLE
   ───────────────────────────────────────── */
function toggleProfileMenu(forceClose = false) {
  const menu = document.getElementById('profileMenu');
  if (forceClose || !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
  }
}
// Tutup menu jika klik di luar
document.addEventListener('click', (e) => {
  const menu   = document.getElementById('profileMenu');
  const btn    = e.target.closest('[onclick="toggleProfileMenu()"]');
  if (!btn && menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
});

/* ─────────────────────────────────────────
   PENCARIAN
   ───────────────────────────────────────── */

/** Dipanggil saat input berubah atau tombol Cari ditekan */
function handleSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    showView('home');
    return;
  }
  state.searchQuery = q;
  document.getElementById('searchKeyword').textContent = query.trim();
  showView('search');
  renderSearchResults();
}

/** Render grid hasil pencarian */
function renderSearchResults() {
  const showOOS  = document.getElementById('showOutOfStockSearch').checked;
  const q        = state.searchQuery;
  const filtered = PRODUCTS.filter(p => {
    const matchText = p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    if (!matchText) return false;
    // Sembunyikan produk stok habis (non-preorder) jika toggle off
    const totalStock = p.sizes.reduce((s, sz) => s + sz.stock, 0);
    if (!p.isPreorder && totalStock === 0 && !showOOS) return false;
    return true;
  });

  const grid = document.getElementById('searchGrid');
  const msg  = document.getElementById('noSearchMsg');
  grid.innerHTML = '';

  if (!filtered.length) {
    msg.classList.remove('hidden');
    return;
  }
  msg.classList.add('hidden');
  filtered.forEach(p => grid.appendChild(buildProductCard(p)));
}

/* ─────────────────────────────────────────
   HOME — Filter Kategori & Render Grid
   ───────────────────────────────────────── */

/** Filter produk berdasarkan kategori */
function filterByCategory(cat, btnEl) {
  state.activeCategory = cat;

  // Update tombol aktif
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (btnEl) btnEl.classList.add('active');

  // Update judul
  document.getElementById('homeTitle').textContent =
    cat === 'semua' ? 'Semua Produk' : capitalize(cat);

  renderHomeProducts();
}

/** Render produk di halaman home sesuai kategori & toggle stok */
function renderHomeProducts() {
  const showOOS = document.getElementById('showOutOfStock')?.checked ?? false;
  const cat     = state.activeCategory;

  const filtered = PRODUCTS.filter(p => {
    if (cat !== 'semua' && p.category !== cat) return false;
    const totalStock = p.sizes.reduce((s, sz) => s + sz.stock, 0);
    // Sembunyikan stok habis non-preorder kecuali toggle aktif
    if (!p.isPreorder && totalStock === 0 && !showOOS) return false;
    return true;
  });

  const grid = document.getElementById('productGrid');
  const msg  = document.getElementById('noProductMsg');
  if (!grid) return;
  grid.innerHTML = '';

  if (!filtered.length) {
    msg.classList.remove('hidden');
    return;
  }
  msg.classList.add('hidden');
  filtered.forEach(p => grid.appendChild(buildProductCard(p)));
}

/* ─────────────────────────────────────────
   RATING — Fungsi Pembantu
   ───────────────────────────────────────── */

/**
 * Ambil semua entri rating untuk sebuah produk.
 * @param {number} productId
 * @returns {Array} array of { user, score, comment, date }
 */
function getProductRatings(productId) {
  return state.ratings[productId] || [];
}

/**
 * Hitung rata-rata rating (0 jika belum ada).
 * @param {number} productId
 * @returns {{ avg: number, count: number }}
 */
function getProductRatingStats(productId) {
  const list = getProductRatings(productId);
  if (!list.length) return { avg: 0, count: 0 };
  const sum = list.reduce((s, r) => s + r.score, 0);
  return { avg: Math.round((sum / list.length) * 10) / 10, count: list.length };
}

/**
 * Hitung jumlah total unit yang sudah terbeli untuk sebuah produk
 * (dari semua pesanan yang statusnya bukan 'dibatalkan').
 * @param {number} productId
 * @returns {number}
 */
function getProductTotalSold(productId) {
  let total = 0;
  state.orders.forEach(order => {
    if (order.status === 'dibatalkan') return;
    order.items.forEach(item => {
      if (item.productId === productId) total += item.qty;
    });
  });
  return total;
}

/**
 * Bangun HTML bintang statis (tampilan).
 * @param {number} avg   rata-rata rating (0–5)
 * @param {number} count jumlah reviewer
 * @returns {string} HTML string
 */
function buildStarHtml(avg, count) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (avg >= i) {
      stars += '<span class="star filled">★</span>';
    } else if (avg >= i - 0.5) {
      stars += '<span class="star half">★</span>';
    } else {
      stars += '<span class="star">★</span>';
    }
  }
  const label = count > 0
    ? `<span class="text-xs text-gray-400 ml-1">${avg} (${count})</span>`
    : `<span class="text-xs text-gray-400 ml-1">Belum ada ulasan</span>`;
  return `<span class="star-rating">${stars}</span>${label}`;
}

/* ─────────────────────────────────────────
   PRODUCT CARD — Builder
   ───────────────────────────────────────── */

/**
 * Membangun elemen card untuk satu produk.
 * @param {object} product
 * @returns {HTMLElement}
 */
function buildProductCard(product) {
  const totalStock = product.sizes.reduce((s, sz) => s + sz.stock, 0);
  const isOOS      = totalStock === 0;
  const { avg, count } = getProductRatingStats(product.id);

  // Badge stok
  let badge = '';
  if (product.isPreorder) {
    badge = '<span class="badge-preorder">PRE-ORDER</span>';
  } else if (isOOS) {
    badge = '<span class="badge-habis">HABIS</span>';
  } else if (totalStock <= 5) {
    badge = `<span class="badge-tersedia" style="background:#FEF3C7;color:#92400E">Sisa ${totalStock}</span>`;
  }

  const card = document.createElement('article');
  card.className = 'product-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.innerHTML = `
    <div class="product-img-wrap ${isOOS && !product.isPreorder ? 'opacity-50' : ''}">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="absolute top-2 left-2">${badge}</div>
    </div>
    <div class="p-3">
      <h3 class="product-title text-sm font-semibold text-gray-800 line-clamp-2 leading-tight mb-1">${product.name}</h3>
      <p class="text-xs text-gray-400 capitalize mb-1">${product.category}</p>
      <p class="text-primary font-bold text-sm">${formatRupiah(product.price)}</p>
      <div class="flex items-center mt-1">${buildStarHtml(avg, count)}</div>
      <p class="text-xs text-gray-400 mt-1">
        ${product.isPreorder ? 'Stok: Pre-Order' : `Stok: ${totalStock > 0 ? totalStock + ' pcs' : '<span class=\'text-red-400\'>Habis</span>'}`}
      </p>
    </div>
  `;

  // Buka detail saat klik atau tekan Enter
  const open = () => openProductDetail(product.id);
  card.addEventListener('click', open);
  card.addEventListener('keydown', (e) => { if (e.key === 'Enter') open(); });

  return card;
}

/* ─────────────────────────────────────────
   PRODUCT DETAIL
   ───────────────────────────────────────── */

/** Buka halaman detail produk */
function openProductDetail(productId) {
  state.selectedProductId = productId;
  state.detail = { color: null, size: null, qty: 1 };

  // Bersihkan kolom pencarian saat pengguna membuka detail produk
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  state.searchQuery = '';

  showView('detail');
  renderProductDetail();
}

/** Render konten halaman detail */
function renderProductDetail() {
  const product = PRODUCTS.find(p => p.id === state.selectedProductId);
  if (!product) return;

  const totalStock = product.sizes.reduce((s, sz) => s + sz.stock, 0);
  const isOOS      = totalStock === 0;

  // Statistik rating & penjualan
  const { avg, count } = getProductRatingStats(product.id);
  const totalSold       = getProductTotalSold(product.id);
  const ratingList      = getProductRatings(product.id);

  // Bangun warna swatches
  const colorSwatches = product.colors.map((c, i) => `
    <button class="color-swatch ${i === 0 ? 'selected' : ''}"
      style="background:${c.hex};${c.hex === '#FFFFFF' ? 'border-color:#d1d5db;' : ''}"
      title="${c.name}"
      onclick="selectColor(${i}, this)"
      aria-label="Warna ${c.name}">
    </button>
  `).join('');

  // Bangun ukuran buttons
  const sizeButtons = product.sizes.map(sz => `
    <button class="size-btn" ${sz.stock === 0 && !product.isPreorder ? 'disabled' : ''}
      onclick="selectSize('${sz.label}', this)"
      title="${sz.stock === 0 && !product.isPreorder ? 'Stok habis' : 'Stok: ' + sz.stock}">
      ${sz.label}
    </button>
  `).join('');

  // Badge
  let badgeHtml = '';
  if (product.isPreorder) {
    badgeHtml = '<span class="badge-preorder text-sm px-3 py-1">🕐 PRE-ORDER — Segera Tersedia</span>';
  } else if (isOOS) {
    badgeHtml = '<span class="badge-habis text-sm px-3 py-1">Stok Habis</span>';
  }

  // Tabel stok per ukuran
  const stockTable = product.sizes.map(sz => `
    <div class="flex justify-between text-xs py-1 border-b border-gray-100">
      <span class="font-medium text-gray-600">Ukuran ${sz.label}</span>
      <span class="${sz.stock === 0 ? 'text-red-400' : 'text-green-600'} font-semibold">
        ${product.isPreorder ? 'Pre-Order' : (sz.stock > 0 ? sz.stock + ' pcs' : 'Habis')}
      </span>
    </div>
  `).join('');

  // Daftar ulasan — kartu yang lebih detail dengan komentar menonjol
  const reviewsHtml = ratingList.length
    ? ratingList.slice().reverse().map(r => {
        const initial  = r.user.charAt(0).toUpperCase();
        const username = r.user.split('@')[0];
        const stars    = [1,2,3,4,5].map(n =>
          `<span class="star ${n <= r.score ? 'filled' : ''}">★</span>`
        ).join('');
        const commentBlock = r.comment
          ? `<blockquote class="mt-2 pl-3 border-l-2 border-accent text-sm text-gray-600 leading-relaxed italic">"${r.comment}"</blockquote>`
          : `<p class="mt-2 text-xs text-gray-300 italic">Tidak ada komentar.</p>`;
        return `
          <div class="bg-gray-50 rounded-xl p-4">
            <div class="flex items-center justify-between gap-3 mb-1">
              <!-- Avatar + Nama -->
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">${initial}</div>
                <span class="text-sm font-semibold text-gray-800">${username}</span>
              </div>
              <!-- Bintang + Tanggal -->
              <div class="flex flex-col items-end gap-0.5">
                <span class="star-rating">${stars}</span>
                <span class="text-[11px] text-gray-400">${r.date}</span>
              </div>
            </div>
            ${commentBlock}
          </div>
        `;
      }).join('')
    : `<div class="text-center py-6">
         <p class="text-gray-400 text-sm">Belum ada ulasan untuk produk ini.</p>
         <p class="text-gray-300 text-xs mt-1">Jadilah yang pertama memberi ulasan setelah menerima pesanan!</p>
       </div>`;

  document.getElementById('productDetailContent').innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Gambar Produk -->
      <div class="product-img-wrap rounded-2xl overflow-hidden max-h-96 md:max-h-full ${isOOS && !product.isPreorder ? 'opacity-60' : ''}">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
      </div>

      <!-- Info Produk -->
      <div class="space-y-4">
        <div>
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">${product.category}</p>
          <h2 class="text-2xl font-extrabold text-gray-900 leading-tight mt-1">${product.name}</h2>
          <p class="text-2xl font-bold text-primary mt-2">${formatRupiah(product.price)}</p>
          <div class="mt-2 flex flex-wrap items-center gap-2">
            ${badgeHtml}
          </div>
        </div>

        <!-- Rating & Statistik Penjualan -->
        <div class="flex items-center gap-4 flex-wrap">
          <div class="flex items-center gap-1">
            ${buildStarHtml(avg, count)}
          </div>
          <span class="text-xs text-gray-400">|</span>
          <span class="text-xs text-gray-500">
            <span class="font-semibold text-gray-700">${count}</span> ulasan
          </span>
          <span class="text-xs text-gray-400">|</span>
          <span class="text-xs text-gray-500">
            <span class="font-semibold text-gray-700">${totalSold}</span> terjual
          </span>
        </div>

        <p class="text-sm text-gray-500 leading-relaxed">${product.description}</p>

        <!-- Stok per Ukuran -->
        <div class="bg-gray-50 rounded-xl p-3">
          <p class="text-xs font-bold text-gray-500 uppercase mb-2">Detail Stok</p>
          ${stockTable}
        </div>

        <!-- Pilih Warna -->
        <div>
          <p class="text-sm font-semibold text-gray-700 mb-2">Warna: <span id="selectedColorName" class="font-normal text-gray-500">${product.colors[0]?.name ?? '-'}</span></p>
          <div class="flex gap-2 flex-wrap">${colorSwatches}</div>
        </div>

        <!-- Pilih Ukuran -->
        <div>
          <p class="text-sm font-semibold text-gray-700 mb-2">Ukuran:</p>
          <div class="flex gap-2 flex-wrap">${sizeButtons}</div>
        </div>

        <!-- Jumlah -->
        <div class="flex items-center gap-3">
          <p class="text-sm font-semibold text-gray-700">Jumlah:</p>
          <div class="flex items-center gap-2">
            <button class="qty-btn" onclick="changeDetailQty(-1)">−</button>
            <span id="detailQty" class="text-sm font-bold w-6 text-center">${state.detail.qty}</span>
            <button class="qty-btn" onclick="changeDetailQty(1)">+</button>
          </div>
        </div>

        <!-- Tombol Aksi -->
        <div class="flex gap-3 pt-2">
          ${product.isPreorder
            ? `<button onclick="addToCart(true)" class="flex-1 bg-accent hover:bg-accent-dark text-primary font-bold py-3 rounded-xl transition text-sm">
                🕐 Pre-Order Sekarang
               </button>`
            : isOOS
              ? `<button onclick="addToCart(true)" class="flex-1 bg-accent hover:bg-accent-dark text-primary font-bold py-3 rounded-xl transition text-sm">
                  📋 Pre-Order (Stok Habis)
                 </button>`
              : `<button onclick="addToCart(false)" class="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition text-sm">
                  🛒 Tambah ke Keranjang
                 </button>`
          }
          <button onclick="buyNow()" class="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 rounded-xl transition text-sm">
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>

    <!-- Ulasan Pembeli -->
    <div class="mt-8 bg-white rounded-2xl border border-gray-200 p-5">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-gray-800">
          💬 Ulasan &amp; Komentar Pembeli
        </h3>
        <span class="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">${count} ulasan</span>
      </div>
      <div class="space-y-4">${reviewsHtml}</div>
    </div>
  `;

  // Set default warna pertama
  state.detail.color = product.colors[0]?.name ?? null;
}

/** Pilih warna */
function selectColor(index, btn) {
  const product = PRODUCTS.find(p => p.id === state.selectedProductId);
  state.detail.color = product.colors[index].name;
  document.getElementById('selectedColorName').textContent = product.colors[index].name;
  // Update tampilan swatch
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  btn.classList.add('selected');
}

/** Pilih ukuran */
function selectSize(label, btn) {
  state.detail.size = label;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

/** Ubah qty di halaman detail */
function changeDetailQty(delta) {
  const newQty = state.detail.qty + delta;
  if (newQty < 1) return;

  // Batasi qty maks berdasarkan stok ukuran terpilih (jika non-preorder)
  const product = PRODUCTS.find(p => p.id === state.selectedProductId);
  if (!product.isPreorder && state.detail.size) {
    const sizeObj = product.sizes.find(s => s.label === state.detail.size);
    if (sizeObj && newQty > sizeObj.stock) {
      showToast(`Stok ukuran ${state.detail.size} hanya ${sizeObj.stock} pcs.`);
      return;
    }
  }

  state.detail.qty = newQty;
  document.getElementById('detailQty').textContent = newQty;
}

/* ─────────────────────────────────────────
   KERANJANG
   ───────────────────────────────────────── */

/** Tambah ke keranjang dari halaman detail */
function addToCart(isPreorder = false) {
  if (!state.detail.color) { showToast('Pilih warna terlebih dahulu.'); return false; }
  if (!state.detail.size)  { showToast('Pilih ukuran terlebih dahulu.'); return false; }

  const product = PRODUCTS.find(p => p.id === state.selectedProductId);

  // Cek stok untuk produk reguler
  if (!product.isPreorder && !isPreorder) {
    const sizeObj = product.sizes.find(s => s.label === state.detail.size);
    if (!sizeObj || sizeObj.stock < state.detail.qty) {
      showToast('Stok tidak cukup untuk ukuran ini.');
      return false;
    }
  }

  // Cek duplikasi (warna + ukuran sama) — tambahkan qty
  const existing = state.cart.find(
    item => item.productId === product.id &&
            item.color === state.detail.color &&
            item.size  === state.detail.size
  );

  if (existing) {
    existing.qty += state.detail.qty;
  } else {
    state.cart.push({
      productId:  product.id,
      name:       product.name,
      color:      state.detail.color,
      size:       state.detail.size,
      price:      product.price,
      qty:        state.detail.qty,
      isPreorder: product.isPreorder || isPreorder,
      image:      product.image,
    });
  }

  updateCartBadge();
  showToast(`${product.name} ditambahkan ke keranjang! 🛒`);
  return true;
}

/** Langsung checkout dari detail */
function buyNow() {
  const added = addToCart(false);
  if (added) showView('checkout');
}

/** Update badge keranjang */
function updateCartBadge() {
  const total = state.cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (total > 0) {
    badge.textContent = total > 99 ? '99+' : total;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

/** Render halaman keranjang */
function renderCart() {
  const container = document.getElementById('cartContent');
  container.innerHTML = '';

  if (!state.cart.length) {
    container.innerHTML = `
      <div class="text-center py-16 text-gray-400">
        <svg class="w-16 h-16 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        <p class="font-semibold">Keranjang kosong</p>
        <p class="text-sm mt-1">Yuk mulai belanja!</p>
        <button onclick="showView('home')" class="mt-4 bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-primary-dark transition">
          Mulai Belanja
        </button>
      </div>`;
    return;
  }

  // List item
  const listWrap = document.createElement('div');
  listWrap.className = 'space-y-3 mb-4';

  state.cart.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="w-16 h-20 object-cover rounded-lg flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-2">
          <div>
            <p class="text-sm font-semibold text-gray-800 leading-tight">${item.name}</p>
            <p class="text-xs text-gray-400 mt-0.5">${item.color} · ${item.size}
              ${item.isPreorder ? '<span class="badge-preorder ml-1">PO</span>' : ''}
            </p>
          </div>
          <button onclick="removeFromCart(${idx})" class="text-gray-300 hover:text-red-500 transition flex-shrink-0" aria-label="Hapus">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center gap-2">
            <button class="qty-btn" onclick="changeCartQty(${idx}, -1)">−</button>
            <span class="text-sm font-bold w-6 text-center">${item.qty}</span>
            <button class="qty-btn" onclick="changeCartQty(${idx}, 1)">+</button>
          </div>
          <p class="text-primary font-bold text-sm">${formatRupiah(item.price * item.qty)}</p>
        </div>
      </div>
    `;
    listWrap.appendChild(el);
  });

  container.appendChild(listWrap);

  // Ringkasan + tombol checkout
  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const summary  = document.createElement('div');
  summary.className = 'sticky-bottom-bar';
  summary.innerHTML = `
    <div class="bg-white rounded-2xl border border-gray-200 p-4 space-y-2">
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Subtotal (${state.cart.reduce((s,i)=>s+i.qty,0)} item)</span>
        <span class="font-semibold">${formatRupiah(subtotal)}</span>
      </div>
      <div class="flex justify-between text-sm">
        <span class="text-gray-500">Ongkos kirim</span>
        <span class="text-green-600 font-semibold">Dihitung saat checkout</span>
      </div>
      <div class="border-t border-gray-100 pt-2 flex justify-between font-bold text-base">
        <span>Total</span>
        <span class="text-primary">${formatRupiah(subtotal)}</span>
      </div>
      <button onclick="showView('checkout')" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl mt-2 transition">
        Lanjut ke Pembayaran →
      </button>
    </div>
  `;
  container.appendChild(summary);
}

/** Ubah qty item di keranjang */
function changeCartQty(idx, delta) {
  const item   = state.cart[idx];
  const newQty = item.qty + delta;
  if (newQty < 1) { removeFromCart(idx); return; }

  // Batasi stok untuk item reguler
  if (!item.isPreorder) {
    const product = PRODUCTS.find(p => p.id === item.productId);
    const sizeObj = product?.sizes.find(s => s.label === item.size);
    if (sizeObj && newQty > sizeObj.stock) {
      showToast(`Stok maksimal untuk ukuran ${item.size}: ${sizeObj.stock} pcs.`);
      return;
    }
  }

  item.qty = newQty;
  updateCartBadge();
  renderCart();
}

/** Hapus item dari keranjang */
function removeFromCart(idx) {
  state.cart.splice(idx, 1);
  updateCartBadge();
  renderCart();
}

/* ─────────────────────────────────────────
   CHECKOUT
   ───────────────────────────────────────── */

/** Render halaman checkout */
function renderCheckout() {
  if (!state.cart.length) {
    showView('cart');
    return;
  }

  const subtotal  = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping  = state.checkout.paymentMethod === 'cod' ? 15000 : 10000;
  const total     = subtotal + shipping;

  const itemsList = state.cart.map(item => `
    <div class="flex justify-between items-center text-sm py-2 border-b border-gray-100 last:border-0">
      <div class="flex items-center gap-3">
        <img src="${item.image}" class="w-10 h-12 object-cover rounded-lg" />
        <div>
          <p class="font-medium text-gray-800">${item.name}</p>
          <p class="text-xs text-gray-400">${item.color} · ${item.size} · ${item.qty}x
            ${item.isPreorder ? '<span class="badge-preorder">PO</span>' : ''}
          </p>
        </div>
      </div>
      <span class="font-semibold text-primary">${formatRupiah(item.price * item.qty)}</span>
    </div>
  `).join('');

  document.getElementById('checkoutContent').innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <!-- Form kiri -->
      <div class="lg:col-span-2 space-y-4">

        <!-- Alamat -->
        <div class="bg-white rounded-2xl border border-gray-200 p-4">
          <h3 class="font-bold text-gray-800 mb-3">📍 Alamat Pengiriman</h3>
          <textarea id="shippingAddress" rows="3" placeholder="Masukkan alamat lengkap (jalan, no. rumah, kota, kode pos)..."
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
            oninput="state.checkout.address = this.value">${state.checkout.address}</textarea>
        </div>

        <!-- Metode Pembayaran -->
        <div class="bg-white rounded-2xl border border-gray-200 p-4">
          <h3 class="font-bold text-gray-800 mb-3">💳 Metode Pembayaran</h3>
          <div class="space-y-2">
            ${buildPaymentOption('cod',     '🛵', 'Bayar di Tempat (COD)',    'Bayar saat paket tiba')}
            ${buildPaymentOption('transfer','🏦', 'Transfer Bank',            'BCA / Mandiri / BNI / BRI')}
            ${buildPaymentOption('ewallet', '📱', 'E-Wallet',                 'GoPay / OVO / DANA / ShopeePay')}
            ${buildPaymentOption('qris',    '📷', 'QRIS',                     'Scan QR dari aplikasi apapun')}
            ${buildPaymentOption('credit',  '💳', 'Kartu Kredit / Debit',     'Visa / MasterCard / JCB')}
          </div>
          <!-- Sub-pilihan bank jika transfer -->
          <div id="subMethodWrap" class="mt-3 hidden">
            <p class="text-xs font-semibold text-gray-500 mb-2">Pilih Bank:</p>
            <div class="flex flex-wrap gap-2" id="subMethodOptions"></div>
          </div>
        </div>

        <!-- Catatan -->
        <div class="bg-white rounded-2xl border border-gray-200 p-4">
          <h3 class="font-bold text-gray-800 mb-2">📝 Catatan (opsional)</h3>
          <input id="orderNote" type="text" placeholder="Misal: taruh di depan pintu, jangan dibunyikan..."
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary" />
        </div>
      </div>

      <!-- Ringkasan kanan -->
      <div class="space-y-4">
        <div class="bg-white rounded-2xl border border-gray-200 p-4">
          <h3 class="font-bold text-gray-800 mb-3">🛒 Ringkasan Pesanan</h3>
          <div>${itemsList}</div>
          <div class="mt-3 pt-3 border-t border-gray-100 space-y-1.5 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-500">Subtotal</span>
              <span>${formatRupiah(subtotal)}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Ongkir</span>
              <span>${formatRupiah(shipping)}</span>
            </div>
            <div class="flex justify-between font-bold text-base pt-2 border-t border-gray-100">
              <span>Total</span>
              <span class="text-primary">${formatRupiah(total)}</span>
            </div>
          </div>
          <button onclick="placeOrder()" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl mt-4 transition">
            ✅ Pesan Sekarang
          </button>
          <p class="text-xs text-center text-gray-400 mt-2">Dengan memesan, Anda menyetujui syarat & ketentuan kami.</p>
        </div>
      </div>
    </div>
  `;

  // Tandai metode yang sudah dipilih
  selectPaymentMethod(state.checkout.paymentMethod, false);
}

/** Bangun elemen opsi pembayaran */
function buildPaymentOption(value, icon, label, desc) {
  return `
    <div class="payment-opt ${state.checkout.paymentMethod === value ? 'selected' : ''}"
      onclick="selectPaymentMethod('${value}', true)">
      <input type="radio" name="payment" value="${value}"
        ${state.checkout.paymentMethod === value ? 'checked' : ''} />
      <span class="text-xl">${icon}</span>
      <div>
        <p class="text-sm font-semibold text-gray-800">${label}</p>
        <p class="text-xs text-gray-400">${desc}</p>
      </div>
    </div>
  `;
}

/** Pilih metode pembayaran & tampilkan sub-opsi */
function selectPaymentMethod(method, rerender = true) {
  state.checkout.paymentMethod = method;
  state.checkout.subMethod = '';

  document.querySelectorAll('.payment-opt').forEach(el => {
    const radio = el.querySelector('input[type="radio"]');
    if (radio && radio.value === method) {
      el.classList.add('selected');
      radio.checked = true;
    } else {
      el.classList.remove('selected');
      if (radio) radio.checked = false;
    }
  });

  // Sub-pilihan
  const subWrap    = document.getElementById('subMethodWrap');
  const subOptions = document.getElementById('subMethodOptions');

  const subMap = {
    transfer: ['BCA', 'Mandiri', 'BNI', 'BRI', 'BSI'],
    ewallet:  ['GoPay', 'OVO', 'DANA', 'ShopeePay', 'LinkAja'],
    credit:   ['Visa', 'MasterCard', 'JCB', 'Amex'],
  };

  if (subMap[method]) {
    subWrap.classList.remove('hidden');
    subOptions.innerHTML = subMap[method].map(opt => `
      <button onclick="selectSubMethod('${opt}', this)"
        class="sub-method-btn text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-300 hover:border-primary hover:text-primary transition">
        ${opt}
      </button>
    `).join('');
  } else {
    subWrap.classList.add('hidden');
  }

  if (rerender) {
    // Update total ongkir tanpa re-render penuh
    renderCheckout();
  }
}

/** Pilih sub-metode (bank/ewallet) */
function selectSubMethod(opt, btn) {
  state.checkout.subMethod = opt;
  document.querySelectorAll('.sub-method-btn').forEach(b => {
    b.classList.remove('border-primary', 'text-primary', 'bg-primary/5');
  });
  btn.classList.add('border-primary', 'text-primary', 'bg-primary/5');
}

/** Buat pesanan */
function placeOrder() {
  const address = document.getElementById('shippingAddress')?.value.trim();
  if (!address) { showToast('Masukkan alamat pengiriman terlebih dahulu.'); return; }

  const method  = state.checkout.paymentMethod;
  const sub     = state.checkout.subMethod;
  // Validasi sub-method jika diperlukan
  const needSub = ['transfer', 'ewallet', 'credit'];
  if (needSub.includes(method) && !sub) {
    showToast(`Pilih ${method === 'transfer' ? 'bank' : method === 'ewallet' ? 'dompet digital' : 'jaringan kartu'} terlebih dahulu.`);
    return;
  }

  const note     = document.getElementById('orderNote')?.value.trim() || '';
  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = method === 'cod' ? 15000 : 10000;
  const total    = subtotal + shipping;
  const hasPreorder = state.cart.some(i => i.isPreorder);

  // Buat objek order
  const order = {
    id:      'ORD-' + Date.now(),
    items:   [...state.cart],
    total,
    shipping,
    payment: sub ? `${capitalize(method)} (${sub})` : capitalize(method),
    address,
    note,
    status:  hasPreorder ? 'preorder' : 'pengemasan',
    date:    new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
    isPreorder: hasPreorder,
  };

  state.orders.unshift(order);
  state.cart = [];
  saveState();
  updateCartBadge();
  showToast('Pesanan berhasil dibuat! 🎉');
  showView('orders');
}

/* ─────────────────────────────────────────
   ORDERS — Daftar Pesanan
   ───────────────────────────────────────── */

/** Render halaman daftar pesanan */
function renderOrders() {
  const container = document.getElementById('ordersContent');
  container.innerHTML = '';

  if (!state.orders.length) {
    container.innerHTML = `
      <div class="text-center py-16 text-gray-400">
        <svg class="w-16 h-16 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
        <p class="font-semibold">Belum ada pesanan</p>
        <p class="text-sm mt-1">Yuk mulai belanja!</p>
        <button onclick="showView('home')" class="mt-4 bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-primary-dark transition">
          Mulai Belanja
        </button>
      </div>`;
    return;
  }

  state.orders.forEach((order, idx) => {
    const card = document.createElement('article');
    card.className = 'bg-white rounded-2xl border border-gray-200 p-4 mb-4';

    const statusLabel = {
      pengemasan: 'Dalam Pengemasan',
      pengiriman: 'Dalam Pengiriman',
      sampai:     'Sudah Sampai',
      preorder:   'Pre-Order',
      dibatalkan: 'Dibatalkan',
    };

    const statusIcon = {
      pengemasan: '📦',
      pengiriman: '🚚',
      sampai:     '✅',
      preorder:   '🕐',
      dibatalkan: '❌',
    };

    const itemsHtml = order.items.map(item => `
      <div class="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
        <img src="${item.image}" class="w-10 h-12 object-cover rounded-lg flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-800 truncate">${item.name}</p>
          <p class="text-xs text-gray-400">${item.color} · ${item.size} · ${item.qty}x
            ${item.isPreorder ? '<span class="badge-preorder">PO</span>' : ''}
          </p>
        </div>
        <p class="text-sm font-semibold text-primary flex-shrink-0">${formatRupiah(item.price * item.qty)}</p>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="flex items-start justify-between mb-3">
        <div>
          <p class="text-xs text-gray-400">${order.date}</p>
          <p class="text-sm font-mono font-semibold text-gray-700">${order.id}</p>
        </div>
        <span class="order-status-badge status-${order.status}">
          ${statusIcon[order.status] || ''} ${statusLabel[order.status] || order.status}
        </span>
      </div>

      <div class="mb-3">${itemsHtml}</div>

      <div class="bg-gray-50 rounded-xl p-3 text-xs text-gray-500 space-y-1 mb-3">
        <div class="flex justify-between"><span>Pembayaran</span><span class="font-medium text-gray-700">${order.payment}</span></div>
        <div class="flex justify-between"><span>Ongkir</span><span>${formatRupiah(order.shipping)}</span></div>
        <div class="flex justify-between font-bold text-sm"><span class="text-gray-700">Total</span><span class="text-primary">${formatRupiah(order.total)}</span></div>
        <div class="pt-1"><span>Alamat: </span><span class="text-gray-700">${order.address}</span></div>
        ${order.note ? `<div><span>Catatan: </span><span class="text-gray-700">${order.note}</span></div>` : ''}
      </div>

      <!-- Tombol update status (simulasi) -->
      <div class="flex gap-2 flex-wrap">
        ${buildOrderActions(order, idx)}
      </div>
    `;
    container.appendChild(card);
  });
}

/** Bangun tombol aksi pesanan sesuai status */
function buildOrderActions(order, idx) {
  if (order.status === 'dibatalkan' || order.status === 'sampai') return '';

  const buttons = [];

  if (order.status === 'pengemasan') {
    buttons.push(`<button onclick="updateOrderStatus(${idx}, 'pengiriman')"
      class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition">
      Simulasi: Kirim →
    </button>`);
    buttons.push(`<button onclick="updateOrderStatus(${idx}, 'dibatalkan')"
      class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition">
      Batalkan Pesanan
    </button>`);
  }

  if (order.status === 'pengiriman') {
    buttons.push(`<button onclick="updateOrderStatus(${idx}, 'sampai')"
      class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition">
      Konfirmasi Diterima ✓
    </button>`);
  }

  if (order.status === 'preorder') {
    buttons.push(`<button onclick="updateOrderStatus(${idx}, 'pengemasan')"
      class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-yellow-50 text-yellow-700 border border-yellow-200 hover:bg-yellow-100 transition">
      Simulasi: Produk Tersedia →
    </button>`);
    buttons.push(`<button onclick="updateOrderStatus(${idx}, 'dibatalkan')"
      class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition">
      Batalkan Pre-Order
    </button>`);
  }

  return buttons.join('');
}

/** Update status pesanan */
function updateOrderStatus(idx, newStatus) {
  state.orders[idx].status = newStatus;
  saveState();
  renderOrders();
  const labels = { pengiriman: 'Pesanan dalam pengiriman 🚚', sampai: 'Pesanan telah diterima ✅', dibatalkan: 'Pesanan dibatalkan.', pengemasan: 'Produk tersedia, mulai dikemas 📦' };
  showToast(labels[newStatus] || 'Status diperbarui.');

  // Saat pesanan dikonfirmasi diterima, tampilkan modal rating untuk setiap produk
  if (newStatus === 'sampai') {
    const order = state.orders[idx];
    openRatingModal(order.items, order.id);
  }
}

/* ─────────────────────────────────────────
   RATING MODAL
   ───────────────────────────────────────── */

/** State sementara untuk modal rating */
let ratingModalState = {
  orderId:      null,
  items:        [],   // item-item yang perlu dirating
  currentIndex: 0,    // indeks item yang sedang dirating
  selectedScore: 0,   // bintang yang dipilih user saat ini
};

/**
 * Buka modal rating untuk satu pesanan.
 * Hanya tampilkan item yang belum pernah di-review oleh user ini.
 * @param {Array}  items   array item dari pesanan
 * @param {string} orderId ID pesanan
 */
function openRatingModal(items, orderId) {
  // Filter: hanya produk yang belum pernah dirating oleh user ini dalam pesanan ini
  const userEmail = state.currentUser.email;
  const toRate = items.filter(item => {
    const existing = getProductRatings(item.productId);
    return !existing.some(r => r.user === userEmail && r.orderId === orderId);
  });

  if (!toRate.length) return; // semua sudah dirating

  ratingModalState = { orderId, items: toRate, currentIndex: 0, selectedScore: 0 };
  renderRatingModalContent();
  document.getElementById('ratingModal').classList.add('show');
}

/** Render konten modal untuk item saat ini */
function renderRatingModalContent() {
  const { items, currentIndex } = ratingModalState;
  const item = items[currentIndex];
  const product = PRODUCTS.find(p => p.id === item.productId);
  const total = items.length;

  // Bangun bintang interaktif
  const stars = [1, 2, 3, 4, 5].map(n => `
    <span class="star-input" data-score="${n}" onclick="selectRatingScore(${n})" aria-label="${n} bintang">★</span>
  `).join('');

  document.getElementById('ratingModalBody').innerHTML = `
    <!-- Progress -->
    <p class="text-xs text-gray-400 text-center">Produk ${currentIndex + 1} dari ${total}</p>

    <!-- Produk -->
    <div class="flex items-center gap-3">
      <img src="${item.image}" class="w-14 h-16 object-cover rounded-xl flex-shrink-0" />
      <div>
        <p class="text-sm font-semibold text-gray-800">${item.name}</p>
        <p class="text-xs text-gray-400">${item.color} · ${item.size}</p>
      </div>
    </div>

    <!-- Bintang -->
    <div class="text-center">
      <p class="text-sm font-semibold text-gray-700 mb-3">Berapa bintang untuk produk ini?</p>
      <div class="star-input-wrap justify-center" id="starInputWrap">${stars}</div>
      <p id="ratingScoreLabel" class="text-xs text-gray-400 mt-2 h-4"></p>
    </div>

    <!-- Komentar -->
    <div>
      <label class="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">Ulasan (opsional)</label>
      <textarea id="ratingComment" rows="2" placeholder="Tulis pengalamanmu..."
        class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"></textarea>
    </div>

    <!-- Tombol -->
    <div class="flex gap-2 pb-1">
      <button onclick="closeRatingModal()"
        class="flex-1 border-2 border-gray-200 text-gray-500 font-semibold py-2.5 rounded-xl text-sm hover:bg-gray-50 transition">
        Lewati
      </button>
      <button onclick="submitRating()"
        class="flex-1 bg-primary hover:bg-primary-dark text-white font-bold py-2.5 rounded-xl text-sm transition">
        ${currentIndex + 1 < total ? 'Simpan & Lanjut →' : 'Selesai'}
      </button>
    </div>
  `;
}

/** Pilih skor bintang (hover highlight + klik) */
function selectRatingScore(score) {
  ratingModalState.selectedScore = score;

  // Highlight bintang hingga skor terpilih
  document.querySelectorAll('#starInputWrap .star-input').forEach(el => {
    const n = parseInt(el.dataset.score, 10);
    el.classList.toggle('active', n <= score);
  });

  // Label deskriptif
  const labels = { 1: 'Sangat Buruk', 2: 'Buruk', 3: 'Cukup', 4: 'Bagus', 5: 'Sangat Bagus! 🎉' };
  const labelEl = document.getElementById('ratingScoreLabel');
  if (labelEl) labelEl.textContent = labels[score] || '';
}

/** Simpan rating item saat ini lalu lanjut ke item berikutnya atau tutup */
function submitRating() {
  const { orderId, items, currentIndex, selectedScore } = ratingModalState;
  const item    = items[currentIndex];
  const comment = document.getElementById('ratingComment')?.value.trim() || '';

  // Simpan hanya jika user memilih bintang (bukan 0)
  if (selectedScore > 0) {
    const productId = item.productId;
    if (!state.ratings[productId]) state.ratings[productId] = [];
    state.ratings[productId].push({
      user:    state.currentUser.email,
      orderId: orderId,
      score:   selectedScore,
      comment: comment,
      date:    new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
    });
    saveState();
  }

  const nextIndex = currentIndex + 1;
  if (nextIndex < items.length) {
    // Lanjut ke produk berikutnya
    ratingModalState.currentIndex  = nextIndex;
    ratingModalState.selectedScore = 0;
    renderRatingModalContent();
  } else {
    closeRatingModal();
    showToast('Terima kasih atas ulasanmu! ⭐');
    // Refresh grid agar rating baru terlihat
    if (state.currentView === 'home')   renderHomeProducts();
    if (state.currentView === 'search') renderSearchResults();
  }
}

/** Tutup modal rating */
function closeRatingModal() {
  document.getElementById('ratingModal').classList.remove('show');
}

/* ─────────────────────────────────────────
   UTILITIES
   ───────────────────────────────────────── */

/** Format angka ke Rupiah */
function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

/** Tampilkan toast notifikasi */
let toastTimer = null;
function showToast(msg) {
  const toast    = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  toastMsg.textContent = msg;
  toast.classList.remove('hidden');
  toast.style.opacity = '1';

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 2800);
}
