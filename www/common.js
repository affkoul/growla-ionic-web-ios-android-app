(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm/helpers-dd7e4b7b.js");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./src/addons/messages/guards/index.ts":
/*!*********************************************!*\
  !*** ./src/addons/messages/guards/index.ts ***!
  \*********************************************/
/*! exports provided: AddonMessagesIndexGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesIndexGuard", function() { return AddonMessagesIndexGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/handlers/mainmenu */ "./src/addons/messages/services/handlers/mainmenu.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/messages */ "./src/addons/messages/services/messages.ts");
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





/**
 * Guard to redirect to the right page based on the current Moodle site version.
 */
let AddonMessagesIndexGuard = class AddonMessagesIndexGuard {
    /**
     * @inheritdoc
     */
    canActivate() {
        return this.guard();
    }
    /**
     * Check if there is a pending redirect and trigger it.
     */
    guard() {
        const enabled = _services_messages__WEBPACK_IMPORTED_MODULE_4__["AddonMessages"].isGroupMessagingEnabled();
        const path = `/main/${_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesMainMenuHandlerService"].PAGE_NAME}/` + (enabled ? 'group-conversations' : 'index');
        return _singletons__WEBPACK_IMPORTED_MODULE_2__["Router"].parseUrl(path);
    }
};
AddonMessagesIndexGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AddonMessagesIndexGuard);



/***/ }),

/***/ "./src/addons/messages/messages-common.scss":
/*!**************************************************!*\
  !*** ./src/addons/messages/messages-common.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-messages-conversation-item ion-label,\n:host .addon-message-discussion ion-label {\n  margin-right: 0;\n  margin-left: 0;\n}\n:host .addon-messages-conversation-item .item-heading core-format-text,\n:host .addon-message-discussion .item-heading core-format-text {\n  font-weight: bold;\n}\n:host .addon-messages-conversation-item .item-heading ion-icon,\n:host .addon-message-discussion .item-heading ion-icon {\n  margin-left: 2px;\n}\n:host .addon-messages-conversation-item ion-note,\n:host .addon-message-discussion ion-note {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-start;\n  margin-left: 2px;\n}\n:host .addon-messages-conversation-item ion-note ion-badge, :host .addon-messages-conversation-item ion-note ion-icon,\n:host .addon-message-discussion ion-note ion-badge,\n:host .addon-message-discussion ion-note ion-icon {\n  margin-top: 3px;\n  align-self: flex-end;\n}\n:host .addon-messages-conversation-item ion-note .addon-message-last-message-date,\n:host .addon-message-discussion ion-note .addon-message-last-message-date {\n  white-space: nowrap;\n  font-size: 11px;\n}\n:host .addon-messages-conversation-item .addon-message-last-message,\n:host .addon-message-discussion .addon-message-last-message {\n  display: flex;\n  justify-content: flex-start;\n}\n:host .addon-messages-conversation-item .addon-message-last-message-user,\n:host .addon-message-discussion .addon-message-last-message-user {\n  white-space: nowrap;\n  color: var(--ion-text-color);\n  margin-right: 2px;\n}\n:host .addon-messages-conversation-item .addon-message-last-message-text,\n:host .addon-message-discussion .addon-message-last-message-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 1;\n}\n:host .addon-message-discussion .item-heading {\n  margin-top: 10px;\n}\n:host ion-item-divider ion-badge {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n:host-context([dir=rtl]) .addon-messages-conversation-item .item-heading ion-icon,\n:host-context([dir=rtl]) .addon-message-discussion .item-heading ion-icon {\n  margin-right: 2px;\n  margin-left: 0;\n}\n:host-context([dir=rtl]) .addon-messages-conversation-item .addon-message-last-message-user,\n:host-context([dir=rtl]) .addon-message-discussion .addon-message-last-message-user {\n  margin-left: 2px;\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbWVzc2FnZXMvbWVzc2FnZXMtY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7O0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFEWjtBQUtZOztFQUNJLGlCQUFBO0FBRmhCO0FBS1k7O0VBQ0ksZ0JBQUE7QUFGaEI7QUFNUTs7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBSFo7QUFLWTs7O0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FBRGhCO0FBR1k7O0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBQWhCO0FBSVE7O0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FBRFo7QUFJUTs7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFEWjtBQUlROztFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFEWjtBQU1RO0VBQ0ksZ0JBQUE7QUFKWjtBQVFJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQU5SO0FBYVE7O0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBVFo7QUFZUTs7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFUWiIsImZpbGUiOiJzcmMvYWRkb25zL21lc3NhZ2VzL21lc3NhZ2VzLWNvbW1vbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5hZGRvbi1tZXNzYWdlcy1jb252ZXJzYXRpb24taXRlbSxcbiAgICAuYWRkb24tbWVzc2FnZS1kaXNjdXNzaW9uIHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0taGVhZGluZyB7XG4gICAgICAgICAgICBjb3JlLWZvcm1hdC10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbm90ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuXG4gICAgICAgICAgICBpb24tYmFkZ2UsIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkb24tbWVzc2FnZS1sYXN0LW1lc3NhZ2UtZGF0ZSB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkb24tbWVzc2FnZS1sYXN0LW1lc3NhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRvbi1tZXNzYWdlLWxhc3QtbWVzc2FnZS11c2VyIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkb24tbWVzc2FnZS1sYXN0LW1lc3NhZ2UtdGV4dCB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkb24tbWVzc2FnZS1kaXNjdXNzaW9uIHtcbiAgICAgICAgLml0ZW0taGVhZGluZyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0tZGl2aWRlciBpb24tYmFkZ2Uge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbn1cblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAuYWRkb24tbWVzc2FnZXMtY29udmVyc2F0aW9uLWl0ZW0sXG4gICAgLmFkZG9uLW1lc3NhZ2UtZGlzY3Vzc2lvbiB7XG4gICAgICAgIC5pdGVtLWhlYWRpbmcgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRvbi1tZXNzYWdlLWxhc3QtbWVzc2FnZS11c2VyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/addons/messages/messages-lazy.module.ts":
/*!*****************************************************!*\
  !*** ./src/addons/messages/messages-lazy.module.ts ***!
  \*****************************************************/
