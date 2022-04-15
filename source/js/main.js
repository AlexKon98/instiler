import {
    Scene
} from '../gl/Scene.js';


window.addEventListener('load', function() {
    const htmlBlock = document.querySelector('html');
    const loader = document.querySelector('.loader');
    Pace.stop();
    const pace = document.querySelector('.pace-progress');

    function loading() {
        loader.insertAdjacentHTML('beforeend', `<div class="load-new"><img src="img/Load.svg" alt="img">`);
        Pace.restart();
        document.querySelector('body').classList.remove('paced');

        Pace.on('done', function() {
            loader.innerText = '';
            loader.classList.add('loader--hide');
            console.log('ok')
        });
    }
    setTimeout(loading, 1000);

    window.addEventListener('resize', function(event) {
        let domRectY = document.querySelector('body').getBoundingClientRect().top;
        window.scrollTo(0, domRectY.toString().replace('-', ""));
    }, true);

    const headerBtn = document.querySelector('.js-headerMenu');
    headerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let btn = this;
        if (this.getAttribute('data-click') == '0') {
            btn.setAttribute('data-click', '1');
            btn.classList.add('is-opened');
            btn.querySelector('.header__menu-btn-text--menu').style.opacity = '0';
            btn.querySelector('.header__menu-btn-text--menu').style.transform = 'translateY(8px)';
            btn.querySelector('.header__menu-btn-text--menu').style.transition = 'none';
            btn.querySelector('.header__menu-btn-text--close').style.opacity = '1';
            btn.querySelector('.header__menu-btn-text--close').style.transform = 'translateY(0px)';
            btn.querySelector('.header__menu-btn-text--close').style.transition = '0.9s ease-out';
            btn.closest('.header__content').classList.add('header__content-opened');
            btn.style.pointerEvents = "none";
            document.querySelector('html').classList.add('scroll-disabled');


            btn.closest('.header__content').querySelector('picture').innerHTML = '';
            btn.closest('.header__content').querySelector('picture').insertAdjacentHTML('beforeend', `
		<source srcset="img/logo-mobile-open.png" media="(min-width: 0px) and (max-width: 767px)">
		<source srcset="img/logo-tablet-open.png" media="(min-width: 767px) and (max-width: 1279px)">
		<img src="img/logo-desktop-open.png" alt="logo">`);
            btn.closest('.header__content').querySelector('div').style.opacity = '0';
            btn.closest('.header__content').querySelector('div').style.transition = '0s ease';


            anime({
                targets: '.header__menu',
                top: 0,
                easing: 'easeInOutExpo',
                complete: function() {
                    document.querySelector('.header').classList.add('header-active');
                    document.querySelector('.header__menu-wrapper').classList.add('header__menu-wrapper-active');
                    btn.style.pointerEvents = "all";

                    btn.closest('.header__content').querySelector('div').style.opacity = '1';
                    btn.closest('.header__content').querySelector('div').style.transition = '1s ease';
                    document.querySelector('.header__logo-fixed').classList.remove('header__logo-fixed-active');
                    document.querySelector('.header__logo-default').classList.remove('header__logo-default-hide');
                }
            });

        } else {
            btn.setAttribute('data-click', '0');
            btn.classList.remove('is-opened');
            btn.querySelector('.header__menu-btn-text--menu').style.opacity = '1';
            btn.querySelector('.header__menu-btn-text--menu').style.transform = 'translateY(0px)';
            btn.querySelector('.header__menu-btn-text--menu').style.transition = '0.9s ease-out';
            btn.querySelector('.header__menu-btn-text--close').style.opacity = '0';
            btn.querySelector('.header__menu-btn-text--close').style.transform = 'translateY(8px)';
            btn.querySelector('.header__menu-btn-text--close').style.transition = 'none';
            btn.closest('.header__content').classList.remove('header__content-opened');
            document.querySelector('.header').classList.remove('header-active');
            document.querySelector('.header__menu-wrapper').classList.remove('header__menu-wrapper-active');
            btn.style.pointerEvents = "none";

            btn.closest('.header__content').querySelector('picture').innerHTML = '';
            btn.closest('.header__content').querySelector('picture').insertAdjacentHTML('beforeend', `
		<source srcset="img/logo-mobile.png" media="(min-width: 0px) and (max-width: 767px)">
		<source srcset="img/logo-tablet.png" media="(min-width: 767px) and (max-width: 1279px)">
		<img src="img/logo-desktop.png" alt="logo">
	`);

            btn.closest('.header__content').querySelector('div').style.opacity = '0';
            btn.closest('.header__content').querySelector('div').style.transition = '0s ease';

            anime({
                targets: '.header__menu',
                top: '-100vh',
                easing: 'easeInOutExpo',
                complete: function() {
                    btn.style.pointerEvents = "all";
                    document.querySelector('html').classList.remove('scroll-disabled');
                    btn.closest('.header__content').querySelector('div').style.opacity = '1';
                    btn.closest('.header__content').querySelector('div').style.transition = '1s ease';
                    document.querySelector('.header__logo-fixed').classList.add('header__logo-fixed-active');
                    document.querySelector('.header__logo-default').classList.add('header__logo-default-hide');
                }
            });
        };

    });


    $('.upArrow a').click(function() {
        $('html, body').animate({
                scrollTop: 0,
            },
            'ease'
        );
        header.classList.remove('header-hide');
        header.classList.remove('header-sticky');
    });

    const searchBtn = document.querySelector('.js-search-open');
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchBtn.closest('div').querySelector('input').classList.toggle('header__bar-input-active');
        searchBtn.closest('div').querySelector('.search-img').classList.toggle('header__bar-img-view');
        searchBtn.closest('div').querySelector('.close-img').classList.toggle('header__bar-img-view');
        searchBtn.closest('div').querySelector('button').classList.toggle('header__bar-img-view');
    });

    const canv = document.querySelectorAll(".canvas");

    canv.forEach(function(el) {

        let canvNew = el,
            ctx = canvNew.getContext("2d"),
            img = new Image(),
            imgMask = new Image();

        let parentItem = el.closest('.js-hover');

        imgMask.src = parentItem.getAttribute('data-imgmasksrc');
        img.src = parentItem.getAttribute('data-img-src');

        let speed = 0;
        let requestId;

        function draw() {
            if (navigator.userAgent.indexOf("Chrome") != -1) {
                if (parentItem.classList.contains('js-hover-menu')) {
                    speed += 20;
                }
                if (parentItem.classList.contains('js-hover-main')) {
                    speed += 40;
                }
            } else if (navigator.userAgent.indexOf("Safari") != -1) {
                if (parentItem.classList.contains('js-hover-menu')) {
                    speed += 15;
                }
                if (parentItem.classList.contains('js-hover-main')) {
                    speed += 30;
                }
            } else if (navigator.userAgent.indexOf("Firefox") != -1) {
                if (parentItem.classList.contains('js-hover-menu')) {
                    speed += 25;
                }
                if (parentItem.classList.contains('js-hover-main')) {
                    speed += 50;
                }
            }

            const maskX = (canvNew.width - (70 + speed)) / 2,
                maskY = (canvNew.height - (40 + speed)) / 2;

            ctx.clearRect(0, 0, canvNew.width, canvNew.height);
            ctx.globalCompositeOperation = "source-over";

            ctx.drawImage(imgMask, maskX, maskY, 70 + speed, 40 + speed);

            ctx.globalCompositeOperation = "source-in";
            ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
            if (speed < 1500) {
                requestId = window.requestAnimationFrame(draw);
            }
        }

        img.onload = () => {
            canvNew.width = img.naturalWidth;
            canvNew.height = img.naturalHeight;

            draw();

            if (parentItem.classList.contains('js-hover-main')) {
                setTimeout(() => {
                    parentItem.classList.add('js-canvas-scale');
                    if (parentItem.querySelector('.js-canvasLink')) {
                        parentItem.querySelector('.js-canvasLink').style.opacity = '0';
                    }
                }, 300);
            }
        }

        parentItem.onmouseenter = () => {
            speed = 0;
            canvNew.style.display = "block";
            draw();
            window.requestAnimationFrame(draw);
            if (parentItem.classList.contains('js-hover-main')) {
                parentItem.classList.remove('js-canvas-scale');
                parentItem.classList.add('js-canvas-text');
                if (parentItem.querySelector('.js-canvasLink')) {
                    parentItem.querySelector('.js-canvasLink').style.opacity = '1';
                }
                if (parentItem.querySelector('.js-canvasLink')) {
                    parentItem.querySelector('.js-canvasLink').classList.add('main__project-link--hovered');
                }
            }
            parentItem.querySelector('.js-canvasLink').style.color = 'chocolate';
        }


        parentItem.onmouseleave = () => {
            if (parentItem.classList.contains('js-hover-menu')) {
                canvNew.style.display = "none";
            };
            if (parentItem.classList.contains('js-hover-main')) {
                parentItem.classList.add('js-canvas-scale');
                parentItem.classList.remove('js-canvas-text');
                if (parentItem.querySelector('.js-canvasLink')) {
                    parentItem.querySelector('.main__project-link').style.opacity = '0';
                }
                if (parentItem.querySelector('.js-canvasLink')) {
                    parentItem.querySelector('.js-canvasLink').classList.remove('main__project-link--hovered');
                }
            }
            parentItem.querySelector('.js-canvasLink').style.color = '#fff7f3';
        };



        let counter = 0;
        $(window).scroll(function() {
            var scroll = $(window).scrollTop() + $(window).height();

            if (parentItem.classList.contains('js-show-scroll')) {
                var offset = $(parentItem).offset().top + $(parentItem).height() + 300;
                if (scroll > offset && counter == 0) {
                    speed = 0;
                    canvNew.style.display = "block";
                    parentItem.querySelector('.js-show-scroll-canvas').classList.remove('js-show-scroll-scale');
                    draw();
                    counter = 1;
                }

            }
        });
    });


    if (document.querySelector('.js-main__video')) {
        Fancybox.bind('.js-main__video', {});
    }

    if (document.querySelector('.services__swiper')) {

        const breakpointTablet = window.matchMedia('(min-width:1200px)');
        const breakpointCheckerTablet = function() {
            if (breakpointTablet.matches === true) {
                if (servicesSwiper !== undefined) servicesSwiper.destroy(true, true);
                return;
            } else if (breakpointTablet.matches === false) {
                enableServicesSwiper();
                return;

            }
        };

        let servicesSwiper;

        const enableServicesSwiper = function() {

            servicesSwiper = new Swiper('.swiper.services__swiper', {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true,
                speed: 1000,

                loopAdditionalSlides: 30,
                navigation: {
                    nextEl: '.swiper-button-next.services__slide-next',
                    prevEl: '.swiper-button-prev.services__slide-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1366: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1666: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    1920: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                },
            });

        }


        const slides = document.querySelectorAll('.services__slide');
        const slidesResultBlock = document.querySelector('.services__tablet-result p');
        const slidesResultLink = document.querySelector('.services__tablet-result a');
        slides.forEach((el) => {
            if (el.classList.contains('services__slide-active')) {
                let text = el.querySelector('.services__slide-text').textContent;
                slidesResultBlock.innerText = text;
                el.classList.add('services__slide-active')
            }
            el.addEventListener('click', (e) => {
                e.preventDefault();
                let text = el.querySelector('.services__slide-text').textContent;
                let link = el.querySelector('.services__slide-link').getAttribute('href');
                slidesResultBlock.innerText = text;
                slidesResultLink.setAttribute('href', link);

                slides.forEach((el) => {
                    el.classList.remove('services__slide-active');
                });
                el.classList.add('services__slide-active')
            });
        });

    }

    AOS.init({
        duration: 1200,
    });

    const dropdownBtns = document.querySelectorAll('.js-dropdown');

    if (dropdownBtns[0]) {
        for (let item of dropdownBtns) {
            item.addEventListener('click', togglePanel);
        }
    }

    function togglePanel() {
        const active = this.parentElement.parentElement.querySelector('.js-dropdown.active');
        if (active && active !== this) {
            active.classList.remove('active');
            active.nextElementSibling.style.maxHeight = null;
        }

        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    const filter = document.querySelector('.filter');
    if (filter) {
        if (window.matchMedia('(max-width: 1366px)').matches) {
            // const btn = filter.querySelector('.filter__show-btn');
            const panel = filter.querySelector('.filter__options');

            // btn.addEventListener('click', () => {
            //     filter.classList.toggle('filter--active');
            //     panel.classList.toggle('filter__options--visible');
            // })
        }


        const items = filter.querySelectorAll('.filter__options-list input[type=checkbox]');
        const reset = filter.querySelector('#reset-filter');
        const resultList = filter.querySelector('.filter__result-list');

        const renderChecked = (item, index) => {
            const text = item.nextElementSibling.textContent;
            const elem = document.createElement('li');
            elem.classList.add('filter__result-item');
            elem.textContent = text;
            elem.dataset.id = index;
            resultList.appendChild(elem);
        }

        Array.from(items).forEach((item, i) => {
            if (item.checked) {
                renderChecked(item, i);
            }
        })


        const onFilterChange = (item, index) => {
            if (item.checked === true) {
                renderChecked(item, index);
            } else {
                const elem = Array.from(filter.querySelectorAll('.filter__result-item')).filter(item => +item.dataset.id === index)[0];
                elem.remove();
            }
        }

        Array.from(items).forEach((filter, i) => {
            filter.addEventListener('change', () => {
                onFilterChange(filter, i);
            });
        });

        // const onChosenClick = function(evt) {
        //     if (evt.target.nodeName !== 'LI') return;
        // 
        //     Array.from(filter.querySelectorAll('.filter__options-list input[type=checkbox]'))[evt.target.dataset.id].checked = false;
        //     evt.target.remove();
        // }
        // 
        // filter.querySelector('.filter__result-list').addEventListener('click', onChosenClick);
        // 
        // const onResetClick = () => {
        //     while (resultList.firstChild) resultList.removeChild(resultList.firstChild);
        //     Array.from(filter.querySelectorAll('.filter__options-list input[type=checkbox]')).forEach(option => option.checked = false);
        // }
        // 
        // reset.addEventListener('click', onResetClick);
    }



    const test = function(top, left, idx, href, src) {
        return `
	<div data-isBtnDyeZ="${idx}" class="isBtnDyeZ" style="width:420px; height: 420px; position: absolute; top: ${top -10}px; left: ${left -10}px; background: url(${src}), #FAF9F7">
		<a href="${href}"></a>
	</div>`
    };


    const isBtnDyes = document.querySelectorAll('.js-hover-anim');
    let inited = false;



    const header = document.querySelector('header');

    window.addEventListener("wheel", event => {
        const delta = Math.sign(event.deltaY);

        if (delta == 1) {
            header.classList.add('header-hide');
        }
        if (delta == -1) {
            header.classList.remove('header-hide');
        }
        if (header.classList.contains('header-active')) {
            header.classList.add('header-block');
        } else {
            header.classList.remove('header-block');
        }
    });

    var $document = $(document);

    $document.scroll(function() {
        if ($document.scrollTop() >= 50) {
            header.classList.add('header-sticky');
            header.querySelector('.header__logo-default').classList.add('header__logo-default-hide');
            header.querySelector('.header__logo-fixed').classList.add('header__logo-fixed-active');
        } else {
            header.classList.remove('header-sticky');
            header.querySelector('.header__logo-default').classList.remove('header__logo-default-hide');
            header.querySelector('.header__logo-fixed').classList.remove('header__logo-fixed-active');
        }
    });
    const socialBar = document.querySelector('.fixed__bar-social');
    const socialOpen = document.querySelector('.js-social-open');
    socialOpen.addEventListener('click', (e) => {

        $('.fixed__bar-social-list-wrapper').animate({
            width: 'toggle'
        }, 350);
        socialOpen.closest('.fixed__bar-social').classList.toggle('fixed__bar-social--active')
    });



    const footer = document.querySelector('.footer');
    const awards = document.querySelector('.awards');
    const footerDecor = document.querySelector('.footer__decor');
    const fixedBar = document.querySelector('.fixed__bar');
    const awardsTitle = document.querySelector('.awards__title');

    let footerInited = false;




    $(footer).on('inview', function(event, visible) {
        if (visible == true) {
            let footerH = footer.getBoundingClientRect().height;
            let awardsH = awards.getBoundingClientRect().height;
            let footerDecorH = footerH + awardsH;

            footerDecor.style.bottom = `${footerH}px`
            setTimeout(function() {
                $(footerDecor).animate({
                    height: footerDecorH
                });
                footerInited = true;
            }, 100);
            fixedBar.classList.add('fixed__bar--active');
            awardsTitle.style.color = '#F7F3F0';
        } else {
            setTimeout(function() {
                $(footerDecor).animate({
                    height: 0
                });
                footerInited = false;
            }, 100);
            fixedBar.classList.remove('fixed__bar--active');
            awardsTitle.style.color = '#101010';
        }
    });




    window.addEventListener('resize', function(event) {
        const footer = document.querySelector('.footer');
        const awards = document.querySelector('.awards');
        const footerDecor = document.querySelector('.footer__decor');

        let footerH = footer.getBoundingClientRect().height;
        let awardsH = awards.getBoundingClientRect().height;
        let footerDecorH = footerH + awardsH;

        if (footerInited == true) {
            footerDecor.style.height = `${footerDecorH}px`
            footerDecor.style.bottom = `${footerH}px`
        }


    }, true);

    $('.js-openModal').click(function(event) {
        event.preventDefault();
        this.blur();
        $.get(this.href, function(html) {
            $(html).appendTo('body').modal({
                fadeDuration: 150,
                fadeDelay: 0.50,
            });

            const dropdownBtns = document.querySelectorAll('.js-dropdown');
            const secondLinks = document.querySelectorAll('.js-openSecondModal');

            if (secondLinks) {
                secondLinks.forEach(item => {
                    item.addEventListener('click', function(event) {
                        event.preventDefault();
                        let name = item.dataset.name;
                        if (!array[name]) {
                            return false;
                        }
                        const LG = lightGallery(this, {
                            plugins: [lgZoom, lgThumbnail],
                            licenseKey: 'your_license_key',
                            speed: 500,
                            download: false,
                            mobileSettings: {
                                showCloseIcon: true,
                            },
                            dynamic: true,
                            dynamicEl: array[name],
                        });
                        LG.openGallery(0);
                    });
                });
            }

            if (dropdownBtns[0]) {
                for (let item of dropdownBtns) {
                    item.addEventListener('click', togglePanel);
                }
            }

            function togglePanel() {
                const active = this.parentElement.parentElement.querySelector('.js-dropdown.active');
                if (active && active !== this) {
                    active.classList.remove('active');
                    active.nextElementSibling.style.maxHeight = null;
                }

                this.classList.toggle('active');
                const panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }

        });
        $.ajax({

            url: $(this).attr('href'),

            success: function(newHTML, textStatus, jqXHR) {
                if (document.querySelector('.js-promt')) {
                    const promt = document.querySelectorAll('.js-promt');
                    promt.forEach((el) => {
                        let dataPromt = el.getAttribute('data-promt');
                        tippy(el, {
                            content: `${dataPromt}`,
                            animation: 'perspective',
                            placement: 'top',
                            arrow: true,
                            arrowType: 'round',
                            animation: 'scale',
                            duration: [250, 200],
                            theme: 'light-border',
                            interactive: true,
                        });
                    });
                }
                if (document.querySelector('.js-astr')) {
                    const asrts = document.querySelectorAll('.js-astr');
                    asrts.forEach((el) => {
                        console.log()
                        el.addEventListener('click', (e) => {
                            e.preventDefault();
                            toastr["info"](el.getAttribute('data-promt'));
                        });
                    });
                }
                htmlBlock.style.overflow = 'hidden';

                function removeBlock() {
                    document.querySelector('.close-modal').addEventListener('click', (e) => {
                        e.preventDefault();
                        if (document.querySelector('.viewer')) {
                            document.querySelector('.viewer').remove();
                        }
                        htmlBlock.style.overflow = 'visible';
                    });
                }
                setTimeout(removeBlock, 100);
            },
        });
    });

    const secondLinks = document.querySelectorAll('.js-openSecondModal');

    if (secondLinks) {
        secondLinks.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                let name = item.dataset.name;
                if (!array[name]) {
                    return false;
                }
                const LG = lightGallery(this, {
                    plugins: [lgZoom, lgThumbnail],
                    licenseKey: 'your_license_key',
                    speed: 500,
                    download: false,
                    mobileSettings: {
                        showCloseIcon: true,
                    },
                    dynamic: true,
                    dynamicEl: array[name],
                });
                LG.openGallery(0);
            });
        });
    }


    if (document.querySelector('.tile')) {
        window.scene = new Scene();
    }

    if (document.querySelector('#stage')) {
        const can = document.querySelector('#stage');
        can.classList.add('stage--loaded')
    }

    if (document.querySelector('.awards__item')) {
        const awarsItems = document.querySelectorAll('.awards__item');
        awarsItems.forEach((el) => {
            let title = el.getAttribute('data-title');
            tippy(el, {
                content: `${title}`,
                animation: 'scale',
                followCursor: true,
                theme: 'tomato',
            });
        });
    }
    if (document.querySelector('.js-promt')) {
        const promt = document.querySelectorAll('.js-promt');
        promt.forEach((el) => {
            let dataPromt = el.getAttribute('data-promt');
            tippy(el, {
                content: `${dataPromt}`,
                animation: 'perspective',
                placement: 'top',
                arrow: true,
                arrowType: 'round',
                animation: 'scale',
                duration: [250, 200],
                theme: 'light-border',
                interactive: true,
            });
        });
    }
    if (document.querySelector('.reviews__swiper')) {
        new Swiper('.swiper.reviews__swiper', {

            loop: true,
            loopAdditionalSlides: 30,
            speed: 1000,

            navigation: {
                nextEl: '.swiper-button-next.reviews__next',
                prevEl: '.swiper-button-prev.reviews__prev',
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
            breakpoints: {
                375: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                1440: {
                    slidesPerView: 1.2,
                    spaceBetween: 50,
                },
                1700: {
                    slidesPerView: 1.4,
                    spaceBetween: 50,
                },
                1920: {
                    slidesPerView: 1.4,
                    spaceBetween: 135,
                },
            },
        });
    }
    isBtnDyes.forEach((el, idx) => {

        el.setAttribute('data-isBtnDye', idx)

        var parentPos = document.querySelector('body').getBoundingClientRect(),
            childrenPos = el.getBoundingClientRect(),
            relativePos = {};

        relativePos.top = childrenPos.top - parentPos.top,
            relativePos.left = childrenPos.left - parentPos.left;

        let top = relativePos.top;
        let left = relativePos.left;

        let href = el.getAttribute('href');

        let src = el.querySelector('canvas').getAttribute('data-src');

        document.querySelector('body').insertAdjacentHTML('beforeend', test(top, left, idx, href, src));


        window.addEventListener('resize', function(event) {
            const isBtnDyeZs = document.querySelectorAll('.isBtnDyeZ');
            isBtnDyeZs.forEach((elem) => {

                if (el.getAttribute('data-isbtndye') == elem.getAttribute('data-isbtndyez')) {
                    var parentPos = document.querySelector('body').getBoundingClientRect(),
                        childrenPos = el.getBoundingClientRect(),
                        relativePos = {};

                    relativePos.top = childrenPos.top - parentPos.top,
                        relativePos.left = childrenPos.left - parentPos.left;

                    let top = relativePos.top;
                    let left = relativePos.left;


                    elem.style.top = `${top -10}px`;
                    elem.style.left = `${left -10}px`;

                }
            });
        }, true);


        function init(elem) {
            let canvasEl = elem.querySelector('canvas');
            var ctx = canvasEl.getContext('2d');
            var canvas = ctx.canvas;
            canvas.width = canvas.getBoundingClientRect().width;
            canvas.height = canvas.getBoundingClientRect().height;

            var draw = new Draw(ctx);

            var particles = []






            function init() {

                if (navigator.userAgent.indexOf("Chrome") != -1) {
                    draw.set({
                        font: '89px Icons',
                        textBaseline: 'center',
                        textAlign: 'center',
                        fillStyle: "#170808"
                    });

                    draw.clear();

                    draw.fillText(210, 304, 'k');


                } else if (navigator.userAgent.indexOf("Safari") != -1) {
                    draw.set({
                        font: '89px Icons',
                        textBaseline: 'center',
                        textAlign: 'center',
                        fillStyle: "#170808"
                    });

                    draw.clear();

                    draw.fillText(210, 304, 'k');


                } else if (navigator.userAgent.indexOf("Firefox") != -1) {

                    draw.set({
                        font: '89px Icons',
                        textBaseline: 'center',
                        textAlign: 'center',
                        fillStyle: "#170808"
                    });

                    draw.clear();
                    draw.fillText(210, 304, 'k');
                }

                particles = scan(ctx, 3)
                for (var particle of particles) {
                    particle.sx = particle.x
                    particle.sy = particle.y
                    particle.ax = Math.random() * 25 - 13
                    particle.ay = Math.random() * 25 - 13
                };
            };

            window.step = function() {

                if (inited == false) {
                    inited = true;
                    window.requestAnimationFrame(window.step);
                    window.cancelAnimationFrame(window.step);
                    draw.clear();
                    return false;
                }
                if (inited == true) {
                    window.requestAnimationFrame(window.step);
                    draw.clear();
                }





                var move = 0.3;
                var pull = 0.15;
                var dampen = 0.9;

                var localMouse = {
                    x: mouse.x - canvas.offsetLeft,
                    y: mouse.y - canvas.offsetTop
                }

                for (var particle of particles) {
                    var distance = Math.sqrt(Math.pow(particle.y - localMouse.y, 2) + Math.pow(particle.x - localMouse.x, 2))
                    var push = 1 / distance * 12

                    for (var ax of['x', 'y']) {

                        particle[ax] += particle['a' + ax]

                        particle['a' + ax] += (Math.random() - 0.5) * move

                        particle['a' + ax] -= Math.sign(particle[ax] - particle['s' + ax]) * pull

                        particle['a' + ax] *= dampen

                        particle['a' + ax] -= Math.sign(localMouse[ax] - particle[ax]) * push
                    }

                    draw.fillCircle(particle.x, particle.y, 2)
                }
            }

            function scan(ctx, density) {
                var imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)
                var pixels = []
                var rows = ctx.canvas.height / density
                var cols = ctx.canvas.width / density

                for (var row = 0; row < rows; row++) {
                    for (var col = 0; col < cols; col++) {
                        var pixelX = col * density + density / 2
                        var pixelY = row * density + density / 2

                        for (var rp = 0; rp < density; rp++) {
                            for (var rc = 0; rc < density; rc++) {
                                var pixelID = ((row * density + rp) * ctx.canvas.width + (col * density + rc)) * 4
                                var [r, g, b, alpha] = [
                                    imageData.data[pixelID],
                                    imageData.data[pixelID + 1],
                                    imageData.data[pixelID + 2],
                                    imageData.data[pixelID + 3]
                                ]

                                if (alpha) {
                                    pixels.push({
                                        x: pixelX,
                                        y: pixelY,
                                        info: {
                                            r: r,
                                            g: g,
                                            b: b,
                                            alpha: alpha
                                        }
                                    })
                                    rp = density
                                    rc = density
                                }
                            }
                        }
                    }
                }
                return pixels
            }

            function Draw(ctx) {
                this.ctx = ctx
                this.canvas = canvas

                this.set = function(options) {
                    for (var option in options) {
                        this.ctx[option] = options[option]
                    }
                }
                this.fillRect = function(x, y, width, height) {
                    this.ctx.fillRect(x, y, width, height)
                }
                this.strokeRect = function(x, y, width, height) {
                    this.ctx.strokeRect(x, y, width, height)
                }
                this.fillCircle = function(x, y, radius) {
                    this.ctx.beginPath()
                    this.ctx.arc(x, y, radius, 0, Math.PI * 2)
                    this.ctx.fill()
                }
                this.strokeCircle = function(x, y, radius) {
                    this.ctx.beginPath()
                    this.ctx.arc(x, y, radius, 0, Math.PI * 2)
                    this.ctx.stroke()
                }
                this.fillText = function(x, y, text) {
                    this.ctx.fillText(text, x, y)
                }
                this.strokeText = function(x, y, text) {
                    this.ctx.strokeText(text, x, y)
                }
                this.line = function(x1, y1, x2, y2) {
                    this.ctx.beginPath()
                    this.ctx.moveTo(x1, y1)
                    this.ctx.lineTo(x2, y2)
                    this.ctx.stroke()
                }
                this.clear = function() {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }
            }
            init()
            if (inited == false) {
                draw.clear();
                window.step()
            }

        };

        var mouse = {
            x: 0,
            y: 0
        }

        function moveMouse(e) {
            var offset = $(window).scrollTop();

            mouse.x = e.pageX
            mouse.y = e.pageY
        }

        function touchMove(e) {
            moveMouse(e.touches[0])
        }

        if (window.innerWidth > 200) {

            document.addEventListener('mousemove', moveMouse, false);
        } else {
            document.addEventListener("touchmove", touchMove, false);
        }

        $(el).on('inview', function(event, visible) {
            if (visible == true) {
                setTimeout(function() {
                    init(el);
                    inited = true;
                }, 100);
            } else {
                inited = false;
            }
        });
    });

    if (document.querySelector('.pricelist-price__btn')) {
        const priceListBtn = document.querySelectorAll('.pricelist-price__btn');
        priceListBtn.forEach((el) => {
            $(el).click(function() {
                if (el.getAttribute('data-active') == 0) {
                    $(el).closest('.pricelist-price__btn-wrap').siblings('.js-hide').slideDown("slow", function() {
                        isBtnDyes.forEach((element, idx) => {
                            element.setAttribute('data-isBtnDye', idx);
                            const isBtnDyeZs = document.querySelectorAll('.isBtnDyeZ');
                            isBtnDyeZs.forEach((elem) => {
                                if (element.getAttribute('data-isbtndye') == elem.getAttribute('data-isbtndyez')) {
                                    var parentPos = document.querySelector('body').getBoundingClientRect(),
                                        childrenPos = element.getBoundingClientRect(),
                                        relativePos = {};

                                    relativePos.top = childrenPos.top - parentPos.top,
                                        relativePos.left = childrenPos.left - parentPos.left;

                                    let top = relativePos.top;
                                    let left = relativePos.left;


                                    elem.style.top = `${top -10}px`;
                                    elem.style.left = `${left -10}px`;
                                }
                            });
                        });
                        el.setAttribute('data-active', 1);
                        el.textContent = '';
                        el.insertAdjacentHTML('beforeend', `Свернуть
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
						<path d="M1 1.48438L14 1.48437M14 1.48437L14 14.4844M14 1.48437L1 14.4844" stroke="#B55A2B"></path>
					</svg>
				</span>`);
                    });
                }
                if (el.getAttribute('data-active') == 1) {
                    el.setAttribute('data-active', 0);
                    $(el).closest('.pricelist-price__btn-wrap').siblings('.js-hide').slideUp("slow", function() {
                        isBtnDyes.forEach((element, idx) => {
                            element.setAttribute('data-isBtnDye', idx);
                            const isBtnDyeZs = document.querySelectorAll('.isBtnDyeZ');
                            isBtnDyeZs.forEach((elem) => {
                                if (element.getAttribute('data-isbtndye') == elem.getAttribute('data-isbtndyez')) {
                                    var parentPos = document.querySelector('body').getBoundingClientRect(),
                                        childrenPos = element.getBoundingClientRect(),
                                        relativePos = {};

                                    relativePos.top = childrenPos.top - parentPos.top,
                                        relativePos.left = childrenPos.left - parentPos.left;

                                    let top = relativePos.top;
                                    let left = relativePos.left;


                                    elem.style.top = `${top -10}px`;
                                    elem.style.left = `${left -10}px`;
                                }
                            });
                        });
                        el.textContent = '';
                        el.insertAdjacentHTML('beforeend', `Подробнее
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
						<path d="M14 0.484375L14 13.4844M14 13.4844L1 13.4844M14 13.4844L1 0.484374" stroke="#B55A2B"/>
					</svg>
				</span>`);
                    });
                }
            });
        });
    }

    if (document.querySelector('.composition__btn')) {
        const compositionLink = document.querySelectorAll('.composition__btn');
        compositionLink.forEach((el) => {
            $(el).click(function() {
                if (el.getAttribute('data-active') == 0) {
                    $(el).closest('li').find('.composition__list-result').slideDown("slow", function() {
                        isBtnDyes.forEach((element, idx) => {
                            element.setAttribute('data-isBtnDye', idx);
                            const isBtnDyeZs = document.querySelectorAll('.isBtnDyeZ');
                            isBtnDyeZs.forEach((elem) => {
                                if (element.getAttribute('data-isbtndye') == elem.getAttribute('data-isbtndyez')) {
                                    var parentPos = document.querySelector('body').getBoundingClientRect(),
                                        childrenPos = element.getBoundingClientRect(),
                                        relativePos = {};

                                    relativePos.top = childrenPos.top - parentPos.top,
                                        relativePos.left = childrenPos.left - parentPos.left;

                                    let top = relativePos.top;
                                    let left = relativePos.left;

                                    elem.style.top = `${top -10}px`;
                                    elem.style.left = `${left -10}px`;
                                }
                            });
                        });
                        el.setAttribute('data-active', 1);
                        el.textContent = '';
                        el.insertAdjacentHTML('beforeend', `Свернуть
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
						<path d="M1 1.48438L14 1.48437M14 1.48437L14 14.4844M14 1.48437L1 14.4844" stroke="#B55A2B"></path>
					</svg>
				</span>`);
                    });
                }
                if (el.getAttribute('data-active') == 1) {
                    el.setAttribute('data-active', 0);
                    $(el).closest('li').find('.composition__list-result').slideUp("slow", function() {
                        isBtnDyes.forEach((element, idx) => {
                            element.setAttribute('data-isBtnDye', idx);
                            const isBtnDyeZs = document.querySelectorAll('.isBtnDyeZ');
                            isBtnDyeZs.forEach((elem) => {
                                if (element.getAttribute('data-isbtndye') == elem.getAttribute('data-isbtndyez')) {
                                    var parentPos = document.querySelector('body').getBoundingClientRect(),
                                        childrenPos = element.getBoundingClientRect(),
                                        relativePos = {};

                                    relativePos.top = childrenPos.top - parentPos.top,
                                        relativePos.left = childrenPos.left - parentPos.left;

                                    let top = relativePos.top;
                                    let left = relativePos.left;


                                    elem.style.top = `${top -10}px`;
                                    elem.style.left = `${left -10}px`;
                                }
                            });
                        });
                        el.textContent = '';
                        el.insertAdjacentHTML('beforeend', `Подробнее
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
						<path d="M14 0.484375L14 13.4844M14 13.4844L1 13.4844M14 13.4844L1 0.484374" stroke="#B55A2B"/>
					</svg>
				</span>`);
                    });
                }
            });
        });
    }

    if (document.querySelector('.js-composition-item')) {
        const compositionResult = document.querySelectorAll('.js-composition-item');
        const compositionLink = document.querySelectorAll('.js-composition-link');
        compositionLink.forEach((el, idx) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                compositionResult.forEach((item, i) => {
                    item.style.opacity = '0';
                    item.classList.remove('composition__list-result');
                    item.classList.add('composition__list-result-hide');
                    if (i === idx) {
                        compositionResult[i].classList.add('composition__list-result');
                        compositionResult[i].classList.remove('composition__list-result-hide');
                        setTimeout(() => {
                            compositionResult[i].style.opacity = '1';
                        }, 350);
                    }
                });

                compositionLink.forEach((elem) => {
                    elem.closest('li').querySelector('span').classList.remove('active');
                });

                el.closest('li').querySelector('span').classList.add('active');
            });
        });
    }


    if (document.querySelector('.examples-swiper')) {
        new Swiper('.swiper.examples-swiper', {

            loop: true,
            loopAdditionalSlides: 30,
            speed: 1000,

            navigation: {
                nextEl: '.swiper-button-next.examples__next',
                prevEl: '.swiper-button-prev.examples__prev',
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
            breakpoints: {
                375: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1366: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            },
        });
    }

    if (document.querySelector('.project-gallery')) {
        var galleryThumbs = new Swiper('.gallery-thumbs.project-gallery__thumbsSwiper', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                0: {
                    slidesPerView: 3,
                    spaceBetween: 17,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 8,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 8,
                },
                1366: {
                    slidesPerView: 5,
                    spaceBetween: 8,
                },
                1666: {
                    slidesPerView: 6,
                    spaceBetween: 8,
                },
                1920: {
                    slidesPerView: 8,
                    spaceBetween: 17,
                },
            },
        });
        var galleryTop = new Swiper('.gallery-top.project-gallery__topSwiper', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next.project-gallery__next',
                prevEl: '.swiper-button-prev.project-gallery__prev',
            },
            thumbs: {
                swiper: galleryThumbs
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                1200: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                },
                1366: {
                    slidesPerView: 1.7,
                    spaceBetween: 30,
                },
                1666: {
                    slidesPerView: 2.3,
                    spaceBetween: 50,
                },
                1920: {
                    slidesPerView: 3.3,
                    spaceBetween: 50,
                },
            },
        });
    }

    if (document.querySelector('.js-reviews')) {
        const reviewsLink = document.querySelectorAll('.js-reviews');
        reviewsLink.forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                if (el.getAttribute('data-open') == 0) {
                    $(el).siblings('.reviews__comment-hide').slideDown("slow", function() {
                        el.innerText = 'Скрыть';
                        el.setAttribute('data-open', 1);
                        isBtnDyes.forEach((element, idx) => {
                            element.setAttribute('data-isBtnDye', idx);
                            const isBtnDyeZs = document.querySelectorAll('.isBtnDyeZ');
                            isBtnDyeZs.forEach((elem) => {
                                if (element.getAttribute('data-isbtndye') == elem.getAttribute('data-isbtndyez')) {
                                    var parentPos = document.querySelector('body').getBoundingClientRect(),
                                        childrenPos = element.getBoundingClientRect(),
                                        relativePos = {};

                                    relativePos.top = childrenPos.top - parentPos.top,
                                        relativePos.left = childrenPos.left - parentPos.left;

                                    let top = relativePos.top;
                                    let left = relativePos.left;

                                    elem.style.top = `${top -10}px`;
                                    elem.style.left = `${left -10}px`;
                                }
                            });
                        });
                    });
                }
                if (el.getAttribute('data-open') == 1) {
                    el.setAttribute('data-open', 0);
                    $(el).siblings('.reviews__comment-hide').slideUp("slow", function() {
                        el.innerText = 'Читать польностью';
                        isBtnDyes.forEach((element, idx) => {
                            element.setAttribute('data-isBtnDye', idx);
                            const isBtnDyeZs = document.querySelectorAll('.isBtnDyeZ');
                            isBtnDyeZs.forEach((elem) => {
                                if (element.getAttribute('data-isbtndye') == elem.getAttribute('data-isbtndyez')) {
                                    var parentPos = document.querySelector('body').getBoundingClientRect(),
                                        childrenPos = element.getBoundingClientRect(),
                                        relativePos = {};

                                    relativePos.top = childrenPos.top - parentPos.top,
                                        relativePos.left = childrenPos.left - parentPos.left;

                                    let top = relativePos.top;
                                    let left = relativePos.left;

                                    elem.style.top = `${top -10}px`;
                                    elem.style.left = `${left -10}px`;
                                }
                            });
                        });
                    });
                }

            });
        });
    }





    if (document.querySelector('.js-astr')) {
        // lib : ('https://github.com/CodeSeven/toastr');
        // demo: ('https://codeseven.github.io/toastr/demo.html');

        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "1300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };

        // toastr["success"]("success!");
        // toastr["info"]("info!");
        // toastr["warning"]("warning!");
        // toastr["error"]("error!");

        const asrts = document.querySelectorAll('.js-astr');
        asrts.forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                toastr["info"](el.getAttribute('data-promt'));
            });
        });
    }

    // 15.02.2022 - 16.02.2022

    const filterWrappers = document.querySelectorAll('.filter__wrapper');
    const filterLabel = document.querySelectorAll('.filter__label');
    const filterBlock = document.querySelector('.filter');
    const clearFilter = document.querySelector('.filter__clear-btn');
    const filterCloseMob = document.querySelector('.filter__close-mob');
    // const filterCheckboxes = filterBlock.querySelectorAll('.filter__checkbox');

    if (filterBlock) {
        filterBlock.addEventListener('click', (e) => {
            if (e.target === e.currentTarget || e.target.classList.contains('filter__substrate') || e.target.classList.contains('filter__heading') || e.target.classList.contains('filter__btn')) {
                e.currentTarget.classList.toggle('filter-active');
                if (window.innerWidth < 768) {
                    document.querySelector('html').style.overflow = 'hidden';
                }
            }
        })
    }

    // 18.02.2022 

    $(document).mouseup(function(e) {
        var container = $(".filter");
        if (container.has(e.target).length === 0) {
            container.removeClass("filter-active");
        }
    });

    // 18.02.2022 

    // if (filterLabel) {
    //     filterLabel.forEach(el => {
    //         el.addEventListener('click', () => {
    //             el.parentElement.classList.toggle('filter__wrapper-active');
    //             // let filterCheckbox = el.querySelector('.filter__checkbox');
    //             // if (filterCheckbox) {
    //             //     filterCheckbox.setAttribute('checked', true);
    //             // }
    //         })
    //     });
    // }

    if (filterWrappers) {
        filterWrappers.forEach(el => {
            el.addEventListener('click', () => {
                el.classList.toggle('filter__wrapper-active');
                if (el.classList.contains('filter__wrapper-active')) {
                    // el.querySelector('.filter__checkbox').setAttribute('checked', true);
                    clearFilter.style.visibility = 'visible';
                }
            });
        });
    }

    filterWrappers.forEach((checked) => {
        checked.addEventListener('click', () => {
            let checkboxesChecked = Array.from(filterBlock.querySelectorAll('.filter__checkbox'))
                .some(elem => {
                    if (elem.hasAttribute('checked')) {
                        return true;
                    } else {
                        return false;
                    }
                });
            if (!checkboxesChecked) {
                clearFilter.style.visibility = 'hidden';
                document.querySelector('.filter__substrate').style.backgroundColor = 'white';
                document.querySelector('.filter__substrate path').style.fill = '#B55A2B';
                return;
            }
            document.querySelector('.filter__substrate').style.backgroundColor = '#B55A2B';
            document.querySelector('.filter__substrate path').style.fill = 'white';
            // let checkboxesWrappers = Array.from(filterBlock.querySelectorAll('.filter__wrapper'))
            //      .some(elem => { return elem.classList.contains('filter__wrapper-active') });
            // if (checkboxesWrappers) {
            //     clearFilter.style.visibility = 'visible';
            // } else {
            //     clearFilter.style.visibility = 'hidden';
            // }
        });
    });

    if (clearFilter) {
        clearFilter.addEventListener('click', () => {
            filterWrappers.forEach(el => {
                el.classList.remove('filter__wrapper-active');
                el.querySelector('.filter__checkbox').removeAttribute('checked');
                document.querySelector('.filter__substrate').style.backgroundColor = 'white';
                document.querySelector('.filter__substrate path').style.fill = '#B55A2B';
                clearFilter.style.visibility = 'hidden';
            })
        })
    }

    if (filterCloseMob) {
        filterCloseMob.addEventListener('click', () => {
            filterBlock.classList.remove('filter-active');
            document.querySelector('html').style.overflow = 'visible';
        });
    }

    if (filterBlock) {
        setTimeout(() => {
            filterBlock.style.left = 0;
        }, 0.5)
    }

    // 15.02.2022 - 16.02.2022
    if (document.querySelector('.filter__popup-mob')) {
        document.querySelector('.filter__popup-mob').addEventListener('click', (evnt) => {
            if (window.innerWidth < 768) {
                if (evnt.target === evnt.currentTarget) {
                    filterBlock.classList.remove('filter-active');
                    document.querySelector('html').style.overflow = 'visible';
                }
            }
        })
    }

    document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape') {
            document.querySelector('html').style.overflow = 'visible';
        }
    });
    document.addEventListener('keypress', (ev) => {
        if (ev.key === 'Escape') {
            document.querySelector('html').style.overflow = 'visible';
        }
    });
    document.addEventListener('keyup', (ev) => {
        if (ev.key === 'Escape') {
            document.querySelector('html').style.overflow = 'visible';
        }
    });

    let applicationForm = document.querySelector('.js-application-link');

    applicationForm.addEventListener('click', async function(el) {
        el.preventDefault();
        let req = await fetch(this.href);
        let res = document.createElement('div');
        res.innerHTML = await req.text();
        res.classList.add('application-bg');
        document.body.append(res);
        document.querySelector('html').style.overflow = 'hidden';
        var selector = document.querySelector("input[type='tel']");
        var im = new Inputmask("+7(999) 999-99-99");
        im.mask(selector);
    });

    window.addEventListener('click', (elem) => {
        if (elem.target.classList.contains('application-bg') || elem.target.classList.contains('application-close') || elem.target.classList.contains('application-close__img')) {
            document.querySelector('.application-bg').remove();
            document.querySelector('html').removeAttribute('style');
        }
    });
});

