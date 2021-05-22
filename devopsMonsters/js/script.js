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
    const bgoverley = $('.bg-overley');
    var swiper = new Swiper(".testimo-slider", {
        cssMode: true,
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
});
