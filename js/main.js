$('.menu__btn').on('click', function () {
    $('.menu__items').toggleClass('menu__items--active');

    /*$('.header__logo').toggleClass('menu__list--active');
    $('.intro__btn').toggleClass('menu__list--active');*/
});

$('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('active');
});
// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// massiv.filter((item, index) => index % 2);
// console.log(index);
// console.log(item);

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

// document.querySelectorAll('.start').forEach((item) =>

//     item.addEventListener('click', () => {
//         const parent = item;
//         // const parent = item.parentNode;

//         if (parent.classList.contains('wenstay')) {
//             parent.classList.remove('wenstay');
//         }
//         else {
//             document
//                 .querySelectorAll('.accordion__wrapper')
//                 .forEach((child) => child.classList.remove('wenstay'))

//             parent.classList.toggle('wenstay');
//             // parent.classList.toggleClass('accordion__wrapper--active');
//         }
//     })
// )
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
    let header = $('.header__left');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 210) {
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
// var acc = document.getElementsByClassName(".about__td");

// document.getElementById('.about__td').addEventListener('click', (event) => {
//     const t = event.target.closest('about__td');
//     // if (t) { event.target.style.backgroundColor = "purple" }
// });

// for (let span of document.querySelectorAll('.about__td')) {
//     span.onclick = () => {
//         // span.style.backgroundColor = "gold"
//         span.classList.addClass('about__td--active');

//     }
// }

// (function (document) {

//     var selectedItem = null;

//     document.querySelector('ul')
//         .addEventListener('click', function (e) {
//             if (selectedItem) {
//                 selectedItem.className = selectedItem.className.replace(' selected', '');
//             }

//             if (e.target.className.indexOf('selected') == -1) {
//                 e.target.className += ' selected';
//             }
//             selectedItem = e.target;
//         });
// })(document);


//   document.querySelector('.out-1').innerHTML += a[i]


// document.body.addEventListener("click", function (event) {
//     const elem = event.target.addClass(".about__td");
//     if (elem) {
//         elem.classList.toggle("about__td");
//         // const window = elem.closest(".book").querySelector(".window");
//         // window.classList.toggle("window_show");
//     }
// });


// const option = document.querySelectorAll('.about__td');

// // console.log(option);
// // option.addEventListener('click', () => {
// function myClick() {

//     for (let i = 0; i < option.length; i = i + 1) {
//         // console.log(option[i].selected);
//         // if (option[i]) {
//             // console.log(option[i].innerHTML);
//             option.classList.addClass('about__td--active');
//         // }
//     }
// }

// option.onclick = myClick;
// });


// document.querySelectorAll('.about__td').forEach((item) =>


//     item.addEventListener('click', () => {
//         const parent = item;



// const parent = item.parentNode;
// for (var i = 0; i < parent; i++) {
//     parent.classList.addClass('about__td--active');
//     //         }
// }

// if (parent.classList.contains('about__td--active')) {
//     // parent.classList.remove('about__td--active');
//     // parent.classList.addClass('about__td--active');
//     // for (var i = 0; i < parent; i++) {
//     //     parent.classList.addClass('about__td--active');
//     //     //         }
//     // }
// }
// else {
//     document
//         .querySelectorAll('.about__td')
//         .forEach((child) => child.classList.remove('about__td--active'))

//     parent.classList.toggle('about__td--active');
//     // parent.classList.toggleClass('accordion__wrapper--active');
// }
//     })
// )
//  () =>
// about__td
// about__td--active
// let spans = document.querySelector('.about__td');

// spans.addEventListener('click', () =>
//     // spans.addEventListener('click', () => );

//     function changeColor(event) {
//         let span = event.target.closest('.about__td');
//         if (!span) return;
//         span.classList.toggle('about__td--active');
//     })

// document.querySelectorAll('.about__td').forEach((item) =>

//     item.addEventListener('click', () => {
//         const parent = item;
//         // parent.classList.toggle('about__td--active');
//         // document
//         //     .querySelectorAll('.about__td')
//         //     .forEach((child) => child.classList.remove('about__td--active'))


//         // parent.classList.toggle('about__td--active');
//         // console.log('work2');
//         // // if (parent.classList.contains('about__td--active')) {

//         // let elements = document.getElementsByClassName("about__td");
//         // for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
//         //     // elements[i].addEventListener('click', function () {  /*при клике на элемент
//         //     if (parent.classList.contains('about__td--none')) {
//         //         for (let i = 0; i < elements.length; i++) {
//         //             elements[i].classList.remove('about__td--none'); /*удаляем у всех class active*/
//         //             console.log('23');
//         //         }
//         //         console.log('20');
//         //     }
//         //     else {
//         //         console.log('21');
//         //         for (let i = 0; i < elements.length; i++) {
//         //             elements[i].classList.add('about__td--none'); /*удаляем у всех class active*/
//         //             console.log('24');
//         //         }
//         //     }
//         //     // 2 шаг вешает всем дисплей ноне
//         // }

//         document
//             .querySelectorAll('.about__item')
//             .forEach((child) => child.classList.remove('about__item--active'))


//         parent.classList.toggle('about__item--active');
//         let item = document.getElementsByClassName("about__item");
//         for (let i = 0; i < item.length; i++) {/*прокручиваем в цикле все элементы*/
//             // elements[i].addEventListener('click', function () {  /*при клике на элемент
//             if (parent.classList.contains('about__item--none')) {
//                 for (let i = 0; i < item.length; i++) {
//                     item[i].classList.remove('about__item--none'); /*удаляем у всех class active*/
//                     console.log('23');
//                 }
//                 console.log('20');
//             }
//             else {
//                 console.log('21');
//                 for (let i = 0; i < item.length; i++) {
//                     item[i].classList.add('about__item--none'); /*удаляем у всех class active*/
//                     console.log('24');
//                 }
//             }
//             // 2 шаг вешает всем дисплей ноне
//         }
//     })
// )

// about__td
// about__td--active

//         }
//     })
// )
// about__td
// about__td--active

// const it =  document.querySelectorAll('.about__td').forEach(()

// let blocks2 = document.querySelectorAll('.about__td');
// let blocks = document.querySelectorAll('.block');
// let blocks2 = document.getElementsByClassName('block');
// console.log(blocks2);

// for (let i = 0; i < blocks.length; i++) {
//     blocks[i].onclick = function () {
//         console.log('work');

//     }
// }
// console.log('');
// forEach бывает для qwery или для js надо отличать
// часто делают так
// ---------------------------------------------------
// let blocks2 = document.querySelector('.westday');
// function myClick (element) {
//     // console.log('element');
//     element.onclick = function () {
//         let blocks = document.querySelector('.item');
//         blocks.classList.add('about__item--active');
//     }
// };

// blocks2.onclick = myClick;
// ---------------------------------------------------

// function one() {
//     console.log('work');
//     // this
//     console.log(this.innerHTML);
//     // this мошная фнкция работает в зависимости от применения
//     this.style.background = 'green';
// 

// const els = document.getElementsByClassName('westday');
// const className = 'open';
// for (let i in els) {
//     els[i].onclick = function () {
//         els[i].classList.contains(className) ? els[i].classList.remove(className) : els[i].classList.add(className)
//     }
// }
let buttonModal = document.querySelector('.about__item');
let buttonModal4 = document.querySelector('.westday');
// let buttonModal = document.querySelector('.item');
buttonModal4.addEventListener('click', () => {
    // document.querySelectorAll('.westday').forEach((item) =>

    // item.addEventListener('click', () => {
    // const parent = item;
    // buttonModal.classList.add('about__item--active');
    if (buttonModal.classList.contains('about__item--active')) {
        // document.getElementsByClassName("test")[0];
        // const elements = parentDOM.getElementsByClassName("about__item")[0];
        let elements = document.getElementsByClassName("about__item");
        const numbers = [1, 2, 3];
        const item = numbers[numbers.length - 1];
        // console.log(elements);
        for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
            // elements[i].addEventListener('click', function () {
            for (let i = 0; i < elements.length; i++) {
                // let i = 6
                elements[i].classList.remove('about__item--active'); /*удаляем у всех class active*/

                // console.log(item); // => 3
                // console.log(numbers); // => 3
            }
            // item.classList.add('active2');/*добавляем class active по которому кликнули */
            // })
        }
        // console.log('1');
    }
    else {
        // const elements = parentDOM.getElementsByClassName("about__item")[0];
        let elements = document.getElementsByClassName("about__item");
        // 78 элементов
        for (let i = 0; i < elements.length; i++) {/*прокручиваем в цикле все элементы*/
            // elements[i].addEventListener('click', function () {
            // if ((elements[i] % 2) === 0) {
            for (let i = 0; i < elements.length; i++) {
                // elements.filter((elements, 4) );
                // elements.filter((index) => !((index + 1) % 3).add('about__item--active'));
                // elements.filter((index) => !((index + 1) % 3).elements[i].classList.add('about__item--active'));
                /*удаляем у всех class active*/
                // let index2 = ((index + 1) % 3)
                // let index = 3;

                elements.filter(function (elem) {
                    elem[i].classList.add('about__item--active');
                    // if (elem >= 0) {
                    //     return true;
                    // } else {
                    //     return false;
                    // }
                });
                // elements.filter(function (elements, index, ) {

                // код
                // return true или false
                // });
            }


            // var numbers = new Array(20, 15, 6, 32, 18, 0, -5, 4, 11);

            // for (var i = 0; i < numbers.length; i++) {
            //     var number = numbers[i];

            //     if (!(number & 1) && !(i & 1)) {
            //         console.log("Число " + number + " на позиции " + i + " чётное");
            //     }
            // }
            // }
            // this.classList.add('active2');/*добавляем class active по которому кликнули */
            // })
        }
        // console.log('2');
    }
    // })
    // const cols = document.querySelectorAll('.col-6');
    // const first = cols[0];
    // const last = cols[cols.length - 1];

    // last.className = "col-12";
}
);




