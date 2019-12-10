(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sal.js */ "./node_modules/sal.js/dist/sal.js");
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_global_menuMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/global/_menuMobile */ "./assets/js/modules/global/_menuMobile.js");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_global_USCitizen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/global/_USCitizen */ "./assets/js/modules/global/_USCitizen.js");






new smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  offset: 75
});
new _modules_global_menuMobile__WEBPACK_IMPORTED_MODULE_3__["default"]();
new _modules_global_USCitizen__WEBPACK_IMPORTED_MODULE_5__["default"]();
sal_js__WEBPACK_IMPORTED_MODULE_0___default()();

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

},[["./assets/js/app.js","runtime","vendors~app~buy~index","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvZ2xvYmFsL19VU0NpdGl6ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvZ2xvYmFsL19tZW51TW9iaWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL2dsb2JhbC9fdXRpbHMuanMiXSwibmFtZXMiOlsiU21vb3RoU2Nyb2xsIiwic3BlZWQiLCJzcGVlZEFzRHVyYXRpb24iLCJvZmZzZXQiLCJNb2JpbGVNZW51IiwiSW5mb1VTQ2l0aXplbiIsInNhbCIsIlVTQ2l0aXplbkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlTGluayIsImJ1dHRvbiIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93T3JIaWRlSW5mbyIsImJpbmQiLCJnZXRDb29raWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRDb29raWUiLCJpbm5lclRleHQiLCJtZW51SWNvbiIsIm1lbnUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b2dnbGVUaGVNZW51IiwidG9nZ2xlIiwidmFsdWUiLCJuYW1lIiwiZGF5cyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9HTVRTdHJpbmciLCJjb29raWUiLCJjQXJyIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxvREFBSixDQUFpQixjQUFqQixFQUFpQztBQUM3QkMsT0FBSyxFQUFFLEdBRHNC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VCxDQUFtQlksSUFBbkIsRUFBeUI7QUFDNUIsTUFBSVMsSUFBSSxHQUFHN0IsUUFBUSxDQUFDNEIsTUFBVCxDQUFnQkUsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBWDs7QUFDQSxPQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBR0YsSUFBSSxDQUFDRyxNQUFyQixFQUE0QkQsQ0FBQyxFQUE3QixFQUFpQztBQUM3QixRQUFJSCxNQUFNLEdBQUdDLElBQUksQ0FBQ0UsQ0FBRCxDQUFKLENBQVFELEtBQVIsQ0FBYyxHQUFkLEVBQWtCLENBQWxCLENBQWI7QUFDQUYsVUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVLLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUIsRUFBekIsQ0FBWjtBQUNBLFFBQUlMLE1BQU0sQ0FBQyxDQUFELENBQU4sS0FBY1IsSUFBbEIsRUFDSSxPQUFPUSxNQUFQO0FBQ1A7O0FBQ0QsU0FBTyxLQUFQO0FBQ0gsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgc2FsIGZyb20gJ3NhbC5qcydcclxuaW1wb3J0ICdsYXp5c2l6ZXMnO1xyXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJ3Ntb290aC1zY3JvbGwnO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9tb2R1bGVzL2dsb2JhbC9fbWVudU1vYmlsZVwiO1xyXG5pbXBvcnQgJy4uL2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCBJbmZvVVNDaXRpemVuIGZyb20gXCIuL21vZHVsZXMvZ2xvYmFsL19VU0NpdGl6ZW5cIjtcclxuXHJcbm5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdJywge1xyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNwZWVkQXNEdXJhdGlvbjogdHJ1ZSxcclxuICAgIG9mZnNldDogNzVcclxufSk7XHJcbm5ldyBNb2JpbGVNZW51KCk7XHJcbm5ldyBJbmZvVVNDaXRpemVuKCk7XHJcbnNhbCgpO1xyXG5cclxuXHJcbiIsImltcG9ydCB7IHNldENvb2tpZSwgZ2V0Q29va2llIH0gZnJvbSAnLi9fdXRpbHMnO1xyXG5cclxuY2xhc3MgSW5mb1VTQ2l0aXplbntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5VU0NpdGl6ZW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVVNfQ2l0aXplbicpO1xyXG4gICAgICAgIHRoaXMudGl0bGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlVTX0NpdGl6ZW4gLlVTX0NpdGl6ZW5fX2luZm8gYScpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlVTX0NpdGl6ZW4gLlVTX0NpdGl6ZW5fX2luZm8gYnV0dG9uJyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIGlmICh0aGlzLlVTQ2l0aXplbkNvbnRhaW5lciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd09ySGlkZUluZm8uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93T3JIaWRlSW5mby5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd09ySGlkZUluZm8oKXtcclxuICAgICAgICBpZiAoZ2V0Q29va2llKCdyZWFkVVNDaXRpemVuSW5mbycpKVxyXG4gICAgICAgICAgICB0aGlzLlVTQ2l0aXplbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdVU19DaXRpemVuLS1oaWRlJyk7XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0Q29va2llKCd0cnVlJywgJ3JlYWRVU0NpdGl6ZW5JbmZvJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlVTQ2l0aXplbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdVU19DaXRpemVuLS1leHBhbmQnKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uaW5uZXJUZXh0ID0gJ0kgVW5kZXJzdG9vZCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb1VTQ2l0aXplbjsiLCJjbGFzcyBNb2JpbGVNZW51e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLm1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xyXG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcclxuICAgICAgICB0aGlzLmxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IHVsIGxpIGEnKTtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGluayB0aGUgZXZlbnRzIHdpdGggdGhlIGZ1bmN0aW9uc1xyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5tZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlVGhlTWVudS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUaGVNZW51KCl7XHJcbiAgICAgICAgdGhpcy5tZW51LmNsYXNzTGlzdC50b2dnbGUoJ3N3aW5nLW91dC10b3AtYmNrJyk7XHJcbiAgICAgICAgdGhpcy5tZW51LmNsYXNzTGlzdC50b2dnbGUoJ3N3aW5nLWluLXRvcC1iY2snKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWljb24tLWNsb3NlLXgnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTsiLCJleHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKHZhbHVlLCBuYW1lPSdwcm9kdWN0c19jYXJ0JyAsIGRheXM9Mykge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKyhkYXlzKjI0KjYwKjYwKjEwMDApKTtcclxuICAgIGxldCBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIrZGF0ZS50b0dNVFN0cmluZyAoKTtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICtcclxuICAgICAgICBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcclxuICAgIGxldCBjQXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICBmb3IobGV0IGk9MDtpIDwgY0Fyci5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgbGV0IGNvb2tpZSA9IGNBcnJbaV0uc3BsaXQoXCI9XCIsMik7XHJcbiAgICAgICAgY29va2llWzBdID0gY29va2llWzBdLnJlcGxhY2UoL15cXHMrLyxcIlwiKTtcclxuICAgICAgICBpZiAoY29va2llWzBdID09PSBuYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gY29va2llO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==