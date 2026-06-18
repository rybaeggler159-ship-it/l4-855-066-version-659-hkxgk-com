(function () {
    const menuButton = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', function () {
            const open = mobileNav.classList.toggle('open');
            menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    const hero = document.querySelector('.hero-carousel');
    if (hero) {
        const slides = Array.from(hero.querySelectorAll('.hero-slide'));
        const dots = Array.from(hero.querySelectorAll('.hero-dot'));
        const prev = hero.querySelector('.hero-prev');
        const next = hero.querySelector('.hero-next');
        let index = 0;
        let timer = null;

        function show(nextIndex) {
            if (!slides.length) {
                return;
            }
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('active', slideIndex === index);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('active', dotIndex === index);
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

        if (prev) {
            prev.addEventListener('click', function () {
                show(index - 1);
                start();
            });
        }

        if (next) {
            next.addEventListener('click', function () {
                show(index + 1);
                start();
            });
        }

        dots.forEach(function (dot, dotIndex) {
            dot.addEventListener('click', function () {
                show(dotIndex);
                start();
            });
        });

        hero.addEventListener('mouseenter', stop);
        hero.addEventListener('mouseleave', start);
        show(0);
        start();
    }

    document.querySelectorAll('.library-section').forEach(function (section) {
        const search = section.querySelector('.js-search');
        const category = section.querySelector('.js-category');
        const year = section.querySelector('.js-year');
        const cards = Array.from(section.querySelectorAll('.js-movie-card'));
        const empty = section.querySelector('.empty-state');

        function filterCards() {
            const q = search ? search.value.trim().toLowerCase() : '';
            const c = category ? category.value : '';
            const y = year ? year.value : '';
            let visible = 0;

            cards.forEach(function (card) {
                const text = card.getAttribute('data-search') || '';
                const cardCategory = card.getAttribute('data-category') || '';
                const cardYear = card.getAttribute('data-year') || '';
                const matched = (!q || text.indexOf(q) !== -1) && (!c || cardCategory === c) && (!y || cardYear === y);
                card.hidden = !matched;
                if (matched) {
                    visible += 1;
                }
            });

            if (empty) {
                empty.hidden = visible !== 0;
            }
        }

        [search, category, year].forEach(function (control) {
            if (control) {
                control.addEventListener('input', filterCards);
                control.addEventListener('change', filterCards);
            }
        });
    });
})();
