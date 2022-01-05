'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Diagnostic = /** @class */ (function (_super) {
    tslib.__extends(Diagnostic, _super);
    function Diagnostic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.permission = {
            READ_CALENDAR: 'READ_CALENDAR',
            WRITE_CALENDAR: 'WRITE_CALENDAR',
            CAMERA: 'CAMERA',
            READ_CONTACTS: 'READ_CONTACTS',
            WRITE_CONTACTS: 'WRITE_CONTACTS',
            GET_ACCOUNTS: 'GET_ACCOUNTS',
            ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
            ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
            RECORD_AUDIO: 'RECORD_AUDIO',
            READ_PHONE_STATE: 'READ_PHONE_STATE',
            CALL_PHONE: 'CALL_PHONE',
            ADD_VOICEMAIL: 'ADD_VOICEMAIL',
            USE_SIP: 'USE_SIP',
            PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
            READ_CALL_LOG: 'READ_CALL_LOG',
            WRITE_CALL_LOG: 'WRITE_CALL_LOG',
            SEND_SMS: 'SEND_SMS',
            RECEIVE_SMS: 'RECEIVE_SMS',
            READ_SMS: 'READ_SMS',
            RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
            RECEIVE_MMS: 'RECEIVE_MMS',
            WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
            READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
            BODY_SENSORS: 'BODY_SENSORS',
        };
        _this.locationAuthorizationMode = {
            ALWAYS: 'always',
            WHEN_IN_USE: 'when_in_use',
        };
        _this.permissionGroups = {
            CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
            CAMERA: ['CAMERA'],
            CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
            LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
            MICROPHONE: ['RECORD_AUDIO'],
            PHONE: [
                'READ_PHONE_STATE',
                'CALL_PHONE',
                'ADD_VOICEMAIL',
                'USE_SIP',
                'PROCESS_OUTGOING_CALLS',
                'READ_CALL_LOG',
                'WRITE_CALL_LOG',
            ],
            SENSORS: ['BODY_SENSORS'],
            SMS: ['SEND_SMS', 'RECEIVE_SMS', 'READ_SMS', 'RECEIVE_WAP_PUSH', 'RECEIVE_MMS'],
            STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE'],
        };
        _this.locationMode = {
            HIGH_ACCURACY: 'high_accuracy',
            DEVICE_ONLY: 'device_only',
            BATTERY_SAVING: 'battery_saving',
            LOCATION_OFF: 'location_off',
        };
        _this.bluetoothState = {
            UNKNOWN: 'unknown',
            RESETTING: 'resetting',
            UNSUPPORTED: 'unsupported',
            UNAUTHORIZED: 'unauthorized',
            POWERED_OFF: 'powered_off',
            POWERED_ON: 'powered_on',
            POWERING_OFF: 'powering_off',
            POWERING_ON: 'powering_on',
        };
        return _this;
    }
    Diagnostic.prototype.isLocationAvailable = function () { return core.cordova(this, "isLocationAvailable", {}, arguments); };
    Diagnostic.prototype.isWifiAvailable = function () { return core.cordova(this, "isWifiAvailable", {}, arguments); };
    Diagnostic.prototype.isCameraAvailable = function (externalStorage) { return core.cordova(this, "isCameraAvailable", { "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isBluetoothAvailable = function () { return core.cordova(this, "isBluetoothAvailable", {}, arguments); };
    Diagnostic.prototype.switchToLocationSettings = function () { return core.cordova(this, "switchToLocationSettings", { "sync": true, "platforms": ["Android", "Windows 10", "iOS"] }, arguments); };
    Diagnostic.prototype.switchToMobileDataSettings = function () { return core.cordova(this, "switchToMobileDataSettings", { "sync": true, "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.switchToBluetoothSettings = function () { return core.cordova(this, "switchToBluetoothSettings", { "sync": true, "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.switchToWifiSettings = function () { return core.cordova(this, "switchToWifiSettings", { "sync": true, "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.isWifiEnabled = function () { return core.cordova(this, "isWifiEnabled", { "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.setWifiState = function (state) { return core.cordova(this, "setWifiState", { "callbackOrder": "reverse", "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.setBluetoothState = function (state) { return core.cordova(this, "setBluetoothState", { "callbackOrder": "reverse", "platforms": ["Android", "Windows 10"] }, arguments); };
    Diagnostic.prototype.isLocationEnabled = function () { return core.cordova(this, "isLocationEnabled", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isLocationAuthorized = function () { return core.cordova(this, "isLocationAuthorized", {}, arguments); };
    Diagnostic.prototype.getLocationAuthorizationStatus = function () { return core.cordova(this, "getLocationAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestLocationAuthorization = function (mode) { return core.cordova(this, "requestLocationAuthorization", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isCameraPresent = function () { return core.cordova(this, "isCameraPresent", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isCameraAuthorized = function (externalStorage) { return core.cordova(this, "isCameraAuthorized", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.getCameraAuthorizationStatus = function (externalStorage) { return core.cordova(this, "getCameraAuthorizationStatus", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.requestCameraAuthorization = function (externalStorage) { return core.cordova(this, "requestCameraAuthorization", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isMicrophoneAuthorized = function () { return core.cordova(this, "isMicrophoneAuthorized", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getMicrophoneAuthorizationStatus = function () { return core.cordova(this, "getMicrophoneAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestMicrophoneAuthorization = function () { return core.cordova(this, "requestMicrophoneAuthorization", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isContactsAuthorized = function () { return core.cordova(this, "isContactsAuthorized", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getContactsAuthorizationStatus = function () { return core.cordova(this, "getContactsAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestContactsAuthorization = function () { return core.cordova(this, "requestContactsAuthorization", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.isCalendarAuthorized = function () { return core.cordova(this, "isCalendarAuthorized", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getCalendarAuthorizationStatus = function () { return core.cordova(this, "getCalendarAuthorizationStatus", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.requestCalendarAuthorization = function () { return core.cordova(this, "requestCalendarAuthorization", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.switchToSettings = function () { return core.cordova(this, "switchToSettings", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.getBluetoothState = function () { return core.cordova(this, "getBluetoothState", { "platforms": ["Android", "iOS"] }, arguments); };
    Diagnostic.prototype.registerBluetoothStateChangeHandler = function (handler) { return core.cordova(this, "registerBluetoothStateChangeHandler", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    Diagnostic.prototype.registerLocationStateChangeHandler = function (handler) { return core.cordova(this, "registerLocationStateChangeHandler", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    Diagnostic.prototype.isGpsLocationAvailable = function () { return core.cordova(this, "isGpsLocationAvailable", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isGpsLocationEnabled = function () { return core.cordova(this, "isGpsLocationEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNetworkLocationAvailable = function () { return core.cordova(this, "isNetworkLocationAvailable", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNetworkLocationEnabled = function () { return core.cordova(this, "isNetworkLocationEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getLocationMode = function () { return core.cordova(this, "getLocationMode", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getPermissionAuthorizationStatus = function (permission) { return core.cordova(this, "getPermissionAuthorizationStatus", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.getPermissionsAuthorizationStatus = function (permissions) { return core.cordova(this, "getPermissionsAuthorizationStatus", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.requestRuntimePermission = function (permission) { return core.cordova(this, "requestRuntimePermission", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.requestRuntimePermissions = function (permissions) { return core.cordova(this, "requestRuntimePermissions", { "platforms": ["Android"], "callbackOrder": "reverse" }, arguments); };
    Diagnostic.prototype.isRequestingPermission = function () { return core.cordova(this, "isRequestingPermission", { "sync": true }, arguments); };
    Diagnostic.prototype.registerPermissionRequestCompleteHandler = function (handler) { return core.cordova(this, "registerPermissionRequestCompleteHandler", { "sync": true }, arguments); };
    Diagnostic.prototype.isBluetoothEnabled = function () { return core.cordova(this, "isBluetoothEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.hasBluetoothSupport = function () { return core.cordova(this, "hasBluetoothSupport", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.hasBluetoothLESupport = function () { return core.cordova(this, "hasBluetoothLESupport", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.hasBluetoothLEPeripheralSupport = function () { return core.cordova(this, "hasBluetoothLEPeripheralSupport", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isExternalStorageAuthorized = function () { return core.cordova(this, "isExternalStorageAuthorized", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getExternalStorageAuthorizationStatus = function () { return core.cordova(this, "getExternalStorageAuthorizationStatus", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.requestExternalStorageAuthorization = function () { return core.cordova(this, "requestExternalStorageAuthorization", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.getExternalSdCardDetails = function () { return core.cordova(this, "getExternalSdCardDetails", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.switchToWirelessSettings = function () { return core.cordova(this, "switchToWirelessSettings", { "platforms": ["Android"], "sync": true }, arguments); };
    Diagnostic.prototype.switchToNFCSettings = function () { return core.cordova(this, "switchToNFCSettings", { "platforms": ["Android"], "sync": true }, arguments); };
    Diagnostic.prototype.isNFCPresent = function () { return core.cordova(this, "isNFCPresent", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNFCEnabled = function () { return core.cordova(this, "isNFCEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isNFCAvailable = function () { return core.cordova(this, "isNFCAvailable", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.registerNFCStateChangeHandler = function (handler) { return core.cordova(this, "registerNFCStateChangeHandler", { "platforms": ["Android"], "sync": true }, arguments); };
    Diagnostic.prototype.isDataRoamingEnabled = function () { return core.cordova(this, "isDataRoamingEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isADBModeEnabled = function () { return core.cordova(this, "isADBModeEnabled", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isDeviceRooted = function () { return core.cordova(this, "isDeviceRooted", { "platforms": ["Android"] }, arguments); };
    Diagnostic.prototype.isCameraRollAuthorized = function () { return core.cordova(this, "isCameraRollAuthorized", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getCameraRollAuthorizationStatus = function () { return core.cordova(this, "getCameraRollAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestCameraRollAuthorization = function () { return core.cordova(this, "requestCameraRollAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isRemoteNotificationsEnabled = function () { return core.cordova(this, "isRemoteNotificationsEnabled", { "platforms": ["iOS", "Android"] }, arguments); };
    Diagnostic.prototype.isRegisteredForRemoteNotifications = function () { return core.cordova(this, "isRegisteredForRemoteNotifications", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getRemoteNotificationsAuthorizationStatus = function () { return core.cordova(this, "getRemoteNotificationsAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestRemoteNotificationsAuthorization = function (types, omitRegistration) { return core.cordova(this, "requestRemoteNotificationsAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getRemoteNotificationTypes = function () { return core.cordova(this, "getRemoteNotificationTypes", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isRemindersAuthorized = function () { return core.cordova(this, "isRemindersAuthorized", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getRemindersAuthorizationStatus = function () { return core.cordova(this, "getRemindersAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestRemindersAuthorization = function () { return core.cordova(this, "requestRemindersAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isBackgroundRefreshAuthorized = function () { return core.cordova(this, "isBackgroundRefreshAuthorized", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getBackgroundRefreshStatus = function () { return core.cordova(this, "getBackgroundRefreshStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestBluetoothAuthorization = function () { return core.cordova(this, "requestBluetoothAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isMotionAvailable = function () { return core.cordova(this, "isMotionAvailable", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.isMotionRequestOutcomeAvailable = function () { return core.cordova(this, "isMotionRequestOutcomeAvailable", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestMotionAuthorization = function () { return core.cordova(this, "requestMotionAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getMotionAuthorizationStatus = function () { return core.cordova(this, "getMotionAuthorizationStatus", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.getLocationAccuracyAuthorization = function () { return core.cordova(this, "getLocationAccuracyAuthorization", { "platform": ["iOS"] }, arguments); };
    Diagnostic.prototype.requestTemporaryFullAccuracyAuthorization = function (purpose) { return core.cordova(this, "requestTemporaryFullAccuracyAuthorization", { "platforms": ["iOS"] }, arguments); };
    Diagnostic.prototype.registerLocationAccuracyAuthorizationChangeHandler = function (handler) { return core.cordova(this, "registerLocationAccuracyAuthorizationChangeHandler", { "platforms": ["iOS"], "sync": true }, arguments); };
    Object.defineProperty(Diagnostic.prototype, "permissionStatus", {
        get: function () { return core.cordovaPropertyGet(this, "permissionStatus"); },
        set: function (value) { core.cordovaPropertySet(this, "permissionStatus", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Diagnostic.prototype, "NFCState", {
        get: function () { return core.cordovaPropertyGet(this, "NFCState"); },
        set: function (value) { core.cordovaPropertySet(this, "NFCState", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Diagnostic.prototype, "motionStatus", {
        get: function () { return core.cordovaPropertyGet(this, "motionStatus"); },
        set: function (value) { core.cordovaPropertySet(this, "motionStatus", value); },
        enumerable: false,
        configurable: true
    });
    Diagnostic.pluginName = "Diagnostic";
    Diagnostic.plugin = "cordova.plugins.diagnostic";
    Diagnostic.pluginRef = "cordova.plugins.diagnostic";
    Diagnostic.repo = "https://github.com/dpa99c/cordova-diagnostic-plugin";
    Diagnostic.platforms = ["Android", "iOS", "Windows"];
    Diagnostic.decorators = [
        { type: core$1.Injectable }
    ];
    return Diagnostic;
}(core.IonicNativePlugin));

exports.Diagnostic = Diagnostic;
