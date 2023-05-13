



$('.accordion__box').on('click', function () {
    $(this).next().slideToggle();
    // $(this).toggleClass('questions__text--active');
    $(this)('.accordion__text').slideToggle('accordion__text--active');
});

// $('.accordion__btn').on('click', function () {
//     $('.accordion__btn').toggleClass('active');
// });

// $('.questions__box').on('click', function () {
//     $(this).next().slideToggle();
//     // $(this).toggleClass('questions__text--active');
//     $(this)('.questions__text').slideToggle('questions__text--active');
// });

// $('.questions__btn').on('click', function () {
//     $('.questions__btn').toggleClass('active');
// });


// $(function name(params) {
//     alert("Hello! I am an alert box!!");

    // $('.menu-mobile__btn').on('click', function () {
    //     $('.menu-mobile__items').toggleClass('menu-mobile__items--active');

    //     /*$('.header__logo').toggleClass('menu__list--active');
    //     $('.intro__btn').toggleClass('menu__list--active');*/
    //     // для адаптива кнопки 
    // });

    // $('.menu-mobile__btn').on('click', function () {
    //     $('.menu-mobile__btn').toggleClass('active');
    //     // для кнопки крестик
    // });


// accordion__box
  



    /*	$(".menu a").on("click", function (event) {
    	    event.preventDefault();
    	    var id = $(this).attr('href'),
    	        top = $(id).offset().top;
    	    $('body,html').animate({
    	        scrollTop: top
    	    }, 1500);
    	});

        /*для закрыть меню*/
    /*
              $('.menu__btn').on('click', function () {
                  $('.menu__items').toggleClass('menu__items--active');
              });
              $('.menu__btn').on('click', function () {
                  $('.menu__btn').toggleClass('active');
              });
           
            $('.home__slider').slick({
                dots: true,
                arrows: false,
                 responsive: [


                     {
                         breakpoint: 1150,
                         settings: {
                             slidesToShow: 4,
                         }
                     },
                     {
                         breakpoint: 1000,
                         settings: {
                             slidesToShow: 3,
                         }
                     },
                     {
                         breakpoint: 620,
                         settings: {
                             slidesToShow: 2,
                             slidesToScroll: 2,
                         }
                     },
                 ]
            });
           
           
           */


// });