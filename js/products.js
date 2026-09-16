/* ============================================================
   PRODUCTS.JS — Xol1qulovPC
   Bu faylda barcha mahsulotlar ma'lumotlari (JS massiv/obyekt
   ko'rinishida) va ularni sahifada chiqarish/filtrlash uchun
   funksiyalar saqlanadi. Backend yo'q — hammasi shu yerda.
   ============================================================ */

/* Telegram akkaunt (Sotib olish tugmasi shu yerga yo'naltiradi) */
const TELEGRAM_USERNAME = "xoliqulovu";

/* Har bir mahsulot uchun ikonka (SVG emoji o'rniga belgi sifatida
   ishlatiladi — rasm fayllariga bog'liq bo'lmaslik uchun) */
const CATEGORY_ICON = {
  pc: "🖥️",
  monitor: "🖼️",
  cpu: "🧠",
  gpu: "🎮",
  ram: "📶",
  storage: "💾",
  keyboard: "⌨️",
  mouse: "🖱️",
  cooling: "❄️",
  psu: "🔌",
  case: "🗄️",
  headset: "🎧",
};

/* =========================
   MAHSULOTLAR MASSIVI
   =========================
   page: qaysi sahifada chiqishi kerak (pcs | monitors | parts)
   tag: filtr uchun kichik toifa
   badge: "new" | "sale" | "hot" | null
   oldPrice: chegirma bo'lsa asl narx (deals sahifasi uchun)
*/
const PRODUCTS = [
  /* ---------- TAYYOR PC / GAMING / O'QUV SISTEMALARI ---------- */
  {
    id: "pc-001",
    page: "pcs",
    tag: "gaming",
    icon: "pc",
    name: "Falcon X Gaming PC",
    specs: "Ryzen 7 7700X · RTX 4070 · 32GB DDR5 · 1TB NVMe",
    price: 18500000,
    oldPrice: null,
    badge: "hot",
  },
  {
    id: "pc-002",
    page: "pcs",
    tag: "gaming",
    icon: "pc",
    name: "Vortex Ultra RGB",
    specs: "Core i7-14700K · RTX 4080 Super · 32GB DDR5 · 2TB NVMe",
    price: 27900000,
    oldPrice: 30500000,
    badge: "sale",
  },
  {
    id: "pc-003",
    page: "pcs",
    tag: "office",
    icon: "pc",
    name: "StudyLine Office Mini",
    specs: "Core i5-13400 · Intel UHD 730 · 16GB DDR4 · 512GB SSD",
    price: 7200000,
    oldPrice: null,
    badge: "new",
  },
  {
    id: "pc-004",
    page: "pcs",
    tag: "workstation",
    icon: "pc",
    name: "CreatorForge Studio",
    specs: "Ryzen 9 7950X · RTX 4090 · 64GB DDR5 · 2TB NVMe",
    price: 42800000,
    oldPrice: null,
    badge: null,
  },
  {
    id: "pc-005",
    page: "pcs",
    tag: "budget",
    icon: "pc",
    name: "EntryLevel Home PC",
    specs: "Ryzen 5 5600G · Radeon Vega 7 · 16GB DDR4 · 512GB SSD",
    price: 5100000,
    oldPrice: null,
    badge: null,
  },
  {
    id: "pc-006",
    page: "pcs",
    tag: "gaming",
    icon: "pc",
    name: "Specter Mid-Tower",
    specs: "Core i5-13600KF · RTX 4060 Ti · 16GB DDR5 · 1TB NVMe",
    price: 15400000,
    oldPrice: null,
    badge: null,
  },

  /* ---------- MONITORLAR ---------- */
  {
    id: "mon-001",
    page: "monitors",
    tag: "gaming",
    icon: "monitor",
    name: "ViewMax 27 QHD 165Hz",
    specs: "27\" · QHD 2560x1440 · 165Hz · 1ms · IPS",
    price: 3600000,
    oldPrice: 4100000,
    badge: "sale",
  },
  {
    id: "mon-002",
    page: "monitors",
    tag: "office",
    icon: "monitor",
    name: "ClearWork 24 FHD",
    specs: "24\" · FHD 1920x1080 · 75Hz · IPS · Blue-light filter",
    price: 1550000,
    oldPrice: null,
    badge: null,
  },
  {
    id: "mon-003",
    page: "monitors",
    tag: "gaming",
    icon: "monitor",
    name: "UltraCurve 34 UWQHD",
    specs: "34\" · Curved · UWQHD · 144Hz · 1ms · VA",
    price: 7900000,
    oldPrice: null,
    badge: "new",
  },
  {
    id: "mon-004",
    page: "monitors",
    tag: "design",
    icon: "monitor",
    name: "ColorPro 27 4K",
    specs: "27\" · 4K UHD · 60Hz · 99% sRGB · IPS",
    price: 5400000,
    oldPrice: null,
    badge: null,
  },
  {
    id: "mon-005",
    page: "monitors",
    tag: "gaming",
    icon: "monitor",
    name: "RapidView 24 240Hz",
    specs: "24.5\" · FHD · 240Hz · 0.5ms · TN eSports",
    price: 3200000,
    oldPrice: null,
    badge: "hot",
  },

  /* ---------- KOMPYUTER JIHOZLARI VA AKSESSUARLAR ---------- */
  {
    id: "part-001",
    page: "parts",
    tag: "cpu",
    icon: "cpu",
    name: "AMD Ryzen 7 7800X3D",
    specs: "8 yadro / 16 oqim · 5.0GHz Boost · AM5",
    price: 5200000,
    oldPrice: null,
    badge: "hot",
  },
  {
    id: "part-002",
    page: "parts",
    tag: "cpu",
    icon: "cpu",
    name: "Intel Core i9-14900K",
    specs: "24 yadro / 32 oqim · 6.0GHz Boost · LGA1700",
    price: 7800000,
    oldPrice: null,
    badge: null,
  },
  {
    id: "part-003",
    page: "parts",
    tag: "gpu",
    icon: "gpu",
    name: "GeForce RTX 4070 Super",
    specs: "12GB GDDR6X · Ray Tracing · DLSS 3",
    price: 9600000,
    oldPrice: 10400000,
    badge: "sale",
  },
  {
    id: "part-004",
    page: "parts",
    tag: "gpu",
    icon: "gpu",
    name: "Radeon RX 7800 XT",
    specs: "16GB GDDR6 · FSR 3 · High refresh optimized",
    price: 8100000,
    oldPrice: null,
    badge: null,
  },
  {
    id: "part-005",
    page: "parts",
    tag: "ram",
    icon: "ram",
    name: "Kingston Fury 32GB DDR5",
    specs: "2x16GB · 6000MHz · CL36 · RGB",
    price: 1450000,
    oldPrice: null,
    badge: null,
  },
  {
    id: "part-006",
    page: "parts",
    tag: "storage",
    icon: "storage",
    name: "Samsung 990 Pro 2TB",
    specs: "NVMe PCIe 4.0 · 7450MB/s o'qish tezligi",
    price: 2350000,
    oldPrice: null,
    badge: "new",
  },
  {
    id: "part-007",
    page: "parts",
    tag: "cooling",
    icon: "cooling",
    name: "DeepCool LS520 AIO",
    specs: "240mm suyuq sovutish · ARGB · Past shovqin",
    price: 980000,
    oldPrice: null,
    badge: null,
  },
  {
    id: "part-008",
    page: "parts",
    tag: "psu",
    icon: "psu",
    name: "Corsair RM750x 750W",
    specs: "80+ Gold · To'liq modulli · 10 yil kafolat",
    price: 1250000,
    oldPrice: null,
    badge: null,
  },
  {
    id: "part-009",
    page: "parts",
    tag: "case",
    icon: "case",
    name: "Lian Li O11 Dynamic",
    specs: "Mid-Tower · Tempered Glass · Yaxshi havo aylanishi",
    price: 1650000,
    oldPrice: null,
    badge: null,
  },
  {
    id: "part-010",
    page: "parts",
    tag: "keyboard",
    icon: "keyboard",
    name: "Keychron K8 Mexanik",
    specs: "TKL · Hot-swappable · RGB backlight",
    price: 780000,
    oldPrice: null,
    badge: null,
  },
  {
    id: "part-011",
    page: "parts",
    tag: "mouse",
    icon: "mouse",
    name: "Logitech G Pro X Superlight",
    specs: "63g · 25,600 DPI · Simsiz · 70 soat batareya",
    price: 950000,
    oldPrice: null,
    badge: "hot",
  },
  {
    id: "part-012",
    page: "parts",
    tag: "headset",
    icon: "headset",
    name: "HyperX Cloud III",
    specs: "7.1 Surround · DTS · Yumshoq quloqchalar",
    price: 720000,
    oldPrice: null,
    badge: null,
  },
];

