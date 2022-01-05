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

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CoreEventObserver, CoreEvents } from '@singletons/events';
import { CoreAnimations } from '@components/animations';
import { ActivatedRoute } from '@angular/router';
import { CoreSites } from '@services/sites';
import {
    CoreComments,
    CoreCommentsCommentBasicData,
    CoreCommentsData,
    CoreCommentsProvider,
} from '@features/comments/services/comments';
import {
    CoreCommentsSync,
    CoreCommentsSyncProvider,
} from '@features/comments/services/comments-sync';
import { IonContent, IonRefresher } from '@ionic/angular';
import { ContextLevel, CoreConstants } from '@/core/constants';
import { CoreNavigator } from '@services/navigator';
import { Translate } from '@singletons';
import { CoreUtils } from '@services/utils/utils';
import { CoreDomUtils } from '@services/utils/dom';
import { CoreUser } from '@features/user/services/user';
import { CoreTextUtils } from '@services/utils/text';
import { CoreError } from '@classes/errors/error';
import { CoreCommentsOffline } from '@features/comments/services/comments-offline';
import { CoreCommentsDBRecord } from '@features/comments/services/database/comments';
import { CoreTimeUtils } from '@services/utils/time';
import { CoreApp } from '@services/app';
import moment from 'moment';

/**
 * Page that displays comments.
 */
@Component({
    selector: 'page-core-comments-viewer',
    templateUrl: 'viewer.html',
    animations: [CoreAnimations.SLIDE_IN_OUT],
    styleUrls: ['viewer.scss'],
})
export class CoreCommentsViewerPage implements OnInit, OnDestroy {

    @ViewChild(IonContent) content?: IonContent;

    comments: CoreCommentsDataToDisplay[] = [];
    commentsLoaded = false;
    contextLevel!: ContextLevel;
    instanceId!: number;
    componentName!: string;
    itemId = 0;
    area = '';
    page = 0;
    title = '';
    courseId?: number;
    canLoadMore = false;
    loadMoreError = false;
    canAddComments = false;
    canDeleteComments = false;
    showDelete = false;
    hasOffline = false;
    refreshIcon = CoreConstants.ICON_LOADING;
    syncIcon = CoreConstants.ICON_LOADING;
    offlineComment?: CoreCommentsOfflineWithUser;
    currentUserId: number;
    sending = false;
    newComment = '';

    protected addDeleteCommentsAvailable = false;
    protected syncObserver?: CoreEventObserver;
    protected viewDestroyed = false;

    constructor(
        protected route: ActivatedRoute,
    ) {
        this.currentUserId = CoreSites.getCurrentSiteUserId();

        // Refresh data if comments are synchronized automatically.
        this.syncObserver = CoreEvents.on(CoreCommentsSyncProvider.AUTO_SYNCED, (data) => {
            if (data.contextLevel == this.contextLevel && data.instanceId == this.instanceId &&
                    data.componentName == this.componentName && data.itemId == this.itemId && data.area == this.area) {
                // Show the sync warnings.
                this.showSyncWarnings(data.warnings);

                // Refresh the data.
                this.commentsLoaded = false;
                this.refreshIcon = CoreConstants.ICON_LOADING;
                this.syncIcon = CoreConstants.ICON_LOADING;

                this.page = 0;
                this.comments = [];
                this.fetchComments(false);
            }
        }, CoreSites.getCurrentSiteId());
    }

    /**
     * View loaded.
     */
    async ngOnInit(): Promise<void> {
        // Is implicit the user can delete if he can add.
        this.addDeleteCommentsAvailable = await CoreComments.isAddCommentsAvailable();
        this.currentUserId = CoreSites.getCurrentSiteUserId();

        this.commentsLoaded = false;
        this.contextLevel = CoreNavigator.getRouteParam<ContextLevel>('contextLevel')!;
        this.instanceId = CoreNavigator.getRouteNumberParam('instanceId')!;
        this.componentName = CoreNavigator.getRouteParam<string>('componentName')!;
        this.itemId = CoreNavigator.getRouteNumberParam('itemId')!;
        this.area = CoreNavigator.getRouteParam('area') || '';
        this.title = CoreNavigator.getRouteNumberParam('title') ||
            Translate.instant('core.comments.comments');
        this.courseId = CoreNavigator.getRouteNumberParam('courseId');

        await this.fetchComments(true);
    }

