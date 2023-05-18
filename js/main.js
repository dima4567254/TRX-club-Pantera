// $('.rates__list')('click', function () {
//     $('.rates__items').toggleClass('active');
//     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
// });

// $('.rates__list').on('click', function () {
//     $('.rates__list').removeClass('active');
//     $(this).addClass('active');
// });


// $("div.test").on({
//     click: function () {
//         $(this).toggleClass("active");
//     }, mouseenter: function () {
//         $(this).addClass("inside");
//     }, mouseleave: function () {
//         $(this).removeClass("inside");
//     }
// });

// $(document).ready(function () {
//     $(".rates__list").click(function () {
//         $(this).toggleClass("active");
//     });
// });
// $(".rates__list").removeClass("rates__items").addClass("active");

// $(document).ready(function() {
//     $('.rates__list').click(function (event) {
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });

// $('.rates__list').on('click', function () {
//     $(this).next().toggleClass('active');
//     // $(this).toggleClass('questions__text--active');
//     $(this)('.rates__items').toggleClass('active');
//     // $(this)('.accordion__btn').removeClass('active');
//     // $(this)('.accordion__btn').add('active');
//     // $('.accordion__btn').toggleClass('active');
// });

// $('.questions__list').on('click', function () {
//     $(this).next().slideToggle();
//     // $(this).toggleClass('questions__text--active');
//     $(this)('.rates__items').slideToggle('active');
// });


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

$('.rates__inner').on('click', function (e) {
    e.preventDefault();
    $(this).next('.rates__items').toggleClass('rates__items--active');
    // $(this).addClass('active');

    // $('.rates__list').removeClass('product-tabs__text--active');
    // $($(this).attr('href')).addClass('product-tabs__text--active'); /*убирает добовляет класс*/
});

$('.rates__subtitle').on('click', function (e) {
    e.preventDefault();
    $(this).next('.rates__svg').toggleClass('rates__svg--active');
    // $(this).addClass('active');

    // $('.rates__list').removeClass('product-tabs__text--active');
    // $($(this).attr('href')).addClass('product-tabs__text--active'); /*убирает добовляет класс*/
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

    loop: true,//бесконечность
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
});

// $(function name() {
//     $('.accordion__wrapper').on('click', function () {
//         $(this).next().toggleClass('accordion__text--active');
//         // $(this).toggleClass('questions__text--active');
//         $(this)('.accordion__wrapper').toggleClass('accordion__text--active');
//         // $(this)('.accordion__btn').removeClass('active');
//         // $(this)('.accordion__btn').add('active');
//         // $('.accordion__btn').toggleClass('active');
//     });

//     $(document).ready(function () {
//         $(".accordion__item").click(function () {
//             $(this).toggleClass("active");
//         });
//     });

//     // $(".rates__list").click(function () {
//     //     $(this)('.rates__items').add('active');
//     // });





//     $('.gallery-slider__items').slick({
//         dots: false,
//         arrows: false,
//         asNavFor: '.gallery-slider-big',
//         // focusOnSelect: true,
//         // // slidesToShow: 5, //кол-во слайдов
//         // slidesToScroll: 1,//кол-во переключния слайдовза 1 раз
//         // slidesPerGroup: 5,
//         // centeredSlides: true, //слайд по центру
//         // // centerMode: true,
//         // // centerPadding: '60px',
//         // centerMode: true,
//         centerPadding: '0px',// убирает кусочки слайдов по бокам
//         // slidesToShow: 5,
//         autoplaySpeed: 2000,
//         autoplay: true,

//         loop: true,//бесконечность
//         // // vertical: true,
//         // // draggable: false
//         // variableWidth: true,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         centerMode: true,
//         focusOnSelect: true,
//         draggable: false,
//     });

//     $('.gallery-slider-big').slick({
//         // dots: false,
//         // arrows: false,
//         // centeredSlides: true,
//         // autoplaySpeed: 2000,
//         // autoplay: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         fade: true,
//         // variableWidth: true,

//         asNavFor: '.gallery-slider__items',
//     });
// });


