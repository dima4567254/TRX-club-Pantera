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
            $(this).toggleClass("accordion__item--active");
        });
    });

    // $('.accordion__item').on('click', function () {
    // // $('.accordion__item').click(function () {
    //     $('.accordion__item').toggleClass('accordion__item--active');
    //     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
    // });

    // $(document).ready(function () {
    //     $(".accordion__item").click(function () {
    //         $(".accordion__item").toggleClass("accordion__item--active");
    //     });
    // });

    // $(document).ready(function () {
    //     $(".accordion__item").click(function () {
    //         $(this).children(".accordion__item").toggleClass("accordion__item--active");
    //     });
    // });
   

    // $('.accordion__item').on('click', function () {
    //     $(this).next().toggleClass('accordion__item--active');
    //     // $(this).toggleClass('questions__text--active');
    //     $(this)('.accordion__item').toggleClass('accordion__item--active');
    //     // $(this)('.accordion__btn').removeClass('active');
    //     // $(this)('.accordion__btn').add('active');
    //     // $('.accordion__btn').toggleClass('active');
    // });
});
    // $('.accordion__item').on('click', function () {
    //     // $(this).next().toggleClass('active');
    //     // $(this).toggleClass('questions__text--active');
    //     $(this)('.accordion__item').toggleClass('active');
    //     // $(this)('.accordion__btn').removeClass('active');
    //     // $(this)('.accordion__btn').add('active');
    //     // $('.accordion__btn').toggleClass('active');
    // });

    // $('.accordion__item').on('click', function () {
    //     // $(this).next().toggleClass('active');
    //     $(this).next().toggleClass('active');
    //     // $(this).toggleClass('questions__text--active');
    //     $(this)('.accordion__item').toggleClass('active');
    //     // $(this).next().toggleClass('active2');
    //     // $(this).toggleClass('questions__text--active');
    //     // $(this)('.accordion__wrapper').toggleClass('accordion__text--active');
    //     // $(this)('.accordion__btn').removeClass('active');
    //     // $(this)('.accordion__btn').add('active');
    //     // $('.accordion__btn').toggleClass('active');
    // });

    

    // $('.accordion__item').on('click', function () {
    //     $('.accordion__item').toggle('active4');
    //     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
    // });

    // $('.accordion__wrapper').on('click', function () {
    //     $('.accordion__wrapper').toggleClass('active');
    //     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
    // });

    // $('.accordion__item').on('click', function () {
        // $(this).next().slideToggle();
        // $(this).toggleClass('questions__text--active');
        // $(this)('.accordion__btn').removeClass('active');
        // $('.accordion__btn').toggle('active');
        // $(this)('.accordion__btn').add('active');
        // $('.accordion__btn').toggleClass('active');
        // ------------------------------
  
    //this is the button
    // var acc = document.getElementsByClassName("accordion__wrapper");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //     //when one of the buttons are clicked run this function
    //     acc[i].onclick = function () {
    //         //variables
    //         var panel = this.nextElementSibling;
    //         var coursePanel = document.getElementsByClassName("accordion__text");
    //         var courseAccordion = document.getElementsByClassName("accordion__wrapper");
    //         var courseAccordionActive = document.getElementsByClassName("accordion__wrapper .accordion__wrapper--active ");

    //         /*if pannel is already open - minimize*/
    //         if (panel.style.maxHeight) {
    //             //minifies current pannel if already open
    //             panel.style.maxHeight = null;
    //             //removes the 'active' class as toggle didnt work on browsers minus chrome
    //             this.classList.remove("active");
    //         } else { //pannel isnt open...
    //             //goes through the buttons and removes the 'active' css (+ and -)
    //             for (var ii = 0; ii < courseAccordionActive.length; ii++) {
    //                 courseAccordionActive[ii].classList.remove("active");
    //             }
    //             //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
    //             for (var iii = 0; iii < coursePanel.length; iii++) {
    //                 this.classList.remove("active");
    //                 coursePanel[iii].style.maxHeight = null;
    //             }
    //             //opens the specified pannel
    //             panel.style.maxHeight = panel.scrollHeight + "px";
    //             //adds the 'active' addition to the css.
    //             this.classList.add("active");
    //         }
    //     }//closing to the acc onclick function
    // }//closing to the for loop.
    

        // -------------------------
    // this is the button
        // -----------------------------
   
    // $(function () {

    //     var init = function () {
    //         var element = document.getElementsByClassName('accordeon__item');
    //         // Вешаем на все выбранные элементы событие
    //         for (var i = 0, elemLength = element.length; i < elemLength; i++) {
    //             element[i].addEventListener('click', toggleSlide, false);
    //         }
    //     };

    //     var toggleSlide = function (e) {
    //         removeClass();
    //         var elem = e.target;
    //         elem.classList.add('active');
    //     };

    //     var removeClass = function () {
    //         // Получаем список всех блоков у которых нужно удалить класс
    //         var elementRemovedClass = document.getElementsByClassName('accordeon__item'),
    //             elementLength = elementRemovedClass.length;

    //         // В цикле проходим по всем и удаляем класс
    //         for (var i = 0; i < elementLength; i++) {
    //             elementRemovedClass[i].classList.remove("accordeon__item");
    //         }
    //     };

    //     init();
    // })});

    // })();
