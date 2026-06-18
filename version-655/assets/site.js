(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function initMobileMenu() {
    var button = document.querySelector("[data-mobile-menu-button]");
    var menu = document.querySelector("[data-mobile-menu]");

    if (!button || !menu) {
      return;
    }

    button.addEventListener("click", function () {
      menu.hidden = !menu.hidden;
    });
  }

  function initHero() {
    var hero = document.querySelector("[data-hero]");

    if (!hero) {
      return;
    }

    var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
    var prev = hero.querySelector("[data-hero-prev]");
    var next = hero.querySelector("[data-hero-next]");
    var current = 0;
    var timer = null;

    function show(index) {
      if (!slides.length) {
        return;
      }

      current = (index + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === current);
      });

      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === current);
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        show(current + 1);
      }, 5200);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(Number(dot.getAttribute("data-hero-dot")) || 0);
        start();
      });
    });

    if (prev) {
      prev.addEventListener("click", function () {
        show(current - 1);
        start();
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        show(current + 1);
        start();
      });
    }

    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);

    show(0);
    start();
  }

  function initGlobalSearch() {
    var inputs = Array.prototype.slice.call(document.querySelectorAll(".global-search-input"));
    var index = window.MOVIE_SEARCH_INDEX || [];

    inputs.forEach(function (input) {
      var panel = input.parentElement.querySelector(".global-search-panel");

      if (!panel) {
        return;
      }

      function render() {
        var query = normalize(input.value);

        if (query.length < 1) {
          panel.hidden = true;
          panel.innerHTML = "";
          return;
        }

        var words = query.split(/\s+/).filter(Boolean);
        var results = index.filter(function (item) {
          var haystack = normalize([
            item.title,
            item.year,
            item.region,
            item.type,
            item.genre,
            item.category,
            (item.tags || []).join(" "),
            item.oneLine
          ].join(" "));

          return words.every(function (word) {
            return haystack.indexOf(word) !== -1;
          });
        }).slice(0, 12);

        if (!results.length) {
          panel.innerHTML = '<p class="search-empty">没有找到匹配影片</p>';
          panel.hidden = false;
          return;
        }

        panel.innerHTML = results.map(function (item) {
          return [
            '<a class="search-result" href="' + item.url + '">',
            '  <img src="' + item.cover + '" alt="' + escapeHtml(item.title) + '封面">',
            '  <span>',
            '    <strong>' + escapeHtml(item.title) + '</strong>',
            '    <span>' + escapeHtml(item.year + ' · ' + item.region + ' · ' + item.category) + '</span>',
            '  </span>',
            '</a>'
          ].join("");
        }).join("");
        panel.hidden = false;
      }

      input.addEventListener("input", render);
      input.addEventListener("focus", render);

      document.addEventListener("click", function (event) {
        if (!input.parentElement.contains(event.target)) {
          panel.hidden = true;
        }
      });
    });
  }

  function initFilters() {
    var panel = document.querySelector("[data-filter-panel]");

    if (!panel) {
      return;
    }

    var controls = Array.prototype.slice.call(panel.querySelectorAll("[data-filter-field]"));
    var reset = panel.querySelector("[data-filter-reset]");
    var count = panel.querySelector("[data-filter-count]");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-card]"));

    function getValue(name) {
      var control = panel.querySelector('[data-filter-field="' + name + '"]');
      return control ? normalize(control.value) : "";
    }

    function apply() {
      var keyword = getValue("keyword");
      var category = getValue("category");
      var year = getValue("year");
      var region = getValue("region");
      var type = getValue("type");
      var visible = 0;

      cards.forEach(function (card) {
        var haystack = normalize([
          card.getAttribute("data-title"),
          card.getAttribute("data-genre"),
          card.getAttribute("data-tags"),
          card.getAttribute("data-region"),
          card.getAttribute("data-year"),
          card.getAttribute("data-type")
        ].join(" "));

        var matches = true;

        if (keyword && haystack.indexOf(keyword) === -1) {
          matches = false;
        }

        if (category && normalize(card.getAttribute("data-category")) !== category) {
          matches = false;
        }

        if (year && normalize(card.getAttribute("data-year")) !== year) {
          matches = false;
        }

        if (region && normalize(card.getAttribute("data-region")) !== region) {
          matches = false;
        }

        if (type && normalize(card.getAttribute("data-type")) !== type) {
          matches = false;
        }

        card.classList.toggle("is-filtered-out", !matches);

        if (matches) {
          visible += 1;
        }
      });

      if (count) {
        count.textContent = String(visible);
      }
    }

    controls.forEach(function (control) {
      control.addEventListener("input", apply);
      control.addEventListener("change", apply);
    });

    if (reset) {
      reset.addEventListener("click", function () {
        controls.forEach(function (control) {
          control.value = "";
        });
        apply();
      });
    }

    apply();
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, function (character) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[character];
    });
  }

  ready(function () {
    initMobileMenu();
    initHero();
    initGlobalSearch();
    initFilters();
  });
}());
