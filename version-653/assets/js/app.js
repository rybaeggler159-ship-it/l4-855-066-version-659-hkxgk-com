(function () {
    function ready(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    function normalize(value) {
        return (value || "").toString().toLowerCase().replace(/\s+/g, " ").trim();
    }

    function initHeader() {
        var header = document.querySelector("[data-header]");
        var button = document.querySelector("[data-menu-button]");
        var mobileNav = document.querySelector("[data-mobile-nav]");

        function updateHeader() {
            if (!header) {
                return;
            }
            if (window.scrollY > 24) {
                header.classList.add("is-solid");
            } else {
                header.classList.remove("is-solid");
            }
        }

        if (button && mobileNav) {
            button.addEventListener("click", function () {
                mobileNav.classList.toggle("is-open");
            });
        }

        window.addEventListener("scroll", updateHeader, { passive: true });
        updateHeader();
    }

    function initLeadSlider() {
        var slider = document.querySelector("[data-lead-slider]");
        if (!slider) {
            return;
        }
        var slides = Array.prototype.slice.call(slider.querySelectorAll("[data-lead-slide]"));
        var images = Array.prototype.slice.call(slider.querySelectorAll("[data-lead-image]"));
        var dots = Array.prototype.slice.call(slider.querySelectorAll("[data-lead-dot]"));
        var index = 0;
        var timer = null;

        function show(next) {
            if (!slides.length) {
                return;
            }
            index = (next + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === index);
            });
            images.forEach(function (image, imageIndex) {
                image.classList.toggle("is-active", imageIndex === index);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === index);
            });
        }

        function start() {
            stop();
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5200);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        dots.forEach(function (dot, dotIndex) {
            dot.addEventListener("click", function () {
                show(dotIndex);
                start();
            });
        });

        slider.addEventListener("mouseenter", stop);
        slider.addEventListener("mouseleave", start);
        show(0);
        start();
    }

    function initHomeSearch() {
        var forms = document.querySelectorAll("[data-home-search]");
        forms.forEach(function (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                var input = form.querySelector("input");
                var query = input ? input.value.trim() : "";
                var target = "search.html";
                if (query) {
                    target += "?q=" + encodeURIComponent(query);
                }
                window.location.href = target;
            });
        });
    }

    function initFilters() {
        var panels = document.querySelectorAll(".filter-panel");
        panels.forEach(function (panel) {
            var input = panel.querySelector("[data-search-input]");
            var year = panel.querySelector("[data-year-filter]");
            var region = panel.querySelector("[data-region-filter]");
            var result = panel.querySelector("[data-filter-result]");
            var list = panel.parentElement.querySelector("[data-movie-list]") || document.querySelector("[data-movie-list]");
            if (!list) {
                return;
            }
            var items = Array.prototype.slice.call(list.querySelectorAll(".movie-item"));

            function apply() {
                var keyword = normalize(input && input.value);
                var selectedYear = normalize(year && year.value);
                var selectedRegion = normalize(region && region.value);
                var visible = 0;

                items.forEach(function (item) {
                    var haystack = normalize([
                        item.getAttribute("data-title"),
                        item.getAttribute("data-region"),
                        item.getAttribute("data-year"),
                        item.getAttribute("data-category"),
                        item.getAttribute("data-tags")
                    ].join(" "));
                    var itemYear = normalize(item.getAttribute("data-year"));
                    var itemRegion = normalize(item.getAttribute("data-region"));
                    var matched = true;

                    if (keyword && haystack.indexOf(keyword) === -1) {
                        matched = false;
                    }
                    if (selectedYear && itemYear !== selectedYear) {
                        matched = false;
                    }
                    if (selectedRegion && itemRegion !== selectedRegion) {
                        matched = false;
                    }

                    item.classList.toggle("is-hidden", !matched);
                    if (matched) {
                        visible += 1;
                    }
                });

                if (result) {
                    result.textContent = visible ? "匹配到 " + visible + " 部内容" : "暂无匹配内容";
                }
            }

            [input, year, region].forEach(function (control) {
                if (control) {
                    control.addEventListener("input", apply);
                    control.addEventListener("change", apply);
                }
            });

            var params = new URLSearchParams(window.location.search);
            var query = params.get("q");
            if (query && input) {
                input.value = query;
            }
            apply();
        });
    }

    function initVideoPlayers() {
        var videos = document.querySelectorAll("video[data-stream]");
        videos.forEach(function (video) {
            var box = video.closest(".player-shell");
            var button = box ? box.querySelector(".play-overlay") : null;
            var error = box ? box.querySelector(".player-error") : null;
            var attached = false;
            var hls = null;

            function attach() {
                return new Promise(function (resolve) {
                    if (attached) {
                        resolve();
                        return;
                    }
                    var url = video.getAttribute("data-stream");
                    if (!url) {
                        if (error) {
                            error.hidden = false;
                        }
                        resolve();
                        return;
                    }
                    if (video.canPlayType("application/vnd.apple.mpegurl")) {
                        video.src = url;
                        attached = true;
                        resolve();
                        return;
                    }
                    if (window.Hls && window.Hls.isSupported()) {
                        hls = new window.Hls({
                            maxBufferLength: 30,
                            enableWorker: true
                        });
                        hls.loadSource(url);
                        hls.attachMedia(video);
                        hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
                            attached = true;
                            resolve();
                        });
                        hls.on(window.Hls.Events.ERROR, function (event, data) {
                            if (data && data.fatal && error) {
                                error.hidden = false;
                            }
                        });
                        return;
                    }
                    if (error) {
                        error.hidden = false;
                    }
                    resolve();
                });
            }

            function play() {
                attach().then(function () {
                    var playPromise = video.play();
                    if (playPromise && typeof playPromise.catch === "function") {
                        playPromise.catch(function () {
                            if (button) {
                                button.classList.remove("is-hidden");
                            }
                        });
                    }
                });
            }

            if (button) {
                button.addEventListener("click", function () {
                    button.classList.add("is-hidden");
                    play();
                });
            }

            video.addEventListener("click", function () {
                if (!attached) {
                    play();
                }
            });

            window.addEventListener("beforeunload", function () {
                if (hls) {
                    hls.destroy();
                }
            });
        });
    }

    ready(function () {
        initHeader();
        initLeadSlider();
        initHomeSearch();
        initFilters();
        initVideoPlayers();
    });
})();
