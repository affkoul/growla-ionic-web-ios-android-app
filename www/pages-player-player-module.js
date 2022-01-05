(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-player-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" *ngIf=\"displayMenu || mediaFile\" [attr.aria-label]=\"'addon.mod_lesson.lessonmenu' | translate\"\n                (click)=\"showMenu()\">\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]=\"loaded\">\n        <!-- Info messages. Only show the first one. -->\n        <ion-card class=\"core-info-card\" *ngIf=\"lesson && messages?.length\">\n            <ion-item>\n                <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                <ion-label>{{ messages[0].message }}</ion-label>\n            </ion-item>\n        </ion-card>\n\n        <div *ngIf=\"lesson\" [ngClass]='{\"addon-mod_lesson-slideshow\": lesson.slideshow}'\n            [ngStyle]=\"{'width': lessonWidth, 'height': lessonHeight}\">\n\n            <core-timer *ngIf=\"endTime\" [endTime]=\"endTime\" (finished)=\"timeUp()\"\n                [timerText]=\"'addon.mod_lesson.timeremaining' | translate\">\n            </core-timer>\n\n            <!-- Retake and ongoing score. -->\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"showRetake && !eolData && !processData\">\n                <p>{{ 'addon.mod_lesson.attempt' | translate:{$a: retake} }}</p>\n            </ion-item>\n            <ion-item *ngIf=\"pageData && pageData.ongoingscore && !eolData && !processData\"\n                class=\"addon-mod_lesson-ongoingscore ion-text-wrap\">\n                {{ pageData.ongoingscore }}\n            </ion-item>\n\n            <!-- Page content. -->\n            <ion-card *ngIf=\"!eolData && !processData\">\n                <!-- Content page. -->\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!question && pageContent\">\n                    <core-format-text [component]=\"component\" [componentId]=\"lesson.coursemodule\" [text]=\"pageContent\"\n                        contextLevel=\"module\" [contextInstanceId]=\"lesson.coursemodule\" [courseId]=\"courseId\">\n                    </core-format-text>\n                </ion-item>\n\n                <!-- Question page. -->\n                <!-- We need to set ngIf loaded to make formGroup directive restart every time a page changes, see MOBILE-2540. -->\n                <form *ngIf=\"question && loaded\" [formGroup]=\"questionForm\" #questionFormEl\n                    (ngSubmit)=\"submitQuestion($event)\">\n\n                    <ion-item-divider class=\"ion-text-wrap\" *ngIf=\"pageContent\">\n                        <ion-label>\n                            <h2>\n                                <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\" [text]=\"pageContent\"\n                                    contextLevel=\"module\" [contextInstanceId]=\"lesson.coursemodule\" [courseId]=\"courseId\">\n                                </core-format-text>\n                            </h2>\n                        </ion-label>\n                    </ion-item-divider>\n\n                    <!-- Render a different input depending on the type of the question. -->\n                    <ng-container [ngSwitch]=\"question.template\">\n\n                        <!-- Short answer. -->\n                        <ion-item class=\"ion-text-wrap\" *ngSwitchCase=\"'shortanswer'\">\n                            <ion-input [type]=\"question.input!.type\" placeholder=\"{{ 'addon.mod_lesson.youranswer' | translate }}\"\n                                [id]=\"question.input!.id\" [formControlName]=\"question.input!.name\" autocorrect=\"off\"\n                                [maxlength]=\"question.input!.maxlength\">\n                            </ion-input>\n                        </ion-item>\n\n                        <!-- Essay. -->\n                        <ng-container *ngSwitchCase=\"'essay'\">\n                            <ion-item *ngIf=\"question.textarea\">\n                                <core-rich-text-editor placeholder=\"{{ 'addon.mod_lesson.youranswer' | translate }}\"\n                                    [control]=\"question.control\" [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                    [autoSave]=\"true\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                    elementId=\"answer_editor\">\n                                </core-rich-text-editor>\n                            </ion-item>\n                            <ion-item class=\"ion-text-wrap\" *ngIf=\"!question.textarea && question.useranswer\">\n                                <ion-label>\n                                    <h3 class=\"item-heading\">{{ 'addon.mod_lesson.youranswer' | translate }}</h3>\n                                    <p>\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                            [text]=\"question.useranswer\" contextLevel=\"module\"\n                                            [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                                        </core-format-text>\n                                    </p>\n                                </ion-label>\n                            </ion-item>\n                        </ng-container>\n\n                        <!-- Multichoice. -->\n                        <ng-container *ngSwitchCase=\"'multichoice'\">\n                            <!-- Single choice. -->\n                            <ion-radio-group *ngIf=\"!question.multi\" [formControlName]=\"question.controlName\">\n                                <ion-item class=\"ion-text-wrap\" *ngFor=\"let option of question.options\">\n                                    <ion-label>\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson.coursemodule\"\n                                            [text]=\"option.text\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                            [courseId]=\"courseId\">\n                                        </core-format-text>\n                                    </ion-label>\n                                    <ion-radio slot=\"end\" [id]=\"option.id\" [value]=\"option.value\" [disabled]=\"option.disabled\">\n                                    </ion-radio>\n                                </ion-item>\n                            </ion-radio-group>\n\n                            <!-- Multiple choice. -->\n                            <ng-container *ngIf=\"question.multi\">\n                                <ion-item class=\"ion-text-wrap\" *ngFor=\"let option of question.options\">\n                                    <ion-label>\n                                        <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                            [text]=\"option.text\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                            [courseId]=\"courseId\">\n                                        </core-format-text>\n                                    </ion-label>\n                                    <ion-checkbox [id]=\"option.id\" [formControlName]=\"option.name\" slot=\"end\"></ion-checkbox>\n                                </ion-item>\n                            </ng-container>\n                        </ng-container>\n\n                        <!-- Matching. -->\n                        <ng-container *ngSwitchCase=\"'matching'\">\n                            <ion-item class=\"ion-text-wrap\" *ngFor=\"let row of question.rows\">\n                                <ion-label>\n                                    <p><core-format-text id=\"addon-mod_lesson-matching-{{row.id}}\" [component]=\"component\"\n                                        [componentId]=\"lesson?.coursemodule\" [text]=\"row.text\" contextLevel=\"module\"\n                                        [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                                    </core-format-text></p>\n                                </ion-label>\n                                <ion-select [id]=\"row.id\" [formControlName]=\"row.name\" interface=\"action-sheet\"\n                                    [attr.aria-labelledby]=\"'addon-mod_lesson-matching-' + row.id\">\n                                    <ion-select-option *ngFor=\"let option of row.options\" [value]=\"option.value\">\n                                        {{option.label}}\n                                    </ion-select-option>\n                                </ion-select>\n                            </ion-item>\n                        </ng-container>\n                    </ng-container>\n\n                    <ion-button expand=\"block\" type=\"submit\" class=\"ion-text-wrap ion-margin button-no-uppercase\">\n                        {{ question.submitLabel }}\n                    </ion-button>\n                    <!-- Remove this once Ionic fixes this bug: https://github.com/ionic-team/ionic-framework/issues/19368 -->\n                    <input type=\"submit\" class=\"core-submit-hidden-enter\" />\n                </form>\n            </ion-card>\n\n            <!-- Page buttons and progress. -->\n            <ion-list *ngIf=\"!eolData && !processData\">\n                <ion-grid *ngIf=\"pageButtons?.length\" class=\"ion-text-wrap addon-mod_lesson-pagebuttons\">\n                    <ion-row class=\"ion-align-items-center\">\n                        <ion-col *ngFor=\"let button of pageButtons\" size=\"12\" size-md=\"6\" size-lg=\"3\" col-xl>\n                            <ion-button expand=\"block\" fill=\"outline\" [id]=\"button.id\"\n                                (click)=\"buttonClicked(button.data)\" class=\"ion-text-wrap button-no-uppercase\">\n                                {{ button.content }}\n                            </ion-button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"lesson?.progressbar && !canManage && pageData\">\n                    <ion-label>\n                        <span id=\"addon-mod_lesson-{{cmId}}-progress\">\n                            {{ 'addon.mod_lesson.progresscompleted' | translate:{$a: pageData.progress} }}\n                        </span>\n                        <core-progress-bar [progress]=\"pageData.progress\" ariaDescribedBy=\"addon-mod_lesson-{{cmId}}-progress\">\n                        </core-progress-bar>\n                    </ion-label>\n                </ion-item>\n                <div class=\"core-info-card\" *ngIf=\"lesson?.progressbar && canManage\">\n                    <ion-item>\n                        <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                        <ion-label>{{ 'addon.mod_lesson.progressbarteacherwarning2' | translate }}</ion-label>\n                    </ion-item>\n                </div>\n            </ion-list>\n\n            <!-- End of lesson reached. -->\n            <ion-card class=\"core-warning-card\" *ngIf=\"eolData && !processData && eolData.offline?.value\">\n                <ion-item>\n                    <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label>{{ 'addon.mod_lesson.finishretakeoffline' | translate }}</ion-label>\n                </ion-item>\n            </ion-card>\n\n            <ion-card *ngIf=\"eolData && !processData\">\n\n                <ion-card-header class=\"ion-text-wrap\" *ngIf=\"eolData.gradelesson\">\n                    <ion-card-title>{{ 'addon.mod_lesson.congratulations' | translate }}</ion-card-title>\n                </ion-card-header>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.notenoughtimespent\" lines=\"none\">\n                    <ion-label>{{ eolData.notenoughtimespent.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.numberofpagesviewed\" lines=\"none\">\n                    <ion-label>{{ eolData.numberofpagesviewed.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.youshouldview\" lines=\"none\">\n                    <ion-label>{{ eolData.youshouldview.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.numberofcorrectanswers\" lines=\"none\">\n                    <ion-label>{{ eolData.numberofcorrectanswers.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.displayscorewithessays\" lines=\"none\">\n                    <ion-label [innerHTML]=\"eolData.displayscorewithessays.message\"></ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!eolData.displayscorewithessays && eolData.displayscorewithoutessays\"\n                    lines=\"none\">\n                    <ion-label>{{ eolData.displayscorewithoutessays.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.yourcurrentgradeisoutof\" lines=\"none\">\n                    <ion-label>{{ eolData.yourcurrentgradeisoutof.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.eolstudentoutoftimenoanswers\" lines=\"none\">\n                    <ion-label>{{ eolData.eolstudentoutoftimenoanswers.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.welldone\" lines=\"none\">\n                    <ion-label>{{ eolData.welldone.message }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"lesson.progressbar && eolData.progresscompleted\" lines=\"none\">\n                    <ion-label>\n                        <span id=\"addon-mod_lesson-{{cmId}}-progress-end\">\n                            {{ 'addon.mod_lesson.progresscompleted' | translate:{$a: eolData.progresscompleted.value} }}\n                        </span>\n                        <core-progress-bar [progress]=\"eolData.progresscompleted.value\"\n                            ariaDescribedBy=\"addon-mod_lesson-{{cmId}}-progress-end\">\n                        </core-progress-bar>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.displayofgrade\" lines=\"none\">\n                    <ion-label>{{ eolData.displayofgrade.message }}</ion-label>\n                </ion-item>\n                <ion-button *ngIf=\"eolData.reviewlesson\" expand=\"block\" class=\"ion-text-wrap ion-margin button-no-uppercase\"\n                    (click)=\"reviewLesson(reviewPageId!)\">\n                    {{ 'addon.mod_lesson.reviewlesson' | translate }}\n                </ion-button>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"eolData.modattemptsnoteacher\" lines=\"none\">\n                    <ion-label>{{ eolData.modattemptsnoteacher.message }}</ion-label>\n                </ion-item>\n                <!-- If activity link was successfully formatted, render the button. -->\n                <ion-button *ngIf=\"activityLink && activityLink.formatted\"\n                    expand=\"block\" color=\"light\" [href]=\"activityLink.href\" core-link [capture]=\"true\"\n                    class=\"ion-text-wrap ion-margin button-no-uppercase\">\n                    <core-format-text [text]=\"activityLink.label\" contextLevel=\"module\"\n                        [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                    </core-format-text>\n                </ion-button>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"activityLink && !activityLink.formatted\"\n                    lines=\"none\">\n                    <!-- Activity link wasn't formatted, render the original link. -->\n                    <ion-label>\n                        <core-format-text [text]=\"activityLink.label\" contextLevel=\"module\"\n                            [contextInstanceId]=\"lesson?.coursemodule\" [courseId]=\"courseId\">\n                        </core-format-text>\n                    </ion-label>\n                </ion-item>\n            </ion-card>\n\n            <!-- Feedback returned when processing an action. -->\n            <ion-list *ngIf=\"processData\">\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"processData.ongoingscore && !processData.reviewmode\" >\n                    <ion-label>{{ processData.ongoingscore }}</ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!processData.reviewmode || review\">\n                    <ion-label>\n                        <div *ngIf=\"!processData.reviewmode\">\n                            <core-format-text [component]=\"component\" [componentId]=\"lesson?.coursemodule\"\n                                [text]=\"processData.feedback\" contextLevel=\"module\" [contextInstanceId]=\"lesson?.coursemodule\"\n                                [courseId]=\"courseId\">\n                            </core-format-text>\n                        </div>\n                        <div *ngIf=\"review\">\n                            <p>{{ 'addon.mod_lesson.gotoendoflesson' | translate }}</p>\n                            <p>{{ 'addon.mod_lesson.or' | translate }}</p>\n                            <p>{{ 'addon.mod_lesson.continuetonextpage' | translate }}</p>\n                        </div>\n                    </ion-label>\n                </ion-item>\n\n                <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin\" color=\"light\" *ngIf=\"review\"\n                    (click)=\"changePage(LESSON_EOL)\">\n                    {{ 'addon.mod_lesson.finish' | translate }}\n                </ion-button>\n                <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin\" color=\"light\" *ngFor=\"let button of processDataButtons\"\n                    (click)=\"changePage(button.pageId, true)\">\n                    {{ button.label | translate }}\n                </ion-button>\n            </ion-list>\n        </div>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <h1>\n            <core-format-text *ngIf=\"quiz\" [text]=\"quiz.name\" contextLevel=\"module\" [contextInstanceId]=\"quiz.coursemodule\"\n                [courseId]=\"courseId\">\n            </core-format-text>\n        </h1>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" id=\"addon-mod_quiz-connection-error-button\" [hidden]=\"!autoSaveError\"\n                (click)=\"showConnectionError($event)\" [attr.aria-label]=\"'addon.mod_quiz.connectionerror' | translate\"\n                aria-haspopup=\"dialog\">\n                <ion-icon name=\"fas-exclamation-circle\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n            <ion-button *ngIf=\"navigation.length\" [attr.aria-label]=\"'addon.mod_quiz.opentoc' | translate\"\n                (click)=\"openNavigation()\">\n                <ion-icon name=\"fas-bookmark\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <!-- Navigation arrows and time left. -->\n    <ion-toolbar *ngIf=\"loaded && endTime && questions.length && !quizAborted && !showSummary\" color=\"light\">\n        <ion-title>\n            <core-timer [endTime]=\"endTime\" (finished)=\"timeUp()\" [timerText]=\"'addon.mod_quiz.timeleft' | translate\"\n                [align]=\"'center'\">\n            </core-timer>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" *ngIf=\"previousPage >= 0\" (click)=\"changePage(previousPage)\"\n                [attr.aria-label]=\"'core.previous' | translate\">\n                <ion-icon name=\"fas-chevron-left\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n            <ion-button *ngIf=\"nextPage >= -1\" (click)=\"changePage(nextPage)\" [attr.aria-label]=\"'core.next' | translate\">\n                <ion-icon name=\"fas-chevron-right\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]=\"loaded\">\n        <!-- Navigation arrows if there's no timer. -->\n        <ion-toolbar *ngIf=\"!endTime && questions.length && !quizAborted && !showSummary\" color=\"light\">\n            <ion-buttons slot=\"end\">\n                <ion-button fill=\"clear\" *ngIf=\"previousPage >= 0\" (click)=\"changePage(previousPage)\"\n                    [attr.aria-label]=\"'core.previous' | translate\">\n                    <ion-icon name=\"fas-chevron-left\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n                <ion-button *ngIf=\"nextPage >= -1\" (click)=\"changePage(nextPage)\" [attr.aria-label]=\"'core.next' | translate\">\n                    <ion-icon name=\"fas-chevron-right\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n\n        <!-- Button to start attempting. -->\n        <ion-button *ngIf=\"!attempt\" expand=\"block\" class=\"ion-margin\" (click)=\"start()\">\n            {{ 'addon.mod_quiz.startattempt' | translate }}\n        </ion-button>\n\n        <!-- Questions -->\n        <form name=\"addon-mod_quiz-player-form\" *ngIf=\"questions.length && !quizAborted && !showSummary\" #quizForm>\n            <div *ngFor=\"let question of questions\">\n                <ion-card id=\"addon-mod_quiz-question-{{question.slot}}\">\n                    <!-- \"Header\" of the question. -->\n                    <ion-item-divider>\n                        <ion-label>\n                            <h2 *ngIf=\"question.number\" class=\"inline\">\n                                {{ 'core.question.questionno' | translate:{$a: question.number} }}\n                            </h2>\n                            <h2 *ngIf=\"!question.number\" class=\"inline\">{{ 'core.question.information' | translate }}</h2>\n                        </ion-label>\n                        <div *ngIf=\"question.status || question.readableMark\" slot=\"end\"\n                            class=\"ion-text-wrap ion-margin-horizontal addon-mod_quiz-question-note\">\n                            <p *ngIf=\"question.status\" class=\"block\">{{question.status}}</p>\n                            <p *ngIf=\"question.readableMark\">{{ question.readableMark }}</p>\n                        </div>\n                    </ion-item-divider>\n\n                    <!-- Body of the question. -->\n                    <core-question class=\"ion-text-wrap\" [question]=\"question\" [component]=\"component\"\n                        [componentId]=\"cmId\" [attemptId]=\"attempt!.id\" [usageId]=\"attempt!.uniqueid\"\n                        [offlineEnabled]=\"offline\" contextLevel=\"module\" [contextInstanceId]=\"cmId\"\n                        [courseId]=\"courseId\" [preferredBehaviour]=\"quiz!.preferredbehaviour\" [review]=\"false\"\n                        (onAbort)=\"abortQuiz()\" (buttonClicked)=\"behaviourButtonClicked($event)\">\n                    </core-question>\n                </ion-card>\n            </div>\n        </form>\n\n        <!-- Go to next or previous page. -->\n        <ion-grid class=\"ion-text-wrap\" *ngIf=\"questions.length && !quizAborted && !showSummary\">\n            <ion-row>\n                <ion-col *ngIf=\"previousPage >= 0\" >\n                    <ion-button expand=\"block\" color=\"light\" (click)=\"changePage(previousPage)\">\n                        <ion-icon name=\"fas-chevron-left\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                        {{ 'core.previous' | translate }}\n                    </ion-button>\n                </ion-col>\n                <ion-col *ngIf=\"nextPage >= -1\">\n                    <ion-button expand=\"block\" (click)=\"changePage(nextPage)\">\n                        {{ 'core.next' | translate }}\n                        <ion-icon name=\"fas-chevron-right\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <!-- Summary -->\n        <ion-card *ngIf=\"!quizAborted && showSummary && summaryQuestions.length\" class=\"addon-mod_quiz-table\">\n            <ion-card-header class=\"ion-text-wrap\">\n                <ion-card-title>{{ 'addon.mod_quiz.summaryofattempt' | translate }}</ion-card-title>\n            </ion-card-header>\n\n            <!-- \"Header\" of the summary table. -->\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <ion-row class=\"ion-align-items-center\">\n                        <ion-col size=\"3\" class=\"ion-text-center ion-hide-md-down\">\n                            <strong>{{ 'addon.mod_quiz.question' | translate }}</strong>\n                        </ion-col>\n                        <ion-col size=\"3\" class=\"ion-text-center ion-hide-md-up\"><strong>#</strong></ion-col>\n                        <ion-col size=\"9\" class=\"ion-text-center\">\n                            <strong>{{ 'addon.mod_quiz.status' | translate }}</strong>\n                        </ion-col>\n                    </ion-row>\n                </ion-label>\n            </ion-item>\n\n            <!-- List of questions of the summary table. -->\n            <ng-container *ngFor=\"let question of summaryQuestions\">\n                <ion-item *ngIf=\"question.number\" (click)=\"changePage(question.page, false, question.slot)\"\n                    [attr.aria-label]=\"'core.question.questionno' | translate:{$a: question.number}\"\n                    [detail]=\"!isSequential && canReturn\" [button]=\"!isSequential && canReturn\">\n                    <ion-label>\n                        <ion-row class=\"ion-align-items-center\">\n                            <ion-col size=\"3\" class=\"ion-text-center\">{{ question.number }}</ion-col>\n                            <ion-col size=\"9\" class=\"ion-text-center ion-text-wrap\">{{ question.status }}</ion-col>\n                        </ion-row>\n                    </ion-label>\n                </ion-item>\n            </ng-container>\n\n            <!-- Button to return to last page seen. -->\n            <ion-button *ngIf=\"canReturn\" expand=\"block\" class=\"ion-margin\" (click)=\"changePage(attempt!.currentpage!)\">\n                {{ 'addon.mod_quiz.returnattempt' | translate }}\n            </ion-button>\n\n            <!-- Due date warning. -->\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"dueDateWarning\">\n                <ion-label>{{ dueDateWarning }}</ion-label>\n            </ion-item>\n\n            <!-- Time left (if quiz is timed). -->\n            <core-timer *ngIf=\"endTime\" [endTime]=\"endTime\" (finished)=\"timeUp()\"\n                [timerText]=\"'addon.mod_quiz.timeleft' | translate\">\n            </core-timer>\n\n            <!-- List of messages explaining why the quiz cannot be submitted. -->\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"preventSubmitMessages.length\">\n                <ion-label>\n                    <h3 class=\"item-heading\">{{ 'addon.mod_quiz.cannotsubmitquizdueto' | translate }}</h3>\n                    <p *ngFor=\"let message of preventSubmitMessages\">{{message}}</p>\n                </ion-label>\n            </ion-item>\n\n            <ion-button *ngIf=\"preventSubmitMessages.length\" expand=\"block\" [href]=\"moduleUrl\" core-link>\n                {{ 'core.openinbrowser' | translate }}\n                <ion-icon name=\"fas-external-link-alt\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n\n            <!-- Button to submit the quiz. -->\n            <ion-button *ngIf=\"!attempt!.finishedOffline && !preventSubmitMessages.length\" expand=\"block\"\n                class=\"ion-margin\" (click)=\"finishAttempt(true)\">\n                {{ 'addon.mod_quiz.submitallandfinish' | translate }}\n            </ion-button>\n        </ion-card>\n\n        <!-- Quiz aborted -->\n        <ion-card *ngIf=\"attempt && ((!questions.length && !showSummary) || quizAborted)\">\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>{{ 'addon.mod_quiz.errorparsequestions' | translate }}</ion-label>\n            </ion-item>\n            <ion-button expand=\"block\" class=\"ion-margin\" [href]=\"moduleUrl\" core-link>\n                {{ 'core.openinbrowser' | translate }}\n                <ion-icon name=\"fas-external-link-alt\" slot=\"end\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-card>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/lesson/pages/player/player.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/mod/lesson/pages/player/player.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonModLessonPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonPlayerPageModule", function() { return AddonModLessonPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.page */ "./src/addons/mod/lesson/pages/player/player.page.ts");
/* harmony import */ var _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/editor/components/components.module */ "./src/core/features/editor/components/components.module.ts");
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







