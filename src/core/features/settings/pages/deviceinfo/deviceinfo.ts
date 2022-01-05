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

import { CoreApp } from '@services/app';
import { Component, OnDestroy } from '@angular/core';
import { CoreConstants } from '@/core/constants';
import { CoreLocalNotifications } from '@services/local-notifications';
import { Device, Platform, Translate, Network, NgZone } from '@singletons';
import { CoreLang } from '@services/lang';
import { CoreFile } from '@services/file';
import { CoreSites } from '@services/sites';
import { CoreUtils } from '@services/utils/utils';
import { Subscription } from 'rxjs';
import { CorePushNotifications } from '@features/pushnotifications/services/pushnotifications';

/**
 * Device Info to be shown and copied to clipboard.
 */
interface CoreSettingsDeviceInfo {
    versionName: string;
    versionCode: number;
    compilationTime: number;
    lastCommit: string;
    siteUrl?: string;
    isPrefixedUrl?: boolean;
    siteId?: string;
    siteVersion?: string;
    fileSystemRoot?: string;
    userAgent?: string;
    deviceOs?: string;
    browserLanguage?: string;
    currentLanguage?: string;
    locationHref?: string;
    deviceType: string;
    screen?: string;
    networkStatus: string;
    wifiConnection: string;
    cordovaVersion?: string;
    platform?: string;
    osVersion?: string;
    model?: string;
    uuid?: string;
    pushId?: string;
    localNotifAvailable: string;
}

/**
 * Page that displays the device information.
 */
@Component({
    selector: 'page-core-app-settings-deviceinfo',
    templateUrl: 'deviceinfo.html',
    styleUrls: ['deviceinfo.scss'],
})
export class CoreSettingsDeviceInfoPage implements OnDestroy {

    deviceInfo: CoreSettingsDeviceInfo;
    deviceOsTranslated?: string;
    currentLangName?: string;
    fsClickable = false;

    protected onlineObserver?: Subscription;

    constructor() {
        const appProvider = CoreApp.instance;
        const sitesProvider = CoreSites.instance;
        const device = Device.instance;
        const translate = Translate.instance;
        const navigator = window.navigator;

        this.deviceInfo = {
            versionName: CoreConstants.CONFIG.versionname,
            versionCode: CoreConstants.CONFIG.versioncode,
            compilationTime: CoreConstants.BUILD.compilationTime || 0,
            lastCommit: CoreConstants.BUILD.lastCommitHash || '',
            networkStatus: appProvider.isOnline() ? 'online' : 'offline',
            wifiConnection: appProvider.isWifi() ? 'yes' : 'no',
            localNotifAvailable: CoreLocalNotifications.isAvailable() ? 'yes' : 'no',
            pushId: CorePushNotifications.getPushId(),
            deviceType: '',
        };

        if (window.location && window.location.href) {
            const url = window.location.href;
            this.deviceInfo.locationHref = url.indexOf('#') > 0 ? url.substr(0, url.indexOf('#')) : url;
        }

        if (window.screen) {
            this.deviceInfo.screen = window.innerWidth + 'x' + window.innerHeight +
                ' (' + window.screen.width + 'x' + window.screen.height + ')';
        }

        if (appProvider.isMobile()) {
            this.deviceInfo.deviceType = Platform.is('tablet') ? 'tablet' : 'phone';
            if (appProvider.isAndroid()) {
                this.deviceInfo.deviceOs = 'android';
                this.deviceOsTranslated = 'Android';
            } else if (appProvider.isIOS()) {
                this.deviceInfo.deviceOs = 'ios';
                this.deviceOsTranslated = 'iOS';
            } else {
                const matches = navigator.userAgent.match(/\(([^)]*)\)/);
                if (matches && matches.length > 1) {
                    this.deviceInfo.deviceOs = matches[1];
                    this.deviceOsTranslated = matches[1];
                } else {
                    this.deviceInfo.deviceOs = 'unknown';
                    this.deviceOsTranslated = translate.instant('core.unknown');
                }
            }
        } else {
            this.deviceInfo.deviceType = 'browser';
            const matches = navigator.userAgent.match(/\(([^)]*)\)/);
            if (matches && matches.length > 1) {
                this.deviceInfo.deviceOs = matches[1];
                this.deviceOsTranslated = matches[1];
            } else {
                this.deviceInfo.deviceOs = 'unknown';
                this.deviceOsTranslated = translate.instant('core.unknown');
            }
        }

        if (navigator) {
            if (navigator.userAgent) {
                this.deviceInfo.userAgent = navigator.userAgent;
            }

            if (navigator.language) {
                this.deviceInfo.browserLanguage = navigator.language;
            }
        }

        if (device) {
            if (device.cordova) {
                this.deviceInfo.cordovaVersion = device.cordova;
            }
            if (device.platform) {
                this.deviceInfo.platform = device.platform;
            }
            if (device.version) {
                this.deviceInfo.osVersion = device.version;
            }
            if (device.model) {
                this.deviceInfo.model = device.model;
            }
            if (device.uuid) {
                this.deviceInfo.uuid = device.uuid;
            }
        }

        const currentSite = sitesProvider.getCurrentSite();

        this.deviceInfo.siteUrl = (currentSite?.getURL()) ||
            (typeof CoreConstants.CONFIG.siteurl == 'string' && CoreConstants.CONFIG.siteurl) || undefined;
        this.deviceInfo.isPrefixedUrl = !!CoreConstants.CONFIG.siteurl;
        this.deviceInfo.siteId = currentSite?.getId();
        this.deviceInfo.siteVersion = currentSite?.getInfo()?.release;

        // Refresh online status when changes.
        this.onlineObserver = Network.onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            NgZone.run(() => {
                this.deviceInfo!.networkStatus = appProvider.isOnline() ? 'online' : 'offline';
            });
        });

        this.asyncInit();
    }

    /**
     * Async part of the constructor.
     */
    protected async asyncInit(): Promise<void> {
        const fileProvider = CoreFile.instance;

        const lang = await CoreLang.getCurrentLanguage();
        this.deviceInfo.currentLanguage = lang;
        this.currentLangName = CoreConstants.CONFIG.languages[lang];

        if (fileProvider.isAvailable()) {
            const basepath = await fileProvider.getBasePath();
            this.deviceInfo.fileSystemRoot = basepath;
            this.fsClickable = fileProvider.usesHTMLAPI();
        }
    }

    /**
     * Copies device info into the clipboard.
     */
    copyInfo(): void {
        CoreUtils.copyToClipboard(JSON.stringify(this.deviceInfo));
    }

    /**
     * Copies device info item into the clipboard.
     *
     * @param e Event.
     */
    copyItemInfo(e: Event): void {
        const el = <Element>e.target;
        const text = el?.closest('ion-item')?.textContent?.trim();

        text && CoreUtils.copyToClipboard(text);
    }

    /**
     * Page destroyed.
     */
    ngOnDestroy(): void {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    }

}
