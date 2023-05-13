
$(document).ready(function () {
    let name = $('.trainer-list__name');
    $(name).click(function () {
        $(this).toggleClass('hovered');
        let parent = $(this).parent();
        $(parent).toggleClass('slide');
    })
    $('.faq_item_title_inner').on('click', function () {
        $(this).parents('.faq_item').find('.faq_item_body').slideToggle(300);
        $(this).toggleClass('open');
        if ($(this).hasClass('show_all')) {
            if ($(this).hasClass('open')) {
                $(this).html('РЎРІРµСЂРЅСѓС‚СЊ РІСЃРµ');
                $('.faq_item_title_inner:not(.open)').trigger('click');
            } else {
                $(this).html('РЎРјРѕС‚СЂРµС‚СЊ РІСЃРµ');
                $('.faq_item_title_inner.open').trigger('click');
            }
        }
    });


    $('iframe[src*="youtube.com"]').attr({
        width: '',
        height: ''
    }).parent().addClass('video-container');
    var suitable = $('.suitable-list__item');
    suitable.on('click', function () {
        $(this).toggleClass('suitable-list__item--is-active');
    });
    $('.schedule__tr').each(function (index, el) {
        var cell = $(el).find('schedule__td').each(function (index, el) { });
        //console.log(cell, index);
    });
    $('.js-telegram-form').submit(function (event) {
        event.preventDefault();
        var name = $('.js-telegram-input--name').val();
        var phone = $('.js-telegram-input--phone').val();
        var message = 'вњ… *Р‘РµР·РєРѕС€С‚РѕРІРЅРµ С‚СЂРµРЅСѓРІР°РЅРЅСЏ:*\n\n------------------------------------\n\nрџ‘¤ *Р†РјСЏ:* ' + name + '\n\nрџ“ћ *РўРµР»РµС„РѕРЅ:* ' + phone;
        $.ajax({
            url: 'https://api.telegram.org/bot534475650:AAFj9ZKlaevaquw8x6bjFVPNQT5TSBe0a7Y/sendMessage',
            type: 'GET',
            data: {
                chat_id: '-1001327445459',
                text: message,
                parse_mode: 'Markdown'
            },
        })
            .done(function () {
                $.fancybox.open({
                    src: '.js-telegram-succes',
                    type: 'inline',
                    opts: {
                        afterShow: function (instance, current) {
                            setTimeout(function () {
                                $.fancybox.close();
                                $('.js-telegram-form').trigger('reset');
                            }, 2000)
                        }
                    }
                });
            })
            .fail(function () {
                console.log("error");
            })
    });
    $('.popup__form').on('submit', function (event) {
        event.preventDefault();
        var name = $(this).find('input[name="name"]').val();
        var phone = $(this).find('input[name="phone"]').val();
        var test = $(this).find('input[name="test"]').val();
        var message = 'вњ… *РќРѕРІР° Р·Р°СЏРІРєР°:*\n\n------------------------------------\n\n*Р“СЂСѓРїР°:* ' + test + '\n\nрџ‘¤ *Р†РјСЏ:* ' + name + '\n\nрџ“ћ *РўРµР»РµС„РѕРЅ:* ' + phone;
        $.ajax({
            url: 'https://api.telegram.org/bot534475650:AAFj9ZKlaevaquw8x6bjFVPNQT5TSBe0a7Y/sendMessage',
            type: 'GET',
            data: {
                chat_id: '-1001327445459',
                text: message,
                parse_mode: 'Markdown'
            },
        })
            .done(function () {
                $.fancybox.open({
                    src: '.js-telegram-succes',
                    type: 'inline',
                    opts: {
                        afterShow: function (instance, current) {
                            setTimeout(function () {
                                $.fancybox.close();
                                $('.js-telegram-form').trigger('reset');
                            }, 2000)
                        }
                    }
                });
            })
            .fail(function () {
                console.log("error");
            })
    });

    $('.trainer-list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        autoplay: false,
        waitForAnimate: false,
        prevArrow: '<button type="button" class="slick-prev slick-prev--top"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next--top"></button>',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
    $('.gallery-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        waitForAnimate: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.gallery-thumbs-list'
    });
    $('.gallery-thumbs-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.gallery-list',
        dots: false,
        centerMode: true,
        arrows: false,
        centerPadding: '0px',
        focusOnSelect: true,
        infinite: true,
        waitForAnimate: true,
        draggable: false
    });
    $('.news-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [{
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
    $('.bg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        draggable: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 10000,
        lazyLoad: 'ondemand',
        fade: true,
        cssEase: 'linear'
    });

    function day() {
        var date = (new Date()).getDay();
        if (date != 0) {
            return date;
        } else {
            return 1;
        }
    }

    switchCurDay(day());
    $('.table__day').on('click', function () {
        if (!$(this).hasClass('table__day--is-active')) {
            var curDay = $(this).index();
            switchCurDay(curDay);
        }
        $('.table__day').toggleClass('table__day--is-expand');
    });
    function switchCurDay(clickday) {
        $('.table__day')
            .removeClass('table__day--is-active')
            .filter(function (index) {
                return $(this).index() == clickday;
            })
            .addClass('table__day--is-active');
        $('.table__item')
            .removeClass('table__item--is-active')
            .filter(function (index) {
                return $(this).index() == clickday;
            })
            .addClass('table__item--is-active');
        $('.table__row').removeClass('table__row--is-empty');

        $('.table__item--is-active').each(function () {
            if ($(this).is(':empty')) {
                $(this).parent().addClass('table__row--is-empty');
            }
        });
    }

    $('.table__link').fancybox({
        hash: null,
        defaultType: 'inline',
        gutter: 10
    });
    //$('.category-news__image img').fancybox({});
    $(document).click(function (event) {
        if ($(event.target).closest(".hamburger").length) {
            return;
        }
        $('.js-overlay').stop();
        $('.js-overlay').fadeOut('slow', 'linear');
        $('.hamburger').removeClass('is-active');
        $('.nav').removeClass('active');

        event.stopPropagation();
    });

    $('.nav__item').on('click', function (event) {
        //event.preventDefault();
        var id = $(this).attr('href');
        var newID = id.replace('/', '');
        var top = $(newID).offset().top;
        if ($('.nav-controls').hasClass('fixed')) {
            top = top - 50;
        }
        $('body,html').stop();
        $('body,html').animate({ scrollTop: top }, 1000);
    })

    $('.hamburger').on('click', function () {
        $('.hamburger').toggleClass('is-active');
        $('.nav').toggleClass('active');
        $('.js-overlay').stop();
        $('.js-overlay').fadeToggle('slow', 'linear');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 161) {
            $('.nav-controls').addClass('fixed');
        } else {
            $('.nav-controls').removeClass('fixed');
        }
    });

    var trainerList = {
        'olexyuk': {
            'name': 'Р›СЋРґРјРёР»Р° РћР»РµРєСЃСЋРє',
            'photo': '//pantera-trx.com/wp-content/themes/pantera/img/trainer-1.jpg'
        },
        'potiha': {
            'name': 'РћР»РµРєСЃР°РЅРґСЂР° РџРѕС‚С–С…Р°',
            'photo': '//pantera-trx.com/wp-content/themes/pantera/img/potiha_trener.jpg'
        },
        'bey': {
            'name': 'РҐСЂРёСЃС‚РёРЅР° Р‘РµР№',
            'photo': '//pantera-trx.com/wp-content/themes/pantera/img/trainer-2.jpg'
        },
        'scherbina': {
            'name': 'РњР°СЂРёРЅР° Р©РµСЂР±РёРЅР°',
            'photo': '//pantera-trx.com/wp-content/themes/pantera/img/scherbina.jpg'
        },
        'parpura': {
            'name': 'РќР°С‚Р°Р»С–СЏ РџР°СЂРїСѓСЂР°',
            'photo': '//pantera-trx.com/wp-content/themes/pantera/img/parpura_trainer.jpg'
        },
        'belovol': {
            'name': 'РўРµС‚СЏРЅР° Р‘С”Р»РѕРІРѕР»',
            'photo': '//pantera-trx.com/wp-content/themes/pantera/img/belovol_trainer.jpg'
        }
    };
    var trainingList = {
        'good_morning': {
            'title': 'Good Morning',
            'descr': 'С†Рµ С„СѓРЅРєС†С–РѕРЅР°Р»СЊРЅРµ С‚СЂРµРЅСѓРІР°РЅРЅСЏ Р· РµР»РµРјРµРЅС‚Р°РјРё СЃСѓРіР»РѕР±РЅРѕС— РіС–РјРЅР°СЃС‚РёРєРё С‚Р° СЃС‚СЂРµР№С‡РёРЅРіСѓ, РїРѕРєР»РёРєР°РЅРµ РјвЂ™СЏРєРѕ С‚Р° РµС„РµРєС‚РёРІРЅРѕ СЂРѕР·Р±СѓРґРёС‚Рё РІР°С€Рµ С‚С–Р»Рѕ Р·СЂР°РЅРєСѓ.'
        },
        'trx_strong': {
            'title': 'TRX-Strong',
            'descr': 'С†Рµ РІРёСЃРѕРєРѕ С–РЅС‚РµРЅСЃРёРІРЅРµ С„СѓРЅРєС†С–РѕРЅР°Р»СЊРЅРµ С‚СЂРµРЅСѓРІР°РЅРЅСЏ  РґР»СЏ Р»СЋРґРµР№ Р· СЃРµСЂРµРґРЅС–Рј С‚Р° РІРёСЃРѕРєРёРј СЂС–РІРЅРµРј С„С–Р·РёС‡РЅРѕС— РїС–РґРіРѕС‚РѕРІРєРё.'
        },
        'tabata': {
            'title': 'Tabata',
            'descr': 'С†Рµ РѕРґРёРЅ Р· РЅР°Р№РµС„РµРєС‚РёРІРЅС–С€РёС… СЃРїРѕСЃРѕР±С–РІ С–РЅС‚РµСЂРІР°Р»СЊРЅРѕРіРѕ С‚СЂРµРЅСѓРІР°РЅРЅСЏ. Р¦Рµ С‚СЂРµРЅСѓРІР°РЅРЅСЏ Р· РґРµРєС–Р»СЊРєРѕРјР° С–РЅС‚РµСЂРІР°Р»Р°РјРё РїРѕ 20 С– 10 СЃРµРєСѓРЅРґ. РЎРїРѕС‡Р°С‚РєСѓ 20 СЃРµРєСѓРЅРґ РјР°РєСЃРёРјР°Р»СЊРЅРѕ С–РЅС‚РµРЅСЃРёРІРЅРѕС— СЂРѕР±РѕС‚Рё С– 10 СЃРµРєСѓРЅРґ РІС–РґРїРѕС‡РёРЅРєСѓ. РўР°РєС– С†РёРєР»Рё РїРѕРІС‚РѕСЂСЋСЋС‚СЊСЃСЏ 8 СЂР°Р·С–РІ РїРѕСЃРїС–Р»СЊ С– СЃРєР»Р°РґР°СЋС‚СЊ РІ Р·Р°РіР°Р»СЊРЅС–Р№ СЃСѓРјС– 4 С…РІРёР»РёРЅРё.'
        },
        'trx_functional': {
            'title': 'TRX-Functional',
            'descr': 'С†Рµ РІРёСЃРѕРєРѕ С–РЅС‚РµРЅСЃРёРІРЅРµ С„СѓРЅРєС†С–РѕРЅР°Р»СЊРЅРµ С‚СЂРµРЅСѓРІР°РЅРЅСЏ РґР»СЏ Р»СЋРґРµР№ Р· СЃРµСЂРµРґРЅС–Рј С‚Р° РІРёСЃРѕРєРёРј СЂС–РІРЅРµРј С„С–Р·РёС‡РЅРѕС— РїС–РґРіРѕС‚РѕРІРєРё Р· СЂС–Р·РЅРёРј С„СѓРЅРєС†С–РѕРЅР°Р»СЊРЅРёРј РѕР±Р»Р°РґРЅР°РЅРЅСЏРј. Р’РѕРЅРѕ СЂРѕР·РІРёРЅРµ С„С–Р·РёС‡РЅС– СЏРєРѕСЃС‚С– РІ 3-D С„РѕСЂРјР°С‚С–, РїСЂРѕРєР°С‡Р°С” РєРѕРѕСЂРґРёРЅР°С†С–СЋ.'
        },
        'stretching': {
            'title': 'Stretching',
            'descr': 'С†Рµ РІРёРґ С„С–С‚РЅРµСЃСѓ, СЏРєРёР№ РїСЂРµРґСЃС‚Р°РІР»СЏС” СЃРѕР±РѕСЋ РєРѕРјРїР»РµРєСЃ РІРїСЂР°РІ РЅР° СЂРѕР·С‚СЏРіСѓРІР°РЅРЅСЏ.'
        },
        'trx_start': {
            'title': 'TRX-Start',
            'descr': 'С†Рµ С‚СЂРµРЅСѓРІР°РЅРЅСЏ РґР»СЏ Р»СЋРґРµР№, С‰Рѕ РІРїРµСЂС€Рµ РїРѕР·РЅР°Р№РѕРјРёР»РёСЃСЊ Р· С‚СЂРµРЅР°Р¶РµСЂРѕРј TRX. РќР° Р·Р°РЅСЏС‚С‚С– РІРµР»РёРєР° СѓРІР°РіР° РїСЂРёРґС–Р»СЏС”С‚СЊСЃСЏ С‚РµС…РЅС–С†С– РІРёРєРѕРЅР°РЅРЅСЏ Р±Р°Р·РѕРІРёС… РІРїСЂР°РІ. Р”Р»СЏ Р»СЋРґРµР№ РІСЃС–С… СЂС–РІРЅС–РІ РїС–РґРіРѕС‚РѕРІРєРё.'
        },
        'aerobica': {
            'title': 'Aerobica',
            'descr': 'С†Рµ Р°РµСЂРѕР±РЅРµ С‚СЂРµРЅСѓРІР°РЅРЅСЏ РІ С‚Р°РєС‚ РјСѓР·РёРєРё РґР»СЏ РІСЃС–С… СЂС–РІРЅС–РІ РїС–РґРіРѕС‚РѕРІРєРё Р±РµР· РІРёРєРѕСЂРёСЃС‚Р°РЅРЅСЏ С‚РµС…-РѕР±Р»Р°РґРЅР°РЅРЅСЏ. Р§СѓРґРѕРІРѕ С‚СЂРµРЅСѓС” СЃРµСЂС†РµРІРѕСЃСѓРґРёРЅРЅСѓ СЃРёСЃС‚РµРјСѓ С– РїРѕР·Р±Р°РІР»СЏС” Р·Р°Р№РІРёС… РєР°Р»РѕСЂС–Р№.'
        },
        'strong_body': {
            'title': 'Strong body',
            'descr': 'С†Рµ Р°РµСЂРѕР±РЅРѕ-СЃРёР»РѕРІРµ С‚СЂРµРЅСѓРІР°РЅРЅСЏ РЅР° РІСЃС– РіСЂСѓРїРё РјСЏР·С–РІ. РџС–РґС…РѕРґРёС‚СЊ Р· СЃРµСЂРµРґРЅС–Рј С‚Р° РІРёСЃРѕРєРёРј СЂС–РІРЅРµРј С„С–Р·РёС‡РЅРѕС— РїС–РґРіРѕС‚РѕРІРєРё.'
        },
        'super_popa': {
            'title': 'CСѓРїРµСЂ РїРѕРїР°',
            'descr': 'С†Рµ Р°РµСЂРѕР±РЅРµ-СЃРёР»РѕРІРµ С‚СЂРµРЅСѓРІР°РЅРЅСЏ, СЏРєРµ РЅР°РїСЂР°РІР»РµРЅРµ РЅР° РјР°РєСЃРёРјР°Р»СЊРЅРµ РїСЂРёРїСЂР°С†СЋРІР°РЅРЅСЏ РјСЏР·С–РІ СЃС–РґРЅРёС†СЊ С‚Р° СЃС‚РµРіРѕРЅ. РџС–РґС…РѕРґРёС‚СЊ РґР»СЏ Р»СЋРґРµР№ Р· СЃРµСЂРµРґРЅС–Рј С‚Р° РІРёСЃРѕРєРёРј СЂС–РІРЅРµРј С„С–Р·РёС‡РЅРѕС— РїС–РґРіРѕС‚РѕРІРєРё.'
        },
        'yoga': {
            'title': 'Yoga',
            'descr': 'РЇРєС‰Рѕ Р’Рё С…РѕС‡РµС‚Рµ РІС–РґРїРѕС‡РёС‚Рё РІС–Рґ С‰РѕРґРµРЅРЅРѕС— РјРµС‚СѓС€РЅС–, Р·СѓРїРёРЅРёС‚РёСЃСЊ, С– РІС–РґС‡СѓС‚Рё Р¶РёС‚С‚СЏ СЏРє РІРѕРЅРѕ С”, РїСЂРёСЃР»СѓС…Р°С‚РёСЃСЊ РґРѕ СЃРІРѕРіРѕ С‚С–Р»Р° С‚Р° РІС–РґС‡СѓС‚С‚С–РІ, Р°Р±Рѕ РїРѕРїСЂР°С†СЋРІР°С‚Рё Р·С– СЃРІРѕС”СЋ СЂРѕР·С‚СЏР¶РєРѕСЋ, С‡Рё РїСЂРѕР±Р»РµРјР°РјРё Р· РѕСЃР°РЅРєРѕСЋ, С‚РѕРґС– Р№РѕРіР° СЃР°РјРµ РґР»СЏ Р’Р°СЃ.'
        },
        'easy_fitness': {
            'title': 'Easy fitness',
            'descr': 'С†Рµ С‚СЂРµРЅСѓРІР°РЅРЅСЏ РґР»СЏ Р»СЋРґРµР№ СЏРєРёРј РЅРµ СЂРµРєРѕРјРµРЅРґРѕРІР°РЅС– РІРµР»РёРєС– РЅР°РІР°РЅС‚Р°Р¶РµРЅРЅСЏ (Р»СЋРґРµР№ Р· С‚СЂР°РІРјР°РјРё, РЅР°РґРјС–СЂРЅРѕСЋ РІР°РіРѕСЋ, СЃС‚Р°СЂС€РѕРіРѕ РІС–РєСѓ).'
        },
        'trx_teens': {
            'title': 'TRX-Teens',
            'descr': 'TRX-С‚СЂРµРЅСѓРІР°РЅРЅСЏ РґР»СЏ РґС–С‚РµР№ РІС–РєРѕРј РІС–Рґ 9 РґРѕ 14 СЂРѕРєС–РІ. Р—Р°РЅСЏС‚С‚СЏ РјР°СЋС‚СЊ РїРѕР·РёС‚РёРІРЅРёР№ РІРїР»РёРІ РЅР° С„С–Р·РёС‡РЅРёР№ СЂРѕР·РІРёС‚РѕРє РґС–С‚РµР№, Р° С‚Р°РєРѕР¶ СЂРµРєРѕРјРµРЅРґРѕРІР°РЅС– РґР»СЏ РєРѕСЂРµРєС†С–С— РїРѕСЃС‚Р°РІРё.'
        }
    };
    $('.table__item_delete').on('click', function (event) {
        alert('asdasdasdsad');
        var trainerAttr = $(this).attr('data-trainer');
        var trainingAttr = $(this).attr('data-training');

        if (typeof trainerAttr !== typeof undefined && trainerAttr !== false && typeof trainingAttr !== typeof undefined && trainingAttr !== false) {
            var popup = $('#test-popup');
            popup.find('.popup-trainer__name').text(trainerList[trainerAttr]['name']);
            popup.find('.popup__title').text(trainingList[trainingAttr]['title']);
            popup.find('.popup__text').text(trainingList[trainingAttr]['descr']);
            popup.find('.popup-trainer').css('background-image', 'url(' + trainerList[trainerAttr]['photo'] + ')');

            $.fancybox.open({
                src: '#test-popup',
                type: 'inline',
                opts: {
                    hash: null,
                    defaultType: 'inline',
                    gutter: 0
                }
            });
        }
    });
});
function initMap() {
    var coordinates = { lat: 50.252645, lng: 28.662931 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        gestureHandling: 'cooperative',
        zoom: 17,
        styles:
            [
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "fill": "#f1f1f1"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "color": "#c3baba"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.bus",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]
    });
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'TRX - Pantera',
        icon: 'http://pantera-trx.com/wp-content/themes/pantera/img/marker.svg',
        animation: google.maps.Animation.BOUNCE
    });
}