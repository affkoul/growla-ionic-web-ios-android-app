(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-site-site-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <h1>{{ 'core.login.connecttomoodle' | translate }}</h1>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"fas-cog\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <div class=\"ion-text-center ion-padding ion-margin-bottom core-login-site-logo\"\n        [class.hidden]=\"hasSites || enteredSiteUrl\">\n        <img src=\"assets/img/login_logo.png\" class=\"avatar-full login-logo\" role=\"presentation\" alt=\"\">\n    </div>\n    <form [formGroup]=\"siteForm\" (ngSubmit)=\"connect($event, siteForm.value.siteUrl)\" *ngIf=\"!fixedSites\" #siteFormEl>\n        <!-- Form to input the site URL if there are no fixed sites. -->\n        <ng-container *ngIf=\"siteSelector == 'url'\">\n            <ion-item>\n                <ion-label position=\"stacked\">\n                    <h2>{{ 'core.login.siteaddress' | translate }}</h2>\n                </ion-label>\n                <ion-input name=\"url\" type=\"url\" placeholder=\"{{ 'core.login.siteaddressplaceholder' | translate }}\"\n                    formControlName=\"siteUrl\" [core-auto-focus]=\"showKeyboard && !showScanQR\">\n                </ion-input>\n            </ion-item>\n        </ng-container>\n        <ng-container *ngIf=\"siteSelector != 'url'\">\n            <ion-item>\n                <ion-label position=\"stacked\">\n                    <h2>{{ 'core.login.siteaddress' | translate }}</h2>\n                </ion-label>\n                <ion-input name=\"url\" placeholder=\"{{ 'core.login.siteaddressplaceholder' | translate }}\" formControlName=\"siteUrl\"\n                    [core-auto-focus]=\"showKeyboard && !showScanQR\" (ionChange)=\"searchSite($event, siteForm.value.siteUrl)\">\n                </ion-input>\n            </ion-item>\n\n            <ion-list [class.hidden]=\"!hasSites && !enteredSiteUrl\" class=\"core-login-site-list\">\n                <ion-item lines=\"none\" class=\"core-login-site-list-title\">\n                    <ion-label>\n                        <h2 class=\"item-heading\">{{ 'core.login.selectsite' | translate }}</h2>\n                    </ion-label>\n                </ion-item>\n                <ion-item button *ngIf=\"enteredSiteUrl\" (click)=\"connect($event, enteredSiteUrl.url)\"\n                    [attr.aria-label]=\"'core.login.connect' | translate\" detail=\"true\" class=\"core-login-entered-site\">\n                    <ion-thumbnail slot=\"start\" aria-hidden=\"true\">\n                        <ion-icon name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\n                    </ion-thumbnail>\n                    <ion-label>\n                        <h2 class=\"ion-text-wrap\">{{ 'core.login.yourenteredsite' | translate }}</h2>\n                        <p>{{enteredSiteUrl.noProtocolUrl}}</p>\n                    </ion-label>\n                </ion-item>\n\n                <div class=\"core-login-site-list-found\" [class.hidden]=\"!hasSites\" [class.dimmed]=\"loadingSites\">\n                    <div *ngIf=\"loadingSites\" class=\"core-login-site-list-loading\">\n                        <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\n                    </div>\n                    <ng-container *ngFor=\"let site of sites\">\n                        <ng-container *ngTemplateOutlet=\"sitelisting; context: {site: site}\"></ng-container>\n                    </ng-container>\n                </div>\n            </ion-list>\n\n            <div *ngIf=\"!hasSites && loadingSites\" class=\"core-login-site-nolist-loading\">\n                <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\n            </div>\n        </ng-container>\n\n        <ion-item *ngIf=\"siteSelector == 'url'\" lines=\"none\">\n            <ion-label>\n                <ion-button expand=\"block\" [disabled]=\"!siteForm.valid\" class=\"ion-text-wrap\" type=\"submit\">\n                    {{ 'core.login.connect' | translate }}\n                </ion-button>\n            </ion-label>\n        </ion-item>\n    </form>\n\n    <ng-container *ngIf=\"fixedSites\">\n        <!-- Pick the site from a list of fixed sites. -->\n        <ion-list *ngIf=\"siteSelector == 'list'\">\n            <ion-item lines=\"none\">\n                <ion-label>\n                    <h2 class=\"item-heading\">{{ 'core.login.selectsite' | translate }}</h2>\n                </ion-label>\n            </ion-item>\n            <ion-searchbar *ngIf=\"fixedSites.length > 4\" [(ngModel)]=\"filter\" (ionInput)=\"filterChanged($event)\"\n                (ionCancel)=\"filterChanged()\" [placeholder]=\"'core.login.findyoursite' | translate\">\n            </ion-searchbar>\n            <ng-container *ngFor=\"let site of filteredSites\">\n                <ng-container *ngTemplateOutlet=\"sitelisting; context: {site: site}\"></ng-container>\n            </ng-container>\n        </ion-list>\n    </ng-container>\n\n    <ng-container *ngIf=\"showScanQR && !hasSites && !enteredSiteUrl\">\n        <div class=\"ion-text-center ion-padding ion-margin-top\">{{ 'core.login.or' | translate }}</div>\n        <ion-button expand=\"block\" color=\"light\" class=\"ion-margin\" lines=\"none\" (click)=\"showInstructionsAndScanQR()\"\n            aria-haspopup=\"dialog\">\n            <ion-icon slot=\"start\" name=\"fas-qrcode\" aria-hidden=\"true\"></ion-icon>\n            <ion-label>{{ 'core.scanqr' | translate }}</ion-label>\n        </ion-button>\n    </ng-container>\n\n    <!-- Help. -->\n    <ion-button\n        class=\"ion-margin-top core-login-need-help core-button-as-link ion-text-wrap\"\n        (click)=\"showHelp()\"\n        aria-haspopup=\"dialog\"\n        expand=\"block\"\n        fill=\"clear\"\n        color=\"dark\"\n    >\n        <ion-label>{{ 'core.needhelp' | translate }}</ion-label>\n    </ion-button>\n</ion-content>\n\n<!-- Template site selector. -->\n<ng-template #sitelisting let-site=\"site\">\n    <ion-item button (click)=\"connect($event, site.url, site)\" [attr.aria-label]=\"site.name\" detail=\"true\">\n        <ion-thumbnail *ngIf=\"siteFinderSettings.displayimage\" slot=\"start\">\n            <img [src]=\"site.imageurl\" *ngIf=\"site.imageurl\" onError=\"this.src='assets/icon/icon.png'\" alt=\"\" role=\"presentation\">\n            <img src=\"assets/icon/icon.png\" *ngIf=\"!site.imageurl\" class=\"core-login-default-icon\" alt=\"\" role=\"presentation\">\n        </ion-thumbnail>\n        <ion-label>\n            <p *ngIf=\"site.title\" class=\"item-heading ion-text-wrap\">{{site.title}}</p>\n            <p *ngIf=\"site.noProtocolUrl\">{{site.noProtocolUrl}}</p>\n            <p *ngIf=\"site.location\">{{site.location}}</p>\n        </ion-label>\n    </ion-item>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'core.settings.preferences' | translate}}</h1>\n        <ion-buttons slot=\"end\">\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!handlers.loaded\" (ionRefresh)=\"refreshData($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n        <core-loading [hideUntil]=\"handlers.loaded\">\n            <ion-list>\n                <ion-item *ngIf=\"siteInfo\" class=\"ion-text-wrap\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{siteInfo!.fullname}}</p>\n                        <p>\n                            <core-format-text [text]=\"siteName\" contextLevel=\"system\" [contextInstanceId]=\"0\"\n                                [wsNotFiltered]=\"true\"></core-format-text>\n                        </p>\n                        <!-- <p>{{ siteUrl }}</p> -->\n                    </ion-label>\n                </ion-item>\n                <core-spacer></core-spacer>\n\n                <div  *ngFor=\"let handler of handlers.items\" >\n                <ion-item *ngIf=\"handler.title!='addon.notifications.notifications'\" [ngClass]=\"['core-settings-handler', handler.class]\"\n                    [attr.aria-label]=\"handler.title | translate\" detail=\"true\" (click)=\"handlers.select(handler)\" button\n                    [attr.aria-current]=\"handlers.getItemAriaCurrent(handler)\" >\n\n                        <ion-icon [name]=\"handler.icon\" slot=\"start\" *ngIf=\"handler.icon\" aria-hidden=\"true\">\n                        </ion-icon>\n                        <ion-label>\n                            <p class=\"item-heading\">{{ handler.title | translate}}</p>\n                            <!-- <div >{{handler.title}}</div> -->\n                        </ion-label>\n                    </ion-item>\n                </div>\n\n                <ion-card>\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"spaceUsage\">\n                        <ion-label>\n                            <p class=\"item-heading ion-text-wrap\">{{ 'core.settings.spaceusage' | translate }}</p>\n                            <p *ngIf=\"spaceUsage.spaceUsage\">{{ spaceUsage.spaceUsage | coreBytesToSize }}</p>\n                        </ion-label>\n                        <ion-button fill=\"clear\" [attr.aria-label]=\"'core.info' | translate\" (click)=\"showSpaceInfo()\" slot=\"end\">\n                            <ion-icon name=\"fas-info-circle\" color=\"info\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"deleteSiteStorage()\"\n                            [hidden]=\"spaceUsage.spaceUsage! + spaceUsage.cacheEntries! <= 0\"\n                            [attr.aria-label]=\"'core.settings.deletesitefilestitle' | translate\">\n                            <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                    <ion-item class=\"ion-text-wrap\">\n                        <ion-label>\n                            <p class=\"item-heading\">{{ 'core.settings.synchronizenow' | translate }}</p>\n                        </ion-label>\n                        <ion-button fill=\"clear\" [attr.aria-label]=\"'core.info' | translate\" (click)=\"showSyncInfo()\" slot=\"end\">\n                            <ion-icon name=\"fas-info-circle\" color=\"info\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <core-button-with-spinner [loading]=\"isSynchronizing()\" slot=\"end\">\n                            <ion-button fill=\"clear\" (click)=\"synchronize()\"\n                                [attr.aria-label]=\"'core.settings.synchronizenow' | translate\">\n                                <ion-icon name=\"fas-sync-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                            </ion-button>\n                        </core-button-with-spinner>\n                    </ion-item>\n                </ion-card>\n            </ion-list>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/login/pages/site/site.module.ts":
/*!***********************************************************!*\
  !*** ./src/core/features/login/pages/site/site.module.ts ***!
  \***********************************************************/
/*! exports provided: CoreLoginSitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePageModule", function() { return CoreLoginSitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site */ "./src/core/features/login/pages/site/site.ts");
// (C) Copyright 2015 GROWLA Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





