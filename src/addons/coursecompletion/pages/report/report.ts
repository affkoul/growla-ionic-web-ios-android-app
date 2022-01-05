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

import {
    AddonCourseCompletion,
    AddonCourseCompletionCourseCompletionStatus,
} from '@addons/coursecompletion/services/coursecompletion';
import { Component, OnInit } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import { CoreNavigator } from '@services/navigator';
import { CoreSites } from '@services/sites';
import { CoreDomUtils } from '@services/utils/dom';

/**
 * Page that displays the course completion report.
 */
@Component({
    selector: 'page-addon-course-completion-report',
    templateUrl: 'report.html',
})
export class AddonCourseCompletionReportPage implements OnInit {

    protected courseId!: number;
    protected userId!: number;

    completionLoaded = false;
    completion?: AddonCourseCompletionCourseCompletionStatus;
    showSelfComplete = false;
    tracked = true; // Whether completion is tracked.
    statusText?: string;

    /**
     * @inheritdoc
     */
    ngOnInit(): void {
        this.courseId = CoreNavigator.getRouteNumberParam('courseId')!;
        this.userId = CoreNavigator.getRouteNumberParam('userId') || CoreSites.getCurrentSiteUserId();

        if (!this.userId) {
            this.userId = CoreSites.getCurrentSiteUserId();
        }

        this.fetchCompletion().finally(() => {
            this.completionLoaded = true;
        });
    }

    /**
     * Fetch compleiton data.
     *
     * @return Promise resolved when done.
     */
    protected async fetchCompletion(): Promise<void> {
        try {
            this.completion = await AddonCourseCompletion.getCompletion(this.courseId, this.userId);

            this.statusText = AddonCourseCompletion.getCompletedStatusText(this.completion);
            this.showSelfComplete = AddonCourseCompletion.canMarkSelfCompleted(this.userId, this.completion);

            this.tracked = true;
        } catch (error) {
            if (error && error.errorcode == 'notenroled') {
                // Not enrolled error, probably a teacher.
                this.tracked = false;
            } else {
                CoreDomUtils.showErrorModalDefault(error, 'addon.coursecompletion.couldnotloadreport', true);
            }
        }
    }

    /**
     * Refresh completion data on PTR.
     *
     * @param refresher Refresher instance.
     */
    async refreshCompletion(refresher?: IonRefresher): Promise<void> {
        await AddonCourseCompletion.invalidateCourseCompletion(this.courseId, this.userId).finally(() => {
            this.fetchCompletion().finally(() => {
                refresher?.complete();
            });
        });
    }

    /**
     * Mark course as completed.
     */
    async completeCourse(): Promise<void> {
        const modal = await CoreDomUtils.showModalLoading('core.sending', true);

        try {
            await AddonCourseCompletion.markCourseAsSelfCompleted(this.courseId);

            await this.refreshCompletion();
        } catch (error) {
            CoreDomUtils.showErrorModal(error);
        } finally {
            modal.dismiss();
        }
    }

}
