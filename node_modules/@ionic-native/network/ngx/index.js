import { __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    function Network() {
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
    Network.prototype.onChange = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return merge(_this.onConnect().pipe(mapTo('connected')), _this.onDisconnect().pipe(mapTo('disconnected')));
            }
        })();
    };
    Network.prototype.onDisconnect = function () { return cordova(this, "onDisconnect", { "eventObservable": true, "event": "offline", "element": "document" }, arguments); };
    Network.prototype.onConnect = function () { return cordova(this, "onConnect", { "eventObservable": true, "event": "online", "element": "document" }, arguments); };
    Object.defineProperty(Network.prototype, "type", {
        get: function () { return cordovaPropertyGet(this, "type"); },
        set: function (value) { cordovaPropertySet(this, "type", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "downlinkMax", {
        get: function () { return cordovaPropertyGet(this, "downlinkMax"); },
        set: function (value) { cordovaPropertySet(this, "downlinkMax", value); },
        enumerable: false,
        configurable: true
    });
    Network.pluginName = "Network";
    Network.plugin = "cordova-plugin-network-information";
    Network.pluginRef = "navigator.connection";
    Network.repo = "https://github.com/apache/cordova-plugin-network-information";
    Network.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Network.decorators = [
        { type: Injectable }
    ];
    return Network;
}(IonicNativePlugin));
export { Network };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25ldHdvcmsvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8seUZBQXFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXZDLE1BQU0sQ0FBTixJQUFZLFVBU1g7QUFURCxXQUFZLFVBQVU7SUFDcEIsaUNBQW1CLENBQUE7SUFDbkIsbUNBQXFCLENBQUE7SUFDckIsMkJBQWEsQ0FBQTtJQUNiLDRCQUFjLENBQUE7SUFDZCw0QkFBYyxDQUFBO0lBQ2QsNEJBQWMsQ0FBQTtJQUNkLCtCQUFpQixDQUFBO0lBQ2pCLDJCQUFhLENBQUE7QUFDZixDQUFDLEVBVFcsVUFBVSxLQUFWLFVBQVUsUUFTckI7O0lBcUQ0QiwyQkFBaUI7OztRQUM1Qzs7V0FFRztRQUNILGdCQUFVLEdBQUc7WUFDWCxPQUFPLEVBQUUsU0FBUztZQUNsQixRQUFRLEVBQUUsVUFBVTtZQUNwQixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxVQUFVO1lBQ2hCLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQzs7O0lBbUJGLDBCQUFROzs7bURBQTZDO2dCQUNuRCxPQUFPLEtBQUssQ0FDVixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUN6QyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBK0IsQ0FDOUUsQ0FBQzthQUNIOzs7SUFXRCw4QkFBWTtJQWFaLDJCQUFTOzBCQTFDVSx5QkFBSTs7Ozs7OzBCQU1KLGdDQUFXOzs7Ozs7Ozs7Ozs7Z0JBMUIvQixVQUFVOztrQkFwRVg7RUFxRTZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YUNoZWNrLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xuXG5leHBvcnQgZW51bSBDb25uZWN0aW9uIHtcbiAgVU5LTk9XTiA9ICd1bmtub3duJyxcbiAgRVRIRVJORVQgPSAnZXRoZXJuZXQnLFxuICBXSUZJID0gJ3dpZmknLFxuICBDRUxMXzJHID0gJzJnJyxcbiAgQ0VMTF8zRyA9ICczZycsXG4gIENFTExfNEcgPSAnNGcnLFxuICBDRUxMID0gJ2NlbGx1bGFyJyxcbiAgTk9ORSA9ICdub25lJyxcbn1cblxuLyoqXG4gKiBAbmFtZSBOZXR3b3JrXG4gKiBAcHJlbWllciBuZXR3b3JrLWluZm9ybWF0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1uZXR3b3JrLWluZm9ybWF0aW9uLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbTmV0d29yayBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1uZXR3b3JrLWluZm9ybWF0aW9uKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldHdvcms6IE5ldHdvcmspIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdGlvblxuICogbGV0IGRpc2Nvbm5lY3RTdWJzY3JpcHRpb24gPSB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAqICAgY29uc29sZS5sb2coJ25ldHdvcmsgd2FzIGRpc2Nvbm5lY3RlZCA6LSgnKTtcbiAqIH0pO1xuICpcbiAqIC8vIHN0b3AgZGlzY29ubmVjdCB3YXRjaFxuICogZGlzY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqXG4gKiAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAqIGxldCBjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCduZXR3b3JrIGNvbm5lY3RlZCEnKTtcbiAqICAgLy8gV2UganVzdCBnb3QgYSBjb25uZWN0aW9uIGJ1dCB3ZSBuZWVkIHRvIHdhaXQgYnJpZWZseVxuICogICAgLy8gYmVmb3JlIHdlIGRldGVybWluZSB0aGUgY29ubmVjdGlvbiB0eXBlLiBNaWdodCBuZWVkIHRvIHdhaXQuXG4gKiAgIC8vIHByaW9yIHRvIGRvaW5nIGFueSBhcGkgcmVxdWVzdHMgYXMgd2VsbC5cbiAqICAgc2V0VGltZW91dCgoKSA9PiB7XG4gKiAgICAgaWYgKHRoaXMubmV0d29yay50eXBlID09PSAnd2lmaScpIHtcbiAqICAgICAgIGNvbnNvbGUubG9nKCd3ZSBnb3QgYSB3aWZpIGNvbm5lY3Rpb24sIHdvb2hvbyEnKTtcbiAqICAgICB9XG4gKiAgIH0sIDMwMDApO1xuICogfSk7XG4gKlxuICogLy8gc3RvcCBjb25uZWN0IHdhdGNoXG4gKiBjb25uZWN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gKlxuICogYGBgXG4gKiBAYWR2YW5jZWRcbiAqIFRoZSBgdHlwZWAgcHJvcGVydHkgd2lsbCByZXR1cm4gb25lIG9mIHRoZSBmb2xsb3dpbmcgY29ubmVjdGlvbiB0eXBlczogYHVua25vd25gLCBgZXRoZXJuZXRgLCBgd2lmaWAsIGAyZ2AsIGAzZ2AsIGA0Z2AsIGBjZWxsdWxhcmAsIGBub25lYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05ldHdvcmsnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uZXR3b3JrLWluZm9ybWF0aW9uJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNvbm5lY3Rpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1uZXR3b3JrLWluZm9ybWF0aW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZXR3b3JrIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzIGZvciBwb3NzaWJsZSBjb25uZWN0aW9uIHR5cGVzXG4gICAqL1xuICBDb25uZWN0aW9uID0ge1xuICAgIFVOS05PV046ICd1bmtub3duJyxcbiAgICBFVEhFUk5FVDogJ2V0aGVybmV0JyxcbiAgICBXSUZJOiAnd2lmaScsXG4gICAgQ0VMTF8yRzogJzJnJyxcbiAgICBDRUxMXzNHOiAnM2cnLFxuICAgIENFTExfNEc6ICc0ZycsXG4gICAgQ0VMTDogJ2NlbGx1bGFyJyxcbiAgICBOT05FOiAnbm9uZScsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbm5lY3Rpb24gdHlwZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEb3dubGluayBNYXggU3BlZWRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGRvd25saW5rTWF4OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0byB3YXRjaCBjb25uZWN0aW9uIGNoYW5nZXNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTwnY29ubmVjdGVkJyB8ICdkaXNjb25uZWN0ZWQnPn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPCdjb25uZWN0ZWQnIHwgJ2Rpc2Nvbm5lY3RlZCc+IHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICB0aGlzLm9uQ29ubmVjdCgpLnBpcGUobWFwVG8oJ2Nvbm5lY3RlZCcpKSxcbiAgICAgIHRoaXMub25EaXNjb25uZWN0KCkucGlwZShtYXBUbygnZGlzY29ubmVjdGVkJykpIGFzIE9ic2VydmFibGU8J2Rpc2Nvbm5lY3RlZCc+XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiB0aGUgZGV2aWNlIGdvZXMgb2ZmbGluZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnb2ZmbGluZScsXG4gICAgZWxlbWVudDogZG9jdW1lbnQsXG4gIH0pXG4gIG9uRGlzY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiB0aGUgZGV2aWNlIGdvZXMgb25saW5lXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdvbmxpbmUnLFxuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxuICB9KVxuICBvbkNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==