const routes = [
    {
        path: '',
        component: _player_page__WEBPACK_IMPORTED_MODULE_4__["AddonModLessonPlayerPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_6__["CanLeaveGuard"]],
    },
];
let AddonModLessonPlayerPageModule = class AddonModLessonPlayerPageModule {
};
AddonModLessonPlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_editor_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreEditorComponentsModule"],
        ],
        declarations: [
            _player_page__WEBPACK_IMPORTED_MODULE_4__["AddonModLessonPlayerPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonModLessonPlayerPageModule);



/***/ }),

/***/ "./src/addons/mod/lesson/pages/player/player.page.ts":
/*!***********************************************************!*\
  !*** ./src/addons/mod/lesson/pages/player/player.page.ts ***!
  \***********************************************************/
/*! exports provided: AddonModLessonPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModLessonPlayerPage", function() { return AddonModLessonPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _components_menu_modal_menu_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/menu-modal/menu-modal */ "./src/addons/mod/lesson/components/menu-modal/menu-modal.ts");
/* harmony import */ var _services_lesson__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/lesson */ "./src/addons/mod/lesson/services/lesson.ts");
/* harmony import */ var _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/lesson-helper */ "./src/addons/mod/lesson/services/lesson-helper.ts");
/* harmony import */ var _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/lesson-offline */ "./src/addons/mod/lesson/services/lesson-offline.ts");
/* harmony import */ var _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/lesson-sync */ "./src/addons/mod/lesson/services/lesson-sync.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
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
 * Page that allows attempting and reviewing a lesson.
 */
