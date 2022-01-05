'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var Push = /** @class */ (function (_super) {
    tslib.__extends(Push, _super);
    function Push() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Init push notifications
     * @param options {PushOptions}
     * @return {PushObject}
     */
    Push.prototype.init = function (options) {
        return new PushObject(options);
    };
    Push.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    Push.prototype.createChannel = function (channel) { return core.cordova(this, "createChannel", { "callbackOrder": "reverse" }, arguments); };
    Push.prototype.deleteChannel = function (id) { return core.cordova(this, "deleteChannel", { "callbackOrder": "reverse" }, arguments); };
    Push.prototype.listChannels = function () { return core.cordova(this, "listChannels", {}, arguments); };
    Push.pluginName = "Push";
    Push.plugin = "phonegap-plugin-push";
    Push.pluginRef = "PushNotification";
    Push.repo = "https://github.com/phonegap/phonegap-plugin-push";
    Push.install = "ionic cordova plugin add phonegap-plugin-push";
    Push.platforms = ["Android", "Browser", "iOS", "Windows"];
    Push.decorators = [
        { type: core$1.Injectable }
    ];
    return Push;
}(core.IonicNativePlugin));
var PushObject = /** @class */ (function () {
    function PushObject(options) {
        if (core.checkAvailability('PushNotification', 'init', 'PushNotification') === true) {
            if (typeof window !== 'undefined') {
                this._objectInstance = window.PushNotification.init(options);
            }
        }
    }
    PushObject.prototype.on = function (event) { return core.cordovaInstance(this, "on", { "observable": true, "clearFunction": "off", "clearWithArgs": true }, arguments); };
    PushObject.prototype.unregister = function () { return core.cordovaInstance(this, "unregister", {}, arguments); };
    PushObject.prototype.setApplicationIconBadgeNumber = function (count) { return core.cordovaInstance(this, "setApplicationIconBadgeNumber", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.getApplicationIconBadgeNumber = function () { return core.cordovaInstance(this, "getApplicationIconBadgeNumber", {}, arguments); };
    PushObject.prototype.finish = function (id) { return core.cordovaInstance(this, "finish", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.clearAllNotifications = function () { return core.cordovaInstance(this, "clearAllNotifications", {}, arguments); };
    PushObject.prototype.subscribe = function (topic) { return core.cordovaInstance(this, "subscribe", {}, arguments); };
    PushObject.prototype.unsubscribe = function (topic) { return core.cordovaInstance(this, "unsubscribe", {}, arguments); };
    PushObject.pluginName = "Push";
    PushObject.plugin = "phonegap-plugin-push";
    PushObject.pluginRef = "PushNotification";
    return PushObject;
}());

exports.Push = Push;
exports.PushObject = PushObject;
