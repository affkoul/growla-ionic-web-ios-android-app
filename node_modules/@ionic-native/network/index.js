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
import { IonicNativePlugin, cordova, checkAvailability, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';
export var Connection;
(function (Connection) {
    Connection["UNKNOWN"] = "unknown";
    Connection["ETHERNET"] = "ethernet";
    Connection["WIFI"] = "wifi";
    Connection["CELL_2G"] = "2g";
    Connection["CELL_3G"] = "3g";
    Connection["CELL_4G"] = "4g";
    Connection["CELL"] = "cellular";
    Connection["NONE"] = "none";
})(Connection || (Connection = {}));
var NetworkOriginal = /** @class */ (function (_super) {
    __extends(NetworkOriginal, _super);
    function NetworkOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constants for possible connection types
         */
        _this.Connection = {
            UNKNOWN: 'unknown',
            ETHERNET: 'ethernet',
            WIFI: 'wifi',
            CELL_2G: '2g',
            CELL_3G: '3g',
            CELL_4G: '4g',
            CELL: 'cellular',
            NONE: 'none',
        };
        return _this;
    }
    NetworkOriginal.prototype.onChange = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return merge(_this.onConnect().pipe(mapTo('connected')), _this.onDisconnect().pipe(mapTo('disconnected')));
            }
        })();
    };
    NetworkOriginal.prototype.onDisconnect = function () { return cordova(this, "onDisconnect", { "eventObservable": true, "event": "offline", "element": "document" }, arguments); };
    NetworkOriginal.prototype.onConnect = function () { return cordova(this, "onConnect", { "eventObservable": true, "event": "online", "element": "document" }, arguments); };
    Object.defineProperty(NetworkOriginal.prototype, "type", {
        get: function () { return cordovaPropertyGet(this, "type"); },
        set: function (value) { cordovaPropertySet(this, "type", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkOriginal.prototype, "downlinkMax", {
        get: function () { return cordovaPropertyGet(this, "downlinkMax"); },
        set: function (value) { cordovaPropertySet(this, "downlinkMax", value); },
        enumerable: false,
        configurable: true
    });
    NetworkOriginal.pluginName = "Network";
    NetworkOriginal.plugin = "cordova-plugin-network-information";
    NetworkOriginal.pluginRef = "navigator.connection";
    NetworkOriginal.repo = "https://github.com/apache/cordova-plugin-network-information";
    NetworkOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    return NetworkOriginal;
}(IonicNativePlugin));
var Network = new NetworkOriginal();
export { Network };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldHdvcmsvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8seUZBQXFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXZDLE1BQU0sQ0FBTixJQUFZLFVBU1g7QUFURCxXQUFZLFVBQVU7SUFDcEIsaUNBQW1CLENBQUE7SUFDbkIsbUNBQXFCLENBQUE7SUFDckIsMkJBQWEsQ0FBQTtJQUNiLDRCQUFjLENBQUE7SUFDZCw0QkFBYyxDQUFBO0lBQ2QsNEJBQWMsQ0FBQTtJQUNkLCtCQUFpQixDQUFBO0lBQ2pCLDJCQUFhLENBQUE7QUFDZixDQUFDLEVBVFcsVUFBVSxLQUFWLFVBQVUsUUFTckI7O0lBcUQ0QiwyQkFBaUI7OztRQUM1Qzs7V0FFRztRQUNILGdCQUFVLEdBQUc7WUFDWCxPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLEVBQUUsVUFBVTtZQUNwQixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQzs7O0lBbUJGLDBCQUFROzs7bURBQTZDO2dCQUNuRCxPQUFPLEtBQUssQ0FDVixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUN6QyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBK0IsQ0FDOUUsQ0FBQzthQUNIOzs7SUFXRCw4QkFBWTtJQWFaLDJCQUFTOzBCQTFDVSx5QkFBSTs7Ozs7OzBCQU1KLGdDQUFXOzs7Ozs7Ozs7OztrQkE5RmhDO0VBcUU2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFDaGVjaywgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IGVudW0gQ29ubmVjdGlvbiB7XG4gIFVOS05PV04gPSAndW5rbm93bicsXG4gIEVUSEVSTkVUID0gJ2V0aGVybmV0JyxcbiAgV0lGSSA9ICd3aWZpJyxcbiAgQ0VMTF8yRyA9ICcyZycsXG4gIENFTExfM0cgPSAnM2cnLFxuICBDRUxMXzRHID0gJzRnJyxcbiAgQ0VMTCA9ICdjZWxsdWxhcicsXG4gIE5PTkUgPSAnbm9uZScsXG59XG5cbi8qKlxuICogQG5hbWUgTmV0d29ya1xuICogQHByZW1pZXIgbmV0d29yay1pbmZvcm1hdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbi4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW05ldHdvcmsgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3Rpb25cbiAqIGxldCBkaXNjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCduZXR3b3JrIHdhcyBkaXNjb25uZWN0ZWQgOi0oJyk7XG4gKiB9KTtcbiAqXG4gKiAvLyBzdG9wIGRpc2Nvbm5lY3Qgd2F0Y2hcbiAqIGRpc2Nvbm5lY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAqXG4gKlxuICogLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gKiBsZXQgY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICogICBjb25zb2xlLmxvZygnbmV0d29yayBjb25uZWN0ZWQhJyk7XG4gKiAgIC8vIFdlIGp1c3QgZ290IGEgY29ubmVjdGlvbiBidXQgd2UgbmVlZCB0byB3YWl0IGJyaWVmbHlcbiAqICAgIC8vIGJlZm9yZSB3ZSBkZXRlcm1pbmUgdGhlIGNvbm5lY3Rpb24gdHlwZS4gTWlnaHQgbmVlZCB0byB3YWl0LlxuICogICAvLyBwcmlvciB0byBkb2luZyBhbnkgYXBpIHJlcXVlc3RzIGFzIHdlbGwuXG4gKiAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICogICAgIGlmICh0aGlzLm5ldHdvcmsudHlwZSA9PT0gJ3dpZmknKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZygnd2UgZ290IGEgd2lmaSBjb25uZWN0aW9uLCB3b29ob28hJyk7XG4gKiAgICAgfVxuICogICB9LCAzMDAwKTtcbiAqIH0pO1xuICpcbiAqIC8vIHN0b3AgY29ubmVjdCB3YXRjaFxuICogY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqIGBgYFxuICogQGFkdmFuY2VkXG4gKiBUaGUgYHR5cGVgIHByb3BlcnR5IHdpbGwgcmV0dXJuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGNvbm5lY3Rpb24gdHlwZXM6IGB1bmtub3duYCwgYGV0aGVybmV0YCwgYHdpZmlgLCBgMmdgLCBgM2dgLCBgNGdgLCBgY2VsbHVsYXJgLCBgbm9uZWBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdOZXR3b3JrJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jb25uZWN0aW9uJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbicsXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV0d29yayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnN0YW50cyBmb3IgcG9zc2libGUgY29ubmVjdGlvbiB0eXBlc1xuICAgKi9cbiAgQ29ubmVjdGlvbiA9IHtcbiAgICBVTktOT1dOOiAndW5rbm93bicsXG4gICAgRVRIRVJORVQ6ICdldGhlcm5ldCcsXG4gICAgV0lGSTogJ3dpZmknLFxuICAgIENFTExfMkc6ICcyZycsXG4gICAgQ0VMTF8zRzogJzNnJyxcbiAgICBDRUxMXzRHOiAnNGcnLFxuICAgIENFTEw6ICdjZWxsdWxhcicsXG4gICAgTk9ORTogJ25vbmUnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb25uZWN0aW9uIHR5cGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogRG93bmxpbmsgTWF4IFNwZWVkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkb3dubGlua01heDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgdG8gd2F0Y2ggY29ubmVjdGlvbiBjaGFuZ2VzXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8J2Nvbm5lY3RlZCcgfCAnZGlzY29ubmVjdGVkJz59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTwnY29ubmVjdGVkJyB8ICdkaXNjb25uZWN0ZWQnPiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgdGhpcy5vbkNvbm5lY3QoKS5waXBlKG1hcFRvKCdjb25uZWN0ZWQnKSksXG4gICAgICB0aGlzLm9uRGlzY29ubmVjdCgpLnBpcGUobWFwVG8oJ2Rpc2Nvbm5lY3RlZCcpKSBhcyBPYnNlcnZhYmxlPCdkaXNjb25uZWN0ZWQnPlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vdGlmaWVkIHdoZW4gdGhlIGRldmljZSBnb2VzIG9mZmxpbmVcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ29mZmxpbmUnLFxuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxuICB9KVxuICBvbkRpc2Nvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vdGlmaWVkIHdoZW4gdGhlIGRldmljZSBnb2VzIG9ubGluZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnb25saW5lJyxcbiAgICBlbGVtZW50OiBkb2N1bWVudCxcbiAgfSlcbiAgb25Db25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=