    /**
     * Fetches the comments.
     *
     * @param sync When to resync comments.
     * @param showErrors When to display errors or not.
     * @return Resolved when done.
     */
    protected async fetchComments(sync: boolean, showErrors = false): Promise<void> {
        this.loadMoreError = false;

        if (sync) {
            await CoreUtils.ignoreErrors(this.syncComments(showErrors));
        }

        try {
            // Get comments data.
            const commentsResponse = await CoreComments.getComments(
                this.contextLevel,
                this.instanceId,
                this.componentName,
                this.itemId,
                this.area,
                this.page,
            );
            this.canAddComments = this.addDeleteCommentsAvailable && !!commentsResponse.canpost;

            let comments = commentsResponse.comments.sort((a, b) => a.timecreated - b.timecreated);
            if (typeof commentsResponse.count != 'undefined') {
                this.canLoadMore = (this.comments.length + comments.length) < commentsResponse.count;
            } else {
                // Old style.
                this.canLoadMore = commentsResponse.comments.length > 0 &&
                    commentsResponse.comments.length >= CoreCommentsProvider.pageSize;
            }

            comments = await Promise.all(comments.map((comment) => this.loadCommentProfile(comment)));

            this.comments = comments.concat(this.comments);

            this.comments.forEach((comment, index) => {
                comment.showDate = this.showDate(comment, this.comments[index - 1]);
                comment.showUserData = this.showUserData(comment, this.comments[index - 1]);
                comment.showTail = this.showTail(comment, this.comments[index + 1]);
            });

            this.canDeleteComments = this.addDeleteCommentsAvailable &&
                (this.hasOffline || this.comments.some((comment) => !!comment.delete));

            await this.loadOfflineData();
        } catch (error) {
            this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
            if (error && this.componentName == 'assignsubmission_comments') {
                CoreDomUtils.showAlertTranslated('core.notice', 'core.comments.commentsnotworking');
            } else {
                CoreDomUtils.showErrorModalDefault(error, Translate.instant('core.error') + ': get_comments');
            }
        } finally {
            this.commentsLoaded = true;
            this.refreshIcon = CoreConstants.ICON_REFRESH;
            this.syncIcon = CoreConstants.ICON_SYNC;

            if (this.page == 0) {
                this.scrollToBottom();
            }
        }

    }

    /**
     * Function to load more commemts.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadPrevious(infiniteComplete?: () => void): Promise<void> {
        this.page++;
        this.canLoadMore = false;

        return this.fetchComments(true).finally(() => {
            infiniteComplete && infiniteComplete();
        });
    }

    /**
     * Refresh the comments.
     *
     * @param showErrors Whether to display errors or not.
     * @param refresher Refresher.
     * @return Resolved when done.
     */
    async refreshComments(showErrors: boolean, refresher?: IonRefresher): Promise<void> {
        this.commentsLoaded = false;
        this.refreshIcon = CoreConstants.ICON_LOADING;
        this.syncIcon = CoreConstants.ICON_LOADING;

        try {
            await this.invalidateComments();
        } finally {
            this.page = 0;
            this.comments = [];

            try {
                await this.fetchComments(true, showErrors);
            } finally {
                refresher?.complete();
            }
        }
    }

    /**
     * Show sync warnings if any.
     *
     * @param warnings the warnings
     */
    private showSyncWarnings(warnings: string[]): void {
        const message = CoreTextUtils.buildMessage(warnings);
        if (message) {
            CoreDomUtils.showErrorModal(message);
        }
    }

    /**
     * Tries to synchronize comments.
     *
     * @param showErrors Whether to display errors or not.
     * @return Promise resolved if sync is successful, rejected otherwise.
     */
    private async syncComments(showErrors: boolean): Promise<void> {
        try {
            const result = await CoreCommentsSync.syncComments(
                this.contextLevel,
                this.instanceId,
                this.componentName,
                this.itemId,
                this.area,
            );
            this.showSyncWarnings(result?.warnings || []);
        } catch (error) {
            if (showErrors) {
                CoreDomUtils.showErrorModalDefault(error, 'core.errorsync', true);
            }

            throw new CoreError(error);
        }
    }

