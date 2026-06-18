(function () {
  const toggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      mobileNav.classList.toggle("is-open");
    });
  }

  const slides = Array.from(document.querySelectorAll("[data-hero-slide]"));
  const dots = Array.from(document.querySelectorAll("[data-hero-dot]"));
  const next = document.querySelector("[data-hero-next]");
  const prev = document.querySelector("[data-hero-prev]");
  let heroIndex = 0;

  function showHero(index) {
    if (!slides.length) {
      return;
    }

    heroIndex = (index + slides.length) % slides.length;

    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === heroIndex);
    });

    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === heroIndex);
    });
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      showHero(i);
    });
  });

  if (next) {
    next.addEventListener("click", function () {
      showHero(heroIndex + 1);
    });
  }

  if (prev) {
    prev.addEventListener("click", function () {
      showHero(heroIndex - 1);
    });
  }

  if (slides.length > 1) {
    window.setInterval(function () {
      showHero(heroIndex + 1);
    }, 5600);
  }

  const search = document.querySelector("[data-search]");
  const type = document.querySelector("[data-type-filter]");
  const year = document.querySelector("[data-year-filter]");
  const cards = Array.from(document.querySelectorAll("[data-movie-card]"));

  function applyFilters() {
    const q = search ? search.value.trim().toLowerCase() : "";
    const typeValue = type ? type.value : "";
    const yearValue = year ? year.value : "";

    cards.forEach(function (card) {
      const title = (card.getAttribute("data-title") || "").toLowerCase();
      const tags = (card.getAttribute("data-tags") || "").toLowerCase();
      const cardType = card.getAttribute("data-type") || "";
      const cardYear = card.getAttribute("data-year") || "";
      const matchText = !q || title.indexOf(q) >= 0 || tags.indexOf(q) >= 0;
      const matchType = !typeValue || cardType.indexOf(typeValue) >= 0;
      const matchYear = !yearValue || cardYear === yearValue;

      card.classList.toggle("hidden-by-filter", !(matchText && matchType && matchYear));
    });
  }

  [search, type, year].forEach(function (control) {
    if (control) {
      control.addEventListener("input", applyFilters);
      control.addEventListener("change", applyFilters);
    }
  });

  document.querySelectorAll("[data-player-trigger]").forEach(function (button) {
    button.addEventListener("click", function () {
      const target = document.getElementById(button.getAttribute("data-player-trigger"));

      if (target) {
        target.click();
      }
    });
  });

  window.setupMoviePlayer = function (videoId, overlayId, url) {
    const video = document.getElementById(videoId);
    const overlay = document.getElementById(overlayId);

    if (!video || !overlay || !url) {
      return;
    }

    let ready = false;

    function prepare() {
      if (ready) {
        return;
      }

      ready = true;

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = url;
      } else if (window.Hls && window.Hls.isSupported()) {
        const hls = new window.Hls({ enableWorker: true });
        hls.loadSource(url);
        hls.attachMedia(video);
      } else {
        video.src = url;
      }
    }

    function play() {
      prepare();
      overlay.classList.add("is-hidden");
      const promise = video.play();

      if (promise && promise.catch) {
        promise.catch(function () {});
      }
    }

    overlay.addEventListener("click", play);
    video.addEventListener("click", function () {
      if (video.paused) {
        play();
      }
    });
  };
})();
