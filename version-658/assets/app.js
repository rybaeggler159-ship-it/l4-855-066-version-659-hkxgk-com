const MovieSite = (() => {
  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function setupMenu() {
    const button = qs("[data-menu-toggle]");
    const nav = qs("[data-mobile-nav]");
    if (!button || !nav) {
      return;
    }
    button.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });
  }

  function setupHero() {
    const hero = qs("[data-hero]");
    if (!hero) {
      return;
    }
    const slides = qsa(".hero-slide", hero);
    const dots = qsa("[data-hero-dots] button", hero);
    if (slides.length < 2) {
      return;
    }
    let index = 0;
    const show = (next) => {
      index = next;
      slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
    };
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => show(i));
    });
    window.setInterval(() => {
      show((index + 1) % slides.length);
    }, 5200);
  }

  function setupPageFilter() {
    const list = qs("[data-card-list]");
    if (!list) {
      return;
    }
    const cards = qsa(".movie-card", list);
    const searchInput = qs("[data-page-filter]");
    const selects = qsa("[data-filter-field]");
    const apply = () => {
      const keyword = (searchInput ? searchInput.value : "").trim().toLowerCase();
      const selected = selects.map((select) => ({
        field: select.dataset.filterField,
        value: select.value.trim().toLowerCase()
      }));
      cards.forEach((card) => {
        const haystack = [
          card.dataset.title,
          card.dataset.region,
          card.dataset.genre,
          card.dataset.year,
          card.dataset.type
        ].join(" ").toLowerCase();
        const matchKeyword = !keyword || haystack.includes(keyword);
        const matchSelects = selected.every((item) => {
          if (!item.value) {
            return true;
          }
          return String(card.dataset[item.field] || "").toLowerCase().includes(item.value);
        });
        card.classList.toggle("is-hidden", !(matchKeyword && matchSelects));
      });
    };
    if (searchInput) {
      searchInput.addEventListener("input", apply);
    }
    selects.forEach((select) => select.addEventListener("change", apply));
  }

  function setupSearchPanel() {
    const panel = qs("[data-search-panel]");
    const input = qs("[data-global-search]");
    const results = qs("[data-search-results]");
    if (!panel || !input || !results) {
      return;
    }
    const openButtons = qsa("[data-open-search]");
    const closeButtons = qsa("[data-close-search]");
    const open = () => {
      panel.classList.add("is-open");
      panel.setAttribute("aria-hidden", "false");
      input.focus();
    };
    const close = () => {
      panel.classList.remove("is-open");
      panel.setAttribute("aria-hidden", "true");
    };
    const render = () => {
      const keyword = input.value.trim().toLowerCase();
      results.innerHTML = "";
      if (!keyword) {
        return;
      }
      const data = Array.isArray(window.SEARCH_MOVIES) ? window.SEARCH_MOVIES : [];
      const matches = data.filter((item) => {
        return [item.title, item.region, item.genre, item.year, item.type].join(" ").toLowerCase().includes(keyword);
      }).slice(0, 18);
      const html = matches.map((item) => `
        <a class="search-result" href="${item.url}">
          <img src="${item.cover}" alt="${item.title}">
          <span>
            <strong>${item.title}</strong>
            <span>${item.region} · ${item.year} · ${item.genre}</span>
          </span>
        </a>
      `).join("");
      results.innerHTML = html;
    };
    openButtons.forEach((button) => button.addEventListener("click", open));
    closeButtons.forEach((button) => button.addEventListener("click", close));
    input.addEventListener("input", render);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close();
      }
    });
  }

  function bindPlayer(videoId, overlayId, sourceUrl) {
    const video = document.getElementById(videoId);
    const overlay = document.getElementById(overlayId);
    if (!video || !overlay || !sourceUrl) {
      return;
    }
    let loaded = false;
    const load = () => {
      if (loaded) {
        return Promise.resolve();
      }
      loaded = true;
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = sourceUrl;
        return Promise.resolve();
      }
      if (window.Hls && window.Hls.isSupported()) {
        const hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90
        });
        hls.loadSource(sourceUrl);
        hls.attachMedia(video);
        return new Promise((resolve) => {
          hls.on(window.Hls.Events.MANIFEST_PARSED, resolve);
          window.setTimeout(resolve, 1800);
        });
      }
      video.src = sourceUrl;
      return Promise.resolve();
    };
    const play = () => {
      overlay.classList.add("is-hidden");
      load().then(() => video.play()).catch(() => {
        overlay.classList.remove("is-hidden");
      });
    };
    overlay.addEventListener("click", play);
    video.addEventListener("play", () => overlay.classList.add("is-hidden"));
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    setupHero();
    setupPageFilter();
    setupSearchPanel();
  });

  return {
    bindPlayer
  };
})();