const routes = [
    {
        path: '',
        component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitePage"],
    },
];
let CoreLoginSitePageModule = class CoreLoginSitePageModule {
};
CoreLoginSitePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _site__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitePage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginSitePageModule);



/***/ }),

/***/ "./src/core/features/login/pages/site/site.scss":
/*!******************************************************!*\
  !*** ./src/core/features/login/pages/site/site.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n.item-input:last-child {\n  margin-bottom: 20px;\n}\n.item.core-login-need-help {\n  margin-top: 16px;\n}\n.item.core-login-site-qrcode .item-inner {\n  border-bottom: 0;\n}\n.core-login-site-connect {\n  margin-top: 1.4rem;\n}\n.item ion-thumbnail {\n  min-width: 50px;\n  min-height: 50px;\n  width: 50px;\n  height: 50px;\n  border-radius: 20%;\n  box-shadow: 0 0 4px #eee;\n  text-align: center;\n  overflow: hidden;\n}\n.item ion-thumbnail img {\n  max-height: 50px;\n  max-width: -webkit-fit-content;\n  max-width: fit-content;\n  width: auto;\n  height: auto;\n  margin: 0 auto;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  object-fit: cover;\n  object-position: 50% 50%;\n}\n.item ion-thumbnail ion-icon {\n  margin: 0 auto;\n  font-size: 35px;\n  height: 50px;\n}\n.core-login-site-logo,\n.core-login-site-list,\n.core-login-site-list-found {\n  transition-delay: 0s;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.7s ease-in-out;\n  max-height: 9999px;\n}\n.core-login-site-logo.hidden,\n.core-login-site-list.hidden,\n.core-login-site-list-found.hidden {\n  opacity: 0;\n  visibility: hidden;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  max-height: 0;\n}\n.core-login-site-list-found.dimmed {\n  pointer-events: none;\n  position: relative;\n}\n.core-login-site-list-loading {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 1;\n}\n.core-login-site-list-loading ion-spinner {\n  margin: 0 auto;\n}\n.core-login-site-nolist-loading {\n  margin-top: 16px;\n  text-align: center;\n}\n.item.core-login-site-list-title ion-label, .item.core-login-site-list-title ion-label h2.item-heading {\n  margin-top: 0;\n}\n@media (min-width: 768px) {\n  ion-content > * {\n    max-width: 600px;\n    margin: 0 auto;\n    width: 100%;\n  }\n\n  ion-content .core-login-site-logo {\n    margin-top: 20%;\n  }\n  ion-content .core-login-site-logo.hidden {\n    margin-top: 0;\n  }\n}\n.core-login-entered-site {\n  background-color: var(--gray-lighter);\n}\n.core-login-entered-site ion-thumbnail {\n  box-shadow: 0 0 4px #ddd;\n}\n.core-login-default-icon {\n  filter: grayscale(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMuY3VzdG9tLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy52YXJpYWJsZXMuc2NzcyIsInNyYy9jb3JlL2ZlYXR1cmVzL2xvZ2luL3BhZ2VzL3NpdGUvc2l0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUF1RkE7Ozs7RUFBQTtBQ3JGQTtFQUNJLG1CQUFBO0FBK0JKO0FBM0JJO0VBQ0ksZ0JBQUE7QUE4QlI7QUEzQlE7RUFDSSxnQkFBQTtBQTZCWjtBQWxCQTtFQUNJLGtCQUFBO0FBcUJKO0FBbEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXFCSjtBQW5CSTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBcUJSO0FBbkJJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBcUJSO0FBakJBOzs7RUFHSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFvQko7QUFsQkk7OztFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBc0JSO0FBbEJBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQXFCSjtBQWxCQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7QUFxQko7QUFwQkk7RUFDSSxjQUFBO0FBc0JSO0FBbEJBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQXFCSjtBQWpCSTtFQUNJLGFBQUE7QUFvQlI7QUFoQkE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7RUFtQk47O0VBaEJFO0lBQ0ksZUFBQTtFQW1CTjtFQWxCTTtJQUNJLGFBQUE7RUFvQlY7QUFDRjtBQWhCQTtFQUNJLHFDQUFBO0FBa0JKO0FBakJJO0VBQ0ksd0JBQUE7QUFtQlI7QUFmQTtFQUNJLHVCQUFBO0FBa0JKIiwiZmlsZSI6InNyYy9jb3JlL2ZlYXR1cmVzL2xvZ2luL3BhZ2VzL3NpdGUvc2l0ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgdGhlIGRpZmZlcmVudCBmaWxlcyB5b3Ugc2hvdWxkIGltcG9ydCB0byB1c2UgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuXG4kZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuJGFzc2V0cy1wYXRoOiBcIi4uL2Fzc2V0c1wiO1xuQGltcG9ydCBcIi4vZ2xvYmFscy5taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vZ2xvYmFscy5taXhpbnMuaW9uaWMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vZ2xvYmFscy5jdXN0b20uc2Nzc1wiO1xuQGltcG9ydCBcIi4vZ2xvYmFscy52YXJpYWJsZXMuc2Nzc1wiO1xuIiwiLypcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICovXG5cbiBAbWl4aW4gY29yZS1mb2N1cygpIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIEBpbmNsdWRlIGNvcmUtZm9jdXMtc3R5bGUoKTtcbiAgICB9XG4gfVxuXG4gQG1peGluIGNvcmUtZm9jdXMtc3R5bGUoKSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIHZhcigtLWExMXktZm9jdXMtd2lkdGgpIDFweCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbiAgICAvLyBUaGlja2VyIG9wdGlvbjpcbiAgICAvLyBib3JkZXI6IHZhcigtLWExMXktZm9jdXMtd2lkdGgpIHNvbGlkIHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xufVxuXG5AbWl4aW4gY29yZS10cmFuc2l0aW9uKCR3aGVyZTogYWxsLCAkdGltZTogNTAwbXMpIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogJHdoZXJlICR0aW1lIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XG59XG5cbkBtaXhpbiBwdXNoLWFycm93LWNvbG9yKCRjb2xvcjogZGVkZWRlLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICAgJHN2ZzogXCI8c3ZnJTIweG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUyMHZpZXdCb3g9JzAlMjAwJTIwMTIlMjAyMCc+PHBhdGglMjBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyUyMGZpbGw9JyUyMyN7JGNvbG9yfScvPjwvc3ZnPlwiO1xuICAgIEBpZiAkZmxpcC1ydGwgIT0gdHJ1ZSB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHN2Z31cIik7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgJGZsaXBwZWQtc3ZnOiBcIjxzdmclMjB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTIwdmlld0JveD0nMCUyMDAlMjAxMiUyMDIwJz48cGF0aCUyMHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIwLCUyMDApJTIwc2NhbGUoLTEsJTIwMSknJTIwZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweiclMjBmaWxsPSclMjMjeyRjb2xvcn0nLz48L3N2Zz5cIjtcblxuICAgICAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skc3ZnfVwiKTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXN2Z31cIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICBib3JkZXItbGVmdDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG59XG5cblxuQG1peGluIGJvcmRlci1lbmQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICBib3JkZXItcmlnaHQ6ICRweCAkdHlwZSAkY29sb3I7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICBib3JkZXItbGVmdDogJHB4ICR0eXBlICRjb2xvcjtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skcHh9KTtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24tZW52LCAkdHlwZSwgJGNvbG9yKTtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLWVuZCgkcHgsICR0eXBlLCAkY29sb3IpIHtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRweH0pO1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb24tZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24tZW52LCAkdHlwZSwgJGNvbG9yKTtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQtZW52OiBudWxsO1xuICAgICRzYWZlLWFyZWEtZW5kLWVudjogbnVsbDtcblxuICAgIEBpZiAoJGVuZCkge1xuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xuICAgIH1cbiAgICBAaWYgKCRzdGFydCkge1xuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQtZW52LCAkc2FmZS1hcmVhLWVuZC1lbnYpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0LWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpICsgI3skc3RhcnR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydC1lbnYsICRlbmQpO1xuICAgIH1cbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgJHNhZmUtYXJlYS1lbmQtZW52OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQtZW52KTtcbiAgICB9XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICAgIEBpbmNsdWRlIHNhZmUtcG9zaXRpb24taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xuICAgIHRvcDogJHRvcDtcbiAgICBib3R0b206ICRib3R0b207XG59XG5cbkBtaXhpbiBjb3JlLWhlYWRpbmdzKCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgICBoMiwgLml0ZW0taGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5AbWl4aW4gY29yZS1hcy1pdGVtcygpIHtcbiAgICAuaXRlbS1tZC5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpc3QtbWQtYm9yZGVyLWNvbG9yO1xuICAgIH1cblxuICAgIC5pdGVtLWlvcy5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAkaGFpcmxpbmVzLXdpZHRoIHNvbGlkICRsaXN0LWlvcy1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIC5pdGVtID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIH1cbn1cblxuQG1peGluIGNvcmUtaXRlbXMoKSB7XG4gICAgJi5pdGVtLW1kLml0ZW0tYmxvY2sgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlzdC1tZC1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgJi5pdGVtLWlvcy5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAkaGFpcmxpbmVzLXdpZHRoIHNvbGlkICRsaXN0LWlvcy1ib3JkZXItY29sb3I7XG4gICAgfVxuXG4gICAgJi5pdGVtLWJsb2NrOmxhc3QtY2hpbGQgPiAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxufVxuXG5AbWl4aW4gZGFya21vZGUoKSB7XG4gICAgJHJvb3Q6ICN7Jn07XG5cbiAgICBAYXQtcm9vdCBib2R5LmRhcmsge1xuICAgICAgICAjeyRyb290fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XG4gICAgZmxleDogMCAwICR3aWR0aDtcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIC0tdmVydGljYWwtbWFyZ2luOiAxMHB4O1xuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSk7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xuICAgICAgICBtYXJnaW46IHZhcigtLXZlcnRpY2FsLW1hcmdpbikgdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgICAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0LXdyYXAgaW9uLWxhYmVsIHtcbiAgICAgICAgLml0ZW0taGVhZGluZywgaDIsIHAge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBDb2xvciBtaXhpbnMuXG5AZnVuY3Rpb24gZ2V0X2JyaWdodG5lc3MoJGNvbG9yKSB7XG4gICAgQHJldHVybiAocmVkKCRjb2xvcikgKyBncmVlbigkY29sb3IpICsgYmx1ZSgkY29sb3IpKSAvIDM7XG59XG5cbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3IoJGNvbG9yKSB7XG4gICAgJGJyaWdodG5lc3M6IGdldF9icmlnaHRuZXNzKCRjb2xvcik7XG5cbiAgICBAcmV0dXJuIGlmKCRicmlnaHRuZXNzIDwgMTI3LCB3aGl0ZSwgYmxhY2spO1xufVxuIiwiLypcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqIEV4dHJhY3RlZCBmcm9tIGlvbmljLm1peGlucy5zY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXG4gKi9cblxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIGEgZml4ZWQgd2lkdGggZm9yIHRoZSBncmlkIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFrZS1ncmlkLXdpZHRocygkd2lkdGhzOiAkZ3JpZC13aWR0aHMsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICBAZWFjaCAkYnJlYWtwb2ludCwgJHdpZHRoIGluICR3aWR0aHMge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xuICAgICAgd2lkdGg6ICR3aWR0aDtcbiAgICB9XG4gIH1cblxuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8vIEFkZHMgcGFkZGluZyB0byB0aGUgZWxlbWVudCBiYXNlZCBvbiBicmVha3BvaW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFrZS1icmVha3BvaW50LXBhZGRpbmcoJHBhZGRpbmdzKSB7XG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRwYWRkaW5ncykge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICRwYWRkaW5nOiBtYXAtZ2V0KCRwYWRkaW5ncywgJGJyZWFrcG9pbnQpO1xuXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gR2V0cyB0aGUgYWN0aXZlIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gYSB2YXJpYXRpb24uIEFscGhhIGlzIG9wdGlvbmFsLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBjdXJyZW50LWNvbG9yKGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1iYXNlKVxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGN1cnJlbnQtY29sb3IoJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsKSB7XG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XG4gICAgQHJldHVybiB2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xuICB9XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgMTIlKTtcbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgMTAlKTtcbn1cblxuLy8gQ29udmVydHMgYSBjb2xvciB0byBhIGNvbW1hIHNlcGFyYXRlZCByZ2IuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xuICBAcmV0dXJuICN7cmVkKCRjb2xvcil9LCN7Z3JlZW4oJGNvbG9yKX0sI3tibHVlKCRjb2xvcil9O1xufVxuXG5cbiAvLyBJb25pYyBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcbi8vIGNvbG9ycyBtYXBcblxuQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3JzKSB7XG4gICAgJGJhc2U6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xuXG4gICAgJGNvbnRyYXN0OiBnZXRfY29udHJhc3RfY29sb3IoJGJhc2UpO1xuICAgICRzaGFkZTogZ2V0LWNvbG9yLXNoYWRlKCRiYXNlKTtcbiAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQoJGJhc2UpO1xuXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9LCAjeyRiYXNlfSk7XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQ6ICN7JHRpbnR9O1xuXG4gICAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XG4gICAgICAgIC0taW9uLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZSk7XG4gICAgICAgIC0taW9uLWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYik7XG4gICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QpO1xuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IpO1xuICAgICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlKTtcbiAgICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQpO1xuICAgIH1cbn1cblxuQG1peGluIGlucHV0LWNvdmVyKCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xuICAgIEBpbmNsdWRlIG1hcmdpbigwKTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAmOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbn1cblxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgY29udGVudDogXCJcIjtcblxuICAgIG9wYWNpdHk6IDA7XG59XG5cbi8vIEZvbnQgc21vb3RoaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcbkBmdW5jdGlvbiBpbmRleC10by1rZXkoJG1hcCwgJGluZGV4KSB7XG4gICAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xuXG4gICAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XG59XG5cblxuLy8gQnJlYWtwb2ludCBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuXG4gICAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgICBAaWYgJG1pbiB7XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAgICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICAgIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgICRtYXg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gICAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gICAgQGlmICRtYXgge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5cbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXG4vL1xuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbXVsdGktZGlyKCkge1xuICAgIEBjb250ZW50O1xuXG4gICAgLy8gJHJvb3Q6ICN7Jn07XG4gICAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xuICAgIC8vICAgI3skcm9vdH0ge1xuICAgIC8vICAgICBAY29udGVudDtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG59XG5cbkBtaXhpbiBydGwoKSB7XG4gICAgJHJvb3Q6ICN7Jn07XG5cbiAgICBAYXQtcm9vdCBbZGlyPXJ0bF0ge1xuICAgICAgICAjeyRyb290fSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGx0cigpIHtcbiAgICBAY29udGVudDtcbn1cblxuXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcbiAgICAkdmlld0JveDogc3RyLXNwbGl0KHN0ci1leHRyYWN0KCRzdmcsIFwidmlld0JveD0nXCIsIFwiJ1wiKSwgXCIgXCIpO1xuXG4gICAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xuICAgICAgICAkZmxpcHBlZC11cmw6ICRzdmc7XG4gICAgICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwYXRoXCIsIFwiPHBhdGggI3skdHJhbnNmb3JtfVwiKTtcbiAgICAgICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XG4gICAgICAgICRmbGlwcGVkLXVybDogdXJsLWVuY29kZSgkZmxpcHBlZC11cmwpO1xuXG4gICAgICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtdXJsfVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHktaG9yaXpvbnRhbCgkcHJvcCwgJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XG4gICAgICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAgICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgICB9IEBlbHNlIHtcbiAgICAgICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgICAgICBAYXQtcm9vdCB7XG4gICAgICAgICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XG4gICAgICAgICAgICAgICAgJiB7XG4gICAgICAgICAgICAgICAgICAgIEBpZiAkc3RhcnQgIT0gbnVsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tZW5kOiAkZW5kO1xuICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIHByb3BlcnR5IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRwcm9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge2Jvb2xlYW59ICRjb250ZW50IGluY2x1ZGUgY29udGVudCBvciB1c2UgZGVmYXVsdFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xuICAgICN7JHByb3B9LXRvcDogJHRvcDtcbiAgICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwobWFyZ2luLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIG1hcmdpbigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xuICAgIEBpZiAkc3RhcnQgPT0gJGVuZCB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgICAgICAgIHJpZ2h0OiAkZW5kO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgICAgICAgIHJpZ2h0OiAkZW5kO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICAgICAgcmlnaHQ6IHVuc2V0O1xuXG4gICAgICAgICAgICBsZWZ0OiAkZW5kO1xuICAgICAgICAgICAgcmlnaHQ6ICRzdGFydDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICAgIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgICB0b3A6ICR0b3A7XG4gICAgYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xuICAgIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xuICAgICRvdGhlci1kaXI6IG51bGw7XG5cbiAgICBAaWYgJGRpciA9PSBsdHIge1xuICAgICAgICAkb3RoZXItZGlyOiBydGw7XG4gICAgfSBAZWxzZSB7XG4gICAgICAgICRvdGhlci1kaXI6IGx0cjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgIGRpcmVjdGlvbjogJGRpcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XG4gICAgfVxufVxuXG4vLyBBZGQgZmxvYXQgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHNpZGVcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxuQG1peGluIGZsb2F0KCRzaWRlLCAkZGVjb3JhdG9yOiBudWxsKSB7XG4gICAgQGlmICRzaWRlID09IHN0YXJ0IHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0ICRkZWNvcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGJhY2tncm91bmQtcG9zaXRpb24oJGhvcml6b250YWwsICRob3Jpem9udGFsLWFtb3VudDogbnVsbCwgJHZlcnRpY2FsOiBudWxsLCAkdmVydGljYWwtYW1vdW50OiBudWxsKSB7XG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XG4gICAgICAgICRob3Jpem9udGFsLWx0cjogbnVsbDtcbiAgICAgICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xuICAgICAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xuICAgICAgICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xuICAgICAgICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1sdHI6IHJpZ2h0O1xuICAgICAgICAgICAgJGhvcml6b250YWwtcnRsOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xuICAgIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xuICAgICRleHRyYTogbnVsbDtcblxuICAgICR4OiBudWxsO1xuICAgICRsdHItdHJhbnNsYXRlOiBudWxsO1xuICAgICRydGwtdHJhbnNsYXRlOiBudWxsO1xuXG4gICAgQGVhY2ggJHRyYW5zZm9ybSBpbiAkdHJhbnNmb3JtcyB7XG4gICAgICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xuICAgICAgICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xuICAgICAgICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcblxuICAgICAgICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcblxuICAgICAgICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xuICAgICAgICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xuICAgICAgICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xuXG4gICAgICAgICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAgICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICBAaWYgJGV4dHJhID09IG51bGwge1xuICAgICAgICAgICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcbiAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgICRleHRyYTogJGV4dHJhICR0cmFuc2Zvcm07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICAgICAgfVxuICAgIH0gQGVsc2Uge1xuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJHJ0bC10cmFuc2xhdGUgJGV4dHJhO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cbiAqL1xuIiwiLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJGJsYWNrOiAgICAgICAgICAgIzI4MjgyOCAhZGVmYXVsdDsgLy8gSGVhZGluZ3MsIHN0YW5kYXJkIHRleHQuXG4kZ3JheS1kYXJrZXI6ICAgICAjNjg2NTY2ICFkZWZhdWx0O1xuJGdyYXktZGFyazogICAgICAgIzllOWU5ZSAhZGVmYXVsdDtcbiRncmF5OiAgICAgICAgICAgICNkZGRkZGQgIWRlZmF1bHQ7XG4kZ3JheS1saWdodDogICAgICAjRjVGNkZBICFkZWZhdWx0OyAvLyBCYWNrZ3JvdW5kLlxuJGdyYXktbGlnaHRlcjogICAgI2Y1ZjVmNSAhZGVmYXVsdDtcbiR3aGl0ZTogICAgICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7IC8vIEJhY2tncm91bmQsIHJldmVyc2VkIHRleHQuXG5cbiRibHVlOiAgICAgICAgICAgICMwMDY0ZDIgIWRlZmF1bHQ7IC8vIExpbmssIGJhY2tncm91bmQuXG4kYmx1ZS1saWdodDogICAgICBtaXgoJGJsdWUsIHdoaXRlLCAyMCUpICFkZWZhdWx0OyAvLyBCYWNrZ3JvdW5kLlxuJGJsdWUtZGFyazogICAgICAgZGFya2VuKCRibHVlLCAxMCUpICFkZWZhdWx0O1xuXG4kZ3JlZW46ICAgICAgICAgICAjNWU4MTAwICFkZWZhdWx0OyAvLyBBY2NlbnQuXG4kZ3JlZW4tbGlnaHQ6ICAgICBtaXgoJGdyZWVuLCB3aGl0ZSwgMjAlKSAhZGVmYXVsdDtcbiRncmVlbi1kYXJrOiAgICAgIGRhcmtlbigkZ3JlZW4sIDEwJSkgIWRlZmF1bHQ7XG5cbiRyZWQ6ICAgICAgICAgICAgICNjYjNkNGQgIWRlZmF1bHQ7XG4kcmVkLWxpZ2h0OiAgICAgICBtaXgoJHJlZCwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XG4kcmVkLWRhcms6ICAgICAgICBkYXJrZW4oJHJlZCwgMTAlKSAhZGVmYXVsdDtcblxuJHllbGxvdzogICAgICAgICAgIzRkYmVjMSAhZGVmYXVsdDsgLy8gQWNjZW50IChuZXZlciB0ZXh0KS5cbiR5ZWxsb3ctbGlnaHQ6ICAgIG1peCgkeWVsbG93LCB3aGl0ZSwgMjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctZGFyazogICAgIG1peCgkeWVsbG93LCBibGFjaywgNDAlKSAhZGVmYXVsdDtcblxuJGJyYW5kLWNvbG9yOiAgICAjNGRiZWMxICFkZWZhdWx0O1xuXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1yZ2I6ICAgICAgICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvcikgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICBtaXgoI2ZmZmZmZiwgIzAwMDAwMCwgMTAlKSAhZGVmYXVsdDsgLy8gIzFhMWExYVxuJGJhY2tncm91bmQtY29sb3ItZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kaW9uLWl0ZW0tYmFja2dyb3VuZDogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1yZ2I6ICBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZCkgIWRlZmF1bHQ7XG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiBtaXgoI2ZmZmZmZiwgIzAwMDAwMCwgMjAlKSAhZGVmYXVsdDsgLy8gIzMzMzMzM1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICRyZWQgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgJHllbGxvdyAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiRtZWRpdW06ICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgc3VjY2VzczogJHN1Y2Nlc3MsXG4gICAgd2FybmluZzogJHdhcm5pbmcsXG4gICAgZGFuZ2VyOiAgJGRhbmdlcixcbiAgICBpbmZvOiAkaW5mbyxcbiAgICBsaWdodDogJGxpZ2h0LFxuICAgIG1lZGl1bTogJG1lZGl1bSxcbiAgICBkYXJrOiAkZGFya1xuKSAhZGVmYXVsdDtcblxuJHByaW1hcnktZGFyazogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xuJGRhbmdlci1kYXJrOiAgICAgbWl4KCRyZWQsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJHdhcm5pbmctZGFyazogICAgbWl4KCR5ZWxsb3csIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJHN1Y2Nlc3MtZGFyazogICAgbWl4KCRncmVlbiwgd2hpdGUsIDQwJSkgIWRlZmF1bHQ7XG4kaW5mby1kYXJrOiAgICAgICBtaXgoJGJsdWUsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xuJGxpZ2h0LWRhcms6ICAgICAgJGRhcmsgIWRlZmF1bHQ7XG4kbWVkaXVtLWRhcms6ICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRkYXJrLWRhcms6ICAgICAgICRsaWdodCAhZGVmYXVsdDtcblxuJGNvbG9ycy1kYXJrOiAgKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LWRhcmssXG4gICAgc3VjY2VzczogJHN1Y2Nlc3MtZGFyayxcbiAgICB3YXJuaW5nOiAkd2FybmluZy1kYXJrLFxuICAgIGRhbmdlcjogJGRhbmdlci1kYXJrLFxuICAgIGluZm86ICRpbmZvLWRhcmssXG4gICAgbGlnaHQ6ICRsaWdodC1kYXJrLFxuICAgIG1lZGl1bTogJG1lZGl1bS1kYXJrLFxuICAgIGRhcms6ICRkYXJrLWRhcmssXG4pICFkZWZhdWx0O1xuXG4vKipcbiAqIExheW91dCBCcmVha3BvaW50c1xuICpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xuICovXG5cbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcbiAgICB4czogMCxcbiAgICBzbTogNTc2cHgsXG4gICAgbWQ6IDc2OHB4LFxuICAgIGxnOiA5OTJweCxcbiAgICB0YWJsZXQ6IDk5MnB4LFxuICAgIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xuJGNvcmUtZGQtcXVlc3Rpb24tY29sb3JzOiAjRkZGRkZGLCAjQjBDNERFLCAjRENEQ0RDLCAjRDhCRkQ4LCAjODdDRUZBLCAjREFBNTIwLCAjRkZENzAwLCAjRjBFNjhDICFkZWZhdWx0O1xuJGNvcmUtdGV4dC1oaWdodGxpZ2h0LWJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG5cbiRjb3JlLWZpeGVkLXVybDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1kYXNoYm9hcmQtbG9nbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZm9ybWF0LXRleHQtbmV2ZXItc2hvcnRlbjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLXNob3ctY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tc2VjdGlvbi1zZWxlY3RvcjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1oaWRlLXRodW1iLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS10aHVtYi1vbi1jYXJkcy1iYWNrZ3JvdW5kOiBudWxsICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGxvZ2luIHBhZ2UuXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZS1kYXJrOiAkY29yZS1sb2dpbi1idXR0b24tb3V0bGluZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3I6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1mb3Jnb3QtcGFzc3dvcmQ6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHA6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIG1vcmUgcGFnZS5cbiRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0OyIsIkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFsc1wiO1xuXG4uaXRlbS1pbnB1dDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaXRlbSB7XG4gICAgJi5jb3JlLWxvZ2luLW5lZWQtaGVscCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgICYuY29yZS1sb2dpbi1zaXRlLXFyY29kZSB7XG4gICAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBpZiAoJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHApIHtcbiAgICAuY29yZS1sb2dpbi1uZWVkLWhlbHAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLmNvcmUtbG9naW4tc2l0ZS1jb25uZWN0IHtcbiAgICBtYXJnaW4tdG9wOiAxLjRyZW07XG59XG5cbi5pdGVtIGlvbi10aHVtYm5haWwge1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAjZWVlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaW1nIHtcbiAgICAgICAgbWF4LWhlaWdodDogNTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxufVxuXG4uY29yZS1sb2dpbi1zaXRlLWxvZ28sXG4uY29yZS1sb2dpbi1zaXRlLWxpc3QsXG4uY29yZS1sb2dpbi1zaXRlLWxpc3QtZm91bmQge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcbiAgICBtYXgtaGVpZ2h0OiA5OTk5cHg7XG5cbiAgICAmLmhpZGRlbiB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICB9XG59XG5cbi5jb3JlLWxvZ2luLXNpdGUtbGlzdC1mb3VuZC5kaW1tZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvcmUtbG9naW4tc2l0ZS1saXN0LWxvYWRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgaW9uLXNwaW5uZXIge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG59XG5cbi5jb3JlLWxvZ2luLXNpdGUtbm9saXN0LWxvYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXRlbS5jb3JlLWxvZ2luLXNpdGUtbGlzdC10aXRsZSB7XG4gICAgaW9uLWxhYmVsLCBpb24tbGFiZWwgaDIuaXRlbS1oZWFkaW5nIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGlvbi1jb250ZW50ID4gKiB7XG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpb24tY29udGVudCAuY29yZS1sb2dpbi1zaXRlLWxvZ28ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgICAgICYuaGlkZGVuIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb3JlLWxvZ2luLWVudGVyZWQtc2l0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1saWdodGVyKTtcbiAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCAjZGRkO1xuICAgIH1cbn1cblxuLmNvcmUtbG9naW4tZGVmYXVsdC1pY29uIHtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/core/features/login/pages/site/site.ts":
/*!****************************************************!*\
  !*** ./src/core/features/login/pages/site/site.ts ***!
  \****************************************************/
