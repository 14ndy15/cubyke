(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./assets/css/index.scss":
/*!*******************************!*\
  !*** ./assets/css/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.scss */ "./assets/css/index.scss");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_global_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/global/_gallery */ "./assets/js/modules/global/_gallery.js");


new _modules_global_gallery__WEBPACK_IMPORTED_MODULE_1__["default"]('.bikes__gallery');

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

},[["./assets/js/index.js","runtime","vendors~buy~index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL2dsb2JhbC9fZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dpcGUtbGlzdGVuZXIvZGlzdC9zd2lwZS1saXN0ZW5lci5taW4uanMiXSwibmFtZXMiOlsiR2FsbGVyeSIsInNlbGVjdG9yIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGlzdGVuZXIiLCJTd2lwZUxpc3RlbmVyIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aXZlUG9zIiwiaW5pdCIsImFycm93cyIsImFkZEFycm93cyIsImFycm93UHJldiIsImFycm93TmV4dCIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2IiwiYmluZCIsIm5leHQiLCJlIiwiZGlyZWN0aW9ucyIsImRldGFpbCIsImxlZnQiLCJyaWdodCIsImZvckVhY2giLCJpbWFnZSIsImluZGV4IiwiZGlzcGxhY2VtZW50Iiwic2V0QXR0cmlidXRlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwibGVuZ3RoIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBLElBQUlBLCtEQUFKLENBQVksaUJBQVosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztJQUVNQSxPOzs7QUFDRixtQkFBWUMsUUFBWixFQUFxQjtBQUFBOztBQUNqQixTQUFLQyxTQUFMLEdBQWlCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJILFFBQXZCLENBQWpCO0FBQ0EsU0FBS0ksUUFBTCxHQUFnQkMscURBQWEsQ0FBQyxLQUFLSixTQUFOLENBQTdCO0FBQ0EsU0FBS0ssS0FBTCxHQUFhSixRQUFRLENBQUNLLGdCQUFULENBQTBCUCxRQUFRLEdBQUMsaUJBQW5DLENBQWI7QUFFQSxTQUFLUSxTQUFMLEdBQWlCLENBQWpCO0FBR0EsU0FBS0MsSUFBTDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxTQUFMLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtGLE1BQUwsQ0FBWSxDQUFaLENBQWpCO0FBQ0EsU0FBS0csU0FBTCxHQUFpQixLQUFLSCxNQUFMLENBQVksQ0FBWixDQUFqQjtBQUVBLFNBQUtJLE1BQUw7QUFDSDs7Ozs2QkFFUTtBQUFBOztBQUNMLFdBQUtGLFNBQUwsQ0FBZUcsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsS0FBS0MsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixDQUF6QztBQUVBLFdBQUtKLFNBQUwsQ0FBZUUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsS0FBS0csSUFBTCxDQUFVRCxJQUFWLENBQWUsSUFBZixDQUF6QztBQUVBLFdBQUtoQixTQUFMLENBQWVjLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFVBQUNJLENBQUQsRUFBTztBQUM1QyxZQUFJQyxVQUFVLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxVQUExQjtBQUVBLFlBQUlBLFVBQVUsQ0FBQ0UsSUFBZixFQUNJLEtBQUksQ0FBQ0osSUFBTDtBQUVKLFlBQUlFLFVBQVUsQ0FBQ0csS0FBZixFQUNJLEtBQUksQ0FBQ1AsSUFBTDtBQUNQLE9BUkQ7QUFTSDs7OzJCQUVLO0FBQ0Y7QUFFQSxXQUFLVixLQUFMLENBQVdrQixPQUFYLENBQW1CLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFnQjtBQUMvQixZQUFJQyxZQUFZLEdBQUdELEtBQUssR0FBQyxHQUF6QjtBQUNBRCxhQUFLLENBQUNHLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEIsMkJBQTJCRCxZQUEzQixHQUEwQyxLQUF0RTtBQUNILE9BSEQ7QUFNSDs7O2dDQUVVO0FBQ1AsVUFBSWYsU0FBUyxHQUFHVixRQUFRLENBQUMyQixhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0FqQixlQUFTLENBQUNrQixTQUFWLENBQW9CQyxHQUFwQixDQUF3QixnQkFBeEI7QUFDQW5CLGVBQVMsQ0FBQ2tCLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLHNCQUF4QjtBQUNBLFVBQUlsQixTQUFTLEdBQUdYLFFBQVEsQ0FBQzJCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQWhCLGVBQVMsQ0FBQ2lCLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLGdCQUF4QjtBQUNBbEIsZUFBUyxDQUFDaUIsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0Isc0JBQXhCO0FBRUEsV0FBSzlCLFNBQUwsQ0FBZStCLFdBQWYsQ0FBMkJwQixTQUEzQjtBQUNBLFdBQUtYLFNBQUwsQ0FBZStCLFdBQWYsQ0FBMkJuQixTQUEzQjtBQUVBLGFBQU8sQ0FBQ0QsU0FBRCxFQUFZQyxTQUFaLENBQVA7QUFDSDs7OzJCQUVLO0FBQUE7O0FBQ0YsVUFBSSxLQUFLTCxTQUFMLEtBQW1CLEtBQUtGLEtBQUwsQ0FBVzJCLE1BQVgsR0FBb0IsQ0FBM0MsRUFDSSxLQUFLekIsU0FBTCxHQUFpQixDQUFDLENBQWxCO0FBRUosV0FBS0YsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQixVQUFDVSxJQUFELEVBQU9SLEtBQVAsRUFBZTtBQUU5QixZQUFJQyxZQUFZLEdBQUcsQ0FBQ0QsS0FBSyxHQUFHLE1BQUksQ0FBQ2xCLFNBQWIsR0FBeUIsQ0FBMUIsSUFBNkIsR0FBaEQ7QUFDQTBCLFlBQUksQ0FBQ04sWUFBTCxDQUFrQixPQUFsQixFQUEyQiwyQkFBMkJELFlBQTNCLEdBQTBDLEtBQXJFO0FBQ0gsT0FKRDtBQU1BLFdBQUtuQixTQUFMLElBQWtCLENBQWxCO0FBQ0g7OzsyQkFFSztBQUFBOztBQUNGLFVBQUksS0FBS0EsU0FBTCxLQUFtQixDQUF2QixFQUNJLEtBQUtBLFNBQUwsR0FBaUIsS0FBS0YsS0FBTCxDQUFXMkIsTUFBNUI7QUFFSixXQUFLM0IsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQixVQUFDVSxJQUFELEVBQU9SLEtBQVAsRUFBZTtBQUU5QixZQUFJQyxZQUFZLEdBQUcsQ0FBQ0QsS0FBSyxHQUFHLE1BQUksQ0FBQ2xCLFNBQWIsR0FBeUIsQ0FBMUIsSUFBNkIsR0FBaEQ7QUFDQTBCLFlBQUksQ0FBQ04sWUFBTCxDQUFrQixPQUFsQixFQUEyQiwyQkFBMkJELFlBQTNCLEdBQTBDLEtBQXJFO0FBQ0gsT0FKRDtBQU1BLFdBQUtuQixTQUFMLElBQWtCLENBQWxCO0FBRUg7Ozs7OztBQUdVVCxzRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4RkEsZ0VBQWEsd0NBQXdDLGNBQWMsbUJBQW1CLHlGQUF5RixTQUFTLDZCQUE2QixNQUFNLHVDQUF1QyxnQkFBZ0IsTUFBTSx3Q0FBd0MsMENBQTBDLDhEQUE4RCwyR0FBMkcsR0FBRyxRQUFRLGVBQWUsRUFBRSxpSEFBaUgsSUFBSSwyQkFBMkIsS0FBSyxlQUFlLFVBQVUsZUFBZSx1QkFBdUIsb0NBQW9DLFNBQVMsK0dBQStHLGtCQUFrQixxQ0FBcUMsYUFBYSw4RUFBOEUsa0NBQWtDLEtBQUssV0FBVyxrQ0FBa0MscURBQXFELGlCQUFpQixlQUFlLE9BQU8saUJBQWlCLFFBQVEsSUFBSSxxQ0FBcUMsbUJBQW1CLGtDQUFrQyxxQkFBcUIsMENBQTBDLDZjQUE2Yyx1SEFBdUgsT0FBTyxpQkFBaUIscUJBQXFCLElBQUksOEJBQThCLG1CQUFtQixLQUFLLHFDQUFxQyxpQkFBaUIsUUFBUSxJQUFJLEVBQUUscUJBQXFCLGVBQWUsb0NBQW9DLDBCQUEwQixXQUFXLHdCQUF3QixjQUFjLDZEQUE2RCxRQUFRLDhFQUE4RSxnQ0FBZ0Msb0JBQW9CLE1BQU0sSUFBSSw4QkFBOEIsWUFBWSxlQUFlLEdBQUcsMkJBQTJCLEVBQUUsK0ZBQStGLFVBQVUsd0ZBQXdGLGVBQWUsNExBQTRMLEtBQTBCLHlHQUF5RyxLQUFxQyxDQUFDLGlDQUFPLEVBQUUsbUNBQUMsV0FBVyxxQkFBcUI7QUFBQSxvR0FBQyxDQUFDLFNBQWtDLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4uL2Nzcy9pbmRleC5zY3NzJztcclxuXHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuL21vZHVsZXMvZ2xvYmFsL19nYWxsZXJ5XCI7XHJcblxyXG5uZXcgR2FsbGVyeSgnLmJpa2VzX19nYWxsZXJ5Jyk7XHJcbiIsImltcG9ydCBTd2lwZUxpc3RlbmVyIGZyb20gJ3N3aXBlLWxpc3RlbmVyJztcclxuXHJcbmNsYXNzIEdhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3Ipe1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IFN3aXBlTGlzdGVuZXIodGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKycgLmdhbGxlcnlfX2l0ZW0nKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5hcnJvd3MgPSB0aGlzLmFkZEFycm93cygpO1xyXG4gICAgICAgIHRoaXMuYXJyb3dQcmV2ID0gdGhpcy5hcnJvd3NbMF07XHJcbiAgICAgICAgdGhpcy5hcnJvd05leHQgPSB0aGlzLmFycm93c1sxXTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJvd1ByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXYuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJyb3dOZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5uZXh0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzd2lwZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gZS5kZXRhaWwuZGlyZWN0aW9ucztcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLmxlZnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLnJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OiAnK3RoaXMuaW1hZ2VzWzBdLmNsaWVudEhlaWdodCsncHg7Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gaW5kZXgqMTAwO1xyXG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXJyb3dzKCl7XHJcbiAgICAgICAgbGV0IGFycm93UHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdycpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdy0tcHJldicpO1xyXG4gICAgICAgIGxldCBhcnJvd05leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3cnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3ctLW5leHQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3dQcmV2KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd05leHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gW2Fycm93UHJldiwgYXJyb3dOZXh0XTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9zID0gLTE7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gKGluZGV4IC0gdGhpcy5hY3RpdmVQb3MgLSAxKSoxMDA7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpc3BsYWNlbWVudCA9IChpbmRleCAtIHRoaXMuYWN0aXZlUG9zICsgMSkqMTAwO1xyXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9zIC09IDE7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5OyIsIid1c2Ugc3RyaWN0Jzt2YXIgX2V4dGVuZHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWZvcih2YXIgZCBpbiBiPWFyZ3VtZW50c1tjXSxiKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLGQpJiYoYVtkXT1iW2RdKTtyZXR1cm4gYX0sU3dpcGVMaXN0ZW5lcj1mdW5jdGlvbihhLGIpe2lmKGEpeyd1bmRlZmluZWQnIT10eXBlb2Ygd2luZG93JiZmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiKXtiPWJ8fHtidWJibGVzOiExLGNhbmNlbGFibGU6ITEsZGV0YWlsOnZvaWQgMH07dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7cmV0dXJuIGMuaW5pdEN1c3RvbUV2ZW50KGEsYi5idWJibGVzLGIuY2FuY2VsYWJsZSxiLmRldGFpbCksY31yZXR1cm4nZnVuY3Rpb24nIT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50JiZ2b2lkKGEucHJvdG90eXBlPXdpbmRvdy5FdmVudC5wcm90b3R5cGUsd2luZG93LkN1c3RvbUV2ZW50PWEpfSgpO2J8fChiPXt9KSxiPV9leHRlbmRzKHt9LHttaW5Ib3Jpem9udGFsOjEwLG1pblZlcnRpY2FsOjEwLGRlbHRhSG9yaXpvbnRhbDozLGRlbHRhVmVydGljYWw6NSxwcmV2ZW50U2Nyb2xsOiExLGxvY2tBeGlzOiEwLHRvdWNoOiEwLG1vdXNlOiEwfSxiKTt2YXIgYz1bXSxkPSExLGU9ZnVuY3Rpb24oKXtkPSEwfSxmPWZ1bmN0aW9uKGEpe2Q9ITEsaChhKX0sZz1mdW5jdGlvbihhKXtkJiYoYS5jaGFuZ2VkVG91Y2hlcz1be2NsaWVudFg6YS5jbGllbnRYLGNsaWVudFk6YS5jbGllbnRZfV0saShhKSl9O2IubW91c2UmJihhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsZSksYS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJyxmKSxhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsZykpO3ZhciBoPWZ1bmN0aW9uKGQpe3ZhciBlPU1hdGguYWJzLGY9TWF0aC5tYXgsZz1NYXRoLm1pbjtpZihjLmxlbmd0aCl7Zm9yKHZhciBoPSdmdW5jdGlvbic9PXR5cGVvZiBUb3VjaEV2ZW50JiZkIGluc3RhbmNlb2YgVG91Y2hFdmVudCxqPVtdLGs9W10sbD17dG9wOiExLHJpZ2h0OiExLGJvdHRvbTohMSxsZWZ0OiExfSxtPTA7bTxjLmxlbmd0aDttKyspai5wdXNoKGNbbV0ueCksay5wdXNoKGNbbV0ueSk7dmFyIGk9alswXSxuPWpbai5sZW5ndGgtMV0sbz1rWzBdLHA9a1trLmxlbmd0aC0xXSxxPXt4OltpLG5dLHk6W28scF19O2lmKDE8Yy5sZW5ndGgpe3ZhciByPXtkZXRhaWw6X2V4dGVuZHMoe3RvdWNoOmh9LHEpfSxzPW5ldyBDdXN0b21FdmVudCgnc3dpcGVyZWxlYXNlJyxyKTthLmRpc3BhdGNoRXZlbnQocyl9dmFyIHQ9alswXS1qW2oubGVuZ3RoLTFdLHU9J25vbmUnO3U9MDx0PydsZWZ0JzoncmlnaHQnO3ZhciB2LHc9Zy5hcHBseShNYXRoLGopLHg9Zi5hcHBseShNYXRoLGopO2lmKGUodCk+PWIubWluSG9yaXpvbnRhbCYmKCdsZWZ0Jz09dT8odj1lKHctaltqLmxlbmd0aC0xXSksdjw9Yi5kZWx0YUhvcml6b250YWwmJihsLmxlZnQ9ITApKToncmlnaHQnPT11Pyh2PWUoeC1qW2oubGVuZ3RoLTFdKSx2PD1iLmRlbHRhSG9yaXpvbnRhbCYmKGwucmlnaHQ9ITApKTp2b2lkIDApLHQ9a1swXS1rW2subGVuZ3RoLTFdLHU9J25vbmUnLHU9MDx0Pyd0b3AnOidib3R0b20nLHc9Zy5hcHBseShNYXRoLGspLHg9Zi5hcHBseShNYXRoLGspLGUodCk+PWIubWluVmVydGljYWwmJigndG9wJz09dT8odj1lKHcta1trLmxlbmd0aC0xXSksdjw9Yi5kZWx0YVZlcnRpY2FsJiYobC50b3A9ITApKTonYm90dG9tJz09dT8odj1lKHgta1trLmxlbmd0aC0xXSksdjw9Yi5kZWx0YVZlcnRpY2FsJiYobC5ib3R0b209ITApKTp2b2lkIDApLChjPVtdLGwudG9wfHxsLnJpZ2h0fHxsLmJvdHRvbXx8bC5sZWZ0KSl7Yi5sb2NrQXhpcyYmKChsLmxlZnR8fGwucmlnaHQpJiZlKGktbik+ZShvLXApP2wudG9wPWwuYm90dG9tPSExOihsLnRvcHx8bC5ib3R0b20pJiZlKGktbik8ZShvLXApJiYobC5sZWZ0PWwucmlnaHQ9ITEpKTt2YXIgeT17ZGV0YWlsOl9leHRlbmRzKHtkaXJlY3Rpb25zOmwsdG91Y2g6aH0scSl9LHo9bmV3IEN1c3RvbUV2ZW50KCdzd2lwZScseSk7YS5kaXNwYXRjaEV2ZW50KHopfWVsc2V7dmFyIEE9bmV3IEN1c3RvbUV2ZW50KCdzd2lwZWNhbmNlbCcse2RldGFpbDpfZXh0ZW5kcyh7dG91Y2g6aH0scSl9KTthLmRpc3BhdGNoRXZlbnQoQSl9fX0saT1mdW5jdGlvbihkKXtiLnByZXZlbnRTY3JvbGwmJmQucHJldmVudERlZmF1bHQoKTt2YXIgZT1kLmNoYW5nZWRUb3VjaGVzWzBdO2lmKGMucHVzaCh7eDplLmNsaWVudFgseTplLmNsaWVudFl9KSwxPGMubGVuZ3RoKXt2YXIgZj1jWzBdLngsZz1jW2MubGVuZ3RoLTFdLngsaD1jWzBdLnksaT1jW2MubGVuZ3RoLTFdLnksaj17ZGV0YWlsOnt4OltmLGddLHk6W2gsaV0sdG91Y2g6J2Z1bmN0aW9uJz09dHlwZW9mIFRvdWNoRXZlbnQmJmQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50fX0saz1uZXcgQ3VzdG9tRXZlbnQoJ3N3aXBpbmcnLGopO2EuZGlzcGF0Y2hFdmVudChrKX19LGo9ITE7dHJ5e3ZhciBrPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwncGFzc2l2ZScse2dldDpmdW5jdGlvbigpe2o9e3Bhc3NpdmU6IWIucHJldmVudFNjcm9sbH19fSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJyxudWxsLGspLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsbnVsbCxrKX1jYXRjaChhKXt9cmV0dXJuIGIudG91Y2gmJihhLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsaSxqKSxhLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJyxoKSkse29mZjpmdW5jdGlvbigpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJyxpLGopLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLGgpLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJyxlKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLGYpLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyxnKX19fX07J3VuZGVmaW5lZCchPXR5cGVvZiBtb2R1bGUmJid1bmRlZmluZWQnIT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/KG1vZHVsZS5leHBvcnRzPVN3aXBlTGlzdGVuZXIsbW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1Td2lwZUxpc3RlbmVyKTonZnVuY3Rpb24nPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxmdW5jdGlvbigpe3JldHVybiBTd2lwZUxpc3RlbmVyfSk6d2luZG93LlN3aXBlTGlzdGVuZXI9U3dpcGVMaXN0ZW5lcjsiXSwic291cmNlUm9vdCI6IiJ9