/*! exports provided: AddonMessagesDiscussionRoute, AddonMessagesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionRoute", function() { return AddonMessagesDiscussionRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesLazyModule", function() { return AddonMessagesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/mainmenu/mainmenu-tab-routing.module */ "./src/core/features/mainmenu/mainmenu-tab-routing.module.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards */ "./src/addons/messages/guards/index.ts");
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





const AddonMessagesDiscussionRoute = {
    path: 'discussion',
    loadChildren: () => Promise.all(/*! import() | pages-discussion-discussion-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-discussion-discussion-module")]).then(__webpack_require__.bind(null, /*! ./pages/discussion/discussion.module */ "./src/addons/messages/pages/discussion/discussion.module.ts"))
        .then(m => m.AddonMessagesDiscussionPageModule),
};
function buildRoutes(injector) {
    return [
        {
            path: 'index',
            loadChildren: () => Promise.all(/*! import() | pages-discussions-35-discussions-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-discussions-35-discussions-module")]).then(__webpack_require__.bind(null, /*! ./pages/discussions-35/discussions.module */ "./src/addons/messages/pages/discussions-35/discussions.module.ts")).then(m => m.AddonMessagesDiscussions35PageModule),
        },
        {
            path: 'contacts-35',
            loadChildren: () => Promise.all(/*! import() | pages-contacts-35-contacts-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-contacts-35-contacts-module")]).then(__webpack_require__.bind(null, /*! ./pages/contacts-35/contacts.module */ "./src/addons/messages/pages/contacts-35/contacts.module.ts")).then(m => m.AddonMessagesContacts35PageModule),
        },
        {
            path: 'group-conversations',
            loadChildren: () => Promise.all(/*! import() | pages-group-conversations-group-conversations-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-group-conversations-group-conversations-module")]).then(__webpack_require__.bind(null, /*! ./pages/group-conversations/group-conversations.module */ "./src/addons/messages/pages/group-conversations/group-conversations.module.ts"))
                .then(m => m.AddonMessagesGroupConversationsPageModule),
        },
        AddonMessagesDiscussionRoute,
        {
            path: 'search',
            loadChildren: () => Promise.all(/*! import() | pages-search-search-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-search-search-module")]).then(__webpack_require__.bind(null, /*! ./pages/search/search.module */ "./src/addons/messages/pages/search/search.module.ts"))
                .then(m => m.AddonMessagesSearchPageModule),
        },
        {
            path: 'contacts',
            loadChildren: () => Promise.all(/*! import() | pages-contacts-contacts-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ./pages/contacts/contacts.module */ "./src/addons/messages/pages/contacts/contacts.module.ts"))
                .then(m => m.AddonMessagesContactsPageModule),
        },
        {
            path: 'preferences',
            loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "./src/addons/messages/pages/settings/settings.module.ts")).then(m => m.AddonMessagesSettingsPageModule),
        },
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_3__["buildTabMainRoutes"])(injector, {
            canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesIndexGuard"]],
        }),
    ];
}
let AddonMessagesLazyModule = class AddonMessagesLazyModule {
};
AddonMessagesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]],
                useFactory: buildRoutes,
            },
        ],
    })
], AddonMessagesLazyModule);



/***/ }),

/***/ "./src/core/guards/can-leave.ts":
/*!**************************************!*\
  !*** ./src/core/guards/can-leave.ts ***!
  \**************************************/
/*! exports provided: CanLeaveGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveGuard", function() { return CanLeaveGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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



let CanLeaveGuard = class CanLeaveGuard {
    canDeactivate(component) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isCanLeave(component)) {
                return true;
            }
            return _services_utils_utils__WEBPACK_IMPORTED_MODULE_2__["CoreUtils"].ignoreErrors(component.canLeave(), false);
        });
    }
    isCanLeave(component) {
        return component !== null && 'canLeave' in component;
    }
};
CanLeaveGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CanLeaveGuard);



/***/ })

}]);
//# sourceMappingURL=common.js.map