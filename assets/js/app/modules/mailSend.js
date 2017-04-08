"use strict";
appMakeBeCool.gateway.addClass('MailSend', function(properties, $, $window, $document) {
    //PRIVATE VARIABLES
    var _mailSend = this,
    // default
    _d = {
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

        // prop
        preloaded: false
    },

    _init = function() {
        appMakeBeCool.gateway.base.Class.apply(_mailSend, [_p]);
        if(!_g.preloaded) {
            return _mailSend.init();
        }
        _mailSend.globals.customCreate = function() {
            _config();
            _setup();
            _setBinds();
            _setCustomMethods();
        };
        _mailSend.create();
    },

    _config = function() {},

    _setup = function() {},

    _setBinds = function() {},

    _binds = function() {
        return {};
    },

    _triggers = function(){
        return {};
    },

    _setCustomMethods = function() {
        _mailSend.globals.customResurrect = function() {};
        _mailSend.globals.customDestroy = function() {};
    };

    _mailSend.addMethod('init', function() {
        _mailSend.bind($window, _mailSend.globals.classType+'_Init', function(e, data, el) {
            _g.preloaded = true;
            _init();
        });
    });

    _init();
});