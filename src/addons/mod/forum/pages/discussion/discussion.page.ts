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

import { ContextLevel, CoreConstants } from '@/core/constants';
import { Component, OnDestroy, ViewChild, OnInit, AfterViewInit, ElementRef, Optional } from '@angular/core';
import { CoreSplitViewComponent } from '@components/split-view/split-view';
import { CoreFileUploader } from '@features/fileuploader/services/fileuploader';
import { CoreRatingInfo, CoreRatingProvider } from '@features/rating/services/rating';
import { CoreRatingOffline } from '@features/rating/services/rating-offline';
import { CoreRatingSyncProvider } from '@features/rating/services/rating-sync';
import { CoreUser } from '@features/user/services/user';
import { CanLeave } from '@guards/can-leave';
import { IonContent, IonRefresher } from '@ionic/angular';
import { CoreApp } from '@services/app';
import { CoreNavigator } from '@services/navigator';
import { CoreScreen } from '@services/screen';
import { CoreSites } from '@services/sites';
import { CoreDomUtils } from '@services/utils/dom';
import { CoreUtils } from '@services/utils/utils';
import { Network, NgZone, Translate } from '@singletons';
import { CoreArray } from '@singletons/array';
import { CoreEventObserver, CoreEvents } from '@singletons/events';
import { Subscription } from 'rxjs';
import {
    AddonModForum,
    AddonModForumAccessInformation,
    AddonModForumData,
    AddonModForumDiscussion,
    AddonModForumPost,
    AddonModForumProvider,
    AddonModForumReply,
} from '../../services/forum';
import { AddonModForumHelper } from '../../services/forum-helper';
import { AddonModForumOffline } from '../../services/forum-offline';
import { AddonModForumSync, AddonModForumSyncProvider } from '../../services/forum-sync';

type SortType = 'flat-newest' | 'flat-oldest' | 'nested';

type Post = AddonModForumPost & { children?: Post[] };

/**
 * Page that displays a forum discussion.
 */
@Component({
    selector: 'page-addon-mod-forum-discussion',
    templateUrl: 'discussion.html',
    styleUrls: ['discussion.scss'],
})
export class AddonModForumDiscussionPage implements OnInit, AfterViewInit, OnDestroy, CanLeave {

    @ViewChild(IonContent) content!: IonContent;

    courseId!: number;
    discussionId!: number;
    forum: Partial<AddonModForumData> = {};
    accessInfo: AddonModForumAccessInformation = {};
    discussion!: AddonModForumDiscussion;
    startingPost?: Post;
    posts!: Post[];
    discussionLoaded = false;
    postSubjects!: { [id: string]: string };
    isOnline!: boolean;
    postHasOffline!: boolean;
    sort: SortType = 'nested';
    trackPosts!: boolean;
    replyData: Omit<AddonModForumReply, 'id'> = {
        replyingTo: 0,
        isEditing: false,
        subject: '',
        message: null,
        files: [],
        isprivatereply: false,
    };

    originalData: Omit<AddonModForumReply, 'id'> = {
        subject: null,
        message: null,
        files: [],
        isprivatereply: false,
    };

    refreshIcon = CoreConstants.ICON_LOADING;
    syncIcon = CoreConstants.ICON_LOADING;
    discussionStr = '';
    component = AddonModForumProvider.COMPONENT;
    cmId!: number;
    canPin = false;
    availabilityMessage: string | null = null;
    leavingPage = false;

    protected forumId!: number;
    protected postId!: number;
    protected parent!: number;
    protected onlineObserver?: Subscription;
    protected syncObserver?: CoreEventObserver;
    protected syncManualObserver?: CoreEventObserver;

    ratingInfo?: CoreRatingInfo;
    hasOfflineRatings = false;
    protected ratingOfflineObserver?: CoreEventObserver;
    protected ratingSyncObserver?: CoreEventObserver;
    protected changeDiscObserver?: CoreEventObserver;

    constructor(
        @Optional() protected splitView: CoreSplitViewComponent,
        protected elementRef: ElementRef,
    ) {}

    get isMobile(): boolean {
        return CoreScreen.isMobile;
    }