// ----------------------------------
    // const accordionBtns = document.querySelectorAll(".accordion__item");
    // const text = document.querySelectorAll(".accordion__text");
    // accordionBtns.forEach((accordion) => {
    //     accordion.onclick = function () {
    //         this.classList.toggle(".accordion__text");

    //         let content = this.nextElementSibling;
    //         // console.log(content);

    //         if (content.style.maxHeight) {
    //             //this is if the accordion is open
    //             content.style.maxHeight = null;
    //         } else {
    //             //if the accordion is currently closed
    //             content.style.maxHeight = content.scrollHeight + "px";
    //             // console.log(content.style.maxHeight);
    //         }
    //     };
    // });
// })
// ------------------------------
        // let two = document.querySelectorAll('.accordion__item');

//         two.onclick = myClick;

//         function myClick() {
//             let two = document.querySelectorAll('.accordion__item').forEach(function (element) { //
//                 two.addEventListener('click', () => {
//                     // element.onclick = closeModal;
//                     // element.onclick = hide;
//                     element.classList.add('active');
//                     // удалил// this.children[0].classList.add('hide');
//                     // document.onkeydown = null; //отключает событие
//                     // two.onclick = myClick;
//                 })
//             });
//         }
//     });
// })

            // function myClick() {
            //     document.querySelectorAll('.accordion__item').forEach(function (element) { //
            //         // element.onclick = closeModal;
            //         // element.onclick = hide;
            //         element.classList.add('active');
            //         // удалил// this.children[0].classList.add('hide');
            //         // document.onkeydown = null; //отключает событие
            //         // two.onclick = myClick;
            //     })
            // }
            // two.onclick = myClick;

            // function hide() {
            //     let two = document.querySelectorAll('.accordion__item').forEach(function (element) {
            //         if (two.classList.contains('active')) {
            //             two.classList.remove('active');
            //         } else {
            //             document
            //                 .querySelectorAll('.accordion__btn')
            //                 .forEach((child) => child.classList.remove('active'))

            //             two.classList.toggle('active');
            //         }
            //     })

            // }

            // function closeModal() {
            //     element.classList.add('active');
            //     // document.onkeydown = null;
            //     // let modalid = this.dataset.Prototype; //получение дата атрибута
            //     // console.log(this.dataset.modal)

            //     // удалил//  document.querySelector(modalid).parentElement.classList.add('hide');
            //     // document.querySelectorAll('.accordion__item').forEach(function (element) { //
            //     //     element.onclick = closeModalWrap;
            //     //     element.classList.add('active');
            //     //     // удалил// this.children[0].classList.add('hide');
            //     //     document.onkeydown = null; //отключает событие
            //     // })
            //     // document.querySelector(item).classList.add('active');
            //     // const item = document.querySelectorAll('.accordion__item').forEach(function (element) {
            //     //     element.onclick = closeModal;

            //     //     // закрывает окно по классу
            //     // });
            //     // console.log(classList);
            //     // document.onkeydown = null;//отключает событие
            // }
            // -------------------------
            // $(document).ready(function () {
            //     alert("1");
            //     $('.accordion__btn').click(function () {
            //         const parent = $(this).parent();
            //         if (parent.hasClass('active')) {
            //             parent.removeClass('active');

            //         } else {
            //             $('.accordion__btn').removeClass('active')
            //             parent.addClass('active');
            //         }
            //     });
            //     alert("2");
            // });

            // document.querySelectorAll('.accordion__item').forEach((item) =>

            //     text.addEventListener('click', () => {
            //         const parent = text;
            //         // const parent = item.parentNode;

            //         if (parent.classList.contains('active')) {
            //             parent.classList.remove('active');
            //         } 
            //         else {
            //             document
            //                 .querySelectorAll('.accordion__btn')
            //                 .forEach((child) => child.classList.remove('active'))

            //             parent.classList.toggle('active');
            //         }
            //     })
            // )
            // let text = document.querySelector('.accordion__text');


            // let wrapper = document.querySelector('.accordion__wrapper');

            // // let btn = document.querySelectorAll('.accordion__btn').forEach((item) =>


            // document.querySelectorAll('accordion__wrapper').forEach((item) =>
            //     item.addEventListener('click', () => {
            //         const parent = text;
            //         // const parent = item.parentNode;

            //         if (parent.classList.contains('accordion__text--active')) {
            //             parent.classList.remove('accordion__text--active');
            //         } else {
            //             document
            //                 .querySelectorAll('accordion__text')
            //                 .forEach((child) => child.classList.remove('accordion__text--active'))

            //             parent.classList.toggle('accordion__text--active');
            //         }
            //     })
            // )



            // ------------------------
            // let btn = document.getElementsByClassName('.accordion__item');

            // function toogle(e) {
            //     var elems = item;
            //     console.log(item);
            //     for (var i = 0; i < elems.length; i += 1) {
            //         elems[i].childNodes[3].style.display = 'none';
            //     }
            //     e.childNodes[3].style.display = 'block';
            // }
            // const item = document.querySelector('.accordion__item').forEach(function (element) {
            //     element.onclick = toogle;
            //     // закрывает окно по классу
            // });
            // btn.onclick = toogle;
            // -------------------------------------
            // $('.accordion__item').on('click', function () {
            //     // $(this).next().remove('active');
            //     // $(this).toggleClass('questions__text--active');
            //     $(this).next()('.accordion__btn').add('.active');
            //     // $('.accordion__btn').toggleClass('active');
            // });
            // ---
            // ---
            // $('.accordion__item').on('click', function (e) {
            //     e.preventDefault();

            //     $('.accordion__btn').removeClass('active');
            //     $(this).addClass('active');

            //     // $('.rates-tabs__text').removeClass('rates-tabs__text--active');
            //     // $($(this).attr('href')).addClass('rates-tabs__text--active'); /*убирает добовляет класс*/
            // });


            // $('.accordion__item').removeClass('active');
            // $(this).addClass('active');

            // $('.accordion__item').on('click', function () {
            //     $('.accordion__btn').toggleClass('active');
            // });

            // this._el.addEventListener('click', (e) => {
            //     // получим элемент .accordion__header
            //     const elHeader = e.target.closest('.accordion__wrapper');
            //     // если такой элемент не найден, то прекращаем выполнение функции
            //     if (!elHeader) {
            //         return;
            //     }
            //     // если необходимо, чтобы всегда был открыт один элемент
            //     // if (!this._config.alwaysOpen) {
            //     //     // получим элемент с классом accordion__item_show и сохраним его в переменную elOpenItem
            //     //     const elOpenItem = this._el.querySelector('.accordion__item_show');
            //     //     // если такой элемент есть
            //     //     if (elOpenItem) {
            //     //         // и он не равен текущему, то переключим ему класс accordion__item_show
            //     //         elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
            //     //     }
            //     // }
            //     // переключим класс accordion__item_show элемента .accordion__header
            //     elHeader.parentElement.classList.toggle('accordion__item_show');
            // });

            // const item = document.querySelectorAll('.accordion__item');
            // const btn = document.querySelector('.accordion__btn');

            // -----------------
            // const item = document.querySelectorAll('.accordion__item').forEach(function (element) {
            //     element.onclick = toogle;
            //     // закрывает окно по классу
            // });

            // --------------------
            // const accordeonTwo = () => {

            //     const accordeonTwoParent = document.querySelector('#accordion-two'),

            //         accordeonPanelHeading = accordeonTwoParent.querySelectorAll('.panel-heading'),

            //         accordeonPanelContent = document.querySelector('.collapse');

            //     accordeonPanelHeading.forEach((elem) => {
            //         elem.addEventListener('click', (event) => {
            //             event.preventDefault();
            //             let target = event.target;

            //             if (target.closest('.panel-heading')) {
            //                 accordeonPanelContent.classList.toggle('in');
            //             }
            //         });
            //     });
            // };

            // accordeonTwo();

            /*вешаем обработчик события нажатия на элемент*/
            // $('.accordion__item').on('click', function () {
            //     /*записываем в переменную блок с контентом*/
            //     let thisContentBlock = $(this).parent().find('.accordion__btn');
            //     /*проверяем есть ли у блока с контентом класс active
            //       если есть то удаляем, если нет то добавляем */
            //     if (thisContentBlock.hasClass('active')) {
            //         thisContentBlock.removeClass('active')
            //     }
            //     else {
            //         thisContentBlock.addClass('active')
            //     }
            // })

            // item.onclick = selectDate;

            // var cells = document.getElementsByTagName('.accordion__item');
            // for (var i = 0; i < btn.length; i++) {
            //     btn[i].addEventListener('click', selectDate);
            // }
            // ---------------------
            // function selectDate() {
            //     // alert("Hello! I am an alert box!!");
            //     // const btn = document.querySelector('.accordion__btn');
            //     const btn = document.querySelectorAll('.accordion__btn').forEach(function (element) {
            //         // element.onclick = selectDate;
            //         // закрывает окно по классу
            //     });
            // }
            // -----------------------
            // let modalid = btn;
            // console.log(modalid);
            // alert("2");
            // document.querySelector(btn).classList.remove('hide');
            // alert("3");
            // console.log(dataset);
            // const btn = document.querySelectorAll('.accordion__btn').forEach(function (element) {
            //     element.onclick = selectDate;

            //     // закрывает окно по классу
            // });

            // this.dataset.modal;
            // console.log(dataset);
            // console.log(modalid);
            // document.querySelector(modalid).classList.add('active');
            // if (btn.classList.contains('active')) {
            //     btn.classList.remove('active');
            // } else {
            //     btn.classList.add('active');
            // }


            // var cells = document.getElementsByTagName('.accordion__item');

            // for (var i = 0; i < cells.length; i++) {
            //     cells[i].addEventListener('click', selectDate);
            // }
            // function selectDate() {
            //     btn.className += ' active';
            // }

            // function myClick() {
            //     if (btn.classList.add('active')); else (btn.classList.remove('active')); {

            // }

            // if (condition) {
            //     btn.classList.toggle('active');

            // }
            // btn.classList.remove('active');
            // }

            // var cells = document.getElementsByTagName('td');

            // for (var i = 0; i < cells.length; i++) {
            //     cells[i].addEventListener('click', selectDate);
            // }



            // document.querySelectorAll('.modal-show').forEach(function (element) {
            //     element.onclick = showModal;
            //     // открыват окно
            // }); //масив

            // document.querySelectorAll('.modal-close').forEach(function (element) {
            //     element.onclick = closeModal;

            //     // закрывает окно по классу
            // }); //масив



            // var elCollection = document.getElementsByClassName('el');
            // console.dir(elCollection);
            // var elNodes = document.querySelectorAll(".el");
            // console.dir(elNodes);
            // for (var i = 0; i < elCollection.length; i++) {
            //     var elem = elCollection[i];
            //     console.log(elem);
            //     elem.addEventListener("click", function () {
            //         this.classList.toggle("red");
            //     })
            // }
            // btn.addEventListener('click', (e) => {
            //     const isModal = e.target.closest('.accordion__wrapper'); /*если клик в любое место кроме .modal__inner то окно закрывается */
            //     if (!isModal) {
            //         btn.classList.remove('active');
            //     }
            //     /*добовляем класс*/
            // });

            // $('.accordion__item').on('click', function () {
            //     $('.accordion__btn').toggleClass('active');
            // });

            // $('.accordion__item').on('click', function () {
            //     $('.accordion__text').toggleClass('accordion__text--active');
       