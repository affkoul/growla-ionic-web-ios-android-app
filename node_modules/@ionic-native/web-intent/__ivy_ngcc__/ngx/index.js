import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
var WebIntent = /** @class */ (function (_super) {
    __extends(WebIntent, _super);
    function WebIntent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebIntent.prototype.startActivity = function (options) { return cordova(this, "startActivity", {}, arguments); };
    WebIntent.prototype.startActivityForResult = function (options) { return cordova(this, "startActivityForResult", {}, arguments); };
    WebIntent.prototype.hasExtra = function (extra) { return cordova(this, "hasExtra", {}, arguments); };
    WebIntent.prototype.getExtra = function (extra) { return cordova(this, "getExtra", {}, arguments); };
    WebIntent.prototype.getUri = function () { return cordova(this, "getUri", {}, arguments); };
    WebIntent.prototype.onIntent = function () { return cordova(this, "onIntent", { "observable": true }, arguments); };
    WebIntent.prototype.sendBroadcast = function (options) { return cordova(this, "sendBroadcast", {}, arguments); };
    WebIntent.prototype.startService = function (options) { return cordova(this, "startService", {}, arguments); };
    WebIntent.prototype.registerBroadcastReceiver = function (filters) { return cordova(this, "registerBroadcastReceiver", { "observable": true }, arguments); };
    WebIntent.prototype.unregisterBroadcastReceiver = function () { return cordova(this, "unregisterBroadcastReceiver", { "sync": true }, arguments); };
    WebIntent.prototype.onActivityResult = function () { return cordova(this, "onActivityResult", { "sync": true }, arguments); };
    WebIntent.prototype.getIntent = function () { return cordova(this, "getIntent", {}, arguments); };
    WebIntent.prototype.sendResult = function (_a) {
        var _b = _a.extras;
        return cordova(this, "sendResult", {}, arguments);
    };
    Object.defineProperty(WebIntent.prototype, "ACTION_SEND", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SEND"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SEND", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_VIEW", {
        get: function () { return cordovaPropertyGet(this, "ACTION_VIEW"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_VIEW", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_TEXT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_TEXT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_TEXT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_SUBJECT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_SUBJECT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_SUBJECT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_STREAM", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_STREAM"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_STREAM", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_EMAIL", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_EMAIL"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_EMAIL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_CALL", {
        get: function () { return cordovaPropertyGet(this, "ACTION_CALL"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_CALL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_SENDTO", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SENDTO"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SENDTO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_GET_CONTENT", {
        get: function () { return cordovaPropertyGet(this, "ACTION_GET_CONTENT"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_GET_CONTENT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_PICK", {
        get: function () { return cordovaPropertyGet(this, "ACTION_PICK"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_PICK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_INSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_INSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_INSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_UNINSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_UNINSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_UNINSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    WebIntent.pluginName = "WebIntent";
    WebIntent.plugin = "com-darryncampbell-cordova-plugin-intent";
    WebIntent.pluginRef = "plugins.intentShim";
    WebIntent.repo = "https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent";
    WebIntent.platforms = ["Android"];
WebIntent.ɵfac = function WebIntent_Factory(t) { return ɵWebIntent_BaseFactory(t || WebIntent); };
WebIntent.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: WebIntent, factory: function (t) { return WebIntent.ɵfac(t); } });
var ɵWebIntent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(WebIntent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(WebIntent, [{
        type: Injectable
    }], null, null); })();
    return WebIntent;
}(IonicNativePlugin));
export { WebIntent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvd2ViLWludGVudC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUNsQztBQUdDLElBbUU4Qiw2QkFBaUI7QUFBQztBQUU5QjtBQUlaO0FBQU0sSUFxRlgsaUNBQWEsYUFBQyxPQUFzQjtBQUtsQixJQUtsQiwwQ0FBc0IsYUFBQyxPQUFzQjtBQUtsQixJQUszQiw0QkFBUSxhQUFDLEtBQWE7QUFLVCxJQUtiLDRCQUFRLGFBQUMsS0FBYTtBQUtULElBSWIsMEJBQU07QUFLYyxJQU1wQiw0QkFBUTtBQUsrQixJQUt2QyxpQ0FBYSxhQUFDLE9BQXNCO0FBS2xCLElBS2xCLGdDQUFZLGFBQUMsT0FBc0I7QUFLbEIsSUFPakIsNkNBQXlCLGFBQUMsT0FBeUM7QUFPaEUsSUFDSCwrQ0FBMkI7QUFTckIsSUFITixvQ0FBZ0I7QUFNTSxJQUF0Qiw2QkFBUztBQUtjLElBS3ZCLDhCQUFVLGFBQUMsRUFBYztBQUFJLFlBQWhCLGNBQVU7QUFBRTtBQUlKO0FBQU8sMEJBek01QixrQ0FBVztBQUFJO0FBTWhCO0FBSWdDO0FBRTlCO0FBRUE7QUFBUSwwQkFQVCxrQ0FBVztBQUFJO0FBTWY7QUFJaUM7QUFFOUI7QUFFQTtBQUFRLDBCQVBYLGlDQUFVO0FBQUk7QUFNZjtBQUk2QjtBQUU5QjtBQUVBO0FBQVEsMEJBUE4sb0NBQWE7QUFBSTtBQU1mO0FBS0o7QUFFQztBQUNNO0FBQVEsMEJBUGIsbUNBQVk7QUFBSTtBQU1mO0FBSWlDO0FBRS9CO0FBRUE7QUFBUSwwQkFQWCxrQ0FBVztBQUFJO0FBTWhCO0FBSWdDO0FBRS9CO0FBRUE7QUFBUSwwQkFQUixrQ0FBVztBQUFJO0FBTWhCO0FBSThCO0FBRS9CO0FBRUE7QUFBUSwwQkFQTixvQ0FBYTtBQUFJO0FBTWhCO0FBSTJCO0FBQ1g7QUFFQztBQUNiLDBCQVBMLHlDQUFrQjtBQUFJO0FBTWhCO0FBS0M7QUFFQztBQUNNO0FBQVEsMEJBUHRCLGtDQUFXO0FBQUk7QUFNaEI7QUFJcUI7QUFDWDtBQUVDO0FBQVEsMEJBTmxCLDZDQUFzQjtBQUFJO0FBTWhCO0FBS0Y7QUFDVDtBQUEyQjtBQUUzQiwwQkFQQywrQ0FBd0I7QUFBSTtBQUtwQjtBQUlSO0FBSUk7QUFBMkI7QUFBUTtBQUM1QjtBQUdKO0FBQ21DO0FBS087NkNBM0dsRCxVQUFVOzs7OzswQkFDTDtBQUFDLG9CQXpFUDtBQUFFLEVBeUU2QixpQkFBaUI7QUFDL0MsU0FEWSxTQUFTO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEludGVudENsaXBJdGVtIHtcbiAgdXJpOiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGV4dGVuc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnQge1xuICBhY3Rpb246IHN0cmluZztcbiAgY2xpcEl0ZW1zOiBJbnRlbnRDbGlwSXRlbVtdO1xuICBjb21wb25lbnQ6IHN0cmluZztcbiAgZXh0cmFzOiBvYmplY3Q7XG4gIGZsYWdzOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyT3B0aW9ucyB7XG4gIGZpbHRlckFjdGlvbnM/OiBzdHJpbmdbXTtcbiAgZmlsdGVyQ2F0ZWdvcmllcz86IHN0cmluZ1tdO1xuICBmaWx0ZXJEYXRhU2NoZW1lcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVudE9wdGlvbnMge1xuICByZXF1ZXN0Q29kZT86IG51bWJlcjtcbiAgdHlwZT86IHN0cmluZztcbiAgcGFja2FnZT86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICBleHRyYXM/OiBvYmplY3Q7XG4gIGFjdGlvbj86IHN0cmluZztcbiAgY29tcG9uZW50Pzoge1xuICAgIHBhY2thZ2U6IHN0cmluZztcbiAgICBjbGFzczogc3RyaW5nO1xuICB9O1xuICBmbGFncz86IG51bWJlcltdO1xufVxuXG4vKipcbiAqIEBuYW1lIFdlYiBJbnRlbnRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBQbHVnaW4gcHJvdmlkZXMgYSBnZW5lcmFsIHB1cnBvc2Ugc2hpbSBsYXllciBmb3IgdGhlIEFuZHJvaWQgaW50ZW50IG1lY2hhbmlzbSwgZXhwb3NpbmcgdmFyaW91cyB3YXlzIHRvIGhhbmRsZSBzZW5kaW5nIGFuZCByZWNlaXZpbmcgaW50ZW50cy5cbiAqIEB1c2FnZVxuICogRm9yIHVzYWdlIGluZm9ybWF0aW9uIHBsZWFzZSByZWZlciB0byB0aGUgcGx1Z2luJ3MgR2l0aHViIHJlcG8uXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgV2ViSW50ZW50IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS93ZWItaW50ZW50L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJJbnRlbnQ6IFdlYkludGVudCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogY29uc3Qgb3B0aW9ucyA9IHtcbiAqICAgYWN0aW9uOiB0aGlzLndlYkludGVudC5BQ1RJT05fVklFVyxcbiAqICAgdXJsOiAncGF0aC90by9maWxlJyxcbiAqICAgdHlwZTogJ2FwcGxpY2F0aW9uL3ZuZC5hbmRyb2lkLnBhY2thZ2UtYXJjaGl2ZSdcbiAqIH1cbiAqXG4gKiB0aGlzLndlYkludGVudC5zdGFydEFjdGl2aXR5KG9wdGlvbnMpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBJbnRlbnRPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV2ViSW50ZW50JyxcbiAgcGx1Z2luOiAnY29tLWRhcnJ5bmNhbXBiZWxsLWNvcmRvdmEtcGx1Z2luLWludGVudCcsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuaW50ZW50U2hpbScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZGFycnluY2FtcGJlbGwvZGFycnluY2FtcGJlbGwtY29yZG92YS1wbHVnaW4taW50ZW50JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViSW50ZW50IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fU0VORDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9WSUVXOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBleHRyYXNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFWFRSQV9URVhUOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBleHRyYXNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFWFRSQV9TVUJKRUNUOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBleHRyYXNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFWFRSQV9TVFJFQU06IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVYVFJBX0VNQUlMOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX0NBTEw6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fU0VORFRPOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX0dFVF9DT05URU5UOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX1BJQ0s6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fSU5TVEFMTF9QQUNLQUdFOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX1VOSU5TVEFMTF9QQUNLQUdFOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhdW5jaGVzIGFuIEFuZHJvaWQgaW50ZW50XG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbnRPcHRpb25zfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydEFjdGl2aXR5KG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgYSBuZXcgYWN0aXZpdHkgYW5kIHJldHVybiB0aGUgcmVzdWx0IHRvIHRoZSBhcHBsaWNhdGlvblxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRBY3Rpdml0eUZvclJlc3VsdChvcHRpb25zOiBJbnRlbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgYXBwIHdhcyBpbnZva2VkIHdpdGggc3BlY2lmaWVkIGV4dHJhXG4gICAqIEBwYXJhbSBleHRyYSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYXNFeHRyYShleHRyYTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgZXh0cmEgdGhhdCB0aGlzIGFwcCB3YXMgaW52b2tlZCB3aXRoXG4gICAqIEBwYXJhbSBleHRyYSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRFeHRyYShleHRyYTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgVXJpIHRoZSBhcHAgd2FzIGludm9rZWQgd2l0aFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRVcmkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29udGVudCBvZiB0aGUgaW50ZW50IHVzZWQgd2hlbmV2ZXIgdGhlIGFwcGxpY2F0aW9uIGFjdGl2aXR5IGlzIGxhdW5jaGVkXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEludGVudD59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgb25JbnRlbnQoKTogT2JzZXJ2YWJsZTxJbnRlbnQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBjdXN0b20gaW50ZW50IHBhc3Npbmcgb3B0aW9uYWwgZXh0cmFzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbnRPcHRpb25zfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kQnJvYWRjYXN0KG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHRoYXQgYSBnaXZlbiBhcHBsaWNhdGlvbiBzZXJ2aWNlIGJlIHN0YXJ0ZWRcbiAgICogQHBhcmFtIG9wdGlvbnMge0ludGVudE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0U2VydmljZShvcHRpb25zOiBJbnRlbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgYnJvYWRjYXN0IHJlY2VpdmVyIGZvciB0aGUgc3BlY2lmaWVkIGZpbHRlcnNcbiAgICogQHBhcmFtIGZpbHRlcnMge1JlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXJPcHRpb25zfVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIHJlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXIoZmlsdGVyczogUmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVycyBhIGJyb2FkY2FzdCByZWNlaXZlclxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVucmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlcigpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgb25BY3Rpdml0eVJlc3VsdCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEludGVudCgpOiBQcm9taXNlPEludGVudD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgcmVzdWx0IGJhY2sgdG8gdGhlIEludGVudCB0aGF0IHN0YXJ0ZWQgdGhpcyBBY3Rpdml0eS5cbiAgICogVGhlIGRhdGEgY2FuIGJlIHBhc3NlZCB1c2luZyAnZXh0cmFzJy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFJlc3VsdCh7IGV4dHJhczoge30gfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=