/*! exports provided: CoreLoginSitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePage", function() { return CoreLoginSitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _classes_site__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @classes/site */ "./src/core/classes/site.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/url */ "./src/core/singletons/url.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
/* harmony import */ var _features_login_components_site_help_site_help__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @features/login/components/site-help/site-help */ "./src/core/features/login/components/site-help/site-help.ts");
/* harmony import */ var _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @features/login/components/site-onboarding/site-onboarding */ "./src/core/features/login/components/site-onboarding/site-onboarding.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/urlschemes */ "./src/core/services/urlschemes.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
// (C) Copyright 2015 GROWLA Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





















/**
 * Page that displays a "splash screen" while the app is being initialized.
 */
let CoreLoginSitePage = class CoreLoginSitePage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.siteSelector = 'sitefinder';
        this.showKeyboard = false;
        this.filter = '';
        this.sites = [];
        this.hasSites = false;
        this.loadingSites = false;
        let url = '';
        this.siteSelector = _core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.multisitesdisplay;
        const siteFinderSettings = _core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.sitefindersettings || {};
        this.siteFinderSettings = Object.assign({ displaysitename: true, displayimage: true, displayalias: true, displaycity: true, displaycountry: true, displayurl: true }, siteFinderSettings);
        // Load fixed sites if they're set.
        if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].hasSeveralFixedSites()) {
            url = this.initSiteSelector();
        }
        else if (_core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.enableonboarding && !_services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].isIOS()) {
            this.initOnboarding();
        }
        this.showScanQR = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].displayQRInSiteScreen();
        this.siteForm = this.formBuilder.group({
            siteUrl: [url, this.moodleUrlValidator()],
        });
        this.searchFunction = _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].debounce((search) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            search = search.trim();
            if (search.length >= 3) {
                // Update the sites list.
                const sites = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].findSites(search);
                // Add UI tweaks.
                this.sites = this.extendCoreLoginSiteInfo(sites);
                this.hasSites = !!this.sites.length;
            }
            else {
                // Not reseting the array to allow animation to be displayed.
                this.hasSites = false;
            }
            this.loadingSites = false;
        }), 1000);
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        this.showKeyboard = !!_services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].getRouteBooleanParam('showKeyboard');
    }
    /**
     * Initialize the site selector.
     *
     * @return URL of the first site.
     */
    initSiteSelector() {
        this.fixedSites = this.extendCoreLoginSiteInfo(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].getFixedSites());
        this.siteSelector = 'list'; // In case it's not defined
        // Do not show images if none are set.
        if (!this.fixedSites.some((site) => !!site.imageurl)) {
            this.siteFinderSettings.displayimage = false;
        }
        this.filteredSites = this.fixedSites;
        return this.fixedSites[0].url;
    }
    /**
     * Initialize and show onboarding if needed.
     *
     * @return Promise resolved when done.
     */
    initOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let onboardingDone;
            if (navigator.platform == "iPhone") {
                var options = { key: "ONBOARDING_DONE", suite: "group.com.example" };
                window.UserDefaults.load(options, (data) => onboardingDone = data.value, (error) => console.log(error));
            }
            else {
                onboardingDone = yield _services_config__WEBPACK_IMPORTED_MODULE_4__["CoreConfig"].get(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelperProvider"].ONBOARDING_DONE, false);
            }
            if (!onboardingDone) {
                // Check onboarding.
                this.showOnboarding();
            }
        });
    }
    /**
     * Extend info of Login Site Info to get UI tweaks.
     *
     * @param sites Sites list.
     * @return Sites list with extended info.
     */
    extendCoreLoginSiteInfo(sites) {
        return sites.map((site) => {
            site.noProtocolUrl = this.siteFinderSettings.displayurl && site.url ? _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].removeProtocol(site.url) : '';
            const name = this.siteFinderSettings.displaysitename ? site.name : '';
            const alias = this.siteFinderSettings.displayalias && site.alias ? site.alias : '';
            // Set title with parenthesis if both name and alias are present.
            site.title = name && alias ? name + ' (' + alias + ')' : name + alias;
            const country = this.siteFinderSettings.displaycountry && site.countrycode ?
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].getCountryName(site.countrycode) : '';
            const city = this.siteFinderSettings.displaycity && site.city ?
                site.city : '';
            // Separate location with hiphen if both country and city are present.
            site.location = city && country ? city + ' - ' + country : city + country;
            return site;
        });
    }
    /**
     * Validate Url.
     *
     * @return {ValidatorFn} Validation results.
     */
    moodleUrlValidator() {
        return (control) => {
            const value = control.value.trim();
            let valid = value.length >= 3 && _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].isValidMoodleUrl(value);
            if (!valid) {
                const demo = !!_services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getDemoSiteData(value);
                if (demo) {
                    valid = true;
                }
            }
            return valid ? null : { siteUrl: { value: control.value } };
        };
    }
    /**
     * Show a help modal.
     */
    showHelp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].openModal({
                component: _features_login_components_site_help_site_help__WEBPACK_IMPORTED_MODULE_15__["CoreLoginSiteHelpComponent"],
                cssClass: 'core-modal-fullscreen',
            });
        });
    }
    /**
     * Show an onboarding modal.
     */
    showOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].openModal({
                component: _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_16__["CoreLoginSiteOnboardingComponent"],
                cssClass: 'core-modal-fullscreen',
            });
        });
    }
    /**
     * Try to connect to a site.
     *
     * @param e Event.
     * @param url The URL to connect to.
     * @param foundSite The site clicked, if any, from the found sites list.
     * @return Promise resolved when done.
     */
    connect(e, url, foundSite) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            _services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].closeKeyboard();
            if (!url) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal('core.login.siteurlrequired', true);
                return;
            }
            if (!_services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal('core.networkerrormsg', true);
                return;
            }
            url = url.trim();
            if (url.match(/^(https?:\/\/)?campus\.example\.edu/)) {
                this.showLoginIssue(null, new _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.login.errorexampleurl')));
                return;
            }
            const siteData = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getDemoSiteData(url);
            if (siteData) {
                // It's a demo site.
                yield this.loginDemoSite(siteData);
            }
            else {
                // Not a demo site.
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading();
                let checkResult;
                try {
                    checkResult = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkSite(url);
                }
                catch (error) {
                    // Attempt guessing the domain if the initial check failed
                    const domain = _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].guessMoodleDomain(url);
                    if (domain && domain != url) {
                        try {
                            checkResult = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkSite(domain);
                        }
                        catch (secondError) {
                            // Try to use the first error.
                            modal.dismiss();
                            return this.showLoginIssue(url, error || secondError);
                        }
                    }
                    else {
                        modal.dismiss();
                        return this.showLoginIssue(url, error);
                    }
                }
                yield this.login(checkResult, foundSite);
                modal.dismiss();
            }
        });
    }
    /**
     * Authenticate in a demo site.
     *
     * @param siteData Site data.
     * @return Promise resolved when done.
     */
    loginDemoSite(siteData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading();
            try {
                const data = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getUserToken(siteData.url, siteData.username, siteData.password);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].newSite(data.siteUrl, data.token, data.privateToken);
                _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigateToSiteHome();
                return;
            }
            catch (error) {
                _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                if (error.loggedout) {
                    _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/sites', { reset: true });
                }
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Process login to a site.
     *
     * @param response Response obtained from the site check request.
     * @param foundSite The site clicked, if any, from the found sites list.
     *
     * @return Promise resolved after logging in.
     */
    login(response, foundSite) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkApplication(response.config);
                _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                if (response.warning) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(response.warning, true, 4000);
                }
                if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].isSSOLoginNeeded(response.code)) {
                    // SSO. User needs to authenticate in a browser.
                    _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].confirmAndOpenBrowserForSSOLogin(response.siteUrl, response.code, response.service, (_a = response.config) === null || _a === void 0 ? void 0 : _a.launchurl);
                }
                else {
                    const pageParams = { siteUrl: response.siteUrl, siteConfig: response.config };
                    if (foundSite && !this.fixedSites) {
                        pageParams['siteName'] = foundSite.name;
                        pageParams['logoUrl'] = foundSite.imageurl;
                    }
                    _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/credentials', {
                        params: pageParams,
                    });
                }
            }
            catch (error) {
                // Ignore errors.
            }
        });
    }
    /**
     * Show an error that aims people to solve the issue.
     *
     * @param url The URL the user was trying to connect to.
     * @param error Error to display.
     */
    showLoginIssue(url, error) {
        let errorMessage = _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].getErrorMessage(error);
        if (errorMessage == _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.cannotconnecttrouble')) {
            const found = this.sites.find((site) => site.url == url);
            if (!found) {
                errorMessage += ' ' + _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.cannotconnectverify');
            }
        }
        let message = '<p>' + errorMessage + '</p>';
        if (url) {
            const fullUrl = _services_utils_url__WEBPACK_IMPORTED_MODULE_14__["CoreUrlUtils"].isAbsoluteURL(url) ? url : 'https://' + url;
            message += '<p padding><a href="' + fullUrl + '" core-link>' + url + '</a></p>';
        }
        const buttons = [
            {
                text: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.needhelp'),
                handler: () => {
                    this.showHelp();
                },
            },
            {
                text: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.tryagain'),
                role: 'cancel',
            },
        ];
        // @TODO: Remove CoreSite.MINIMUM_MOODLE_VERSION, not used on translations since 3.9.0.
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showAlertWithOptions({
            header: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.cannotconnect', { $a: _classes_site__WEBPACK_IMPORTED_MODULE_9__["CoreSite"].MINIMUM_MOODLE_VERSION }),
            message,
            buttons,
        });
    }
    /**
     * The filter has changed.
     *
     * @param event Received Event.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filterChanged(event) {
        var _a;
        const newValue = (_a = event === null || event === void 0 ? void 0 : event.target.value) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
        if (!newValue || !this.fixedSites) {
            this.filteredSites = this.fixedSites;
        }
        else {
            this.filteredSites = this.fixedSites.filter((site) => site.title.toLowerCase().indexOf(newValue) > -1 || site.noProtocolUrl.toLowerCase().indexOf(newValue) > -1 ||
                site.location.toLowerCase().indexOf(newValue) > -1);
        }
    }
    /**
     * Find a site on the backend.
     *
     * @param e Event.
     * @param search Text to search.
     */
    searchSite(e, search) {
        this.loadingSites = true;
        search = search.trim();
        if (this.siteForm.valid && search.length >= 3) {
            this.enteredSiteUrl = {
                url: search,
                name: 'connect',
                title: '',
                location: '',
                noProtocolUrl: _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].removeProtocol(search),
            };
        }
        else {
            this.enteredSiteUrl = undefined;
        }
        this.searchFunction(search.trim());
    }
    /**
     * Show instructions and scan QR code.
     *
     * @return Promise resolved when done.
     */
    showInstructionsAndScanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].showScanQRInstructions();
                yield this.scanQR();
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Scan a QR code and put its text in the URL input.
     *
     * @return Promise resolved when done.
     */
    scanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Scan for a QR code.
            const text = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].scanQR();
            if (!text) {
                return;
            }
            if (_services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].isCustomURL(text)) {
                try {
                    yield _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].handleCustomURL(text);
                }
                catch (error) {
                    if (error && error.data && error.data.isAuthenticationURL && error.data.siteUrl) {
                        // An error ocurred, but it's an authentication URL and we have the site URL.
                        this.treatErrorInAuthenticationCustomURL(text, error);
                    }
                    else {
                        _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
                    }
                }
                return;
            }
            // Not a custom URL scheme, check if it's a URL scheme to another app.
            const scheme = _services_utils_url__WEBPACK_IMPORTED_MODULE_14__["CoreUrlUtils"].getUrlProtocol(text);
            if (scheme && scheme != 'http' && scheme != 'https') {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.errorurlschemeinvalidscheme', { $a: text }));
            }
            else if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].isSiteUrlAllowed(text)) {
                // Put the text in the field (if present).
                this.siteForm.controls.siteUrl.setValue(text);
                this.connect(new Event('click'), text);
            }
            else {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal('core.errorurlschemeinvalidsite', true);
            }
        });
    }
    /**
     * Treat an error while handling a custom URL meant to perform an authentication.
     * If the site doesn't use SSO, the user will be sent to the credentials screen.
     *
     * @param customURL Custom URL handled.
     * @param error Error data.
     * @return Promise resolved when done.
     */
    treatErrorInAuthenticationCustomURL(customURL, error) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteUrl = ((_a = error.data) === null || _a === void 0 ? void 0 : _a.siteUrl) || '';
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading();
            // Set the site URL in the input.
            this.siteForm.controls.siteUrl.setValue(siteUrl);
            try {
                // Check if site uses SSO.
                const response = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkSite(siteUrl);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkApplication(response.config);
                if (!_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].isSSOLoginNeeded(response.code)) {
                    // No SSO, go to credentials page.
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/credentials', {
                        params: {
                            siteUrl: response.siteUrl,
                            siteConfig: response.config,
                        },
                    });
                }
            }
            catch (error) {
                // Ignore errors.
            }
            finally {
                modal.dismiss();
            }
            // Now display the error.
            error.error = _services_utils_text__WEBPACK_IMPORTED_MODULE_19__["CoreTextUtils"].addTextToError(error.error, '<br><br>' + _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.login.youcanstillconnectwithcredentials'));
            _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
        });
    }
    /**
     * Open settings page.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/settings');
    }
};
CoreLoginSitePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginSitePage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['siteFormEl',] }]
};
CoreLoginSitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-site',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./site.scss */ "./src/core/features/login/pages/site/site.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../login.scss */ "./src/core/features/login/login.scss")).default]
    })
], CoreLoginSitePage);



