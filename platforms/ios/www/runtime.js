/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"runtime": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"addons-blog-blog-lazy-module":"addons-blog-blog-lazy-module","addons-notes-notes-lazy-module":"addons-notes-notes-lazy-module","addons-notifications-notifications-lazy-module":"addons-notifications-notifications-lazy-module","addons-privatefiles-privatefiles-lazy-module":"addons-privatefiles-privatefiles-lazy-module","addons-storagemanager-storagemanager-lazy-module":"addons-storagemanager-storagemanager-lazy-module","badges-lazy-module":"badges-lazy-module","book-lazy-module":"book-lazy-module","calendar-lazy-module":"calendar-lazy-module","choice-lazy-module":"choice-lazy-module","common":"common","assign-lazy-module":"assign-lazy-module","chat-lazy-module":"chat-lazy-module","data-lazy-module":"data-lazy-module","features-siteplugins-pages-course-option-course-option-module":"features-siteplugins-pages-course-option-course-option-module","h5pactivity-lazy-module":"h5pactivity-lazy-module","pages-discussion-discussion-module":"pages-discussion-discussion-module","pages-edit-edit-module":"pages-edit-edit-module","pages-module-index-module-index-module":"pages-module-index-module-index-module","pages-new-discussion-new-discussion-module":"pages-new-discussion-new-discussion-module","pages-plugin-page-plugin-page-module":"pages-plugin-page-plugin-page-module","wiki-lazy-module":"wiki-lazy-module","workshop-lazy-module":"workshop-lazy-module","coursecompletion-lazy-module":"coursecompletion-lazy-module","courses-lazy-module":"courses-lazy-module","default~addons-competency-competency-course-lazy-module~competency-lazy-module":"default~addons-competency-competency-course-lazy-module~competency-lazy-module","addons-competency-competency-course-lazy-module":"addons-competency-competency-course-lazy-module","competency-lazy-module":"competency-lazy-module","default~features-grades-grades-course-lazy-module~features-grades-grades-lazy-module":"default~features-grades-grades-course-lazy-module~features-grades-grades-lazy-module","features-grades-grades-course-lazy-module":"features-grades-grades-course-lazy-module","features-grades-grades-lazy-module":"features-grades-grades-lazy-module","default~login-lazy-module~pages-site-site-module":"default~login-lazy-module~pages-site-site-module","login-lazy-module":"login-lazy-module","pages-site-site-module":"pages-site-site-module","features-comments-comments-lazy-module":"features-comments-comments-lazy-module","features-user-user-course-lazy-module":"features-user-user-course-lazy-module","features-user-user-lazy-module":"features-user-user-lazy-module","feedback-lazy-module":"feedback-lazy-module","folder-lazy-module":"folder-lazy-module","forum-lazy-module":"forum-lazy-module","glossary-lazy-module":"glossary-lazy-module","imscp-lazy-module":"imscp-lazy-module","lesson-lazy-module":"lesson-lazy-module","lti-lazy-module":"lti-lazy-module","mainmenu-lazy-module":"mainmenu-lazy-module","page-lazy-module":"page-lazy-module","pages-contents-contents-module":"pages-contents-contents-module","pages-dashboard-dashboard-module":"pages-dashboard-dashboard-module","pages-devices-devices-module":"pages-devices-devices-module","pages-entry-entry-module":"pages-entry-entry-module","pages-index-index-module":"pages-index-index-module","pages-list-mod-type-list-mod-type-module":"pages-list-mod-type-list-mod-type-module","pages-my-courses-my-courses-module":"pages-my-courses-my-courses-module","pages-preview-preview-module":"pages-preview-preview-module","pages-settings-settings-module":"pages-settings-settings-module","pages-unsupported-module-unsupported-module-module":"pages-unsupported-module-unsupported-module-module","polyfills-core-js":"polyfills-core-js","polyfills-css-shim":"polyfills-css-shim","polyfills-dom":"polyfills-dom","quiz-lazy-module":"quiz-lazy-module","resource-lazy-module":"resource-lazy-module","scorm-lazy-module":"scorm-lazy-module","settings-lazy-module":"settings-lazy-module","shadow-css-a3f00b33-js":"shadow-css-a3f00b33-js","sharedfiles-lazy-module":"sharedfiles-lazy-module","survey-lazy-module":"survey-lazy-module","tag-lazy-module":"tag-lazy-module","url-lazy-module":"url-lazy-module","viewer-lazy-module":"viewer-lazy-module","swiper-bundle-44a9b1f9-js":"swiper-bundle-44a9b1f9-js","pages-list-list-module":"pages-list-list-module","addons-calendar-pages-day-day-module":"addons-calendar-pages-day-day-module","addons-calendar-pages-event-event-module":"addons-calendar-pages-event-event-module","addons-calendar-pages-index-index-module":"addons-calendar-pages-index-index-module","addons-calendar-pages-list-list-module":"addons-calendar-pages-list-list-module","addons-calendar-pages-settings-settings-module":"addons-calendar-pages-settings-settings-module","addons-calendar-pages-edit-event-edit-event-module":"addons-calendar-pages-edit-event-edit-event-module","pages-contacts-35-contacts-module":"pages-contacts-35-contacts-module","pages-contacts-contacts-module":"pages-contacts-contacts-module","pages-discussions-35-discussions-module":"pages-discussions-35-discussions-module","pages-group-conversations-group-conversations-module":"pages-group-conversations-group-conversations-module","pages-search-search-module":"pages-search-search-module","focus-visible-f4ad4f1a-js":"focus-visible-f4ad4f1a-js","input-shims-73f15161-js":"input-shims-73f15161-js","keyboard-5742b5da-js":"keyboard-5742b5da-js","status-tap-bdecfebf-js":"status-tap-bdecfebf-js","swipe-back-ee838cf8-js":"swipe-back-ee838cf8-js","tap-click-cc1ae2b2-js":"tap-click-cc1ae2b2-js","pages-attempt-results-attempt-results-module":"pages-attempt-results-attempt-results-module","pages-user-attempts-user-attempts-module":"pages-user-attempts-user-attempts-module","pages-available-courses-available-courses-module":"pages-available-courses-available-courses-module","pages-categories-categories-module":"pages-categories-categories-module","pages-change-password-change-password-module":"pages-change-password-change-password-module","pages-credentials-credentials-module":"pages-credentials-credentials-module","pages-email-signup-email-signup-module":"pages-email-signup-email-signup-module","pages-forgotten-password-forgotten-password-module":"pages-forgotten-password-forgotten-password-module","pages-reconnect-reconnect-module":"pages-reconnect-reconnect-module","pages-site-policy-site-policy-module":"pages-site-policy-site-policy-module","pages-sites-sites-module":"pages-sites-sites-module","pages-viewer-viewer-module":"pages-viewer-viewer-module","pages-profile-profile-module":"pages-profile-profile-module","pages-about-about-module":"pages-about-about-module","pages-form-form-module":"pages-form-form-module","pages-attempt-attempt-module":"pages-attempt-attempt-module","pages-nonrespondents-nonrespondents-module":"pages-nonrespondents-nonrespondents-module","pages-player-player-module":"pages-player-player-module","pages-user-retake-user-retake-module":"pages-user-retake-user-retake-module","pages-home-home-module":"pages-home-home-module","pages-more-more-module":"pages-more-more-module","pages-review-review-module":"pages-review-review-module","pages-deviceinfo-deviceinfo-module":"pages-deviceinfo-deviceinfo-module","pages-general-general-module":"pages-general-general-module","pages-licenses-licenses-module":"pages-licenses-licenses-module","pages-space-usage-space-usage-module":"pages-space-usage-space-usage-module","pages-synchronization-synchronization-module":"pages-synchronization-synchronization-module","features-tag-pages-index-area-index-area-page-module":"features-tag-pages-index-area-index-area-page-module","features-tag-pages-index-index-page-module":"features-tag-pages-index-index-page-module","features-tag-pages-search-search-page-module":"features-tag-pages-search-search-page-module","pages-iframe-iframe-module":"pages-iframe-iframe-module"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=runtime.js.map