let AddonModLessonPlayerPage = class AddonModLessonPlayerPage {
    constructor(changeDetector, formBuilder) {
        this.changeDetector = changeDetector;
        this.formBuilder = formBuilder;
        this.component = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].COMPONENT;
        this.LESSON_EOL = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL;
        this.messages = []; // Messages to display to the user.
        this.processDataButtons = []; // Buttons to display after processing a page.
        this.forceLeave = false; // If true, don't perform any check when leaving the view.
        this.menuShown = false; // Whether menu is shown.
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('cmId');
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('courseId');
            this.password = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('password');
            this.review = !!_services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteBooleanParam('review');
            this.currentPage = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('pageId');
            this.retakeToReview = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteNumberParam('retake');
            try {
                // Fetch the Lesson data.
                const success = yield this.fetchLessonData();
                if (success) {
                    // Review data loaded or new retake started, remove any retake being finished in sync.
                    _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].deleteRetakeFinishedInSync(this.lesson.id);
                }
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        if (this.lesson) {
            // Unblock the lesson so it can be synced.
            _services_sync__WEBPACK_IMPORTED_MODULE_8__["CoreSync"].unblockOperation(this.component, this.lesson.id);
        }
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave || !this.questionForm) {
                return true;
            }
            if (this.question && !this.eolData && !this.processData && this.originalData) {
                // Question shown. Check if there is any change.
                if (!_services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].basicLeftCompare(this.questionForm.getRawValue(), this.originalData, 3)) {
                    yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.confirmcanceledit'));
                }
            }
            _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        if (this.menuShown) {
            _singletons__WEBPACK_IMPORTED_MODULE_12__["ModalController"].dismiss();
        }
    }
    /**
     * A button was clicked.
     *
     * @param data Button data.
     */
    buttonClicked(data) {
        this.processPage(data);
    }
    /**
     * Call a function and go offline if allowed and the call fails.
     *
     * @param func Function to call.
     * @param options Options passed to the function.
     * @return Promise resolved in success, rejected otherwise.
     */
    callFunction(func, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return yield func();
            }
            catch (error) {
                if (this.offline || this.review || !_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(this.lesson)) {
                    // Already offline or not allowed.
                    throw error;
                }
                if (_services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].isWebServiceError(error)) {
                    // WebService returned an error, cannot perform the action.
                    throw error;
                }
                // Go offline and retry.
                this.offline = true;
                // Get the possible jumps now.
                this.jumps = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPagesPossibleJumps(this.lesson.id, {
                    cmId: this.cmId,
                    readingStrategy: 1 /* PREFER_CACHE */,
                });
                // Call the function again with offline mode and the new jumps.
                options.readingStrategy = 1 /* PREFER_CACHE */;
                options.jumps = this.jumps;
                options.offline = true;
                return func();
            }
        });
    }
    /**
     * Change the page from menu or when continuing from a feedback page.
     *
     * @param pageId Page to load.
     * @param ignoreCurrent If true, allow loading current page.
     * @return Promise resolved when done.
     */
    changePage(pageId, ignoreCurrent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!ignoreCurrent && !this.eolData && this.currentPage == pageId) {
                // Page already loaded, stop.
                return;
            }
            this.loaded = true;
            this.messages = [];
            try {
                yield this.loadPage(pageId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Get the lesson data and load the page.
     *
     * @return Promise resolved with true if success, resolved with false otherwise.
     */
    fetchLessonData() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.lesson = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getLesson(this.courseId, this.cmId);
                this.title = this.lesson.name; // Temporary title.
                // Block the lesson so it cannot be synced.
                _services_sync__WEBPACK_IMPORTED_MODULE_8__["CoreSync"].blockOperation(this.component, this.lesson.id);
                // Wait for any ongoing sync to finish. We won't sync a lesson while it's being played.
                yield _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].waitForSync(this.lesson.id);
                // If lesson has offline data already, use offline mode.
                this.offline = yield _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModLessonOffline"].hasOfflineData(this.lesson.id);
                if (!this.offline && !_services_app__WEBPACK_IMPORTED_MODULE_5__["CoreApp"].isOnline() && _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(this.lesson) && !this.review) {
                    // Lesson doesn't have offline data, but it allows offline and the device is offline. Use offline mode.
                    this.offline = true;
                }
                const options = {
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                };
                this.accessInfo = yield this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getAccessInformation.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson.id, options), options);
                const promises = [];
                this.canManage = this.accessInfo.canmanage;
                this.retake = this.accessInfo.attemptscount;
                this.showRetake = !this.currentPage && this.retake > 0; // Only show it in first page if it isn't the first retake.
                if (this.accessInfo.preventaccessreasons.length) {
                    // If it's a password protected lesson and we have the password, allow playing it.
                    const preventReason = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPreventAccessReason(this.accessInfo, !!this.password, this.review);
                    if (preventReason) {
                        // Lesson cannot be played, show message and go back.
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](preventReason.message);
                    }
                }
                if (this.review && this.retakeToReview != this.accessInfo.attemptscount - 1) {
                    // Reviewing a retake that isn't the last one. Error.
                    throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('addon.mod_lesson.errorreviewretakenotlast'));
                }
                if (this.password) {
                    // Lesson uses password, get the whole lesson object.
                    const options = {
                        password: this.password,
                        cmId: this.cmId,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    };
                    promises.push(this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getLessonWithPassword.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson.id, options), options).then((lesson) => {
                        this.lesson = lesson;
                        return;
                    }));
                }
                if (this.offline) {
                    // Offline mode, get the list of possible jumps to allow navigation.
                    promises.push(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPagesPossibleJumps(this.lesson.id, {
                        cmId: this.cmId,
                        readingStrategy: 1 /* PREFER_CACHE */,
                    }).then((jumpList) => {
                        this.jumps = jumpList;
                        return;
                    }));
                }
                yield Promise.all(promises);
                this.mediaFile = (_a = this.lesson.mediafiles) === null || _a === void 0 ? void 0 : _a[0];
                this.lessonWidth = this.lesson.slideshow ? _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].formatPixelsSize(this.lesson.mediawidth) : '';
                this.lessonHeight = this.lesson.slideshow ? _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].formatPixelsSize(this.lesson.mediaheight) : '';
                yield this.launchRetake(this.currentPage);
                return true;
            }
            catch (error) {
                if (this.review && this.retakeToReview && _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].isWebServiceError(error)) {
                    // The user cannot review the retake. Unmark the retake as being finished in sync.
                    yield _services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].deleteRetakeFinishedInSync(this.lesson.id);
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return false;
            }
        });
    }
    /**
     * Finish the retake.
     *
     * @param outOfTime Whether the retake is finished because the user ran out of time.
     * @return Promise resolved when done.
     */
    finishRetake(outOfTime) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.messages = [];
            if (this.offline && _services_app__WEBPACK_IMPORTED_MODULE_5__["CoreApp"].isOnline()) {
                // Offline mode but the app is online. Try to sync the data.
                const result = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].ignoreErrors(_services_lesson_sync__WEBPACK_IMPORTED_MODULE_18__["AddonModLessonSync"].syncLesson(this.lesson.id, true, true));
                if ((_a = result === null || result === void 0 ? void 0 : result.warnings) === null || _a === void 0 ? void 0 : _a.length) {
                    // Some data was deleted. Check if the retake has changed.
                    const info = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getAccessInformation(this.lesson.id, {
                        cmId: this.cmId,
                    });
                    if (info.attemptscount != this.accessInfo.attemptscount) {
                        // The retake has changed. Leave the view and show the error.
                        this.forceLeave = true;
                        _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                        throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_4__["CoreError"](result.warnings[0]);
                    }
                    // Retake hasn't changed, show the warning and finish the retake in offline.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                this.offline = false;
            }
            // Now finish the retake.
            const options = {
                password: this.password,
                outOfTime,
                review: this.review,
                offline: this.offline,
                accessInfo: this.accessInfo,
            };
            const data = yield this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].finishRetake.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson, this.courseId, options), options);
            this.title = this.lesson.name;
            this.eolData = data.data;
            this.messages = this.messages.concat(data.messages);
            this.processData = undefined;
            _singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_13__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'lesson' });
            // Format activity link if present.
            if (this.eolData.activitylink) {
                this.activityLink = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].formatActivityLink(this.eolData.activitylink.value);
            }
            else {
                this.activityLink = undefined;
            }
            // Format review lesson if present.
            if (this.eolData.reviewlesson) {
                const params = _services_utils_url__WEBPACK_IMPORTED_MODULE_10__["CoreUrlUtils"].extractUrlParams(this.eolData.reviewlesson.value);
                if (!params || !params.pageid) {
                    // No pageid in the URL, the user cannot review (probably didn't answer any question).
                    delete this.eolData.reviewlesson;
                }
                else {
                    this.reviewPageId = Number(params.pageid);
                }
            }
        });
    }
    /**
     * Jump to a certain page after performing an action.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    jumpToPage(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (pageId === 0) {
                // Not a valid page, return to entry view.
                // This happens, for example, when the user clicks to go to previous page and there is no previous page.
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            else if (pageId == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            // Load new page.
            this.messages = [];
            return this.loadPage(pageId);
        });
    }
    /**
     * Start or continue a retake.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    launchRetake(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data;
            if (this.review) {
                // Review mode, no need to launch the retake.
            }
            else if (!this.offline) {
                // Not in offline mode, launch the retake.
                data = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].launchRetake(this.lesson.id, this.password, pageId);
            }
            else {
                // Check if there is a finished offline retake.
                const finished = yield _services_lesson_offline__WEBPACK_IMPORTED_MODULE_17__["AddonModLessonOffline"].hasFinishedRetake(this.lesson.id);
                if (finished) {
                    // Always show EOL page.
                    pageId = _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL;
                }
            }
            this.currentPage = pageId || this.accessInfo.firstpageid;
            this.messages = (data === null || data === void 0 ? void 0 : data.messages) || [];
            if (this.lesson.timelimit && !this.accessInfo.canmanage) {
                // Get the last lesson timer.
                const timers = yield _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getTimers(this.lesson.id, {
                    cmId: this.cmId,
                    readingStrategy: 2 /* ONLY_NETWORK */,
                });
                this.endTime = timers[timers.length - 1].starttime + this.lesson.timelimit;
            }
            return this.loadPage(this.currentPage);
        });
    }
    /**
     * Load the lesson menu.
     *
     * @return Promise resolved when done.
     */
    loadMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loadingMenu) {
                // Already loading.
                return;
            }
            try {
                this.loadingMenu = true;
                const options = {
                    password: this.password,
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                };
                const pages = yield this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPages.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson.id, options), options);
                this.lessonPages = pages.map((entry) => entry.page);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading menu.');
            }
            finally {
                this.loadingMenu = false;
            }
        });
    }
    /**
     * Load a certain page.
     *
     * @param pageId The page to load.
     * @return Promise resolved when done.
     */
    loadPage(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (pageId == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            const options = {
                password: this.password,
                review: this.review,
                includeContents: true,
                cmId: this.cmId,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                accessInfo: this.accessInfo,
                jumps: this.jumps,
                includeOfflineData: true,
            };
            const data = yield this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getPageData.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson, pageId, options), options);
            if (data.newpageid == _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLessonProvider"].LESSON_EOL) {
                // End of lesson reached.
                return this.finishRetake();
            }
            this.pageData = data;
            this.title = data.page.title;
            this.pageContent = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getPageContentsFromPageData(data);
            this.loaded = true;
            this.currentPage = pageId;
            this.messages = this.messages.concat(data.messages);
            // Page loaded, hide EOL and feedback data if shown.
            this.eolData = this.processData = undefined;
            if (_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isQuestionPage(data.page.type)) {
                // Create an empty FormGroup without controls, they will be added in getQuestionFromPageData.
                this.questionForm = this.formBuilder.group({});
                this.pageButtons = [];
                this.question = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getQuestionFromPageData(this.questionForm, data);
                this.originalData = this.questionForm.getRawValue(); // Use getRawValue to include disabled values.
            }
            else {
                this.pageButtons = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].getPageButtonsFromHtml(data.pagecontent || '');
                this.question = undefined;
                this.originalData = undefined;
            }
            // Don't display the navigation menu in review mode, using them displays errors.
            if (data.displaymenu && !this.displayMenu && !this.review) {
                // Load the menu.
                this.loadMenu();
            }
            this.displayMenu = !this.review && !!data.displaymenu;
            if (!this.firstPageLoaded) {
                this.firstPageLoaded = true;
            }
            else {
                this.showRetake = false;
            }
        });
    }
    /**
     * Process a page, sending some data.
     *
     * @param data The data to send.
     * @param formSubmitted Whether a form was submitted.
     * @return Promise resolved when done.
     */
    processPage(data, formSubmitted) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loaded = false;
            const options = {
                password: this.password,
                review: this.review,
                offline: this.offline,
                accessInfo: this.accessInfo,
                jumps: this.jumps,
            };
            try {
                const result = yield this.callFunction(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].processPage.bind(_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].instance, this.lesson, this.courseId, this.pageData, data, options), options);
                if (formSubmitted) {
                    _singletons_form__WEBPACK_IMPORTED_MODULE_19__["CoreForms"].triggerFormSubmittedEvent(this.formElement, result.sent, _services_sites__WEBPACK_IMPORTED_MODULE_7__["CoreSites"].getCurrentSiteId());
                }
                if (!this.offline && !this.review && _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isLessonOffline(this.lesson)) {
                    // Lesson allows offline and the user changed some data in server. Update cached data.
                    const retake = this.accessInfo.attemptscount;
                    const options = {
                        cmId: this.cmId,
                        readingStrategy: 2 /* ONLY_NETWORK */,
                    };
                    // Update in background the list of content pages viewed or question attempts.
                    if (_services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].isQuestionPage(((_b = (_a = this.pageData) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.type) || -1)) {
                        _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getQuestionsAttemptsOnline(this.lesson.id, retake, options);
                    }
                    else {
                        _services_lesson__WEBPACK_IMPORTED_MODULE_15__["AddonModLesson"].getContentPagesViewedOnline(this.lesson.id, retake, options);
                    }
                }
                if (result.nodefaultresponse || result.inmediatejump) {
                    // Don't display feedback or force a redirect to a new page. Load the new page.
                    return yield this.jumpToPage(result.newpageid);
                }
                // Not inmediate jump, show the feedback.
                result.feedback = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].removeQuestionFromFeedback(result.feedback);
                this.messages = result.messages;
                this.processData = result;
                this.processDataButtons = [];
                if (this.lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                    !result.maxattemptsreached && !result.reviewmode) {
                    // User can try again, show button to do so.
                    this.processDataButtons.push({
                        label: 'addon.mod_lesson.reviewquestionback',
                        pageId: this.currentPage,
                    });
                }
                // Button to continue.
                if (this.lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                    !result.maxattemptsreached) {
                    /* If both the "Yes, I'd like to try again" and "No, I just want to go on to the next question" point to the
                        same page then don't show the "No, I just want to go on to the next question" button. It's confusing. */
                    if (this.pageData.page.id != result.newpageid) {
                        // Button to continue the lesson (the page to go is configured by the teacher).
                        this.processDataButtons.push({
                            label: 'addon.mod_lesson.reviewquestioncontinue',
                            pageId: result.newpageid,
                        });
                    }
                }
                else {
                    this.processDataButtons.push({
                        label: 'addon.mod_lesson.continue',
                        pageId: result.newpageid,
                    });
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error processing page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Review the lesson.
     *
     * @param pageId Page to load.
     */
    reviewLesson(pageId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loaded = false;
            this.review = true;
            this.offline = false; // Don't allow offline mode in review.
            try {
                yield this.loadPage(pageId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading page');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Submit a question.
     *
     * @param e Event.
     */
    submitQuestion(e) {
        e.preventDefault();
        e.stopPropagation();
        this.loaded = false;
        // Use getRawValue to include disabled values.
        const data = _services_lesson_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModLessonHelper"].prepareQuestionData(this.question, this.questionForm.getRawValue());
        this.processPage(data, true).finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Time up.
     */
    timeUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Time up called, hide the timer.
            this.endTime = undefined;
            this.loaded = false;
            try {
                yield this.finishRetake(true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error finishing attempt');
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Show the navigation modal.
     *
     * @return Promise resolved when done.
     */
    showMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.menuShown = true;
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].openSideModal({
                component: _components_menu_modal_menu_modal__WEBPACK_IMPORTED_MODULE_14__["AddonModLessonMenuModalPage"],
                componentProps: {
                    pageInstance: this,
                },
            });
            this.menuShown = false;
        });
    }
};
AddonModLessonPlayerPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddonModLessonPlayerPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],] }],
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['questionFormEl',] }]
};
AddonModLessonPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-lesson-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/lesson/pages/player/player.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player.scss */ "./src/addons/mod/lesson/pages/player/player.scss")).default]
    })
], AddonModLessonPlayerPage);



