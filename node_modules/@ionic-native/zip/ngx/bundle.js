'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Zip = /** @class */ (function (_super) {
    tslib.__extends(Zip, _super);
    function Zip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zip.prototype.unzip = function (sourceZip, destUrl, onProgress) { return core.cordova(this, "unzip", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    Zip.pluginName = "Zip";
    Zip.plugin = "cordova-plugin-zip";
    Zip.pluginRef = "zip";
    Zip.repo = "https://github.com/MobileChromeApps/cordova-plugin-zip";
    Zip.platforms = ["Android", "iOS"];
    Zip.decorators = [
        { type: core$1.Injectable }
    ];
    return Zip;
}(core.IonicNativePlugin));

exports.Zip = Zip;
