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
import { IonicNativePlugin, cordovaInstance, instancePropertyGet, instancePropertySet, checkAvailability } from '@ionic-native/core';
import { Observable } from 'rxjs';
var MediaObject = /** @class */ (function () {
    function MediaObject(_objectInstance) {
        var _this = this;
        this._objectInstance = _objectInstance;
        this.onSuccess = new Observable(function (observer) {
            _this.successCallback = observer.next.bind(observer);
            return function () { return (_this.successCallback = function () { }); };
        });
        this.onError = new Observable(function (observer) {
            _this.errorCallback = observer.next.bind(observer);
            return function () { return (_this.errorCallback = function () { }); };
        });
        this.onStatusUpdate = new Observable(function (observer) {
            _this.statusCallback = observer.next.bind(observer);
            return function () { return (_this.statusCallback = function () { }); };
        });
    }
    MediaObject.prototype.getCurrentAmplitude = function () { return cordovaInstance(this, "getCurrentAmplitude", {}, arguments); };
    MediaObject.prototype.getCurrentPosition = function () { return cordovaInstance(this, "getCurrentPosition", {}, arguments); };
    MediaObject.prototype.getDuration = function () { return cordovaInstance(this, "getDuration", { "sync": true }, arguments); };
    MediaObject.prototype.play = function (iosOptions) { return cordovaInstance(this, "play", { "sync": true }, arguments); };
    MediaObject.prototype.pause = function () { return cordovaInstance(this, "pause", { "sync": true }, arguments); };
    MediaObject.prototype.release = function () { return cordovaInstance(this, "release", { "sync": true }, arguments); };
    MediaObject.prototype.seekTo = function (milliseconds) { return cordovaInstance(this, "seekTo", { "sync": true }, arguments); };
    MediaObject.prototype.setVolume = function (volume) { return cordovaInstance(this, "setVolume", { "sync": true }, arguments); };
    MediaObject.prototype.setRate = function (speedRate) { return cordovaInstance(this, "setRate", { "sync": true }, arguments); };
    MediaObject.prototype.startRecord = function () { return cordovaInstance(this, "startRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stopRecord = function () { return cordovaInstance(this, "stopRecord", { "sync": true }, arguments); };
    MediaObject.prototype.pauseRecord = function () { return cordovaInstance(this, "pauseRecord", { "sync": true }, arguments); };
    MediaObject.prototype.resumeRecord = function () { return cordovaInstance(this, "resumeRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stop = function () { return cordovaInstance(this, "stop", { "sync": true }, arguments); };
    Object.defineProperty(MediaObject.prototype, "successCallback", {
        get: function () { return instancePropertyGet(this, "successCallback"); },
        set: function (value) { instancePropertySet(this, "successCallback", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "errorCallback", {
        get: function () { return instancePropertyGet(this, "errorCallback"); },
        set: function (value) { instancePropertySet(this, "errorCallback", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "statusCallback", {
        get: function () { return instancePropertyGet(this, "statusCallback"); },
        set: function (value) { instancePropertySet(this, "statusCallback", value); },
        enumerable: false,
        configurable: true
    });
    return MediaObject;
}());
export { MediaObject };
export var MEDIA_STATUS;
(function (MEDIA_STATUS) {
    MEDIA_STATUS[MEDIA_STATUS["NONE"] = 0] = "NONE";
    MEDIA_STATUS[MEDIA_STATUS["STARTING"] = 1] = "STARTING";
    MEDIA_STATUS[MEDIA_STATUS["RUNNING"] = 2] = "RUNNING";
    MEDIA_STATUS[MEDIA_STATUS["PAUSED"] = 3] = "PAUSED";
    MEDIA_STATUS[MEDIA_STATUS["STOPPED"] = 4] = "STOPPED";
})(MEDIA_STATUS || (MEDIA_STATUS = {}));
export var MEDIA_ERROR;
(function (MEDIA_ERROR) {
    MEDIA_ERROR[MEDIA_ERROR["ABORTED"] = 1] = "ABORTED";
    MEDIA_ERROR[MEDIA_ERROR["NETWORK"] = 2] = "NETWORK";
    MEDIA_ERROR[MEDIA_ERROR["DECODE"] = 3] = "DECODE";
    MEDIA_ERROR[MEDIA_ERROR["SUPPORTED"] = 4] = "SUPPORTED";
})(MEDIA_ERROR || (MEDIA_ERROR = {}));
var MediaOriginal = /** @class */ (function (_super) {
    __extends(MediaOriginal, _super);
    function MediaOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Constants
        /**
         * @hidden
         */
        _this.MEDIA_NONE = 0;
        /**
         * @hidden
         */
        _this.MEDIA_STARTING = 1;
        /**
         * @hidden
         */
        _this.MEDIA_RUNNING = 2;
        /**
         * @hidden
         */
        _this.MEDIA_PAUSED = 3;
        /**
         * @hidden
         */
        _this.MEDIA_STOPPED = 4;
        // error codes
        /**
         * @hidden
         */
        _this.MEDIA_ERR_ABORTED = 1;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NETWORK = 2;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_DECODE = 3;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NONE_SUPPORTED = 4;
        return _this;
    }
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @return {MediaObject}
     */
    MediaOriginal.prototype.create = function (src) {
        var instance;
        if (checkAvailability(MediaOriginal.getPluginRef(), null, MediaOriginal.getPluginName()) === true) {
            // Creates a new media object
            instance = new (MediaOriginal.getPlugin())(src);
        }
        return new MediaObject(instance);
    };
    MediaOriginal.pluginName = "Media";
    MediaOriginal.repo = "https://github.com/apache/cordova-plugin-media";
    MediaOriginal.plugin = "cordova-plugin-media";
    MediaOriginal.pluginRef = "Media";
    MediaOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return MediaOriginal;
}(IonicNativePlugin));
var Media = new MediaOriginal();
export { Media };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLGdGQUFnRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7O0lBb0MxQyxxQkFBb0IsZUFBb0I7UUFBeEMsaUJBZUM7UUFmbUIsb0JBQWUsR0FBZixlQUFlLENBQUs7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsQ0FBTSxVQUFDLFFBQXVCO1lBQzNELEtBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsT0FBTyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsZUFBZSxHQUFHLGNBQU8sQ0FBQyxDQUFDLEVBQWpDLENBQWlDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFjLFVBQUMsUUFBK0I7WUFDekUsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxhQUFhLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxVQUFVLENBQWUsVUFBQyxRQUFnQztZQUNsRixLQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFPLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU9ELHlDQUFtQjtJQVNuQix3Q0FBa0I7SUFTbEIsaUNBQVc7SUFRWCwwQkFBSSxhQUFDLFVBQThFO0lBTW5GLDJCQUFLO0lBTUwsNkJBQU87SUFPUCw0QkFBTSxhQUFDLFlBQW9CO0lBTzNCLCtCQUFTLGFBQUMsTUFBYztJQUd4Qiw2QkFBTyxhQUFDLFNBQWlCO0lBTXpCLGlDQUFXO0lBTVgsZ0NBQVU7SUFNVixpQ0FBVztJQU1YLGtDQUFZO0lBTVosMEJBQUk7MEJBdkhnQix3Q0FBZTs7Ozs7OzBCQUtmLHNDQUFhOzs7Ozs7MEJBS2IsdUNBQWM7Ozs7OztzQkFwQ3BDOzs7QUFrS0EsTUFBTSxDQUFOLElBQVksWUFNWDtBQU5ELFdBQVksWUFBWTtJQUN0QiwrQ0FBUSxDQUFBO0lBQ1IsdURBQVEsQ0FBQTtJQUNSLHFEQUFPLENBQUE7SUFDUCxtREFBTSxDQUFBO0lBQ04scURBQU8sQ0FBQTtBQUNULENBQUMsRUFOVyxZQUFZLEtBQVosWUFBWSxRQU12QjtBQUVELE1BQU0sQ0FBTixJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIsbURBQVcsQ0FBQTtJQUNYLG1EQUFPLENBQUE7SUFDUCxpREFBTSxDQUFBO0lBQ04sdURBQVMsQ0FBQTtBQUNYLENBQUMsRUFMVyxXQUFXLEtBQVgsV0FBVyxRQUt0Qjs7SUE4RzBCLHlCQUFpQjs7O1FBQzFDLFlBQVk7UUFDWjs7V0FFRztRQUNILGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Y7O1dBRUc7UUFDSCxvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQjs7V0FFRztRQUNILG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCOztXQUVHO1FBQ0gsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakI7O1dBRUc7UUFDSCxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQixjQUFjO1FBQ2Q7O1dBRUc7UUFDSCx1QkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEI7O1dBRUc7UUFDSCx1QkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEI7O1dBRUc7UUFDSCxzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckI7O1dBRUc7UUFDSCw4QkFBd0IsR0FBRyxDQUFDLENBQUM7OztJQUU3Qjs7OztPQUlHO0lBQ0gsc0JBQU0sR0FBTixVQUFPLEdBQVc7UUFDaEIsSUFBSSxRQUFhLENBQUM7UUFFbEIsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNqRiw2QkFBNkI7WUFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O2dCQXBWSDtFQTZSMkIsaUJBQWlCO1NBQS9CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGNoZWNrQXZhaWxhYmlsaXR5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTWVkaWFPYmplY3Qge1xuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSBvbiBhY3Rpb25zIHN1Y2Nlc3NcbiAgICovXG4gIG9uU3VjY2VzczogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gYW4gZXJyb3Igb2NjdXJzXG4gICAqL1xuICBvbkVycm9yOiBPYnNlcnZhYmxlPE1FRElBX0VSUk9SPjtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBmaWxlIHN0YXR1cyBjaGFuZ2VzXG4gICAqL1xuICBvblN0YXR1c1VwZGF0ZTogT2JzZXJ2YWJsZTxNRURJQV9TVEFUVVM+O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHN1Y2Nlc3NDYWxsYmFjazogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgZXJyb3JDYWxsYmFjazogRnVuY3Rpb247XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc3RhdHVzQ2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICB0aGlzLm9uU3VjY2VzcyA9IG5ldyBPYnNlcnZhYmxlPGFueT4oKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjayA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XG4gICAgICByZXR1cm4gKCkgPT4gKHRoaXMuc3VjY2Vzc0NhbGxiYWNrID0gKCkgPT4ge30pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbkVycm9yID0gbmV3IE9ic2VydmFibGU8TUVESUFfRVJST1I+KChvYnNlcnZlcjogT2JzZXJ2ZXI8TUVESUFfRVJST1I+KSA9PiB7XG4gICAgICB0aGlzLmVycm9yQ2FsbGJhY2sgPSBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpO1xuICAgICAgcmV0dXJuICgpID0+ICh0aGlzLmVycm9yQ2FsbGJhY2sgPSAoKSA9PiB7fSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uU3RhdHVzVXBkYXRlID0gbmV3IE9ic2VydmFibGU8TUVESUFfU1RBVFVTPigob2JzZXJ2ZXI6IE9ic2VydmVyPE1FRElBX1NUQVRVUz4pID0+IHtcbiAgICAgIHRoaXMuc3RhdHVzQ2FsbGJhY2sgPSBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpO1xuICAgICAgcmV0dXJuICgpID0+ICh0aGlzLnN0YXR1c0NhbGxiYWNrID0gKCkgPT4ge30pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBhbXBsaXR1ZGUgb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBhbXBsaXR1ZGUgb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZ2V0Q3VycmVudEFtcGxpdHVkZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIGFuIGF1ZGlvIGZpbGUuIEFsc28gdXBkYXRlcyB0aGUgTWVkaWEgb2JqZWN0J3MgcG9zaXRpb24gcGFyYW1ldGVyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBnZXRDdXJyZW50UG9zaXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkdXJhdGlvbiBvZiBhbiBhdWRpbyBmaWxlIGluIHNlY29uZHMuIElmIHRoZSBkdXJhdGlvbiBpcyB1bmtub3duLCBpdCByZXR1cm5zIGEgdmFsdWUgb2YgLTEuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGR1cmF0aW9uIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIG9yIHJlc3VtZXMgcGxheWluZyBhbiBhdWRpbyBmaWxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcGxheShpb3NPcHRpb25zPzogeyBudW1iZXJPZkxvb3BzPzogbnVtYmVyOyBwbGF5QXVkaW9XaGVuU2NyZWVuSXNMb2NrZWQ/OiBib29sZWFuIH0pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFBhdXNlcyBwbGF5aW5nIGFuIGF1ZGlvIGZpbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwYXVzZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlbGVhc2VzIHRoZSB1bmRlcmx5aW5nIG9wZXJhdGluZyBzeXN0ZW0ncyBhdWRpbyByZXNvdXJjZXMuIFRoaXMgaXMgcGFydGljdWxhcmx5IGltcG9ydGFudCBmb3IgQW5kcm9pZCwgc2luY2UgdGhlcmUgYXJlIGEgZmluaXRlIGFtb3VudCBvZiBPcGVuQ29yZSBpbnN0YW5jZXMgZm9yIG1lZGlhIHBsYXliYWNrLiBBcHBsaWNhdGlvbnMgc2hvdWxkIGNhbGwgdGhlIHJlbGVhc2UgZnVuY3Rpb24gZm9yIGFueSBNZWRpYSByZXNvdXJjZSB0aGF0IGlzIG5vIGxvbmdlciBuZWVkZWQuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZWxlYXNlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gYW4gYXVkaW8gZmlsZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyBUaGUgdGltZSBwb3NpdGlvbiB5b3Ugd2FudCB0byBzZXQgZm9yIHRoZSBjdXJyZW50IGF1ZGlvIGZpbGVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNlZWtUbyhtaWxsaXNlY29uZHM6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0IHRoZSB2b2x1bWUgZm9yIGFuIGF1ZGlvIGZpbGUuXG4gICAqIEBwYXJhbSB2b2x1bWUge251bWJlcn0gVGhlIHZvbHVtZSB0byBzZXQgZm9yIHBsYXliYWNrLiBUaGUgdmFsdWUgbXVzdCBiZSB3aXRoaW4gdGhlIHJhbmdlIG9mIDAuMCB0byAxLjAuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWb2x1bWUodm9sdW1lOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UmF0ZShzcGVlZFJhdGU6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogU3RhcnRzIHJlY29yZGluZyBhbiBhdWRpbyBmaWxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc3RhcnRSZWNvcmQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTdG9wcyByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHN0b3BSZWNvcmQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBQYXVzZXMgcmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwYXVzZVJlY29yZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlc3VtZXMgcmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZXN1bWVSZWNvcmQoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTdG9wcyBwbGF5aW5nIGFuIGF1ZGlvIGZpbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzdG9wKCk6IHZvaWQge31cbn1cblxuZXhwb3J0IHR5cGUgTWVkaWFTdGF0dXNVcGRhdGVDYWxsYmFjayA9IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFFcnJvciB7XG4gIC8qKlxuICAgKiBFcnJvciBtZXNzYWdlXG4gICAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVycm9yIGNvZGVcbiAgICovXG4gIGNvZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gTUVESUFfU1RBVFVTIHtcbiAgTk9ORSA9IDAsXG4gIFNUQVJUSU5HLFxuICBSVU5OSU5HLFxuICBQQVVTRUQsXG4gIFNUT1BQRUQsXG59XG5cbmV4cG9ydCBlbnVtIE1FRElBX0VSUk9SIHtcbiAgQUJPUlRFRCA9IDEsXG4gIE5FVFdPUkssXG4gIERFQ09ERSxcbiAgU1VQUE9SVEVELFxufVxuXG5leHBvcnQgdHlwZSBNZWRpYUVycm9yQ2FsbGJhY2sgPSAoZXJyb3I6IE1lZGlhRXJyb3IpID0+IHZvaWQ7XG5cbi8qKlxuICogQG5hbWUgTWVkaWFcbiAqIEBwcmVtaWVyIG1lZGlhXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIHJlY29yZCBhbmQgcGxheSBiYWNrIGF1ZGlvIGZpbGVzIG9uIGEgZGV2aWNlLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTWVkaWEsIE1lZGlhT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9tZWRpYS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhOiBNZWRpYSkgeyB9XG4gKlxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAvLyBDcmVhdGUgYSBNZWRpYSBpbnN0YW5jZS4gIEV4cGVjdHMgcGF0aCB0byBmaWxlIG9yIHVybCBhcyBhcmd1bWVudFxuICogLy8gV2UgY2FuIG9wdGlvbmFsbHkgcGFzcyBhIHNlY29uZCBhcmd1bWVudCB0byB0cmFjayB0aGUgc3RhdHVzIG9mIHRoZSBtZWRpYVxuICpcbiAqIGNvbnN0IGZpbGU6IE1lZGlhT2JqZWN0ID0gdGhpcy5tZWRpYS5jcmVhdGUoJ2ZpbGUubXAzJyk7XG4gKlxuICogLy8gdG8gbGlzdGVuIHRvIHBsdWdpbiBldmVudHM6XG4gKlxuICogZmlsZS5vblN0YXR1c1VwZGF0ZS5zdWJzY3JpYmUoc3RhdHVzID0+IGNvbnNvbGUubG9nKHN0YXR1cykpOyAvLyBmaXJlcyB3aGVuIGZpbGUgc3RhdHVzIGNoYW5nZXNcbiAqXG4gKiBmaWxlLm9uU3VjY2Vzcy5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coJ0FjdGlvbiBpcyBzdWNjZXNzZnVsJykpO1xuICpcbiAqIGZpbGUub25FcnJvci5zdWJzY3JpYmUoZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIScsIGVycm9yKSk7XG4gKlxuICogLy8gcGxheSB0aGUgZmlsZVxuICogZmlsZS5wbGF5KCk7XG4gKlxuICogLy8gcGF1c2UgdGhlIGZpbGVcbiAqIGZpbGUucGF1c2UoKTtcbiAqXG4gKiAvLyBnZXQgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvblxuICogZmlsZS5nZXRDdXJyZW50UG9zaXRpb24oKS50aGVuKChwb3NpdGlvbikgPT4ge1xuICogICBjb25zb2xlLmxvZyhwb3NpdGlvbik7XG4gKiB9KTtcbiAqXG4gKiAvLyBnZXQgZmlsZSBkdXJhdGlvblxuICogbGV0IGR1cmF0aW9uID0gZmlsZS5nZXREdXJhdGlvbigpO1xuICogY29uc29sZS5sb2coZHVyYXRpb24pO1xuICpcbiAqIC8vIHNraXAgdG8gMTAgc2Vjb25kcyAoZXhwZWN0cyBpbnQgdmFsdWUgaW4gbXMpXG4gKiBmaWxlLnNlZWtUbygxMDAwMCk7XG4gKlxuICogLy8gc3RvcCBwbGF5aW5nIHRoZSBmaWxlXG4gKiBmaWxlLnN0b3AoKTtcbiAqXG4gKiAvLyByZWxlYXNlIHRoZSBuYXRpdmUgYXVkaW8gcmVzb3VyY2VcbiAqIC8vIFBsYXRmb3JtIFF1aXJrczpcbiAqIC8vIGlPUyBzaW1wbHkgY3JlYXRlIGEgbmV3IGluc3RhbmNlIGFuZCB0aGUgb2xkIG9uZSB3aWxsIGJlIG92ZXJ3cml0dGVuXG4gKiAvLyBBbmRyb2lkIHlvdSBtdXN0IGNhbGwgcmVsZWFzZSgpIHRvIGRlc3Ryb3kgaW5zdGFuY2VzIG9mIG1lZGlhIHdoZW4geW91IGFyZSBkb25lXG4gKiBmaWxlLnJlbGVhc2UoKTtcbiAqXG4gKlxuICpcbiAqIC8vIFJlY29yZGluZyB0byBhIGZpbGVcbiAqIGNvbnN0IGZpbGU6IE1lZGlhT2JqZWN0ID0gdGhpcy5tZWRpYS5jcmVhdGUoJ3BhdGgvdG8vZmlsZS5tcDMnKTtcbiAqXG4gKiBmaWxlLnN0YXJ0UmVjb3JkKCk7XG4gKlxuICogZmlsZS5zdG9wUmVjb3JkKCk7XG4gKlxuICpcbiAqIGBgYFxuICpcbiAqIFNvbWUgaGludHMgaWYgeW91IGFyZSB1c2luZyBpT1MgYW5kIHJlY29yZGluZyBkb2Vzbid0IHdvcms6XG4gKiAxLikgVHJ5IHRvIHVzZSBhIGFic29sdXRlIGZpbGUgcGF0aCBidXQgcmVtb3ZlIGJlZ2lubmluZyBcImZpbGU6Ly9cIi5cbiAqIFRoZW4gaXQgbG9va3MgbGlrZTogYC92YXIvbW9iaWxlL0NvbnRhaW5lcnMvRGF0YS9BcHBsaWNhdGlvbi9BRjQzOEI4Qi03NzI0LTRGQkItOEU2OS0wODM0NjMyMjRGQzQvdG1wL215X2ZpbGUubTRhYFxuICogRXhhbXBsZTogYHRoaXMubWVkaWEuY3JlYXRlKHRoaXMuZmlsZS50ZW1wRGlyZWN0b3J5LnJlcGxhY2UoL15maWxlOlxcL1xcLy8sICcnKSArICdteV9maWxlLm00YScpYFxuICogMi4pIElmIHRoYXQncyBub3Qgd29ya2luZywgdG9vLCBjcmVhdGUgdGhlIGZpbGUgYmVmb3JlIHVzaW5nLlxuICogRXhhbXBsZTpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1lZGlhLCBNZWRpYU9iamVjdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWVkaWEvbmd4JztcbiAqIGltcG9ydCB7IEZpbGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbGUvbmd4JztcbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhOiBNZWRpYSwgcHJpdmF0ZSBmaWxlOiBGaWxlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZpbGUuY3JlYXRlRmlsZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeSwgJ215X2ZpbGUubTRhJywgdHJ1ZSkudGhlbigoKSA9PiB7XG4gKiAgIGxldCBmaWxlID0gdGhpcy5tZWRpYS5jcmVhdGUodGhpcy5maWxlLnRlbXBEaXJlY3RvcnkucmVwbGFjZSgvXmZpbGU6XFwvXFwvLywgJycpICsgJ215X2ZpbGUubTRhJyk7XG4gKiAgIGZpbGUuc3RhcnRSZWNvcmQoKTtcbiAqICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gZmlsZS5zdG9wUmVjb3JkKCksIDEwMDAwKTtcbiAqIH0pO1xuICogYGBgXG4gKlxuICogWW91IGNhbiBmaW5kIHRoZSByZWFzb25zIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLW5hdGl2ZS9pc3N1ZXMvMTQ1MiNpc3N1ZWNvbW1lbnQtMjk5NjA1OTA2XG4gKiBAY2xhc3Nlc1xuICogTWVkaWFPYmplY3RcbiAqIEBpbnRlcmZhY2VzXG4gKiBNZWRpYUVycm9yXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWVkaWEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1tZWRpYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1lZGlhJyxcbiAgcGx1Z2luUmVmOiAnTWVkaWEnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvLyBDb25zdGFudHNcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX05PTkUgPSAwO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfU1RBUlRJTkcgPSAxO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfUlVOTklORyA9IDI7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9QQVVTRUQgPSAzO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfU1RPUFBFRCA9IDQ7XG5cbiAgLy8gZXJyb3IgY29kZXNcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9BQk9SVEVEID0gMTtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9ORVRXT1JLID0gMjtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9ERUNPREUgPSAzO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfRVJSX05PTkVfU1VQUE9SVEVEID0gNDtcblxuICAvKipcbiAgICogT3BlbiBhIG1lZGlhIGZpbGVcbiAgICogQHBhcmFtIHNyYyB7c3RyaW5nfSBBIFVSSSBjb250YWluaW5nIHRoZSBhdWRpbyBjb250ZW50LlxuICAgKiBAcmV0dXJuIHtNZWRpYU9iamVjdH1cbiAgICovXG4gIGNyZWF0ZShzcmM6IHN0cmluZyk6IE1lZGlhT2JqZWN0IHtcbiAgICBsZXQgaW5zdGFuY2U6IGFueTtcblxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShNZWRpYS5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgTWVkaWEuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBtZWRpYSBvYmplY3RcbiAgICAgIGluc3RhbmNlID0gbmV3IChNZWRpYS5nZXRQbHVnaW4oKSkoc3JjKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE1lZGlhT2JqZWN0KGluc3RhbmNlKTtcbiAgfVxufVxuIl19