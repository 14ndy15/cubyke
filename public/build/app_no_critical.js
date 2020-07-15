(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app_no_critical"],{

/***/ "./assets/css/app_no_critical.scss":
/*!*****************************************!*\
  !*** ./assets/css/app_no_critical.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app_no_critical.js":
/*!**************************************!*\
  !*** ./assets/js/app_no_critical.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_no_critical_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app_no_critical.scss */ "./assets/css/app_no_critical.scss");
/* harmony import */ var _css_app_no_critical_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_no_critical_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sal.js */ "./node_modules/sal.js/dist/sal.js");
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_global_menuMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/global/_menuMobile */ "./assets/js/modules/global/_menuMobile.js");
/* harmony import */ var _modules_global_USCitizen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/global/_USCitizen */ "./assets/js/modules/global/_USCitizen.js");
/* harmony import */ var _modules_global_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/global/_message */ "./assets/js/modules/global/_message.js");






new smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  offset: 75
});
new _modules_global_menuMobile__WEBPACK_IMPORTED_MODULE_3__["default"]();
new _modules_global_USCitizen__WEBPACK_IMPORTED_MODULE_4__["default"]();
new _modules_global_message__WEBPACK_IMPORTED_MODULE_5__["default"]();
sal_js__WEBPACK_IMPORTED_MODULE_1___default()(); // navigator.userAgent.includes('Firefox') ? this.rel="stylesheet"

/***/ }),

/***/ "./assets/js/modules/global/_USCitizen.js":
/*!************************************************!*\
  !*** ./assets/js/modules/global/_USCitizen.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_utils */ "./assets/js/modules/global/_utils.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var InfoUSCitizen =
/*#__PURE__*/
function () {
  function InfoUSCitizen() {
    _classCallCheck(this, InfoUSCitizen);

    this.USCitizenContainer = document.querySelector('.US_Citizen');
    this.titleLink = document.querySelector('.US_Citizen .US_Citizen__info a');
    this.button = document.querySelector('.US_Citizen .US_Citizen__info button');
    this.events();
  }

  _createClass(InfoUSCitizen, [{
    key: "events",
    value: function events() {
      if (this.USCitizenContainer !== null) {
        this.titleLink.addEventListener('click', this.showOrHideInfo.bind(this));
        this.button.addEventListener('click', this.showOrHideInfo.bind(this));
      }
    }
  }, {
    key: "showOrHideInfo",
    value: function showOrHideInfo() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])('readUSCitizenInfo')) this.USCitizenContainer.classList.add('US_Citizen--hide');else {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setCookie"])('true', 'readUSCitizenInfo');
        this.USCitizenContainer.classList.add('US_Citizen--expand');
        this.button.innerText = 'I Understood';
      }
    }
  }]);

  return InfoUSCitizen;
}();

/* harmony default export */ __webpack_exports__["default"] = (InfoUSCitizen);

/***/ }),

