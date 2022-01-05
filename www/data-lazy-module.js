(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/data/pages/edit/edit.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/data/pages/edit/edit.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module.id\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <ion-button *ngIf=\"entry\" fill=\"clear\" (click)=\"save($event)\">\n                {{ 'core.save' | translate }}\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"groupInfo && (groupInfo.separateGroups || groupInfo.visibleGroups)\">\n            <ion-label id=\"addon-data-groupslabel\">\n                <ng-container *ngIf=\"groupInfo.separateGroups\">{{ 'core.groupsvisible' | translate }}</ng-container>\n                <ng-container *ngIf=\"groupInfo.visibleGroups\">{{ 'core.groupsseparate' | translate }}</ng-container>\n            </ion-label>\n            <ion-select [(ngModel)]=\"selectedGroup\" (ionChange)=\"setGroup(selectedGroup)\" aria-labelledby=\"addon-data-groupslabel\"\n                interface=\"action-sheet\" [interfaceOptions]=\"{header: 'core.group' | translate}\">\n                <ion-select-option *ngFor=\"let groupOpt of groupInfo.groups\" [value]=\"groupOpt.id\">\n                    {{groupOpt.name}}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <div class=\"addon-data-contents {{cssClass}}\" *ngIf=\"database\">\n            <core-style [css]=\"database.csstemplate\" prefix=\".{{cssClass}}\"></core-style>\n\n            <form (ngSubmit)=\"save($event)\" [formGroup]=\"editForm\" #editFormEl>\n                <core-compile-html [text]=\"editFormRender\" [jsData]=\"jsData\" [extraImports]=\"extraImports\"></core-compile-html>\n            </form>\n        </div>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/data/pages/entry/entry.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/data/pages/entry/entry.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module.id\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\"\n        [disabled]=\"!entryLoaded || !(isPullingToRefresh || !renderingEntry && !loadingRating && !loadingComments)\"\n        (ionRefresh)=\"refreshDatabase($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"entryLoaded && (isPullingToRefresh || !renderingEntry && !loadingRating && !loadingComments)\">\n        <!-- Database entries found to be synchronized -->\n        <ion-card class=\"core-warning-card\" *ngIf=\"entry && entry.hasOffline\">\n            <ion-item>\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ 'core.hasdatatosync' | translate: {$a: moduleName} }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"groupInfo && (groupInfo.separateGroups || groupInfo.visibleGroups)\">\n            <ion-label id=\"addon-data-groupslabel\">\n                <ng-container *ngIf=\"groupInfo.separateGroups\">{{ 'core.groupsvisible' | translate }}</ng-container>\n                <ng-container *ngIf=\"groupInfo.visibleGroups\">{{ 'core.groupsseparate' | translate }}</ng-container>\n            </ion-label>\n            <ion-select [(ngModel)]=\"selectedGroup\" (ionChange)=\"setGroup(selectedGroup)\" aria-labelledby=\"addon-data-groupslabel\"\n                interface=\"action-sheet\" [interfaceOptions]=\"{header: 'core.group' | translate}\">\n                <ion-select-option *ngFor=\"let groupOpt of groupInfo.groups\" [value]=\"groupOpt.id\">\n                    {{groupOpt.name}}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <div class=\"addon-data-contents addon-data-entry addon-data-entries-{{database.id}}\" *ngIf=\"database && entry\">\n            <core-style [css]=\"database.csstemplate\" prefix=\".addon-data-entries-{{database.id}}\"></core-style>\n\n            <core-compile-html [text]=\"entryHtml\" [jsData]=\"jsData\" [extraImports]=\"extraImports\"\n                (compiling)=\"setRenderingEntry($event)\"></core-compile-html>\n        </div>\n\n        <core-rating-rate *ngIf=\"database && entry && ratingInfo && (!database.approval || entry.approved)\"\n            [ratingInfo]=\"ratingInfo\" contextLevel=\"module\" [instanceId]=\"database.coursemodule\" [itemId]=\"entry.id\" [itemSetId]=\"0\"\n            [courseId]=\"courseId\" [aggregateMethod]=\"database.assessed\" [scaleId]=\"database.scale\" [userId]=\"entry.userid\"\n            (onLoading)=\"setLoadingRating($event)\" (onUpdate)=\"ratingUpdated()\">\n        </core-rating-rate>\n        <core-rating-aggregate *ngIf=\"database && entry && ratingInfo\" [ratingInfo]=\"ratingInfo\" contextLevel=\"module\"\n            [instanceId]=\"database.coursemodule\" [itemId]=\"entry.id\" [courseId]=\"courseId\" [aggregateMethod]=\"database.assessed\"\n            [scaleId]=\"database.scale\">\n        </core-rating-aggregate>\n\n        <core-comments *ngIf=\"database && database.comments && entry && entry.id > 0 && commentsEnabled\"\n            contextLevel=\"module\" [instanceId]=\"database.coursemodule\" component=\"mod_data\" [itemId]=\"entry.id\"\n            area=\"database_entry\" [courseId]=\"courseId\" (onLoading)=\"setLoadingComments($event)\" [showItem]=\"true\">\n        </core-comments>\n\n        <ion-grid *ngIf=\"hasPrevious || hasNext\">\n            <ion-row class=\"ion-align-items-center\">\n                <ion-col *ngIf=\"hasPrevious\">\n                    <ion-button expand=\"block\" fill=\"outline\" (click)=\"gotoEntry(offset! -1)\">\n                        <ion-icon name=\"fas-chevron-left\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                        {{ 'core.previous' | translate }}\n                    </ion-button>\n                </ion-col>\n                <ion-col *ngIf=\"hasNext\">\n                    <ion-button expand=\"block\" (click)=\"gotoEntry(offset! + 1)\">\n                        {{ 'core.next' | translate }}\n                        <ion-icon name=\"fas-chevron-right\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/data/pages/index/index.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/data/pages/index/index.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module.id\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n\n        <ion-buttons slot=\"end\">\n            <!-- The buttons defined by the component will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" [disabled]=\"!activityComponent?.loaded\" (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <addon-mod-data-index [module]=\"module\" [courseId]=\"courseId\" [group]=\"group\" (dataRetrieved)=\"updateData($event)\">\n    </addon-mod-data-index>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/data/data-lazy.module.ts":
/*!*************************************************!*\
  !*** ./src/addons/mod/data/data-lazy.module.ts ***!
  \*************************************************/
/*! exports provided: AddonModDataLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModDataLazyModule", function() { return AddonModDataLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/comments/components/components.module */ "./src/core/features/comments/components/components.module.ts");
/* harmony import */ var _features_compile_components_compile_html_compile_html_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/compile/components/compile-html/compile-html.module */ "./src/core/features/compile/components/compile-html/compile-html.module.ts");
/* harmony import */ var _features_rating_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/rating/components/components.module */ "./src/core/features/rating/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _components_components_compile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components-compile.module */ "./src/addons/mod/data/components/components-compile.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/data/components/components.module.ts");
/* harmony import */ var _pages_edit_edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/edit/edit */ "./src/addons/mod/data/pages/edit/edit.ts");
/* harmony import */ var _pages_entry_entry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/entry/entry */ "./src/addons/mod/data/pages/entry/entry.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/data/pages/index/index.ts");
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
        path: ':courseId/:cmId',
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_12__["AddonModDataIndexPage"],
    },
    {
        path: ':courseId/:cmId/edit',
        component: _pages_edit_edit__WEBPACK_IMPORTED_MODULE_10__["AddonModDataEditPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_7__["CanLeaveGuard"]],
    },
    {
        path: ':courseId/:cmId/edit/:entryId',
        component: _pages_edit_edit__WEBPACK_IMPORTED_MODULE_10__["AddonModDataEditPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_7__["CanLeaveGuard"]],
    },
    {
        path: ':courseId/:cmId/:entryId',
        component: _pages_entry_entry__WEBPACK_IMPORTED_MODULE_11__["AddonModDataEntryPage"],
    },
];
let AddonModDataLazyModule = class AddonModDataLazyModule {
};
AddonModDataLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["AddonModDataComponentsModule"],
            _components_components_compile_module__WEBPACK_IMPORTED_MODULE_8__["AddonModDataComponentsCompileModule"],
            _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreCommentsComponentsModule"],
            _features_rating_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreRatingComponentsModule"],
            _features_compile_components_compile_html_compile_html_module__WEBPACK_IMPORTED_MODULE_5__["CoreCompileHtmlComponentModule"],
        ],
        declarations: [
            _pages_index_index__WEBPACK_IMPORTED_MODULE_12__["AddonModDataIndexPage"],
            _pages_entry_entry__WEBPACK_IMPORTED_MODULE_11__["AddonModDataEntryPage"],
            _pages_edit_edit__WEBPACK_IMPORTED_MODULE_10__["AddonModDataEditPage"],
        ],
    })
], AddonModDataLazyModule);



