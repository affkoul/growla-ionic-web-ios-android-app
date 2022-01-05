(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-space-usage-space-usage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/space-usage/space-usage.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/space-usage/space-usage.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>{{ 'core.settings.spaceusage' | translate }}</h1>\n        <ion-buttons slot=\"end\">\n            <core-navbar-buttons>\n                <ion-button (click)=\"showInfo()\" [attr.aria-label]=\"'core.info' | translate\">\n                    <ion-icon name=\"fas-info-circle\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n            </core-navbar-buttons>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\" slot=\"fixed\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-item *ngFor=\"let site of sites\" [attr.aria-current]=\"site.id == currentSiteId ? 'page' : 'false'\">\n            <ion-label class=\"ion-text-wrap\">\n                <p class=\"item-heading\">\n                    <core-format-text [text]=\"site.siteName\" clean=\"true\" [siteId]=\"site.id\"></core-format-text>\n                </p>\n                <p class=\"ion-text-wrap\">{{ site.fullName }}</p>\n                <p>{{ site.siteUrl }}</p>\n            </ion-label>\n            <p *ngIf=\"site.spaceUsage !== undefined\" slot=\"end\">\n                {{ site.spaceUsage | coreBytesToSize }}\n            </p>\n            <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"deleteSiteStorage(site)\"\n                [hidden]=\"site.spaceUsage! + site.cacheEntries! <= 0\"\n                [attr.aria-label]=\"'core.settings.deletesitefilestitle' | translate\">\n                <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-item>\n        <ion-item-divider>\n            <ion-label>\n                <h2>{{ 'core.settings.total' | translate }}</h2>\n            </ion-label>\n            <p slot=\"end\" class=\"ion-margin-end\">\n                {{ totals.spaceUsage | coreBytesToSize }}\n            </p>\n        </ion-item-divider>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/settings/pages/space-usage/space-usage.module.ts":
/*!****************************************************************************!*\
  !*** ./src/core/features/settings/pages/space-usage/space-usage.module.ts ***!
  \****************************************************************************/
/*! exports provided: CoreSettingsSpaceUsagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSpaceUsagePageModule", function() { return CoreSettingsSpaceUsagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _space_usage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./space-usage */ "./src/core/features/settings/pages/space-usage/space-usage.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
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
        component: _space_usage__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsSpaceUsagePage"],
    },
];
let CoreSettingsSpaceUsagePageModule = class CoreSettingsSpaceUsagePageModule {
};
CoreSettingsSpaceUsagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _space_usage__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsSpaceUsagePage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsSpaceUsagePageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/space-usage/space-usage.ts":
/*!*********************************************************************!*\
  !*** ./src/core/features/settings/pages/space-usage/space-usage.ts ***!
  \*********************************************************************/
/*! exports provided: CoreSettingsSpaceUsagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSpaceUsagePage", function() { return CoreSettingsSpaceUsagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_settings_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
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
 * Page that displays the space usage settings.
 */
let CoreSettingsSpaceUsagePage = class CoreSettingsSpaceUsagePage {
    constructor() {
        this.loaded = false;
        this.sites = [];
        this.currentSiteId = '';
        this.totals = {
            cacheEntries: 0,
            spaceUsage: 0,
        };
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId();
        this.sitesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_5__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_5__["CoreEvents"].SITE_UPDATED, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const site = yield _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getSite(data.siteId);
            const siteEntry = this.sites.find((siteEntry) => siteEntry.id == site.id);
            if (siteEntry) {
                const siteInfo = site.getInfo();
                siteEntry.siteName = site.getSiteName();
                if (siteInfo) {
                    siteEntry.siteUrl = siteInfo.siteurl;
                    siteEntry.fullName = siteInfo.fullname;
                }
            }
        }));
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        this.loadSiteData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Convenience function to load site data/usage and calculate the totals.
     *
     * @return Resolved when done.
     */
    loadSiteData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Calculate total usage.
            let totalSize = 0;
            let totalEntries = 0;
            this.sites = yield _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getSortedSites();
            const settingsHelper = _services_settings_helper__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsHelper"].instance;
            // Get space usage.
            yield Promise.all(this.sites.map((site) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const siteInfo = yield settingsHelper.getSiteSpaceUsage(site.id);
                site.cacheEntries = siteInfo.cacheEntries;
                site.spaceUsage = siteInfo.spaceUsage;
                totalSize += site.spaceUsage || 0;
                totalEntries += site.cacheEntries || 0;
            })));
            this.totals.spaceUsage = totalSize;
            this.totals.cacheEntries = totalEntries;
        });
    }
    /**
     * Refresh the data.
     *
     * @param event Refresher event.
     */
    refreshData(refresher) {
        this.loadSiteData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Deletes files of a site and the tables that can be cleared.
     *
     * @param siteData Site object with space usage.
     */
    deleteSiteStorage(siteData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const newInfo = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsHelper"].deleteSiteStorage(siteData.siteName || '', siteData.id);
                this.totals.spaceUsage -= siteData.spaceUsage - newInfo.spaceUsage;
                this.totals.spaceUsage -= siteData.cacheEntries - newInfo.cacheEntries;
                siteData.spaceUsage = newInfo.spaceUsage;
                siteData.cacheEntries = newInfo.cacheEntries;
            }
            catch (_a) {
                // Ignore cancelled confirmation modal.
            }
        });
    }
    /**
     * Show information about space usage actions.
     */
    showInfo() {
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.help'), _singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.settings.spaceusagehelp'));
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.sitesObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
CoreSettingsSpaceUsagePage.ctorParameters = () => [];
CoreSettingsSpaceUsagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-space-usage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./space-usage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/space-usage/space-usage.html")).default,
    })
], CoreSettingsSpaceUsagePage);



/***/ })

}]);
//# sourceMappingURL=pages-space-usage-space-usage-module.js.map