/***/ }),

/***/ "./src/addons/mod/lesson/pages/player/player.scss":
/*!********************************************************!*\
  !*** ./src/addons/mod/lesson/pages/player/player.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --background-odd: var(--gray-lighter);\n}\n\n:host-context(body.dark) {\n  --background-odd: var(--gray-darker);\n}\n\n:host ::ng-deep .addon-mod_lesson-slideshow {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n\n:host ::ng-deep .studentanswer {\n  -webkit-padding-start: 8px;\n          padding-inline-start: 8px;\n}\n\n:host ::ng-deep table {\n  width: 100%;\n  margin-top: 1.5rem;\n}\n\n:host ::ng-deep table tr:nth-child(odd) {\n  background-color: var(--background-odd);\n}\n\n:host ::ng-deep table tr:last-child td {\n  border-bottom: 0;\n}\n\n:host ::ng-deep table td {\n  padding: 5px;\n  line-height: 1.5;\n  border-bottom: 1px solid var(--gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2xlc3Nvbi9wYWdlcy9wbGF5ZXIvcGxheWVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxxQ0FBQTtBQUNIOztBQUVBO0VBQ0csb0NBQUE7QUFDSDs7QUFHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBUjs7QUFHSTtFQUNJLDBCQUFBO1VBQUEseUJBQUE7QUFEUjs7QUFJSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUZSOztBQUlRO0VBQ0ksdUNBQUE7QUFGWjs7QUFLUTtFQUNJLGdCQUFBO0FBSFo7O0FBTVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQUpaIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2xlc3Nvbi9wYWdlcy9wbGF5ZXIvcGxheWVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAtLWJhY2tncm91bmQtb2RkOiB2YXIoLS1ncmF5LWxpZ2h0ZXIpO1xufVxuXG46aG9zdC1jb250ZXh0KGJvZHkuZGFyaykge1xuICAgLS1iYWNrZ3JvdW5kLW9kZDogdmFyKC0tZ3JheS1kYXJrZXIpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAgIC5hZGRvbi1tb2RfbGVzc29uLXNsaWRlc2hvdyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLnN0dWRlbnRhbnN3ZXIge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4O1xuICAgIH1cblxuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcblxuICAgICAgICB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLW9kZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/addons/mod/quiz/classes/auto-save.ts":
/*!**************************************************!*\
  !*** ./src/addons/mod/quiz/classes/auto-save.ts ***!
  \**************************************************/