    /**
     * Send the comment or store it offline.
     *
     * @param text Comment text to add.
     */
    async addComment(text: string): Promise<void> {
        CoreApp.closeKeyboard();
        const loadingModal = await CoreDomUtils.showModalLoading('core.sending', true);
        // Freeze the add comment button.
        this.sending = true;
        try {
            const commentsResponse = await CoreComments.addComment(
                text,
                this.contextLevel,
                this.instanceId,
                this.componentName,
                this.itemId,
                this.area,
            );

            CoreDomUtils.showToast(
                commentsResponse ? 'core.comments.eventcommentcreated' : 'core.datastoredoffline',
                true,
                3000,
            );

            if (commentsResponse) {
                this.invalidateComments();

                const addedComments = await this.loadCommentProfile(commentsResponse);
                addedComments.showDate = this.showDate(addedComments, this.comments[this.comments.length - 1]);
                addedComments.showUserData = this.showUserData(addedComments, this.comments[this.comments.length - 1]);
                addedComments.showTail = this.showTail(addedComments, this.comments[this.comments.length + 1]);

                // Add the comment to the top.
                this.comments = this.comments.concat([addedComments]);
                this.canDeleteComments = this.addDeleteCommentsAvailable;

                CoreEvents.trigger(CoreCommentsProvider.COMMENTS_COUNT_CHANGED_EVENT, {
                    contextLevel: this.contextLevel,
                    instanceId: this.instanceId,
                    component: this.componentName,
                    itemId: this.itemId,
                    area: this.area,
                    countChange: 1,
                }, CoreSites.getCurrentSiteId());

            } else if (commentsResponse === false) {
                // Comments added in offline mode.
                await this.loadOfflineData();
            }
        } catch (error) {
            CoreDomUtils.showErrorModal(error);
        } finally {
            loadingModal.dismiss();
            this.sending = false;

            // New comments.
            this.scrollToBottom();
        }
    }

    /**
     * Delete a comment.
     *
     * @param e Click event.
     * @param comment Comment to delete.
     */
    async deleteComment(e: Event, comment: CoreCommentsDataToDisplay | CoreCommentsOfflineWithUser): Promise<void> {
        e.preventDefault();
        e.stopPropagation();

        const modified = 'lastmodified' in comment
            ? comment.lastmodified
            : comment.timecreated;
        const time = CoreTimeUtils.userDate(
            modified * 1000,
            'core.strftimerecentfull',
        );

        const deleteComment: CoreCommentsCommentBasicData = {
            contextlevel: this.contextLevel,
            instanceid: this.instanceId,
            component: this.componentName,
            itemid: this.itemId,
            area: this.area,
            content: comment.content,
            id: 'id' in comment ? comment.id : undefined,
        };

        try {
            await CoreDomUtils.showDeleteConfirm('core.comments.deletecommentbyon', {
                $a:
                    { user: comment.fullname || '', time: time },
            });
        } catch {
            // User cancelled, nothing to do.
            return;
        }

        try {
            const deletedOnline = await CoreComments.deleteComment(deleteComment);
            this.showDelete = false;

            if (deletedOnline && 'id' in comment) {
                const index = this.comments.findIndex((commentinList) => commentinList.id == comment.id);

                if (index >= 0) {
                    this.comments.splice(index, 1);

                    CoreEvents.trigger(CoreCommentsProvider.COMMENTS_COUNT_CHANGED_EVENT, {
                        contextLevel: this.contextLevel,
                        instanceId: this.instanceId,
                        component: this.componentName,
                        itemId: this.itemId,
                        area: this.area,
                        countChange: -1,
                    }, CoreSites.getCurrentSiteId());
                }
            } else {
                this.loadOfflineData();
            }

            this.invalidateComments();

            CoreDomUtils.showToast('core.comments.eventcommentdeleted', true, 3000);
        } catch (error) {
            CoreDomUtils.showErrorModalDefault(error, 'Delete comment failed.');
        }
    }

    /**
     * Invalidate comments.
     *
     * @return Resolved when done.
     */
    protected invalidateComments(): Promise<void> {
        return CoreComments.invalidateCommentsData(
            this.contextLevel,
            this.instanceId,
            this.componentName,
            this.itemId,
            this.area,
        );
    }

    /**
     * Loads the profile info onto the comment object.
     *
     * @param comment Comment object.
     * @return Promise resolved with modified comment when done.
     */
    protected async loadCommentProfile(comment: CoreCommentsDataToDisplay): Promise<CoreCommentsDataToDisplay> {
        // Get the user profile image.
        try {
            const user = await CoreUser.getProfile(comment.userid!, undefined, true);
            comment.profileimageurl = user.profileimageurl;
            comment.fullname = user.fullname;
        } catch {
            // Ignore errors.
        }

        return comment;

    }

