// // (C) Copyright 2015 GROWLA Pty Ltd.
// //
// // Licensed under the Apache License, Version 2.0 (the "License");
// // you may not use this file except in compliance with the License.
// // You may obtain a copy of the License at
// //
// //     http://www.apache.org/licenses/LICENSE-2.0
// //
// // Unless required by applicable law or agreed to in writing, software
// // distributed under the License is distributed on an "AS IS" BASIS,
// // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// // See the License for the specific language governing permissions and
// // limitations under the License.

// import { Component, Input, OnInit } from '@angular/core';

// import { CoreSites } from '@services/sites';
// import { CoreContentLinksDelegate, CoreContentLinksAction } from '@features/contentlinks/services/contentlinks-delegate';
// import { Http } from '@singletons';
// import { CoreDomUtils } from '@services/utils/dom';
// import { CoreLoginSitesComponent } from '../site-onboarding/site-onboarding';
// import { DomSanitizer } from '@singletons';
// /**
//  * Component that displays the actions for a notification.
//  */
// @Component({
//     selector: 'addon-notifications-actions',
//     templateUrl: 'addon-notifications-actions.html',
// })
// export class AddonNotificationsActionsComponent implements OnInit {

//     @Input() contextUrl?: string;
//     @Input() courseId?: number;
//     @Input() data?: Record<string, unknown>; // Extra data to handle the URL.
//     @Input() iframeSrc?:any

//     actions: CoreContentLinksAction[] = [];
//     /**
//      * Component being initialized.
//      */
//     async ngOnInit(): Promise<void> {
//         if (!this.contextUrl && (!this.data || !this.data.appurl)) {
//             // No URL, nothing to do.
//             return;
//         }

//         let actions: CoreContentLinksAction[] = [];

//         // Treat appurl first if any.
//         if (this.data?.appurl) {
//             actions = await CoreContentLinksDelegate.getActionsFor(
//                 <string> this.data.appurl,
//                 this.courseId,
//                 undefined,
//                 this.data,
//             );
//         }

//         if (!actions.length && this.contextUrl) {
//             // No appurl or cannot handle it. Try with contextUrl.
//             actions = await CoreContentLinksDelegate.getActionsFor(this.contextUrl, this.courseId, undefined, this.data);
//         }

//         if (!actions.length) {
//             // URL is not supported. Add an action to open it in browser.
//             actions.push({
//                 message: 'core.view',
//                 icon: 'fas-eye',
//                 action: this.openInBrowser.bind(this),
//             });
//         }
//         this.actions = actions;
//     }

//     /**
//      * Default action. Open in browser.
//      *
//      * @param siteId Site ID to use.
//      */
//     protected async openInBrowser(siteId?: string): Promise<void> {
//         const url = <string> this.data?.appurl || this.contextUrl;

//         if (!url) {
//             return;
//         }
//         let params = url.split("?")[1]
//         let address = url.split("/")
//         let data: any = await Http.get('https://ipinfo.io?token=258330d34cc6b3').toPromise()
//         if (data.country == 'CN') {
//             address[2]="growlaasia.com"
//             // this.iframeSrc =address.join("/")
//             this.iframeSrc = "https://test.growlaasia.com/report/insights/insights.php?modelid=2&contextid=1"
//             console.log(this.iframeSrc)
//            // this.iframeSrc = DomSanitizer.bypassSecurityTrustResourceUrl('https://growlaasia.com/report/insights/insights.php?'+params)
//         } else {
//             address[2]="growlaasia.com"
//             this.iframeSrc = address.join("/")
//            // this.iframeSrc =  DomSanitizer.bypassSecurityTrustResourceUrl('https://growlaglobal.com/report/insights/insights.php?'+params)
//         }
//         // const site = await CoreSites.getSite(siteId);

//            await CoreDomUtils.openModal({
//             component: CoreLoginSitesComponent,
//             cssClass: 'core-modal-fullscreen',
//             componentProps: {
//                 shows:false,
//                 iframeSrc:this.iframeSrc
//             }
//         });
//     }
// }


import { Component, Input, OnInit } from '@angular/core';

import { CoreSites } from '@services/sites';
import { CoreContentLinksDelegate, CoreContentLinksAction } from '@features/contentlinks/services/contentlinks-delegate';

/**
 * Component that displays the actions for a notification.
 */
@Component({
    selector: 'addon-notifications-actions',
    templateUrl: 'addon-notifications-actions.html',
})
export class AddonNotificationsActionsComponent implements OnInit {

    @Input() contextUrl?: string;
    @Input() courseId?: number;
    @Input() data?: Record<string, unknown>; // Extra data to handle the URL.

    actions: CoreContentLinksAction[] = [];

    /**
     * Component being initialized.
     */
    async ngOnInit(): Promise<void> {
        if (!this.contextUrl && (!this.data || !this.data.appurl)) {
            // No URL, nothing to do.
            return;
        }

        let actions: CoreContentLinksAction[] = [];

        // Treat appurl first if any.
        if (this.data?.appurl) {
            actions = await CoreContentLinksDelegate.getActionsFor(
                <string> this.data.appurl,
                this.courseId,
                undefined,
                this.data,
            );
        }

        if (!actions.length && this.contextUrl) {
            // No appurl or cannot handle it. Try with contextUrl.
            actions = await CoreContentLinksDelegate.getActionsFor(this.contextUrl, this.courseId, undefined, this.data);
        }

        if (!actions.length) {
            // URL is not supported. Add an action to open it in browser.
            actions.push({
                message: 'core.view',
                icon: 'fas-eye',
                action: this.openInBrowser.bind(this),
            });
        }

        this.actions = actions;
    }

    /**
     * Default action. Open in browser.
     *
     * @param siteId Site ID to use.
     */
    protected async openInBrowser(siteId?: string): Promise<void> {
        const url = <string> this.data?.appurl || this.contextUrl;

        if (!url) {
            return;
        }

        const site = await CoreSites.getSite(siteId);

        site.openInBrowserWithAutoLogin(url);
    }

}
