(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-general-general-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/general/general.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/general/general.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <h1>{{ 'core.settings.general' | translate }}</h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-item class=\"ion-text-wrap\">\n        <ion-label>\n            <h2>{{ 'core.settings.language' | translate }}</h2>\n        </ion-label>\n        <ion-select [(ngModel)]=\"selectedLanguage\" (ionChange)=\"languageChanged()\" interface=\"action-sheet\"\n            [interfaceOptions]=\"{header: 'core.settings.language' | translate}\">\n            <ion-select-option *ngFor=\"let entry of languages\" [value]=\"entry.code\">{{ entry.name }}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <ion-item class=\"ion-text-wrap core-settings-general-font-size item-interactive\">\n        <ion-label>\n            <h2>{{ 'core.settings.fontsize' | translate }}</h2>\n        </ion-label>\n        <ion-segment [(ngModel)]=\"selectedZoomLevel\" (ionChange)=\"zoomLevelChanged()\" color=\"primary\">\n            <ion-segment-button *ngFor=\"let zoomLevel of zoomLevels\" [value]=\"zoomLevel.value\"\n                [ngStyle]=\"{'font-size.px': zoomLevel.style}\">\n                <ion-label>\n                    {{ 'core.settings.fontsizecharacter' | translate }}\n                    <!-- Empty element styled with the largest font size, so all buttons share a common baseline. -->\n                    <span [ngStyle]=\"{'font-size.px': zoomLevels[zoomLevels.length - 1].style}\"></span>\n                </ion-label>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-item>\n    <ion-item class=\"ion-text-wrap core-settings-general-color-scheme\" *ngIf=\"colorSchemes.length > 0\"\n        [lines]=\"selectedScheme=='system' && isAndroid ? 'none' : 'inset'\">\n        <ion-label>\n            <h2>{{ 'core.settings.colorscheme' | translate }}</h2>\n            <p *ngIf=\"colorSchemeDisabled\" class=\"text-danger\">{{ 'core.settings.forcedsetting' | translate }}</p>\n        </ion-label>\n        <ion-select [(ngModel)]=\"selectedScheme\" (ionChange)=\"colorSchemeChanged()\" interface=\"action-sheet\"\n            [disabled]=\"colorSchemeDisabled\" [interfaceOptions]=\"{header: 'core.settings.colorscheme' | translate}\">\n            <ion-select-option *ngFor=\"let scheme of colorSchemes\" [value]=\"scheme\">\n                {{ 'core.settings.colorscheme-' + scheme | translate }}</ion-select-option>\n        </ion-select>\n    </ion-item>\n    <ion-item text-wrap *ngIf=\"colorSchemes.length > 0 && selectedScheme=='system' && isAndroid\">\n        <ion-label><p>{{ 'core.settings.colorscheme-system-notice' | translate }}</p></ion-label>\n    </ion-item>\n    <ion-item class=\"ion-text-wrap\">\n        <ion-label>\n            <h2>{{ 'core.settings.enablerichtexteditor' | translate }}</h2>\n            <p>{{ 'core.settings.enablerichtexteditordescription' | translate }}</p>\n        </ion-label>\n        <ion-toggle [(ngModel)]=\"richTextEditor\" (ionChange)=\"richTextEditorChanged()\"></ion-toggle>\n    </ion-item>\n    <ion-item class=\"ion-text-wrap\" *ngIf=\"displayIframeHelp\">\n        <ion-label>\n            <h2>{{ 'core.settings.ioscookies' | translate }}</h2>\n            <p>{{ 'core.settings.ioscookiesdescription' | translate }}</p>\n            <ion-button expand=\"block\" (click)=\"openNativeSettings()\">\n                {{ 'core.opensettings' | translate }}\n            </ion-button>\n        </ion-label>\n    </ion-item>\n    <ion-item class=\"ion-text-wrap\">\n        <ion-label>\n            <h2>{{ 'core.settings.debugdisplay' | translate }}</h2>\n            <p>{{ 'core.settings.debugdisplaydescription' | translate }}</p>\n        </ion-label>\n        <ion-toggle [(ngModel)]=\"debugDisplay\" (ionChange)=\"debugDisplayChanged()\"></ion-toggle>\n    </ion-item>\n    <ion-item class=\"ion-text-wrap\" *ngIf=\"analyticsSupported\">\n        <ion-label>\n            <h2>{{ 'core.settings.enablefirebaseanalytics' | translate }}</h2>\n            <p>{{ 'core.settings.enablefirebaseanalyticsdescription' | translate }}</p>\n        </ion-label>\n        <ion-toggle [(ngModel)]=\"analyticsEnabled\" (ionChange)=\"analyticsEnabledChanged()\"></ion-toggle>\n    </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/settings/pages/general/general.module.ts":
/*!********************************************************************!*\
  !*** ./src/core/features/settings/pages/general/general.module.ts ***!
  \********************************************************************/
/*! exports provided: CoreSettingsGeneralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsGeneralPageModule", function() { return CoreSettingsGeneralPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general */ "./src/core/features/settings/pages/general/general.ts");
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
        component: _general__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsGeneralPage"],
    },
];
let CoreSettingsGeneralPageModule = class CoreSettingsGeneralPageModule {
};
CoreSettingsGeneralPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _general__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsGeneralPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsGeneralPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/general/general.scss":
/*!***************************************************************!*\
  !*** ./src/core/features/settings/pages/general/general.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .core-settings-general-font-size ion-segment {\n  max-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL3NldHRpbmdzL3BhZ2VzL2dlbmVyYWwvZ2VuZXJhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9zZXR0aW5ncy9wYWdlcy9nZW5lcmFsL2dlbmVyYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuY29yZS1zZXR0aW5ncy1nZW5lcmFsLWZvbnQtc2l6ZSBpb24tc2VnbWVudCB7XG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/core/features/settings/pages/general/general.ts":
/*!*************************************************************!*\
  !*** ./src/core/features/settings/pages/general/general.ts ***!
  \*************************************************************/
