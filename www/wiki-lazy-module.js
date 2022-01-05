(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wiki-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/wiki/pages/edit/edit.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/wiki/pages/edit/edit.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"save()\">\n                {{ 'core.save' | translate }}\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]=\"loaded\">\n        <form [formGroup]=\"pageForm\" #editPageForm *ngIf=\"loaded\">\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"canEditTitle\">\n                <ion-label class=\"sr-only\">{{ 'addon.mod_wiki.newpagetitle' | translate }}</ion-label>\n                <ion-input name=\"title\" type=\"text\" [placeholder]=\"'addon.mod_wiki.newpagetitle' | translate\"\n                    formControlName=\"title\">\n                </ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class=\"sr-only\">{{ 'core.content' | translate }}</ion-label>\n                <core-rich-text-editor [control]=\"contentControl\" [placeholder]=\"'core.content' | translate\"\n                    name=\"wiki_page_content\" [component]=\"component\" [componentId]=\"cmId\" [autoSave]=\"true\" contextLevel=\"module\"\n                    [contextInstanceId]=\"cmId\" elementId=\"newcontent_editor\" [draftExtraParams]=\"editorExtraParams\">\n                </core-rich-text-editor>\n            </ion-item>\n\n            <ion-item *ngIf=\"wrongVersionLock\" class=\"ion-text-center addon-mod_wiki-wrongversionlock\" >\n                <ion-label>\n                    <ion-badge color=\"danger\" class=\"ion-padding\">{{ 'addon.mod_wiki.wrongversionlock' | translate }}</ion-badge>\n                </ion-label>\n            </ion-item>\n        </form>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/wiki/pages/edit/edit.ts":
/*!************************************************!*\
  !*** ./src/addons/mod/wiki/pages/edit/edit.ts ***!
  \************************************************/
/*! exports provided: AddonModWikiEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWikiEditPage", function() { return AddonModWikiEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _services_wiki__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/wiki */ "./src/addons/mod/wiki/services/wiki.ts");
/* harmony import */ var _services_wiki_offline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/wiki-offline */ "./src/addons/mod/wiki/services/wiki-offline.ts");
/* harmony import */ var _services_wiki_sync__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/wiki-sync */ "./src/addons/mod/wiki/services/wiki-sync.ts");
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
 * Page that allows adding or editing a wiki page.
 */
