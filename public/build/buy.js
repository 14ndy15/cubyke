(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy"],{

/***/ "./assets/css/buy.scss":
/*!*****************************!*\
  !*** ./assets/css/buy.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/buy.js":
/*!**************************!*\
  !*** ./assets/js/buy.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_buy_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/buy.scss */ "./assets/css/buy.scss");
/* harmony import */ var _css_buy_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_buy_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_buy_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/buy/_price */ "./assets/js/modules/buy/_price.js");


new _modules_buy_price__WEBPACK_IMPORTED_MODULE_1__["default"]();

/***/ }),

/***/ "./assets/js/modules/buy/_price.js":
/*!*****************************************!*\
  !*** ./assets/js/modules/buy/_price.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Price =
/*#__PURE__*/
function () {
  function Price() {
    _classCallCheck(this, Price);

    this.elementPrice = document.querySelector('.build__price');
    this.labelPrice = document.querySelector('.build__price span:first-child');
    this.inputs = document.querySelectorAll('.form__item input[data-price]');
    this.discountInputs = document.querySelectorAll('.form__item input[name="prefered_member"]');
    this.discountDate = document.querySelector('.form__item input[name="datum"]');
    this.discountPhoto = document.querySelector('.form__item input[name="photo"]');
    this.events();
    this.computePrice();
  }

  _createClass(Price, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.inputs.forEach(function (input) {
        input.addEventListener('click', _this.computePrice.bind(_this));
      });
      this.discountInputs.forEach(function (discountInput) {
        discountInput.addEventListener('click', _this.computePrice.bind(_this));
      });
    }
  }, {
    key: "computePrice",
    value: function computePrice(e) {
      this.elementPrice.classList.remove('build__price--animate');
      var price = 0;
      this.inputs.forEach(function (input) {
        if (input.checked === true) price += parseInt(input.getAttribute('data-price'));
      });

      if (this.discountInputs[1].checked === true) {
        price -= price / 10;
        this.discountDate.removeAttribute('disabled');
        this.discountPhoto.removeAttribute('disabled');
      } else {
        this.discountDate.setAttribute('disabled', '');
        this.discountPhoto.setAttribute('disabled', '');
      }

      this.labelPrice.innerHTML = price;
      this.animatePrice();
    }
  }, {
    key: "animatePrice",
    value: function animatePrice() {
      this.elementPrice.classList.add('build__price--animate');
    }
  }]);

  return Price;
}();

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

/***/ "./node_modules/core-js/internals/parse-int.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/parse-int.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ "./node_modules/core-js/internals/parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ })

},[["./assets/js/buy.js","runtime","vendors~buy~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2J1eS5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9idXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvYnV5L19wcmljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiUHJpY2UiLCJlbGVtZW50UHJpY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsYWJlbFByaWNlIiwiaW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc2NvdW50SW5wdXRzIiwiZGlzY291bnREYXRlIiwiZGlzY291bnRQaG90byIsImV2ZW50cyIsImNvbXB1dGVQcmljZSIsImZvckVhY2giLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwiZGlzY291bnRJbnB1dCIsImUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwcmljZSIsImNoZWNrZWQiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFuaW1hdGVQcmljZSIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQUlBLDBEQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSE1BLEs7OztBQUNGLG1CQUFhO0FBQUE7O0FBQ1Qs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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyw2QkFBNkIsbUJBQU8sQ0FBQyw2RUFBd0I7O0FBRTdEO0FBQ0E7QUFDQSxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUMiLCJmaWxlIjoiYnV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvYnV5LnNjc3MnO1xyXG5pbXBvcnQgUHJpY2UgZnJvbSBcIi4vbW9kdWxlcy9idXkvX3ByaWNlXCI7XHJcblxyXG5uZXcgUHJpY2UoKTtcclxuIiwiY2xhc3MgUHJpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnRQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idWlsZF9fcHJpY2UnKTtcclxuICAgICAgICB0aGlzLmxhYmVsUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVpbGRfX3ByaWNlIHNwYW46Zmlyc3QtY2hpbGQnKTtcclxuICAgICAgICB0aGlzLmlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19pdGVtIGlucHV0W2RhdGEtcHJpY2VdJyk7XHJcbiAgICAgICAgdGhpcy5kaXNjb3VudElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19pdGVtIGlucHV0W25hbWU9XCJwcmVmZXJlZF9tZW1iZXJcIl0nKTtcclxuICAgICAgICB0aGlzLmRpc2NvdW50RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19pdGVtIGlucHV0W25hbWU9XCJkYXR1bVwiXScpO1xyXG4gICAgICAgIHRoaXMuZGlzY291bnRQaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19pdGVtIGlucHV0W25hbWU9XCJwaG90b1wiXScpO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZVByaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpPT57XHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jb21wdXRlUHJpY2UuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzY291bnRJbnB1dHMuZm9yRWFjaCgoZGlzY291bnRJbnB1dCk9PntcclxuICAgICAgICAgICAgZGlzY291bnRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY29tcHV0ZVByaWNlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVQcmljZShlKXtcclxuICAgICAgICB0aGlzLmVsZW1lbnRQcmljZS5jbGFzc0xpc3QucmVtb3ZlKCdidWlsZF9fcHJpY2UtLWFuaW1hdGUnKTtcclxuXHJcbiAgICAgICAgbGV0IHByaWNlID0gMDtcclxuICAgICAgICB0aGlzLmlucHV0cy5mb3JFYWNoKChpbnB1dCk9PntcclxuICAgICAgICAgICAgaWYoaW5wdXQuY2hlY2tlZCA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHByaWNlICs9IHBhcnNlSW50KGlucHV0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzY291bnRJbnB1dHNbMV0uY2hlY2tlZCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHByaWNlIC09IHByaWNlLzEwO1xyXG4gICAgICAgICAgICB0aGlzLmRpc2NvdW50RGF0ZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzY291bnRQaG90by5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzY291bnREYXRlLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzY291bnRQaG90by5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbFByaWNlLmlubmVySFRNTCA9IHByaWNlO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZVByaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZVByaWNlKCl7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UHJpY2UuY2xhc3NMaXN0LmFkZCgnYnVpbGRfX3ByaWNlLS1hbmltYXRlJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBuYXRpdmVQYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBoZXggPSAvXlsrLV0/MFtYeF0vO1xudmFyIEZPUkNFRCA9IG5hdGl2ZVBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgbmF0aXZlUGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiBuYXRpdmVQYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiBuYXRpdmVQYXJzZUludDtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9