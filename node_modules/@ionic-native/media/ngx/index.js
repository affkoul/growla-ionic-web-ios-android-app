import { __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
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
    Media.prototype.create = function (src) {
        var instance;
        if (checkAvailability(Media.getPluginRef(), null, Media.getPluginName()) === true) {
            // Creates a new media object
            instance = new (Media.getPlugin())(src);
        }
        return new MediaObject(instance);
    };
    Media.pluginName = "Media";
    Media.repo = "https://github.com/apache/cordova-plugin-media";
    Media.plugin = "cordova-plugin-media";
    Media.pluginRef = "Media";
    Media.platforms = ["Android", "Browser", "iOS", "Windows"];
    Media.decorators = [
        { type: Injectable }
    ];
    return Media;
}(IonicNativePlugin));
export { Media };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLGdGQUFnRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7O0lBb0MxQyxxQkFBb0IsZUFBb0I7UUFBeEMsaUJBZUM7UUFmbUIsb0JBQWUsR0FBZixlQUFlLENBQUs7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsQ0FBTSxVQUFDLFFBQXVCO1lBQzNELEtBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsT0FBTyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsZUFBZSxHQUFHLGNBQU8sQ0FBQyxDQUFDLEVBQWpDLENBQWlDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFjLFVBQUMsUUFBK0I7WUFDekUsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxhQUFhLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxVQUFVLENBQWUsVUFBQyxRQUFnQztZQUNsRixLQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFPLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU9ELHlDQUFtQjtJQVNuQix3Q0FBa0I7SUFTbEIsaUNBQVc7SUFRWCwwQkFBSSxhQUFDLFVBQThFO0lBTW5GLDJCQUFLO0lBTUwsNkJBQU87SUFPUCw0QkFBTSxhQUFDLFlBQW9CO0lBTzNCLCtCQUFTLGFBQUMsTUFBYztJQUd4Qiw2QkFBTyxhQUFDLFNBQWlCO0lBTXpCLGlDQUFXO0lBTVgsZ0NBQVU7SUFNVixpQ0FBVztJQU1YLGtDQUFZO0lBTVosMEJBQUk7MEJBdkhnQix3Q0FBZTs7Ozs7OzBCQUtmLHNDQUFhOzs7Ozs7MEJBS2IsdUNBQWM7Ozs7OztzQkFwQ3BDOzs7QUFrS0EsTUFBTSxDQUFOLElBQVksWUFNWDtBQU5ELFdBQVksWUFBWTtJQUN0QiwrQ0FBUSxDQUFBO0lBQ1IsdURBQVEsQ0FBQTtJQUNSLHFEQUFPLENBQUE7SUFDUCxtREFBTSxDQUFBO0lBQ04scURBQU8sQ0FBQTtBQUNULENBQUMsRUFOVyxZQUFZLEtBQVosWUFBWSxRQU12QjtBQUVELE1BQU0sQ0FBTixJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIsbURBQVcsQ0FBQTtJQUNYLG1EQUFPLENBQUE7SUFDUCxpREFBTSxDQUFBO0lBQ04sdURBQVMsQ0FBQTtBQUNYLENBQUMsRUFMVyxXQUFXLEtBQVgsV0FBVyxRQUt0Qjs7SUE4RzBCLHlCQUFpQjs7O1FBQzFDLFlBQVk7UUFDWjs7V0FFRztRQUNILGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Y7O1dBRUc7UUFDSCxvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQjs7V0FFRztRQUNILG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCOztXQUVHO1FBQ0gsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakI7O1dBRUc7UUFDSCxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQixjQUFjO1FBQ2Q7O1dBRUc7UUFDSCx1QkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEI7O1dBRUc7UUFDSCx1QkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEI7O1dBRUc7UUFDSCxzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckI7O1dBRUc7UUFDSCw4QkFBd0IsR0FBRyxDQUFDLENBQUM7OztJQUU3Qjs7OztPQUlHO0lBQ0gsc0JBQU0sR0FBTixVQUFPLEdBQVc7UUFDaEIsSUFBSSxRQUFhLENBQUM7UUFFbEIsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNqRiw2QkFBNkI7WUFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7OztnQkF4REYsVUFBVTs7Z0JBNVJYO0VBNlIyQixpQkFBaUI7U0FBL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgY2hlY2tBdmFpbGFiaWxpdHkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBNZWRpYU9iamVjdCB7XG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IG9uIGFjdGlvbnMgc3VjY2Vzc1xuICAgKi9cbiAgb25TdWNjZXNzOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiBhbiBlcnJvciBvY2N1cnNcbiAgICovXG4gIG9uRXJyb3I6IE9ic2VydmFibGU8TUVESUFfRVJST1I+O1xuXG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGZpbGUgc3RhdHVzIGNoYW5nZXNcbiAgICovXG4gIG9uU3RhdHVzVXBkYXRlOiBPYnNlcnZhYmxlPE1FRElBX1NUQVRVUz47XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc3VjY2Vzc0NhbGxiYWNrOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBlcnJvckNhbGxiYWNrOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBzdGF0dXNDYWxsYmFjazogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHRoaXMub25TdWNjZXNzID0gbmV3IE9ic2VydmFibGU8YW55Pigob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIHRoaXMuc3VjY2Vzc0NhbGxiYWNrID0gb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKTtcbiAgICAgIHJldHVybiAoKSA9PiAodGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSAoKSA9PiB7fSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uRXJyb3IgPSBuZXcgT2JzZXJ2YWJsZTxNRURJQV9FUlJPUj4oKG9ic2VydmVyOiBPYnNlcnZlcjxNRURJQV9FUlJPUj4pID0+IHtcbiAgICAgIHRoaXMuZXJyb3JDYWxsYmFjayA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XG4gICAgICByZXR1cm4gKCkgPT4gKHRoaXMuZXJyb3JDYWxsYmFjayA9ICgpID0+IHt9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub25TdGF0dXNVcGRhdGUgPSBuZXcgT2JzZXJ2YWJsZTxNRURJQV9TVEFUVVM+KChvYnNlcnZlcjogT2JzZXJ2ZXI8TUVESUFfU1RBVFVTPikgPT4ge1xuICAgICAgdGhpcy5zdGF0dXNDYWxsYmFjayA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XG4gICAgICByZXR1cm4gKCkgPT4gKHRoaXMuc3RhdHVzQ2FsbGJhY2sgPSAoKSA9PiB7fSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGFtcGxpdHVkZSBvZiB0aGUgY3VycmVudCByZWNvcmRpbmcuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGFtcGxpdHVkZSBvZiB0aGUgY3VycmVudCByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBnZXRDdXJyZW50QW1wbGl0dWRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gYW4gYXVkaW8gZmlsZS4gQWxzbyB1cGRhdGVzIHRoZSBNZWRpYSBvYmplY3QncyBwb3NpdGlvbiBwYXJhbWV0ZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGdldEN1cnJlbnRQb3NpdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGR1cmF0aW9uIG9mIGFuIGF1ZGlvIGZpbGUgaW4gc2Vjb25kcy4gSWYgdGhlIGR1cmF0aW9uIGlzIHVua25vd24sIGl0IHJldHVybnMgYSB2YWx1ZSBvZiAtMS5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgZHVyYXRpb24gb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXREdXJhdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgb3IgcmVzdW1lcyBwbGF5aW5nIGFuIGF1ZGlvIGZpbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5KGlvc09wdGlvbnM/OiB7IG51bWJlck9mTG9vcHM/OiBudW1iZXI7IHBsYXlBdWRpb1doZW5TY3JlZW5Jc0xvY2tlZD86IGJvb2xlYW4gfSk6IHZvaWQge31cblxuICAvKipcbiAgICogUGF1c2VzIHBsYXlpbmcgYW4gYXVkaW8gZmlsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHBhdXNlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVsZWFzZXMgdGhlIHVuZGVybHlpbmcgb3BlcmF0aW5nIHN5c3RlbSdzIGF1ZGlvIHJlc291cmNlcy4gVGhpcyBpcyBwYXJ0aWN1bGFybHkgaW1wb3J0YW50IGZvciBBbmRyb2lkLCBzaW5jZSB0aGVyZSBhcmUgYSBmaW5pdGUgYW1vdW50IG9mIE9wZW5Db3JlIGluc3RhbmNlcyBmb3IgbWVkaWEgcGxheWJhY2suIEFwcGxpY2F0aW9ucyBzaG91bGQgY2FsbCB0aGUgcmVsZWFzZSBmdW5jdGlvbiBmb3IgYW55IE1lZGlhIHJlc291cmNlIHRoYXQgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbGVhc2UoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHBvc2l0aW9uIHdpdGhpbiBhbiBhdWRpbyBmaWxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIFRoZSB0aW1lIHBvc2l0aW9uIHlvdSB3YW50IHRvIHNldCBmb3IgdGhlIGN1cnJlbnQgYXVkaW8gZmlsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2Vla1RvKG1pbGxpc2Vjb25kczogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZvbHVtZSBmb3IgYW4gYXVkaW8gZmlsZS5cbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSBUaGUgdm9sdW1lIHRvIHNldCBmb3IgcGxheWJhY2suIFRoZSB2YWx1ZSBtdXN0IGJlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMC4wIHRvIDEuMC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZvbHVtZSh2b2x1bWU6IG51bWJlcik6IHZvaWQge31cblxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRSYXRlKHNwZWVkUmF0ZTogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTdGFydHMgcmVjb3JkaW5nIGFuIGF1ZGlvIGZpbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzdGFydFJlY29yZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcFJlY29yZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFBhdXNlcyByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHBhdXNlUmVjb3JkKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVzdW1lcyByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHJlc3VtZVJlY29yZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHBsYXlpbmcgYW4gYXVkaW8gZmlsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHN0b3AoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgdHlwZSBNZWRpYVN0YXR1c1VwZGF0ZUNhbGxiYWNrID0gKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUVycm9yIHtcbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2VcbiAgICovXG4gIG1lc3NhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogRXJyb3IgY29kZVxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBNRURJQV9TVEFUVVMge1xuICBOT05FID0gMCxcbiAgU1RBUlRJTkcsXG4gIFJVTk5JTkcsXG4gIFBBVVNFRCxcbiAgU1RPUFBFRCxcbn1cblxuZXhwb3J0IGVudW0gTUVESUFfRVJST1Ige1xuICBBQk9SVEVEID0gMSxcbiAgTkVUV09SSyxcbiAgREVDT0RFLFxuICBTVVBQT1JURUQsXG59XG5cbmV4cG9ydCB0eXBlIE1lZGlhRXJyb3JDYWxsYmFjayA9IChlcnJvcjogTWVkaWFFcnJvcikgPT4gdm9pZDtcblxuLyoqXG4gKiBAbmFtZSBNZWRpYVxuICogQHByZW1pZXIgbWVkaWFcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gcmVjb3JkIGFuZCBwbGF5IGJhY2sgYXVkaW8gZmlsZXMgb24gYSBkZXZpY2UuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBNZWRpYSwgTWVkaWFPYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL21lZGlhL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVkaWE6IE1lZGlhKSB7IH1cbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIENyZWF0ZSBhIE1lZGlhIGluc3RhbmNlLiAgRXhwZWN0cyBwYXRoIHRvIGZpbGUgb3IgdXJsIGFzIGFyZ3VtZW50XG4gKiAvLyBXZSBjYW4gb3B0aW9uYWxseSBwYXNzIGEgc2Vjb25kIGFyZ3VtZW50IHRvIHRyYWNrIHRoZSBzdGF0dXMgb2YgdGhlIG1lZGlhXG4gKlxuICogY29uc3QgZmlsZTogTWVkaWFPYmplY3QgPSB0aGlzLm1lZGlhLmNyZWF0ZSgnZmlsZS5tcDMnKTtcbiAqXG4gKiAvLyB0byBsaXN0ZW4gdG8gcGx1Z2luIGV2ZW50czpcbiAqXG4gKiBmaWxlLm9uU3RhdHVzVXBkYXRlLnN1YnNjcmliZShzdGF0dXMgPT4gY29uc29sZS5sb2coc3RhdHVzKSk7IC8vIGZpcmVzIHdoZW4gZmlsZSBzdGF0dXMgY2hhbmdlc1xuICpcbiAqIGZpbGUub25TdWNjZXNzLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZygnQWN0aW9uIGlzIHN1Y2Nlc3NmdWwnKSk7XG4gKlxuICogZmlsZS5vbkVycm9yLnN1YnNjcmliZShlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3IhJywgZXJyb3IpKTtcbiAqXG4gKiAvLyBwbGF5IHRoZSBmaWxlXG4gKiBmaWxlLnBsYXkoKTtcbiAqXG4gKiAvLyBwYXVzZSB0aGUgZmlsZVxuICogZmlsZS5wYXVzZSgpO1xuICpcbiAqIC8vIGdldCBjdXJyZW50IHBsYXliYWNrIHBvc2l0aW9uXG4gKiBmaWxlLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHBvc2l0aW9uKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcbiAqIH0pO1xuICpcbiAqIC8vIGdldCBmaWxlIGR1cmF0aW9uXG4gKiBsZXQgZHVyYXRpb24gPSBmaWxlLmdldER1cmF0aW9uKCk7XG4gKiBjb25zb2xlLmxvZyhkdXJhdGlvbik7XG4gKlxuICogLy8gc2tpcCB0byAxMCBzZWNvbmRzIChleHBlY3RzIGludCB2YWx1ZSBpbiBtcylcbiAqIGZpbGUuc2Vla1RvKDEwMDAwKTtcbiAqXG4gKiAvLyBzdG9wIHBsYXlpbmcgdGhlIGZpbGVcbiAqIGZpbGUuc3RvcCgpO1xuICpcbiAqIC8vIHJlbGVhc2UgdGhlIG5hdGl2ZSBhdWRpbyByZXNvdXJjZVxuICogLy8gUGxhdGZvcm0gUXVpcmtzOlxuICogLy8gaU9TIHNpbXBseSBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgYW5kIHRoZSBvbGQgb25lIHdpbGwgYmUgb3ZlcndyaXR0ZW5cbiAqIC8vIEFuZHJvaWQgeW91IG11c3QgY2FsbCByZWxlYXNlKCkgdG8gZGVzdHJveSBpbnN0YW5jZXMgb2YgbWVkaWEgd2hlbiB5b3UgYXJlIGRvbmVcbiAqIGZpbGUucmVsZWFzZSgpO1xuICpcbiAqXG4gKlxuICogLy8gUmVjb3JkaW5nIHRvIGEgZmlsZVxuICogY29uc3QgZmlsZTogTWVkaWFPYmplY3QgPSB0aGlzLm1lZGlhLmNyZWF0ZSgncGF0aC90by9maWxlLm1wMycpO1xuICpcbiAqIGZpbGUuc3RhcnRSZWNvcmQoKTtcbiAqXG4gKiBmaWxlLnN0b3BSZWNvcmQoKTtcbiAqXG4gKlxuICogYGBgXG4gKlxuICogU29tZSBoaW50cyBpZiB5b3UgYXJlIHVzaW5nIGlPUyBhbmQgcmVjb3JkaW5nIGRvZXNuJ3Qgd29yazpcbiAqIDEuKSBUcnkgdG8gdXNlIGEgYWJzb2x1dGUgZmlsZSBwYXRoIGJ1dCByZW1vdmUgYmVnaW5uaW5nIFwiZmlsZTovL1wiLlxuICogVGhlbiBpdCBsb29rcyBsaWtlOiBgL3Zhci9tb2JpbGUvQ29udGFpbmVycy9EYXRhL0FwcGxpY2F0aW9uL0FGNDM4QjhCLTc3MjQtNEZCQi04RTY5LTA4MzQ2MzIyNEZDNC90bXAvbXlfZmlsZS5tNGFgXG4gKiBFeGFtcGxlOiBgdGhpcy5tZWRpYS5jcmVhdGUodGhpcy5maWxlLnRlbXBEaXJlY3RvcnkucmVwbGFjZSgvXmZpbGU6XFwvXFwvLywgJycpICsgJ215X2ZpbGUubTRhJylgXG4gKiAyLikgSWYgdGhhdCdzIG5vdCB3b3JraW5nLCB0b28sIGNyZWF0ZSB0aGUgZmlsZSBiZWZvcmUgdXNpbmcuXG4gKiBFeGFtcGxlOlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTWVkaWEsIE1lZGlhT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9tZWRpYS9uZ3gnO1xuICogaW1wb3J0IHsgRmlsZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS9uZ3gnO1xuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVkaWE6IE1lZGlhLCBwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmlsZS5jcmVhdGVGaWxlKHRoaXMuZmlsZS50ZW1wRGlyZWN0b3J5LCAnbXlfZmlsZS5tNGEnLCB0cnVlKS50aGVuKCgpID0+IHtcbiAqICAgbGV0IGZpbGUgPSB0aGlzLm1lZGlhLmNyZWF0ZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeS5yZXBsYWNlKC9eZmlsZTpcXC9cXC8vLCAnJykgKyAnbXlfZmlsZS5tNGEnKTtcbiAqICAgZmlsZS5zdGFydFJlY29yZCgpO1xuICogICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBmaWxlLnN0b3BSZWNvcmQoKSwgMTAwMDApO1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGZpbmQgdGhlIHJlYXNvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtbmF0aXZlL2lzc3Vlcy8xNDUyI2lzc3VlY29tbWVudC0yOTk2MDU5MDZcbiAqIEBjbGFzc2VzXG4gKiBNZWRpYU9iamVjdFxuICogQGludGVyZmFjZXNcbiAqIE1lZGlhRXJyb3JcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNZWRpYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW1lZGlhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEnLFxuICBwbHVnaW5SZWY6ICdNZWRpYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVkaWEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8vIENvbnN0YW50c1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfTk9ORSA9IDA7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9TVEFSVElORyA9IDE7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9SVU5OSU5HID0gMjtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX1BBVVNFRCA9IDM7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9TVE9QUEVEID0gNDtcblxuICAvLyBlcnJvciBjb2Rlc1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfRVJSX0FCT1JURUQgPSAxO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfRVJSX05FVFdPUksgPSAyO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfRVJSX0RFQ09ERSA9IDM7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9FUlJfTk9ORV9TVVBQT1JURUQgPSA0O1xuXG4gIC8qKlxuICAgKiBPcGVuIGEgbWVkaWEgZmlsZVxuICAgKiBAcGFyYW0gc3JjIHtzdHJpbmd9IEEgVVJJIGNvbnRhaW5pbmcgdGhlIGF1ZGlvIGNvbnRlbnQuXG4gICAqIEByZXR1cm4ge01lZGlhT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKHNyYzogc3RyaW5nKTogTWVkaWFPYmplY3Qge1xuICAgIGxldCBpbnN0YW5jZTogYW55O1xuXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KE1lZGlhLmdldFBsdWdpblJlZigpLCBudWxsLCBNZWRpYS5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICAvLyBDcmVhdGVzIGEgbmV3IG1lZGlhIG9iamVjdFxuICAgICAgaW5zdGFuY2UgPSBuZXcgKE1lZGlhLmdldFBsdWdpbigpKShzcmMpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTWVkaWFPYmplY3QoaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=