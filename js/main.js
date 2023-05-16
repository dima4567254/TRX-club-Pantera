


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

    $('.product-detalis-slider').slick({
        dots: false,
        arrows: false,
        asNavFor: '.product-detalis-slider-big',
        // focusOnSelect: true,
        // // slidesToShow: 5, //кол-во слайдов
        // slidesToScroll: 1,//кол-во переключния слайдовза 1 раз
        // slidesPerGroup: 5,
        // centeredSlides: true, //слайд по центру
        // // centerMode: true,
        // // centerPadding: '60px',
        // centerMode: true,
        // centerPadding: '1px',
        // slidesToShow: 5,
        // autoplaySpeed: 2000,
        // autoplay: true,

        loop:true,//бесконечность
        // // vertical: true,
        // // draggable: false

        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        draggable: false,
    });

    $('.product-detalis-slider-big').slick({
        // dots: false,
        // arrows: false,
        // centeredSlides: true,
        // autoplaySpeed: 2000,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,

        asNavFor: '.product-detalis-slider',
        draggable: false,
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

