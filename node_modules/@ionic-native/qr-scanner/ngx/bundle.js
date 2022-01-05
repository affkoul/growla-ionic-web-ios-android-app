'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

var QRScanner = /** @class */ (function (_super) {
    tslib.__extends(QRScanner, _super);
    function QRScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QRScanner.prototype.prepare = function () { return core.cordova(this, "prepare", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.scan = function () { return core.cordova(this, "scan", { "callbackStyle": "node", "observable": true, "clearFunction": "cancelScan" }, arguments); };
    QRScanner.prototype.show = function () { return core.cordova(this, "show", {}, arguments); };
    QRScanner.prototype.hide = function () { return core.cordova(this, "hide", {}, arguments); };
    QRScanner.prototype.enableLight = function () { return core.cordova(this, "enableLight", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.destroy = function () { return core.cordova(this, "destroy", {}, arguments); };
    QRScanner.prototype.disableLight = function () { return core.cordova(this, "disableLight", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.useFrontCamera = function () { return core.cordova(this, "useFrontCamera", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.useBackCamera = function () { return core.cordova(this, "useBackCamera", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.useCamera = function (camera) { return core.cordova(this, "useCamera", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.pausePreview = function () { return core.cordova(this, "pausePreview", {}, arguments); };
    QRScanner.prototype.resumePreview = function () { return core.cordova(this, "resumePreview", {}, arguments); };
    QRScanner.prototype.getStatus = function () { return core.cordova(this, "getStatus", {}, arguments); };
    QRScanner.prototype.openSettings = function () { return core.cordova(this, "openSettings", { "sync": true }, arguments); };
    QRScanner.pluginName = "QRScanner";
    QRScanner.plugin = "cordova-plugin-qrscanner";
    QRScanner.pluginRef = "QRScanner";
    QRScanner.repo = "https://github.com/bitpay/cordova-plugin-qrscanner";
    QRScanner.platforms = ["Android", "Browser", "iOS", "Windows"];
    QRScanner.decorators = [
        { type: core$1.Injectable }
    ];
    return QRScanner;
}(core.IonicNativePlugin));

exports.QRScanner = QRScanner;