/***/ }),

/***/ "./src/addons/mod/data/pages/edit/edit.ts":
/*!************************************************!*\
  !*** ./src/addons/mod/data/pages/edit/edit.ts ***!
  \************************************************/
/*! exports provided: AddonModDataEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModDataEditPage", function() { return AddonModDataEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_components_compile_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/components-compile.module */ "./src/addons/mod/data/components/components-compile.module.ts");
/* harmony import */ var _services_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/data */ "./src/addons/mod/data/services/data.ts");
/* harmony import */ var _services_data_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/data-helper */ "./src/addons/mod/data/services/data-helper.ts");
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
 * Page that displays the view edit page.
 */
let AddonModDataEditPage = class AddonModDataEditPage {
    constructor() {
        this.fieldsArray = [];
        this.offline = false;
        this.forceLeave = false; // To allow leaving the page without checking for changes.
        this.isEditing = false;
        this.fields = {};
        this.title = '';
        this.component = _services_data__WEBPACK_IMPORTED_MODULE_16__["AddonModDataProvider"].COMPONENT;
        this.loaded = false;
        this.selectedGroup = 0;
        this.cssClass = '';
        this.editFormRender = '';
        this.extraImports = [_components_components_compile_module__WEBPACK_IMPORTED_MODULE_15__["AddonModDataComponentsCompileModule"]];
        this.errors = {};
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_9__["CoreSites"].getCurrentSiteId();
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.module = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteParam('module');
        this.entryId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('entryId') || undefined;
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('courseId');
        this.selectedGroup = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('group') || 0;
        // If entryId is lower than 0 or null, it is a new entry or an offline entry.
        this.isEditing = typeof this.entryId != 'undefined' && this.entryId > 0;
        this.title = this.module.name;
        this.fetchEntryData(true);
    }
    /**
     * Check if we can leave the page or not and ask to confirm the lost of data.
     *
     * @return True if we can leave, false otherwise.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave || !this.entry) {
                return true;
            }
            const inputData = this.editForm.value;
            let changed = _services_data_helper__WEBPACK_IMPORTED_MODULE_17__["AddonModDataHelper"].hasEditDataChanged(inputData, this.fieldsArray, this.entry.contents);
            changed = changed || (!this.isEditing && this.initialSelectedGroup != this.selectedGroup);
            if (changed) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('coentryre.confirmcanceledit'));
            }
            // Delete the local files from the tmp folder.
            const files = yield _services_data_helper__WEBPACK_IMPORTED_MODULE_17__["AddonModDataHelper"].getEditTmpFiles(inputData, this.fieldsArray, this.entry.contents);
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploader"].clearTmpFiles(files);
            _singletons_form__WEBPACK_IMPORTED_MODULE_11__["CoreForms"].triggerFormCancelledEvent(this.formElement, this.siteId);
            return true;
        });
    }
    /**
     * Fetch the entry data.
     *
     * @param refresh To refresh all downloaded data.
     * @return Resolved when done.
     */
    fetchEntryData(refresh = false) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.database = yield _services_data__WEBPACK_IMPORTED_MODULE_16__["AddonModData"].getDatabase(this.courseId, this.module.id);
                this.title = this.database.name || this.title;
                this.cssClass = 'addon-data-entries-' + this.database.id;
                this.fieldsArray = yield _services_data__WEBPACK_IMPORTED_MODULE_16__["AddonModData"].getFields(this.database.id, { cmId: this.module.id });
                this.fields = _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__["CoreUtils"].arrayToObject(this.fieldsArray, 'id');
                const entry = yield _services_data_helper__WEBPACK_IMPORTED_MODULE_17__["AddonModDataHelper"].fetchEntry(this.database, this.fieldsArray, this.entryId || 0);
                this.entry = entry.entry;
                // Load correct group.
                this.selectedGroup = this.entry.groupid;
                // Check permissions when adding a new entry or offline entry.
                if (!this.isEditing) {
                    let haveAccess = false;
                    if (refresh) {
                        this.groupInfo = yield _services_groups__WEBPACK_IMPORTED_MODULE_7__["CoreGroups"].getActivityGroupInfo(this.database.coursemodule);
                        this.selectedGroup = _services_groups__WEBPACK_IMPORTED_MODULE_7__["CoreGroups"].validateGroupId(this.selectedGroup, this.groupInfo);
                        this.initialSelectedGroup = this.selectedGroup;
                    }
                    if (((_a = this.groupInfo) === null || _a === void 0 ? void 0 : _a.groups) && this.groupInfo.groups.length > 0) {
                        if (refresh) {
                            const canAddGroup = {};
                            yield Promise.all(this.groupInfo.groups.map((group) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                const accessData = yield _services_data__WEBPACK_IMPORTED_MODULE_16__["AddonModData"].getDatabaseAccessInformation(this.database.id, {
                                    cmId: this.module.id, groupId: group.id
                                });
                                canAddGroup[group.id] = accessData.canaddentry;
                            })));
                            this.groupInfo.groups = this.groupInfo.groups.filter((group) => !!canAddGroup[group.id]);
                            haveAccess = canAddGroup[this.selectedGroup];
                        }
                        else {
                            // Groups already filtered, so it have access.
                            haveAccess = true;
                        }
                    }
                    else {
                        const accessData = yield _services_data__WEBPACK_IMPORTED_MODULE_16__["AddonModData"].getDatabaseAccessInformation(this.database.id, { cmId: this.module.id });
                        haveAccess = accessData.canaddentry;
                    }
                    if (!haveAccess) {
                        // You shall not pass, go back.
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModal('addon.mod_data.noaccess', true);
                        // Go back to entry list.
                        this.forceLeave = true;
                        _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].back();
                        return;
                    }
                }
                this.editFormRender = this.displayEditFields();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
            this.loaded = true;
        });
    }
    /**
     * Saves data.
     *
     * @param e Event.
     * @return Resolved when done.
     */
    save(e) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            const inputData = this.editForm.value;
            try {
                let changed = _services_data_helper__WEBPACK_IMPORTED_MODULE_17__["AddonModDataHelper"].hasEditDataChanged(inputData, this.fieldsArray, ((_a = this.entry) === null || _a === void 0 ? void 0 : _a.contents) || {});
                changed = changed || (!this.isEditing && this.initialSelectedGroup != this.selectedGroup);
                if (!changed) {
                    if (this.entryId) {
                        yield this.returnToEntryList();
                        return;
                    }
                    // New entry, no changes means no field filled, warn the user.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('addon.mod_data.emptyaddform'));
                }
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showModalLoading('core.sending', true);
                // Create an ID to assign files.
                const entryTemp = this.entryId ? this.entryId : -(new Date().getTime());
                let editData = [];
                try {
                    try {
                        editData = yield _services_data_helper__WEBPACK_IMPORTED_MODULE_17__["AddonModDataHelper"].getEditDataFromForm(inputData, this.fieldsArray, this.database.id, entryTemp, ((_b = this.entry) === null || _b === void 0 ? void 0 : _b.contents) || {}, this.offline);
                    }
                    catch (error) {
                        if (this.offline) {
                            throw error;
                        }
                        // Cannot submit in online, prepare for offline usage.
                        this.offline = true;
                        editData = yield _services_data_helper__WEBPACK_IMPORTED_MODULE_17__["AddonModDataHelper"].getEditDataFromForm(inputData, this.fieldsArray, this.database.id, entryTemp, ((_c = this.entry) === null || _c === void 0 ? void 0 : _c.contents) || {}, this.offline);
                    }
                    if (editData.length <= 0) {
                        // No field filled, warn the user.
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_13__["Translate"].instant('addon.mod_data.emptyaddform'));
                    }
                    let updateEntryResult;
                    if (this.isEditing) {
                        updateEntryResult = yield _services_data__WEBPACK_IMPORTED_MODULE_16__["AddonModData"].editEntry(this.database.id, this.entryId, this.courseId, editData, this.fieldsArray, this.siteId, this.offline);
                    }
                    else {
                        updateEntryResult = yield _services_data__WEBPACK_IMPORTED_MODULE_16__["AddonModData"].addEntry(this.database.id, entryTemp, this.courseId, editData, this.selectedGroup, this.fieldsArray, this.siteId, this.offline);
                    }
                    // This is done if entry is updated when editing or creating if not.
                    if ((this.isEditing && 'updated' in updateEntryResult && updateEntryResult.updated) ||
                        (!this.isEditing && 'newentryid' in updateEntryResult && updateEntryResult.newentryid)) {
                        _singletons_form__WEBPACK_IMPORTED_MODULE_11__["CoreForms"].triggerFormSubmittedEvent(this.formElement, updateEntryResult.sent, this.siteId);
                        const promises = [];
                        if (updateEntryResult.sent) {
                            _singletons_events__WEBPACK_IMPORTED_MODULE_14__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_14__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'data' });
                            if (this.isEditing) {
                                promises.push(_services_data__WEBPACK_IMPORTED_MODULE_16__["AddonModData"].invalidateEntryData(this.database.id, this.entryId, this.siteId));
                            }
                            promises.push(_services_data__WEBPACK_IMPORTED_MODULE_16__["AddonModData"].invalidateEntriesData(this.database.id, this.siteId));
                        }
                        try {
                            yield Promise.all(promises);
                            _singletons_events__WEBPACK_IMPORTED_MODULE_14__["CoreEvents"].trigger(_services_data__WEBPACK_IMPORTED_MODULE_16__["AddonModDataProvider"].ENTRY_CHANGED, { dataId: this.database.id, entryId: this.entryId }, this.siteId);
                        }
                        finally {
                            this.returnToEntryList();
                        }
                    }
                    else {
                        this.errors = {};
                        if (updateEntryResult.fieldnotifications) {
                            updateEntryResult.fieldnotifications.forEach((fieldNotif) => {
                                const field = this.fieldsArray.find((field) => field.name == fieldNotif.fieldname);
                                if (field) {
                                    this.errors[field.id] = fieldNotif.notification;
                                }
                            });
                        }
                        this.jsData.errors = this.errors;
                        setTimeout(() => {
                            this.scrollToFirstError();
                        });
                    }
                }
                finally {
                    modal.dismiss();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].showErrorModalDefault(error, 'Cannot edit entry', true);
            }
        });
    }
    /**
     * Set group to see the database.
     *
     * @param groupId Group identifier to set.
     * @return Resolved when done.
     */
    setGroup(groupId) {
        this.selectedGroup = groupId;
        this.loaded = false;
        return this.fetchEntryData();
    }
    /**
     * Displays Edit Search Fields.
     *
     * @return Generated HTML.
     */
    displayEditFields() {
        var _a;
        this.jsData = {
            fields: this.fields,
            contents: _services_utils_utils__WEBPACK_IMPORTED_MODULE_12__["CoreUtils"].clone((_a = this.entry) === null || _a === void 0 ? void 0 : _a.contents) || {},
            form: this.editForm,
            database: this.database,
            errors: this.errors,
        };
        let template = _services_data_helper__WEBPACK_IMPORTED_MODULE_17__["AddonModDataHelper"].getTemplate(this.database, _services_data__WEBPACK_IMPORTED_MODULE_16__["AddonModDataTemplateType"].ADD, this.fieldsArray);
        // Replace the fields found on template.
        this.fieldsArray.forEach((field) => {
            let replace = '[[' + field.name + ']]';
            replace = replace.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
            let replaceRegEx = new RegExp(replace, 'gi');
            // Replace field by a generic directive.
            const render = '<addon-mod-data-field-plugin [class.has-errors]="!!errors[' + field.id + ']" mode="edit" \
                [field]="fields[' + field.id + ']" [value]="contents[' + field.id + ']" [form]="form" [database]="database" \
                [error]="errors[' + field.id + ']"></addon-mod-data-field-plugin>';
            template = template.replace(replaceRegEx, render);
            // Replace the field id tag.
            replace = '[[' + field.name + '#id]]';
            replace = replace.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
            replaceRegEx = new RegExp(replace, 'gi');
            template = template.replace(replaceRegEx, 'field_' + field.id);
        });
        // Editing tags is not supported.
        const replaceRegEx = new RegExp('##tags##', 'gi');
        const message = _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_5__["CoreTag"].areTagsAvailableInSite()
            ? '<p class="item-dimmed">{{ \'addon.mod_data.edittagsnotsupported\' | translate }}</p>'
            : '';
        template = template.replace(replaceRegEx, message);
        return template;
    }
    /**
     * Return to the entry list (previous page) discarding temp data.
     *
     * @return Resolved when done.
     */
    returnToEntryList() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const inputData = this.editForm.value;
            try {
                const files = yield _services_data_helper__WEBPACK_IMPORTED_MODULE_17__["AddonModDataHelper"].getEditTmpFiles(inputData, this.fieldsArray, ((_a = this.entry) === null || _a === void 0 ? void 0 : _a.contents) || {});
                _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploader"].clearTmpFiles(files);
            }
            finally {
                // Go back to entry list.
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].back();
            }
        });
    }
    /**
     * Scroll to first error or to the top if not found.
     */
    scrollToFirstError() {
        var _a;
        if (!_services_utils_dom__WEBPACK_IMPORTED_MODULE_10__["CoreDomUtils"].scrollToElementBySelector(this.formElement.nativeElement, this.content, '.addon-data-error')) {
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
        }
    }
};
AddonModDataEditPage.ctorParameters = () => [];
AddonModDataEditPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"],] }],
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['editFormEl',] }]
};
AddonModDataEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-data-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/data/pages/edit/edit.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../data.scss */ "./src/addons/mod/data/data.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../data-forms.scss */ "./src/addons/mod/data/data-forms.scss")).default]
    })
], AddonModDataEditPage);



