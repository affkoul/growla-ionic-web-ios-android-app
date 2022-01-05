(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/edit/edit.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/edit/edit.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1 *ngIf=\"glossary\">\n            <core-format-text [text]=\"glossary.name\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]=\"loaded\">\n        <form #editFormEl *ngIf=\"glossary\">\n            <ion-item>\n                <ion-label position=\"stacked\">{{ 'addon.mod_glossary.concept' | translate }}</ion-label>\n                <ion-input type=\"text\" [placeholder]=\"'addon.mod_glossary.concept' | translate\" [(ngModel)]=\"entry.concept\"\n                    name=\"concept\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">{{ 'addon.mod_glossary.definition' | translate }}</ion-label>\n                <core-rich-text-editor [control]=\"definitionControl\" (contentChanged)=\"onDefinitionChange($event)\"\n                    [placeholder]=\"'addon.mod_glossary.definition' | translate\" name=\"addon_mod_glossary_edit\"\n                    [component]=\"component\" [componentId]=\"cmId\" [autoSave]=\"true\" contextLevel=\"module\"\n                    [contextInstanceId]=\"cmId\" elementId=\"definition_editor\" [draftExtraParams]=\"editorExtraParams\">\n                </core-rich-text-editor>\n            </ion-item>\n            <ion-item *ngIf=\"categories.length > 0\">\n                <ion-label position=\"stacked\" id=\"addon-mod-glossary-categories-label\">\n                    {{ 'addon.mod_glossary.categories' | translate }}\n                </ion-label>\n                <ion-select [(ngModel)]=\"options.categories\" multiple=\"true\" aria-labelledby=\"addon-mod-glossary-categories-label\"\n                    interface=\"action-sheet\" [placeholder]=\"'addon.mod_glossary.categories' | translate\" name=\"categories\"\n                    [interfaceOptions]=\"{header: 'addon.mod_glossary.categories' | translate}\">\n                    <ion-select-option *ngFor=\"let category of categories\" [value]=\"category.id\">\n                        {{ category.name }}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\" id=\"addon-mod-glossary-aliases-label\">\n                    {{ 'addon.mod_glossary.aliases' | translate }}\n                </ion-label>\n                <ion-textarea [(ngModel)]=\"options.aliases\" rows=\"1\" [core-auto-rows]=\"options.aliases\"\n                    aria-labelledby=\"addon-mod-glossary-aliases-label\" name=\"aliases\">\n                </ion-textarea>\n            </ion-item>\n            <ion-item-divider>\n                <ion-label><h2>{{ 'addon.mod_glossary.attachment' | translate }}</h2></ion-label>\n            </ion-item-divider>\n            <core-attachments [files]=\"attachments\" [component]=\"component\" [componentId]=\"glossary.coursemodule\"\n                [allowOffline]=\"true\">\n            </core-attachments>\n            <ng-container *ngIf=\"glossary.usedynalink\">\n                <ion-item-divider>\n                    <ion-label><h2>{{ 'addon.mod_glossary.linking' | translate }}</h2></ion-label>\n                </ion-item-divider>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>{{ 'addon.mod_glossary.entryusedynalink' | translate }}</ion-label>\n                    <ion-toggle [(ngModel)]=\"options.usedynalink\" name=\"usedynalink\"></ion-toggle>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>{{ 'addon.mod_glossary.casesensitive' | translate }}</ion-label>\n                    <ion-toggle [disabled]=\"!options.usedynalink\" [(ngModel)]=\"options.casesensitive\" name=\"casesensitive\">\n                    </ion-toggle>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>{{ 'addon.mod_glossary.fullmatch' | translate }}</ion-label>\n                    <ion-toggle [disabled]=\"!options.usedynalink\" [(ngModel)]=\"options.fullmatch\" name=\"fullmatch\"></ion-toggle>\n                </ion-item>\n            </ng-container>\n            <ion-button class=\"ion-margin\" expand=\"block\" [disabled]=\"!entry.concept || !entry.definition\" (click)=\"save()\">\n                {{ 'core.save' | translate }}\n            </ion-button>\n        </form>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/glossary/pages/edit/edit.module.ts":
/*!***********************************************************!*\
  !*** ./src/addons/mod/glossary/pages/edit/edit.module.ts ***!
  \***********************************************************/
/*! exports provided: AddonModGlossaryEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryEditPageModule", function() { return AddonModGlossaryEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/addons/mod/glossary/pages/edit/edit.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
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







const routes = [{
        path: '',
        component: _edit__WEBPACK_IMPORTED_MODULE_2__["AddonModGlossaryEditPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_6__["CanLeaveGuard"]],
    }];
let AddonModGlossaryEditPageModule = class AddonModGlossaryEditPageModule {
};
AddonModGlossaryEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _edit__WEBPACK_IMPORTED_MODULE_2__["AddonModGlossaryEditPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreEditorComponentsModule"],
        ],
    })
], AddonModGlossaryEditPageModule);



/***/ }),

