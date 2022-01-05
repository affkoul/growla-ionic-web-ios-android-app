'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Clipboard = /** @class */ (function (_super) {
    tslib.__extends(Clipboard, _super);
    function Clipboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clipboard.prototype.copy = function (text) { return core.cordova(this, "copy", {}, arguments); };
    Clipboard.prototype.paste = function () { return core.cordova(this, "paste", {}, arguments); };
    Clipboard.prototype.clear = function () { return core.cordova(this, "clear", {}, arguments); };
    Clipboard.pluginName = "Clipboard";
    Clipboard.plugin = "cordova-clipboard";
    Clipboard.pluginRef = "cordova.plugins.clipboard";
    Clipboard.repo = "https://github.com/ihadeed/cordova-clipboard";
    Clipboard.platforms = ["Android", "iOS", "Windows Phone 8"];
    Clipboard.decorators = [
        { type: core$1.Injectable }
    ];
    return Clipboard;
}(core.IonicNativePlugin));

exports.Clipboard = Clipboard;