    /**
     * Check if the user info should be displayed for the current message.
     * User data is only displayed if the previous message was from another user.
     *
     * @param comment Comment object.
     * @param prevComment Previous comment object.
     * @return Whether user data should be shown.
     */
    protected showUserData(
        comment: CoreCommentsDataToDisplay,
        prevComment?: CoreCommentsDataToDisplay,
    ): boolean {
        return comment.userid != this.currentUserId && (!prevComment || prevComment.userid != comment.userid || !!comment.showDate);
    }

    /**
     * Check if a css tail should be shown.
     *
     * @param comment Comment object.
     * @param nextComment Previous comment object.
     * @return Whether user data should be shown.
     */
    protected showTail(
        comment: CoreCommentsDataToDisplay,
        nextComment?: CoreCommentsDataToDisplay,
    ): boolean {
        return !nextComment || nextComment.userid != comment.userid || !!nextComment.showDate;
    }

    /**
     * Check if the date should be displayed between messages (when the day changes at midnight for example).
     *
     * @param comment Comment object.
     * @param prevComment Previous comment object.
     * @return True if messages are from diferent days, false othetwise.
     */
    protected showDate(
        comment: CoreCommentsDataToDisplay,
        prevComment?: CoreCommentsDataToDisplay,
    ): boolean {
        if (!prevComment) {
            return true;
        }

        // Check if day has changed.
        return !moment(comment.timecreated * 1000).isSame(prevComment.timecreated * 1000, 'day');
    }

    /**
     * Load offline comments.
     *
     * @return Promise resolved when done.
     */
    protected async loadOfflineData(): Promise<void> {
        const promises: Promise<void>[] = [];
        let hasDeletedComments = false;

        // Load the only offline comment allowed if any.
        promises.push(CoreCommentsOffline.getComment(
            this.contextLevel,
            this.instanceId,
            this.componentName,
            this.itemId,
            this.area,
        ).then(async (offlineComment) => {
            this.offlineComment = offlineComment;

            if (!offlineComment) {
                return;
            }

            if (this.newComment == '') {
                this.newComment = this.offlineComment!.content;
            }

            this.offlineComment!.userid = this.currentUserId;

            return;
        }));

        // Load deleted comments offline.
        promises.push(CoreCommentsOffline.getDeletedComments(
            this.contextLevel,
            this.instanceId,
            this.componentName,
            this.itemId,
            this.area,
        ).then((deletedComments) => {
            hasDeletedComments = deletedComments && deletedComments.length > 0;

            if (hasDeletedComments) {
                deletedComments.forEach((deletedComment) => {
                    const comment = this.comments.find((comment) => comment.id == deletedComment.commentid);

                    if (comment) {
                        comment.deleted = !!deletedComment.deleted;
                    }
                });
            }

            return;
        }));

        await Promise.all(promises);

        this.hasOffline = !!this.offlineComment || hasDeletedComments;
    }

    /**
     * Restore a comment.
     *
     * @param e Click event.
     * @param comment Comment to delete.
     */
    async undoDeleteComment(e: Event, comment: CoreCommentsDataToDisplay): Promise<void> {
        e.preventDefault();
        e.stopPropagation();

        await CoreCommentsOffline.undoDeleteComment(comment.id);

        comment.deleted = false;
        this.showDelete = false;
    }

    /**
     * Scroll bottom when render has finished.
     */
    protected scrollToBottom(): void {
        // Need a timeout to leave time to the view to be rendered.
        setTimeout(() => {
            if (!this.viewDestroyed) {
                this.content?.scrollToBottom();
            }
        }, 100);
    }

    /**
     * Toggle delete.
     */
    toggleDelete(): void {
        this.showDelete = !this.showDelete;
    }

    /**
     * Page destroyed.
     */
    ngOnDestroy(): void {
        this.syncObserver?.off();
        this.viewDestroyed = true;
    }

}

export type CoreCommentsDataToDisplay = CoreCommentsData & {
    profileimageurl?: string;
    fullname?: string;
    deleted?: boolean;
    showDate?: boolean;
    showTail?: boolean;
    showUserData?: boolean;
};

export type CoreCommentsOfflineWithUser = CoreCommentsDBRecord & {
    profileimageurl?: string;
    fullname?: string;
    userid?: number;
    deleted?: boolean;
};