/***/ "./assets/js/modules/global/_menuMobile.js":
/*!*************************************************!*\
  !*** ./assets/js/modules/global/_menuMobile.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu =
/*#__PURE__*/
function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.menuIcon = document.querySelector('.menu-icon');
    this.menu = document.querySelector('.nav');
    this.links = document.querySelectorAll('nav ul li a');
    this.events();
  } //link the events with the functions


  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      this.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this));
    }
  }, {
    key: "toggleTheMenu",
    value: function toggleTheMenu() {
      this.menu.classList.toggle('swing-out-top-bck');
      this.menu.classList.toggle('swing-in-top-bck');
      this.menuIcon.classList.toggle('menu-icon--close-x');
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./assets/js/modules/global/_message.js":
/*!**********************************************!*\
  !*** ./assets/js/modules/global/_message.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SendContactMessage =
/*#__PURE__*/
function () {
  function SendContactMessage() {
    _classCallCheck(this, SendContactMessage);

    this.form = document.querySelector('.form-contact form');
    this.name = document.querySelector('#name');
    this.email = document.querySelector('#email');
    this.message = document.querySelector('#message');
    this.button = document.querySelector('#submit');
    this.notification = document.querySelector('.form-contact__sending');
    this.event();
  }

  _createClass(SendContactMessage, [{
    key: "event",
    value: function event() {
      this.button.addEventListener('click', this.send.bind(this));
      this.notification.addEventListener('click', this.closeNotification.bind(this));
    }
  }, {
    key: "closeNotification",
    value: function closeNotification() {
      this.notification.classList.remove('form-contact__sending--visible');
      this.notification.classList.remove('form-contact__sending--visible--error');
      this.notification.classList.remove('form-contact__sending--visible--sending');
      this.notification.classList.remove('form-contact__sending--visible--received');
    }
  }, {
    key: "send",
    value: function send(event) {
      if (this.form.checkValidity()) {
        var name = this.name.value;
        var email = this.email.value;
        var message = this.message.value;
        var params = new URLSearchParams();
        params.append('name', name);
        params.append('email', email);
        params.append('message', message);
        var that = this;
        axios__WEBPACK_IMPORTED_MODULE_7___default.a.post('/mail', params).then(function (response) {
          var serverCode = response.data.response;

          if (serverCode === 'success') {
            setTimeout(function () {
              that.notification.classList.remove('form-contact__sending--visible--sending');
              that.notification.classList.add('form-contact__sending--visible--received');
              that.form.reset();
            }, 1000);
            setTimeout(function () {
              that.closeNotification();
              that.form.reset();
            }, 5000);
          } else {
            that.notification.classList.remove('form-contact__sending--visible--sending');
            that.notification.classList.add('form-contact__sending--visible--error');
          }
        }).catch(function (error) {
          that.notification.classList.remove('form-contact__sending--visible--sending');
          that.notification.classList.add('form-contact__sending--visible--error');
        });
        this.notification.classList.add('form-contact__sending--visible');
        this.notification.classList.add('form-contact__sending--visible--sending');
        event.preventDefault();
      }
    }
  }]);

  return SendContactMessage;
}();

/* harmony default export */ __webpack_exports__["default"] = (SendContactMessage);

/***/ }),

/***/ "./assets/js/modules/global/_utils.js":
/*!********************************************!*\
  !*** ./assets/js/modules/global/_utils.js ***!
  \********************************************/
