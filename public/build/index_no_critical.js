(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index_no_critical"],{

/***/ "./assets/css/index_no_critical.scss":
/*!*******************************************!*\
  !*** ./assets/css/index_no_critical.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/index_no_critical.js":
/*!****************************************!*\
  !*** ./assets/js/index_no_critical.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_no_critical_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index_no_critical.scss */ "./assets/css/index_no_critical.scss");
/* harmony import */ var _css_index_no_critical_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_no_critical_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_global_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/global/_gallery */ "./assets/js/modules/global/_gallery.js");


new _modules_global_gallery__WEBPACK_IMPORTED_MODULE_1__["default"]('.bikes__gallery');
new _modules_global_gallery__WEBPACK_IMPORTED_MODULE_1__["default"]('.reviews__review');

/***/ }),

/***/ "./assets/js/modules/global/_gallery.js":
/*!**********************************************!*\
  !*** ./assets/js/modules/global/_gallery.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swipe_listener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swipe-listener */ "./node_modules/swipe-listener/dist/swipe-listener.min.js");
/* harmony import */ var swipe_listener__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swipe_listener__WEBPACK_IMPORTED_MODULE_3__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Gallery =
/*#__PURE__*/
function () {
  function Gallery(selector) {
    _classCallCheck(this, Gallery);

    this.container = document.querySelector(selector);
    this.listener = swipe_listener__WEBPACK_IMPORTED_MODULE_3___default()(this.container);
    this.items = document.querySelectorAll(selector + ' .gallery__item');
    this.activePos = 0;
    this.init();
    this.arrows = this.addArrows();
    this.arrowPrev = this.arrows[0];
    this.arrowNext = this.arrows[1];
    this.events();
  }

  _createClass(Gallery, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.arrowPrev.addEventListener('click', this.prev.bind(this));
      this.arrowNext.addEventListener('click', this.next.bind(this));
      this.container.addEventListener('swipe', function (e) {
        var directions = e.detail.directions;
        if (directions.left) _this.next();
        if (directions.right) _this.prev();
      });
    }
  }, {
    key: "init",
    value: function init() {
      // this.container.setAttribute('style', 'height: '+this.images[0].clientHeight+'px;');
      this.items.forEach(function (image, index) {
        var displacement = index * 100;
        image.setAttribute("style", "transform: translateX(" + displacement + "%);");
      });
    }
  }, {
    key: "addArrows",
    value: function addArrows() {
      var arrowPrev = document.createElement('div');
      arrowPrev.classList.add('gallery__arrow');
      arrowPrev.classList.add('gallery__arrow--prev');
      var arrowNext = document.createElement('div');
      arrowNext.classList.add('gallery__arrow');
      arrowNext.classList.add('gallery__arrow--next');
      this.container.appendChild(arrowPrev);
      this.container.appendChild(arrowNext);
      return [arrowPrev, arrowNext];
    }
  }, {
    key: "next",
    value: function next() {
      var _this2 = this;

      if (this.activePos === this.items.length - 1) this.activePos = -1;
      this.items.forEach(function (item, index) {
        var displacement = (index - _this2.activePos - 1) * 100;
        item.setAttribute("style", "transform: translateX(" + displacement + "%);");
      });
      this.activePos += 1;
    }
  }, {
    key: "prev",
    value: function prev() {
      var _this3 = this;

      if (this.activePos === 0) this.activePos = this.items.length;
      this.items.forEach(function (item, index) {
        var displacement = (index - _this3.activePos + 1) * 100;
        item.setAttribute("style", "transform: translateX(" + displacement + "%);");
      });
      this.activePos -= 1;
    }
  }]);

  return Gallery;
}();

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/swipe-listener/dist/swipe-listener.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/swipe-listener/dist/swipe-listener.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},SwipeListener=function(a,b){if(a){'undefined'!=typeof window&&function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent('CustomEvent');return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}return'function'!=typeof window.CustomEvent&&void(a.prototype=window.Event.prototype,window.CustomEvent=a)}();b||(b={}),b=_extends({},{minHorizontal:10,minVertical:10,deltaHorizontal:3,deltaVertical:5,preventScroll:!1,lockAxis:!0,touch:!0,mouse:!0},b);var c=[],d=!1,e=function(){d=!0},f=function(a){d=!1,h(a)},g=function(a){d&&(a.changedTouches=[{clientX:a.clientX,clientY:a.clientY}],i(a))};b.mouse&&(a.addEventListener('mousedown',e),a.addEventListener('mouseup',f),a.addEventListener('mousemove',g));var h=function(d){var e=Math.abs,f=Math.max,g=Math.min;if(c.length){for(var h='function'==typeof TouchEvent&&d instanceof TouchEvent,j=[],k=[],l={top:!1,right:!1,bottom:!1,left:!1},m=0;m<c.length;m++)j.push(c[m].x),k.push(c[m].y);var i=j[0],n=j[j.length-1],o=k[0],p=k[k.length-1],q={x:[i,n],y:[o,p]};if(1<c.length){var r={detail:_extends({touch:h},q)},s=new CustomEvent('swiperelease',r);a.dispatchEvent(s)}var t=j[0]-j[j.length-1],u='none';u=0<t?'left':'right';var v,w=g.apply(Math,j),x=f.apply(Math,j);if(e(t)>=b.minHorizontal&&('left'==u?(v=e(w-j[j.length-1]),v<=b.deltaHorizontal&&(l.left=!0)):'right'==u?(v=e(x-j[j.length-1]),v<=b.deltaHorizontal&&(l.right=!0)):void 0),t=k[0]-k[k.length-1],u='none',u=0<t?'top':'bottom',w=g.apply(Math,k),x=f.apply(Math,k),e(t)>=b.minVertical&&('top'==u?(v=e(w-k[k.length-1]),v<=b.deltaVertical&&(l.top=!0)):'bottom'==u?(v=e(x-k[k.length-1]),v<=b.deltaVertical&&(l.bottom=!0)):void 0),(c=[],l.top||l.right||l.bottom||l.left)){b.lockAxis&&((l.left||l.right)&&e(i-n)>e(o-p)?l.top=l.bottom=!1:(l.top||l.bottom)&&e(i-n)<e(o-p)&&(l.left=l.right=!1));var y={detail:_extends({directions:l,touch:h},q)},z=new CustomEvent('swipe',y);a.dispatchEvent(z)}else{var A=new CustomEvent('swipecancel',{detail:_extends({touch:h},q)});a.dispatchEvent(A)}}},i=function(d){b.preventScroll&&d.preventDefault();var e=d.changedTouches[0];if(c.push({x:e.clientX,y:e.clientY}),1<c.length){var f=c[0].x,g=c[c.length-1].x,h=c[0].y,i=c[c.length-1].y,j={detail:{x:[f,g],y:[h,i],touch:'function'==typeof TouchEvent&&d instanceof TouchEvent}},k=new CustomEvent('swiping',j);a.dispatchEvent(k)}},j=!1;try{var k=Object.defineProperty({},'passive',{get:function(){j={passive:!b.preventScroll}}});window.addEventListener('testPassive',null,k),window.removeEventListener('testPassive',null,k)}catch(a){}return b.touch&&(a.addEventListener('touchmove',i,j),a.addEventListener('touchend',h)),{off:function(){a.removeEventListener('touchmove',i,j),a.removeEventListener('touchend',h),a.removeEventListener('mousedown',e),a.removeEventListener('mouseup',f),a.removeEventListener('mousemove',g)}}}}; true&&'undefined'!=typeof module.exports?(module.exports=SwipeListener,module.exports.default=SwipeListener): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return SwipeListener}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;

