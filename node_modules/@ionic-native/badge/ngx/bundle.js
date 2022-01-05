'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Badge = /** @class */ (function (_super) {
    tslib.__extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.clear = function () { return core.cordova(this, "clear", {}, arguments); };
    Badge.prototype.set = function (badgeNumber) { return core.cordova(this, "set", {}, arguments); };
    Badge.prototype.get = function () { return core.cordova(this, "get", {}, arguments); };
    Badge.prototype.increase = function (increaseBy) { return core.cordova(this, "increase", {}, arguments); };
    Badge.prototype.decrease = function (decreaseBy) { return core.cordova(this, "decrease", {}, arguments); };
    Badge.prototype.isSupported = function () { return core.cordova(this, "isSupported", {}, arguments); };
    Badge.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    Badge.prototype.requestPermission = function () { return core.cordova(this, "requestPermission", {}, arguments); };
    Badge.pluginName = "Badge";
    Badge.plugin = "cordova-plugin-badge";
    Badge.pluginRef = "cordova.plugins.notification.badge";
    Badge.repo = "https://github.com/katzer/cordova-plugin-badge";
    Badge.platforms = ["Android", "Browser", "iOS", "Windows"];
    Badge.decorators = [
        { type: core$1.Injectable }
    ];
    return Badge;
}(core.IonicNativePlugin));

exports.Badge = Badge;