/* Narxni chiroyli formatga o'tkazish: 18500000 -> "18 500 000" */
function formatPrice(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/* Bitta mahsulot kartasi uchun HTML yaratish */
function renderProductCard(p) {
  const discount = p.oldPrice
    ? Math.round(100 - (p.price / p.oldPrice) * 100)
    : null;

  const badgeMap = {
    new: '<span class="badge badge--new" data-i18n="badge.new">Yangi</span>',
    sale: `<span class="badge badge--sale">-${discount}%</span>`,
    hot: '<span class="badge badge--hot" data-i18n="badge.hot">Top savdo</span>',
  };

  const badgeHtml = p.badge ? badgeMap[p.badge] : "";
  const oldPriceHtml = p.oldPrice
    ? `<span class="product-card__old-price">${formatPrice(p.oldPrice)} so'm</span>`
    : "";

  const tgMessage = encodeURIComponent(
    `Assalomu alaykum! "${p.name}" mahsulotini sotib olmoqchiman. Narxi: ${formatPrice(p.price)} so'm.`
  );
  const tgLink = `https://t.me/${TELEGRAM_USERNAME}?text=${tgMessage}`;

  return `
    <article class="product-card" data-tag="${p.tag}">
      <div class="product-card__media">
        <span class="product-card__icon">${CATEGORY_ICON[p.icon] || "🔧"}</span>
        ${badgeHtml}
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__specs">${p.specs}</p>
        <div class="product-card__price-row">
          <span class="product-card__price">${formatPrice(p.price)} so'm</span>
          ${oldPriceHtml}
        </div>
        <a class="btn btn--buy" href="${tgLink}" target="_blank" rel="noopener">
          <span data-i18n="btn.buy">Sotib olish</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </article>`;
}

/* Berilgan konteynerga mahsulotlar ro'yxatini chizish */
function renderProducts(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p data-i18n="empty.title">Ushbu filtr bo'yicha mahsulot topilmadi</p>
      </div>`;
    return;
  }

  container.innerHTML = items.map(renderProductCard).join("");
}

/* Sahifa bo'yicha mahsulotlarni chiqarish va filtr tugmalarini ulash
   pageKey: "pcs" | "monitors" | "parts" | "deals"
   containerId: mahsulotlar joylashadigan grid elementi id si
   filterBarId: filtr tugmalari joylashgan element id si (ixtiyoriy) */
function initProductPage(pageKey, containerId, filterBarId) {
  let items =
    pageKey === "deals"
      ? PRODUCTS.filter((p) => p.oldPrice !== null || p.badge === "sale")
      : PRODUCTS.filter((p) => p.page === pageKey);

  renderProducts(containerId, items);

  const filterBar = filterBarId ? document.getElementById(filterBarId) : null;
  if (!filterBar) return;

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;

    /* Aktiv tugmani belgilash */
    filterBar
      .querySelectorAll("[data-filter]")
      .forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const filter = btn.dataset.filter;
    const filtered =
      filter === "all" ? items : items.filter((p) => p.tag === filter);

    renderProducts(containerId, filtered);
  });
}

/* Bosh sahifadagi "Tavsiya etilgan" mahsulotlar (har toifadan bittadan) */
function renderFeaturedProducts(containerId) {
  const featured = PRODUCTS.filter((p) =>
    ["pc-001", "mon-001", "part-003", "part-011", "pc-002", "mon-005"].includes(p.id)
  );
  renderProducts(containerId, featured);
}