/*! exports provided: AddonModQuizAutoSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizAutoSave", function() { return AddonModQuizAutoSave; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/question/services/question-helper */ "./src/core/features/question/services/question-helper.ts");
/* harmony import */ var _singletons_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/logger */ "./src/core/singletons/logger.ts");
/* harmony import */ var _components_connection_error_connection_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/connection-error/connection-error */ "./src/addons/mod/quiz/components/connection-error/connection-error.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
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
 * Class to support auto-save in quiz. Every certain seconds, it will check if there are changes in the current page answers
 * and, if so, it will save them automatically.
 */
class AddonModQuizAutoSave {
    /**
     * Constructor.
     *
     * @param formName Name of the form where the answers are stored.
     * @param buttonSelector Selector to find the button to show the connection error.
     */
    constructor(formName, buttonSelector) {
        this.formName = formName;
        this.buttonSelector = buttonSelector;
        this.CHECK_CHANGES_INTERVAL = 5000;
        this.popoverShown = false; // Whether the popover is shown.
        this.logger = _singletons_logger__WEBPACK_IMPORTED_MODULE_3__["CoreLogger"].getInstance('AddonModQuizAutoSave');
        // Create the observable to notify if an error happened.
        this.errorObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    /**
     * Cancel a pending auto save.
     */
    cancelAutoSave() {
        clearTimeout(this.autoSaveTimeout);
        this.autoSaveTimeout = undefined;
    }
    /**
     * Check if the answers have changed in a page.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    checkChanges(quiz, attempt, preflightData, offline) {
        if (this.autoSaveTimeout) {
            // We already have an auto save pending, no need to check changes.
            return;
        }
        const answers = this.getAnswers();
        if (!this.previousAnswers) {
            // Previous answers isn't set, set it now.
            this.previousAnswers = answers;
            return;
        }
        // Check if answers have changed.
        let equal = true;
        for (const name in answers) {
            if (this.previousAnswers[name] != answers[name]) {
                equal = false;
                break;
            }
        }
        if (!equal) {
            this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
        }
        this.previousAnswers = answers;
    }
    /**
     * Get answers from a form.
     *
     * @return Answers.
     */
    getAnswers() {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_2__["CoreQuestionHelper"].getAnswersFromForm(document.forms[this.formName]);
    }
    /**
     * Hide the auto save error.
     */
    hideAutoSaveError() {
        var _a;
        this.errorObservable.next(false);
        (_a = this.popover) === null || _a === void 0 ? void 0 : _a.dismiss();
    }
    /**
     * Returns an observable that will notify when an error happens or stops.
     * It will send true when there's an error, and false when the error has been ammended.
     *
     * @return Observable.
     */
    onError() {
        return this.errorObservable;
    }
    /**
     * Schedule an auto save process if it's not scheduled already.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    setAutoSaveTimer(quiz, attempt, preflightData, offline) {
        // Don't schedule if already shceduled or quiz is almost closed.
        if (!quiz.autosaveperiod || this.autoSaveTimeout || _services_quiz__WEBPACK_IMPORTED_MODULE_5__["AddonModQuiz"].isAttemptTimeNearlyOver(quiz, attempt)) {
            return;
        }
        // Schedule save.
        this.autoSaveTimeout = window.setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const answers = this.getAnswers();
            this.cancelAutoSave();
            this.previousAnswers = answers; // Update previous answers to match what we're sending to the server.
            try {
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_5__["AddonModQuiz"].saveAttempt(quiz, attempt, answers, preflightData, offline);
                // Save successful, we can hide the connection error if it was shown.
                this.hideAutoSaveError();
            }
            catch (error) {
                // Error auto-saving. Show error and set timer again.
                this.logger.warn('Error auto-saving data.', error);
                // If there was no error already, show the error message.
                if (!this.errorObservable.getValue()) {
                    this.errorObservable.next(true);
                    this.showAutoSaveError();
                }
                // Try again.
                this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
            }
        }), quiz.autosaveperiod * 1000);
    }
    /**
     * Show an error popover due to an auto save error.
     */
    showAutoSaveError(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Don't show popover if it was already shown.
            if (this.popoverShown) {
                return;
            }
            const event = ev || {
                // Cannot use new Event() because event's target property is readonly
                target: document.querySelector(this.buttonSelector),
                stopPropagation: () => { },
                preventDefault: () => { },
            };
            this.popoverShown = true;
            this.popover = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].openPopover({
                component: _components_connection_error_connection_error__WEBPACK_IMPORTED_MODULE_4__["AddonModQuizConnectionErrorComponent"],
                event: event,
            });
            this.popoverShown = false;
        });
    }
    /**
     * Start a process to periodically check changes in answers.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    startCheckChangesProcess(quiz, attempt, preflightData, offline) {
        if (this.checkChangesInterval || !quiz.autosaveperiod) {
            // We already have the interval in place or the quiz has autosave disabled.
            return;
        }
        this.previousAnswers = undefined;
        // Load initial answers in 2.5 seconds so the first check interval finds them already loaded.
        this.loadPreviousAnswersTimeout = window.setTimeout(() => {
            this.checkChanges(quiz, attempt, preflightData, offline);
        }, 2500);
        // Check changes every certain time.
        this.checkChangesInterval = window.setInterval(() => {
            this.checkChanges(quiz, attempt, preflightData, offline);
        }, this.CHECK_CHANGES_INTERVAL);
    }
    /**
     * Stops the periodical check for changes.
     */
    stopCheckChangesProcess() {
        clearTimeout(this.loadPreviousAnswersTimeout);
        clearInterval(this.checkChangesInterval);
        this.loadPreviousAnswersTimeout = undefined;
        this.checkChangesInterval = undefined;
    }
}


