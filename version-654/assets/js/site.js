(function() {
    var header = document.querySelector("[data-site-header]");
    var menuToggle = document.querySelector("[data-menu-toggle]");
    var mobileNav = document.querySelector("[data-mobile-nav]");

    function setHeaderState() {
        if (!header) {
            return;
        }
        if (window.scrollY > 20) {
            header.classList.add("is-scrolled");
        } else {
            header.classList.remove("is-scrolled");
        }
    }

    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });

    if (menuToggle && header && mobileNav) {
        menuToggle.addEventListener("click", function() {
            header.classList.toggle("is-open");
        });
        mobileNav.querySelectorAll("a").forEach(function(link) {
            link.addEventListener("click", function() {
                header.classList.remove("is-open");
            });
        });
    }

    document.querySelectorAll("[data-hero-slider]").forEach(function(slider) {
        var slides = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-slide]"));
        var dots = Array.prototype.slice.call(slider.querySelectorAll("[data-hero-dot]"));
        var prev = slider.querySelector("[data-hero-prev]");
        var next = slider.querySelector("[data-hero-next]");
        var current = 0;
        var timer = null;

        function show(index) {
            if (!slides.length) {
                return;
            }
            current = (index + slides.length) % slides.length;
            slides.forEach(function(slide, i) {
                slide.classList.toggle("is-active", i === current);
            });
            dots.forEach(function(dot, i) {
                dot.classList.toggle("is-active", i === current);
            });
        }

        function start() {
            stop();
            timer = window.setInterval(function() {
                show(current + 1);
            }, 5000);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        if (prev) {
            prev.addEventListener("click", function() {
                show(current - 1);
                start();
            });
        }

        if (next) {
            next.addEventListener("click", function() {
                show(current + 1);
                start();
            });
        }

        dots.forEach(function(dot) {
            dot.addEventListener("click", function() {
                show(Number(dot.getAttribute("data-hero-dot")) || 0);
                start();
            });
        });

        slider.addEventListener("mouseenter", stop);
        slider.addEventListener("mouseleave", start);
        show(0);
        start();
    });

    document.querySelectorAll(".category-jump").forEach(function(select) {
        select.addEventListener("change", function() {
            if (select.value) {
                window.location.href = "./category-" + select.value + ".html";
            }
        });
    });

    document.querySelectorAll(".search-strip .filter-search").forEach(function(input) {
        input.addEventListener("input", function() {
            var q = input.value.trim().toLowerCase();
            document.querySelectorAll(".movie-card").forEach(function(card) {
                var text = card.textContent.toLowerCase() + " " + (card.getAttribute("data-genre") || "").toLowerCase();
                card.classList.toggle("is-filtered-out", q && text.indexOf(q) === -1);
            });
        });
    });

    document.querySelectorAll(".movie-section").forEach(function(section) {
        var grid = section.querySelector("[data-filter-grid]");
        var search = section.querySelector(".filter-search");
        var year = section.querySelector(".filter-year");
        var region = section.querySelector(".filter-region");
        var type = section.querySelector(".filter-type");
        if (!grid || !search) {
            return;
        }
        var cards = Array.prototype.slice.call(grid.querySelectorAll(".movie-card"));

        function valueOf(item, name) {
            return (item.getAttribute(name) || "").toLowerCase();
        }

        function apply() {
            var q = search.value.trim().toLowerCase();
            var y = year ? year.value.toLowerCase() : "";
            var r = region ? region.value.toLowerCase() : "";
            var t = type ? type.value.toLowerCase() : "";
            cards.forEach(function(card) {
                var title = valueOf(card, "data-title");
                var cardYear = valueOf(card, "data-year");
                var cardRegion = valueOf(card, "data-region");
                var cardType = valueOf(card, "data-type");
                var cardGenre = valueOf(card, "data-genre");
                var text = card.textContent.toLowerCase() + " " + cardGenre;
                var matched = (!q || title.indexOf(q) !== -1 || text.indexOf(q) !== -1) && (!y || cardYear === y) && (!r || cardRegion === r) && (!t || cardType === t);
                card.classList.toggle("is-filtered-out", !matched);
            });
        }

        [search, year, region, type].forEach(function(control) {
            if (control) {
                control.addEventListener("input", apply);
                control.addEventListener("change", apply);
            }
        });
    });
})();

window.initMoviePlayer = function(source) {
    var video = document.getElementById("movieVideo");
    var cover = document.getElementById("playerCover");
    var attached = false;

    if (!video || !source) {
        return;
    }

    function attach() {
        if (attached) {
            return;
        }
        attached = true;
        if (window.Hls && window.Hls.isSupported()) {
            var hls = new window.Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hls.loadSource(source);
            hls.attachMedia(video);
            video._hls = hls;
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = source;
        }
    }

    function play() {
        attach();
        if (cover) {
            cover.classList.add("is-hidden");
        }
        var promise = video.play();
        if (promise && typeof promise.catch === "function") {
            promise.catch(function() {});
        }
    }

    if (cover) {
        cover.addEventListener("click", play);
    }

    video.addEventListener("click", function() {
        if (video.paused) {
            play();
        }
    });

    video.addEventListener("play", function() {
        if (cover) {
            cover.classList.add("is-hidden");
        }
    });
};
