$('.menu__btn').on('click', function () {
    $('.menu__items').toggleClass('menu__items--active');

    /*$('.header__logo').toggleClass('menu__list--active');
    $('.intro__btn').toggleClass('menu__list--active');*/
});

$('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('active');
});

// $('.menu__btn, .menu a').on('click', function () {
//     $('.menu__btn,.menu__items').toggleClass('menu__items--active');
//     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
// });
// ------------------------------------
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




// $(document).ready(function () {
//     $(".accordion__item").click(function () {
//         // $(this).toggleClass("accordion__start--active");
//         $(this).next().toggleClass('accordion__item--active');
//         $(this)('.accordion__item').toggleClass('accordion__item--active');
//     });
// });
// $(document).ready(function () {
//     $(".accordion__item").click(function () {
//         $(this).toggleClass("accordion__item--active");
//     });
// });

// jQuery(document).ready(function ($) {
// $('.accordion__item').click(function (event) {
// $('.accordion__wrapper').on('click', function () {
//     $('.accordion__btn').toggleClass('accordion__btn--active');
// });
// });
// let elements = document.getElementsByClassName("accordion__btn");
// for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//     elements[i].addEventListener('click', function () {  /*при клике на элемент
//  */
//         for (let i = 0; i < elements.length; i++) {
//             elements[i].classList.remove('active'); /*удаляем у всех class active*/
//         }
//         this.classList.add('active');/*добавляем class active по которому кликнули */
//     })
// }




// const btn = document.querySelector('.accordion__wrapper');

// btn.addEventListener('click', () => {
// let elements = document.getElementsByClassName(".accordion__item");
//     for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//         elements[i].addEventListener('click', function () {  /*при клике на элемент
//  */
//             for (let i = 0; i < elements.length; i++) {
//                 elements[i].classList.remove('accordion__btn--active'); /*удаляем у всех class active*/
//             }
//             this.classList.add('accordion__btn--active');/*добавляем class active по которому кликнули */
//         })
//     }
// });

$('.accordion__wrapper').on('click', function () {
    $(this).next().toggleClass('accordion__text--active');
});

// $('.about-start').on('click', function () {
//     $(this).next().toggleClass('wenstay');
// });

// $(".about-start").click(function () {
//     $(this).toggleClass("wenstay");
// });

document.querySelectorAll('.start').forEach((item) =>

    item.addEventListener('click', () => {
        const parent = item;
        // const parent = item.parentNode;

        if (parent.classList.contains('wenstay')) {
            parent.classList.remove('wenstay');
        }
        else {
            document
                .querySelectorAll('.accordion__wrapper')
                .forEach((child) => child.classList.remove('wenstay'))

            parent.classList.toggle('wenstay');
            // parent.classList.toggleClass('accordion__wrapper--active');
        }
    })
)
// const btn = document.querySelector('.accordion__item');

// btn.addEventListener('click', () => {


// });

// btn.onclick = names;

// function names() {
// let list = document.querySelectorAll('.accordion__item');

// console.log('work');
// list.forEach(item => {
//     item.addEventListener('click', (e) => {
//         list.forEach(el => { el.classList.remove('accordion__item--active'); });
//         item.classList.add('accordion__item--active')
//     })
// })

// $(document).ready(function () {
// alert("1");

// alert("2");
// });
// --------------------------------------------------------------------------
// document.querySelectorAll('.accordion__wrapper').forEach((item) =>

//         item.addEventListener('click', () => {
//             const parent = item;
//             // const parent = item.parentNode;

//             if (parent.classList.contains('accordion__wrapper--active')) {
//                 parent.classList.remove('accordion__wrapper--active');
//             }
//             else {
//                 document
//                     .querySelectorAll('.accordion__wrapper')
//                     .forEach((child) => child.classList.remove('accordion__wrapper--active'))

//                 parent.classList.toggle('accordion__wrapper--active');
//                 // parent.classList.toggleClass('accordion__wrapper--active');
//             }
//         })
//     )
// ---------------------------------------------------------------------------------
// }
// $('.accordion__wrapper').on('click', function () {
//     // $(this).next().remove('active');
//     // $(this).toggleClass('questions__text--active');
//     $(this).next()('.accordion__wrapper').add('accordion__wrapper--active');
//     // $('.accordion__btn').toggleClass('active');
// });

$(document).ready(function () {
    $(".accordion__wrapper").click(function () {
        $(this).toggleClass("accordion__wrapper--active");
    });
});
// $(function name() {}

// one.onclick = myClick;

// const els = document.getElementsByClassName('all-managers-item');
// const className = 'open';
// for (let i in els) {
//     els[i].onclick = function () {
//         els[i].classList.contains(className) ? els[i].classList.remove(className) : els[i].classList.add(className)
//     }
// }

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
// ----
// $('.slider-coaches__boss').on('click', function (e) {
//     e.preventDefault();
//     $(this).next('.slider-coaches__inner').toggleClass('slider-coaches__inner--active');
//     // $(this).addClass('active');

//     // $('.rates__list').removeClass('product-tabs__text--active');
//     // $($(this).attr('href')).addClass('product-tabs__text--active'); /*убирает добовляет класс*/
// });

// $('.slider-coaches__inner').on('click', function (e) {
//     e.preventDefault();
//     $(this).next('.slider-coaches__inner').toggleClass('slider-coaches__inner--active');
//     // $(this).addClass('active');

//     // $('.rates__list').removeClass('product-tabs__text--active');
//     // $($(this).attr('href')).addClass('product-tabs__text--active'); /*убирает добовляет класс*/
// });

$(document).ready(function () {
    $(".slider-coaches__inner").click(function () {
        $(this).toggleClass("slider-coaches__inner--active");
    });
});


$('.gallery-slider__items').slick({
    dots: false,
    arrows: false,
    asNavFor: '.gallery-slider-big',
    centerPadding: '0px',// убирает кусочки слайдов по бокам
    autoplaySpeed: 2000,
    autoplay: true,
    loop: true,//бесконечность
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    draggable: false, //перелистывание слайдов
});

$('.gallery-slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.gallery-slider__items',
});

$('.slider-coaches').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    responsive: [
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$('.slider-blog').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="prev-blog"></div>',
    nextArrow: '<div class="next-blog"></div>',
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});


$(function () {
    let header = $('.menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            header.addClass('menu-fixed');
        } else {
            header.removeClass('menu-fixed');
        }
    });
});

$(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
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