/***/ }),

/***/ "./src/addons/mod/quiz/pages/player/player.module.ts":
/*!***********************************************************!*\
  !*** ./src/addons/mod/quiz/pages/player/player.module.ts ***!
  \***********************************************************/
/*! exports provided: AddonModQuizPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizPlayerPageModule", function() { return AddonModQuizPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_question_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/question/components/components.module */ "./src/core/features/question/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.page */ "./src/addons/mod/quiz/pages/player/player.page.ts");
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
        component: _player_page__WEBPACK_IMPORTED_MODULE_6__["AddonModQuizPlayerPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_5__["CanLeaveGuard"]],
    },
];
let AddonModQuizPlayerPageModule = class AddonModQuizPlayerPageModule {
};
AddonModQuizPlayerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
            _features_question_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionComponentsModule"],
        ],
        declarations: [
            _player_page__WEBPACK_IMPORTED_MODULE_6__["AddonModQuizPlayerPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], AddonModQuizPlayerPageModule);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/player/player.page.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/quiz/pages/player/player.page.ts ***!
  \*********************************************************/
/*! exports provided: AddonModQuizPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModQuizPlayerPage", function() { return AddonModQuizPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _features_question_components_question_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/question/components/question/question */ "./src/core/features/question/components/question/question.ts");
/* harmony import */ var _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/question/services/question-helper */ "./src/core/features/question/services/question-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/sync */ "./src/core/services/sync.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _classes_auto_save__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../classes/auto-save */ "./src/addons/mod/quiz/classes/auto-save.ts");
/* harmony import */ var _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/navigation-modal/navigation-modal */ "./src/addons/mod/quiz/components/navigation-modal/navigation-modal.ts");
/* harmony import */ var _services_quiz__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/quiz */ "./src/addons/mod/quiz/services/quiz.ts");
/* harmony import */ var _services_quiz_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/quiz-helper */ "./src/addons/mod/quiz/services/quiz-helper.ts");
/* harmony import */ var _services_quiz_sync__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/quiz-sync */ "./src/addons/mod/quiz/services/quiz-sync.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
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
 * Page that allows attempting a quiz.
 */
