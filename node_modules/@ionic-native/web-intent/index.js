var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
var WebIntentOriginal = /** @class */ (function (_super) {
    __extends(WebIntentOriginal, _super);
    function WebIntentOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebIntentOriginal.prototype.startActivity = function (options) { return cordova(this, "startActivity", {}, arguments); };
    WebIntentOriginal.prototype.startActivityForResult = function (options) { return cordova(this, "startActivityForResult", {}, arguments); };
    WebIntentOriginal.prototype.hasExtra = function (extra) { return cordova(this, "hasExtra", {}, arguments); };
    WebIntentOriginal.prototype.getExtra = function (extra) { return cordova(this, "getExtra", {}, arguments); };
    WebIntentOriginal.prototype.getUri = function () { return cordova(this, "getUri", {}, arguments); };
    WebIntentOriginal.prototype.onIntent = function () { return cordova(this, "onIntent", { "observable": true }, arguments); };
    WebIntentOriginal.prototype.sendBroadcast = function (options) { return cordova(this, "sendBroadcast", {}, arguments); };
    WebIntentOriginal.prototype.startService = function (options) { return cordova(this, "startService", {}, arguments); };
    WebIntentOriginal.prototype.registerBroadcastReceiver = function (filters) { return cordova(this, "registerBroadcastReceiver", { "observable": true }, arguments); };
    WebIntentOriginal.prototype.unregisterBroadcastReceiver = function () { return cordova(this, "unregisterBroadcastReceiver", { "sync": true }, arguments); };
    WebIntentOriginal.prototype.onActivityResult = function () { return cordova(this, "onActivityResult", { "sync": true }, arguments); };
    WebIntentOriginal.prototype.getIntent = function () { return cordova(this, "getIntent", {}, arguments); };
    WebIntentOriginal.prototype.sendResult = function (_a) {
        var _b = _a.extras;
        return cordova(this, "sendResult", {}, arguments);
    };
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_SEND", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SEND"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SEND", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_VIEW", {
        get: function () { return cordovaPropertyGet(this, "ACTION_VIEW"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_VIEW", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_TEXT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_TEXT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_TEXT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_SUBJECT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_SUBJECT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_SUBJECT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_STREAM", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_STREAM"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_STREAM", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_EMAIL", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_EMAIL"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_EMAIL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_CALL", {
        get: function () { return cordovaPropertyGet(this, "ACTION_CALL"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_CALL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_SENDTO", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SENDTO"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SENDTO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_GET_CONTENT", {
        get: function () { return cordovaPropertyGet(this, "ACTION_GET_CONTENT"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_GET_CONTENT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_PICK", {
        get: function () { return cordovaPropertyGet(this, "ACTION_PICK"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_PICK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_INSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_INSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_INSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_UNINSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_UNINSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_UNINSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    WebIntentOriginal.pluginName = "WebIntent";
    WebIntentOriginal.plugin = "com-darryncampbell-cordova-plugin-intent";
    WebIntentOriginal.pluginRef = "plugins.intentShim";
    WebIntentOriginal.repo = "https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent";
    WebIntentOriginal.platforms = ["Android"];
    return WebIntentOriginal;
}(IonicNativePlugin));
var WebIntent = new WebIntentOriginal();
export { WebIntent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlYi1pbnRlbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUF1RUgsNkJBQWlCOzs7O0lBMkY5QyxpQ0FBYSxhQUFDLE9BQXNCO0lBVXBDLDBDQUFzQixhQUFDLE9BQXNCO0lBVTdDLDRCQUFRLGFBQUMsS0FBYTtJQVV0Qiw0QkFBUSxhQUFDLEtBQWE7SUFTdEIsMEJBQU07SUFXTiw0QkFBUTtJQVVSLGlDQUFhLGFBQUMsT0FBc0I7SUFVcEMsZ0NBQVksYUFBQyxPQUFzQjtJQVluQyw2Q0FBeUIsYUFBQyxPQUF5QztJQVFuRSwrQ0FBMkI7SUFNM0Isb0NBQWdCO0lBTWhCLDZCQUFTO0lBVVQsOEJBQVUsYUFBQyxFQUFjO1lBQVosY0FBVTs7OzBCQXJNdkIsa0NBQVc7Ozs7OzswQkFPWCxrQ0FBVzs7Ozs7OzBCQU9YLGlDQUFVOzs7Ozs7MEJBT1Ysb0NBQWE7Ozs7OzswQkFPYixtQ0FBWTs7Ozs7OzBCQU9aLGtDQUFXOzs7Ozs7MEJBT1gsa0NBQVc7Ozs7OzswQkFPWCxvQ0FBYTs7Ozs7OzBCQU9iLHlDQUFrQjs7Ozs7OzBCQU9sQixrQ0FBVzs7Ozs7OzBCQU9YLDZDQUFzQjs7Ozs7OzBCQU90QiwrQ0FBd0I7Ozs7Ozs7Ozs7O29CQTVKMUI7RUF5RStCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnRDbGlwSXRlbSB7XG4gIHVyaTogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBleHRlbnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZW50IHtcbiAgYWN0aW9uOiBzdHJpbmc7XG4gIGNsaXBJdGVtczogSW50ZW50Q2xpcEl0ZW1bXTtcbiAgY29tcG9uZW50OiBzdHJpbmc7XG4gIGV4dHJhczogb2JqZWN0O1xuICBmbGFnczogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlck9wdGlvbnMge1xuICBmaWx0ZXJBY3Rpb25zPzogc3RyaW5nW107XG4gIGZpbHRlckNhdGVnb3JpZXM/OiBzdHJpbmdbXTtcbiAgZmlsdGVyRGF0YVNjaGVtZXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnRPcHRpb25zIHtcbiAgcmVxdWVzdENvZGU/OiBudW1iZXI7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHBhY2thZ2U/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbiAgZXh0cmFzPzogb2JqZWN0O1xuICBhY3Rpb24/OiBzdHJpbmc7XG4gIGNvbXBvbmVudD86IHtcbiAgICBwYWNrYWdlOiBzdHJpbmc7XG4gICAgY2xhc3M6IHN0cmluZztcbiAgfTtcbiAgZmxhZ3M/OiBudW1iZXJbXTtcbn1cblxuLyoqXG4gKiBAbmFtZSBXZWIgSW50ZW50XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgUGx1Z2luIHByb3ZpZGVzIGEgZ2VuZXJhbCBwdXJwb3NlIHNoaW0gbGF5ZXIgZm9yIHRoZSBBbmRyb2lkIGludGVudCBtZWNoYW5pc20sIGV4cG9zaW5nIHZhcmlvdXMgd2F5cyB0byBoYW5kbGUgc2VuZGluZyBhbmQgcmVjZWl2aW5nIGludGVudHMuXG4gKiBAdXNhZ2VcbiAqIEZvciB1c2FnZSBpbmZvcm1hdGlvbiBwbGVhc2UgcmVmZXIgdG8gdGhlIHBsdWdpbidzIEdpdGh1YiByZXBvLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFdlYkludGVudCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvd2ViLWludGVudC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2ViSW50ZW50OiBXZWJJbnRlbnQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IG9wdGlvbnMgPSB7XG4gKiAgIGFjdGlvbjogdGhpcy53ZWJJbnRlbnQuQUNUSU9OX1ZJRVcsXG4gKiAgIHVybDogJ3BhdGgvdG8vZmlsZScsXG4gKiAgIHR5cGU6ICdhcHBsaWNhdGlvbi92bmQuYW5kcm9pZC5wYWNrYWdlLWFyY2hpdmUnXG4gKiB9XG4gKlxuICogdGhpcy53ZWJJbnRlbnQuc3RhcnRBY3Rpdml0eShvcHRpb25zKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSW50ZW50T3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlYkludGVudCcsXG4gIHBsdWdpbjogJ2NvbS1kYXJyeW5jYW1wYmVsbC1jb3Jkb3ZhLXBsdWdpbi1pbnRlbnQnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmludGVudFNoaW0nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RhcnJ5bmNhbXBiZWxsL2RhcnJ5bmNhbXBiZWxsLWNvcmRvdmEtcGx1Z2luLWludGVudCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYkludGVudCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX1NFTkQ6IHN0cmluZztcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBBQ1RJT05fVklFVzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgZXh0cmFzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVhUUkFfVEVYVDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgZXh0cmFzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVhUUkFfU1VCSkVDVDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgZXh0cmFzXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRVhUUkFfU1RSRUFNOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBleHRyYXNcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFWFRSQV9FTUFJTDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9DQUxMOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX1NFTkRUTzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9HRVRfQ09OVEVOVDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9QSUNLOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQUNUSU9OX0lOU1RBTExfUEFDS0FHRTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEFDVElPTl9VTklOU1RBTExfUEFDS0FHRTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMYXVuY2hlcyBhbiBBbmRyb2lkIGludGVudFxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRBY3Rpdml0eShvcHRpb25zOiBJbnRlbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGEgbmV3IGFjdGl2aXR5IGFuZCByZXR1cm4gdGhlIHJlc3VsdCB0byB0aGUgYXBwbGljYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnMge0ludGVudE9wdGlvbnN9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0QWN0aXZpdHlGb3JSZXN1bHQob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGlzIGFwcCB3YXMgaW52b2tlZCB3aXRoIHNwZWNpZmllZCBleHRyYVxuICAgKiBAcGFyYW0gZXh0cmEge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGFzRXh0cmEoZXh0cmE6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGV4dHJhIHRoYXQgdGhpcyBhcHAgd2FzIGludm9rZWQgd2l0aFxuICAgKiBAcGFyYW0gZXh0cmEge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RXh0cmEoZXh0cmE6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIFVyaSB0aGUgYXBwIHdhcyBpbnZva2VkIHdpdGhcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0VXJpKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIGludGVudCB1c2VkIHdoZW5ldmVyIHRoZSBhcHBsaWNhdGlvbiBhY3Rpdml0eSBpcyBsYXVuY2hlZFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbnRlbnQ+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIG9uSW50ZW50KCk6IE9ic2VydmFibGU8SW50ZW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgY3VzdG9tIGludGVudCBwYXNzaW5nIG9wdGlvbmFsIGV4dHJhc1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZEJyb2FkY2FzdChvcHRpb25zOiBJbnRlbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCB0aGF0IGEgZ2l2ZW4gYXBwbGljYXRpb24gc2VydmljZSBiZSBzdGFydGVkXG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbnRPcHRpb25zfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydFNlcnZpY2Uob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGJyb2FkY2FzdCByZWNlaXZlciBmb3IgdGhlIHNwZWNpZmllZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSBmaWx0ZXJzIHtSZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyT3B0aW9uc31cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICByZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyKGZpbHRlcnM6IFJlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgYSBicm9hZGNhc3QgcmVjZWl2ZXJcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1bnJlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXIoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIG9uQWN0aXZpdHlSZXN1bHQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbnRlbnQoKTogUHJvbWlzZTxJbnRlbnQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIHJlc3VsdCBiYWNrIHRvIHRoZSBJbnRlbnQgdGhhdCBzdGFydGVkIHRoaXMgQWN0aXZpdHkuXG4gICAqIFRoZSBkYXRhIGNhbiBiZSBwYXNzZWQgdXNpbmcgJ2V4dHJhcycuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRSZXN1bHQoeyBleHRyYXM6IHt9IH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19