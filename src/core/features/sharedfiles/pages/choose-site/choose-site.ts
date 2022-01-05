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

import { Component, OnInit } from '@angular/core';
import { CoreSharedFilesHelper } from '@features/sharedfiles/services/sharedfiles-helper';
import { FileEntry } from '@ionic-native/file/ngx';
import { CoreFile } from '@services/file';
import { CoreNavigator } from '@services/navigator';
import { CoreSiteBasicInfo, CoreSites } from '@services/sites';
import { CoreDomUtils } from '@services/utils/dom';
import { CoreUtils } from '@services/utils/utils';

/**
 * Page to display the list of sites to choose one to store a shared file.
 */
@Component({
    selector: 'page-core-shared-files-choose-site',
    templateUrl: 'choose-site.html',
})
export class CoreSharedFilesChooseSitePage implements OnInit {

    fileName?: string;
    sites?: CoreSiteBasicInfo[];
    loaded = false;

    protected filePath?: string;
    protected fileEntry?: FileEntry;
    protected isInbox = false; // Whether the file is in the Inbox folder.

    /**
     * @inheritdoc
     */
    async ngOnInit(): Promise<void> {
        this.filePath = CoreNavigator.getRouteParam('filePath');
        this.isInbox = !!CoreNavigator.getRouteBooleanParam('isInbox');

        if (!this.filePath) {
            CoreDomUtils.showErrorModal('Error reading file.');
            await CoreUtils.nextTick();
            CoreNavigator.back();

            return;
        }

        const fileAndDir = CoreFile.getFileAndDirectoryFromPath(this.filePath);
        this.fileName = fileAndDir.name;

        try {
            await Promise.all([
                this.loadFile(),
                this.loadSites(),
            ]);
        } catch {
            CoreDomUtils.showErrorModal('Error reading file.');
            CoreNavigator.back();
        } finally {
            this.loaded = true;
        }
    }

    /**
     * Load the file data.
     *
     * @return Promise resolved when done.
     */
    protected async loadFile(): Promise<void> {
        this.fileEntry = await CoreFile.getExternalFile(this.filePath!);
        this.fileName = this.fileEntry.name;
    }

    /**
     * Load sites.
     *
     * @return Promise resolved when done.
     */
    protected async loadSites(): Promise<void> {
        this.sites = await CoreSites.getSites();
    }

    /**
     * Store the file in a certain site.
     *
     * @param siteId Site ID.
     */
    async storeInSite(siteId: string): Promise<void> {
        this.loaded = false;

        try {
            await CoreSharedFilesHelper.storeSharedFileInSite(this.fileEntry!, siteId, this.isInbox);

            CoreNavigator.back();
        } finally {
            this.loaded = true;
        }
    }

}
