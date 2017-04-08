"use strict";
appMakeBeCool.gateway.addClass('Landing', function (properties, $, $window, $document) {
    //PRIVATE VARIABLES
    var _landing = this,
        // default
        _d = {

            headerBtn: '#headerTopBtn',
            headerMenu: '#headerTopMenu',
            inputPhone: 'input[name=phone]'
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

        },

        _setup = function () {
            _openHeaderMenu();
            _openModalForm();
            _clearForm();

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
            $('#modal').magnificPopup({
                type: 'inline',
                mainClass: 'active',
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