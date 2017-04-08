"use strict";
appMakeBeCool.gateway.addClass('ThemeMode', function (properties, $, $window, $document) {
    //PRIVATE VARIABLES
    var _themeMode = this,
        _defaults = {
            // classes ans styles
            classMode: 'theme-mode'
        },
        _properties = $.extend(_defaults, properties),
        _globals = {
            siteObj: null,
            preloaded: false
        },

        //PRIVATE METHODS
        _init = function () {
            appMakeBeCool.gateway.classes.SiteMode.apply(_themeMode, [_properties])
            if (!_globals.preloaded) {
                return _themeMode.init();
            }
            _config();
            _extendClasses();
            _instantiateClasses();
            _setup();
            _setBinds();
            _setCustomMethods();
            _themeMode.trigger(_themeMode.globals.classType + '_Complete');
        },

        _config = function () {
            _globals.siteObj = _themeMode.getSiteObj();
        },

        _extendClasses = function () {
            _globals.siteObj.utils.extend(_globals.siteObj.classes.FormValidate, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.BgImages, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.Landing, _globals.siteObj.base.Class);
            _globals.siteObj.utils.extend(_globals.siteObj.classes.MailSend, _globals.siteObj.base.Class);
        },

        _instantiateClasses = function () {
            _globals.siteObj.createClassInstance('formValidate', _globals.siteObj.classes.FormValidate, {classId: 'FormValidate'});
            _globals.siteObj.createClassInstance('bgImages', _globals.siteObj.classes.BgImages, {classId: 'BgImages'});
            _globals.siteObj.createClassInstance('Landing', _globals.siteObj.classes.Landing, {classId: 'Landing'});
            _globals.siteObj.createClassInstance('MailSend', _globals.siteObj.classes.MailSend, {classId: 'MailSend'});
        },

        _setup = function () {
            $('body').addClass(_properties.classMode);
        },

        _setBinds = function () {
            _binds().setCompleteBind();
//        _binds().setImage_CompleteBind();
        },

        _binds = function () {
            return {
                setCompleteBind: function () {
                    _themeMode.bind($window, _themeMode.globals.classType + '_Complete', function (e, data) {
                        _themeMode.trigger('FormValidate_Init', data);
                        _themeMode.trigger('BgImages_Init', data);
                        _themeMode.trigger('Landing_Init', data);
                        _themeMode.trigger('MailSend_Init', data);
                        AOS.init();
                    });
                }
            }
        },

        _setCustomMethods = function () {
            _themeMode.globals.customResurrect = function () {
            };
            _themeMode.globals.customDestroy = function () {
            };
        };

    //PUBLIC METHODS
    _themeMode.addMethod('init', function () {
        _themeMode.bind($window, 'siteConfigComplete', function () {
            _globals.preloaded = true;
            _init();
        });
    });

    //GO!
    _init();
});
