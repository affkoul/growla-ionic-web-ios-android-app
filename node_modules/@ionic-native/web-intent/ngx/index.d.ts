import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
export interface IntentClipItem {
    uri: string;
    type?: string;
    extension?: string;
}
export interface Intent {
    action: string;
    clipItems: IntentClipItem[];
    component: string;
    extras: object;
    flags: number;
    type: string;
}
export interface RegisterBroadcastReceiverOptions {
    filterActions?: string[];
    filterCategories?: string[];
    filterDataSchemes?: string[];
}
export interface IntentOptions {
    requestCode?: number;
    type?: string;
    package?: string;
    url?: string;
    extras?: object;
    action?: string;
    component?: {
        package: string;
        class: string;
    };
    flags?: number[];
}
/**
 * @name Web Intent
 * @description
 * This Plugin provides a general purpose shim layer for the Android intent mechanism, exposing various ways to handle sending and receiving intents.
 * @usage
 * For usage information please refer to the plugin's Github repo.
 *
 * ```typescript
 * import { WebIntent } from '@ionic-native/web-intent/ngx';
 *
 * constructor(private webIntent: WebIntent) { }
 *
 * ...
 *
 * const options = {
 *   action: this.webIntent.ACTION_VIEW,
 *   url: 'path/to/file',
 *   type: 'application/vnd.android.package-archive'
 * }
 *
 * this.webIntent.startActivity(options).then(onSuccess, onError);
 *
 * ```
 * @interfaces
 * IntentOptions
 */
export declare class WebIntent extends IonicNativePlugin {
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_SEND: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_VIEW: string;
    /**
     * Convenience constant for extras
     * @type {string}
     */
    EXTRA_TEXT: string;
    /**
     * Convenience constant for extras
     * @type {string}
     */
    EXTRA_SUBJECT: string;
    /**
     * Convenience constant for extras
     * @type {string}
     */
    EXTRA_STREAM: string;
    /**
     * Convenience constant for extras
     * @type {string}
     */
    EXTRA_EMAIL: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_CALL: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_SENDTO: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_GET_CONTENT: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_PICK: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_INSTALL_PACKAGE: string;
    /**
     * Convenience constant for actions
     * @type {string}
     */
    ACTION_UNINSTALL_PACKAGE: string;
    /**
     * Launches an Android intent
     * @param options {IntentOptions}
     * @returns {Promise<any>}
     */
    startActivity(options: IntentOptions): Promise<any>;
    /**
     * Starts a new activity and return the result to the application
     * @param options {IntentOptions}
     * @returns {Promise<any>}
     */
    startActivityForResult(options: IntentOptions): Promise<any>;
    /**
     * Checks if this app was invoked with specified extra
     * @param extra {string}
     * @returns {Promise<any>}
     */
    hasExtra(extra: string): Promise<any>;
    /**
     * Gets the extra that this app was invoked with
     * @param extra {string}
     * @returns {Promise<any>}
     */
    getExtra(extra: string): Promise<any>;
    /**
     * Gets the Uri the app was invoked with
     * @returns {Promise<any>}
     */
    getUri(): Promise<string>;
    /**
     * Returns the content of the intent used whenever the application activity is launched
     * @returns {Observable<Intent>}
     */
    onIntent(): Observable<Intent>;
    /**
     * Sends a custom intent passing optional extras
     * @param options {IntentOptions}
     * @returns {Promise<any>}
     */
    sendBroadcast(options: IntentOptions): Promise<any>;
    /**
     * Request that a given application service be started
     * @param options {IntentOptions}
     * @returns {Promise<any>}
     */
    startService(options: IntentOptions): Promise<any>;
    /**
     * Registers a broadcast receiver for the specified filters
     * @param filters {RegisterBroadcastReceiverOptions}
     * @returns {Observable<any>}
     */
    registerBroadcastReceiver(filters: RegisterBroadcastReceiverOptions): Observable<any>;
    /**
     * Unregisters a broadcast receiver
     */
    unregisterBroadcastReceiver(): void;
    /**
     *
     */
    onActivityResult(): void;
    /**
     * @returns {Promise<any>}
     */
    getIntent(): Promise<Intent>;
    /**
     * Send a result back to the Intent that started this Activity.
     * The data can be passed using 'extras'.
     * @returns {Promise<any>}
     */
    sendResult({ extras: {} }: {
        extras: {};
    }): Promise<any>;
}