/***/ })

},[["./assets/js/index_no_critical.js","runtime","vendors~app_no_critical~buy~index_no_critical"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2luZGV4X25vX2NyaXRpY2FsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4X25vX2NyaXRpY2FsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL2dsb2JhbC9fZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2lwZS1saXN0ZW5lci9kaXN0L3N3aXBlLWxpc3RlbmVyLm1pbi5qcyJdLCJuYW1lcyI6WyJHYWxsZXJ5Iiwic2VsZWN0b3IiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsaXN0ZW5lciIsIlN3aXBlTGlzdGVuZXIiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3RpdmVQb3MiLCJpbml0IiwiYXJyb3dzIiwiYWRkQXJyb3dzIiwiYXJyb3dQcmV2IiwiYXJyb3dOZXh0IiwiZXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXYiLCJiaW5kIiwibmV4dCIsImUiLCJkaXJlY3Rpb25zIiwiZGV0YWlsIiwibGVmdCIsInJpZ2h0IiwiZm9yRWFjaCIsImltYWdlIiwiaW5kZXgiLCJkaXNwbGFjZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJsZW5ndGgiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBSUEsK0RBQUosQ0FBWSxpQkFBWjtBQUNBLElBQUlBLCtEQUFKLENBQVksa0JBQVosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztJQUVNQSxPOzs7QUFDRixtQkFBWUMsUUFBWixFQUFxQjtBQUFBOztBQUNqQixTQUFLQyxTQUFMLEdBQWlCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJILFFBQXZCLENBQWpCO0FBQ0EsU0FBS0ksUUFBTCxHQUFnQkMscURBQWEsQ0FBQyxLQUFLSixTQUFOLENBQTdCO0FBQ0EsU0FBS0ssS0FBTCxHQUFhSixRQUFRLENBQUNLLGdCQUFULENBQTBCUCxRQUFRLEdBQUMsaUJBQW5DLENBQWI7QUFFQSxTQUFLUSxTQUFMLEdBQWlCLENBQWpCO0FBR0EsU0FBS0MsSUFBTDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtGLE1BQUwsQ0FBWSxDQUFaLENBQWpCO0FBQ0EsU0FBS0csU0FBTCxHQUFpQixLQUFLSCxNQUFMLENBQVksQ0FBWixDQUFqQjtBQUVBLFNBQUtJLE1BQUw7QUFDSDs7Ozs2QkFFUTtBQUFBOztBQUNMLFdBQUtGLFNBQUwsQ0FBZUcsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsS0FBS0MsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixDQUF6QztBQUVBLFdBQUtKLFNB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LCJmaWxlIjoiaW5kZXhfbm9fY3JpdGljYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL2Nzcy9pbmRleF9ub19jcml0aWNhbC5zY3NzJztcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4vbW9kdWxlcy9nbG9iYWwvX2dhbGxlcnlcIjtcclxuXHJcbm5ldyBHYWxsZXJ5KCcuYmlrZXNfX2dhbGxlcnknKTtcclxubmV3IEdhbGxlcnkoJy5yZXZpZXdzX19yZXZpZXcnKTsiLCJpbXBvcnQgU3dpcGVMaXN0ZW5lciBmcm9tICdzd2lwZS1saXN0ZW5lcic7XHJcblxyXG5jbGFzcyBHYWxsZXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKXtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBTd2lwZUxpc3RlbmVyKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcisnIC5nYWxsZXJ5X19pdGVtJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9zID0gMDtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuYXJyb3dzID0gdGhpcy5hZGRBcnJvd3MoKTtcclxuICAgICAgICB0aGlzLmFycm93UHJldiA9IHRoaXMuYXJyb3dzWzBdO1xyXG4gICAgICAgIHRoaXMuYXJyb3dOZXh0ID0gdGhpcy5hcnJvd3NbMV07XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuYXJyb3dQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmV2LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmFycm93TmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubmV4dC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGUnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IGUuZGV0YWlsLmRpcmVjdGlvbnM7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9ucy5sZWZ0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9ucy5yaWdodClcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2hlaWdodDogJyt0aGlzLmltYWdlc1swXS5jbGllbnRIZWlnaHQrJ3B4OycpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGltYWdlLCBpbmRleCk9PntcclxuICAgICAgICAgICAgbGV0IGRpc3BsYWNlbWVudCA9IGluZGV4KjEwMDtcclxuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEFycm93cygpe1xyXG4gICAgICAgIGxldCBhcnJvd1ByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhcnJvd1ByZXYuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3cnKTtcclxuICAgICAgICBhcnJvd1ByZXYuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3ctLXByZXYnKTtcclxuICAgICAgICBsZXQgYXJyb3dOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYXJyb3dOZXh0LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnlfX2Fycm93Jyk7XHJcbiAgICAgICAgYXJyb3dOZXh0LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnlfX2Fycm93LS1uZXh0Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFycm93UHJldik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3dOZXh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFthcnJvd1ByZXYsIGFycm93TmV4dF07XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpe1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVBvcyA9PT0gdGhpcy5pdGVtcy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcyA9IC0xO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpc3BsYWNlbWVudCA9IChpbmRleCAtIHRoaXMuYWN0aXZlUG9zIC0gMSkqMTAwO1xyXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9zICs9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldigpe1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVBvcyA9PT0gMClcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3MgPSB0aGlzLml0ZW1zLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSAoaW5kZXggLSB0aGlzLmFjdGl2ZVBvcyArIDEpKjEwMDtcclxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVBvcyAtPSAxO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBzbG9wcHlBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zbG9wcHktYXJyYXktbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSBzbG9wcHlBcnJheU1ldGhvZCgnZm9yRWFjaCcpID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSA6IFtdLmZvckVhY2g7XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbnZhciBwdXNoID0gW10ucHVzaDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuICBmb3JFYWNoOiBjcmVhdGVNZXRob2QoMCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29tZVxuICBzb21lOiBjcmVhdGVNZXRob2QoMyksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhcbiAgZmluZEluZGV4OiBjcmVhdGVNZXRob2QoNilcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSwgbGVuZ3RoKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIG5ldyAoQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDKShsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoKTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2FycmF5XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICFtZXRob2QgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO3ZhciBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihhKXtmb3IodmFyIGIsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspZm9yKHZhciBkIGluIGI9YXJndW1lbnRzW2NdLGIpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsZCkmJihhW2RdPWJbZF0pO3JldHVybiBhfSxTd2lwZUxpc3RlbmVyPWZ1bmN0aW9uKGEsYil7aWYoYSl7J3VuZGVmaW5lZCchPXR5cGVvZiB3aW5kb3cmJmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGIpe2I9Ynx8e2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtyZXR1cm4gYy5pbml0Q3VzdG9tRXZlbnQoYSxiLmJ1YmJsZXMsYi5jYW5jZWxhYmxlLGIuZGV0YWlsKSxjfXJldHVybidmdW5jdGlvbichPXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQmJnZvaWQoYS5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZSx3aW5kb3cuQ3VzdG9tRXZlbnQ9YSl9KCk7Ynx8KGI9e30pLGI9X2V4dGVuZHMoe30se21pbkhvcml6b250YWw6MTAsbWluVmVydGljYWw6MTAsZGVsdGFIb3Jpem9udGFsOjMsZGVsdGFWZXJ0aWNhbDo1LHByZXZlbnRTY3JvbGw6ITEsbG9ja0F4aXM6ITAsdG91Y2g6ITAsbW91c2U6ITB9LGIpO3ZhciBjPVtdLGQ9ITEsZT1mdW5jdGlvbigpe2Q9ITB9LGY9ZnVuY3Rpb24oYSl7ZD0hMSxoKGEpfSxnPWZ1bmN0aW9uKGEpe2QmJihhLmNoYW5nZWRUb3VjaGVzPVt7Y2xpZW50WDphLmNsaWVudFgsY2xpZW50WTphLmNsaWVudFl9XSxpKGEpKX07Yi5tb3VzZSYmKGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJyxlKSxhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLGYpLGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyxnKSk7dmFyIGg9ZnVuY3Rpb24oZCl7dmFyIGU9TWF0aC5hYnMsZj1NYXRoLm1heCxnPU1hdGgubWluO2lmKGMubGVuZ3RoKXtmb3IodmFyIGg9J2Z1bmN0aW9uJz09dHlwZW9mIFRvdWNoRXZlbnQmJmQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50LGo9W10saz1bXSxsPXt0b3A6ITEscmlnaHQ6ITEsYm90dG9tOiExLGxlZnQ6ITF9LG09MDttPGMubGVuZ3RoO20rKylqLnB1c2goY1ttXS54KSxrLnB1c2goY1ttXS55KTt2YXIgaT1qWzBdLG49altqLmxlbmd0aC0xXSxvPWtbMF0scD1rW2subGVuZ3RoLTFdLHE9e3g6W2ksbl0seTpbbyxwXX07aWYoMTxjLmxlbmd0aCl7dmFyIHI9e2RldGFpbDpfZXh0ZW5kcyh7dG91Y2g6aH0scSl9LHM9bmV3IEN1c3RvbUV2ZW50KCdzd2lwZXJlbGVhc2UnLHIpO2EuZGlzcGF0Y2hFdmVudChzKX12YXIgdD1qWzBdLWpbai5sZW5ndGgtMV0sdT0nbm9uZSc7dT0wPHQ/J2xlZnQnOidyaWdodCc7dmFyIHYsdz1nLmFwcGx5KE1hdGgsaikseD1mLmFwcGx5KE1hdGgsaik7aWYoZSh0KT49Yi5taW5Ib3Jpem9udGFsJiYoJ2xlZnQnPT11Pyh2PWUody1qW2oubGVuZ3RoLTFdKSx2PD1iLmRlbHRhSG9yaXpvbnRhbCYmKGwubGVmdD0hMCkpOidyaWdodCc9PXU/KHY9ZSh4LWpbai5sZW5ndGgtMV0pLHY8PWIuZGVsdGFIb3Jpem9udGFsJiYobC5yaWdodD0hMCkpOnZvaWQgMCksdD1rWzBdLWtbay5sZW5ndGgtMV0sdT0nbm9uZScsdT0wPHQ/J3RvcCc6J2JvdHRvbScsdz1nLmFwcGx5KE1hdGgsaykseD1mLmFwcGx5KE1hdGgsayksZSh0KT49Yi5taW5WZXJ0aWNhbCYmKCd0b3AnPT11Pyh2PWUody1rW2subGVuZ3RoLTFdKSx2PD1iLmRlbHRhVmVydGljYWwmJihsLnRvcD0hMCkpOidib3R0b20nPT11Pyh2PWUoeC1rW2subGVuZ3RoLTFdKSx2PD1iLmRlbHRhVmVydGljYWwmJihsLmJvdHRvbT0hMCkpOnZvaWQgMCksKGM9W10sbC50b3B8fGwucmlnaHR8fGwuYm90dG9tfHxsLmxlZnQpKXtiLmxvY2tBeGlzJiYoKGwubGVmdHx8bC5yaWdodCkmJmUoaS1uKT5lKG8tcCk/bC50b3A9bC5ib3R0b209ITE6KGwudG9wfHxsLmJvdHRvbSkmJmUoaS1uKTxlKG8tcCkmJihsLmxlZnQ9bC5yaWdodD0hMSkpO3ZhciB5PXtkZXRhaWw6X2V4dGVuZHMoe2RpcmVjdGlvbnM6bCx0b3VjaDpofSxxKX0sej1uZXcgQ3VzdG9tRXZlbnQoJ3N3aXBlJyx5KTthLmRpc3BhdGNoRXZlbnQoeil9ZWxzZXt2YXIgQT1uZXcgQ3VzdG9tRXZlbnQoJ3N3aXBlY2FuY2VsJyx7ZGV0YWlsOl9leHRlbmRzKHt0b3VjaDpofSxxKX0pO2EuZGlzcGF0Y2hFdmVudChBKX19fSxpPWZ1bmN0aW9uKGQpe2IucHJldmVudFNjcm9sbCYmZC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBlPWQuY2hhbmdlZFRvdWNoZXNbMF07aWYoYy5wdXNoKHt4OmUuY2xpZW50WCx5OmUuY2xpZW50WX0pLDE8Yy5sZW5ndGgpe3ZhciBmPWNbMF0ueCxnPWNbYy5sZW5ndGgtMV0ueCxoPWNbMF0ueSxpPWNbYy5sZW5ndGgtMV0ueSxqPXtkZXRhaWw6e3g6W2YsZ10seTpbaCxpXSx0b3VjaDonZnVuY3Rpb24nPT10eXBlb2YgVG91Y2hFdmVudCYmZCBpbnN0YW5jZW9mIFRvdWNoRXZlbnR9fSxrPW5ldyBDdXN0b21FdmVudCgnc3dpcGluZycsaik7YS5kaXNwYXRjaEV2ZW50KGspfX0saj0hMTt0cnl7dmFyIGs9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCdwYXNzaXZlJyx7Z2V0OmZ1bmN0aW9uKCl7aj17cGFzc2l2ZTohYi5wcmV2ZW50U2Nyb2xsfX19KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLG51bGwsayksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJyxudWxsLGspfWNhdGNoKGEpe31yZXR1cm4gYi50b3VjaCYmKGEuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJyxpLGopLGEuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLGgpKSx7b2ZmOmZ1bmN0aW9uKCl7YS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLGksaiksYS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsaCksYS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLGUpLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsZiksYS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLGcpfX19fTsndW5kZWZpbmVkJyE9dHlwZW9mIG1vZHVsZSYmJ3VuZGVmaW5lZCchPXR5cGVvZiBtb2R1bGUuZXhwb3J0cz8obW9kdWxlLmV4cG9ydHM9U3dpcGVMaXN0ZW5lcixtb2R1bGUuZXhwb3J0cy5kZWZhdWx0PVN3aXBlTGlzdGVuZXIpOidmdW5jdGlvbic9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIFN3aXBlTGlzdGVuZXJ9KTp3aW5kb3cuU3dpcGVMaXN0ZW5lcj1Td2lwZUxpc3RlbmVyOyJdLCJzb3VyY2VSb290IjoiIn0=