let AddonModWikiEditPage = class AddonModWikiEditPage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.canEditTitle = false; // Whether title can be edited.
        this.loaded = false; // Whether the data has been loaded.
        this.component = _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWikiProvider"].COMPONENT; // Component to link the files to.
        this.wrongVersionLock = false; // Whether the page lock doesn't match the initial one.
        this.editorExtraParams = {};
        this.editing = false; // Whether the user is editing a page (true) or creating a new one (false).
        this.editOffline = false; // Whether the user is editing an offline page.
        this.subwikiFiles = []; // List of files of the subwiki.
        this.forceLeave = false; // To allow leaving the page without checking for changes.
        this.isDestroyed = false; // Whether the page has been destroyed.
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('cmId') || undefined;
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('courseId') || undefined;
            this.subwikiId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('subwikiId');
            this.wikiId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('wikiId');
            this.pageId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('pageId');
            this.section = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteParam('section');
            this.groupId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('groupId');
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('userId');
            let pageTitle = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteParam('pageTitle');
            pageTitle = pageTitle ? pageTitle.replace(/\+/g, ' ') : '';
            this.canEditTitle = !pageTitle;
            this.title = pageTitle ?
                _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('addon.mod_wiki.editingpage', { $a: pageTitle }) :
                _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('addon.mod_wiki.newpagehdr');
            this.blockId = _services_wiki_sync__WEBPACK_IMPORTED_MODULE_16__["AddonModWikiSync"].getSubwikiBlockId(this.subwikiId, this.wikiId, this.userId, this.groupId);
            // Create the form group and its controls.
            this.contentControl = this.formBuilder.control('');
            this.pageForm = this.formBuilder.group({
                title: pageTitle,
            });
            this.pageForm.addControl('text', this.contentControl);
            // Block the wiki so it cannot be synced.
            _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].blockOperation(this.component, this.blockId);
            if (this.pageId) {
                this.editorExtraParams.pageid = this.pageId;
                if (this.section) {
                    this.editorExtraParams.section = this.section;
                }
            }
            else if (pageTitle) {
                this.editorExtraParams.pagetitle = pageTitle;
            }
            try {
                const success = yield this.fetchWikiPageData();
                if (success && !this.isDestroyed) {
                    // Block the subwiki now that we have blockId for sure.
                    const newBlockId = _services_wiki_sync__WEBPACK_IMPORTED_MODULE_16__["AddonModWikiSync"].getSubwikiBlockId(this.subwikiId, this.wikiId, this.userId, this.groupId);
                    if (newBlockId != this.blockId) {
                        _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].unblockOperation(this.component, this.blockId);
                        this.blockId = newBlockId;
                        _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].blockOperation(this.component, this.blockId);
                    }
                }
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Convenience function to get wiki page data.
     *
     * @return Promise resolved with boolean: whether it was successful.
     */
    fetchWikiPageData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let canEdit = false;
            let fetchFailed = false;
            try {
                // Wait for sync to be over (if any).
                const syncResult = yield _services_wiki_sync__WEBPACK_IMPORTED_MODULE_16__["AddonModWikiSync"].waitForSync(this.blockId);
                if (this.pageId) {
                    // Editing a page that already exists.
                    this.canEditTitle = false;
                    this.editing = true;
                    this.editOffline = false; // Cannot edit pages in offline.
                    // Get page contents to obtain title and editing permission
                    const pageContents = yield _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].getPageContents(this.pageId, { cmId: this.cmId });
                    this.pageForm.controls.title.setValue(pageContents.title); // Set the title in the form group.
                    this.wikiId = pageContents.wikiid;
                    this.subwikiId = pageContents.subwikiid;
                    this.title = _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('addon.mod_wiki.editingpage', { $a: pageContents.title });
                    this.groupId = pageContents.groupid;
                    this.userId = pageContents.userid;
                    canEdit = pageContents.caneditpage;
                    yield this.fetchModuleAndCourseId();
                    // Get subwiki files, needed to replace URLs for rich text editor.
                    this.subwikiFiles = yield _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].getSubwikiFiles(this.wikiId, {
                        groupId: this.groupId,
                        userId: this.userId,
                        cmId: this.cmId,
                    });
                    // Get editable text of the page/section.
                    const editContents = yield _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].getPageForEditing(this.pageId, this.section);
                    // Get the original page contents, treating file URLs if needed.
                    const content = _services_utils_text__WEBPACK_IMPORTED_MODULE_9__["CoreTextUtils"].replacePluginfileUrls(editContents.content || '', this.subwikiFiles);
                    this.contentControl.setValue(content);
                    this.originalContent = content;
                    this.version = editContents.version;
                    if (canEdit) {
                        // Renew the lock every certain time.
                        this.renewLockInterval = window.setInterval(() => {
                            this.renewLock();
                        }, _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWikiProvider"].RENEW_LOCK_TIME);
                    }
                }
                else {
                    const pageTitle = this.pageForm.controls.title.value;
                    this.editing = false;
                    canEdit = !!this.blockId; // If no blockId, the user cannot edit the page.
                    yield this.fetchModuleAndCourseId();
                    // Try to get wikiId.
                    if (!this.wikiId && this.cmId && this.courseId) {
                        const module = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__["CoreCourse"].getModule(this.cmId, this.courseId, undefined, true);
                        this.wikiId = module.instance;
                    }
                    if (pageTitle) {
                        // Title is set, it could be editing an offline page or creating a new page using an edit link.
                        // First of all, verify if this page was created in the current sync.
                        if (syncResult) {
                            const page = syncResult.created.find((page) => page.title == pageTitle);
                            if (page && page.pageId > 0) {
                                // Page was created, now it exists in the site.
                                this.pageId = page.pageId;
                                return this.fetchWikiPageData();
                            }
                        }
                        // Check if there's already some offline data for this page.
                        const page = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(_services_wiki_offline__WEBPACK_IMPORTED_MODULE_15__["AddonModWikiOffline"].getNewPage(pageTitle, this.subwikiId, this.wikiId, this.userId, this.groupId));
                        if (page) {
                            // Load offline content.
                            this.contentControl.setValue(page.cachedcontent);
                            this.originalContent = page.cachedcontent;
                            this.editOffline = true;
                        }
                        else {
                            // No offline data found.
                            this.editOffline = false;
                        }
                    }
                    else {
                        this.editOffline = false;
                    }
                }
                return true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting wiki data.');
                fetchFailed = true;
                // Go back.
                this.forceLeavePage();
                return false;
            }
            finally {
                if (!canEdit && !fetchFailed) {
                    // Cannot edit, show alert and go back.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.notice'), _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('addon.mod_wiki.cannoteditpage'));
                    this.forceLeavePage();
                }
            }
        });
    }
    /**
     * Load cmId and courseId if they aren't set.
     *
     * @return Promise.
     */
    fetchModuleAndCourseId() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.wikiId || (this.cmId && this.courseId)) {
                return;
            }
            const module = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_4__["CoreCourse"].getModuleBasicInfoByInstance(this.wikiId, 'wiki');
            this.cmId = module.id;
            this.courseId = module.course;
        });
    }
    /**
     * Force leaving the page, without checking for changes.
     */
    forceLeavePage() {
        this.forceLeave = true;
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
    }
    /**
     * Navigate to a page.
     *
     * @param title Page title.
     */
    goToPage(title) {
        // Not the firstpage.
        _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].setEditedPageData({
            cmId: this.cmId,
            courseId: this.courseId,
            pageId: this.pageId,
            pageTitle: title,
            wikiId: this.wikiId,
            subwikiId: this.subwikiId,
            userId: this.userId,
            groupId: this.groupId,
        });
        this.forceLeavePage();
    }
    /**
     * Check if data has changed.
     *
     * @return Whether data has changed.
     */
    hasDataChanged() {
        const values = this.pageForm.value;
        return !(this.originalContent == values.text || (!this.editing && !values.text && !values.title));
    }
    /**
     * @inheritdoc
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave) {
                return true;
            }
            // Check if data has changed.
            if (this.hasDataChanged()) {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.confirmcanceledit'));
            }
            _singletons_form__WEBPACK_IMPORTED_MODULE_13__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            return true;
        });
    }
    /**
     * @inheritdoc
     */
    ionViewDidLeave() {
        // When going back, the ionViewDidEnter of the previous page should be called before this ionViewDidLeave.
        // But just in case, use a timeout to make sure it does.
        setTimeout(() => {
            // Remove the edited page data (if any) if the previous page isn't a wiki page.
            _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].consumeEditedPageData();
        }, 200);
    }
    /**
     * Save the data.
     */
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const values = this.pageForm.value;
            const title = values.title;
            let text = values.text;
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
            text = _services_utils_text__WEBPACK_IMPORTED_MODULE_9__["CoreTextUtils"].restorePluginfileUrls(text, this.subwikiFiles);
            text = _services_utils_text__WEBPACK_IMPORTED_MODULE_9__["CoreTextUtils"].formatHtmlLines(text);
            try {
                if (this.editing) {
                    // Edit existing page.
                    yield _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].editPage(this.pageId, text, this.section);
                    _singletons_form__WEBPACK_IMPORTED_MODULE_13__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                    // Invalidate page since it changed.
                    yield _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].invalidatePage(this.pageId);
                    return this.goToPage(title);
                }
                // Creating a new page.
                if (!title) {
                    // Title is mandatory, stop.
                    modal.dismiss();
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.notice'), _singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('addon.mod_wiki.titleshouldnotbeempty'));
                    return;
                }
                if (!this.editOffline) {
                    // Check if the user has an offline page with the same title.
                    const page = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(_services_wiki_offline__WEBPACK_IMPORTED_MODULE_15__["AddonModWikiOffline"].getNewPage(title, this.subwikiId, this.wikiId, this.userId, this.groupId));
                    if (page) {
                        // There's a page with same title, reject with error message.
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_3__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('addon.mod_wiki.pageexists'));
                    }
                }
                // Try to send the page.
                const id = yield _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].newPage(title, text, {
                    subwikiId: this.subwikiId,
                    wikiId: this.wikiId,
                    userId: this.userId,
                    groupId: this.groupId,
                    cmId: this.cmId,
                });
                _singletons_form__WEBPACK_IMPORTED_MODULE_13__["CoreForms"].triggerFormSubmittedEvent(this.formElement, id > 0, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                if (id <= 0) {
                    // Page stored in offline. Go to see the offline page.
                    return this.goToPage(title);
                }
                // Page was created, get its data and go to the page.
                _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'wiki' });
                this.pageId = id;
                const pageContents = yield _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].getPageContents(this.pageId, { cmId: this.cmId });
                const promises = [];
                this.wikiId = pageContents.wikiid;
                // Invalidate subwiki pages since there are new.
                promises.push(_services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].invalidateSubwikiPages(this.wikiId));
                if (!this.subwikiId) {
                    // Subwiki was not created, invalidate subwikis as well.
                    promises.push(_services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].invalidateSubwikis(this.wikiId));
                }
                this.subwikiId = pageContents.subwikiid;
                this.userId = pageContents.userid;
                this.groupId = pageContents.groupid;
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(Promise.all(promises));
                // Notify page created.
                _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].trigger(_services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWikiProvider"].PAGE_CREATED_EVENT, {
                    pageId: this.pageId,
                    subwikiId: this.subwikiId,
                    pageTitle: title,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                this.goToPage(title);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error saving wiki data.');
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Renew lock and control versions.
     */
    renewLock() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield _services_wiki__WEBPACK_IMPORTED_MODULE_14__["AddonModWiki"].getPageForEditing(this.pageId, this.section, true);
            if (response.version && this.version != response.version) {
                this.wrongVersionLock = true;
            }
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.isDestroyed = true;
        clearInterval(this.renewLockInterval);
        // Unblock the subwiki.
        if (this.blockId) {
            _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].unblockOperation(this.component, this.blockId);
        }
    }
};
AddonModWikiEditPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddonModWikiEditPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['editPageForm',] }]
};
AddonModWikiEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-wiki-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/wiki/pages/edit/edit.html")).default,
    })
], AddonModWikiEditPage);