// SUBMIT_BTN.addEventListener('click', (e) => {
//     e.preventDefault();

//     let dataUrl = SUBMIT_BTN.getAttribute('data-url');

// const inputValue = document.querySelector('input').value;
// const inputName = document.querySelector('.input-name');
// const testInputValidate = function() {
//     if (inputName.classList.contains('error')) {
//         return false;
//     } 
//     if () {

//     }
// }
//     if (x) {
//         $.ajax({
//             type: "POST",
//             url: dataUrl,
//             data: {
//                 mail: inputValue,
//                 name: nameValue,
//             },
//             async: true,
//             dataType: "text",
//             success: function(data) {
//                 data = JSON.parse(data);
//                 if (data.success) {
//                     const surveySuccesTemplate = `
//                     <div class="contest-modal contest-modal--survey contest-modal--succes">
//                     <a class="contest-modal__close" href="#"
//                     onclick="$.magnificPopup.close(); (function(e){e.preventDefault();})(event);">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
//                     <path d="M1 1L25 25M1 25L25 1" stroke="#F79110" stroke-width="2" />
//                     </svg>
//                     </a>
//                     <div class="contest-modal__content">
//                     <p class="survey-step-title">${window.quizTitle}</p>
//                     <p class="survey-step-text">${window.quizText}</p>
//                     <img class="survey-step-1-img" src="${window.quizImg}" alt="img">
//                     </div>
//                     </div>
//                     `;
//                     document.querySelector('.mail-err').classList.remove('active');
//                     TEL_INPUT.style.borderColor = 'green';
//                     const modal = document.querySelector('.contest-modal-wrapper');
//                     modal.innerHTML = surveySuccesTemplate;
//                 } else {
//                     document.querySelector('.mail-err').classList.add('active');
//                     TEL_INPUT.style.borderColor = 'red';
//                 }
//             },
//         });
//     }
// });