/*! exports provided: setCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);




function setCookie(value) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'products_cart';
  var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  var expires = "; expires=" + date.toGMTString();
  document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(name) {
  var cArr = document.cookie.split(';');

  for (var i = 0; i < cArr.length; i++) {
    var cookie = cArr[i].split("=", 2);
    cookie[0] = cookie[0].replace(/^\s+/, "");
    if (cookie[0] === name) return cookie;
  }

  return false;
}

/***/ })

},[["./assets/js/app_no_critical.js","runtime","vendors~app_no_critical~buy~index_no_critical","vendors~app_no_critical"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcF9ub19jcml0aWNhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHBfbm9fY3JpdGljYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvZ2xvYmFsL19VU0NpdGl6ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvZ2xvYmFsL19tZW51TW9iaWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL2dsb2JhbC9fbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9nbG9iYWwvX3V0aWxzLmpzIl0sIm5hbWVzIjpbIlNtb290aFNjcm9sbCIsInNwZWVkIiwic3BlZWRBc0R1cmF0aW9uIiwib2Zmc2V0IiwiTW9iaWxlTWVudSIsIkluZm9VU0NpdGl6ZW4iLCJTZW5kQ29udGFjdE1lc3NhZ2UiLCJzYWwiLCJVU0NpdGl6ZW5Db250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZUxpbmsiLCJidXR0b24iLCJldmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd09ySGlkZUluZm8iLCJiaW5kIiwiZ2V0Q29va2llIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0Q29va2llIiwiaW5uZXJUZXh0IiwibWVudUljb24iLCJtZW51IiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlVGhlTWVudSIsInRvZ2dsZSIsImZvcm0iLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwibm90aWZpY2F0aW9uIiwiZXZlbnQiLCJzZW5kIiwiY2xvc2VOb3RpZmljYXRpb24iLCJyZW1vdmUiLCJjaGVja1ZhbGlkaXR5IiwidmFsdWUiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJ0aGF0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwic2VydmVyQ29kZSIsImRhdGEiLCJzZXRUaW1lb3V0IiwicmVzZXQiLCJjYXRjaCIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJkYXlzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImV4cGlyZXMiLCJ0b0dNVFN0cmluZyIsImNvb2tpZSIsImNBcnIiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFJQSxvREFBSixDQUFpQixjQUFqQixFQUFpQztBQUM3QkMsT0FBSyxFQUFFLEdBRHNCO0FBRTdCQyxpQkFBZSxFQUFFLElBRlk7QUFHN0JDLFFBQU0sRUFBRTtBQUhxQixDQUFqQztBQUtBLElBQUlDLGtFQUFKO0FBQ0EsSUFBSUMsaUVBQUo7QUFDQSxJQUFJQywrREFBSjtBQUNBQyw2Q0FBRyxHLENBR0gsa0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTs7SUFFTUYsYTs7O0FBQ0YsMkJBQWE7QUFBQTs7QUFDVCxTQUFLRyxrQkFBTCxHQUEwQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQTFCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkYsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlDQUF2QixDQUFqQjtBQUNBLFNBQUtFLE1BQUwsR0FBY0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNDQUF2QixDQUFkO0FBR0EsU0FBS0csTUFBTDtBQUNIOzs7OzZCQUVPO0FBQ0osVUFBSSxLQUFLTCxrQkFBTCxLQUE0QixJQUFoQyxFQUFzQztBQUNsQyxhQUFLRyxTQUFMLENBQWVHLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLEtBQUtDLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXpDO0FBQ0EsYUFBS0osTUFBTCxDQUFZRSxnQkFBWixDQUE2QixPQUE3QixFQUFz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QixDQUFYOztBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFHRixJQUFJLENBQUNHLE1BQXJCLEVBQTRCRCxDQUFDLEVBQTdCLEVBQWlDO0FBQzdCLFFBQUlILE1BQU0sR0FBR0MsSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUUQsS0FBUixDQUFjLEdBQWQsRUFBa0IsQ0FBbEIsQ0FBYjtBQUNBRixVQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUssT0FBVixDQUFrQixNQUFsQixFQUF5QixFQUF6QixDQUFaO0FBQ0EsUUFBSUwsTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjaEMsSUFBbEIsRUFDSSxPQUFPZ0MsTUFBUDtBQUNQOztBQUNELFNBQU8sS0FBUDtBQUNILEMiLCJmaWxlIjoiYXBwX25vX2NyaXRpY2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvYXBwX25vX2NyaXRpY2FsLnNjc3MnO1xyXG5cclxuaW1wb3J0IHNhbCBmcm9tICdzYWwuanMnO1xyXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJ3Ntb290aC1zY3JvbGwnO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9tb2R1bGVzL2dsb2JhbC9fbWVudU1vYmlsZVwiO1xyXG5cclxuaW1wb3J0IEluZm9VU0NpdGl6ZW4gZnJvbSBcIi4vbW9kdWxlcy9nbG9iYWwvX1VTQ2l0aXplblwiO1xyXG5pbXBvcnQgU2VuZENvbnRhY3RNZXNzYWdlIGZyb20gXCIuL21vZHVsZXMvZ2xvYmFsL19tZXNzYWdlXCI7XHJcblxyXG5uZXcgU21vb3RoU2Nyb2xsKCdhW2hyZWYqPVwiI1wiXScsIHtcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzcGVlZEFzRHVyYXRpb246IHRydWUsXHJcbiAgICBvZmZzZXQ6IDc1XHJcbn0pO1xyXG5uZXcgTW9iaWxlTWVudSgpO1xyXG5uZXcgSW5mb1VTQ2l0aXplbigpO1xyXG5uZXcgU2VuZENvbnRhY3RNZXNzYWdlKCk7XHJcbnNhbCgpO1xyXG5cclxuXHJcbi8vIG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ0ZpcmVmb3gnKSA/IHRoaXMucmVsPVwic3R5bGVzaGVldFwiIiwiaW1wb3J0IHsgc2V0Q29va2llLCBnZXRDb29raWUgfSBmcm9tICcuL191dGlscyc7XHJcblxyXG5jbGFzcyBJbmZvVVNDaXRpemVue1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLlVTQ2l0aXplbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5VU19DaXRpemVuJyk7XHJcbiAgICAgICAgdGhpcy50aXRsZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVVNfQ2l0aXplbiAuVVNfQ2l0aXplbl9faW5mbyBhJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVVNfQ2l0aXplbiAuVVNfQ2l0aXplbl9faW5mbyBidXR0b24nKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuVVNDaXRpemVuQ29udGFpbmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93T3JIaWRlSW5mby5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dPckhpZGVJbmZvLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93T3JIaWRlSW5mbygpe1xyXG4gICAgICAgIGlmIChnZXRDb29raWUoJ3JlYWRVU0NpdGl6ZW5JbmZvJykpXHJcbiAgICAgICAgICAgIHRoaXMuVVNDaXRpemVuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ1VTX0NpdGl6ZW4tLWhpZGUnKTtcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzZXRDb29raWUoJ3RydWUnLCAncmVhZFVTQ2l0aXplbkluZm8nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVVNDaXRpemVuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ1VTX0NpdGl6ZW4tLWV4cGFuZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5pbm5lclRleHQgPSAnSSBVbmRlcnN0b29kJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvVVNDaXRpemVuOyIsImNsYXNzIE1vYmlsZU1lbnV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xyXG4gICAgICAgIHRoaXMubGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgdWwgbGkgYScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saW5rIHRoZSBldmVudHMgd2l0aCB0aGUgZnVuY3Rpb25zXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLm1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVUaGVNZW51LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRoZU1lbnUoKXtcclxuICAgICAgICB0aGlzLm1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc3dpbmctb3V0LXRvcC1iY2snKTtcclxuICAgICAgICB0aGlzLm1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc3dpbmctaW4tdG9wLWJjaycpO1xyXG5cclxuICAgICAgICB0aGlzLm1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaWNvbi0tY2xvc2UteCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBTZW5kQ29udGFjdE1lc3NhZ2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWN0IGZvcm0nKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xyXG5cclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhY3RfX3NlbmRpbmcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50KCl7XHJcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlbmQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlTm90aWZpY2F0aW9uLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTm90aWZpY2F0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250YWN0X19zZW5kaW5nLS12aXNpYmxlJyk7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1jb250YWN0X19zZW5kaW5nLS12aXNpYmxlLS1lcnJvcicpO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udGFjdF9fc2VuZGluZy0tdmlzaWJsZS0tc2VuZGluZycpO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udGFjdF9fc2VuZGluZy0tdmlzaWJsZS0tcmVjZWl2ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kKGV2ZW50KXtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkpe1xyXG5cclxuICAgICAgICAgICAgbGV0IG5hbWUgPSB0aGlzLm5hbWUudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBlbWFpbCA9IHRoaXMuZW1haWwudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5tZXNzYWdlLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgICAgICBwYXJhbXMuYXBwZW5kKCduYW1lJywgbmFtZSk7XHJcbiAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ2VtYWlsJywgZW1haWwpO1xyXG4gICAgICAgICAgICBwYXJhbXMuYXBwZW5kKCdtZXNzYWdlJywgbWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvbWFpbCcsIHBhcmFtcylcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZXJ2ZXJDb2RlID0gcmVzcG9uc2UuZGF0YS5yZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VydmVyQ29kZSA9PT0gJ3N1Y2Nlc3MnKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubm90aWZpY2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udGFjdF9fc2VuZGluZy0tdmlzaWJsZS0tc2VuZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5ub3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWN0X19zZW5kaW5nLS12aXNpYmxlLS1yZWNlaXZlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5mb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jbG9zZU5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5mb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm5vdGlmaWNhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLWNvbnRhY3RfX3NlbmRpbmctLXZpc2libGUtLXNlbmRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5ub3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWN0X19zZW5kaW5nLS12aXNpYmxlLS1lcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubm90aWZpY2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tY29udGFjdF9fc2VuZGluZy0tdmlzaWJsZS0tc2VuZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFjdF9fc2VuZGluZy0tdmlzaWJsZS0tZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWN0X19zZW5kaW5nLS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFjdF9fc2VuZGluZy0tdmlzaWJsZS0tc2VuZGluZycpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbmRDb250YWN0TWVzc2FnZTsiLCJleHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKHZhbHVlLCBuYW1lPSdwcm9kdWN0c19jYXJ0JyAsIGRheXM9Mykge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKyhkYXlzKjI0KjYwKjYwKjEwMDApKTtcclxuICAgIGxldCBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIrZGF0ZS50b0dNVFN0cmluZyAoKTtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICtcclxuICAgICAgICBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcclxuICAgIGxldCBjQXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICBmb3IobGV0IGk9MDtpIDwgY0Fyci5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgbGV0IGNvb2tpZSA9IGNBcnJbaV0uc3BsaXQoXCI9XCIsMik7XHJcbiAgICAgICAgY29va2llWzBdID0gY29va2llWzBdLnJlcGxhY2UoL15cXHMrLyxcIlwiKTtcclxuICAgICAgICBpZiAoY29va2llWzBdID09PSBuYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gY29va2llO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==