/***/ }),

/***/ "./src/addons/mod/wiki/wiki-lazy.module.ts":
/*!*************************************************!*\
  !*** ./src/addons/mod/wiki/wiki-lazy.module.ts ***!
  \*************************************************/
/*! exports provided: AddonModWikiLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModWikiLazyModule", function() { return AddonModWikiLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/wiki/components/components.module.ts");
/* harmony import */ var _pages_index_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index */ "./src/addons/mod/wiki/pages/index/index.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _pages_edit_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/edit/edit */ "./src/addons/mod/wiki/pages/edit/edit.ts");
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
        path: ':courseId/:cmId/page/:hash',
        component: _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModWikiIndexPage"],
    },
    {
        path: ':courseId/:cmId/edit',
        component: _pages_edit_edit__WEBPACK_IMPORTED_MODULE_8__["AddonModWikiEditPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_7__["CanLeaveGuard"]],
    },
];
let AddonModWikiLazyModule = class AddonModWikiLazyModule {
};
AddonModWikiLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModWikiComponentsModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreEditorComponentsModule"],
        ],
        declarations: [
            _pages_index_index__WEBPACK_IMPORTED_MODULE_5__["AddonModWikiIndexPage"],
            _pages_edit_edit__WEBPACK_IMPORTED_MODULE_8__["AddonModWikiEditPage"],
        ],
    })
], AddonModWikiLazyModule);



/***/ })

}]);
//# sourceMappingURL=wiki-lazy-module.js.map