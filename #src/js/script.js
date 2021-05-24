jQuery(document).ready(function($) {
    // JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
    // function testWebP(callback) {
    //     var webP = new Image();
    //     webP.onload = webP.onerror = function() {
    //         callback(webP.height == 2);
    //     };
    //     webP.src =
    //         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    // }
    // testWebP(function (support) {
    //   if (support == true) {
    //     document.querySelector("body").classList.add("webp");
    //   } else {
    //     document.querySelector("body").classList.add("no-webp");
    //   }
    // });
    // ========================================================================
    //100 vh mobile 
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    AOS.init({
        once:true,
        anchorPlacement: 'top-bottom',
    });

    var scroll = new SmoothScroll({
        // Р’СЂРµРјСЏ СЃРєСЂРѕР»Р»Р° 400 = 0.4 СЃРµРєСѓРЅРґС‹
        animationTime: 1400,
        // Р Р°Р·РјРµСЂ С€Р°РіР° РІ РїРёРєСЃРµР»СЏС…
        stepSize: 75,

        // Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РЅР°СЃС‚СЂРѕР№РєРё:

        // РЈСЃРєРѕСЂРµРЅРёРµ
        accelerationDelta: 30,
        // РњР°РєСЃРёРјР°Р»СЊРЅРѕРµ СѓСЃРєРѕСЂРµРЅРёРµ
        accelerationMax: 2,

        // РџРѕРґРґРµСЂР¶РєР° РєР»Р°РІРёР°С‚СѓСЂС‹
        keyboardSupport: true,
        // РЁР°Рі СЃРєСЂРѕР»Р»Р° СЃС‚СЂРµР»РєР°РјРё РЅР° РєР»Р°РІРёР°С‚СѓСЂРµ РІ РїРёРєСЃРµР»СЏС…
        arrowScroll: 50,

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // РџРѕРґРґРµСЂР¶РєР° С‚Р°С‡РїР°РґР°
        touchpadSupport: true,
    });


    const bgoverley = $('.bg-overley');
    var swiper = new Swiper(".testimo-slider", {
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        mousewheel: true,
        keyboard: true,
        breakpoints: {
            // when window width is >= 640px
            1201: {
                pagination: {
                    el: ".swiper-pagination",
                },
            }
        }
    });
    $(document).on('click', '.js-burger-menu-block-btn', function (e){
       e.preventDefault();
       $('.js-burger-menu-block').addClass('js-active');
    });

    $(document).on('click', '.js-burger-menu-block-exit', function (e){
        e.preventDefault();
        $('.js-burger-menu-block').removeClass('js-active');
    });



});
