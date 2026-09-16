/* ============================================================
   MAIN.JS — Xol1qulovPC
   Theme (Dark/Light), Til (UZ/EN/RU) va Mobil Sidebar mantiqi.
   Barcha sahifalarda ishlaydi, chunki header/footer struktura
   har bir .html faylda bir xil id/class lar bilan takrorlanadi.
   ============================================================ */

(function () {
  "use strict";

  /* =========================================================
     1) TARJIMALAR LUG'ATI (UZ / EN / RU)
     data-i18n="key" bo'lgan har qanday elementning matni
     shu lug'atdagi qiymat bilan almashtiriladi.
     ========================================================= */
  const translations = {
    uz: {
      "nav.home": "Bosh sahifa",
      "nav.pcs": "Tayyor PC",
      "nav.monitors": "Monitorlar",
      "nav.parts": "Jihozlar",
      "nav.deals": "Aksiyalar",
      "nav.contact": "Aloqa",
      "hero.eyebrow": "Xol1qulovPC do'koni",
      "hero.title": "Kuchli kompyuter — aniq vazifa uchun",
      "hero.subtitle":
        "O'yin, o'qish yoki ish uchun tayyor tizimlar va original jihozlar. Toshkent bo'ylab yetkazib berish va rasmiy kafolat bilan.",
      "hero.cta.primary": "Tayyor PC larni ko'rish",
      "hero.cta.secondary": "Jihozlarni ko'rish",
      "hero.stat1.label": "sotilgan tizim",
      "hero.stat2.label": "original brend",
      "hero.stat3.label": "kafolat muddati",
      "section.categories": "Toifalar bo'yicha xarid qiling",
      "section.featured": "Tavsiya etilgan mahsulotlar",
      "section.why": "Nega aynan Xol1qulovPC?",
      "section.deals": "Joriy aksiyalar",
      "cat.pcs.title": "Tayyor PC",
      "cat.pcs.desc": "Gaming, ish va o'quv kompyuterlari",
      "cat.monitors.title": "Monitorlar",
      "cat.monitors.desc": "144Hz dan 4K gacha displeylar",
      "cat.parts.title": "Jihozlar",
      "cat.parts.desc": "Protsessor, videokarta, RAM va boshqalar",
      "cat.deals.title": "Aksiyalar",
      "cat.deals.desc": "Chegirmadagi eng yaxshi takliflar",
      "why.1.title": "Original mahsulotlar",
      "why.1.desc": "Faqat rasmiy distribyutorlardan olib kelingan jihozlar",
      "why.2.title": "Tez yetkazib berish",
      "why.2.desc": "Toshkent bo'ylab 24 soat ichida yetkazib beramiz",
      "why.3.title": "Rasmiy kafolat",
      "why.3.desc": "Har bir mahsulotga 12-36 oy kafolat beriladi",
      "why.4.title": "Bepul konsultatsiya",
      "why.4.desc": "Sizga mos konfiguratsiyani tanlab beramiz",
      "btn.buy": "Sotib olish",
      "btn.viewAll": "Barchasini ko'rish",
      "btn.filter.all": "Barchasi",
      "empty.title": "Ushbu filtr bo'yicha mahsulot topilmadi",
      "footer.about.title": "Xol1qulovPC",
      "footer.about.desc":
        "2019 yildan beri Toshkentda kompyuter va PC jihozlari savdosi bilan shug'ullanamiz.",
      "footer.links.title": "Sahifalar",
      "footer.contact.title": "Bog'lanish",
      "footer.rights": "Barcha huquqlar himoyalangan.",
      "page.pcs.title": "Tayyor PC tizimlari",
      "page.pcs.subtitle":
        "O'yin, o'qish va ish uchun oldindan yig'ilgan, tekshirilgan kompyuterlar",
      "page.monitors.title": "Monitorlar katalogi",
      "page.monitors.subtitle":
        "Ofis ishidan tortib, yuqori chastotali gaming displeylargacha",
      "page.parts.title": "Kompyuter jihozlari",
      "page.parts.subtitle":
        "O'zingiz PC yig'ish yoki mavjud tizimni yangilash uchun barcha detallar",
      "page.deals.title": "Aksiya va chegirmalar",
      "page.deals.subtitle": "Muddati cheklangan maxsus takliflar — hoziroq ulgurib qoling",
      "page.contact.title": "Biz bilan bog'laning",
      "page.contact.subtitle":
        "Savol, buyurtma yoki konsultatsiya uchun quyidagi usullardan birini tanlang",
      "filter.pcs.gaming": "Gaming",
      "filter.pcs.office": "Ofis",
      "filter.pcs.workstation": "Workstation",
      "filter.pcs.budget": "Byudjet",
      "filter.monitors.gaming": "Gaming",
      "filter.monitors.office": "Ofis",
      "filter.monitors.design": "Dizayn",
      "filter.parts.cpu": "Protsessor",
      "filter.parts.gpu": "Videokarta",
      "filter.parts.ram": "Xotira",
      "filter.parts.storage": "Disk",
      "filter.parts.cooling": "Sovutish",
      "filter.parts.psu": "Blok pitaniya",
      "filter.parts.case": "Korpus",
      "filter.parts.keyboard": "Klaviatura",
      "filter.parts.mouse": "Sichqoncha",
      "filter.parts.headset": "Quloqchin",
      "badge.new": "Yangi",
      "badge.hot": "Top savdo",
      "contact.info.title": "Aloqa ma'lumotlari",
      "contact.form.title": "Xabar yuborish",
      "contact.form.name": "Ismingiz",
      "contact.form.phone": "Telefon raqam",
      "contact.form.message": "Xabar matni",
      "contact.form.submit": "Telegram orqali yuborish",
      "about.title": "Biz haqimizda",
      "about.text":
        "Xol1qulovPC — 2019 yildan buyon Toshkentda faoliyat yuritayotgan kompyuter texnikasi do'koni. Biz gamerlar, dizaynerlar, dasturchilar va oddiy foydalanuvchilar uchun sifatli va ishonchli yechimlar taklif qilamiz.",
    },
    en: {
      "nav.home": "Home",
      "nav.pcs": "Prebuilt PCs",
      "nav.monitors": "Monitors",
      "nav.parts": "Components",
      "nav.deals": "Deals",
      "nav.contact": "Contact",
      "hero.eyebrow": "Xol1qulovPC store",
      "hero.title": "A powerful computer for the exact job",
      "hero.subtitle":
        "Prebuilt systems and genuine components for gaming, study or work. Delivery across Tashkent with official warranty.",
      "hero.cta.primary": "Browse prebuilt PCs",
      "hero.cta.secondary": "Browse components",
      "hero.stat1.label": "systems sold",
      "hero.stat2.label": "original brands",
      "hero.stat3.label": "warranty coverage",
      "section.categories": "Shop by category",
      "section.featured": "Featured products",
      "section.why": "Why Xol1qulovPC?",
      "section.deals": "Current deals",
      "cat.pcs.title": "Prebuilt PCs",
      "cat.pcs.desc": "Gaming, work and study computers",
      "cat.monitors.title": "Monitors",
      "cat.monitors.desc": "From 144Hz displays to 4K panels",
      "cat.parts.title": "Components",
      "cat.parts.desc": "CPUs, GPUs, RAM and more",
      "cat.deals.title": "Deals",
      "cat.deals.desc": "The best discounted offers",
      "why.1.title": "Genuine products",
      "why.1.desc": "Sourced only from official distributors",
      "why.2.title": "Fast delivery",
      "why.2.desc": "Delivered across Tashkent within 24 hours",
      "why.3.title": "Official warranty",
      "why.3.desc": "Every product ships with a 12-36 month warranty",
      "why.4.title": "Free consultation",
      "why.4.desc": "We help you pick the right configuration",
      "btn.buy": "Buy now",
      "btn.viewAll": "View all",
      "btn.filter.all": "All",
      "empty.title": "No products match this filter",
      "footer.about.title": "Xol1qulovPC",
      "footer.about.desc":
        "Selling computers and PC components in Tashkent since 2019.",
      "footer.links.title": "Pages",
      "footer.contact.title": "Contact",
      "footer.rights": "All rights reserved.",
      "page.pcs.title": "Prebuilt PC systems",
      "page.pcs.subtitle":
        "Pre-assembled, tested computers for gaming, study and work",
      "page.monitors.title": "Monitor catalog",
      "page.monitors.subtitle":
        "From everyday office use to high refresh-rate gaming displays",
      "page.parts.title": "Computer components",
      "page.parts.subtitle":
        "Everything you need to build a PC or upgrade an existing one",
      "page.deals.title": "Deals & discounts",
      "page.deals.subtitle": "Limited-time offers — grab them before they're gone",
      "page.contact.title": "Get in touch",
      "page.contact.subtitle":
        "Choose one of the options below for questions, orders or advice",
      "filter.pcs.gaming": "Gaming",
      "filter.pcs.office": "Office",
      "filter.pcs.workstation": "Workstation",
      "filter.pcs.budget": "Budget",
      "filter.monitors.gaming": "Gaming",
      "filter.monitors.office": "Office",
      "filter.monitors.design": "Design",
      "filter.parts.cpu": "CPU",
      "filter.parts.gpu": "GPU",
      "filter.parts.ram": "Memory",
      "filter.parts.storage": "Storage",
      "filter.parts.cooling": "Cooling",
      "filter.parts.psu": "Power supply",
      "filter.parts.case": "Case",
      "filter.parts.keyboard": "Keyboard",
      "filter.parts.mouse": "Mouse",
      "filter.parts.headset": "Headset",
      "badge.new": "New",
      "badge.hot": "Best seller",
      "contact.info.title": "Contact details",
      "contact.form.title": "Send a message",
      "contact.form.name": "Your name",
      "contact.form.phone": "Phone number",
      "contact.form.message": "Message",
      "contact.form.submit": "Send via Telegram",
      "about.title": "About us",
      "about.text":
        "Xol1qulovPC has been operating in Tashkent since 2019. We offer reliable, quality solutions for gamers, designers, developers and everyday users.",
    },
    ru: {
      "nav.home": "Главная",
      "nav.pcs": "Готовые ПК",
      "nav.monitors": "Мониторы",
      "nav.parts": "Комплектующие",
      "nav.deals": "Акции",
      "nav.contact": "Контакты",
      "hero.eyebrow": "Магазин Xol1qulovPC",
      "hero.title": "Мощный компьютер под вашу задачу",
      "hero.subtitle":
        "Готовые системы и оригинальные комплектующие для игр, учёбы и работы. Доставка по Ташкенту и официальная гарантия.",
      "hero.cta.primary": "Смотреть готовые ПК",
      "hero.cta.secondary": "Смотреть комплектующие",
      "hero.stat1.label": "проданных систем",
      "hero.stat2.label": "оригинальных брендов",
      "hero.stat3.label": "гарантийный срок",
      "section.categories": "Покупайте по категориям",
      "section.featured": "Рекомендуемые товары",
      "section.why": "Почему Xol1qulovPC?",
      "section.deals": "Текущие акции",
      "cat.pcs.title": "Готовые ПК",
      "cat.pcs.desc": "Игровые, рабочие и учебные компьютеры",
      "cat.monitors.title": "Мониторы",
      "cat.monitors.desc": "От 144Hz дисплеев до 4K панелей",
      "cat.parts.title": "Комплектующие",
      "cat.parts.desc": "Процессоры, видеокарты, память и другое",
      "cat.deals.title": "Акции",
      "cat.deals.desc": "Лучшие предложения со скидкой",
      "why.1.title": "Оригинальные товары",
      "why.1.desc": "Поставки только от официальных дистрибьюторов",
      "why.2.title": "Быстрая доставка",
      "why.2.desc": "Доставляем по Ташкенту в течение 24 часов",
      "why.3.title": "Официальная гарантия",
      "why.3.desc": "На каждый товар гарантия 12-36 месяцев",
      "why.4.title": "Бесплатная консультация",
      "why.4.desc": "Поможем подобрать подходящую конфигурацию",
      "btn.buy": "Купить",
      "btn.viewAll": "Показать все",
      "btn.filter.all": "Все",
      "empty.title": "По этому фильтру товаров не найдено",
      "footer.about.title": "Xol1qulovPC",
      "footer.about.desc":
        "Продаём компьютеры и комплектующие в Ташкенте с 2019 года.",
      "footer.links.title": "Страницы",
      "footer.contact.title": "Контакты",
      "footer.rights": "Все права защищены.",
      "page.pcs.title": "Готовые ПК системы",
      "page.pcs.subtitle":
        "Собранные и протестированные компьютеры для игр, учёбы и работы",
      "page.monitors.title": "Каталог мониторов",
      "page.monitors.subtitle":
        "От офисных задач до игровых дисплеев с высокой частотой обновления",
      "page.parts.title": "Комплектующие для ПК",
      "page.parts.subtitle":
        "Всё необходимое для сборки нового ПК или апгрейда старого",
      "page.deals.title": "Акции и скидки",
      "page.deals.subtitle": "Ограниченные предложения — успейте купить",
      "page.contact.title": "Свяжитесь с нами",
      "page.contact.subtitle":
        "Выберите удобный способ для вопросов, заказа или консультации",
      "filter.pcs.gaming": "Игровые",
      "filter.pcs.office": "Офисные",
      "filter.pcs.workstation": "Рабочие станции",
      "filter.pcs.budget": "Бюджетные",
      "filter.monitors.gaming": "Игровые",
      "filter.monitors.office": "Офисные",
      "filter.monitors.design": "Дизайн",
      "filter.parts.cpu": "Процессор",
      "filter.parts.gpu": "Видеокарта",
      "filter.parts.ram": "Память",
      "filter.parts.storage": "Накопитель",
      "filter.parts.cooling": "Охлаждение",
      "filter.parts.psu": "Блок питания",
      "filter.parts.case": "Корпус",
      "filter.parts.keyboard": "Клавиатура",
      "filter.parts.mouse": "Мышь",
      "filter.parts.headset": "Гарнитура",
      "badge.new": "Новинка",
      "badge.hot": "Хит продаж",
      "contact.info.title": "Контактные данные",
      "contact.form.title": "Отправить сообщение",
      "contact.form.name": "Ваше имя",
      "contact.form.phone": "Номер телефона",
      "contact.form.message": "Текст сообщения",
      "contact.form.submit": "Отправить в Telegram",
      "about.title": "О нас",
      "about.text":
        "Xol1qulovPC работает в Ташкенте с 2019 года. Мы предлагаем надёжные и качественные решения для геймеров, дизайнеров, разработчиков и обычных пользователей.",
    },
  };

  /* =========================================================
     2) TIL BOSHQARUVI
     ========================================================= */
  function applyLanguage(lang) {
    const dict = translations[lang] || translations.uz;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("xoliqulovpc-lang", lang);

    /* Til o'zgarganda mahsulot kartalari qayta chizilgan bo'lsa,
       ularning ichidagi data-i18n (masalan "Sotib olish") yangilansin */
    document.querySelectorAll(".lang-select").forEach((sel) => {
      sel.value = lang;
    });
  }

  function initLanguage() {
    const saved = localStorage.getItem("xoliqulovpc-lang") || "uz";
    applyLanguage(saved);

    document.querySelectorAll(".lang-select").forEach((select) => {
      select.value = saved;
      select.addEventListener("change", (e) => {
        applyLanguage(e.target.value);
      });
    });
  }

  /* =========================================================
     3) DARK / LIGHT MODE
     ========================================================= */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("xoliqulovpc-theme", theme);

    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Light mode ga o'tish" : "Dark mode ga o'tish"
      );
    });
  }

  function initTheme() {
    const saved =
      localStorage.getItem("xoliqulovpc-theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");
    applyTheme(saved);

    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        applyTheme(current === "dark" ? "light" : "dark");
      });
    });
  }

  /* =========================================================
     4) MOBIL HAMBURGER / SIDEBAR MENYU
     ========================================================= */
  function initSidebar() {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    const closeBtn = document.querySelector(".sidebar__close");

    if (!hamburger || !sidebar || !overlay) return;

    function openSidebar() {
      sidebar.classList.add("is-open");
      overlay.classList.add("is-open");
      hamburger.classList.add("is-active");
      document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
      sidebar.classList.remove("is-open");
      overlay.classList.remove("is-open");
      hamburger.classList.remove("is-active");
      document.body.style.overflow = "";
    }

    hamburger.addEventListener("click", () => {
      sidebar.classList.contains("is-open") ? closeSidebar() : openSidebar();
    });
    overlay.addEventListener("click", closeSidebar);
    if (closeBtn) closeBtn.addEventListener("click", closeSidebar);

    /* Sidebar ichidagi havola bosilganda ham yopilsin */
    sidebar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeSidebar);
    });

    /* Ekran kengaytirilganda (desktopga qaytganda) sidebar avtomatik yopilsin */
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeSidebar();
    });
  }

  /* =========================================================
     5) JORIY SAHIFA UCHUN NAV LINKNI FAOLLASHTIRISH
     ========================================================= */
  function markActiveNav() {
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === current) link.classList.add("is-active");
    });
  }

  /* =========================================================
     6) HEADER SCROLL HOLATI (glass effekt kuchayishi uchun)
     ========================================================= */
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    });
  }

  /* =========================================================
     INIT
     ========================================================= */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLanguage();
    initSidebar();
    markActiveNav();
    initHeaderScroll();
  });
})();