/***/ }),

/***/ "./src/addons/mod/data/pages/entry/entry.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/data/pages/entry/entry.ts ***!
  \**************************************************/
/*! exports provided: AddonModDataEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModDataEntryPage", function() { return AddonModDataEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_comments_components_comments_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/comments/components/comments/comments */ "./src/core/features/comments/components/comments/comments.ts");
/* harmony import */ var _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/comments/services/comments */ "./src/core/features/comments/services/comments.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_groups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/groups */ "./src/core/services/groups.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_components_compile_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/components-compile.module */ "./src/addons/mod/data/components/components-compile.module.ts");
/* harmony import */ var _services_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/data */ "./src/addons/mod/data/services/data.ts");
/* harmony import */ var _services_data_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/data-helper */ "./src/addons/mod/data/services/data-helper.ts");
/* harmony import */ var _services_data_sync__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/data-sync */ "./src/addons/mod/data/services/data-sync.ts");
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
 * Page that displays the view entry page.
 */
let AddonModDataEntryPage = class AddonModDataEntryPage {
    constructor(cdr) {
        this.cdr = cdr;
        this.fields = {};
        this.fieldsArray = [];
        this.title = '';
        this.moduleName = 'data';
        this.component = _services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModDataProvider"].COMPONENT;
        this.entryLoaded = false;
        this.renderingEntry = false;
        this.loadingComments = false;
        this.loadingRating = false;
        this.selectedGroup = 0;
        this.hasPrevious = false;
        this.hasNext = false;
        this.showComments = false;
        this.entryHtml = '';
        this.extraImports = [_components_components_compile_module__WEBPACK_IMPORTED_MODULE_12__["AddonModDataComponentsCompileModule"]];
        this.isPullingToRefresh = false; // Whether the last fetching of data was started by a pull-to-refresh action
        this.commentsEnabled = false;
        this.moduleName = _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__["CoreCourse"].translateModuleName('data');
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_8__["CoreSites"].getCurrentSiteId();
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].on(_services_data_sync__WEBPACK_IMPORTED_MODULE_15__["AddonModDataSyncProvider"].AUTO_SYNCED, (data) => {
            var _a;
            if (typeof data.entryId == 'undefined') {
                return;
            }
            if ((data.entryId == this.entryId || data.offlineEntryId == this.entryId) && ((_a = this.database) === null || _a === void 0 ? void 0 : _a.id) == data.dataId) {
                if (data.deleted) {
                    // If deleted, go back.
                    _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].back();
                }
                else {
                    this.entryId = data.entryId;
                    this.entryLoaded = false;
                    this.fetchEntryData(true);
                }
            }
        }, this.siteId);
        // Refresh entry on change.
        this.entryChangedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].on(_services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModDataProvider"].ENTRY_CHANGED, (data) => {
            var _a;
            if (data.entryId == this.entryId && ((_a = this.database) === null || _a === void 0 ? void 0 : _a.id) == data.dataId) {
                if (data.deleted) {
                    // If deleted, go back.
                    _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].back();
                }
                else {
                    this.entryLoaded = false;
                    this.fetchEntryData(true);
                }
            }
        }, this.siteId);
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.module = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteParam('module');
            this.entryId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('entryId') || undefined;
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('courseId');
            this.selectedGroup = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('group') || 0;
            this.offset = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('offset');
            this.title = this.module.name;
            this.commentsEnabled = !_features_comments_services_comments__WEBPACK_IMPORTED_MODULE_3__["CoreComments"].areCommentsDisabledInSite();
            yield this.fetchEntryData();
            this.logView();
        });
    }
    /**
     * Fetch the entry data.
     *
     * @param refresh Whether to refresh the current data or not.
     * @param isPtr Whether is a pull to refresh action.
     * @return Resolved when done.
     */
    fetchEntryData(refresh = false, isPtr = false) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isPullingToRefresh = isPtr;
            try {
                this.database = yield _services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModData"].getDatabase(this.courseId, this.module.id);
                this.title = this.database.name || this.title;
                this.fieldsArray = yield _services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModData"].getFields(this.database.id, { cmId: this.module.id });
                this.fields = _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].arrayToObject(this.fieldsArray, 'id');
                yield this.setEntryFromOffset();
                this.access = yield _services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModData"].getDatabaseAccessInformation(this.database.id, { cmId: this.module.id });
                this.groupInfo = yield _services_groups__WEBPACK_IMPORTED_MODULE_6__["CoreGroups"].getActivityGroupInfo(this.database.coursemodule);
                this.selectedGroup = _services_groups__WEBPACK_IMPORTED_MODULE_6__["CoreGroups"].validateGroupId(this.selectedGroup, this.groupInfo);
                const actions = _services_data_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModDataHelper"].getActions(this.database, this.access, this.entry);
                const template = _services_data_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModDataHelper"].getTemplate(this.database, _services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModDataTemplateType"].SINGLE, this.fieldsArray);
                this.entryHtml = _services_data_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModDataHelper"].displayShowFields(template, this.fieldsArray, this.entry, this.offset, _services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModDataTemplateMode"].SHOW, actions);
                this.showComments = actions.comments;
                const entries = {};
                entries[this.entryId] = this.entry;
                // Pass the input data to the component.
                this.jsData = {
                    fields: this.fields,
                    entries: entries,
                    database: this.database,
                    module: this.module,
                    group: this.selectedGroup,
                };
            }
            catch (error) {
                if (!refresh) {
                    // Some call failed, retry without using cache since it might be a new activity.
                    return this.refreshAllData(isPtr);
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
            }
            finally {
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                this.entryLoaded = true;
            }
        });
    }
    /**
     * Go to selected entry without changing state.
     *
     * @param offset Entry offset.
     * @return Resolved when done.
     */
    gotoEntry(offset) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.offset = offset;
            this.entryId = undefined;
            this.entry = undefined;
            this.entryLoaded = false;
            yield this.fetchEntryData();
            this.logView();
        });
    }
    /**
     * Refresh all the data.
     *
     * @param isPtr Whether is a pull to refresh action.
     * @return Promise resolved when done.
     */
    refreshAllData(isPtr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModData"].invalidateDatabaseData(this.courseId));
            if (this.database) {
                promises.push(_services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModData"].invalidateEntryData(this.database.id, this.entryId));
                promises.push(_services_groups__WEBPACK_IMPORTED_MODULE_6__["CoreGroups"].invalidateActivityGroupInfo(this.database.coursemodule));
                promises.push(_services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModData"].invalidateEntriesData(this.database.id));
                promises.push(_services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModData"].invalidateFieldsData(this.database.id));
                if (this.database.comments && this.entry && this.entry.id > 0 && this.commentsEnabled && this.comments) {
                    // Refresh comments. Don't add it to promises because we don't want the comments fetch to block the entry fetch.
                    this.comments.doRefresh().catch(() => {
                        // Ignore errors.
                    });
                }
            }
            yield Promise.all(promises).finally(() => this.fetchEntryData(true, isPtr));
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @return Promise resolved when done.
     */
    refreshDatabase(refresher) {
        if (!this.entryLoaded) {
            return;
        }
        this.refreshAllData(true).finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Set group to see the database.
     *
     * @param groupId Group identifier to set.
     * @return Resolved when done.
     */
    setGroup(groupId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedGroup = groupId;
            this.offset = undefined;
            this.entry = undefined;
            this.entryId = undefined;
            this.entryLoaded = false;
            yield this.fetchEntryData();
            this.logView();
        });
    }
    /**
     * Convenience function to fetch the entry and set next/previous entries.
     *
     * @return Resolved when done.
     */
    setEntryFromOffset() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (typeof this.offset == 'undefined' && typeof this.entryId != 'undefined') {
                // Entry id passed as navigation parameter instead of the offset.
                // We don't display next/previous buttons in this case.
                this.hasNext = false;
                this.hasPrevious = false;
                const entry = yield _services_data_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModDataHelper"].fetchEntry(this.database, this.fieldsArray, this.entryId);
                this.entry = entry.entry;
                this.ratingInfo = entry.ratinginfo;
                return;
            }
            const perPage = _services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModDataProvider"].PER_PAGE;
            const page = typeof this.offset != 'undefined' && this.offset >= 0
                ? Math.floor(this.offset / perPage)
                : 0;
            const entries = yield _services_data_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModDataHelper"].fetchEntries(this.database, this.fieldsArray, {
                groupId: this.selectedGroup,
                sort: 0,
                order: 'DESC',
                page,
                perPage,
            });
            const pageEntries = (entries.offlineEntries || []).concat(entries.entries);
            // Index of the entry when concatenating offline and online page entries.
            let pageIndex = 0;
            if (typeof this.offset == 'undefined') {
                // No offset passed, display the first entry.
                pageIndex = 0;
            }
            else if (this.offset > 0) {
                // Online entry.
                pageIndex = this.offset % perPage + (((_a = entries.offlineEntries) === null || _a === void 0 ? void 0 : _a.length) || 0);
            }
            else {
                // Offline entry.
                pageIndex = this.offset + (((_b = entries.offlineEntries) === null || _b === void 0 ? void 0 : _b.length) || 0);
            }
            this.entry = pageEntries[pageIndex];
            this.entryId = this.entry.id;
            this.hasPrevious = page > 0 || pageIndex > 0;
            if (pageIndex + 1 < pageEntries.length) {
                // Not the last entry on the page;
                this.hasNext = true;
            }
            else if (pageEntries.length < perPage) {
                // Last entry of the last page.
                this.hasNext = false;
            }
            else {
                // Last entry of the page, check if there are more pages.
                const entries = yield _services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModData"].getEntries(this.database.id, {
                    groupId: this.selectedGroup,
                    page: page + 1,
                    perPage: perPage,
                });
                this.hasNext = ((_c = entries === null || entries === void 0 ? void 0 : entries.entries) === null || _c === void 0 ? void 0 : _c.length) > 0;
            }
            if (this.entryId > 0) {
                // Online entry, we need to fetch the the rating info.
                const entry = yield _services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModData"].getEntry(this.database.id, this.entryId, { cmId: this.module.id });
                this.ratingInfo = entry.ratinginfo;
            }
        });
    }
    /**
     * Function called when entry is being rendered.
     */
    setRenderingEntry(rendering) {
        this.renderingEntry = rendering;
        this.cdr.detectChanges();
    }
    /**
     * Function called when comments component is loading data.
     */
    setLoadingComments(loading) {
        this.loadingComments = loading;
        this.cdr.detectChanges();
    }
    /**
     * Function called when rate component is loading data.
     */
    setLoadingRating(loading) {
        this.loadingRating = loading;
        this.cdr.detectChanges();
    }
    /**
     * Function called when rating is updated online.
     */
    ratingUpdated() {
        _services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModData"].invalidateEntryData(this.database.id, this.entryId);
    }
    /**
     * Log viewing the activity.
     *
     * @return Promise resolved when done.
     */
    logView() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.database || !this.database.id) {
                return;
            }
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(_services_data__WEBPACK_IMPORTED_MODULE_13__["AddonModData"].logView(this.database.id, this.database.name));
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        var _a, _b;
        (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.entryChangedObserver) === null || _b === void 0 ? void 0 : _b.off();
    }
};
AddonModDataEntryPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AddonModDataEntryPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"],] }],
    comments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_features_comments_components_comments_comments__WEBPACK_IMPORTED_MODULE_2__["CoreCommentsCommentsComponent"],] }]
};
AddonModDataEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-data-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entry.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/data/pages/entry/entry.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../data.scss */ "./src/addons/mod/data/data.scss")).default]
    })
], AddonModDataEntryPage);



/***/ }),

/***/ "./src/addons/mod/data/pages/index/index.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/data/pages/index/index.ts ***!
  \**************************************************/
/*! exports provided: AddonModDataIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModDataIndexPage", function() { return AddonModDataIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_index_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/index/index */ "./src/addons/mod/data/components/index/index.ts");
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
 * Page that displays a data.
 */
let AddonModDataIndexPage = class AddonModDataIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
    constructor() {
        super(...arguments);
        this.group = 0;
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        super.ngOnInit();
        this.group = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteNumberParam('group') || 0;
    }
};
AddonModDataIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index_index__WEBPACK_IMPORTED_MODULE_4__["AddonModDataIndexComponent"],] }]
};
AddonModDataIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-data-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/data/pages/index/index.html")).default,
    })
], AddonModDataIndexPage);



/***/ })

}]);
//# sourceMappingURL=data-lazy-module.js.map