let AddonModQuizPlayerPage = class AddonModQuizPlayerPage {
    constructor(changeDetector, elementRef) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.component = _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizProvider"].COMPONENT; // Component to link the files to.
        this.loaded = false; // Whether data has been loaded.
        this.quizAborted = false; // Whether the quiz was aborted due to an error.
        this.offline = false; // Whether the quiz is being attempted in offline mode.
        this.navigation = []; // List of questions to navigate them.
        this.questions = []; // Questions of the current page.
        this.nextPage = -2; // Next page.
        this.previousPage = -1; // Previous page.
        this.showSummary = false; // Whether the attempt summary should be displayed.
        this.summaryQuestions = []; // The questions to display in the summary.
        this.canReturn = false; // Whether the user can return to a page after seeing the summary.
        this.preventSubmitMessages = []; // List of messages explaining why the quiz cannot be submitted.
        this.autoSaveError = false; // Whether there's been an error in auto-save.
        this.isSequential = false; // Whether quiz navigation is sequential.
        this.preflightData = {}; // Preflight data to attempt the quiz.
        this.newAttempt = false; // Whether the user is starting a new attempt.
        this.quizDataLoaded = false; // Whether the quiz data has been loaded.
        this.timeUpCalled = false; // Whether the time up function has been called.
        this.forceLeave = false; // If true, don't perform any check when leaving the view.
        this.reloadNavigation = false; // Whether navigation needs to be reloaded because some data was sent to server.
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('cmId');
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('courseId');
        this.moduleUrl = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteParam('moduleUrl');
        // Create the auto save instance.
        this.autoSave = new _classes_auto_save__WEBPACK_IMPORTED_MODULE_13__["AddonModQuizAutoSave"]('addon-mod_quiz-player-form', '#addon-mod_quiz-connection-error-button');
        // Start the player when the page is loaded.
        this.start();
        // Listen for errors on auto-save.
        this.autoSaveErrorSubscription = this.autoSave.onError().subscribe((error) => {
            this.autoSaveError = error;
            this.changeDetector.detectChanges();
        });
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        var _a;
        // Stop auto save.
        this.autoSave.cancelAutoSave();
        this.autoSave.stopCheckChangesProcess();
        (_a = this.autoSaveErrorSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        if (this.quiz) {
            // Unblock the quiz so it can be synced.
            _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].unblockOperation(_services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizProvider"].COMPONENT, this.quiz.id);
        }
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.forceLeave || this.quizAborted || !this.questions.length || this.showSummary) {
                return true;
            }
            // Save answers.
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield this.processAttempt(false, false);
            }
            catch (error) {
                // Save attempt failed. Show confirmation.
                modal.dismiss();
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('addon.mod_quiz.confirmleavequizonerror'));
                _singletons_form__WEBPACK_IMPORTED_MODULE_18__["CoreForms"].triggerFormCancelledEvent(this.formElement, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            }
            finally {
                modal.dismiss();
            }
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Close any modal if present.
            const modal = yield _singletons__WEBPACK_IMPORTED_MODULE_11__["ModalController"].getTop();
            modal === null || modal === void 0 ? void 0 : modal.dismiss();
        });
    }
    /**
     * Abort the quiz.
     */
    abortQuiz() {
        this.quizAborted = true;
    }
    /**
     * A behaviour button in a question was clicked (Check, Redo, ...).
     *
     * @param button Clicked button.
     */
    behaviourButtonClicked(button) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal;
            try {
                // Confirm that the user really wants to do it.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('core.areyousure'));
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                // Get the answers.
                const answers = yield this.prepareAnswers();
                // Add the clicked button data.
                answers[button.name] = button.value;
                // Behaviour checks are always in online.
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].processAttempt(this.quiz, this.attempt, answers, this.preflightData);
                this.reloadNavigation = true; // Data sent to server, navigation should be reloaded.
                // Reload the current page.
                const scrollElement = yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.getScrollElement());
                const scrollTop = (scrollElement === null || scrollElement === void 0 ? void 0 : scrollElement.scrollTop) || -1;
                this.loaded = false;
                (_b = this.content) === null || _b === void 0 ? void 0 : _b.scrollToTop(); // Scroll top so the spinner is seen.
                try {
                    yield this.loadPage(this.attempt.currentpage);
                }
                finally {
                    this.loaded = true;
                    if (scrollTop != -1) {
                        // Wait for content to be rendered.
                        setTimeout(() => {
                            var _a;
                            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToPoint(0, scrollTop);
                        }, 50);
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'Error performing action.');
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Change the current page. If slot is supplied, try to scroll to that question.
     *
     * @param page Page to load. -1 means summary.
     * @param fromModal Whether the page was selected using the navigation modal.
     * @param slot Slot of the question to scroll to.
     * @return Promise resolved when done.
     */
    changePage(page, fromModal, slot) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.attempt) {
                return;
            }
            if (page != -1 && (this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizProvider"].ATTEMPT_OVERDUE || this.attempt.finishedOffline)) {
                // We can't load a page if overdue or the local attempt is finished.
                return;
            }
            else if (page == this.attempt.currentpage && !this.showSummary && typeof slot != 'undefined') {
                // Navigating to a question in the current page.
                this.scrollToQuestion(slot);
                return;
            }
            else if ((page == this.attempt.currentpage && !this.showSummary) || (fromModal && this.isSequential && page != -1)) {
                // If the user is navigating to the current page we do nothing.
                // Also, in sequential quizzes we don't allow navigating using the modal except for finishing the quiz (summary).
                return;
            }
            else if (page === -1 && this.showSummary) {
                // Summary already shown.
                return;
            }
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
            // First try to save the attempt data. We only save it if we're not seeing the summary.
            if (!this.showSummary) {
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                try {
                    yield this.processAttempt(false, false);
                    modal.dismiss();
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
                    modal.dismiss();
                    return;
                }
                this.reloadNavigation = true; // Data sent to server, navigation should be reloaded.
            }
            this.loaded = false;
            try {
                // Attempt data successfully saved, load the page or summary.
                // Stop checking for changes during page change.
                this.autoSave.stopCheckChangesProcess();
                if (page === -1) {
                    yield this.loadSummary();
                }
                else {
                    yield this.loadPage(page);
                }
            }
            catch (error) {
                // If the user isn't seeing the summary, start the check again.
                if (!this.showSummary) {
                    this.autoSave.startCheckChangesProcess(this.quiz, this.attempt, this.preflightData, this.offline);
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
            }
            finally {
                this.loaded = true;
                if (typeof slot != 'undefined') {
                    // Scroll to the question. Give some time to the questions to render.
                    setTimeout(() => {
                        this.scrollToQuestion(slot);
                    }, 2000);
                }
            }
        });
    }
    /**
     * Convenience function to get the quiz data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.quiz = yield _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].getQuiz(this.courseId, this.cmId);
                // Block the quiz so it cannot be synced.
                _services_sync__WEBPACK_IMPORTED_MODULE_7__["CoreSync"].blockOperation(_services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizProvider"].COMPONENT, this.quiz.id);
                // Wait for any ongoing sync to finish. We won't sync a quiz while it's being played.
                yield _services_quiz_sync__WEBPACK_IMPORTED_MODULE_17__["AddonModQuizSync"].waitForSync(this.quiz.id);
                this.isSequential = _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].isNavigationSequential(this.quiz);
                if (_services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].isQuizOffline(this.quiz)) {
                    // Quiz supports offline.
                    this.offline = true;
                }
                else {
                    // Quiz doesn't support offline right now, but maybe it did and then the setting was changed.
                    // If we have an unfinished offline attempt then we'll use offline mode.
                    this.offline = yield _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].isLastAttemptOfflineUnfinished(this.quiz);
                }
                if (this.quiz.timelimit && this.quiz.timelimit > 0) {
                    this.readableTimeLimit = _services_utils_time__WEBPACK_IMPORTED_MODULE_9__["CoreTimeUtils"].formatTime(this.quiz.timelimit);
                }
                // Get access information for the quiz.
                this.quizAccessInfo = yield _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].getQuizAccessInformation(this.quiz.id, {
                    cmId: this.quiz.coursemodule,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                // Get user attempts to determine last attempt.
                const attempts = yield _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].getUserAttempts(this.quiz.id, {
                    cmId: this.quiz.coursemodule,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                if (!attempts.length) {
                    // There are no attempts, start a new one.
                    this.newAttempt = true;
                    return;
                }
                // Get the last attempt. If it's finished, start a new one.
                this.lastAttempt = yield _services_quiz_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModQuizHelper"].setAttemptCalculatedData(this.quiz, attempts[attempts.length - 1], false, undefined, true);
                this.newAttempt = _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].isAttemptFinished(this.lastAttempt.state);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquiz', true);
            }
        });
    }
    /**
     * Finish an attempt, either by timeup or because the user clicked to finish it.
     *
     * @param userFinish Whether the user clicked to finish the attempt.
     * @param timeUp Whether the quiz time is up.
     * @return Promise resolved when done.
     */
    finishAttempt(userFinish, timeUp) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal;
            try {
                // Show confirm if the user clicked the finish button and the quiz is in progress.
                if (!timeUp && this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizProvider"].ATTEMPT_IN_PROGRESS) {
                    yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_11__["Translate"].instant('addon.mod_quiz.confirmclose'));
                }
                modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading('core.sending', true);
                yield this.processAttempt(userFinish, timeUp);
                // Trigger an event to notify the attempt was finished.
                _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].trigger(_services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizProvider"].ATTEMPT_FINISHED_EVENT, {
                    quizId: this.quiz.id,
                    attemptId: this.attempt.id,
                    synced: !this.offline,
                }, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
                _singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].trigger(_singletons_events__WEBPACK_IMPORTED_MODULE_12__["CoreEvents"].ACTIVITY_DATA_SENT, { module: 'quiz' });
                // Leave the player.
                this.forceLeave = true;
                _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].back();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
            }
            finally {
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            }
        });
    }
    /**
     * Fix sequence checks of current page.
     *
     * @return Promise resolved when done.
     */
    fixSequenceChecks() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get current page data again to get the latest sequencechecks.
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].getAttemptData(this.attempt.id, this.attempt.currentpage, this.preflightData, {
                cmId: this.quiz.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            const newSequenceChecks = {};
            data.questions.forEach((question) => {
                const sequenceCheck = _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getQuestionSequenceCheckFromHtml(question.html);
                if (sequenceCheck) {
                    newSequenceChecks[question.slot] = sequenceCheck;
                }
            });
            // Notify the new sequence checks to the components.
            (_a = this.questionComponents) === null || _a === void 0 ? void 0 : _a.forEach((component) => {
                component.updateSequenceCheck(newSequenceChecks);
            });
        });
    }
    /**
     * Get the input answers.
     *
     * @return Object with the answers.
     */
    getAnswers() {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getAnswersFromForm(document.forms['addon-mod_quiz-player-form']);
    }
    /**
     * Initializes the timer if enabled.
     */
    initTimer() {
        var _a;
        if (!((_a = this.attemptAccessInfo) === null || _a === void 0 ? void 0 : _a.endtime) || this.attemptAccessInfo.endtime < 0) {
            return;
        }
        // Quiz has an end time. Check if time left should be shown.
        const shouldShowTime = _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].shouldShowTimeLeft(this.quizAccessInfo.activerulenames, this.attempt, this.attemptAccessInfo.endtime);
        if (shouldShowTime) {
            this.endTime = this.attemptAccessInfo.endtime;
        }
        else {
            delete this.endTime;
        }
    }
    /**
     * Load a page questions.
     *
     * @param page The page to load.
     * @return Promise resolved when done.
     */
    loadPage(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].getAttemptData(this.attempt.id, page, this.preflightData, {
                cmId: this.quiz.coursemodule,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            // Update attempt, status could change during the execution.
            this.attempt = data.attempt;
            this.attempt.currentpage = page;
            this.questions = data.questions;
            this.nextPage = data.nextpage;
            this.previousPage = this.isSequential ? -1 : page - 1;
            this.showSummary = false;
            this.questions.forEach((question) => {
                // Get the readable mark for each question.
                question.readableMark = _services_quiz_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModQuizHelper"].getQuestionMarkFromHtml(question.html);
                // Extract the question info box.
                _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].extractQuestionInfoBox(question, '.info');
                // Check if the question is blocked. If it is, treat it as a description question.
                if (_services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].isQuestionBlocked(question)) {
                    question.type = 'description';
                }
            });
            // Mark the page as viewed.
            _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].logViewAttempt(this.attempt.id, page, this.preflightData, this.offline, this.quiz));
            // Start looking for changes.
            this.autoSave.startCheckChangesProcess(this.quiz, this.attempt, this.preflightData, this.offline);
        });
    }
    /**
     * Load attempt summary.
     *
     * @return Promise resolved when done.
     */
    loadSummary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.summaryQuestions = [];
            this.summaryQuestions = yield _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].getAttemptSummary(this.attempt.id, this.preflightData, {
                cmId: this.quiz.coursemodule,
                loadLocal: this.offline,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            this.showSummary = true;
            this.canReturn = this.attempt.state == _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizProvider"].ATTEMPT_IN_PROGRESS && !this.attempt.finishedOffline;
            this.preventSubmitMessages = _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].getPreventSubmitMessages(this.summaryQuestions);
            this.dueDateWarning = _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].getAttemptDueDateWarning(this.quiz, this.attempt);
            // Log summary as viewed.
            _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(_services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].logViewAttemptSummary(this.attempt.id, this.preflightData, this.quiz.id, this.quiz.name));
        });
    }
    /**
     * Load data to navigate the questions using the navigation modal.
     *
     * @return Promise resolved when done.
     */
    loadNavigation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // We use the attempt summary to build the navigation because it contains all the questions.
            this.navigation = yield _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].getAttemptSummary(this.attempt.id, this.preflightData, {
                cmId: this.quiz.coursemodule,
                loadLocal: this.offline,
                readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
            });
            this.navigation.forEach((question) => {
                question.stateClass = _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].getQuestionStateClass(question.state || '');
            });
        });
    }
    /**
     * Open the navigation modal.
     *
     * @return Promise resolved when done.
     */
    openNavigation() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.reloadNavigation) {
                // Some data has changed, reload the navigation.
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].ignoreErrors(this.loadNavigation());
                modal.dismiss();
                this.reloadNavigation = false;
            }
            // Create the navigation modal.
            const modalData = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openSideModal({
                component: _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizNavigationModalComponent"],
                componentProps: {
                    navigation: this.navigation,
                    summaryShown: this.showSummary,
                    currentPage: (_a = this.attempt) === null || _a === void 0 ? void 0 : _a.currentpage,
                    isReview: false,
                },
            });
            if (modalData && modalData.action == _components_navigation_modal_navigation_modal__WEBPACK_IMPORTED_MODULE_14__["AddonModQuizNavigationModalComponent"].CHANGE_PAGE) {
                this.changePage(modalData.page, true, modalData.slot);
            }
        });
    }
    /**
     * Prepare the answers to be sent for the attempt.
     *
     * @return Promise resolved with the answers.
     */
    prepareAnswers() {
        return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].prepareAnswers(this.questions, this.getAnswers(), this.offline, this.component, this.quiz.coursemodule);
    }
    /**
     * Process attempt.
     *
     * @param userFinish Whether the user clicked to finish the attempt.
     * @param timeUp Whether the quiz time is up.
     * @param retrying Whether we're retrying the change.
     * @return Promise resolved when done.
     */
    processAttempt(userFinish, timeUp, retrying) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the answers to send.
            let answers = {};
            if (!this.showSummary) {
                answers = yield this.prepareAnswers();
            }
            try {
                // Send the answers.
                yield _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].processAttempt(this.quiz, this.attempt, answers, this.preflightData, userFinish, timeUp, this.offline);
            }
            catch (error) {
                if (!error || error.errorcode != 'submissionoutofsequencefriendlymessage') {
                    throw error;
                }
                try {
                    // There was an error with the sequence check. Try to ammend it.
                    yield this.fixSequenceChecks();
                }
                catch (_a) {
                    throw error;
                }
                if (retrying) {
                    // We're already retrying, don't send the data again because it could cause an infinite loop.
                    throw error;
                }
                // Sequence checks updated, try to send the data again.
                return this.processAttempt(userFinish, timeUp, true);
            }
            // Answers saved, cancel auto save.
            this.autoSave.cancelAutoSave();
            this.autoSave.hideAutoSaveError();
            if (this.formElement) {
                _singletons_form__WEBPACK_IMPORTED_MODULE_18__["CoreForms"].triggerFormSubmittedEvent(this.formElement, !this.offline, _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteId());
            }
            return _features_question_services_question_helper__WEBPACK_IMPORTED_MODULE_4__["CoreQuestionHelper"].clearTmpData(this.questions, this.component, this.quiz.coursemodule);
        });
    }
    /**
     * Scroll to a certain question.
     *
     * @param slot Slot of the question to scroll to.
     */
    scrollToQuestion(slot) {
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].scrollToElementBySelector(this.elementRef.nativeElement, this.content, '#addon-mod_quiz-question-' + slot);
    }
    /**
     * Show connection error.
     *
     * @param ev Click event.
     */
    showConnectionError(ev) {
        this.autoSave.showAutoSaveError(ev);
    }
    /**
     * Convenience function to start the player.
     */
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.loaded = false;
                if (!this.quizDataLoaded) {
                    // Fetch data.
                    yield this.fetchData();
                    this.quizDataLoaded = true;
                }
                // Quiz data has been loaded, try to start or continue.
                yield this.startOrContinueAttempt();
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Start or continue an attempt.
     *
     * @return Promise resolved when done.
     */
    startOrContinueAttempt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let attempt = this.newAttempt ? undefined : this.lastAttempt;
                // Get the preflight data and start attempt if needed.
                attempt = yield _services_quiz_helper__WEBPACK_IMPORTED_MODULE_16__["AddonModQuizHelper"].getAndCheckPreflightData(this.quiz, this.quizAccessInfo, this.preflightData, attempt, this.offline, false, 'addon.mod_quiz.startattempt');
                // Re-fetch attempt access information with the right attempt (might have changed because a new attempt was created).
                this.attemptAccessInfo = yield _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuiz"].getAttemptAccessInformation(this.quiz.id, attempt.id, {
                    cmId: this.quiz.coursemodule,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                this.attempt = attempt;
                yield this.loadNavigation();
                if (this.attempt.state != _services_quiz__WEBPACK_IMPORTED_MODULE_15__["AddonModQuizProvider"].ATTEMPT_OVERDUE && !this.attempt.finishedOffline) {
                    // Attempt not overdue and not finished in offline, load page.
                    yield this.loadPage(this.attempt.currentpage);
                    this.initTimer();
                }
                else {
                    // Attempt is overdue or finished in offline, we can only load the summary.
                    yield this.loadSummary();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
            }
        });
    }
    /**
     * Quiz time has finished.
     */
    timeUp() {
        if (this.timeUpCalled) {
            return;
        }
        this.timeUpCalled = true;
        this.finishAttempt(false, true);
    }
};
AddonModQuizPlayerPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AddonModQuizPlayerPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }],
    questionComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [_features_question_components_question_question__WEBPACK_IMPORTED_MODULE_3__["CoreQuestionComponent"],] }],
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['quizForm',] }]
};
AddonModQuizPlayerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-quiz-player',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/quiz/pages/player/player.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player.scss */ "./src/addons/mod/quiz/pages/player/player.scss")).default]
    })
], AddonModQuizPlayerPage);



/***/ }),

/***/ "./src/addons/mod/quiz/pages/player/player.scss":
/*!******************************************************!*\
  !*** ./src/addons/mod/quiz/pages/player/player.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-mod_quiz-question-note p {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n:host ion-content ion-toolbar {\n  border-bottom: 1px solid var(--gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL3F1aXovcGFnZXMvcGxheWVyL3BsYXllci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQVI7QUFHSTtFQUNJLG9DQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FkZG9ucy9tb2QvcXVpei9wYWdlcy9wbGF5ZXIvcGxheWVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLmFkZG9uLW1vZF9xdWl6LXF1ZXN0aW9uLW5vdGUgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIH1cblxuICAgIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-player-player-module.js.map