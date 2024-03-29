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

import { CoreConstants } from '@/core/constants';
import { Component, OnInit, Optional } from '@angular/core';
import { CoreError } from '@classes/errors/error';
import { CoreCourseModuleMainResourceComponent } from '@features/course/classes/main-resource-component';
import { CoreCourseContentsPage } from '@features/course/pages/contents/contents';
import { CoreCourse } from '@features/course/services/course';
import { CoreSites } from '@services/sites';
import { CoreMimetypeUtils } from '@services/utils/mimetype';
import { CoreTextUtils } from '@services/utils/text';
import { AddonModUrl, AddonModUrlDisplayOptions, AddonModUrlProvider, AddonModUrlUrl } from '../../services/url';
import { AddonModUrlHelper } from '../../services/url-helper';

/**
 * Component that displays a url.
 */
@Component({
    selector: 'addon-mod-url-index',
    templateUrl: 'addon-mod-url-index.html',
    styleUrls: ['index.scss'],
})
export class AddonModUrlIndexComponent extends CoreCourseModuleMainResourceComponent implements OnInit {

    component = AddonModUrlProvider.COMPONENT;

    canGetUrl = false;
    url?: string;
    name?: string;
    shouldEmbed = false;
    shouldIframe = false;
    isImage = false;
    isAudio = false;
    isVideo = false;
    isOther = false;
    mimetype?: string;
    displayDescription = true;

    constructor(@Optional() courseContentsPage?: CoreCourseContentsPage) {
        super('AddonModUrlIndexComponent', courseContentsPage);
    }

    /**
     * Component being initialized.
     */
    async ngOnInit(): Promise<void> {
        super.ngOnInit();

        this.canGetUrl = AddonModUrl.isGetUrlWSAvailable();

        await this.loadContent();

        if ((this.shouldIframe ||
            (this.shouldEmbed && this.isOther)) ||
            (!this.shouldIframe && (!this.shouldEmbed || !this.isOther))) {
            this.logView();
        }
    }

    /**
     * Perform the invalidate content function.
     *
     * @return Resolved when done.
     */
    protected async invalidateContent(): Promise<void> {
        await AddonModUrl.invalidateContent(this.module.id, this.courseId);
    }

    /**
     * Download url contents.
     *
     * @param refresh Whether we're refreshing data.
     * @return Promise resolved when done.
     */
    protected async fetchContent(refresh = false): Promise<void> {
        try {
            if (!this.canGetUrl) {
                throw null;
            }
            // Fetch the module data.
            const url = await AddonModUrl.getUrl(this.courseId, this.module.id);

            this.name = url.name;
            this.description = url.intro;
            this.dataRetrieved.emit(url);

            if (url.displayoptions) {
                const unserialized = CoreTextUtils.unserialize<AddonModUrlDisplayOptions>(url.displayoptions);
                this.displayDescription = typeof unserialized.printintro == 'undefined' || !!unserialized.printintro;
            }

            // Try to load module contents, it's needed to get the URL with parameters.
            await CoreCourse.loadModuleContents(this.module, this.courseId, undefined, false, refresh, undefined, 'url');

            // Always use the URL from the module because it already includes the parameters.
            this.url = this.module.contents[0] && this.module.contents[0].fileurl ? this.module.contents[0].fileurl : undefined;

            await this.calculateDisplayOptions(url);

        } catch {
            // Fallback in case is not prefetched or not available.
            const mod =
                await CoreCourse.getModule(this.module.id, this.courseId, undefined, false, false, undefined, 'url');

            this.name = mod.name;
            this.description = mod.description;
            this.dataRetrieved.emit(mod);

            if (!mod.contents.length) {
                // If the data was cached maybe we don't have contents. Reject.
                throw new CoreError('No contents found in module.');
            }

            this.url = mod.contents && mod.contents[0] && mod.contents[0].fileurl ? mod.contents[0].fileurl : undefined;
        }
    }

    /**
     * Calculate the display options to determine how the URL should be rendered.
     *
     * @param url Object with the URL data.
     * @return Promise resolved when done.
     */
    protected async calculateDisplayOptions(url: AddonModUrlUrl): Promise<void> {
        const displayType = AddonModUrl.getFinalDisplayType(url);

        this.shouldEmbed = displayType == CoreConstants.RESOURCELIB_DISPLAY_EMBED;
        this.shouldIframe = displayType == CoreConstants.RESOURCELIB_DISPLAY_FRAME;

        if (this.shouldEmbed) {
            const extension = CoreMimetypeUtils.guessExtensionFromUrl(url.externalurl);

            this.mimetype = CoreMimetypeUtils.getMimeType(extension);
            this.isImage = CoreMimetypeUtils.isExtensionInGroup(extension, ['web_image']);
            this.isAudio = CoreMimetypeUtils.isExtensionInGroup(extension, ['web_audio']);
            this.isVideo = CoreMimetypeUtils.isExtensionInGroup(extension, ['web_video']);
            this.isOther = !this.isImage && !this.isAudio && !this.isVideo;
        }

        if (this.shouldIframe || (this.shouldEmbed && !this.isImage && !this.isAudio && !this.isVideo)) {
            // Will be displayed in an iframe. Check if we need to auto-login.
            const currentSite = CoreSites.getCurrentSite();

            if (currentSite?.containsUrl(this.url)) {
                // Format the URL to add auto-login.
                this.url = await currentSite.getAutoLoginUrl(this.url!, false);
            }
        }
    }

    /**
     * Log view into the site and checks module completion.
     *
     * @return Promise resolved when done.
     */
    protected async logView(): Promise<void> {
        try {
            await AddonModUrl.logView(this.module.instance!, this.module.name);
            CoreCourse.checkModuleCompletion(this.courseId, this.module.completiondata);
        } catch {
            // Ignore errors.
        }
    }

    /**
     * Opens a file.
     */
    go(): void {
        this.logView();
        AddonModUrlHelper.open(this.url!);
    }

}