    ngOnInit(): void {
        this.courseId = CoreNavigator.getRouteNumberParam('courseId')!;
        this.cmId = CoreNavigator.getRouteNumberParam('cmId')!;
        this.forumId = CoreNavigator.getRouteNumberParam('forumId')!;
        this.discussion = CoreNavigator.getRouteParam<AddonModForumDiscussion>('discussion')!;
        this.discussionId = this.discussion
            ? this.discussion.discussion
            : CoreNavigator.getRouteNumberParam('discussionId')!;
        this.trackPosts = CoreNavigator.getRouteBooleanParam('trackPosts')!;
        this.postId = CoreNavigator.getRouteNumberParam('postId')!;
        this.parent = CoreNavigator.getRouteNumberParam('parent')!;

        this.isOnline = CoreApp.isOnline();
        this.onlineObserver = Network.onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            NgZone.run(() => {
                this.isOnline = CoreApp.isOnline();
            });
        });

        this.discussionStr = Translate.instant('addon.mod_forum.discussion');
    }

    /**
     * View loaded.
     */
    async ngAfterViewInit(): Promise<void> {
        if (this.parent) {
            this.sort = 'nested'; // Force nested order.
        } else {
            this.sort = await this.getUserSort();
        }

        await this.fetchPosts(true, false, true);

        const scrollTo = this.postId || this.parent;
        if (scrollTo) {
            // Scroll to the post.
            setTimeout(() => {
                CoreDomUtils.scrollToElementBySelector(
                    this.elementRef.nativeElement,
                    this.content,
                    '#addon-mod_forum-post-' + scrollTo,
                );
            });
        }
    }

    /**
     * User entered the page that contains the component.
     */
    async ionViewDidEnter(): Promise<void> {
        if (this.syncObserver) {
            // Already setup.
            return;
        }

        // The discussion object was not passed as parameter.
        if (!this.discussion) {
            await this.loadDiscussion(this.forumId, this.cmId, this.discussionId);
        }

        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = CoreEvents.on(AddonModForumSyncProvider.AUTO_SYNCED, data => {
            if (data.forumId == this.forumId && this.discussionId == data.discussionId
                    && data.userId == CoreSites.getCurrentSiteUserId()) {
                // Refresh the data.
                this.discussionLoaded = false;
                this.refreshPosts();
            }
        }, CoreSites.getCurrentSiteId());

        // Refresh data if this forum discussion is synchronized from discussions list.
        this.syncManualObserver = CoreEvents.on(AddonModForumSyncProvider.MANUAL_SYNCED, data => {
            if (data.source != 'discussion' && data.forumId == this.forumId &&
                    data.userId == CoreSites.getCurrentSiteUserId()) {
                // Refresh the data.
                this.discussionLoaded = false;
                this.refreshPosts();
            }
        }, CoreSites.getCurrentSiteId());

        // Invalidate discussion list if it was not read.
        if (this.discussion.numunread > 0) {
            AddonModForum.invalidateDiscussionsList(this.forumId);
        }

        // Listen for offline ratings saved and synced.
        this.ratingOfflineObserver = CoreEvents.on(CoreRatingProvider.RATING_SAVED_EVENT, (data) => {
            if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == ContextLevel.MODULE &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                this.hasOfflineRatings = true;
            }
        });

        this.ratingSyncObserver = CoreEvents.on(CoreRatingSyncProvider.SYNCED_EVENT, async (data) => {
            if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == ContextLevel.MODULE &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                this.hasOfflineRatings = false;
            }
        });

        this.changeDiscObserver = CoreEvents.on(AddonModForumProvider.CHANGE_DISCUSSION_EVENT, data => {
            if ((this.forumId && this.forumId === data.forumId) || data.cmId === this.cmId) {
                AddonModForum.invalidateDiscussionsList(this.forumId).finally(() => {
                    if (typeof data.locked != 'undefined') {
                        this.discussion.locked = data.locked;
                    }
                    if (typeof data.pinned != 'undefined') {
                        this.discussion.pinned = data.pinned;
                    }
                    if (typeof data.starred != 'undefined') {
                        this.discussion.starred = data.starred;
                    }

                    if (typeof data.deleted != 'undefined' && data.deleted) {
                        if (!data.post?.parentid) {
                            if (this.splitView?.outletActivated) {
                                CoreNavigator.navigate('../');
                            } else {
                                CoreNavigator.back();
                            }
                        } else {
                            this.discussionLoaded = false;
                            this.refreshPosts();
                        }
                    }
                });
            }
        });
    }

    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    async canLeave(): Promise<boolean> {
        if (AddonModForumHelper.hasPostDataChanged(this.replyData, this.originalData)) {
            // Show confirmation if some data has been modified.
            await CoreDomUtils.showConfirm(Translate.instant('core.confirmcanceledit'));
        }

        // Delete the local files from the tmp folder.
        CoreFileUploader.clearTmpFiles(this.replyData.files);

        this.leavingPage = true;

        return true;
    }

    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave(): void {
        this.syncObserver && this.syncObserver.off();
        this.syncManualObserver && this.syncManualObserver.off();
        this.ratingOfflineObserver && this.ratingOfflineObserver.off();
        this.ratingSyncObserver && this.ratingSyncObserver.off();
        this.changeDiscObserver && this.changeDiscObserver.off();
        delete this.syncObserver;
    }

    /**
     * Page destroyed.
     */
    ngOnDestroy(): void {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    }

    /**
     * Get sort type configured by the current user.
     *
     * @return Promise resolved with the sort type.
     */
    protected async getUserSort(): Promise<SortType> {
        try {
            const value = await CoreSites.getCurrentSite()!.getLocalSiteConfig<SortType>('AddonModForumDiscussionSort');

            return value;
        } catch (error) {
            try {
                const value = await CoreUser.getUserPreference('forum_displaymode');

                switch (Number(value)) {
                    case 1:
                        return 'flat-oldest';
                    case -1:
                        return 'flat-newest';
                    case 3:
                        return 'nested';
                    case 2: // Threaded not implemented.
                    default:
                        // Not set, use default sort.
                        // @TODO add fallback to $CFG->forum_displaymode.
                }
            } catch (error) {
                // Ignore errors.
            }
        }

        return 'flat-oldest';
    }

    /**
     * Convenience function to get the forum.
     *
     * @return Promise resolved with the forum.
     */
    protected fetchForum(): Promise<AddonModForumData> {
        if (this.courseId && this.cmId) {
            return AddonModForum.getForum(this.courseId, this.cmId);
        }

        if (this.courseId && this.forumId) {
            return AddonModForum.getForumById(this.courseId, this.forumId);
        }

        throw new Error('Cannot get the forum');
    }

    /**
     * Convenience function to get the posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @param forceMarkAsRead Whether to mark all posts as read.
     * @return Promise resolved when done.
     */
    protected async fetchPosts(sync?: boolean, showErrors?: boolean, forceMarkAsRead?: boolean): Promise<void> {
        let onlinePosts: AddonModForumPost[] = [];
        const offlineReplies: AddonModForumPost[] = [];
        let hasUnreadPosts = false;

        try {
            if (sync) {
                // Try to synchronize the forum.
                await CoreUtils.ignoreErrors(this.syncDiscussion(!!showErrors));
            }

            const response = await AddonModForum.getDiscussionPosts(this.discussionId, { cmId: this.cmId });
            const replies = await AddonModForumOffline.getDiscussionReplies(this.discussionId);
            this.ratingInfo = response.ratinginfo;

            onlinePosts = response.posts;
            this.courseId = response.courseid || this.courseId;
            this.forumId = response.forumid || this.forumId;

            // Check if there are responses stored in offline.
            this.postHasOffline = !!replies.length;
            const convertPromises: Promise<void>[] = [];

            // Index posts to allow quick access. Also check unread field.
            const onlinePostsMap: Record<string, AddonModForumPost> = {};
            onlinePosts.forEach((post) => {
                onlinePostsMap[post.id] = post;
                hasUnreadPosts = hasUnreadPosts || !!post.unread;
            });

            replies.forEach((offlineReply) => {
                // If we don't have forumId and courseId, get it from the post.
                if (!this.forumId) {
                    this.forumId = offlineReply.forumid;
                }
                if (!this.courseId) {
                    this.courseId = offlineReply.courseid;
                }

                convertPromises.push(
                    AddonModForumHelper.instance
                        .convertOfflineReplyToOnline(offlineReply)
                        .then(async reply => {
                            offlineReplies.push(reply);

                            // Disable reply of the parent. Reply in offline to the same post is not allowed, edit instead.
                            onlinePostsMap[reply.parentid!].capabilities.reply = false;

                            return;
                        }),
                );
            });

            await Promise.all(convertPromises);

            // Convert back to array.
            onlinePosts = CoreUtils.objectToArray(onlinePostsMap);

            let posts = offlineReplies.concat(onlinePosts);

            this.startingPost = AddonModForum.extractStartingPost(posts);

            // If sort type is nested, normal sorting is disabled and nested posts will be displayed.
            if (this.sort == 'nested') {
                // Sort first by creation date to make format tree work.
                AddonModForum.sortDiscussionPosts(posts, 'ASC');

                const rootId = this.startingPost ? this.startingPost.id : (this.discussion ? this.discussion.id : 0);
                posts = CoreUtils.formatTree(posts, 'parentid', 'id', rootId);
            } else {
                // Set default reply subject.
                const direction = this.sort == 'flat-newest' ? 'DESC' : 'ASC';
                AddonModForum.sortDiscussionPosts(posts, direction);
            }

            try {
                // Now try to get the forum.
                const forum = await this.fetchForum();
                // "forum.istracked" is more reliable than "trackPosts".
                if (typeof forum.istracked != 'undefined') {
                    this.trackPosts = forum.istracked;
                }

                this.forumId = forum.id;
                this.cmId = forum.cmid;
                this.courseId = forum.course;
                this.forum = forum;
                this.availabilityMessage = AddonModForumHelper.getAvailabilityMessage(forum);

                const promises: Promise<void>[] = [];

                promises.push(
                    AddonModForum.instance
                        .getAccessInformation(this.forumId, { cmId: this.cmId })
                        .then(async accessInfo => {
                            this.accessInfo = accessInfo;

                            // Disallow replying if cut-off date is reached and the user has not the capability to override it.
                            // Just in case the posts were fetched from WS when the cut-off date was not reached but it is now.
                            if (AddonModForumHelper.isCutoffDateReached(forum) && !accessInfo.cancanoverridecutoff) {
                                posts.forEach((post) => {
                                    post.capabilities.reply = false;
                                });
                            }

                            return;
                        }),
                );

                // The discussion object was not passed as parameter and there is no starting post.
                if (!this.discussion) {
                    promises.push(this.loadDiscussion(this.forumId, this.cmId, this.discussionId));
                }

                await Promise.all(promises);
            } catch (error) {
                // Ignore errors.
            }

            if (!this.discussion && !this.startingPost) {
                // The discussion object was not passed as parameter and there is no starting post. Should not happen.
                throw new Error('Invalid forum discussion.');
            }

            if (this.startingPost && this.startingPost.author && this.forum.type == 'single') {
                // Hide author and groups for first post and type single.
                delete this.startingPost.author.fullname;
                delete this.startingPost.author.groups;
            }

            this.posts = posts;
            this.postSubjects = this.getAllPosts().reduce(
                (postSubjects, post) => {
                    postSubjects[post.id] = post.subject;

                    return postSubjects;
                },
                this.startingPost
                    ? { [this.startingPost.id]: this.startingPost.subject }
                    : {},
            );

            if (AddonModForum.isSetPinStateAvailableForSite()) {
                // Use the canAddDiscussion WS to check if the user can pin discussions.
                try {
                    const response = await AddonModForum.canAddDiscussionToAll(this.forumId, { cmId: this.cmId });

                    this.canPin = !!response.canpindiscussions;
                } catch (error) {
                    this.canPin = false;
                }
            } else {
                this.canPin = false;
            }

            this.hasOfflineRatings =
                await CoreRatingOffline.hasRatings('mod_forum', 'post', ContextLevel.MODULE, this.cmId, this.discussionId);
        } catch (error) {
            CoreDomUtils.showErrorModal(error);
        } finally {
            this.discussionLoaded = true;
            this.refreshIcon = CoreConstants.ICON_REFRESH;
            this.syncIcon = CoreConstants.ICON_SYNC;

            if (forceMarkAsRead || (hasUnreadPosts && this.trackPosts)) {
                // // Add log in Moodle and mark unread posts as readed.
                AddonModForum.logDiscussionView(this.discussionId, this.forumId || -1, this.forum.name).catch(() => {
                    // Ignore errors.
                }).finally(() => {
                    // Trigger mark read posts.
                    CoreEvents.trigger(AddonModForumProvider.MARK_READ_EVENT, {
                        courseId: this.courseId,
                        moduleId: this.cmId,
                    }, CoreSites.getCurrentSiteId());
                });
            }
        }
    }

    /**
     * Convenience function to load discussion.
     *
     * @param forumId Forum ID.
     * @param cmId Forum cmid.
     * @param discussionId Discussion ID.
     * @return Promise resolved when done.
     */
    protected async loadDiscussion(forumId: number, cmId: number, discussionId: number): Promise<void> {
        // Fetch the discussion if not passed as parameter.
        if (this.discussion || !forumId) {
            return;
        }

        try {
            const discussion = await AddonModForumHelper.getDiscussionById(forumId, cmId, discussionId);

            this.discussion = discussion;
            this.discussionId = this.discussion.discussion;
        } catch (error) {
            // Ignore errors.
        }
    }

    /**
     * Tries to synchronize the posts discussion.
     *
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    protected async syncDiscussion(showErrors: boolean): Promise<void> {
        const promises: Promise<void>[] = [];

        promises.push(
            AddonModForumSync.instance
                .syncDiscussionReplies(this.discussionId)
                .then((result) => {
                    if (result.warnings && result.warnings.length) {
                        CoreDomUtils.showErrorModal(result.warnings[0]);
                    }

                    if (result && result.updated) {
                        // Sync successful, send event.
                        CoreEvents.trigger(AddonModForumSyncProvider.MANUAL_SYNCED, {
                            forumId: this.forumId,
                            userId: CoreSites.getCurrentSiteUserId(),
                            source: 'discussion',
                        }, CoreSites.getCurrentSiteId());
                    }

                    return;
                }),
        );

        promises.push(
            AddonModForumSync.instance
                .syncRatings(this.cmId, this.discussionId)
                .then((result) => {
                    if (result.warnings && result.warnings.length) {
                        CoreDomUtils.showErrorModal(result.warnings[0]);
                    }

                    return;
                }),
        );

        try {
            await Promise.all(promises);
        } catch (error) {
            if (showErrors) {
                CoreDomUtils.showErrorModalDefault(error, 'core.errorsync', true);
            }

            throw new Error('Failed syncing discussion');
        }
    }

    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors If show errors to the user of hide them.
     * @return Promise resolved when done.
     */
    async doRefresh(refresher?: IonRefresher | null, done?: () => void, showErrors: boolean = false): Promise<void> {
        if (this.discussionLoaded) {
            await this.refreshPosts(true, showErrors).finally(() => {
                refresher?.complete();
                done && done();
            });
        }
    }

    /**
     * Refresh posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    refreshPosts(sync?: boolean, showErrors?: boolean): Promise<void> {
        this.content.scrollToTop();
        this.refreshIcon = CoreConstants.ICON_LOADING;
        this.syncIcon = CoreConstants.ICON_LOADING;

        const promises = [
            AddonModForum.invalidateForumData(this.courseId),
            AddonModForum.invalidateDiscussionPosts(this.discussionId, this.forumId),
            AddonModForum.invalidateAccessInformation(this.forumId),
            AddonModForum.invalidateCanAddDiscussion(this.forumId),
        ];

        return CoreUtils.allPromises(promises).catch(() => {
            // Ignore errors.
        }).then(() => this.fetchPosts(sync, showErrors));
    }

    /**
     * Function to change posts sorting
     *
     * @param type Sort type.
     * @return Promised resolved when done.
     */
    changeSort(type: SortType): Promise<void> {
        this.discussionLoaded = false;
        this.sort = type;
        CoreSites.getCurrentSite()!.setLocalSiteConfig('AddonModForumDiscussionSort', this.sort);
        this.content.scrollToTop();

        return this.fetchPosts();
    }

    /**
     * Lock or unlock the discussion.
     *
     * @param locked True to lock the discussion, false to unlock.
     */
    async setLockState(locked: boolean): Promise<void> {
        const modal = await CoreDomUtils.showModalLoading('core.sending', true);

        try {
            const response = await AddonModForum.setLockState(this.forumId, this.discussionId, locked);
            this.discussion.locked = response.locked;

            const data = {
                forumId: this.forumId,
                discussionId: this.discussionId,
                cmId: this.cmId,
                locked: this.discussion.locked,
            };
            CoreEvents.trigger(AddonModForumProvider.CHANGE_DISCUSSION_EVENT, data, CoreSites.getCurrentSiteId());

            CoreDomUtils.showToast('addon.mod_forum.lockupdated', true);
        } catch (error) {
            CoreDomUtils.showErrorModal(error);
        } finally {
            modal.dismiss();
        }
    }

    /**
     * Pin or unpin the discussion.
     *
     * @param pinned True to pin the discussion, false to unpin it.
     */
    async setPinState(pinned: boolean): Promise<void> {
        const modal = await CoreDomUtils.showModalLoading('core.sending', true);

        try {
            await AddonModForum.setPinState(this.discussionId, pinned);

            this.discussion.pinned = pinned;

            const data = {
                forumId: this.forumId,
                discussionId: this.discussionId,
                cmId: this.cmId,
                pinned: this.discussion.pinned,
            };
            CoreEvents.trigger(AddonModForumProvider.CHANGE_DISCUSSION_EVENT, data, CoreSites.getCurrentSiteId());

            CoreDomUtils.showToast('addon.mod_forum.pinupdated', true);
        } catch (error) {
            CoreDomUtils.showErrorModal(error);
        } finally {
            modal.dismiss();
        }
    }

    /**
     * Star or unstar the discussion.
     *
     * @param starred True to star the discussion, false to unstar it.
     */
    async toggleFavouriteState(starred: boolean): Promise<void> {
        const modal = await CoreDomUtils.showModalLoading('core.sending', true);

        try {
            await AddonModForum.toggleFavouriteState(this.discussionId, starred);

            this.discussion.starred = starred;

            const data = {
                forumId: this.forumId,
                discussionId: this.discussionId,
                cmId: this.cmId,
                starred: this.discussion.starred,
            };
            CoreEvents.trigger(AddonModForumProvider.CHANGE_DISCUSSION_EVENT, data, CoreSites.getCurrentSiteId());

            CoreDomUtils.showToast('addon.mod_forum.favouriteupdated', true);
        } catch (error) {
            CoreDomUtils.showErrorModal(error);
        } finally {
            modal.dismiss();
        }
    }

    /**
     * New post added.
     */
    postListChanged(): void {
        // Trigger an event to notify a new reply.
        const data = {
            forumId: this.forumId,
            discussionId: this.discussionId,
            cmId: this.cmId,
        };
        CoreEvents.trigger(AddonModForumProvider.REPLY_DISCUSSION_EVENT, data, CoreSites.getCurrentSiteId());

        this.discussionLoaded = false;
        this.refreshPosts().finally(() => {
            this.discussionLoaded = true;
        });
    }

    /**
     * Get all the posts contained in the discussion.
     *
     * @return Array containing all the posts of the discussion.
     */
    protected getAllPosts(): Post[] {
        const allPosts = this.posts.map(post => this.flattenPostHierarchy(post));

        return CoreArray.flatten(allPosts);
    }

    /**
     * Flatten a post's hierarchy into an array.
     *
     * @param parent Parent post.
     * @return Array containing all the posts within the hierarchy (including the parent).
     */
    protected flattenPostHierarchy(parent: Post): Post[] {
        const posts = [parent];
        const children = parent.children || [];

        for (const child of children) {
            posts.push(...this.flattenPostHierarchy(child));
        }

        return posts;
    }

}
