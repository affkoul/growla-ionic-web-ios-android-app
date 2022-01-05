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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ZipOriginal = /** @class */ (function (_super) {
    __extends(ZipOriginal, _super);
    function ZipOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZipOriginal.prototype.unzip = function (sourceZip, destUrl, onProgress) { return cordova(this, "unzip", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    ZipOriginal.pluginName = "Zip";
    ZipOriginal.plugin = "cordova-plugin-zip";
    ZipOriginal.pluginRef = "zip";
    ZipOriginal.repo = "https://github.com/MobileChromeApps/cordova-plugin-zip";
    ZipOriginal.platforms = ["Android", "iOS"];
    return ZipOriginal;
}(IonicNativePlugin));
var Zip = new ZipOriginal();
export { Zip };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ppcC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQi9DLHVCQUFpQjs7OztJQVl4QyxtQkFBSyxhQUFDLFNBQWlCLEVBQUUsT0FBZSxFQUFFLFVBQXFCOzs7Ozs7Y0E1Q2pFO0VBZ0N5QixpQkFBaUI7U0FBN0IsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFppcFxuICogQGRlc2NyaXB0aW9uXG4gKiBBIENvcmRvdmEgcGx1Z2luIHRvIHVuemlwIGZpbGVzIGluIEFuZHJvaWQgYW5kIGlPUy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFppcCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvemlwL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB6aXA6IFppcCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy56aXAudW56aXAoJ3BhdGgvdG8vc291cmNlLnppcCcsICdwYXRoL3RvL2Rlc3QnLCAocHJvZ3Jlc3MpID0+IGNvbnNvbGUubG9nKCdVbnppcHBpbmcsICcgKyBNYXRoLnJvdW5kKChwcm9ncmVzcy5sb2FkZWQgLyBwcm9ncmVzcy50b3RhbCkgKiAxMDApICsgJyUnKSlcbiAqICAudGhlbigocmVzdWx0KSA9PiB7XG4gKiAgICBpZihyZXN1bHQgPT09IDApIGNvbnNvbGUubG9nKCdTVUNDRVNTJyk7XG4gKiAgICBpZihyZXN1bHQgPT09IC0xKSBjb25zb2xlLmxvZygnRkFJTEVEJyk7XG4gKiAgfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnWmlwJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4temlwJyxcbiAgcGx1Z2luUmVmOiAnemlwJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Nb2JpbGVDaHJvbWVBcHBzL2NvcmRvdmEtcGx1Z2luLXppcCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBaaXAgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFeHRyYWN0cyBmaWxlcyBmcm9tIGEgWklQIGFyY2hpdmVcbiAgICogQHBhcmFtIHNvdXJjZVppcCB7c3RyaW5nfSBTb3VyY2UgWklQIGZpbGVcbiAgICogQHBhcmFtIGRlc3RVcmwge3N0cmluZ30gRGVzdGluYXRpb24gZm9sZGVyXG4gICAqIEBwYXJhbSBvblByb2dyZXNzIHtGdW5jdGlvbn0gb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIG9uIHByb2dyZXNzIHVwZGF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBudW1iZXIuIDAgaXMgc3VjY2VzcywgLTEgaXMgZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgfSlcbiAgdW56aXAoc291cmNlWmlwOiBzdHJpbmcsIGRlc3RVcmw6IHN0cmluZywgb25Qcm9ncmVzcz86IEZ1bmN0aW9uKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==