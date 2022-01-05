'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Device = /** @class */ (function (_super) {
    tslib.__extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Device.prototype, "cordova", {
        get: function () { return core.cordovaPropertyGet(this, "cordova"); },
        set: function (value) { core.cordovaPropertySet(this, "cordova", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "model", {
        get: function () { return core.cordovaPropertyGet(this, "model"); },
        set: function (value) { core.cordovaPropertySet(this, "model", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "platform", {
        get: function () { return core.cordovaPropertyGet(this, "platform"); },
        set: function (value) { core.cordovaPropertySet(this, "platform", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "uuid", {
        get: function () { return core.cordovaPropertyGet(this, "uuid"); },
        set: function (value) { core.cordovaPropertySet(this, "uuid", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "version", {
        get: function () { return core.cordovaPropertyGet(this, "version"); },
        set: function (value) { core.cordovaPropertySet(this, "version", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "manufacturer", {
        get: function () { return core.cordovaPropertyGet(this, "manufacturer"); },
        set: function (value) { core.cordovaPropertySet(this, "manufacturer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "isVirtual", {
        get: function () { return core.cordovaPropertyGet(this, "isVirtual"); },
        set: function (value) { core.cordovaPropertySet(this, "isVirtual", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "serial", {
        get: function () { return core.cordovaPropertyGet(this, "serial"); },
        set: function (value) { core.cordovaPropertySet(this, "serial", value); },
        enumerable: false,
        configurable: true
    });
    Device.pluginName = "Device";
    Device.plugin = "cordova-plugin-device";
    Device.pluginRef = "device";
    Device.repo = "https://github.com/apache/cordova-plugin-device";
    Device.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    Device.decorators = [
        { type: core$1.Injectable }
    ];
    return Device;
}(core.IonicNativePlugin));

exports.Device = Device;