/***/ "./src/addons/mod/glossary/pages/edit/edit.ts":
/*!****************************************************!*\
  !*** ./src/addons/mod/glossary/pages/edit/edit.ts ***!
  \****************************************************/
/*! exports provided: AddonModGlossaryEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryEditPage", function() { return AddonModGlossaryEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _services_glossary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/glossary */ "./src/addons/mod/glossary/services/glossary.ts");
/* harmony import */ var _services_glossary_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/glossary-helper */ "./src/addons/mod/glossary/services/glossary-helper.ts");
/* harmony import */ var _services_glossary_offline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/glossary-offline */ "./src/addons/mod/glossary/services/glossary-offline.ts");
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
 * Page that displays the edit form.
 */
let AddonModGlossaryEditPage = class AddonModGlossaryEditPage {
    constructor(splitView) {
        this.splitView = splitView;
        this.component = _services_glossary__WEBPACK_IMPORTED_MODULE_13__["AddonModGlossaryProvider"].COMPONENT;
        this.loaded = false;
        this.attachments = [];
        this.definitionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.categories = [];
        this.editorExtraParams = {};
        this.entry = {
            concept: '',
            definition: '',
            timecreated: 0,
        };
        this.options = {
            categories: [],
            aliases: '',
            usedynalink: false,
            casesensitive: false,
            fullmatch: false,
        };
        this.isDestroyed = false;
        this.saved = false;
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('cmId');
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('courseId');
        this.timecreated = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('timecreated');
        this.concept = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('concept');
        this.editorExtraParams.timecreated = this.timecreated;
        this.fetchData();
    }
    /**
     * Fetch required data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.glossary = yield _services_glossary__WEBPACK_IMPORTED_MODULE_13__["AddonModGlossary"].getGlossary(this.courseId, this.cmId);
                if (this.timecreated > 0) {
                    yield this.loadOfflineData();
                }
                this.categories = yield _services_glossary__WEBPACK_IMPORTED_MODULE_13__["AddonModGlossary"].getAllCategories(this.glossary.id, {
                    cmId: this.cmId,
                });
                this.loaded = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_glossary.errorloadingglossary', true);
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
            }
        });
    }
    /**
     * Load offline data when editing an offline entry.
     *
     * @return Promise resolved when done.
     */
    loadOfflineData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const entry = yield _services_glossary_offline__WEBPACK_IMPORTED_MODULE_15__["AddonModGlossaryOffline"].getNewEntry(this.glossary.id, this.concept || '', this.timecreated);
            this.entry.concept = entry.concept || '';
            this.entry.definition = entry.definition || '';
            this.entry.timecreated = entry.timecreated;
            this.originalData = {
                concept: this.entry.concept,
                definition: this.entry.definition,
                files: [],
                timecreated: entry.timecreated,
            };
            if (entry.options) {
                this.options.categories = (entry.options.categories && entry.options.categories.split(',')) || [];
                this.options.aliases = entry.options.aliases || '';
                this.options.usedynalink = !!entry.options.usedynalink;
                if (this.options.usedynalink) {
                    this.options.casesensitive = !!entry.options.casesensitive;
                    this.options.fullmatch = !!entry.options.fullmatch;
                }
            }
            // Treat offline attachments if any.
            if ((_a = entry.attachments) === null || _a === void 0 ? void 0 : _a.offline) {
                this.attachments = yield _services_glossary_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModGlossaryHelper"].getStoredFiles(this.glossary.id, entry.concept, entry.timecreated);
                this.originalData.files = this.attachments.slice();
            }
            this.definitionControl.setValue(this.entry.definition);
        });
    }
    /**
     * Reset the form data.
     */
    resetForm() {
        this.entry.concept = '';
        this.entry.definition = '';
        this.entry.timecreated = 0;
        this.originalData = undefined;
        this.options.categories = [];
        this.options.aliases = '';
        this.options.usedynalink = false;
        this.options.casesensitive = false;
        this.options.fullmatch = false;
        this.attachments.length = 0; // Empty the array.
        this.definitionControl.setValue('');
    }
    /**
     * Definition changed.
     *
     * @param text The new text.
     */
    onDefinitionChange(text) {
        this.entry.definition = text;
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.saved) {
                return true;
            }
            if (_services_glossary_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModGlossaryHelper"].hasEntryDataChanged(this.entry, this.attachments, this.originalData)) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.confirmcanceledit'));
            }
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_5__["CoreFileUploader"].clearTmpFiles(this.attachments);
            _singletons_form__WEBPACK_IMPORTED_MODULE_12__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
            return true;
        });
    }
    /**
     * Save the entry.
     */
    save() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let definition = this.entry.definition;
            let entryId;
            const timecreated = this.entry.timecreated || Date.now();
            if (!this.entry.concept || !definition) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('addon.mod_glossary.fillfields', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
            definition = _services_utils_text__WEBPACK_IMPORTED_MODULE_9__["CoreTextUtils"].formatHtmlLines(definition);
            try {
                // Upload attachments first if any.
                const { saveOffline, attachmentsResult } = yield this.uploadAttachments(timecreated);
                const options = {
                    aliases: this.options.aliases,
                    categories: this.options.categories.join(','),
                };
                if (this.glossary.usedynalink) {
                    options.usedynalink = this.options.usedynalink ? 1 : 0;
                    if (this.options.usedynalink) {
                        options.casesensitive = this.options.casesensitive ? 1 : 0;
                        options.fullmatch = this.options.fullmatch ? 1 : 0;
                    }
                }
                if (saveOffline) {
                    if (this.entry && !this.glossary.allowduplicatedentries) {
                        // Check if the entry is duplicated in online or offline mode.
                        const isUsed = yield _services_glossary__WEBPACK_IMPORTED_MODULE_13__["AddonModGlossary"].isConceptUsed(this.glossary.id, this.entry.concept, {
                            timeCreated: this.entry.timecreated,
                            cmId: this.cmId,
                        });
                        if (isUsed) {
                            // There's a entry with same name, reject with error message.
                            throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('addon.mod_glossary.errconceptalreadyexists'));
                        }
                    }
                    // Save entry in offline.
                    yield _services_glossary_offline__WEBPACK_IMPORTED_MODULE_15__["AddonModGlossaryOffline"].addNewEntry(this.glossary.id, this.entry.concept, definition, this.courseId, options, attachmentsResult, timecreated, undefined, undefined, this.entry);
                }
                else {
                    // Try to send it to server.
                    // Don't allow offline if there are attachments since they were uploaded fine.
                    yield _services_glossary__WEBPACK_IMPORTED_MODULE_13__["AddonModGlossary"].addEntry(this.glossary.id, this.entry.concept, definition, this.courseId, options, attachmentsResult, {
                        timeCreated: timecreated,
                        discardEntry: this.entry,
                        allowOffline: !this.attachments.length,
                        checkDuplicates: !this.glossary.allowduplicatedentries,
                    });
                }
                // Delete the local files from the tmp folder.
                _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_5__["CoreFileUploader"].clearTmpFiles(this.attachments);
                if (entryId) {
                    // Data sent to server, delete stored files (if any).
                    _services_glossary_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModGlossaryHelper"].deleteStoredFiles(this.glossary.id, this.entry.concept, timecreated);
                    _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'glossary' });
                }
                _singletons_events__WEBPACK_IMPORTED_MODULE_11__["CoreEvents"].trigger(_services_glossary__WEBPACK_IMPORTED_MODULE_13__["AddonModGlossaryProvider"].ADD_ENTRY_EVENT, {
                    glossaryId: this.glossary.id,
                    entryId: entryId,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
                _singletons_form__WEBPACK_IMPORTED_MODULE_12__["CoreForms"].triggerFormSubmittedEvent(this.formElement, !!entryId, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
                if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
                    if (this.timecreated > 0) {
                        // Reload the data.
                        yield this.loadOfflineData();
                    }
                    else {
                        // Empty form.
                        this.resetForm();
                    }
                }
                else {
                    this.saved = true;
                    _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_glossary.cannoteditentry', true);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Upload entry attachments if any.
     *
     * @param timecreated Entry's timecreated.
     * @return Promise resolved when done.
     */
    uploadAttachments(timecreated) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.attachments.length) {
                return {
                    saveOffline: false,
                };
            }
            try {
                const attachmentsResult = yield _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_5__["CoreFileUploader"].uploadOrReuploadFiles(this.attachments, _services_glossary__WEBPACK_IMPORTED_MODULE_13__["AddonModGlossaryProvider"].COMPONENT, this.glossary.id);
                return {
                    saveOffline: false,
                    attachmentsResult,
                };
            }
            catch (_a) {
                // Cannot upload them in online, save them in offline.
                const attachmentsResult = yield _services_glossary_helper__WEBPACK_IMPORTED_MODULE_14__["AddonModGlossaryHelper"].storeFiles(this.glossary.id, this.entry.concept, timecreated, this.attachments);
                return {
                    saveOffline: true,
                    attachmentsResult,
                };
            }
        });
    }
};
AddonModGlossaryEditPage.ctorParameters = () => [
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_4__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
AddonModGlossaryEditPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['editFormEl',] }]
};
AddonModGlossaryEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-glossary-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/edit/edit.html")).default,
    })
], AddonModGlossaryEditPage);



/***/ })

}]);
//# sourceMappingURL=pages-edit-edit-module.js.map