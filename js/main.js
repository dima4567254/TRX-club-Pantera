
$(function name() {
    $('.accordion__wrapper').on('click', function () {
        $(this).next().toggleClass('accordion__text--active');
        // $(this).toggleClass('questions__text--active');
        $(this)('.accordion__wrapper').toggleClass('accordion__text--active');
        // $(this)('.accordion__btn').removeClass('active');
        // $(this)('.accordion__btn').add('active');
        // $('.accordion__btn').toggleClass('active');
    });

    $(document).ready(function () {
        $(".accordion__item").click(function () {
            $(this).toggleClass("active");
        });
    });

    // $(document).ready(function () {
    //     $(".rates__list").click(function () {
    //         $(this)('.rates__items').add('active');
    //     });
    // });

    $('.rates__list').on('click', function () {
        // $(this).next().toggleClass('active');
        // $(this).toggleClass('questions__text--active');
        $(this)('.rates__items').add('active');
        // $(this)('.accordion__btn').removeClass('active');
        // $(this)('.accordion__btn').add('active');
        // $('.accordion__btn').toggleClass('active');
    });

    

    $('.gallery-slider__items').slick({
        dots: false,
        arrows: false,
        asNavFor: '.gallery-slider-big',
        // focusOnSelect: true,
        // // slidesToShow: 5, //кол-во слайдов
        // slidesToScroll: 1,//кол-во переключния слайдовза 1 раз
        // slidesPerGroup: 5,
        // centeredSlides: true, //слайд по центру
        // // centerMode: true,
        // // centerPadding: '60px',
        // centerMode: true,
        centerPadding: '0px',// убирает кусочки слайдов по бокам
        // slidesToShow: 5,
        autoplaySpeed: 2000,
        autoplay: true,

        loop:true,//бесконечность
        // // vertical: true,
        // // draggable: false
        // variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        draggable: false,
    });

    $('.gallery-slider-big').slick({
        // dots: false,
        // arrows: false,
        // centeredSlides: true,
        // autoplaySpeed: 2000,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        // variableWidth: true,

        asNavFor: '.gallery-slider__items',
        // draggable: false,
        // vertical: false,
        // responsive: [

        //     {
        //         breakpoint: 770,
        //         settings: {
        //             autoplaySpeed: 2000,
        //             autoplay: true,
        //         }
        //     },
        // ]
    });
    
    // $('.single-item').slick();
    // $('.home__slider').slick({
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     // dots: false,
    //     // arrows: false,
    //     // responsive: [
    //     //     {
    //     //         breakpoint: 1150,
    //     //         settings: {
    //     //             slidesToShow: 4,
    //     //         }
    //     //     },
    //     //     {
    //     //         breakpoint: 1000,
    //     //         settings: {
    //     //             slidesToShow: 3,
    //     //         }
    //     //     },
    //     //     {
    //     //         breakpoint: 620,
    //     //         settings: {
    //     //             slidesToShow: 2,
    //     //             slidesToScroll: 2,
    //     //         }
    //     //     },
    //     // ]
    // });
});

// Fancybox.bind("[data-fancybox]", {
//     // Your custom options
// });