/***/ }),

/***/ "./src/core/features/settings/pages/site/site.module.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/settings/pages/site/site.module.ts ***!
  \**************************************************************/
/*! exports provided: CoreSitePreferencesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePreferencesPageModule", function() { return CoreSitePreferencesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site */ "./src/core/features/settings/pages/site/site.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _site_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site-routing */ "./src/core/features/settings/pages/site/site-routing.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
// (C) Copyright 2015 GROWLA Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.








function buildRoutes(injector) {
    const routes = Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["resolveModuleRoutes"])(injector, _site_routing__WEBPACK_IMPORTED_MODULE_6__["SITE_PREFERENCES_ROUTES"]);
    const mobileRoutes = [
        {
            path: '',
            component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
        },
        ...routes.siblings,
    ];
    const tabletRoutes = [
        {
            path: '',
            component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
            children: routes.siblings,
        },
    ];
    return [
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_7__["CoreScreen"].isMobile),
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_7__["CoreScreen"].isTablet),
    ];
}
let CoreSitePreferencesPageModule = class CoreSitePreferencesPageModule {
};
CoreSitePreferencesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]] },
        ],
        declarations: [
            _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSitePreferencesPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/site/site.ts":
/*!*******************************************************!*\
  !*** ./src/core/features/settings/pages/site/site.ts ***!
  \*******************************************************/
/*! exports provided: CoreSitePreferencesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePreferencesPage", function() { return CoreSitePreferencesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_settings_delegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings-delegate */ "./src/core/features/settings/services/settings-delegate.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_settings_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/page-items-list-manager */ "./src/core/classes/page-items-list-manager.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
// (C) Copyright 2015 GROWLA Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var CoreSitePreferencesPage_1;












/**
 * Page that displays the list of site settings pages.
 */
let CoreSitePreferencesPage = CoreSitePreferencesPage_1 = class CoreSitePreferencesPage {
    constructor() {
        this.spaceUsage = {
            cacheEntries: 0,
            spaceUsage: 0,
        };
        this.isDestroyed = false;
        this.isIOS = _services_app__WEBPACK_IMPORTED_MODULE_7__["CoreApp"].isIOS();
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        this.handlers = new CoreSettingsSitePreferencesManager(CoreSitePreferencesPage_1);
        this.sitesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].SITE_UPDATED, (data) => {
            if (data.siteId == this.siteId) {
                this.refreshData();
            }
        });
    }
    /**
     * View loaded.
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pageToOpen = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteParam('page');
            try {
                yield this.fetchData();
            }
            finally {
                const handler = pageToOpen ? this.handlers.items.find(handler => handler.page == pageToOpen) : undefined;
                if (handler) {
                    this.handlers.select(handler);
                    this.handlers.watchSplitViewOutlet(this.splitView);
                }
                else {
                    this.handlers.start(this.splitView);
                }
            }
        });
    }
    /**
     * Fetch Data.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.handlers.setItems(_services_settings_delegate__WEBPACK_IMPORTED_MODULE_2__["CoreSettingsDelegate"].getHandlers());
            const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite();
            this.siteInfo = currentSite.getInfo();
            this.siteName = currentSite.getSiteName();
            this.siteUrl = currentSite.getURL();
            this.spaceUsage = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsHelper"].getSiteSpaceUsage(this.siteId);
        });
    }
    /**
     * Syncrhonizes the site.
     */
    synchronize() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Using syncOnlyOnWifi false to force manual sync.
                yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsHelper"].synchronizeSite(false, this.siteId);
            }
            catch (error) {
                if (this.isDestroyed) {
                    return;
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.settings.errorsyncsite', true);
            }
        });
    }
    /**
     * Returns true if site is beeing synchronized.
     *
     * @return True if site is beeing synchronized, false otherwise.
     */
    isSynchronizing() {
        return !!_services_settings_helper__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsHelper"].getSiteSyncPromise(this.siteId);
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        this.fetchData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Deletes files of a site and the tables that can be cleared.
     *
     * @param siteData Site object with space usage.
     */
    deleteSiteStorage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.spaceUsage = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsHelper"].deleteSiteStorage(this.siteName || '', this.siteId);
            }
            catch (_a) {
                // Ignore cancelled confirmation modal.
            }
        });
    }
    /**
     * Show information about space usage actions.
     */
    showSpaceInfo() {
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.help'), _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.settings.spaceusagehelp'));
    }
    /**
     * Show information about sync actions.
     */
    showSyncInfo() {
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.help'), _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.settings.synchronizenowhelp'));
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        this.isDestroyed = true;
        (_a = this.sitesObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
CoreSitePreferencesPage.ctorParameters = () => [];
CoreSitePreferencesPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_11__["CoreSplitViewComponent"],] }]
};
CoreSitePreferencesPage = CoreSitePreferencesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-site-preferences',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html")).default,
    })
], CoreSitePreferencesPage);

/**
 * Helper class to manage sections.
 */
class CoreSettingsSitePreferencesManager extends _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_10__["CorePageItemsListManager"] {
    /**
     * @inheritdoc
     */
    getItemPath(handler) {
        return handler.page;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams(handler) {
        return handler.params || {};
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-site-site-module.js.map