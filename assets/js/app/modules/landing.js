"use strict";
appMakeBeCool.gateway.addClass('Landing', function (properties, $, $window, $document) {
    //PRIVATE VARIABLES
    var _landing = this,
        // default
        _d = {

            headerBtn: '#headerTopBtn',
            headerMenu: '#headerTopMenu',
            inputPhone: 'input[name=phone]',
            licensGallery: '#licens',
            licensGalleryBtn: '#licensBtn',
            certificateGalleryBtn: '#certificateBtn',
            certificateGallery: '#certificate',
            form: '.form-wrap'

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
            licensGallery: null,
            licensGalleryBtn: null,
            certificateGalleryBtn: null,
            certificateGallery: null,
            form: null,


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
            _g.licensGallery = $(_p.licensGallery);
            _g.licensGalleryBtn = $(_p.licensGalleryBtn);
            _g.certificateGallery = $(_p.certificateGallery);
            _g.certificateGalleryBtn = $(_p.certificateGalleryBtn);
            _g.form = $(_p.form);

        },

        _setup = function () {
            _openHeaderMenu();
            _openModalForm();
            _clearForm();
            _scrollAnchor();
            _licensGalleryInit();
            _certificateGalleryInit();
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
        },

        _openModalForm = function () {
            $('.modal').magnificPopup({
                type: 'inline',
                closeOnBgClick: true,
                showCloseBtn: false
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
                top = top + 200;


                $('body,html').animate({scrollTop: top}, 1200);
            });

        },
        _licensGalleryInit = function () {


            _g.licensGalleryBtn.on('click', function (e) {
                e.preventDefault();
                _g.licensGallery.magnificPopup({

                    closeOnBgClick: true,
                    delegate: 'a', // the selector for gallery item
                    type: 'image',
                    overflowY: 'auto',
                    showCloseBtn: false,
                    gallery: {
                        enabled: true
                    }


                });
                _g.licensGallery.magnificPopup('open');

            });


        },
        _labelAnimation = function () {
            _g.form.each(function () {
                var $input = $(this).find('input'),
                    $textarea = $(this).find('textarea');


                $input.each(function () {
                    console.log($input);
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

        _certificateGalleryInit = function () {


            _g.certificateGalleryBtn.on('click', function (e) {
                e.preventDefault();
                _g.certificateGallery.magnificPopup({

                    closeOnBgClick: true,
                    delegate: 'a', // the selector for gallery item
                    type: 'image',
                    overflowY: 'auto',
                    fixedBgPos: 'auto',
                    showCloseBtn: false,
                    gallery: {
                        enabled: true
                    }


                });
                _g.certificateGallery.magnificPopup('open');

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