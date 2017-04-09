"use strict";
appMakeBeCool.gateway.addClass('Landing', function (properties, $, $window, $document) {
    //PRIVATE VARIABLES
    var _landing = this,
        // default
        _d = {

            headerBtn: '#headerTopBtn',
            headerMenu: '#headerTopMenu',
            inputPhone: 'input[name=phone]',
            form: '.form-wrap',
            menuItem: '#menu li a',
            sliderFor: '.slider-for',
            sliderNav: '.slider-nav'

            // elements
            // prop
            // data
            // classes ans styles
        },
        // properties
        _p = $.extend(_d, properties),
        // global
        _g = {
            // elements
            headerBtn: null,
            headerMenu: null,
            inputPhone: null,
            form: null,
            menuItem: null,
            sliderFor: null,
            sliderNav: null,


            // prop
            preloaded: false
        },

        _init = function () {
            appMakeBeCool.gateway.base.Class.apply(_landing, [_p]);
            if (!_g.preloaded) {
                return _landing.init();
            }
            _landing.globals.customCreate = function () {
                _config();
                _setup();
                _setBinds();
                _setCustomMethods();
            };
            _landing.create();
        },

        _config = function () {
            _g.headerBtn = $(_p.headerBtn);
            _g.headerMenu = $(_p.headerMenu);
            _g.inputPhone = $(_p.inputPhone);
            _g.form = $(_p.form);
            _g.menuItem = $(_p.menuItem);
            _g.sliderFor = $(_p.sliderFor);
            _g.sliderNav = $(_p.sliderNav);

        },

        _setup = function () {
            _openHeaderMenu();
            _openModalForm();
            _clearForm();
            _scrollAnchor();
            _labelAnimation();
        },

        _setBinds = function () {
        },

        _binds = function () {
            return {};
        },

        _triggers = function () {
            return {};
        },

        _openHeaderMenu = function () {
            _g.headerBtn.on('click', function (e) {
                e.preventDefault();
                // $('#headerTopNav').toggleClass('active');
                _g.headerMenu.slideToggle(500);
            });
            if ($(window).width() < 768) {

                _g.menuItem.on('click', function () {
                    _g.headerMenu.slideUp(500);
                });
            }
        },

        _openModalForm = function () {
            $('.modal').magnificPopup({
                type: 'inline',
                showCloseBtn: true,
                closeOnBgClick: true,
                callbacks: {
                    open: function () {
                        _slider();
                    }
                }
            });
        },

        _slider = function () {

            _g.sliderFor.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                dots: false,
                asNavFor: '.slider-nav',
                infinite: false
            });
            _g.sliderNav.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                asNavFor: '.slider-for',
                dots: false,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: '0',
                vertical: true
            });


        },


        _clearForm = function () {
            $('.clear-form').on('click', function (e) {
                var $form = $(e.target).closest('form');
                $form.trigger('reset');
                e.preventDefault();

            });
        },
        _scrollAnchor = function () {

            $("#menu").on("click", "a", function (event) {
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top;
                top = top - 100;


                $('body,html').animate({scrollTop: top}, 1200);
            });

            $(".slide-down").on("click", function (event) {
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top;
                top = top - 100;


                $('body,html').animate({scrollTop: top}, 1200);
            });

        },

        _labelAnimation = function () {

            $('input[type=tel]').inputmask({"mask": "+7(999)-999-99-99", showMaskOnHover: false});
            _g.form.each(function () {
                var $input = $(this).find('input'),
                    $textarea = $(this).find('textarea');


                $input.each(function () {

                    $(this).on('change', function () {
                        var val = $(this).val();
                        if (val != '') {
                            $(this).addClass('active');
                        }
                        else {
                            $(this).removeClass('active');
                        }
                    });

                });

                $textarea.each(function () {
                    $(this).on('change', function () {
                        var val = $(this).val();
                        if (val != '') {
                            $(this).addClass('active');
                        }

                        else {
                            $(this).removeClass('active');
                        }
                    });

                });


            });
        },


        _setCustomMethods = function () {
            _landing.globals.customResurrect = function () {
            };
            _landing.globals.customDestroy = function () {
            };
        };

    _landing.addMethod('init', function () {
        _landing.bind($window, _landing.globals.classType + '_Init', function (e, data, el) {
            _g.preloaded = true;
            _init();
        });
    });

    _init();
});