/*! exports provided: CoreSettingsGeneralPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsGeneralPage", function() { return CoreSettingsGeneralPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_lang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/lang */ "./src/core/services/lang.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/pushnotifications/services/pushnotifications */ "./src/core/features/pushnotifications/services/pushnotifications.ts");
/* harmony import */ var _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_utils_iframe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/iframe */ "./src/core/services/utils/iframe.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page that displays the general settings.
 */
let CoreSettingsGeneralPage = class CoreSettingsGeneralPage {
    constructor() {
        this.languages = [];
        this.selectedLanguage = '';
        this.zoomLevels = [];
        this.selectedZoomLevel = "normal" /* NORMAL */;
        this.richTextEditor = true;
        this.debugDisplay = false;
        this.analyticsSupported = false;
        this.analyticsEnabled = false;
        this.colorSchemes = [];
        this.selectedScheme = "light" /* LIGHT */;
        this.colorSchemeDisabled = false;
        this.isAndroid = false;
        this.displayIframeHelp = false;
        this.asyncInit();
    }
    /**
     * Async part of the constructor.
     */
    asyncInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the supported languages.
            const languages = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.languages;
            for (const code in languages) {
                this.languages.push({
                    code: code,
                    name: languages[code],
                });
            }
            // Sort them by name.
            this.languages.sort((a, b) => a.name.localeCompare(b.name));
            this.selectedLanguage = yield _services_lang__WEBPACK_IMPORTED_MODULE_5__["CoreLang"].getCurrentLanguage();
            // Configure color schemes.
            if (!_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.forceColorScheme) {
                this.colorSchemeDisabled = _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].isColorSchemeDisabledInSite();
                if (this.colorSchemeDisabled) {
                    this.colorSchemes.push("light" /* LIGHT */);
                    this.selectedScheme = this.colorSchemes[0];
                }
                else {
                    this.isAndroid = _services_app__WEBPACK_IMPORTED_MODULE_9__["CoreApp"].isAndroid();
                    this.colorSchemes = _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].getAllowedColorSchemes();
                    this.selectedScheme = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_COLOR_SCHEME, "light" /* LIGHT */);
                }
            }
            this.selectedZoomLevel = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].getZoomLevel();
            this.zoomLevels = Object.keys(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.zoomlevels).map((value) => ({
                value,
                // Absolute pixel size based on 1.4rem body text when this size is selected.
                style: Math.round(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.zoomlevels[value] * 16 / 100),
                selected: value === this.selectedZoomLevel,
            }));
            this.richTextEditor = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_RICH_TEXT_EDITOR, true);
            this.debugDisplay = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_DEBUG_DISPLAY, false);
            this.analyticsSupported = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.enableanalytics;
            if (this.analyticsSupported) {
                this.analyticsEnabled = yield _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_ANALYTICS_ENABLED, true);
            }
            this.displayIframeHelp = _services_utils_iframe__WEBPACK_IMPORTED_MODULE_10__["CoreIframeUtils"].shouldDisplayHelp();
        });
    }
    /**
     * Called when a new language is selected.
     */
    languageChanged() {
        _services_lang__WEBPACK_IMPORTED_MODULE_5__["CoreLang"].changeCurrentLanguage(this.selectedLanguage).finally(() => {
            _singletons_events__WEBPACK_IMPORTED_MODULE_4__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_4__["CoreEvents"].LANGUAGE_CHANGED, this.selectedLanguage);
        });
    }
    /**
     * Called when a new zoom level is selected.
     */
    zoomLevelChanged() {
        this.zoomLevels = this.zoomLevels.map((fontSize) => {
            fontSize.selected = fontSize.value === this.selectedZoomLevel;
            return fontSize;
        });
        _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].applyZoomLevel(this.selectedZoomLevel);
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_ZOOM_LEVEL, this.selectedZoomLevel);
    }
    /**
     * Called when a new color scheme is selected.
     */
    colorSchemeChanged() {
        _services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].setColorScheme(this.selectedScheme);
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_COLOR_SCHEME, this.selectedScheme);
    }
    /**
     * Called when the rich text editor is enabled or disabled.
     */
    richTextEditorChanged() {
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_RICH_TEXT_EDITOR, this.richTextEditor ? 1 : 0);
    }
    /**
     * Called when the debug display setting is enabled or disabled.
     */
    debugDisplayChanged() {
        _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_DEBUG_DISPLAY, this.debugDisplay ? 1 : 0);
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].setDebugDisplay(this.debugDisplay);
    }
    /**
     * Called when the analytics setting is enabled or disabled.
     */
    analyticsEnabledChanged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _features_pushnotifications_services_pushnotifications__WEBPACK_IMPORTED_MODULE_7__["CorePushNotifications"].enableAnalytics(this.analyticsEnabled);
            _services_config__WEBPACK_IMPORTED_MODULE_3__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_ANALYTICS_ENABLED, this.analyticsEnabled ? 1 : 0);
        });
    }
    /**
     * Open native settings.
     */
    openNativeSettings() {
        _singletons__WEBPACK_IMPORTED_MODULE_11__["Diagnostic"].switchToSettings();
    }
};
CoreSettingsGeneralPage.ctorParameters = () => [];
CoreSettingsGeneralPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-general',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./general.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/general/general.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./general.scss */ "./src/core/features/settings/pages/general/general.scss")).default]
    })
], CoreSettingsGeneralPage);



/***/ })

}]);
//# sourceMappingURL=pages-general-general-module.js.map