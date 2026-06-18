(function () {
    function ready(callback) {
        if (document.readyState !== "loading") {
            callback();
            return;
        }
        document.addEventListener("DOMContentLoaded", callback);
    }

    ready(function () {
        var toggle = document.querySelector("[data-mobile-toggle]");
        var menu = document.querySelector("[data-mobile-nav]");
        if (toggle && menu) {
            toggle.addEventListener("click", function () {
                menu.classList.toggle("is-open");
                toggle.setAttribute("aria-expanded", menu.classList.contains("is-open") ? "true" : "false");
            });
        }

        var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
        var prev = document.querySelector("[data-hero-prev]");
        var next = document.querySelector("[data-hero-next]");
        var activeIndex = 0;
        var heroTimer = null;

        function setHero(index) {
            if (!slides.length) {
                return;
            }
            activeIndex = (index + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle("is-active", i === activeIndex);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle("is-active", i === activeIndex);
            });
        }

        function startHeroTimer() {
            if (!slides.length) {
                return;
            }
            window.clearInterval(heroTimer);
            heroTimer = window.setInterval(function () {
                setHero(activeIndex + 1);
            }, 5600);
        }

        dots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
                setHero(index);
                startHeroTimer();
            });
        });

        if (prev) {
            prev.addEventListener("click", function () {
                setHero(activeIndex - 1);
                startHeroTimer();
            });
        }

        if (next) {
            next.addEventListener("click", function () {
                setHero(activeIndex + 1);
                startHeroTimer();
            });
        }

        setHero(0);
        startHeroTimer();

        var searchInput = document.querySelector("[data-search-input]");
        var cards = Array.prototype.slice.call(document.querySelectorAll("[data-card]"));
        var empty = document.querySelector("[data-search-empty]");
        var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter-value]"));
        var currentFilter = "all";

        function normalize(value) {
            return String(value || "").toLowerCase().trim();
        }

        function applyFilters() {
            var query = normalize(searchInput ? searchInput.value : "");
            var visible = 0;
            cards.forEach(function (card) {
                var haystack = normalize(card.getAttribute("data-title") + " " + card.getAttribute("data-tags") + " " + card.getAttribute("data-region") + " " + card.getAttribute("data-type") + " " + card.getAttribute("data-year"));
                var type = normalize(card.getAttribute("data-type"));
                var matchesSearch = !query || haystack.indexOf(query) !== -1;
                var matchesFilter = currentFilter === "all" || type === normalize(currentFilter);
                var show = matchesSearch && matchesFilter;
                card.classList.toggle("is-hidden-card", !show);
                if (show) {
                    visible += 1;
                }
            });
            if (empty) {
                empty.classList.toggle("is-visible", visible === 0);
            }
        }

        if (searchInput && cards.length) {
            searchInput.addEventListener("input", applyFilters);
        }

        filterButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                currentFilter = button.getAttribute("data-filter-value") || "all";
                filterButtons.forEach(function (item) {
                    item.classList.toggle("is-active", item === button);
                });
                applyFilters();
            });
        });
    });
})();
