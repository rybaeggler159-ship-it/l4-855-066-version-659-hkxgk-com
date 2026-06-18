(function () {
  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function initializeMobileNavigation() {
    const button = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-site-nav]");

    if (!button || !nav) {
      return;
    }

    button.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  function initializeCoverFallbacks() {
    document.querySelectorAll("img[data-cover]").forEach(function (image) {
      image.addEventListener("error", function () {
        const wrapper = image.closest("figure") || image.parentElement;

        if (wrapper) {
          wrapper.classList.add("image-missing");
        }
      });
    });
  }

  function initializeHeroCarousel() {
    const carousel = document.querySelector("[data-hero-carousel]");

    if (!carousel) {
      return;
    }

    const slides = Array.from(carousel.querySelectorAll("[data-hero-slide]"));
    const dots = Array.from(carousel.querySelectorAll("[data-hero-dot]"));
    const previousButton = carousel.querySelector("[data-hero-prev]");
    const nextButton = carousel.querySelector("[data-hero-next]");
    let activeIndex = 0;
    let timer = null;

    function showSlide(index) {
      activeIndex = (index + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("active", slideIndex === activeIndex);
      });

      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("active", dotIndex === activeIndex);
      });
    }

    function restartTimer() {
      window.clearInterval(timer);
      timer = window.setInterval(function () {
        showSlide(activeIndex + 1);
      }, 5600);
    }

    if (previousButton) {
      previousButton.addEventListener("click", function () {
        showSlide(activeIndex - 1);
        restartTimer();
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", function () {
        showSlide(activeIndex + 1);
        restartTimer();
      });
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        showSlide(index);
        restartTimer();
      });
    });

    if (slides.length > 1) {
      restartTimer();
    }
  }

  function initializeFilters() {
    const form = document.querySelector("[data-filter-form]");
    const cards = Array.from(document.querySelectorAll("[data-card]"));

    if (!form || cards.length === 0) {
      return;
    }

    const searchInput = form.querySelector("[data-search-input]");
    const regionFilter = form.querySelector("[data-region-filter]");
    const typeFilter = form.querySelector("[data-type-filter]");
    const yearFilter = form.querySelector("[data-year-filter]");
    const countNode = document.querySelector("[data-result-count]");
    const emptyState = document.querySelector("[data-empty-state]");
    const params = new URLSearchParams(window.location.search);
    const queryFromUrl = params.get("q");

    if (queryFromUrl && searchInput) {
      searchInput.value = queryFromUrl;
    }

    function applyFilters() {
      const keyword = normalize(searchInput && searchInput.value);
      const region = normalize(regionFilter && regionFilter.value);
      const type = normalize(typeFilter && typeFilter.value);
      const year = normalize(yearFilter && yearFilter.value);
      let visibleCount = 0;

      cards.forEach(function (card) {
        const searchText = normalize(card.dataset.search || card.textContent);
        const cardRegion = normalize(card.dataset.region);
        const cardType = normalize(card.dataset.type);
        const cardYear = normalize(card.dataset.year);
        const isVisible = (!keyword || searchText.includes(keyword)) &&
          (!region || cardRegion === region) &&
          (!type || cardType === type) &&
          (!year || cardYear === year);

        card.hidden = !isVisible;

        if (isVisible) {
          visibleCount += 1;
        }
      });

      if (countNode) {
        countNode.textContent = "当前显示 " + visibleCount + " 条结果";
      }

      if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
      }
    }

    form.addEventListener("input", applyFilters);
    form.addEventListener("change", applyFilters);
    form.addEventListener("reset", function () {
      window.setTimeout(applyFilters, 0);
    });

    applyFilters();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initializeMobileNavigation();
    initializeCoverFallbacks();
    initializeHeroCarousel();
    initializeFilters();
  });
})();
