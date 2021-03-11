require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/annar/esm/_util/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/_util/index.js ***!
  \***********************************************/
/*! exports provided: tuple, tupleNum, guid, throttle, mergeStyle, twoDimensional, flat, isObjectValueEqual, isArrayValueEqual, deepClone, sync, to */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to */ "./node_modules/annar/esm/_util/to.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "to", function() { return _to__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sync */ "./node_modules/annar/esm/_util/sync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sync", function() { return _sync__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./node_modules/annar/esm/_util/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["tuple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tupleNum", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["tupleNum"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/annar/esm/_util/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["guid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["throttle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyle", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["mergeStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "twoDimensional", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["twoDimensional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flat", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["flat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectValueEqual", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["isObjectValueEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayValueEqual", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["isArrayValueEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__["deepClone"]; });







/***/ }),

/***/ "./node_modules/annar/esm/_util/sync.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/_util/sync.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var sync = function sync(fn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return new Promise(function (resolve, reject) {
    var obj = _objectSpread({}, args[0]);

    var success = obj.success;

    obj.success = function () {
      for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }

      success && success.apply.apply(success, [this].concat(params));
      var r = params.length > 1 ? params : params[0];
      resolve(r);
    };

    var fail = obj.fail;

    obj.fail = function () {
      for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
      }

      fail && fail.apply.apply(fail, [this].concat(params));
      var r = params.length > 1 ? params : params[0];
      reject(r);
    };

    fn(obj);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sync);

/***/ }),

/***/ "./node_modules/annar/esm/_util/to.js":
/*!********************************************!*\
  !*** ./node_modules/annar/esm/_util/to.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
var to = function to(promise) {
  // eslint-disable-next-line no-prototype-builtins
  if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
    return new Promise(function (resolve, reject) {
      reject(new Error('requires promises as the param'));
    })["catch"](function (err) {
      return [err, null];
    });
  }

  return promise.then(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return [null].concat(args);
  })["catch"](function (err) {
    return [err];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (to);

/***/ }),

/***/ "./node_modules/annar/esm/_util/type.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/_util/type.js ***!
  \**********************************************/
/*! exports provided: tuple, tupleNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return tuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tupleNum", function() { return tupleNum; });
// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};
var tupleNum = function tupleNum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};

/***/ }),

/***/ "./node_modules/annar/esm/_util/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/_util/utils.js ***!
  \***********************************************/
/*! exports provided: guid, throttle, mergeStyle, twoDimensional, flat, isObjectValueEqual, isArrayValueEqual, deepClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guid", function() { return guid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyle", function() { return mergeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twoDimensional", function() { return twoDimensional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flat", function() { return flat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectValueEqual", function() { return isObjectValueEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayValueEqual", function() { return isArrayValueEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var guid = function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}; // 如果你想禁用第一次首先执行的话，传递{leading: false}，还有如果你想禁用最后一次执行的话，传递{trailing: false}。
// 默认是 第一次首先执行并且最后一次会执行，相当于 {leading: true, trailing: true}

var throttle = function throttle(func, wait, options) {
  var previous = 0;
  var timeout = null;
  var context;
  var args;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this; // eslint-disable-next-line prefer-rest-params

    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  return throttled;
};
var mergeStyle = function mergeStyle(target, style) {
  var newTarget = target ? _objectSpread({}, target) : {};

  for (var _key in style) {
    if (Object.prototype.hasOwnProperty.call(style, _key)) {
      var element = style[_key];

      if (element || element === 0) {
        newTarget[_key] = element;
      }
    }
  }

  return newTarget;
};
var twoDimensional = function twoDimensional(data, columns, span) {
  var standard = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 24;
  var two = [];
  var spanTwo = [];
  var colSpan = standard / columns;

  if (!Array.isArray(data)) {
    return [two, spanTwo];
  }

  var spanArray = [];

  if (span) {
    spanArray = new Array(data.length).fill(colSpan);

    if (typeof span === 'number') {
      if (span > 0) {
        spanArray[0] = span;
      }

      if (span < 0) {
        spanArray[data.length - 1] = Math.abs(span);
      }
    }

    if (Array.isArray(span)) {
      spanArray = span.concat(spanArray.slice(span.length));
    }

    var prev = 0;
    var rowIndex = 0;

    for (var i = 0; i < spanArray.length; i++) {
      var item = spanArray[i];
      var row = [data[i]];
      var spanRow = [item];

      if (item >= 24) {
        rowIndex = two.push(row);
        spanTwo.push(spanRow);
      } else {
        if (24 - prev >= item) {
          two[rowIndex] ? two[rowIndex] = two[rowIndex].concat(data[i]) : rowIndex = two.push(row) - 1;
          spanTwo[rowIndex] ? spanTwo[rowIndex] = spanTwo[rowIndex].concat(item) : rowIndex = spanTwo.push(spanRow) - 1;
          prev += item;
        } else {
          rowIndex = two.push(row) - 1;
          spanTwo.push(spanRow);
          prev = item;
        }
      }
    }

    return [two, spanTwo];
  }

  var rowsLength = Math.ceil(data.length / columns);
  var oneDimensional = data.concat([]);
  var index = 0;

  for (var _i = 0; _i < rowsLength; _i++) {
    var _row = oneDimensional.slice(index, index += columns);

    two.push(_row);
    spanTwo.push(new Array(_row.length).fill(colSpan));
  }

  return [two, spanTwo];
};
var flat = function flat(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.reduce(function (prev, curr) {
    if (Array.isArray(curr)) {
      return prev.concat(flat(curr));
    }

    return prev.concat(curr);
  }, []);
};
var isObjectValueEqual = function isObjectValueEqual(a, b) {
  //取对象a和b的属性名
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b); //判断属性名的length是否一致

  if (aProps.length != bProps.length) {
    return false;
  } //循环取出属性名，再判断属性值是否一致


  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
};
var isArrayValueEqual = function isArrayValueEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  } //判断array的length是否一致


  if (a.length != b.length) {
    return false;
  }

  var isEqual = true;

  for (var i = 0; i < a.length; i += 1) {
    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i]) === 'object' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(b[i]) === 'object') {
      !isObjectValueEqual(a[i], b[i]) && (isEqual = false);
    } else {
      a[i] !== b[i] && (isEqual = false);
    }
  }

  return isEqual;
};
var deepClone = function deepClone(data) {
  var cloneData = null;

  if (Array.isArray(data)) {
    cloneData = [];

    for (var i = 0; i < data.length; i += 1) {
      var item = data[i];
      cloneData[i] = deepClone(item);
    }
  } else if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(data) === 'object' && data !== null) {
    cloneData = {};
    Object.keys(data).forEach(function (key) {
      var item = data[key];
      cloneData[key] = deepClone(item);
    });
  } else {
    cloneData = data;
  }

  return cloneData;
};

/***/ }),

/***/ "./node_modules/annar/esm/action-sheet/index.js":
/*!******************************************************!*\
  !*** ./node_modules/annar/esm/action-sheet/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('action-sheet');

var ActionSheet = function ActionSheet(props) {
  var open = props.open,
      title = props.title,
      actions = props.actions,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? 'Cancel' : _props$cancelText,
      cover = props.cover,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      onCancel = props.onCancel,
      onChange = props.onChange;

  var handleCancel = function handleCancel(e) {
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };

  var handleChange = function handleChange(action, grid, e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(action, grid, e);
  };

  var handleCloseMask = function handleCloseMask() {
    maskClosable && (onCancel === null || onCancel === void 0 ? void 0 : onCancel());
  };

  var renderAction = function renderAction(action) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: action.value,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-action"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-action-destructive"), action.type === 'destructive')),
      onTap: function onTap(e) {
        return handleChange(action, undefined, e);
      }
    }, action.text);
  };

  var renderGrid = function renderGrid(action) {
    var _action$text;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: action.value,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-grid"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-action-destructive"), action.type === 'destructive'))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-grid-wrapper")
    }, (_action$text = action.text) === null || _action$text === void 0 ? void 0 : _action$text.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        key: item.value,
        className: "".concat(prefixCls, "-grid-item"),
        onTap: function onTap(e) {
          return handleChange(item, action, e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-grid-item-icon")
      }, item.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: item.icon,
        size: "48px",
        color: "rgba(0, 0, 0, 0.8)"
      }) : item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-grid-item-name")
      }, item.name));
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    transparent: true,
    position: "bottom",
    open: open,
    onClose: handleCloseMask
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-container"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-cover"), cover))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-menu")
  }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-action"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-title"), true))
  }, title) : null, actions === null || actions === void 0 ? void 0 : actions.map(function (action) {
    return action.mode === 'grid' ? renderGrid(action) : renderAction(action);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-cancel"),
    onTap: handleCancel
  }, cancelText))));
};

/* harmony default export */ __webpack_exports__["default"] = (ActionSheet);

/***/ }),

/***/ "./node_modules/annar/esm/button/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/button/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading */ "./node_modules/annar/esm/loading/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}








var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_9__["getPrefixCls"])('btn');
var ButtonTypes = Object(_util__WEBPACK_IMPORTED_MODULE_6__["tuple"])('default', 'primary');

var AButton = function AButton(props) {
  var _classNames;

  var type = props.type,
      size = props.size,
      className = props.className,
      style = props.style,
      children = props.children,
      onTap = props.onTap,
      disabled = props.disabled,
      danger = props.danger,
      shape = props.shape,
      block = props.block,
      _float = props["float"],
      loading = props.loading,
      loadingText = props.loadingText,
      plain = props.plain,
      hairline = props.hairline,
      look = props.look,
      color = props.color,
      icon = props.icon,
      ghost = props.ghost,
      _props$nativeType = props.nativeType,
      nativeType = _props$nativeType === void 0 ? 'button' : _props$nativeType,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["type", "size", "className", "style", "children", "onTap", "disabled", "danger", "shape", "block", "float", "loading", "loadingText", "plain", "hairline", "look", "color", "icon", "ghost", "nativeType"]);

  var handleTap = function handleTap(e) {
    if (disabled) {
      return;
    }

    if (loading) {
      return;
    }

    onTap === null || onTap === void 0 ? void 0 : onTap(e);
  };

  var renderIcon = function renderIcon(childrenElement) {
    var iconSize = '32px';

    if (size === 'small') {
      iconSize = '28px';
    }

    if (size === 'large') {
      iconSize = '36px';
    }

    var iconColor = '#1890FF';

    if (type === 'primary') {
      iconColor = '#FDFFFD';
    }

    if (plain) {
      if (type === 'primary') {
        iconColor = '#1890FF';
      }

      if (color) {
        iconColor = color;
      }
    }

    if (typeof icon === 'string') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: icon,
        color: iconColor,
        size: iconSize,
        style: {
          verticalAlign: '-0.05em',
          marginRight: childrenElement ? '6px' : undefined
        }
      });
    }

    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"](icon)) {
      var _icon$props;

      return _objectSpread(_objectSpread({}, icon), {}, {
        props: _objectSpread(_objectSpread({}, icon === null || icon === void 0 ? void 0 : icon.props), {}, {
          style: _objectSpread({
            verticalAlign: '-0.05em',
            marginRight: childrenElement ? '6px' : undefined
          }, icon === null || icon === void 0 ? void 0 : (_icon$props = icon.props) === null || _icon$props === void 0 ? void 0 : _icon$props.style)
        })
      });
    }

    return null;
  };

  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, className, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(shape), shape), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-primary"), type === 'primary'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-ghost"), ghost), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-plain"), plain), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-hairline"), hairline), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-block"), block), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-float"), _float), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-float-").concat(_float), _float), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-danger-default"), danger), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-danger"), type === 'primary' && danger), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-look-").concat(look), look), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-loading"), loading), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled || loading), _classNames));
  var childrenElement = loading && loadingText ? loadingText : children;
  var iconElement = renderIcon(childrenElement);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes // @ts-ignore
    ,
    type: nativeType,
    disabled: disabled,
    onTap: handleTap,
    style: _objectSpread(_objectSpread({}, style), {}, {
      color: color,
      borderColor: color
    })
  }, restProps), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-loading-icon")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "#FDFFFD",
    radius: "36px",
    style: {
      verticalAlign: '-0.3em'
    }
  })) : iconElement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "".concat(prefixCls, "-text")
  }, childrenElement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "".concat(prefixCls, "-mask")
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AButton);

/***/ }),

/***/ "./node_modules/annar/esm/card/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/card/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('card');

var Card = function Card(props) {
  var _classNames3;

  var title = props.title,
      description = props.description,
      extra = props.extra,
      cover = props.cover,
      foot = props.foot,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'vertical' : _props$direction,
      shadow = props.shadow,
      style = props.style,
      contentStyle = props.contentStyle,
      children = props.children,
      onTap = props.onTap;

  var renderTitle = function renderTitle(isHead) {
    return title || description || extra ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-head"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-content-head"), !isHead))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], null, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-title")
    }, title) : null, description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-description")
    }, description) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-extra")
    }, extra)) : null;
  };

  var renderHead = function renderHead() {
    if (cover) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-cover")
      }, cover);
    }

    return renderTitle(true);
  };

  var renderFoot = function renderFoot() {
    return foot ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-foot"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-foot-horizontal"), direction === 'horizontal'))
    }, foot) : null;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, (_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-horizontal"), cover && direction === 'horizontal'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-shadow"), shadow), _classNames3)),
    style: style,
    onTap: onTap
  }, renderHead(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-content"),
    style: _objectSpread({}, contentStyle)
  }, cover ? renderTitle(false) : null, children, direction === 'horizontal' ? renderFoot() : null), direction !== 'horizontal' ? renderFoot() : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./node_modules/annar/esm/cascade-popup/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/annar/esm/cascade-popup/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _cascade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cascade */ "./node_modules/annar/esm/cascade/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading */ "./node_modules/annar/esm/loading/index.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _form_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form-value */ "./node_modules/annar/esm/form-value/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");










var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_9__["getPrefixCls"])('cascade-popup');

var CascadePopup = function CascadePopup(props) {
  var value = props.value,
      text = props.text,
      disabled = props.disabled,
      placeholder = props.placeholder,
      textAlign = props.textAlign,
      options = props.options,
      onChange = props.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var handleTap = function handleTap() {
    if (disabled) {
      return;
    }

    setShow(true);
  };

  var handleClose = function handleClose() {
    setShow(false);
  };

  var handleChange = function handleChange(v, s, isLast) {
    onChange(s, v);

    if (isLast) {
      setShow(false);
    }
  };

  if (!options || options.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: prefixCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-loading")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
  }

  var cascadeValue = (value === null || value === void 0 ? void 0 : value.map(function (i) {
    return i.value;
  })) || [];
  var cascadeText = value === null || value === void 0 ? void 0 : value.map(function (i) {
    return i.text;
  }).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_form_value__WEBPACK_IMPORTED_MODULE_8__["default"], {
    textAlign: textAlign,
    placeholder: placeholder,
    onTap: handleTap
  }, text || cascadeText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "bottom",
    open: show
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container-header")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], null, "\u8BF7\u9009\u62E9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container-header-close"),
    onTap: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "close",
    color: "#999"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_cascade__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    value: cascadeValue,
    onChange: handleChange
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CascadePopup);

/***/ }),

/***/ "./node_modules/annar/esm/cascade/index.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/cascade/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/annar/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");











var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_10__["getPrefixCls"])('cascade');

var getMatchLevelOptions = function getMatchLevelOptions(value, level, data) {
  var r = null;
  var currentLevel = level - 1;

  for (var i = 0; i < data.length; i += 1) {
    var item = data[i];

    if (currentLevel === 0) {
      if (value === item.value) {
        r = data;
      }
    }

    if (currentLevel > 0) {
      if (item.children) {
        r = getMatchLevelOptions(value, currentLevel, item.children);
      }
    }

    if (r) {
      return r;
    }
  }

  return r;
};

var getSelectedOptions = function getSelectedOptions(value, options) {
  if (!Array.isArray(value) || !Array.isArray(options)) {
    return [];
  }

  var level = 0;
  var selectedOptions = [];

  var recursion = function recursion(levelOptions) {
    for (var i = 0; i < levelOptions.length; i += 1) {
      var option = levelOptions[i];

      if (option.value === value[level]) {
        selectedOptions.push(option);
        level += 1;

        if (selectedOptions.length === value.length) {
          return selectedOptions;
        } else if (selectedOptions.length < value.length) {
          return recursion(option.children || []);
        }
      }
    }

    return selectedOptions;
  };

  return recursion(options);
};

var Cascade = function Cascade(props) {
  var _classNames;

  var name = props.name,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      changeOnSelect = props.changeOnSelect,
      _props$height = props.height,
      height = _props$height === void 0 ? '80vh' : _props$height,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      prompt = props.prompt,
      onChange = props.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(options),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      levelOptions = _useState2[0],
      setLevelOptions = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      scrollTop = _useState4[0],
      setScrollTop = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      localValue = _useState6[0],
      setLocalValue = _useState6[1];

  var rechoose = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
  var val = changeOnSelect ? value : localValue;
  var selectedOptions = getSelectedOptions(val, options); // useEffect(() => {
  //   if (options && options.length > 0) {
  //     setLevelOptions(options);
  //   }
  // }, [options]) // 无法使用此 useEffect，使用后会报错。

  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(i) {
      var nextValue, nextSelectedOption, lastIndex, lastSelectedOption, _isLast;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nextValue = [];
              nextSelectedOption = [];
              lastIndex = val.length - 1;
              lastSelectedOption = selectedOptions[lastIndex] || {};

              if (val.length > 0 && (!lastSelectedOption.children || lastSelectedOption.children.length === 0)) {
                nextValue = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(val.slice(0, lastIndex)), [i.value]);
                nextSelectedOption = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedOptions.slice(0, lastIndex)), [i]);
              } else if (val.length > 0 && rechoose.current) {
                nextValue = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(val.slice(0, lastIndex)), [i.value]);
                nextSelectedOption = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedOptions.slice(0, lastIndex)), [i]);
              } else {
                nextValue = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(val), [i.value]);
                nextSelectedOption = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedOptions), [i]);
              }

              if (changeOnSelect) {
                _isLast = false;

                if (!Array.isArray(i.children) || i.children.length === 0) {
                  _isLast = true;
                }

                onChange(nextValue, nextSelectedOption, _isLast);
              }

              if (!changeOnSelect) {
                if (!Array.isArray(i.children) || i.children.length === 0) {
                  setLocalValue(nextValue);
                  onChange(nextValue, nextSelectedOption, true);
                } else {
                  setLocalValue(nextValue);
                }
              }

              rechoose.current = false;
              setScrollTop(function (top) {
                return top === 0 ? 1 : 0;
              });

              if (Array.isArray(i.children) && i.children.length > 0) {
                setLevelOptions(i.children);
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleReChoose = function handleReChoose(item, index) {
    rechoose.current = true;

    if (changeOnSelect) {
      onChange(val.slice(0, index + 1));
    }

    if (!changeOnSelect) {
      setLocalValue(val.slice(0, index + 1));
    }

    setLevelOptions(getMatchLevelOptions(item.value, index + 1, options));
    setScrollTop(function (top) {
      return top === 0 ? 1 : 0;
    });
  };

  var h = val.length > 1 ? 90 * val.length + 40 - 30 : 130;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, true), _classNames)),
    style: {
      height: height
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "".concat(prefixCls, "-selected")
  }, selectedOptions.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      key: item.value,
      className: "".concat(prefixCls, "-step"),
      onTap: function onTap() {
        handleReChoose(item, index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-line")
    }, index === val.length - 1 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-line-active")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      className: "".concat(prefixCls, "-step-dot")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-container")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-content")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-left")
    }, item.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-right")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-right-text")
    }, prompt === null || prompt === void 0 ? void 0 : prompt(index)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      className: "".concat(prefixCls, "-step-right-arrow")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "right",
      size: "24px",
      color: "#999"
    }))))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_one__WEBPACK_IMPORTED_MODULE_7__["ScrollView"], {
    scrollY: true,
    className: "".concat(prefixCls, "-showed"),
    scrollTop: scrollTop,
    style: {
      height: "calc(".concat(height, " - ").concat(h + 80, "px)")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "".concat(prefixCls, "-showed-title")
  }, "\u9009\u62E9".concat(name)), levelOptions === null || levelOptions === void 0 ? void 0 : levelOptions.map(function (i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_6__["View"], {
      key: i.value,
      className: "".concat(prefixCls, "-showed-category"),
      onTap: function onTap() {
        handleClick(i);
      }
    }, i.text);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Cascade);

/***/ }),

/***/ "./node_modules/annar/esm/cell/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/cell/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _form_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-value */ "./node_modules/annar/esm/form-value/index.js");
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../picker */ "./node_modules/annar/esm/picker/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../input */ "./node_modules/annar/esm/input/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");











var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_10__["getPrefixCls"])('cell');

var Cell = function Cell(props) {
  var label = props.label,
      style = props.style,
      labelStyle = props.labelStyle,
      valueStyle = props.valueStyle,
      _props$valueAlign = props.valueAlign,
      valueAlign = _props$valueAlign === void 0 ? 'right' : _props$valueAlign,
      children = props.children,
      description = props.description,
      verticality = props.verticality,
      icon = props.icon,
      _props$border = props.border,
      border = _props$border === void 0 ? true : _props$border,
      arrow = props.arrow,
      extra = props.extra,
      required = props.required,
      field = props.field,
      _props$defaultNullVal = props.defaultNullValue,
      defaultNullValue = _props$defaultNullVal === void 0 ? '' : _props$defaultNullVal,
      onTap = props.onTap;

  if (verticality) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: prefixCls,
      style: style,
      onTap: onTap
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-verticality")
    }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-verticality-label"),
      style: labelStyle
    }, required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      className: "".concat(prefixCls, "-verticality-required")
    }, "*") : null, label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-verticality-value"),
      style: valueStyle
    }, children)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(prefixCls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "".concat(prefixCls, "-border"), border)),
    style: style,
    onTap: onTap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-container-left"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "".concat(prefixCls, "-container-left-input"), field))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container-left-label")
  }, required ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "".concat(prefixCls, "-container-left-label-required")
  }, "*") : null, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: icon,
    size: "32px",
    style: {
      marginRight: '10px'
    },
    color: "#333"
  }) : null, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    className: "".concat(prefixCls, "-container-left-label-value"),
    style: labelStyle
  }, label) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container-right")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-container-right-value"), "".concat(prefixCls, "-container-right-value-").concat(valueAlign)),
    style: valueStyle
  }, children || children === 0 ? children : defaultNullValue), extra ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-extra")
  }, extra) : null, arrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "right",
    style: {
      marginLeft: '10px'
    },
    color: "#666"
  }) : null)), description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container-description")
  }, description) : null);
};

Cell.Picker = function (props) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'left' : _props$align,
      value = props.value,
      onChange = props.onChange,
      placeholder = props.placeholder,
      children = props.children,
      disabled = props.disabled,
      range = props.range,
      _props$rangeKey = props.rangeKey,
      rangeKey = _props$rangeKey === void 0 ? 'text' : _props$rangeKey;
  var selectedText = '';

  if (Array.isArray(value)) {
    var selected = value.map(function (i, columnIndex) {
      var _range$columnIndex;

      return range === null || range === void 0 ? void 0 : (_range$columnIndex = range[columnIndex]) === null || _range$columnIndex === void 0 ? void 0 : _range$columnIndex[i];
    });
    selectedText = selected.map(function (i) {
      return Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(i) === 'object' ? i[rangeKey] || '' : i;
    }).join(' ');
  } else {
    var _selected = range === null || range === void 0 ? void 0 : range[value];

    selectedText = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(_selected) === 'object' ? _selected[rangeKey] || '' : _selected;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Cell, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    field: true,
    labelStyle: {
      width: '180px'
    }
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_picker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    range: range,
    rangeKey: rangeKey,
    disabled: disabled,
    value: value,
    onChange: onChange
  }, children !== null && children !== void 0 ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_form_value__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placeholder: placeholder,
    style: {
      textAlign: align,
      color: disabled ? '#999' : undefined
    }
  }, selectedText)));
};

var defaultInputWrapperStyle = {
  display: 'flex',
  padding: 0,
  border: 0
};
var defaultInputStyle = {
  height: '48px',
  lineHeight: '48px',
  minHeight: '48px'
};

Cell.Input = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Cell, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    field: true,
    labelStyle: {
      width: '180px'
    }
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_input__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    style: defaultInputWrapperStyle,
    inputStyle: defaultInputStyle
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Cell);

/***/ }),

/***/ "./node_modules/annar/esm/checkbox/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/checkbox/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPrefixCls"])('checkbox');

var Checkbox = function Checkbox(props) {
  var children = props.children,
      checked = props.checked,
      value = props.value,
      extra = props.extra,
      style = props.style,
      onChange = props.onChange;

  var handleClick = function handleClick(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked, e, value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-container"),
    onTap: handleClick
  }, checked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "roundcheckfill",
    size: "48px",
    color: "#1890FF"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "round",
    size: "48px",
    color: "#999"
  }), children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-container-label")
  }, children) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-extra")
  }, extra));
};

var getCheckboxs = function getCheckboxs(children) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var onChange = arguments.length > 2 ? arguments[2] : undefined;

  var onGroupChange = function onGroupChange(checked, e, v) {
    var val = value || [];
    var newVal = (val === null || val === void 0 ? void 0 : val.includes(v)) ? val === null || val === void 0 ? void 0 : val.filter(function (i) {
      return i !== v;
    }) : val === null || val === void 0 ? void 0 : val.concat(v);
    var newValue = !Array.isArray(newVal) || newVal.length === 0 ? undefined : newVal;
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue, e);
  };

  var checkboxs = react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(children, function (checkbox) {
    var _includes, _ref;

    var p = (checkbox === null || checkbox === void 0 ? void 0 : checkbox.props) || {};
    var checked = p.checked;

    if ((p.value || p.value === 0) && (value === null || value === void 0 ? void 0 : (_includes = (_ref = value).includes) === null || _includes === void 0 ? void 0 : _includes.call(_ref, p.value))) {
      checked = !checked;
    }

    return _objectSpread(_objectSpread({}, checkbox), {}, {
      props: _objectSpread(_objectSpread({}, checkbox.props), {}, {
        checked: checked,
        onChange: onGroupChange
      })
    });
  });
  return checkboxs;
};

Checkbox.Group = function (props) {
  var _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      onChange = props.onChange;
  var checkboxs = getCheckboxs(children, value, onChange);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: {
      display: 'flex',
      flexDirection: direction
    }
  }, checkboxs);
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox); // 注意不要加 React.memo，会导致保错。

/***/ }),

/***/ "./node_modules/annar/esm/col/index.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/col/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('col');

var Col = function Col(props) {
  var _classNames;

  var span = props.span,
      _props$offset = props.offset,
      offset = _props$offset === void 0 ? 0 : _props$offset,
      flex = props.flex,
      style = props.style,
      className = props.className,
      children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(span), span), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), _classNames), className),
    style: _objectSpread({
      flex: flex
    }, style)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Col);

/***/ }),

/***/ "./node_modules/annar/esm/common/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/common/index.js ***!
  \************************************************/
/*! exports provided: annaPrefix, getPrefixCls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "annaPrefix", function() { return annaPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrefixCls", function() { return getPrefixCls; });
var annaPrefix = 'anna';
var getPrefixCls = function getPrefixCls(name) {
  return "".concat(annaPrefix, "-").concat(name);
};

/***/ }),

/***/ "./node_modules/annar/esm/date-picker/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/annar/esm/date-picker/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/construct */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../picker */ "./node_modules/annar/esm/picker/index.js");





var startYear = new Date().getFullYear();

function getDays(year, month) {
  var days = [];
  month = String(parseInt(month, 10));
  var date = new Date(Number(year), Number(month), 0);
  var maxDay = date.getDate();

  for (var i = 1; i <= maxDay; i++) {
    var day = i < 10 ? '0' + i : String(i);
    days.push(day);
  }

  return days;
}

function getRange(format) {
  var date = new Date();
  var years = [];
  var months = [];
  var range = [];
  var currentYear = startYear;
  var currentMonth = date.getMonth();
  var days = getDays(String(currentYear), String(currentMonth + 1));

  var hours = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(24).keys()).map(function (i) {
    return i < 10 ? '0' + i : String(i);
  });

  var minutes = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(60).keys()).map(function (i) {
    return i < 10 ? '0' + i : String(i);
  });

  for (var i = currentYear; i <= currentYear + 10; i++) {
    years.push(i);
  }

  for (var _i = 1; _i <= 12; _i++) {
    var month = _i < 10 ? '0' + _i : String(_i);
    months.push(month);
  }

  if (format.includes('YYYY')) {
    range.push(years);
  }

  if (format.includes('MM')) {
    range.push(months);
  }

  if (format.includes('DD')) {
    range.push(days);
  }

  if (format.includes('HH')) {
    range.push(hours);
  }

  if (format.includes('mm')) {
    range.push(minutes);
  }

  return range;
}

function getInitValue(format) {
  return dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format(format);
}

function getFormat(type, format) {
  var rangeFormat = 'YYYY-MM-DD';

  if (format && typeof format === 'string') {
    rangeFormat = format;
  } else {
    if (type === 'date') {
      rangeFormat = 'YYYY-MM-DD';
    }

    if (type === 'time') {
      rangeFormat = 'HH:mm';
    }

    if (type === 'datetime') {
      rangeFormat = 'YYYY-MM-DD HH:mm';
    }
  }

  return rangeFormat;
}

function transformDate2Index(date, format) {
  var o = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(date);
  var indexArray = [];

  if (format.includes('YYYY')) {
    indexArray.push(o.$y - startYear);
  }

  if (format.includes('MM')) {
    indexArray.push(o.$M);
  }

  if (format.includes('DD')) {
    indexArray.push(o.$D - 1);
  }

  if (format.includes('HH')) {
    var hourIndex = date.indexOf(':');
    var H = Number(date.slice(hourIndex - 2, hourIndex));
    indexArray.push(isNaN(o.$H) ? H : o.$H);
  }

  if (format.includes('mm')) {
    var minuteIndex = format.includes('HH') ? date.indexOf(':') + 3 : date.indexOf(':');
    var m = Number(date.slice(minuteIndex - 2, minuteIndex));
    indexArray.push(isNaN(o.$m) ? m : o.$m);
  }

  return indexArray;
}

var DatePicker = function DatePicker(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'date' : _props$type,
      format = props.format,
      _props$value = props.value,
      value = _props$value === void 0 ? getInitValue(getFormat(type, format)) : _props$value,
      disabled = props.disabled,
      children = props.children,
      onChange = props.onChange;
  var rangeFormat = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return getFormat(type, format);
  }, [type, format]);
  var range = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return getRange(rangeFormat);
  }, [rangeFormat]); // const [range, setRange] = useState(getRange(rangeFormat));

  var handleChange = function handleChange(v) {
    var dateArray = v === null || v === void 0 ? void 0 : v.map(function (i, columnIndex) {
      var _range$columnIndex;

      return range === null || range === void 0 ? void 0 : (_range$columnIndex = range[columnIndex]) === null || _range$columnIndex === void 0 ? void 0 : _range$columnIndex[i];
    });

    if (dateArray.length < 5 && rangeFormat.includes('mm')) {
      var filledLength = 5 - dateArray.length;
      var insert = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD').split('-').slice(0, filledLength);
      dateArray.unshift.apply(dateArray, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(insert));
    }

    dateArray[1] = dateArray[1] - 1; // @ts-ignore

    var date = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__["default"])(Date, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(dateArray))).format(rangeFormat);
    onChange === null || onChange === void 0 ? void 0 : onChange(date);
  };

  var pickerValue = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return transformDate2Index(value, rangeFormat);
  }, [value, rangeFormat]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_picker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: pickerValue,
    onChange: handleChange,
    range: range,
    disabled: disabled
  }, typeof children === 'function' ? children === null || children === void 0 ? void 0 : children(value) : children);
};

/* harmony default export */ __webpack_exports__["default"] = (DatePicker);

/***/ }),

/***/ "./node_modules/annar/esm/dropdown/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/dropdown/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_2__["getPrefixCls"])('dropdown');

var Dropdown = function Dropdown(props) {
  var _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      value = props.value,
      _props$activeColor = props.activeColor,
      activeColor = _props$activeColor === void 0 ? '#1890FF' : _props$activeColor,
      onChange = props.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-content")
  }, options.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "".concat(prefixCls, "-content-option"),
      key: item.value,
      onTap: function onTap() {
        return onChange === null || onChange === void 0 ? void 0 : onChange(item);
      },
      style: item.value === value ? {
        color: activeColor,
        fontWeight: 500
      } : undefined
    }, item.text);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./node_modules/annar/esm/filter/filter.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/filter/filter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mask */ "./node_modules/annar/esm/mask/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item */ "./node_modules/annar/esm/filter/item.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('filter');

var InternalFilter = function InternalFilter(props) {
  var filterRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])([]);
  var style = props.style,
      zIndex = props.zIndex,
      children = props.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      showMask = _useState2[0],
      setShowMask = _useState2[1];

  var hanldeShowMask = function hanldeShowMask(value) {
    setShowMask(value);
  };

  var handleTapItem = function handleTapItem(value, index, tapCb) {
    filterRef.current.forEach(function (item, cindex) {
      if (index !== cindex) {
        item.current.close();
      }
    });

    if (value) {
      setShowMask(true);
    } else {
      setShowMask(false);
    }

    tapCb === null || tapCb === void 0 ? void 0 : tapCb();
  };

  var hanldeTapMask = function hanldeTapMask() {
    filterRef.current.forEach(function (item) {
      item.current.close();
    });
    setShowMask(false);
  };

  var filterItems = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.map(children, function (filterItem, index) {
    var itemRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
    filterRef.current[index] = itemRef;

    if (filterItem.ref) {
      filterRef.current[index] = filterItem.ref;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, filterItem.props, {
      ref: filterRef.current[index],
      onTap: function onTap(v) {
        var _filterItem$props;

        return handleTapItem(v, index, (_filterItem$props = filterItem.props) === null || _filterItem$props === void 0 ? void 0 : _filterItem$props.onTap);
      },
      onShowMask: hanldeShowMask,
      id: index
    }));
  });
  var isAddZIndex = zIndex || zIndex === 0;
  var filterStyle = style;

  if (isAddZIndex) {
    filterStyle = _objectSpread(_objectSpread({}, style), {}, {
      zIndex: zIndex
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: prefixCls,
    style: filterStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-content"),
    style: {
      height: showMask ? '100%' : '100px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-items")
  }, filterItems)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_mask__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: showMask,
    onTap: hanldeTapMask,
    style: {
      top: 'unset',
      bottom: 'unset',
      height: '100%'
    },
    zIndex: 0
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InternalFilter); // {/* mask必须放到items的后面,否则会导致动画transition失效 */}

/***/ }),

/***/ "./node_modules/annar/esm/filter/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/filter/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./node_modules/annar/esm/filter/filter.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./node_modules/annar/esm/filter/item.js");


var Filter = _filter__WEBPACK_IMPORTED_MODULE_0__["default"];
Filter.Item = _item__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./node_modules/annar/esm/filter/item.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/filter/item.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dropdown */ "./node_modules/annar/esm/dropdown/index.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");









var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_8__["getPrefixCls"])('filter-item');

var Item = function Item(props, ref) {
  var _classNames, _options$find;

  var title = props.title,
      onTap = props.onTap,
      children = props.children,
      onShowMask = props.onShowMask,
      value = props.value,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      onChange = props.onChange,
      activeColor = props.activeColor,
      disabled = props.disabled;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, function () {
    return {
      toggle: function toggle() {
        setOpen(function (state) {
          if (state) {
            setTimeout(function () {
              onShowMask === null || onShowMask === void 0 ? void 0 : onShowMask(false);
            });
          } else {
            setTimeout(function () {
              onShowMask === null || onShowMask === void 0 ? void 0 : onShowMask(true);
            });
          }

          return !state;
        });
      },
      open: function open() {
        setOpen(true);
      },
      close: function close() {
        setOpen(false);
      }
    };
  }, []);

  var handleTap = function handleTap() {
    if (disabled) {
      return;
    }

    setOpen(function (state) {
      return !state;
    });
    onTap === null || onTap === void 0 ? void 0 : onTap(!open);
  };

  var handleChange = function handleChange(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
    setOpen(false);
    onShowMask === null || onShowMask === void 0 ? void 0 : onShowMask(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: {
      backgroundColor: '#FDFFFD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-label"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-label-disabled"), disabled), _classNames)),
    onTap: handleTap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "".concat(prefixCls, "-label-text")
  }, (options === null || options === void 0 ? void 0 : (_options$find = options.find(function (option) {
    return option.value === value;
  })) === null || _options$find === void 0 ? void 0 : _options$find.text) || title), open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "".concat(prefixCls, "-label-chevronUp")
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "".concat(prefixCls, "-label-chevronDown")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_popup__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "bottom",
    square: true,
    curve: "ease",
    mask: false,
    open: open,
    style: {
      position: 'absolute',
      zIndex: -1,
      transform: open ? 'translate3d(0, 100%, 0)' : 'translate3d(0, 0, 0)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_one__WEBPACK_IMPORTED_MODULE_5__["ScrollView"], {
    scrollY: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-value"), true))
  }, children ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    options: options,
    onChange: handleChange,
    activeColor: activeColor
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(Item));

/***/ }),

/***/ "./node_modules/annar/esm/form-value/index.js":
/*!****************************************************!*\
  !*** ./node_modules/annar/esm/form-value/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPrefixCls"])('form-value');

var Value = function Value(props) {
  var placeholder = props.placeholder,
      style = props.style,
      textAlign = props.textAlign,
      children = props.children,
      onTap = props.onTap;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls,
    style: _objectSpread(_objectSpread({}, style), {}, {
      textAlign: textAlign
    }),
    onTap: onTap
  }, children || children === 0 ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-placeholder")
  }, placeholder));
};

/* harmony default export */ __webpack_exports__["default"] = (Value);

/***/ }),

/***/ "./node_modules/annar/esm/form/context.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/form/context.js ***!
  \************************************************/
/*! exports provided: HOOK_KEY, FormContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOOK_KEY", function() { return HOOK_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContext", function() { return FormContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var HOOK_KEY = 'ANNA_FORM_INTERNAL_HOOKS';
var FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({
  formInstance: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange: function onChange(event, name) {
    /* */
  }
});

/***/ }),

/***/ "./node_modules/annar/esm/form/form.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/form/form.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/annar/esm/form/context.js");
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useForm */ "./node_modules/annar/esm/form/useForm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");








var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('form');

var AnnarForm = function AnnarForm(props) {
  var initialValues = props.initialValues,
      form = props.form,
      children = props.children,
      onFinish = props.onFinish,
      onFinishFailed = props.onFinishFailed,
      onReset = props.onReset;

  var _useForm = Object(_useForm__WEBPACK_IMPORTED_MODULE_6__["default"])(form),
      _useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useForm, 1),
      formInstance = _useForm2[0];

  var setFieldsValue = formInstance.setFieldsValue,
      submit = formInstance.submit;

  var _formInstance$getInte = formInstance.getInternalHooks(_context__WEBPACK_IMPORTED_MODULE_5__["HOOK_KEY"]),
      initStore = _formInstance$getInte.initStore,
      setErrors = _formInstance$getInte.setErrors,
      setCallbacks = _formInstance$getInte.setCallbacks;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    initStore(initialValues);
    setCallbacks({
      onFinish: onFinish,
      onFinishFailed: onFinishFailed
    }); // 卸载时不要忘了手动清理内存 FormStore
  }, []);

  var handleSubmit = function handleSubmit(e) {
    var _e$preventDefault, _e$stopPropagation;

    e === null || e === void 0 ? void 0 : (_e$preventDefault = e.preventDefault) === null || _e$preventDefault === void 0 ? void 0 : _e$preventDefault.call(e);
    e === null || e === void 0 ? void 0 : (_e$stopPropagation = e.stopPropagation) === null || _e$stopPropagation === void 0 ? void 0 : _e$stopPropagation.call(e);
    submit();
  };

  var handleChange = function handleChange(e, name) {
    // 适配 e.target 不存在的情况(如radio 和 checkbox), 如果 e.target 不存在则组装一个对象
    var t = (e === null || e === void 0 ? void 0 : e.target) || {
      value: e
    };
    setFieldsValue(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, t === null || t === void 0 ? void 0 : t.value));
  };

  var handleChangeError = function handleChangeError(v, name) {
    setErrors(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, v));
  }; // 这里不用 useMemo 来优化，因为只有每次 providerValue 都是一个新的对象，子组件才会重新渲染（useContext收到更新通知）


  var providerValue = {
    formInstance: formInstance,
    onChange: handleChange,
    onChangeError: handleChangeError
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_5__["FormContext"].Provider, {
    value: providerValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls),
    onSubmit: handleSubmit,
    onReset: onReset
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (AnnarForm);

/***/ }),

/***/ "./node_modules/annar/esm/form/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/form/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./node_modules/annar/esm/form/form.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./node_modules/annar/esm/form/item.js");
/* harmony import */ var _useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useForm */ "./node_modules/annar/esm/form/useForm.js");



var Form = _form__WEBPACK_IMPORTED_MODULE_0__["default"];
Form.Item = _item__WEBPACK_IMPORTED_MODULE_1__["default"];
Form.useForm = _useForm__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./node_modules/annar/esm/form/item.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/form/item.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cell */ "./node_modules/annar/esm/cell/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./node_modules/annar/esm/form/context.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('form-item'); // const count = 0;

var FormItem = function FormItem(props) {
  var label = props.label,
      _props$border = props.border,
      border = _props$border === void 0 ? false : _props$border,
      icon = props.icon,
      required = props.required,
      _props$valueAlign = props.valueAlign,
      valueAlign = _props$valueAlign === void 0 ? 'right' : _props$valueAlign,
      name = props.name,
      rules = props.rules,
      style = props.style,
      noStyle = props.noStyle,
      _props$valuePropName = props.valuePropName,
      valuePropName = _props$valuePropName === void 0 ? 'value' : _props$valuePropName,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'onChange' : _props$trigger,
      children = props.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_6__["FormContext"]),
      onChange = _useContext.onChange,
      onChangeError = _useContext.onChangeError,
      formInstance = _useContext.formInstance;

  var _ref = formInstance || {},
      getFieldsValue = _ref.getFieldsValue,
      getFieldsError = _ref.getFieldsError;

  var _ref2 = (formInstance === null || formInstance === void 0 ? void 0 : formInstance.getInternalHooks(_context__WEBPACK_IMPORTED_MODULE_6__["HOOK_KEY"])) || {},
      registerField = _ref2.registerField;

  var store = getFieldsValue === null || getFieldsValue === void 0 ? void 0 : getFieldsValue();
  var errors = getFieldsError === null || getFieldsError === void 0 ? void 0 : getFieldsError();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (name) {
      registerField === null || registerField === void 0 ? void 0 : registerField(props);
    }
  }, []);

  var handleChange = function handleChange(e) {
    var error = name ? errors[name] || {} : {};

    if (Array.isArray(rules) && Object.keys(error).length > 0) {
      onChangeError({}, name);
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(e, name);
  };

  var handleBlur = function handleBlur(e) {
    var value = e.target.value;

    if (Array.isArray(rules)) {
      var errorFlag = false;
      var errorObj = {};

      for (var i = 0; i < rules.length; i += 1) {
        var rule = rules[i] || {};
        var _required = rule.required,
            pattern = rule.pattern,
            validator = rule.validator,
            _rule$message = rule.message,
            message = _rule$message === void 0 ? "".concat(name, " is required") : _rule$message;

        if (_required) {
          if (!value && value !== 0) {
            errorObj = {
              error: true,
              message: message
            };
            errorFlag = true;
            break;
          }
        }

        if (pattern) {
          var isPass = pattern.test(value);

          if (!isPass) {
            errorObj = {
              error: true,
              message: message
            };
            errorFlag = true;
            break;
          }
        }

        if (validator && typeof validator === 'function') {
          var result = validator(value);

          if (!result) {
            errorObj = {
              error: true,
              message: message
            };
            errorFlag = true;
            break;
          }
        }
      }

      if (errorFlag) {
        onChangeError(errorObj, name);
      }

      if (!errorFlag) {
        onChangeError({}, name);
      }
    }
  };

  var childrenNode = children;

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(children) === 'object' && children !== null) {
    var _ref3 = children,
        childrenProps = _ref3.props;

    if (childrenProps && name) {
      var _objectSpread2;

      var onTrigger = function onTrigger(e) {
        var _childrenProps$trigge;

        handleChange(e);
        childrenProps === null || childrenProps === void 0 ? void 0 : (_childrenProps$trigge = childrenProps[trigger]) === null || _childrenProps$trigge === void 0 ? void 0 : _childrenProps$trigge.call(childrenProps, e);
      }; // 这里给input的 value 赋值为 undefined 是不会改变显示的值，必须要设置为空字符串 ''


      childrenNode = _objectSpread(_objectSpread({}, children), {}, {
        props: _objectSpread(_objectSpread({}, childrenProps), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, valuePropName, store[name]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, trigger, onTrigger), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "onBlur", handleBlur), _objectSpread2))
      });
    }
  }

  var renderErrorNode = function renderErrorNode() {
    var height = '0';
    var errorMessage = null;

    if (name && errors[name] && errors[name].error) {
      var _errors$name;

      height = '60px';
      errorMessage = errors === null || errors === void 0 ? void 0 : (_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.message;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-explain"),
      style: {
        height: height
      }
    }, errorMessage);
  }; // count += 1;


  if (noStyle) {
    return (
      /*#__PURE__*/
      // <React.Fragment key={count}>
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls),
        style: style
      }, childrenNode, renderErrorNode()) // </React.Fragment>

    );
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_cell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: style,
    label: label,
    border: border,
    icon: icon,
    required: required,
    field: true,
    labelStyle: {
      width: '180px'
    },
    valueAlign: valueAlign
  }, childrenNode), renderErrorNode());
};

/* harmony default export */ __webpack_exports__["default"] = (FormItem);

/***/ }),

/***/ "./node_modules/annar/esm/form/useForm.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/form/useForm.js ***!
  \************************************************/
/*! exports provided: FormStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStore", function() { return FormStore; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/annar/esm/form/context.js");





function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




var validateRules = function validateRules(name, value, rules) {
  for (var j = 0; j < rules.length; j += 1) {
    var rule = rules[j] || {};
    var required = rule.required,
        pattern = rule.pattern,
        validator = rule.validator,
        _rule$message = rule.message,
        message = _rule$message === void 0 ? "".concat(name, " is required") : _rule$message;

    if (required) {
      if (!value && value !== 0 && value !== false) {
        return [false, value, {
          error: true,
          message: message
        }];
      }
    }

    if (pattern) {
      var result = pattern.test(value);

      if (!result) {
        return [false, value, {
          error: true,
          message: message
        }];
      }
    }

    if (validator && typeof validator === 'function') {
      var _result = validator(value);

      if (!_result) {
        return [false, value, {
          error: true,
          message: message
        }];
      }
    }
  }

  return [true];
};

var FormStore = function FormStore(forceRootUpdate) {
  var _this = this;

  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FormStore);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "store", {});

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "errors", {});

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "fieldsProps", []);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "initialValues", {});

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "callbacks", {});

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "forceRootUpdate", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getForm", function () {
    return {
      getFieldError: _this.getFieldError,
      getFieldsError: _this.getFieldsError,
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      setFieldsValue: _this.setFieldsValue,
      resetFields: _this.resetFields,
      validateFields: _this.validateFields,
      submit: _this.submit,
      getInternalHooks: _this.getInternalHooks
    };
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setInitialValues", function (initialValues) {
    _this.initialValues = initialValues;
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getFieldValue", function (name) {
    var _this$store;

    return (_this$store = _this.store) === null || _this$store === void 0 ? void 0 : _this$store[name];
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getFieldsValue", function () {
    return _this.store;
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "resetFields", function (value) {
    var val = value && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(value) === 'object' ? value : null;

    _this.initStore(val || _this.initialValues);

    _this.forceRootUpdate();
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setFieldsValue", function (values) {
    _this.store = Object.assign({}, _this.store, values);

    _this.forceRootUpdate();
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "validateFields", function () {
    var _this$getFieldRuleObj = _this.getFieldRuleObjects(),
        _this$getFieldRuleObj2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$getFieldRuleObj, 2),
        fieldRulesObj = _this$getFieldRuleObj2[0],
        nullValuesObj = _this$getFieldRuleObj2[1];

    var isPassed = true;
    var errorState = {};
    var errorFields = {};
    var names = Object.keys(_this.store);

    for (var i = 0; i < names.length; i += 1) {
      var name = names[i];
      var value = _this.store[name];
      var rules = fieldRulesObj[name];

      if (rules) {
        var _validateRules = validateRules(name, value, rules),
            _validateRules2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_validateRules, 3),
            isvalidateRulesPassed = _validateRules2[0],
            fieldValue = _validateRules2[1],
            fieldState = _validateRules2[2];

        if (!isvalidateRulesPassed) {
          errorFields[name] = fieldValue;
          errorState[name] = fieldState;
          isPassed = false;
        }
      }
    }

    return [isPassed, errorState, errorFields, nullValuesObj];
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getFieldError", function (name) {
    var _this$errors;

    return (_this$errors = _this.errors) === null || _this$errors === void 0 ? void 0 : _this$errors[name];
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getFieldsError", function () {
    return _this.errors;
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "submit", function () {
    var _this$callbacks = _this.callbacks,
        onFinish = _this$callbacks.onFinish,
        onFinishFailed = _this$callbacks.onFinishFailed;

    var _this$validateFields = _this.validateFields(),
        _this$validateFields2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$validateFields, 4),
        isPassed = _this$validateFields2[0],
        errorState = _this$validateFields2[1],
        errorFields = _this$validateFields2[2],
        nullValuesObj = _this$validateFields2[3];

    if (!isPassed) {
      _this.setErrors(_objectSpread({}, errorState));

      _this.forceRootUpdate();

      onFinishFailed === null || onFinishFailed === void 0 ? void 0 : onFinishFailed(_this.store, errorFields);
      return;
    }

    if (isPassed) {
      _this.setErrors(nullValuesObj);

      _this.forceRootUpdate();
    }

    onFinish === null || onFinish === void 0 ? void 0 : onFinish(_this.store);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getInternalHooks", function (key) {
    if (key === _context__WEBPACK_IMPORTED_MODULE_5__["HOOK_KEY"]) {
      return {
        initStore: _this.initStore,
        setCallbacks: _this.setCallbacks,
        setErrors: _this.setErrors,
        registerField: _this.registerField
      };
    }
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setCallbacks", function (callbacks) {
    _this.callbacks = Object.assign({}, _this.callbacks, callbacks);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "initStore", function (initialValues) {
    _this.setInitialValues(initialValues);

    var _this$getFieldRuleObj3 = _this.getFieldRuleObjects(),
        _this$getFieldRuleObj4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$getFieldRuleObj3, 2),
        nullValuesObj = _this$getFieldRuleObj4[1]; // 不能用下面这句，因为第一个参数是{}, 这就会导致返回的是一个新的对象（引用变了）
    // return Object.assign({}, nullValuesObj, this.initialValues);


    var newStore = Object.assign(_this.store, nullValuesObj, _this.initialValues);
    var newError = Object.assign(_this.errors, nullValuesObj);
    _this.store = newStore;
    _this.errors = newError;
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setErrors", function (errors) {
    _this.errors = Object.assign({}, _this.errors, errors);

    _this.forceRootUpdate();
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getFieldRuleObjects", function () {
    var rules = _this.fieldsProps.map(function (i) {
      return {
        name: i === null || i === void 0 ? void 0 : i.name,
        rules: i === null || i === void 0 ? void 0 : i.rules
      };
    });

    var fieldRulesObj = {};
    var nullValuesObj = {};
    rules.forEach(function (i) {
      if (i.name && i.rules && Array.isArray(i.rules)) {
        fieldRulesObj[i.name] = i.rules;
        nullValuesObj[i.name] = undefined;
      }
    });
    return [fieldRulesObj, nullValuesObj];
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "registerField", function (fieldProps) {
    _this.fieldsProps.push(fieldProps);
  });

  this.forceRootUpdate = forceRootUpdate;
};

function useForm(form) {
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      forceUpdate = _useState2[1];

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };

      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ }),

/***/ "./node_modules/annar/esm/grid/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/grid/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../row */ "./node_modules/annar/esm/row/index.js");
/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../col */ "./node_modules/annar/esm/col/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");








var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('grid');

var getColIndex = function getColIndex(two, rindex, cindex) {
  var list = two.slice(0, rindex + 1);
  list[rindex] = list[rindex].slice(0, cindex + 1);
  var flatedList = Object(_util__WEBPACK_IMPORTED_MODULE_6__["flat"])(list);
  return flatedList.length;
};

var Grid = function Grid(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      _props$columns = props.columns,
      columns = _props$columns === void 0 ? 4 : _props$columns,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      span = props.span,
      border = props.border,
      children = props.children;

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_util__WEBPACK_IMPORTED_MODULE_6__["twoDimensional"])(data, columns, span, 24);
  }, [data === null || data === void 0 ? void 0 : data.length]),
      _useMemo2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMemo, 2),
      two = _useMemo2[0],
      spanTwo = _useMemo2[1];

  var gutterArray = gutter;

  if (!Array.isArray(gutter)) {
    gutterArray = [gutter];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls)
  }, two === null || two === void 0 ? void 0 : two.map(function (row, rindex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_row__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: rindex,
      gutter: gutterArray[0],
      className: border && "".concat(prefixCls, "-row-border"),
      style: {
        marginBottom: rindex !== two.length - 1 ? "".concat(gutterArray[1], "px") : undefined,
        borderBottom: two.length - 1 !== rindex ? border : undefined
      }
    }, row === null || row === void 0 ? void 0 : row.map(function (col, cindex) {
      var _spanTwo$rindex;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_col__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: cindex,
        span: spanTwo === null || spanTwo === void 0 ? void 0 : (_spanTwo$rindex = spanTwo[rindex]) === null || _spanTwo$rindex === void 0 ? void 0 : _spanTwo$rindex[cindex],
        className: border && "".concat(prefixCls, "-col-border"),
        style: {
          borderRight: row.length - 1 !== cindex ? border : undefined
        }
      }, typeof children === 'function' ? children === null || children === void 0 ? void 0 : children(col, getColIndex(spanTwo, rindex, cindex), cindex, rindex) : children);
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./node_modules/annar/esm/icon/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/icon/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('icon');

var Icon = function Icon(props) {
  var _classNames;

  var type = props.type,
      color = props.color,
      size = props.size,
      style = props.style;
  var fontSize = '28px';

  if (size) {
    if (typeof size === 'string') {
      fontSize = size;
    }

    if (typeof size === 'number') {
      fontSize = size + 'px';
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "iconfont", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "icon-".concat(type), true), _classNames)),
    style: _objectSpread(_objectSpread({}, style), {}, {
      color: color,
      fontSize: fontSize
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./node_modules/annar/esm/image-upload/index.js":
/*!******************************************************!*\
  !*** ./node_modules/annar/esm/image-upload/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/annar/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");









var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('image-upload');

var ImageUpload = function ImageUpload(props) {
  var _props$files = props.files,
      files = _props$files === void 0 ? [] : _props$files,
      onChange = props.onChange,
      multiple = props.multiple,
      multipleCount = props.multipleCount,
      sizeType = props.sizeType,
      sourceType = props.sourceType,
      _props$deletable = props.deletable,
      deletable = _props$deletable === void 0 ? true : _props$deletable,
      disabled = props.disabled,
      maxCount = props.maxCount,
      children = props.children;

  var handleClickImage = function handleClickImage(index) {
    var urls = files;
    var current = index;

    if (typeof files[index] !== 'string') {
      urls = files.map(function (i) {
        return i.url;
      });
    }

    Object(_one__WEBPACK_IMPORTED_MODULE_5__["previewImage"])({
      urls: urls,
      current: current,
      // @ts-ignore
      enablesavephoto: true,
      enableShowPhotoDownload: true
    });
  };

  var handleAdd = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var params, _yield$to, _yield$to2, errc, resc, targetFiles, newFiles;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!disabled) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              params = {};

              if (multiple) {
                params.multiple = true;
                params.count = 99;
              }

              if (multipleCount) {
                params.count = multipleCount;
              }

              if (sizeType) {
                params.sizeType = sizeType;
              }

              if (sourceType) {
                params.sourceType = sourceType;
              }

              _context.next = 9;
              return Object(_util__WEBPACK_IMPORTED_MODULE_6__["to"])(Object(_util__WEBPACK_IMPORTED_MODULE_6__["sync"])(_one__WEBPACK_IMPORTED_MODULE_5__["chooseImage"], params));

            case 9:
              _yield$to = _context.sent;
              _yield$to2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_yield$to, 2);
              errc = _yield$to2[0];
              resc = _yield$to2[1];

              if (!errc) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return");

            case 15:
              targetFiles = resc.filePaths ? resc.filePaths.map(function (i) {
                return i;
              }) : resc.tempFilePaths.map(function (i) {
                return i;
              });
              newFiles = files.concat(targetFiles);
              onChange === null || onChange === void 0 ? void 0 : onChange(newFiles);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleAdd() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDelete = function handleDelete(e, index) {
    e.stopPropagation();
    var newValue = Object(_util__WEBPACK_IMPORTED_MODULE_6__["deepClone"])(files);
    newValue.splice(index, 1);
    newValue = newValue.map(function (item, index) {
      var newItem = item;

      if (typeof newItem === 'string') {
        return newItem;
      }

      newItem.key = String(index);
      return newItem;
    });
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: prefixCls
  }, files.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      key: item.key || index,
      className: "".concat(prefixCls, "-item"),
      onTap: function onTap() {
        return handleClickImage(index);
      }
    }, deletable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-item-delete")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      style: {
        height: '24px'
      },
      onTap: function onTap(e) {
        handleDelete(e, index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
      type: "close",
      size: "24px",
      color: "#FDFFFD",
      style: {
        width: '24px',
        height: '24px',
        verticalAlign: 'text-top'
      }
    }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["Image"], {
      mode: "widthFix",
      src: item.url || item
    }));
  }), !maxCount || files.length < maxCount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    onTap: handleAdd
  }, children !== null && children !== void 0 ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-add")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "add",
    size: "48px",
    color: "#BABEC6"
  }))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageUpload);

/***/ }),

/***/ "./node_modules/annar/esm/images/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/images/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPrefixCls"])('images');

var Images = function Images(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data;

  var handleClickImage = function handleClickImage(index) {
    var urls = data;
    var current = index;

    if (typeof data[index] !== 'string') {
      urls = data.map(function (i) {
        return i.url;
      });
    }

    Object(_one__WEBPACK_IMPORTED_MODULE_2__["previewImage"])({
      urls: urls,
      current: current,
      // @ts-ignore
      enablesavephoto: true,
      enableShowPhotoDownload: true
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: prefixCls
  }, data && data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
      key: item.key || index,
      className: "".concat(prefixCls, "-item"),
      onTap: function onTap() {
        return handleClickImage(index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      mode: "widthFix",
      src: item.url || item
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Images);

/***/ }),

/***/ "./node_modules/annar/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/annar/esm/index.js ***!
  \*****************************************/
/*! exports provided: Button, Icon, Popup, Row, Col, Grid, Space, Tabs, Steps, Dropdown, Selector, Form, Input, Picker, PickerView, PickerViewColumn, Radio, Checkbox, Switch, DatePicker, ImageUpload, Cascade, Rate, Textarea, SearchBar, FormValue, Stepper, Card, Cell, Swiper, Images, Progress, ProgressBar, Tag, ActionSheet, Filter, Loading, Mask, Result, Spin, Skeleton, Ling, SwipeAction, SelectorPopup, CascadePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./node_modules/annar/esm/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _popup__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./row */ "./node_modules/annar/esm/row/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _row__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./col */ "./node_modules/annar/esm/col/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _col__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid */ "./node_modules/annar/esm/grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _grid__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./space */ "./node_modules/annar/esm/space/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return _space__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs */ "./node_modules/annar/esm/tabs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _tabs__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./steps */ "./node_modules/annar/esm/steps/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Steps", function() { return _steps__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dropdown */ "./node_modules/annar/esm/dropdown/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _dropdown__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selector */ "./node_modules/annar/esm/selector/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selector", function() { return _selector__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form */ "./node_modules/annar/esm/form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input */ "./node_modules/annar/esm/input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./picker */ "./node_modules/annar/esm/picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _picker__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _picker_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./picker-view */ "./node_modules/annar/esm/picker-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _picker_view__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _picker_view_column__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./picker-view-column */ "./node_modules/annar/esm/picker-view-column/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _picker_view_column__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./radio */ "./node_modules/annar/esm/radio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _radio__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./checkbox */ "./node_modules/annar/esm/checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./switch */ "./node_modules/annar/esm/switch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _switch__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./date-picker */ "./node_modules/annar/esm/date-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _date_picker__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _image_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./image-upload */ "./node_modules/annar/esm/image-upload/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageUpload", function() { return _image_upload__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _cascade__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cascade */ "./node_modules/annar/esm/cascade/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cascade", function() { return _cascade__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _rate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rate */ "./node_modules/annar/esm/rate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rate", function() { return _rate__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./textarea */ "./node_modules/annar/esm/textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _textarea__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _search_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search-bar */ "./node_modules/annar/esm/search-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return _search_bar__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _form_value__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form-value */ "./node_modules/annar/esm/form-value/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormValue", function() { return _form_value__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./stepper */ "./node_modules/annar/esm/stepper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stepper", function() { return _stepper__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./card */ "./node_modules/annar/esm/card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cell */ "./node_modules/annar/esm/cell/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return _cell__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./swiper */ "./node_modules/annar/esm/swiper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _swiper__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./images */ "./node_modules/annar/esm/images/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return _images__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./progress */ "./node_modules/annar/esm/progress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _progress__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./progress-bar */ "./node_modules/annar/esm/progress-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _progress_bar__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./tag */ "./node_modules/annar/esm/tag/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _tag__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _action_sheet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./action-sheet */ "./node_modules/annar/esm/action-sheet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSheet", function() { return _action_sheet__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./filter */ "./node_modules/annar/esm/filter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./loading */ "./node_modules/annar/esm/loading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _loading__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./mask */ "./node_modules/annar/esm/mask/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mask", function() { return _mask__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./result */ "./node_modules/annar/esm/result/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return _result__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _spin__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./spin */ "./node_modules/annar/esm/spin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spin", function() { return _spin__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./skeleton */ "./node_modules/annar/esm/skeleton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return _skeleton__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _ling__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ling */ "./node_modules/annar/esm/ling/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ling", function() { return _ling__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _swipe_action__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./swipe-action */ "./node_modules/annar/esm/swipe-action/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwipeAction", function() { return _swipe_action__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _selector_popup__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./selector-popup */ "./node_modules/annar/esm/selector-popup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectorPopup", function() { return _selector_popup__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _cascade_popup__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./cascade-popup */ "./node_modules/annar/esm/cascade-popup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CascadePopup", function() { return _cascade_popup__WEBPACK_IMPORTED_MODULE_44__["default"]; });

// 通用


 // 布局




 // 导航




 // 数据录入
















 // 数据展示







 // 反馈








 // 手势

 // 二次封装




/***/ }),

/***/ "./node_modules/annar/esm/input/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/input/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('input');

var AnnarInput = function AnnarInput(props) {
  var name = props.name,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      size = props.size,
      value = props.value,
      defaultValue = props.defaultValue,
      prefix = props.prefix,
      suffix = props.suffix,
      className = props.className,
      style = props.style,
      inputStyle = props.inputStyle,
      placeholderStyle = props.placeholderStyle,
      align = props.align,
      placeholder = props.placeholder,
      disabled = props.disabled,
      maxLength = props.maxLength,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur;

  var _type = type === 'password' ? 'text' : type;

  var inputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-align-").concat(align), align)),
    style: inputStyle,
    placeholderStyle: _objectSpread({
      color: '#bfbfbf'
    }, placeholderStyle),
    name: name // @ts-ignore
    ,
    type: _type,
    password: type === 'password',
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    maxLength: maxLength,
    onInput: onChange,
    onFocus: onFocus,
    onBlur: onBlur
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-wrapper"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-wrapper-").concat(size), size), className),
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-prefix")
  }, prefix), inputElement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-suffix")
  }, suffix));
};

/* harmony default export */ __webpack_exports__["default"] = (AnnarInput);

/***/ }),

/***/ "./node_modules/annar/esm/ling/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/ling/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('ling');

var Ling = function Ling(props, ref) {
  var _classNames;

  var _props$position = props.position,
      position = _props$position === void 0 ? 'top' : _props$position;
  var durationRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(2000);
  var onCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      config = _useState4[0],
      setConfig = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (show && durationRef.current !== 0) {
      setTimeout(function () {
        setShow(false);
      }, durationRef.current);
    }

    if (!show) {
      var _onCloseRef$current;

      (_onCloseRef$current = onCloseRef.current) === null || _onCloseRef$current === void 0 ? void 0 : _onCloseRef$current.call(onCloseRef);
    }
  }, [show, durationRef.current, onCloseRef.current]);

  var handleShow = function handleShow(params, duration, onClose) {
    if (typeof params === 'string') {
      setConfig({
        title: params,
        titleColor: '#333'
      });
    }

    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(params) === 'object' && params !== null) {
      setConfig(params);
    }

    if (duration || duration === 0) {
      durationRef.current = duration;
    } else {
      durationRef.current = 2000;
    }

    if (onClose && typeof onClose === 'function') {
      onCloseRef.current = onClose;
    }

    setShow(true);
  };

  var handleShowStatus = function handleShowStatus(commonConfig, params, duration, onClose) {
    var config = commonConfig;

    if (typeof params === 'string') {
      config = _objectSpread({
        title: params,
        titleColor: '#333'
      }, commonConfig);
    }

    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(params) === 'object' && params !== null) {
      config = _objectSpread(_objectSpread({}, params), commonConfig);
    }

    handleShow(config, duration, onClose);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"])(ref, function () {
    return {
      show: handleShow,
      info: function info(params, duration, onClose) {
        var infoConfig = {
          icon: 'infofill',
          iconColor: '#1890ff'
        };
        handleShowStatus(infoConfig, params, duration, onClose);
      },
      success: function success(params, duration, onClose) {
        var successConfig = {
          icon: 'roundcheckfill',
          iconColor: '#52c41a'
        };
        handleShowStatus(successConfig, params, duration, onClose);
      },
      warning: function warning(params, duration, onClose) {
        var warningConfig = {
          icon: 'warnfill',
          iconColor: '#faad14'
        };
        handleShowStatus(warningConfig, params, duration, onClose);
      },
      error: function error(params, duration, onClose) {
        var errorConfig = {
          icon: 'roundclosefill',
          iconColor: '#f5222d'
        };
        handleShowStatus(errorConfig, params, duration, onClose);
      }
    };
  });
  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-show"), show), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(position), position), _classNames));
  var iconNode = typeof (config === null || config === void 0 ? void 0 : config.icon) === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: config === null || config === void 0 ? void 0 : config.icon,
    color: config === null || config === void 0 ? void 0 : config.iconColor,
    size: "52px"
  }) : config === null || config === void 0 ? void 0 : config.icon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-title"),
    style: {
      color: config === null || config === void 0 ? void 0 : config.titleColor
    }
  }, config === null || config === void 0 ? void 0 : config.title), (config === null || config === void 0 ? void 0 : config.content) || (config === null || config === void 0 ? void 0 : config.content) === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-content")
  }, config === null || config === void 0 ? void 0 : config.content) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-icon")
  }, iconNode));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(Ling));

/***/ }),

/***/ "./node_modules/annar/esm/loading/index.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/loading/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPrefixCls"])('loading');

var Loading = function Loading(props) {
  var style = props.style,
      type = props.type,
      _props$color = props.color,
      color = _props$color === void 0 ? '#999' : _props$color,
      _props$gapColor = props.gapColor,
      gapColor = _props$gapColor === void 0 ? '#FDFFFD' : _props$gapColor,
      _props$radius = props.radius,
      radius = _props$radius === void 0 ? '42px' : _props$radius;

  if (type === 'gap') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-gap"),
      style: {
        height: radius,
        width: radius,
        border: "2px solid ".concat(color)
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-gap-fill"),
      style: {
        backgroundColor: gapColor
      }
    }));
  }

  if (type === 'wave') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-wave")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }));
  }

  if (type === 'anna') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "-anna")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      style: {
        backgroundColor: color
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls,
    style: _objectSpread(_objectSpread({}, style), {}, {
      height: radius,
      width: radius,
      borderColor: "".concat(color, " ").concat(color, " transparent")
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./node_modules/annar/esm/mask/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/mask/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('mask');

var Mask = function Mask(props) {
  var _classNames;

  var show = props.show,
      onTap = props.onTap,
      zIndex = props.zIndex,
      style = props.style,
      children = props.children;
  var maskZindex = zIndex || zIndex === 0 ? zIndex : 999;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "_active"), show), _classNames)),
    style: _objectSpread(_objectSpread({}, style), {}, {
      zIndex: maskZindex
    }),
    onTap: onTap
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Mask);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/chooseImage/index.wechat.js":
/*!********************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/chooseImage/index.wechat.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}


/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["chooseImage"])(_objectSpread({}, options));
});

/***/ }),

/***/ "./node_modules/annar/esm/one/api/createSelectorQuery/index.wechat.js":
/*!****************************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/createSelectorQuery/index.wechat.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createSelectorQuery"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/datePicker/index.wechat.js":
/*!*******************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/datePicker/index.wechat.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showToast"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/hideLoading/index.wechat.js":
/*!********************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/hideLoading/index.wechat.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/index.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/one/api/index.js ***!
  \*************************************************/
/*! exports provided: createSelectorQuery, datePicker, chooseImage, previewImage, showToast, showLoading, hideLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createSelectorQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createSelectorQuery */ "./node_modules/annar/esm/one/api/createSelectorQuery/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _createSelectorQuery__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _datePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datePicker */ "./node_modules/annar/esm/one/api/datePicker/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datePicker", function() { return _datePicker__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _chooseImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chooseImage */ "./node_modules/annar/esm/one/api/chooseImage/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _chooseImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _previewImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./previewImage */ "./node_modules/annar/esm/one/api/previewImage/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _previewImage__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _showToast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showToast */ "./node_modules/annar/esm/one/api/showToast/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _showToast__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _showLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showLoading */ "./node_modules/annar/esm/one/api/showLoading/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _showLoading__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hideLoading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hideLoading */ "./node_modules/annar/esm/one/api/hideLoading/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _hideLoading__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./node_modules/annar/esm/one/api/previewImage/index.wechat.js":
/*!*********************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/previewImage/index.wechat.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_wechat__WEBPACK_IMPORTED_MODULE_0__["previewImage"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/showLoading/index.wechat.js":
/*!********************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/showLoading/index.wechat.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showLoading"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/api/showToast/index.wechat.js":
/*!******************************************************************!*\
  !*** ./node_modules/annar/esm/one/api/showToast/index.wechat.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showToast"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/base/checkbox/index.wechat.js":
/*!******************************************************************!*\
  !*** ./node_modules/annar/esm/one/base/checkbox/index.wechat.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/base/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/one/base/index.js ***!
  \**************************************************/
/*! exports provided: ScrollView, Checkbox, Picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-view */ "./node_modules/annar/esm/one/base/scroll-view/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _scroll_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox */ "./node_modules/annar/esm/one/base/checkbox/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picker */ "./node_modules/annar/esm/one/base/picker/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _picker__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./node_modules/annar/esm/one/base/picker/index.wechat.js":
/*!****************************************************************!*\
  !*** ./node_modules/annar/esm/one/base/picker/index.wechat.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Picker"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/base/scroll-view/index.wechat.js":
/*!*********************************************************************!*\
  !*** ./node_modules/annar/esm/one/base/scroll-view/index.wechat.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");

/* harmony default export */ __webpack_exports__["default"] = (remax_wechat__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]);

/***/ }),

/***/ "./node_modules/annar/esm/one/index.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/one/index.js ***!
  \*********************************************/
/*! exports provided: createSelectorQuery, datePicker, chooseImage, previewImage, showToast, showLoading, hideLoading, ScrollView, Checkbox, Picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./node_modules/annar/esm/one/api/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datePicker", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["datePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]; });

/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/annar/esm/one/base/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["Picker"]; });




/***/ }),

/***/ "./node_modules/annar/esm/picker-view-column/index.js":
/*!************************************************************!*\
  !*** ./node_modules/annar/esm/picker-view-column/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('picker-view-column');
var heightUnit = 44;

var PickerViewColumn = function PickerViewColumn(props) {
  var _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _props$optionsKey = props.optionsKey,
      optionsKey = _props$optionsKey === void 0 ? 'text' : _props$optionsKey,
      onChange = props.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(heightUnit * 2),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      initial = _useState2[0],
      setInitial = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      start = _useState4[0],
      setStart = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initial),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      y = _useState6[0],
      setY = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      columnHeight = _useState8[0],
      setColumnHeight = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      isTransition = _useState10[0],
      setIsTransition = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setColumnHeight(options.length * heightUnit);
  }, [options]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!value || value <= 0) {
      setY(heightUnit * 2);
      return;
    }

    setY(-heightUnit * value + heightUnit * 2);
  }, [value]);

  var handleTouchStart = function handleTouchStart(e) {
    var _e$preventDefault;

    (_e$preventDefault = e.preventDefault) === null || _e$preventDefault === void 0 ? void 0 : _e$preventDefault.call(e);
    setIsTransition(false);
    setStart(e.touches[0].clientY);
  };

  var handleTouchMove = function handleTouchMove(e) {
    var _e$preventDefault2;

    (_e$preventDefault2 = e.preventDefault) === null || _e$preventDefault2 === void 0 ? void 0 : _e$preventDefault2.call(e);
    var diff = e.touches[0].clientY - start;
    var updateY = diff + initial;

    if (updateY < -columnHeight + heightUnit * 2) {
      setY(-columnHeight + heightUnit * 2);
      return;
    }

    if (updateY > heightUnit * 3) {
      setY(heightUnit * 3);
      return;
    }

    setY(updateY);
  };

  var handleTouchEnd = function handleTouchEnd(e) {
    var _e$preventDefault3;

    (_e$preventDefault3 = e.preventDefault) === null || _e$preventDefault3 === void 0 ? void 0 : _e$preventDefault3.call(e);

    if (y < -columnHeight + heightUnit * 3) {
      var val = -columnHeight + heightUnit * 3;
      setY(val);
      setInitial(val);
      setIsTransition(true);
      var v = Math.floor((val - heightUnit * 2) / -heightUnit);
      onChange === null || onChange === void 0 ? void 0 : onChange(v);
      return;
    }

    if (y > heightUnit * 2) {
      var _val = heightUnit * 2;

      setY(_val);
      setInitial(_val);
      setIsTransition(true);

      var _v = Math.floor((_val - heightUnit * 2) / -heightUnit);

      onChange === null || onChange === void 0 ? void 0 : onChange(_v);
      return;
    }

    if (y % heightUnit !== 0) {
      var r = Math.round(y / heightUnit) - Math.floor(y / heightUnit);
      var _val2 = 0;

      if (r === 1) {
        _val2 = Math.ceil(y / heightUnit) * heightUnit;
      } else {
        _val2 = Math.floor(y / heightUnit) * heightUnit;
      }

      setY(_val2);
      setInitial(_val2);
      setIsTransition(true);

      var _v2 = Math.floor((_val2 - heightUnit * 2) / -heightUnit);

      onChange === null || onChange === void 0 ? void 0 : onChange(_v2);
      return;
    }

    setInitial(y);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-items"),
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    style: {
      transform: "translate3d(0, ".concat(y, "PX, 0)"),
      transition: "".concat(isTransition ? 'transform' : 'none', " 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)")
    }
  }, options === null || options === void 0 ? void 0 : options.map(function (option, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: index,
      className: "".concat(prefixCls, "-item")
    }, Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(option) === 'object' ? option === null || option === void 0 ? void 0 : option[optionsKey] : option);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PickerViewColumn);

/***/ }),

/***/ "./node_modules/annar/esm/picker-view/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/annar/esm/picker-view/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_2__["getPrefixCls"])('picker-view');

var PickerView = function PickerView(props) {
  var title = props.title,
      children = props.children,
      onOK = props.onOK,
      onCancel = props.onCancel;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-toolbar")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-cancel"),
    onTap: onCancel
  }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-tittle")
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-confirm"),
    onTap: onOK
  }, "\u786E\u5B9A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-columns")
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-selected")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-mask")
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PickerView);

/***/ }),

/***/ "./node_modules/annar/esm/picker/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/picker/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony import */ var _picker_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../picker-view */ "./node_modules/annar/esm/picker-view/index.js");
/* harmony import */ var _picker_view_column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../picker-view-column */ "./node_modules/annar/esm/picker-view-column/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");








var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('picker');

var Picker = function Picker(props) {
  var _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      range = props.range,
      _props$rangeKey = props.rangeKey,
      rangeKey = _props$rangeKey === void 0 ? 'text' : _props$rangeKey,
      disabled = props.disabled,
      children = props.children,
      onChange = props.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var val = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(value < 0 ? 0 : value);

  var handleTap = function handleTap() {
    if (disabled) {
      return;
    }

    setOpen(function (state) {
      return !state;
    });
  };

  var handleOK = function handleOK(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(val.current, e);
    setOpen(false);
  };

  var handleChangeColumn = function handleChangeColumn(multiple, v, index) {
    if (multiple) {
      val.current = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array.isArray(val.current) ? val.current : [val.current]);
      val.current[index] = v;
      return;
    }

    val.current = v;
  };

  var multiple = false;

  if (Array.isArray(range === null || range === void 0 ? void 0 : range[0])) {
    multiple = true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-content"),
    onTap: handleTap
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "bottom",
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_picker_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onOK: handleOK,
    onCancel: function onCancel() {
      return setOpen(false);
    }
  }, multiple ? range === null || range === void 0 ? void 0 : range.map(function (columnData, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_picker_view_column__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      value: value[index],
      options: columnData,
      optionsKey: rangeKey,
      onChange: function onChange(v) {
        return handleChangeColumn(true, v, index);
      }
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_picker_view_column__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    options: range,
    optionsKey: rangeKey,
    onChange: function onChange(v) {
      return handleChangeColumn(false, v);
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Picker);

/***/ }),

/***/ "./node_modules/annar/esm/popup/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/popup/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mask */ "./node_modules/annar/esm/mask/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('popup');

var Popup = function Popup(props) {
  var _classNames;

  var _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open,
      children = props.children,
      onClose = props.onClose,
      closeable = props.closeable,
      title = props.title,
      _props$position = props.position,
      position = _props$position === void 0 ? 'center' : _props$position,
      style = props.style,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      square = props.square,
      curve = props.curve,
      transparent = props.transparent;

  var handleClickMask = function handleClickMask() {
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };

  var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container-").concat(position), position), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container-ease"), curve === 'ease'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container-square"), square), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container-active"), open), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-container-transparent"), transparent), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classes,
    style: style
  }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-container-title")
  }, title) : null, children, closeable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-container-close"),
    onTap: function onTap() {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "close",
    size: "40px",
    color: "#999"
  })) : null), mask ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_mask__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: open,
    onTap: handleClickMask
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./node_modules/annar/esm/progress-bar/index.js":
/*!******************************************************!*\
  !*** ./node_modules/annar/esm/progress-bar/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading */ "./node_modules/annar/esm/loading/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('progress_bar');

var ProgressBar = function ProgressBar(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      value = props.value,
      style = props.style;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      move = _React$useState2[0],
      setMove = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (data.length > 1 && !move) {
      setTimeout(function () {
        setMove(true);
      }, 100);
    }
  }, [data]);
  var curIndex = -1;
  data.forEach(function (item, index) {
    if (value === item.key) {
      curIndex = index;
    }
  });
  var moveX = data.length > 0 ? 100 / data.length * (curIndex + 1) : 100;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls,
    style: style
  }, data === null || data === void 0 ? void 0 : data.map(function (item, index) {
    var _classNames;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: item.key,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-node"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-node_first"), index === 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-node_last"), index === curIndex), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-node_active"), index <= curIndex), _classNames))
    }, item.value);
  }), data.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "gap",
    gapColor: "#E8E8E8"
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-process"),
    style: {
      width: move ? "".concat(moveX, "%") : 0,
      transition: "width ".concat((curIndex + 1) * 0.3, "s ease-in")
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./node_modules/annar/esm/progress/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/progress/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('progress');

var validProgress = function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }

  if (progress > 100) {
    return 100;
  }

  return progress;
};

var sortGradient = function sortGradient(gradients) {
  var tempArr = [];
  Object.keys(gradients).forEach(function (key) {
    var formattedKey = parseFloat(key.replace(/%/g, ''));

    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort(function (a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function (_ref) {
    var key = _ref.key,
        value = _ref.value;
    return "".concat(value, " ").concat(key, "%");
  }).join(', ');
};

var handleGradient = function handleGradient(color) {
  var _color$from = color.from,
      from = _color$from === void 0 ? '#1890ff' : _color$from,
      _color$to = color.to,
      to = _color$to === void 0 ? '#1890ff' : _color$to,
      _color$direction = color.direction,
      direction = _color$direction === void 0 ? 'to right' : _color$direction,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(color, ["from", "to", "direction"]);

  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return {
      backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
    };
  }

  return {
    backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
  };
};

var Line = function Line(props) {
  var percent = props.percent,
      width = props.width,
      size = props.size,
      color = props.color,
      bgColor = props.bgColor,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'round' : _props$shape,
      successPercent = props.successPercent,
      children = props.children;
  var backgroundProps;

  if (color && typeof color !== 'string') {
    backgroundProps = handleGradient(color);
  } else {
    backgroundProps = {
      background: color
    };
  }

  var bgStyle;
  var borderRadius = null;

  if (shape === 'sharp') {
    borderRadius = 0;
  }

  if (shape === 'square') {
    borderRadius = '4px';
  }

  if (borderRadius || borderRadius === 0) {
    bgStyle = {
      borderRadius: borderRadius
    };
  }

  if (bgColor && typeof bgColor === 'string') {
    bgStyle = _objectSpread(_objectSpread({}, bgStyle), {}, {
      backgroundColor: bgColor
    });
  }

  var sizeWidth = '16px';

  if (size === 'small') {
    sizeWidth = '12px';
  }

  if (size === 'large') {
    sizeWidth = '20px';
  }

  var percentStyle = _objectSpread({
    width: "".concat(validProgress(percent), "%"),
    height: width || sizeWidth,
    borderRadius: borderRadius
  }, backgroundProps);

  var successPercentStyle = {
    width: "".concat(validProgress(successPercent), "%"),
    height: width || sizeWidth,
    borderRadius: borderRadius
  };
  var successSegment = successPercent !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-success-bg"),
    style: successPercentStyle
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-outer")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-inner"),
    style: bgStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-bg"),
    style: percentStyle
  }), successSegment)), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./node_modules/annar/esm/radio/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/radio/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('radio');

var Radio = function Radio(props) {
  var children = props.children,
      checked = props.checked,
      value = props.value,
      extra = props.extra,
      style = props.style,
      onChange = props.onChange;

  var handleClick = function handleClick(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked, e, value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container"),
    onTap: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("".concat(prefixCls, "-out-round"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(prefixCls, "-out-round-checked"), checked))
  }, checked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-inner-round")
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-children")
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-extra")
  }, extra));
};

var getRadios = function getRadios(children, value, onChange) {
  var onGroupChange = function onGroupChange(checked, e, v) {
    var newValue = v;
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue, e);
  };

  var radios = react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (radio) {
    var newRadio = radio;
    var checked = false;

    if (newRadio && newRadio.props) {
      if ((newRadio.props.value || newRadio.props.value === 0 || newRadio.props.value === false) && newRadio.props.value === value) {
        checked = true;
      } else {
        checked = false;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Radio, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newRadio.props, {
        checked: checked,
        onChange: onGroupChange
      }));
    }

    return newRadio;
  });
  return radios;
};

Radio.Group = function (props) {
  var value = props.value,
      children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      onChange = props.onChange,
      style = props.style;
  var radios = getRadios(children, value, onChange);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: _objectSpread({
      display: 'flex',
      flexDirection: direction
    }, style)
  }, radios);
};

/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./node_modules/annar/esm/rate/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/rate/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('rate');

var Rate = function Rate(props) {
  var _props$count = props.count,
      count = _props$count === void 0 ? 5 : _props$count,
      label = props.label,
      _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      onChange = props.onChange,
      readOnly = props.readOnly,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? 'favor' : _props$icon,
      _props$iconFill = props.iconFill,
      iconFill = _props$iconFill === void 0 ? 'favorfill' : _props$iconFill,
      _props$size = props.size,
      size = _props$size === void 0 ? '48px' : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? '#FFD700' : _props$color;

  var handleClick = function handleClick(index) {
    if (readOnly) {
      return;
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(index + 1);
  };

  var stars = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (!count) {
      return [];
    }

    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Array(count).keys());
  }, [count]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-label")
  }, label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-value")
  }, stars.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: index,
      className: "".concat(prefixCls, "-value-star"),
      onTap: function onTap() {
        handleClick(index);
      }
    }, value >= index + 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: iconFill,
      size: size,
      color: color
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: icon,
      size: size,
      color: "#999"
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Rate);

/***/ }),

/***/ "./node_modules/annar/esm/result/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/result/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPrefixCls"])('result');

var getIconNameByStatus = function getIconNameByStatus(status) {
  var obj = {
    name: 'infofill',
    color: '#1890ff'
  };

  switch (status) {
    case 'info':
      obj = {
        name: 'infofill',
        color: '#1890ff'
      };
      break;

    case 'success':
      obj = {
        name: 'roundcheckfill',
        color: '#52c41a'
      };
      break;

    case 'warning':
      obj = {
        name: 'warnfill',
        color: '#faad14'
      };
      break;

    case 'error':
      obj = {
        name: 'roundclosefill',
        color: '#f5222d'
      };
      break;

    default:
      break;
  }

  return obj;
};

var Result = function Result(props) {
  var _props$status = props.status,
      status = _props$status === void 0 ? 'info' : _props$status,
      title = props.title,
      subTitle = props.subTitle,
      extra = props.extra,
      children = props.children,
      icon = props.icon,
      height = props.height;
  var isCustomIcon = false;
  var iconObj = getIconNameByStatus(status);

  if (icon) {
    if (Object.prototype.toString.call(icon) === '[object Object]') {
      iconObj = icon;
    } else {
      isCustomIcon = true;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: prefixCls,
    style: {
      height: height || '100vh'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-icon")
  }, isCustomIcon ? icon : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-icon-status")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: iconObj.name,
    color: iconObj.color,
    size: "168px"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-title")
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-sub_title")
  }, subTitle), children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-content")
  }, children) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "".concat(prefixCls, "-extra")
  }, extra));
};

/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./node_modules/annar/esm/row/index.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/row/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('row');

var renderCols = function renderCols(columns, halfGutter) {
  var cols = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(columns, function (column) {
    var style = halfGutter ? {
      paddingLeft: "".concat(halfGutter, "px"),
      paddingRight: "".concat(halfGutter, "px")
    } : null;
    return _objectSpread(_objectSpread({}, column), {}, {
      props: _objectSpread(_objectSpread({}, column.props), {}, {
        style: _objectSpread(_objectSpread({}, column.props.style), style)
      })
    });
  });
  return cols;
};

var Row = function Row(props) {
  var _classNames;

  var _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'start' : _props$justify,
      _props$align = props.align,
      align = _props$align === void 0 ? 'top' : _props$align,
      style = props.style,
      className = props.className,
      children = props.children;
  var halfGutter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return gutter / 2;
  }, [gutter]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-justify-").concat(justify), justify), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-align-").concat(align), align), _classNames), className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      marginLeft: "-".concat(halfGutter, "px"),
      marginRight: "-".concat(halfGutter, "px")
    })
  }, renderCols(children, halfGutter));
};

/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./node_modules/annar/esm/search-bar/index.js":
/*!****************************************************!*\
  !*** ./node_modules/annar/esm/search-bar/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");








var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('search_bar');
var showBtn = false;

var SearchBar = function SearchBar(props) {
  var _classNames, _classNames3, _classNames4;

  var value = props.value,
      placeholder = props.placeholder,
      onInput = props.onInput,
      onClear = props.onClear,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onActionClick = props.onActionClick,
      onSubmit = props.onSubmit,
      inputStyle = props.inputStyle,
      shape = props.shape,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      _props$confirmType = props.confirmType,
      confirmType = _props$confirmType === void 0 ? 'search' : _props$confirmType,
      style = props.style,
      focus = props.focus,
      _props$actionName = props.actionName,
      actionName = _props$actionName === void 0 ? '取消' : _props$actionName,
      keepShowActionButton = props.keepShowActionButton,
      hideActionButton = props.hideActionButton,
      size = props.size;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isFocus = _useState2[0],
      setIsFocus = _useState2[1];

  var handleFocus = function handleFocus(e) {
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    setIsFocus(true);
  };

  var handleBlur = function handleBlur(e) {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    setIsFocus(false);
  };

  var handleInput = function handleInput(e) {
    onInput === null || onInput === void 0 ? void 0 : onInput(e.target.value);
  };

  var handleClear = function handleClear() {
    onClear === null || onClear === void 0 ? void 0 : onClear(value);
  };

  var handleActionClick = function handleActionClick() {
    showBtn = false;
    onActionClick === null || onActionClick === void 0 ? void 0 : onActionClick();
  };

  var handleConfirm = function handleConfirm(e) {
    onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(e.target.value);
  };

  var active = isFocus || value || focus;

  if (active && !showBtn) {
    showBtn = true;
  }

  var iconSize = '32px';

  if (size === 'large') {
    iconSize = '36px';
  }

  if (size === 'small') {
    iconSize = '28px';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-large"), size === 'large'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-small"), size === 'small'), _classNames)),
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("".concat(prefixCls, "-input"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-input-").concat(shape), shape)),
    style: inputStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-input-synthetic"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-input-is_left"), active), _classNames3))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-input-synthetic-icon")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "search",
    size: iconSize,
    color: "#999"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-input-synthetic-placeholder"),
    style: {
      visibility: active ? 'hidden' : 'visible'
    }
  }, placeholder)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    className: "".concat(prefixCls, "-input-value") // @ts-ignore
    ,
    type: type,
    confirmType: confirmType,
    value: value,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onInput: handleInput,
    onConfirm: handleConfirm,
    focus: focus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-input-clear"),
    onTap: handleClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "roundclosefill",
    size: "".concat(iconSize, "px"),
    color: "#999",
    style: {
      visibility: value ? 'visible' : 'hidden'
    }
  }))), !hideActionButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-action_button"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-show_action_button"), keepShowActionButton ? true : active), _classNames4)),
    onTap: handleActionClick
  }, actionName) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./node_modules/annar/esm/selector-popup/index.js":
/*!********************************************************!*\
  !*** ./node_modules/annar/esm/selector-popup/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup */ "./node_modules/annar/esm/popup/index.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selector */ "./node_modules/annar/esm/selector/index.js");
/* harmony import */ var _form_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-value */ "./node_modules/annar/esm/form-value/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");









var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('selector-popup');

var SelectorPopup = function SelectorPopup(props) {
  var placeholder = props.placeholder,
      children = props.children,
      title = props.title,
      onChange = props.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var handleTap = function handleTap() {
    setShow(true);
  };

  var handleClose = function handleClose() {
    setShow(false);
  };

  var handleChange = function handleChange(value, valueStr) {
    onChange === null || onChange === void 0 ? void 0 : onChange(value, valueStr);
    handleClose();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-formitem"),
    onTap: handleTap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_form_value__WEBPACK_IMPORTED_MODULE_6__["default"], {
    placeholder: placeholder
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_popup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "bottom",
    title: title,
    closeable: true,
    open: show,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_selector__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    style: {
      height: '540px'
    },
    onChange: handleChange
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectorPopup);

/***/ }),

/***/ "./node_modules/annar/esm/selector/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/selector/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('selector');
var currentParent = null;

var Selector = function Selector(props) {
  var _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      style = props.style,
      onChange = props.onChange,
      onChangeParentOption = props.onChangeParentOption;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      parentData = _useState2[0],
      setParentData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      childrenData = _useState4[0],
      setChildrenData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      activeParent = _useState6[0],
      setActiveParent = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (options.length > 0) {
      var data = options[0].children || [];
      currentParent = options[0];
      setActiveParent(currentParent.value);
      setParentData(options);
      setChildrenData(data);
    }
  }, [options]);

  var handleClickParentOption = function handleClickParentOption(option) {
    var data = option.children || [];
    currentParent = option;
    setChildrenData(data);
    setActiveParent(option.value);
    onChangeParentOption === null || onChangeParentOption === void 0 ? void 0 : onChangeParentOption(option);
  };

  var handleClickChildrenOption = function handleClickChildrenOption(option) {
    onChange === null || onChange === void 0 ? void 0 : onChange([currentParent.value, option.value], "".concat(currentParent.text, " ").concat(option.text));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-parent")
  }, parentData === null || parentData === void 0 ? void 0 : parentData.map(function (option, index) {
    var _classNames;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: option.value,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-option"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-active"), activeParent === option.value), _classNames)),
      onTap: function onTap() {
        handleClickParentOption(option);
      }
    }, option.text, activeParent === option.value && index !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-option-rounded_top")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-option-rounded_top-circle")
    })) : null, activeParent === option.value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-option-rounded_bottom")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      className: "".concat(prefixCls, "-option-rounded_bottom-circle")
    })) : null);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-children")
  }, childrenData === null || childrenData === void 0 ? void 0 : childrenData.map(function (option) {
    var _classNames2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: option.value,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-option"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-active"), (value === null || value === void 0 ? void 0 : value[1]) === option.value), _classNames2)),
      onTap: function onTap() {
        handleClickChildrenOption(option);
      }
    }, option.text);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Selector);

/***/ }),

/***/ "./node_modules/annar/esm/skeleton/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/skeleton/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_6__["getPrefixCls"])('skeleton');

var Skeleton = function Skeleton(props) {
  var _classNames7;

  var _props$title = props.title,
      title = _props$title === void 0 ? true : _props$title,
      titleColor = props.titleColor,
      backgroundColor = props.backgroundColor,
      active = props.active,
      _props$avatar = props.avatar,
      avatar = _props$avatar === void 0 ? false : _props$avatar,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? true : _props$loading,
      _props$image = props.image,
      image = _props$image === void 0 ? false : _props$image,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? {
    rows: 3,
    width: [80, 'auto', 200]
  } : _props$paragraph,
      _props$repetitions = props.repetitions,
      repetitions = _props$repetitions === void 0 ? 1 : _props$repetitions,
      space = props.space,
      customize = props.customize,
      fade = props.fade,
      style = props.style,
      children = props.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      loadingEnd = _React$useState2[0],
      setLoadingEnd = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      renderStart = _React$useState4[0],
      setRenderStart = _React$useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (fade) {
      if (!loading) {
        setTimeout(function () {
          setLoadingEnd(true);
        }, 300);
      }

      if (loading) {
        setLoadingEnd(false);
        setRenderStart(false);
      }
    }
  }, [loading]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (fade) {
      if (loadingEnd) {
        setTimeout(function () {
          setRenderStart(true);
        }, 100);
      }
    }
  }, [loadingEnd]);
  var rows = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return paragraph.rows ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(paragraph.rows).keys()) : [];
  }, [paragraph]);
  var rowsWidth = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    if (typeof paragraph.width === 'number') {
      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(rows.length).fill("".concat(paragraph.width, "px")));
    }

    if (typeof paragraph.width === 'string') {
      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(rows.length).fill(paragraph.width));
    }

    if (Array.isArray(paragraph.width)) {
      var _paragraph$width;

      return (_paragraph$width = paragraph.width) === null || _paragraph$width === void 0 ? void 0 : _paragraph$width.map(function (i) {
        if (typeof i === 'number') {
          return "".concat(i, "px");
        } else if (typeof i === 'string') {
          return i;
        } else {
          return 'auto';
        }
      });
    }
  }, [paragraph]);

  var renderImage = function renderImage(visible) {
    var _classNames;

    return visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-image"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-active"), active), _classNames))
    }) : null;
  };

  var renderAvatar = function renderAvatar(visible) {
    var _classNames2;

    return visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-avatar"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-active"), active), _classNames2))
    }) : null;
  };

  var renderTitle = function renderTitle(visible) {
    var _classNames3;

    return visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-title"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-active"), active), _classNames3)),
      style: {
        backgroundColor: titleColor
      }
    }) : null;
  };

  var renderParagraph = function renderParagraph() {
    return rows.map(function (item, index) {
      var _classNames4;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        key: item,
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-row"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-active"), active), _classNames4)),
        style: {
          width: rowsWidth === null || rowsWidth === void 0 ? void 0 : rowsWidth[index]
        }
      });
    });
  };

  var renderSkeleton = function renderSkeleton() {
    var skeleton = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Array(repetitions).keys());

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, skeleton === null || skeleton === void 0 ? void 0 : skeleton.map(function (i, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        key: i,
        className: "".concat(prefixCls, "-item"),
        style: {
          marginBottom: index !== skeleton.length - 1 ? space : 0
        }
      }, customize ? customize : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, renderImage(image), renderAvatar(avatar), renderTitle(title), renderParagraph()));
    }));
  };

  if (fade) {
    var _classNames6;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: prefixCls
    }, !loadingEnd ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-placeholder"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-hidden"), !loading)),
      style: _objectSpread({
        backgroundColor: backgroundColor
      }, style)
    }, renderSkeleton()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames6 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(prefixCls, "-container"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(prefixCls, "-container-active"), renderStart), _classNames6))
    }, children));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: prefixCls
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-placeholder"),
    style: _objectSpread({
      backgroundColor: backgroundColor
    }, style)
  }, renderSkeleton()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames7 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames7, "".concat(prefixCls, "-container"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames7, "".concat(prefixCls, "-container-active"), true), _classNames7))
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Skeleton);

/***/ }),

/***/ "./node_modules/annar/esm/space/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/space/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('space');

var renderItems = function renderItems(children, size, direction) {
  var itemStyle = undefined;

  if (typeof size === 'number') {
    itemStyle = direction === 'vertical' ? {
      marginBottom: size
    } : {
      marginRight: size
    };
  }

  var items = [];
  react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(children, function (child, index) {
    var itemCn = classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-item"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-").concat(direction, "-").concat(size), typeof size === 'string' && size));

    if (child === undefined || child === null) {
      return;
    }

    items.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: index,
      className: itemCn,
      style: itemStyle
    }, child));
  });
  return items;
};

var Space = function Space(props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 'small' : _props$size,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      _props$align = props.align,
      align = _props$align === void 0 ? direction === 'horizontal' ? 'center' : undefined : _props$align,
      style = props.style,
      className = props.className,
      children = props.children;
  var cn = classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, "".concat(prefixCls, "-").concat(direction), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-align-").concat(align), align), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: cn,
    style: style
  }, renderItems(children, size, direction));
};

/* harmony default export */ __webpack_exports__["default"] = (Space);

/***/ }),

/***/ "./node_modules/annar/esm/spin/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/spin/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('spin');

var Spin = function Spin(props) {
  var _classNames;

  var loading = props.loading,
      children = props.children,
      className = props.className,
      style = props.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, true), _classNames)),
    style: _objectSpread({}, style)
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-loading")
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-default")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], null, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Spin);

/***/ }),

/***/ "./node_modules/annar/esm/stepper/index.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/stepper/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('stepper');

var Stepper = function Stepper(props) {
  var _classNames2, _classNames3, _classNames4;

  var _props$min = props.min,
      min = _props$min === void 0 ? 1 : _props$min,
      max = props.max,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      _props$value = props.value,
      value = _props$value === void 0 ? min : _props$value,
      disabled = props.disabled,
      plain = props.plain,
      shape = props.shape,
      size = props.size,
      color = props.color,
      bgColor = props.bgColor,
      onChange = props.onChange,
      onInput = props.onInput,
      onTap = props.onTap,
      onFocus = props.onFocus,
      onBlur = props.onBlur;
  var val = value;
  var minusDisabled = val <= min || disabled;
  var plusDisabled = (max || max === 0) && val >= max || disabled;

  var handlePlus = function handlePlus() {
    if (!val && val !== 0) {
      return;
    }

    if (plusDisabled) {
      return;
    }

    var newValue = max && val + step > max ? max : val + step;
    onTap === null || onTap === void 0 ? void 0 : onTap(newValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };

  var handleMinus = function handleMinus() {
    if (!val && val !== 0) {
      return;
    }

    if (minusDisabled) {
      return;
    }

    var newValue = val - step < min ? min : val - step;
    onTap === null || onTap === void 0 ? void 0 : onTap(newValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };

  var handleInput = function handleInput(e) {
    onInput === null || onInput === void 0 ? void 0 : onInput(Number(e.target.value), e);
    onChange === null || onChange === void 0 ? void 0 : onChange(Number(e.target.value), e);
  };

  var handleFocus = function handleFocus(e) {
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };

  var handleBlur = function handleBlur(e) {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);

    if (minusDisabled) {
      onInput === null || onInput === void 0 ? void 0 : onInput(min);
      onChange === null || onChange === void 0 ? void 0 : onChange(min);
    }

    if (plusDisabled) {
      onInput === null || onInput === void 0 ? void 0 : onInput(max);
      onChange === null || onChange === void 0 ? void 0 : onChange(max);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-").concat(size), size))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-btn"), "".concat(prefixCls, "-minus"), (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-btn-disabled"), minusDisabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-btn-plain"), plain), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-btn-plain-disabled"), plain && minusDisabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-btn-circle"), shape === 'circle'), _classNames2)),
    onTap: handleMinus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "move",
    size: "36px",
    color: "#999"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "-input-wrapper")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-input"), (_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-input-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-input-circle"), shape === 'circle'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-input-plain"), plain), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-binputtn-plain-disabled"), plain && disabled), _classNames3)),
    type: "number",
    value: String(val),
    onInput: handleInput,
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled: disabled
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-btn"), "".concat(prefixCls, "-plus"), (_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-btn-disabled"), plusDisabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-btn-plain"), plain), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-btn-plain-disabled"), plain && plusDisabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-btn-circle"), shape === 'circle'), _classNames4)),
    style: {
      borderColor: bgColor || color,
      backgroundColor: bgColor,
      opacity: plusDisabled && bgColor ? 0.4 : undefined
    },
    onTap: handlePlus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "add",
    size: "36px",
    color: color || '#333'
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Stepper);

/***/ }),

/***/ "./node_modules/annar/esm/steps/index.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/steps/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/annar/esm/icon/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('steps');

var Steps = function Steps(props) {
  var _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      _props$current = props.current,
      current = _props$current === void 0 ? 0 : _props$current,
      steps = props.steps,
      status = props.status;
  var statusIconType = status === 'error' ? 'roundclosefill' : 'roundcheckfill';
  var statusIconColor = status === 'error' ? '#f5222d' : '#1890FF';

  var getTitle = function getTitle(item, index) {
    if (index === current) {
      if (status === 'error') {
        return item.errorTitle || item.title;
      }
    }

    return item.title;
  };

  if (direction === 'vertical') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: prefixCls
    }, steps === null || steps === void 0 ? void 0 : steps.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        key: index,
        className: "".concat(prefixCls, "-step")
      }, index === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-circle_current")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        className: "".concat(prefixCls, "-circle_current-icon")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "roundcheckfill",
        size: "40px",
        color: "#1890FF"
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-circle")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-line")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-step-header")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-step-header-title")
      }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-step-header-extra")
      }, item.extra)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
        className: "".concat(prefixCls, "-step-description")
      }, item.description));
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "".concat(prefixCls, "_horizontal")
  }, steps === null || steps === void 0 ? void 0 : steps.map(function (item, index) {
    var _classNames;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "_horizontal-step"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "_horizontal-step-finish"), index <= current - 1), _classNames))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "_horizontal-step-container")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "_horizontal-step-container-icon")
    }, index < current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "roundcheckfill",
      size: "40px",
      color: "#1890FF"
    }) : null, index === current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: statusIconType,
      size: "40px",
      color: statusIconColor
    }) : null, index > current ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "_horizontal-step-container-icon-default")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], null)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "_horizontal-step-container-content")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "".concat(prefixCls, "_horizontal-step-container-content-title")
    }, getTitle(item, index)))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "./node_modules/annar/esm/swipe-action/index.js":
/*!******************************************************!*\
  !*** ./node_modules/annar/esm/swipe-action/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");








var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_7__["getPrefixCls"])('swipe');

var SwipeAction = function SwipeAction(props) {
  var _classNames2;

  var open = props.open,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      onTouchStart = props.onTouchStart,
      onOpened = props.onOpened,
      onClosed = props.onClosed,
      children = props.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      x = _useState2[0],
      setX = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      origin = _useState4[0],
      setOrigin = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('none'),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      transition = _useState6[0],
      setTransition = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      startX = _useState8[0],
      setStartX = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      actionsWidth = _useState10[0],
      setActionsWidth = _useState10[1];

  var swipeId = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_util__WEBPACK_IMPORTED_MODULE_6__["guid"])();
  }, []);

  var handleActionsWidth = function handleActionsWidth(id) {
    Object(_one__WEBPACK_IMPORTED_MODULE_5__["createSelectorQuery"])() // @ts-ignore
    .select(".".concat(prefixCls, "-actions-").concat(id)).boundingClientRect().exec(function (rect) {
      var _rect$;

      var w = Array.isArray(rect) ? rect === null || rect === void 0 ? void 0 : (_rect$ = rect[0]) === null || _rect$ === void 0 ? void 0 : _rect$.width : rect === null || rect === void 0 ? void 0 : rect.width;
      setActionsWidth(w);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    handleActionsWidth(swipeId);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var width = Number("-".concat(actionsWidth));
    setX(open ? width : 0);
    setOrigin(open ? width : 0);
    setTransition('all 0.3s');
  }, [open]);
  var throttleTouchMove = Object(_util__WEBPACK_IMPORTED_MODULE_6__["throttle"])(function (e) {
    var touch = e.touches[0];
    var currenrX = touch.pageX;
    var diff = currenrX - startX;
    var total = diff + origin;

    if (total >= 0) {
      return;
    }

    setX(total);
  }, 30, {
    trailing: false
  });

  var handleTouchStart = function handleTouchStart(e) {
    // touch当前行时关闭其他行
    onTouchStart === null || onTouchStart === void 0 ? void 0 : onTouchStart(e);
    var touch = e.touches[0];
    setStartX(touch.pageX);
    setTransition('none');
  };

  var handleTouchMove = function handleTouchMove(e) {
    // @ts-ignore
    throttleTouchMove(e);
  };

  var handleTouchEnd = function handleTouchEnd(e) {
    var width = Number("-".concat(actionsWidth));

    if (x >= 0) {
      return;
    }

    if (x > origin) {
      onClosed === null || onClosed === void 0 ? void 0 : onClosed(e);
      setX(0);
      setOrigin(0);
      setTransition('all 0.3s');
      return;
    }

    var x2 = 0;
    var origin2 = 0;

    if (x <= -30) {
      x2 = width;
      origin2 = width;
      onOpened === null || onOpened === void 0 ? void 0 : onOpened(e);
    }

    if (x > -30) {
      x2 = 0;
      origin2 = 0;
      onClosed === null || onClosed === void 0 ? void 0 : onClosed(e);
    }

    setX(x2);
    setOrigin(origin2);
    setTransition('all 0.3s');
  };

  var handleTouchCancel = function handleTouchCancel() {
    var width = Number("-".concat(actionsWidth));
    setX(width);
    setOrigin(width);
  };

  var handleTap = function handleTap(item) {
    var _item$onTap;

    item === null || item === void 0 ? void 0 : (_item$onTap = item.onTap) === null || _item$onTap === void 0 ? void 0 : _item$onTap.call(item, item);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-class"), true)) // style={options?.[options.length - 1]?.style}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "".concat(prefixCls, "-container"),
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel,
    style: {
      transform: "translate3d(".concat(x, "PX, 0, 0)"),
      //使用transform或导致子级内的fixed直接降级为absolute
      // left: `${x}PX`,
      transition: transition
    }
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-actions"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-actions-").concat(swipeId), true), _classNames2))
  }, options === null || options === void 0 ? void 0 : options.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
      key: index,
      className: "".concat(prefixCls, "-action"),
      onTap: function onTap() {
        return handleTap(item);
      },
      style: item === null || item === void 0 ? void 0 : item.style
    }, item === null || item === void 0 ? void 0 : item.name);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SwipeAction);

/***/ }),

/***/ "./node_modules/annar/esm/swiper/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/swiper/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper */ "./node_modules/annar/esm/swiper/swiper.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ "./node_modules/annar/esm/swiper/item.js");


var Swiper = _swiper__WEBPACK_IMPORTED_MODULE_0__["default"];
Swiper.Item = _item__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ "./node_modules/annar/esm/swiper/item.js":
/*!***********************************************!*\
  !*** ./node_modules/annar/esm/swiper/item.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPrefixCls"])('swiper-item');

var SwiperItem = function SwiperItem(props) {
  var className = props.className,
      style = props.style,
      children = props.children,
      onTap = props.onTap;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, className),
    style: style,
    onTap: onTap
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (SwiperItem);

/***/ }),

/***/ "./node_modules/annar/esm/swiper/swiper.js":
/*!*************************************************!*\
  !*** ./node_modules/annar/esm/swiper/swiper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");





function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_9__["getPrefixCls"])('swiper');

var getChildrenNode = function getChildrenNode(children) {
  var _childrenNode;

  var childrenArray = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.toArray(children);

  if (childrenArray.length <= 1) {
    return childrenArray;
  }

  var childrenNode = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(childrenArray);

  childrenNode.unshift(childrenArray[childrenArray.length - 1]);
  childrenNode.push(childrenArray[0]);
  childrenNode = (_childrenNode = childrenNode) === null || _childrenNode === void 0 ? void 0 : _childrenNode.map(function (child, index) {
    return _objectSpread(_objectSpread({}, child), {}, {
      key: '.' + index
    });
  });
  return childrenNode;
};

var getIndicatorsNode = function getIndicatorsNode(num, current, position, color, style, look) {
  var defaultColor = undefined;
  var activeColor = undefined;

  if (Array.isArray(color)) {
    if (color[0] && typeof color[0] === 'string') {
      activeColor = color[0];
    }

    if (color[1] && typeof color[1] === 'string') {
      defaultColor = color[1];
    }
  }

  if (look === 'dark') {
    activeColor = '#000';
    defaultColor = 'rgba(0, 0, 0, 0.13)';
  }

  if (look === 'anna') {
    activeColor = '#ff7777';
    defaultColor = 'rgba(255, 119, 119, 0.2)';
  }

  var defaultStyle = {};
  var activeStyle = {};

  if (Array.isArray(style)) {
    if (style[0] && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(style[0]) === 'object') {
      activeStyle = style[0];
    }

    if (style[1] && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(style[1]) === 'object') {
      defaultStyle = style[1];
    }
  }

  var activeIndex = current - 1;

  if (current === 1) {
    activeIndex = 0;
  }

  if (current === 0) {
    activeIndex = num - 1;
  }

  if (current > num) {
    activeIndex = 0;
  }

  var indicators = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(new Array(num).keys());

  var indicatorsNode = indicators.map(function (i) {
    var _classNames;

    var indicatorStyle = Object.assign({}, activeIndex === i ? activeStyle : defaultStyle, {
      backgroundColor: activeIndex === i ? activeColor : defaultColor
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_5__["View"], {
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("".concat(prefixCls, "-indicator"), (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames, "".concat(prefixCls, "-indicator-").concat(position), position), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames, "".concat(prefixCls, "-indicator-active"), activeIndex === i), _classNames)),
      style: indicatorStyle
    });
  });
  return indicatorsNode;
};

var InternalSwiper = function InternalSwiper(props) {
  var _classNames2;

  var autoplay = props.autoplay,
      _props$autoplayInterv = props.autoplayInterval,
      autoplayInterval = _props$autoplayInterv === void 0 ? 3000 : _props$autoplayInterv,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 300 : _props$duration,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'square' : _props$shape,
      size = props.size,
      height = props.height,
      vertical = props.vertical,
      _props$curve = props.curve,
      curve = _props$curve === void 0 ? 'ease' : _props$curve,
      _props$showIndicators = props.showIndicators,
      showIndicators = _props$showIndicators === void 0 ? true : _props$showIndicators,
      _props$indicatorLook = props.indicatorLook,
      indicatorLook = _props$indicatorLook === void 0 ? 'light' : _props$indicatorLook,
      indicatorColor = props.indicatorColor,
      indicatorStyle = props.indicatorStyle,
      _props$indicatorPosit = props.indicatorPosition,
      indicatorPosition = _props$indicatorPosit === void 0 ? vertical ? 'right' : 'bottom' : _props$indicatorPosit,
      style = props.style,
      children = props.children; // Make Special treatment when the number of childNodes is 1

  var childrenArray = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.toArray(children);
  }, [children]);
  var startPoint = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var startTime = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var sideLength = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var swiperId = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(Object(_util__WEBPACK_IMPORTED_MODULE_8__["guid"])());
  var swiperWidth = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var swiperHeight = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var swiperItemIndex = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(childrenArray.length > 1 ? 1 : 0);
  var origin = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(0);
  var intervalId = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      distance = _useState2[0],
      setDistance = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('none'),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      transition = _useState4[0],
      setTransition = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var getSwiperWidth = function getSwiperWidth() {
      Object(_one__WEBPACK_IMPORTED_MODULE_7__["createSelectorQuery"])() // @ts-ignore
      .select(".".concat(prefixCls, "-id-").concat(swiperId.current)).boundingClientRect().exec(function (rect) {
        var node = Array.isArray(rect) ? rect === null || rect === void 0 ? void 0 : rect[0] : rect;
        swiperWidth.current = node === null || node === void 0 ? void 0 : node.width;
        swiperHeight.current = node === null || node === void 0 ? void 0 : node.height;

        if (vertical) {
          sideLength.current = node === null || node === void 0 ? void 0 : node.height;
        } else {
          sideLength.current = node === null || node === void 0 ? void 0 : node.width;
        }

        if (childrenArray.length > 1) {
          origin.current = -sideLength.current;
          setDistance(origin.current);
        }
      });
    };

    getSwiperWidth();
    return function () {
      clearInterval(intervalId.current);
    };
  }, []); // Seamless switching

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // if (distance !== (childrenArray.length + 1) * -sideLength.current) {
    //   return;
    // }
    if (swiperItemIndex.current === 0) {
      setTimeout(function () {
        swiperItemIndex.current = childrenArray.length;
        origin.current = swiperItemIndex.current * -sideLength.current;
        setDistance(origin.current);
        setTransition('none');
      }, duration); // Extend 300ms and set the transition to none
    }

    if (swiperItemIndex.current > childrenArray.length) {
      setTimeout(function () {
        swiperItemIndex.current = 1;
        origin.current = swiperItemIndex.current * -sideLength.current;
        setDistance(origin.current);
        setTransition('none');
      }, duration); // Extend 300ms and set the transition to none
    }
  }, [swiperItemIndex.current, duration, distance]); // move

  var move = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (direction) {
    if (direction === 'left') {
      swiperItemIndex.current = swiperItemIndex.current + 1;
    }

    if (direction === 'right') {
      swiperItemIndex.current = swiperItemIndex.current - 1;
    }

    origin.current = swiperItemIndex.current * -sideLength.current;
    setDistance(origin.current);
    setTransition("all ".concat(duration / 1000, "s ").concat(curve));
  }, [swiperItemIndex.current, sideLength.current, duration]); // control autoplay

  var controlAutoplay = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (action) {
    if (action === 'start') {
      if (autoplay && !intervalId.current) {
        intervalId.current = setInterval(function () {
          move('left');
        }, autoplayInterval);
      }
    }

    if (action === 'stop') {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    }
  }, [autoplay, autoplayInterval, intervalId.current]); // autoplay

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!autoplay) {
      controlAutoplay('stop');
    }

    if (intervalId.current) {
      return;
    }

    if (autoplay) {
      controlAutoplay('start');
    }
  }, [autoplay, intervalId.current]);
  var throttleTouchMove = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(Object(_util__WEBPACK_IMPORTED_MODULE_8__["throttle"])(function (e) {
    var touch = e.touches[0];
    var diff = (vertical ? touch.pageY : touch.pageX) - startPoint.current;
    var currDistance = diff + origin.current;

    if (currDistance) {
      setDistance(currDistance);
      setTransition('none');
    }
  }, 10, {
    trailing: false
  }), [startPoint.current, origin.current]);

  var handleTouchStart = function handleTouchStart(e) {
    if (childrenArray.length <= 1) {
      return;
    }

    controlAutoplay('stop');
    var touch = e.touches[0];
    startPoint.current = vertical ? touch.pageY : touch.pageX;
    startTime.current = Date.now();
  };

  var handleTouchMove = function handleTouchMove(e) {
    if (childrenArray.length <= 1) {
      return;
    } // @ts-ignore


    throttleTouchMove(e);
  };

  var handleTouchEnd = function handleTouchEnd(e) {
    if (childrenArray.length <= 1) {
      return;
    }

    var touch = e.changedTouches[0] || e.nativeEvent.changedTouches[0];
    var diff = (vertical ? touch.pageY : touch.pageX) - startPoint.current;
    var speed = diff / (Date.now() - startTime.current);
    var harfSideLength = sideLength.current / 2;
    console.log('speed', speed);

    if (Math.abs(speed) > 0.3) {
      if (diff > 0) {
        move('right');
      }

      if (diff < 0) {
        move('left');
      }
    } else if (harfSideLength < Math.abs(diff)) {
      if (diff > 0) {
        move('right');
      }

      if (diff < 0) {
        move('left');
      }
    } else {
      move();
    }

    controlAutoplay('start');
  };

  var handleTouchCancel = function handleTouchCancel() {
    if (childrenArray.length <= 1) {
      return;
    }

    move();
  };

  var childrenNode = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return getChildrenNode(children);
  }, [children]);
  var indicatorsNode = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return getIndicatorsNode(childrenArray.length, swiperItemIndex.current, indicatorPosition, indicatorColor, indicatorStyle, indicatorLook);
  }, [childrenArray.length, swiperItemIndex.current, indicatorPosition, indicatorColor, indicatorStyle, indicatorLook]);
  var classes = classnames__WEBPACK_IMPORTED_MODULE_6___default()(prefixCls, (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames2, "".concat(prefixCls, "-id-").concat(swiperId.current), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames2, "".concat(prefixCls, "-").concat(shape), shape), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames2, "".concat(prefixCls, "-").concat(size), size), _classNames2));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: classes,
    style: _objectSpread(_objectSpread({}, style), {}, {
      height: height,
      borderRadius: shape === 'round' ? swiperHeight.current : undefined
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("".concat(prefixCls, "-track"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "".concat(prefixCls, "-track-vertical"), vertical)),
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel,
    style: {
      transform: "translate3d(".concat(vertical ? '0, ' + distance + 'PX' : distance + 'PX, 0', ", 0)"),
      transition: transition
    }
  }, childrenNode), showIndicators ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("".concat(prefixCls, "-indicators"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "".concat(prefixCls, "-indicators-").concat(indicatorPosition), indicatorPosition))
  }, indicatorsNode) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (InternalSwiper);

/***/ }),

/***/ "./node_modules/annar/esm/switch/index.js":
/*!************************************************!*\
  !*** ./node_modules/annar/esm/switch/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");






var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('switch');

var Switch = function Switch(props) {
  var _classNames, _classNames2;

  var checked = props.checked,
      disabled = props.disabled,
      small = props.small,
      onChange = props.onChange;

  var handleChange = function handleChange() {
    if (disabled) {
      return;
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: prefixCls,
    onTap: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_one__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-default"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-checked"), !small && checked), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-checked-small"), small && checked), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames)) // onChange={handleChange}
    ,
    value: checked ? 'on' : 'off',
    checked: checked
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-checkbox"), (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-checkbox-small"), small), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-checkbox-disabled"), disabled), _classNames2))
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/annar/esm/tabs/index.js":
/*!**********************************************!*\
  !*** ./node_modules/annar/esm/tabs/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../one */ "./node_modules/annar/esm/one/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_util */ "./node_modules/annar/esm/_util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}







var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_8__["getPrefixCls"])('tabs');
var heightUnit = 48; // const prevTabs: any[] = [];

var getTabContents = function getTabContents(children, activeKey, animated) {
  var tabContents = [];
  var tabs = [];
  react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.forEach(children, function (node, index) {
    var newNode = node;

    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.isValidElement(node)) {
      return tabs.push({
        key: newNode.key,
        tab: newNode.props.tab
      }) && tabContents.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TabContent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        key: newNode.key
      }, newNode.props, {
        active: activeKey === undefined ? index === 0 && newNode.key : String(activeKey) === newNode.key,
        animated: animated
      })));
    }
  });
  return [tabs, tabContents];
};

var getTabIndex = function getTabIndex(tabs, activeKey) {
  var tIndex = 0;
  tabs.forEach(function (i, index) {
    if (i.key === activeKey) {
      tIndex = index;
    }
  });
  return tIndex;
};

var Tabs = function Tabs(props) {
  var type = props.type,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      activeKey = props.activeKey,
      animated = props.animated,
      fixed = props.fixed,
      onTabClick = props.onTabClick,
      headerContent = props.headerContent,
      children = props.children,
      headerStyle = props.headerStyle,
      extra = props.extra,
      titleWidth = props.titleWidth,
      titleSquare = props.titleSquare,
      titleAlign = props.titleAlign; // 针对同一个页面出现两个Tabs，给每个Tabs一个 UniqueID

  var TABS_TITLE_ID = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(_util__WEBPACK_IMPORTED_MODULE_7__["guid"], []);

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return getTabContents(children, activeKey, animated);
  }, [children]),
      _useMemo2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMemo, 2),
      tabs = _useMemo2[0],
      tabContents = _useMemo2[1]; // 将 activeKey 实时转化成当前 selected 的Tab，后面都将以 selected 作为当前选择的 Tab 的标志符


  var selected = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return getTabIndex(tabs, activeKey);
  }, [activeKey, tabs]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      titleWrapperLeft = _useState2[0],
      setTitleWrapperLeft = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      titleNodes = _useState4[0],
      setTitleNodes = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (type === 'plain') {
      var _query$select$scrollO, _query$select;

      var query = Object(_one__WEBPACK_IMPORTED_MODULE_6__["createSelectorQuery"])();
      (_query$select$scrollO = (_query$select = query.select(".".concat(prefixCls, "-plain-").concat(TABS_TITLE_ID))).scrollOffset) === null || _query$select$scrollO === void 0 ? void 0 : _query$select$scrollO.call(_query$select).exec(function (ret) {
        var r = Array.isArray(ret) ? ret[0] : ret;
        setTitleWrapperLeft(-((r === null || r === void 0 ? void 0 : r.scrollLeft) || 0));
      });
    }
  }, [activeKey]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (type === 'plain') {
      var query = Object(_one__WEBPACK_IMPORTED_MODULE_6__["createSelectorQuery"])(); // 不加setTimeout的话只能获取部分的nodes(可能是部分 .anna-tabs-plain-title 节点还没来得及渲染出来)

      setTimeout(function () {
        query.selectAll(".".concat(prefixCls, "-plain-").concat(TABS_TITLE_ID, " .").concat(prefixCls, "-plain-title")).boundingClientRect().exec(function (ret) {
          var r = Array.isArray(ret) ? ret[0] : [ret];
          var nodes = (r === null || r === void 0 ? void 0 : r.map(function (i) {
            return {
              offsetLeft: i.left,
              offsetWidth: i.width
            };
          })) || []; // 解决切换tabbar导致页面渲染找不到相关节点(因为此时已经在跳转后一个页面，所以找不到)，从而使nodes这个数组为空，继而导致Tabs下标left重置为0。

          nodes.length > 0 && setTitleNodes(nodes);
        });
      }, 200);
    }
  }, [tabs.length]);

  var handleTabClick = function handleTabClick(item) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(item);
  };

  var activeKeyStr = String(activeKey);

  var renderTabs = function renderTabs() {
    var _classNames4;

    if (type === 'plain') {
      var _classNames;

      var titleNode = (titleNodes === null || titleNodes === void 0 ? void 0 : titleNodes[selected]) || {
        offsetLeft: 0,
        offsetWidth: 0
      }; // 注；此处left的位置是相对于 .anna-tabs-plain 的，不是相对于手机视窗左侧的。所以如果 .anna-tabs-plain 不能
      // 占据视窗width的100%，Tabs的下标位置就会偏右。

      var left = titleNode.offsetLeft + titleNode.offsetWidth / 2; // 解决小程序下无法获取到元素的 offsetLeft 的问题，使用 scrollOffset 来获取 scrollLeft。

      if (titleWrapperLeft < 0) {// left += Math.abs(titleWrapperLeft); //不需要这一步，因为offsetLeft是相对于父元素的，而不是相对于视窗的
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-plain"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-plain-center"), titleAlign === 'center'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-plain-").concat(TABS_TITLE_ID), true), _classNames))
      }, tabs.map(function (item) {
        var _classNames2;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
          key: item.key,
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-plain-title"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-plain-center-title"), titleAlign === 'center'), _classNames2)),
          onTap: function onTap() {
            return handleTabClick(item);
          }
        }, item.tab);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-plain-active"),
        style: {
          transform: "translateX(".concat(left, "PX) translateX(-50%)")
        }
      }));
    }

    if (type === 'card') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-card")
      }, tabs.map(function (item) {
        var _classNames3;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
          key: item.key,
          className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-card-title"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, "".concat(prefixCls, "-card-active"), activeKeyStr === item.key), _classNames3)),
          onTap: function onTap() {
            return handleTabClick(item);
          }
        }, item.tab);
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-slider")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-slider-bg"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, "".concat(prefixCls, "-slider-bg-square"), titleSquare), _classNames4))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-slider-container")
    }, tabs.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        key: item.key,
        className: "".concat(prefixCls, "-slider-title"),
        style: {
          fontWeight: activeKeyStr === item.key ? 500 : 400,
          width: titleWidth ? "".concat(titleWidth, "px") : null
        },
        onTap: function onTap() {
          handleTabClick(item);
        }
      }, item.tab);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-slider-active"),
      style: {
        width: "".concat(100 / tabs.length, "%"),
        transform: "translateX(".concat(selected * 100, "%)")
      }
    }))), extra);
  };

  if (direction === 'vertical') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: prefixCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-vertical")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-vertical-sidebar")
    }, tabs === null || tabs === void 0 ? void 0 : tabs.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        key: item.key,
        className: "".concat(prefixCls, "-vertical-sidebar-item"),
        style: {
          fontWeight: selected === index ? 500 : 400,
          backgroundColor: selected === index ? '#FDFFFD' : '#FAFAFA'
        },
        onTap: function onTap() {
          return handleTabClick(item);
        }
      }, item.tab, selected === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-vertical-sidebar-top")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-vertical-sidebar-top-circle")
      })), selected === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-vertical-sidebar-bottom")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
        className: "".concat(prefixCls, "-vertical-sidebar-bottom-circle")
      })));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-vertical-sidebar-active"),
      style: {
        transform: "translate3d(0, ".concat(selected * heightUnit, "PX, 0)")
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: "".concat(prefixCls, "-vertical-content")
    }, tabContents)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-header"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-header-fixed"), fixed)),
    style: _objectSpread({}, headerStyle)
  }, renderTabs(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-header-content")
  }, headerContent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-content")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-content-wrapper"),
    style: animated ? {
      transition: "all 0.3s ease",
      transform: "translate3d(".concat(-selected * 100, "%, 0, 0)")
    } : {}
  }, tabContents)));
};

var TabContent = function TabContent(props) {
  var active = props.active,
      style = props.style,
      animated = props.animated,
      children = props.children;

  if (!active) {
    var _classNames6;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-content-tab"), (_classNames6 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(prefixCls, "-content-tab-inactive"), !animated), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames6, "".concat(prefixCls, "-content-tab-inactive-animated"), animated), _classNames6)),
      style: style
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "".concat(prefixCls, "-content-tab"),
    style: style
  }, children);
};

Tabs.TabContent = TabContent;
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./node_modules/annar/esm/tag/index.js":
/*!*********************************************!*\
  !*** ./node_modules/annar/esm/tag/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_5__["getPrefixCls"])('tag');

var Tag = function Tag(props) {
  var _classNames;

  var color = props.color,
      plain = props.plain,
      size = props.size,
      block = props.block,
      className = props.className,
      style = props.style,
      children = props.children,
      onTap = props.onTap;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-plain"), plain), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-small"), size === 'small'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-large"), size === 'large'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-block"), block), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(color), color), _classNames), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: classes,
    style: style,
    onTap: onTap
  }, children);
};

Tag.CheckableTag = function (props) {
  var _classNames2;

  var className = props.className,
      checked = props.checked,
      checkedColor = props.checkedColor,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      disabled = props.disabled,
      onChange = props.onChange,
      children = props.children;
  var height = style.height;
  var tagHeight = height;

  if (typeof height === 'string') {
    if (height.includes('px')) {
      tagHeight = Number(height.slice(0, -2));
    } else {
      tagHeight = Number(height);
    }
  }

  var tagStyle = undefined;

  if (height) {
    tagStyle = _objectSpread(_objectSpread({}, style), {}, {
      lineHeight: "".concat(tagHeight - 4, "px")
    });
  }

  var handleChange = function handleChange() {
    if (disabled) {
      return;
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: "large"
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-checkable"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-checked"), checked), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-").concat(checkedColor), checked && checkedColor), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _classNames2), className),
    style: tagStyle,
    onTap: handleChange
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./node_modules/annar/esm/textarea/index.js":
/*!**************************************************!*\
  !*** ./node_modules/annar/esm/textarea/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./node_modules/annar/esm/common/index.js");





var prefixCls = Object(_common__WEBPACK_IMPORTED_MODULE_4__["getPrefixCls"])('textarea');

var ATextarea = function ATextarea(props) {
  var _classNames;

  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      name = props.name,
      value = props.value,
      placeholder = props.placeholder,
      disabled = props.disabled,
      maxlength = props.maxlength,
      focus = props.focus,
      autoHeight = props.autoHeight,
      showCount = props.showCount,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 3 : _props$rows,
      _props$controlled = props.controlled,
      controlled = _props$controlled === void 0 ? false : _props$controlled,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onConfirm = props.onConfirm;

  var handleChangeInput = function handleChangeInput(e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: prefixCls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](remax_one__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-default"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, true), _classNames)) // @ts-ignore
    ,
    placeholderClass: "".concat(prefixCls, "-placeholder"),
    name: name,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    maxlength: maxlength,
    focus: focus,
    autoHeight: autoHeight,
    showCount: showCount,
    controlled: controlled,
    onInput: handleChangeInput,
    onFocus: onFocus,
    onBlur: onBlur,
    onConfirm: onConfirm,
    rows: rows
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ATextarea);

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/construct.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!******************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/annar/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/annar/node_modules/@babel/runtime/regenerator/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/annar/node_modules/@babel/runtime/regenerator/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/axios-miniprogram-adapter/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/axios-miniprogram-adapter/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios/lib/utils */ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/utils.js");
/* harmony import */ var axios_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_lib_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios_lib_core_settle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios/lib/core/settle */ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/settle.js");
/* harmony import */ var axios_lib_core_settle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios_lib_core_settle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios_lib_helpers_buildURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios/lib/helpers/buildURL */ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var axios_lib_helpers_buildURL__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_lib_helpers_buildURL__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios_lib_core_buildFullPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios/lib/core/buildFullPath */ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var axios_lib_core_buildFullPath__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios_lib_core_buildFullPath__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios_lib_core_createError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios/lib/core/createError */ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/createError.js");
/* harmony import */ var axios_lib_core_createError__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios_lib_core_createError__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * axios-miniprogram-adapter 0.3.1 (https://github.com/bigMeow/axios-miniprogram-adapter)
 * API https://github.com/bigMeow/axios-miniprogram-adapter/blob/master/doc/api.md
 * Copyright 2018-2020 bigMeow. All Rights Reserved
 * Licensed under MIT (https://github.com/bigMeow/axios-miniprogram-adapter/blob/master/LICENSE)
 */





var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; // encoder

function encoder(input) {
  var str = String(input); // initialize result and counter

  var block;
  var charCode;
  var idx = 0;
  var map = chars;
  var output = '';

  for (; // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1); // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);

    if (charCode > 0xFF) {
      throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
    }

    block = block << 8 | charCode;
  }

  return output;
}

var platFormName = 'wechat';
/**
 * 获取各个平台的请求函数
 */

function getRequest() {
  switch (true) {
    case (typeof wx === "undefined" ? "undefined" : _typeof(wx)) === 'object':
      platFormName = 'wechat';
      return wx.request.bind(wx);

    case (typeof swan === "undefined" ? "undefined" : _typeof(swan)) === 'object':
      platFormName = 'baidu';
      return swan.request.bind(swan);

    case (typeof my === "undefined" ? "undefined" : _typeof(my)) === 'object':
      /**
       * remark:
       * 支付宝客户端已不再维护 my.httpRequest，建议使用 my.request。另外，钉钉客户端尚不支持 my.request。若在钉钉客户端开发小程序，则需要使用 my.httpRequest。
       * my.httpRequest的请求头默认值为{'content-type': 'application/x-www-form-urlencoded'}。
       * my.request的请求头默认值为{'content-type': 'application/json'}。
       * TODO: 区分支付宝和钉钉环境
       * 还有个 dd.httpRequest   WFK!!! https://ding-doc.dingtalk.com/doc#/dev/httprequest
       */
      platFormName = 'alipay';
      return (my.request || my.httpRequest).bind(my);

    default:
      return wx.request.bind(wx);
  }
}
/**
 * 处理各平台返回的响应数据，抹平差异
 * @param mpResponse
 * @param config axios处理过的请求配置对象
 * @param request 小程序的调用发起请求时，传递给小程序api的实际配置
 */


function transformResponse(mpResponse, config, mpRequestOption) {
  var headers = mpResponse.header || mpResponse.headers;
  var status = mpResponse.statusCode || mpResponse.status;
  var statusText = '';

  if (status === 200) {
    statusText = 'OK';
  } else if (status === 400) {
    statusText = 'Bad Request';
  }

  var response = {
    data: mpResponse.data,
    status: status,
    statusText: statusText,
    headers: headers,
    config: config,
    request: mpRequestOption
  };
  return response;
}
/**
 * 处理各平台返回的错误信息，抹平差异
 * @param error 小程序api返回的错误对象
 * @param reject 上层的promise reject 函数
 * @param config
 */


function transformError(error, reject, config) {
  switch (platFormName) {
    case 'wechat':
      if (error.errMsg.indexOf('request:fail abort') !== -1) {
        // Handle request cancellation (as opposed to a manual cancellation)
        reject(axios_lib_core_createError__WEBPACK_IMPORTED_MODULE_4___default()('Request aborted', config, 'ECONNABORTED', ''));
      } else if (error.errMsg.indexOf('timeout') !== -1) {
        // timeout
        reject(axios_lib_core_createError__WEBPACK_IMPORTED_MODULE_4___default()('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', ''));
      } else {
        // NetWordError
        reject(axios_lib_core_createError__WEBPACK_IMPORTED_MODULE_4___default()('Network Error', config, null, ''));
      }

      break;

    case 'alipay':
      // https://docs.alipay.com/mini/api/network
      if ([14, 19].includes(error.error)) {
        reject(axios_lib_core_createError__WEBPACK_IMPORTED_MODULE_4___default()('Request aborted', config, 'ECONNABORTED', ''));
      } else if ([13].includes(error.error)) {
        // timeout
        reject(axios_lib_core_createError__WEBPACK_IMPORTED_MODULE_4___default()('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', ''));
      } else {
        // NetWordError
        reject(axios_lib_core_createError__WEBPACK_IMPORTED_MODULE_4___default()('Network Error', config, null, ''));
      }

      break;

    case 'baidu':
      // TODO error.errCode
      reject(axios_lib_core_createError__WEBPACK_IMPORTED_MODULE_4___default()('Network Error', config, null, ''));
      break;
  }
}
/**
 * 将axios的请求配置，转换成各个平台都支持的请求config
 * @param config
 */


function transformConfig(config) {
  if (platFormName === 'alipay') {
    config.headers = config.header;
    delete config.header;
  }

  return config;
}

var warn = console.warn;

var isJSONstr = function isJSONstr(str) {
  try {
    return typeof str === 'string' && str.length && (str = JSON.parse(str)) && Object.prototype.toString.call(str) === '[object Object]';
  } catch (error) {
    return false;
  }
};

function mpAdapter(config) {
  var request = getRequest();
  return new Promise(function (resolve, reject) {
    var requestTask;
    var requestData = config.data;
    var requestHeaders = config.headers; // baidu miniprogram only support upperCase

    var requestMethod = config.method && config.method.toUpperCase() || 'GET'; // miniprogram network request config

    var mpRequestOption = {
      method: requestMethod,
      url: axios_lib_helpers_buildURL__WEBPACK_IMPORTED_MODULE_2___default()(axios_lib_core_buildFullPath__WEBPACK_IMPORTED_MODULE_3___default()(config.baseURL, config.url), config.params, config.paramsSerializer),
      // Listen for success
      success: function success(mpResponse) {
        var response = transformResponse(mpResponse, config, mpRequestOption);
        axios_lib_core_settle__WEBPACK_IMPORTED_MODULE_1___default()(resolve, reject, response);
      },
      // Handle request Exception
      fail: function fail(error) {
        transformError(error, reject, config);
      },
      complete: function complete() {
        requestTask = undefined;
      }
    }; // HTTP basic authentication

    if (config.auth) {
      var _a = [config.auth.username || '', config.auth.password || ''],
          username = _a[0],
          password = _a[1];
      requestHeaders.Authorization = 'Basic ' + encoder(username + ':' + password);
    } // Set the request timeout


    if (config.timeout !== 0) {
      warn('The "timeout" option is not supported by miniprogram. For more information about usage see "https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#全局配置"');
    } // Add headers to the request


    axios_lib_utils__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(requestHeaders, function setRequestHeader(val, key) {
      var _header = key.toLowerCase();

      if (typeof requestData === 'undefined' && _header === 'content-type' || _header === 'referer') {
        // Remove Content-Type if data is undefined
        // And the miniprogram document said that '设置请求的 header，header 中不能设置 Referer'
        delete requestHeaders[key];
      }
    });
    mpRequestOption.header = requestHeaders; // Add responseType to request if needed

    if (config.responseType) {
      mpRequestOption.responseType = config.responseType;
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!requestTask) {
          return;
        }

        requestTask.abort();
        reject(cancel); // Clean up request

        requestTask = undefined;
      });
    } // Converting JSON strings to objects is handed over to the MiniPrograme


    if (isJSONstr(requestData)) {
      requestData = JSON.parse(requestData);
    }

    if (requestData !== undefined) {
      mpRequestOption.data = requestData;
    }

    requestTask = request(transformConfig(mpRequestOption));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (mpAdapter);

/***/ }),

/***/ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/buildFullPath.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/buildFullPath.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/combineURLs.js");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

/***/ }),

/***/ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/createError.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/createError.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/enhanceError.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/enhanceError.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/enhanceError.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/***/ }),

/***/ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/settle.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/settle.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/core/createError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/bind.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/bind.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/buildURL.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/buildURL.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/combineURLs.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/combineURLs.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/utils.js":
/*!********************************************************************************!*\
  !*** ./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/utils.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios-miniprogram-adapter/node_modules/axios/lib/helpers/bind.js");
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function deepMerge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (_typeof(val) === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");

var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");

var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");

var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");

var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    if ((utils.isBlob(requestData) || utils.isFile(requestData)) && requestData.type) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = unescape(encodeURIComponent(config.auth.password)) || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");

var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js"); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports.default = axios;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");

var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  } // Hook up interceptors middleware


  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");

var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = ['baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress', 'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }

    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });
  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
  var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, mergeDeepProperties);
  return config;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* istanbul ignore next */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */


function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */


function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }

  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  var t = "millisecond",
      e = "second",
      n = "minute",
      r = "hour",
      i = "day",
      s = "week",
      u = "month",
      a = "quarter",
      o = "year",
      f = "date",
      h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      d = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
  },
      $ = function $(t, e, n) {
    var r = String(t);
    return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
  },
      l = {
    s: $,
    z: function z(t) {
      var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
      return (e <= 0 ? "+" : "-") + $(r, 2, "0") + ":" + $(i, 2, "0");
    },
    m: function t(e, n) {
      if (e.date() < n.date()) return -t(n, e);
      var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, u),
          s = n - i < 0,
          a = e.clone().add(r + (s ? -1 : 1), u);
      return +(-(r + (n - i) / (s ? i - a : a - i)) || 0);
    },
    a: function a(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    },
    p: function p(h) {
      return {
        M: u,
        y: o,
        w: s,
        d: i,
        D: f,
        h: r,
        m: n,
        s: e,
        ms: t,
        Q: a
      }[h] || String(h || "").toLowerCase().replace(/s$/, "");
    },
    u: function u(t) {
      return void 0 === t;
    }
  },
      y = "en",
      M = {};

  M[y] = d;

  var m = function m(t) {
    return t instanceof S;
  },
      D = function D(t, e, n) {
    var r;
    if (!t) return y;
    if ("string" == typeof t) M[t] && (r = t), e && (M[t] = e, r = t);else {
      var i = t.name;
      M[i] = t, r = i;
    }
    return !n && r && (y = r), r || !n && y;
  },
      v = function v(t, e) {
    if (m(t)) return t.clone();
    var n = "object" == _typeof(e) ? e : {};
    return n.date = t, n.args = arguments, new S(n);
  },
      g = l;

  g.l = D, g.i = m, g.w = function (t, e) {
    return v(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };

  var S = function () {
    function d(t) {
      this.$L = D(t.locale, null, !0), this.parse(t);
    }

    var $ = d.prototype;
    return $.parse = function (t) {
      this.$d = function (t) {
        var e = t.date,
            n = t.utc;
        if (null === e) return new Date(NaN);
        if (g.u(e)) return new Date();
        if (e instanceof Date) return new Date(e);

        if ("string" == typeof e && !/Z$/i.test(e)) {
          var r = e.match(h);

          if (r) {
            var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);
            return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
          }
        }

        return new Date(e);
      }(t), this.$x = t.x || {}, this.init();
    }, $.init = function () {
      var t = this.$d;
      this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
    }, $.$utils = function () {
      return g;
    }, $.isValid = function () {
      return !("Invalid Date" === this.$d.toString());
    }, $.isSame = function (t, e) {
      var n = v(t);
      return this.startOf(e) <= n && n <= this.endOf(e);
    }, $.isAfter = function (t, e) {
      return v(t) < this.startOf(e);
    }, $.isBefore = function (t, e) {
      return this.endOf(e) < v(t);
    }, $.$g = function (t, e, n) {
      return g.u(t) ? this[e] : this.set(n, t);
    }, $.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }, $.valueOf = function () {
      return this.$d.getTime();
    }, $.startOf = function (t, a) {
      var h = this,
          c = !!g.u(a) || a,
          d = g.p(t),
          $ = function $(t, e) {
        var n = g.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);
        return c ? n : n.endOf(i);
      },
          l = function l(t, e) {
        return g.w(h.toDate()[t].apply(h.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h);
      },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          D = "set" + (this.$u ? "UTC" : "");

      switch (d) {
        case o:
          return c ? $(1, 0) : $(31, 11);

        case u:
          return c ? $(1, M) : $(0, M + 1);

        case s:
          var v = this.$locale().weekStart || 0,
              S = (y < v ? y + 7 : y) - v;
          return $(c ? m - S : m + (6 - S), M);

        case i:
        case f:
          return l(D + "Hours", 0);

        case r:
          return l(D + "Minutes", 1);

        case n:
          return l(D + "Seconds", 2);

        case e:
          return l(D + "Milliseconds", 3);

        default:
          return this.clone();
      }
    }, $.endOf = function (t) {
      return this.startOf(t, !1);
    }, $.$set = function (s, a) {
      var h,
          c = g.p(s),
          d = "set" + (this.$u ? "UTC" : ""),
          $ = (h = {}, h[i] = d + "Date", h[f] = d + "Date", h[u] = d + "Month", h[o] = d + "FullYear", h[r] = d + "Hours", h[n] = d + "Minutes", h[e] = d + "Seconds", h[t] = d + "Milliseconds", h)[c],
          l = c === i ? this.$D + (a - this.$W) : a;

      if (c === u || c === o) {
        var y = this.clone().set(f, 1);
        y.$d[$](l), y.init(), this.$d = y.set(f, Math.min(this.$D, y.daysInMonth())).$d;
      } else $ && this.$d[$](l);

      return this.init(), this;
    }, $.set = function (t, e) {
      return this.clone().$set(t, e);
    }, $.get = function (t) {
      return this[g.p(t)]();
    }, $.add = function (t, a) {
      var f,
          h = this;
      t = Number(t);

      var c = g.p(a),
          d = function d(e) {
        var n = v(h);
        return g.w(n.date(n.date() + Math.round(e * t)), h);
      };

      if (c === u) return this.set(u, this.$M + t);
      if (c === o) return this.set(o, this.$y + t);
      if (c === i) return d(1);
      if (c === s) return d(7);
      var $ = (f = {}, f[n] = 6e4, f[r] = 36e5, f[e] = 1e3, f)[c] || 1,
          l = this.$d.getTime() + t * $;
      return g.w(l, this);
    }, $.subtract = function (t, e) {
      return this.add(-1 * t, e);
    }, $.format = function (t) {
      var e = this;
      if (!this.isValid()) return "Invalid Date";

      var n = t || "YYYY-MM-DDTHH:mm:ssZ",
          r = g.z(this),
          i = this.$locale(),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = i.weekdays,
          f = i.months,
          h = function h(t, r, i, s) {
        return t && (t[r] || t(e, n)) || i[r].substr(0, s);
      },
          d = function d(t) {
        return g.s(s % 12 || 12, t, "0");
      },
          $ = i.meridiem || function (t, e, n) {
        var r = t < 12 ? "AM" : "PM";
        return n ? r.toLowerCase() : r;
      },
          l = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: a + 1,
        MM: g.s(a + 1, 2, "0"),
        MMM: h(i.monthsShort, a, f, 3),
        MMMM: h(f, a),
        D: this.$D,
        DD: g.s(this.$D, 2, "0"),
        d: String(this.$W),
        dd: h(i.weekdaysMin, this.$W, o, 2),
        ddd: h(i.weekdaysShort, this.$W, o, 3),
        dddd: o[this.$W],
        H: String(s),
        HH: g.s(s, 2, "0"),
        h: d(1),
        hh: d(2),
        a: $(s, u, !0),
        A: $(s, u, !1),
        m: String(u),
        mm: g.s(u, 2, "0"),
        s: String(this.$s),
        ss: g.s(this.$s, 2, "0"),
        SSS: g.s(this.$ms, 3, "0"),
        Z: r
      };

      return n.replace(c, function (t, e) {
        return e || l[t] || r.replace(":", "");
      });
    }, $.utcOffset = function () {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, $.diff = function (t, f, h) {
      var c,
          d = g.p(f),
          $ = v(t),
          l = 6e4 * ($.utcOffset() - this.utcOffset()),
          y = this - $,
          M = g.m(this, $);
      return M = (c = {}, c[o] = M / 12, c[u] = M, c[a] = M / 3, c[s] = (y - l) / 6048e5, c[i] = (y - l) / 864e5, c[r] = y / 36e5, c[n] = y / 6e4, c[e] = y / 1e3, c)[d] || y, h ? M : g.a(M);
    }, $.daysInMonth = function () {
      return this.endOf(u).$D;
    }, $.$locale = function () {
      return M[this.$L];
    }, $.locale = function (t, e) {
      if (!t) return this.$L;
      var n = this.clone(),
          r = D(t, e, !0);
      return r && (n.$L = r), n;
    }, $.clone = function () {
      return g.w(this.$d, this);
    }, $.toDate = function () {
      return new Date(this.valueOf());
    }, $.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }, $.toISOString = function () {
      return this.$d.toISOString();
    }, $.toString = function () {
      return this.$d.toUTCString();
    }, d;
  }(),
      p = S.prototype;

  return v.prototype = p, [["$ms", t], ["$s", e], ["$m", n], ["$H", r], ["$W", i], ["$M", u], ["$y", o], ["$D", f]].forEach(function (t) {
    p[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), v.extend = function (t, e) {
    return t.$i || (t(e, S, v), t.$i = !0), v;
  }, v.locale = D, v.isDayjs = m, v.unix = function (t) {
    return v(1e3 * t);
  }, v.en = M[y], v.Ls = M, v.p = {}, v;
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* istanbul ignore next */
// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/remax/index.js":
/*!*************************************!*\
  !*** ./node_modules/remax/index.js ***!
  \*************************************/
/*! exports provided: render, createAppConfig, createPageConfig, usePageInstance, useQuery, useNativeEffect, unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAppConfig", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createAppConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageInstance", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNativeEffect", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["useNativeEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return _remax_runtime__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]; });



/***/ }),

/***/ "./node_modules/remax/wechat.js":
/*!**************************************!*\
  !*** ./node_modules/remax/wechat.js ***!
  \**************************************/
/*! exports provided: View, Input, Textarea, Video, Swiper, ScrollView, SwiperItem, MovableView, MovableArea, CoverView, CoverImage, Icon, Text, RichText, Progress, Button, CheckboxGroup, Checkbox, Form, Label, Picker, PickerView, PickerViewColumn, RadioGroup, Radio, Slider, Switch, Navigator, Image, LivePlayer, LivePusher, Map, Canvas, OpenData, OfficialAccount, Editor, Audio, Ad, WebView, FunctionalPageNavigator, Camera, canIUse, base64ToArrayBuffer, arrayBufferToBase64, getSystemInfoSync, getSystemInfo, getUpdateManager, getLaunchOptionsSync, onPageNotFound, onError, onAudioInterruptionEnd, onAppShow, onAppHide, offPageNotFound, offError, offAudioInterruptionEnd, offAudioInterruptionBegin, offAppShow, offAppHide, setEnableDebug, getLogManager, switchTab, reLaunch, redirectTo, navigateTo, navigateBack, showToast, showModal, showLoading, showActionSheet, hideToast, hideLoading, showNavigationBarLoading, setNavigationBarTitle, setNavigationBarColor, hideNavigationBarLoading, setBackgroundTextStyle, setBackgroundColor, showTabBarRedDot, showTabBar, setTabBarStyle, setTabBarItem, setTabBarBadge, removeTabBarBadge, hideTabBarRedDot, hideTabBar, loadFontFace, stopPullDownRefresh, startPullDownRefresh, pageScrollTo, createAnimation, setTopBarText, nextTick, getMenuButtonBoundingClientRect, onWindowResize, offWindowResize, onKeyboardHeightChange, offKeyboardHeightChange, getSelectedTextRange, request, downloadFile, uploadFile, sendSocketMessage, onSocketOpen, onSocketMessage, onSocketError, onSocketClose, connectSocket, closeSocket, stopLocalServiceDiscovery, startLocalServiceDiscovery, onLocalServiceResolveFail, onLocalServiceLost, onLocalServiceFound, onLocalServiceDiscoveryStop, offLocalServiceResolveFail, offLocalServiceLost, offLocalServiceFound, offLocalServiceDiscoveryStop, createUDPSocket, setStorageSync, setStorage, removeStorageSync, removeStorage, getStorageSync, getStorageInfoSync, getStorageInfo, getStorage, clearStorageSync, clearStorage, createMapContext, saveImageToPhotosAlbum, previewImage, getImageInfo, compressImage, chooseMessageFile, chooseImage, saveVideoToPhotosAlbum, createVideoContext, chooseVideo, chooseMedia, stopVoice, setInnerAudioOption, playVoice, pauseVoice, getAvailableAudioSources, createInnerAudioContext, createAudioContext, stopBackgroundAudio, seekBackgroundAudio, playBackgroundAudio, pauseBackgroundAudio, onBackgroundAudioStop, onBackgroundAudioPlay, onBackgroundAudioPause, getBackgroundAudioPlayerState, getBackgroundAudioManager, createLivePusherContext, createLivePlayerContext, stopRecord, startRecord, getRecorderManager, createCameraContext, stopLocationUpdate, startLocationUpdateBackground, startLocationUpdate, openLocation, onLocationChange, getLocation, chooseLocation, updateShareMenu, showShareMenu, hideShareMenu, getShareInfo, createOffscreenCanvas, createCanvasContext, canvasToTempFilePath, canvasPutImageData, canvasGetImageData, saveFile, removeSavedFile, openDocument, getSavedFileList, getSavedFileInfo, getFileSystemManager, getFileInfo, login, checkSession, navigateToMiniProgram, navigateBackMiniProgram, getAccountInfoSync, getUserInfo, reportMonitor, reportAnalytics, requestPayment, authorize, openSetting, getSetting, chooseAddress, openCard, addCard, chooseInvoiceTitle, chooseInvoice, startSoterAuthentication, checkIsSupportSoterAuthentication, checkIsSoterEnrolledInDevice, getWeRunData, stopBeaconDiscovery, startBeaconDiscovery, onBeaconUpdate, offBeaconUpdate, onBeaconServiceChange, offBeaconServiceChange, getBeacons, stopWifi, startWifi, setWifiList, onWifiConnected, offWifiConnected, onGetWifiList, offGetWifiList, getWifiList, getConnectedWifi, connectWifi, addPhoneContact, writeBLECharacteristicValue, readBLECharacteristicValue, onBLEConnectionStateChange, offBLEConnectionStateChange, onBLECharacteristicValueChange, offBLECharacteristicValueChange, notifyBLECharacteristicValueChange, getBLEDeviceServices, getBLEDeviceCharacteristics, createBLEConnection, closeBLEConnection, stopBluetoothDevicesDiscovery, startBluetoothDevicesDiscovery, openBluetoothAdapter, onBluetoothDeviceFound, offBluetoothDeviceFound, onBluetoothAdapterStateChange, offBluetoothAdapterStateChange, getConnectedBluetoothDevices, getBluetoothDevices, getBluetoothAdapterState, closeBluetoothAdapter, getBatteryInfoSync, getBatteryInfo, setClipboardData, getClipboardData, stopHCE, startHCE, sendHCEMessage, onHCEMessage, offHCEMessage, getHCEState, onNetworkStatusChange, offNetworkStatusChange, getNetworkType, setScreenBrightness, setKeepScreenOn, onUserCaptureScreen, offUserCaptureScreen, getScreenBrightness, makePhoneCall, stopAccelerometer, startAccelerometer, onAccelerometerChange, offAccelerometerChange, stopCompass, startCompass, onCompassChange, offCompassChange, stopDeviceMotionListening, startDeviceMotionListening, onDeviceMotionChange, offDeviceMotionChange, stopGyroscope, startGyroscope, onGyroscopeChange, offGyroscopeChange, onMemoryWarning, offMemoryWarning, scanCode, vibrateShort, vibrateLong, createWorker, getExtConfigSync, getExtConfig, createSelectorQuery, createIntersectionObserver, createRewardedVideoAd, createInterstitialAd, cloud, requestSubscribeMessage, hideHomeButton, getRealtimeLogManager, hideKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/wechat */ "./node_modules/@remax/wechat/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["MovableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["CoverView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["CoverImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["LivePlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["LivePusher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["OpenData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["OfficialAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Audio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["FunctionalPageNavigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["Camera"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["base64ToArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["arrayBufferToBase64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getLaunchOptionsSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onPageNotFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAudioInterruptionEnd", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppShow", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppHide", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offPageNotFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offError", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionEnd", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionBegin", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAudioInterruptionBegin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppShow", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppHide", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEnableDebug", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setEnableDebug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLogManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getLogManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setNavigationBarTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarColor", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setNavigationBarColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setBackgroundTextStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTabBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTabBarItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["loadFontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTopBarText", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setTopBarText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonBoundingClientRect", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getMenuButtonBoundingClientRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offWindowResize", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onKeyboardHeightChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onKeyboardHeightChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offKeyboardHeightChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offKeyboardHeightChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextRange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSelectedTextRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["sendSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["closeSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocalServiceDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocalServiceDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceResolveFail", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceLost", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceDiscoveryStop", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceResolveFail", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceLost", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceDiscoveryStop", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUDPSocket", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createUDPSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createMapContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["saveImageToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["compressImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMessageFile", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseMessageFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["saveVideoToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMedia", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopVoice", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInnerAudioOption", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setInnerAudioOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playVoice", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["playVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseVoice", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["pauseVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAvailableAudioSources", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getAvailableAudioSources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInnerAudioContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createInnerAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBackgroundAudio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seekBackgroundAudio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["seekBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playBackgroundAudio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["playBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseBackgroundAudio", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["pauseBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioStop", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBackgroundAudioStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPlay", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBackgroundAudioPlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPause", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBackgroundAudioPause"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioPlayerState", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBackgroundAudioPlayerState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBackgroundAudioManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePusherContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createLivePusherContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePlayerContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createLivePlayerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopRecord", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startRecord", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecorderManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getRecorderManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCameraContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createCameraContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocationUpdate", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdateBackground", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startLocationUpdateBackground"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdate", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocationChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onLocationChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateShareMenu", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["updateShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["showShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getShareInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOffscreenCanvas", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createOffscreenCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasToTempFilePath", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canvasToTempFilePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasPutImageData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canvasPutImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasGetImageData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["canvasGetImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSavedFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getFileSystemManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["checkSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAccountInfoSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getAccountInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportMonitor", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reportMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["requestPayment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["authorize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["addCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoiceTitle", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseInvoiceTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoice", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["chooseInvoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startSoterAuthentication", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSupportSoterAuthentication", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["checkIsSupportSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSoterEnrolledInDevice", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["checkIsSoterEnrolledInDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeRunData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getWeRunData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBeaconUpdate", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBeaconServiceChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBeacons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopWifi", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startWifi", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWifiList", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWifiConnected", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onWifiConnected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offWifiConnected", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offWifiConnected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetWifiList", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onGetWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offGetWifiList", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offGetWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWifiList", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getConnectedWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectWifi", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["connectWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["addPhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["writeBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["readBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBLEConnectionStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLEConnectionStateChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBLEConnectionStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBLECharacteristicValueChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["notifyBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBLEDeviceServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBLEDeviceCharacteristics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBLEConnection", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBLEConnection", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["closeBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["openBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothDeviceFound", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offBluetoothAdapterStateChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getConnectedBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBluetoothAdapterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["closeBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBatteryInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getBatteryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopHCE", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startHCE", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendHCEMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["sendHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onHCEMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offHCEMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHCEState", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getHCEState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offNetworkStatusChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offUserCaptureScreen", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAccelerometerChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offCompassChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopDeviceMotionListening", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startDeviceMotionListening", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeviceMotionChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onDeviceMotionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offDeviceMotionChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offDeviceMotionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopGyroscope", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["stopGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startGyroscope", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["startGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offGyroscopeChange", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["onMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offMemoryWarning", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["offMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["scanCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getExtConfigSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getExtConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createRewardedVideoAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterstitialAd", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["createInterstitialAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["cloud"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestSubscribeMessage", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["requestSubscribeMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideHomeButton", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideHomeButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRealtimeLogManager", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["getRealtimeLogManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["hideKeyboard"]; });



/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* istanbul ignore next */
/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios_miniprogram_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios-miniprogram-adapter */ "./node_modules/axios-miniprogram-adapter/dist/index.esm.js");
/* harmony import */ var _api_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/interceptor */ "./src/api/interceptor.ts");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/api */ "./src/config/api.ts");
/* harmony import */ var _components_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/message */ "./src/components/message/index.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var platform = "WECHAT"; // @ts-ignore

platform !== 'WEB' ? axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.adapter = axios_miniprogram_adapter__WEBPACK_IMPORTED_MODULE_1__["default"] : null;


var interceptor = new _api_interceptor__WEBPACK_IMPORTED_MODULE_2__["Interceptor"]();

var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, [{
    key: "decorate",
    value:
    /**
     * 处理返回数据
     * @param promise
     */
    function decorate(promise) {
      var p;

      if (promise) {
        p = new Promise(function (resolve, reject) {
          promise.then(function (res) {
            var hasHandled = res.config.headers.hasHandled;

            if (res.data.code === 200) {
              var supressTruncature = res.config.headers.supressTruncature;
              resolve(supressTruncature === true ? res : res.data.data);
            } else if (!hasHandled) {
              reject(res.data);
            }
          }, function (res) {
            //  notice
            var hasHandled = res && res.config && res.config.headers && res.config.headers.hasHandled;

            if (!hasHandled) {
              reject(res.data);
            }
          }, function () {});
        }).finally(function () {
          _components_message__WEBPACK_IMPORTED_MODULE_4__["default"].hideLoading();
        });
      }

      return p;
    }
    /**
     * 处理默认参数
     */

  }, {
    key: "handleBase",
    value: function handleBase() {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = _config_api__WEBPACK_IMPORTED_MODULE_3__["default"].host;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(function (config) {
        interceptor.response(config);
        return config;
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.request.use(function (config) {
        interceptor.request(config);
        return config;
      });
      var userInfo = {};

      if (userInfo && userInfo.token) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.token = userInfo.token;
      }
    }
    /**
     * get data
     * @param url
     * @param data
     * @param config
     */

  }, {
    key: "get",
    value: function get(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.handleBase();
      return this.decorate(axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.handleParams(url, data), config));
    }
    /**
     * insert data
     * @param url
     * @param data
     * @param config
     */

  }, {
    key: "post",
    value: function post(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.handleBase();
      return this.decorate(axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data, config));
    }
    /**
     * put data
     * @param url
     * @param data
     * @param config
     * @returns {*}
     */

  }, {
    key: "put",
    value: function put(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.handleBase();
      return this.decorate(axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(url, data, config));
    }
    /**
     * delete data
     * @param url
     * @param data
     * @param config
     */

  }, {
    key: "del",
    value: function del(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.handleBase();
      return this.decorate(axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(this.handleParams(url, data), config));
    }
    /**
     * handle url
     * @param url
     * @param data
     */

  }, {
    key: "handleParams",
    value: function handleParams(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var len = Object.keys(data).length;
      var params = [];

      if (len > 0) {
        for (var key in data) {
          params.push("".concat(key, "=").concat(data[key]));
        }
      }

      url += "".concat(len > 0 ? '?' : '').concat(params.join('&'));
      return url;
    }
  }]);

  return Api;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Api());

/***/ }),

/***/ "./src/api/interceptor.ts":
/*!********************************!*\
  !*** ./src/api/interceptor.ts ***!
  \********************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _components_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/message */ "./src/components/message/index.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Interceptor = /*#__PURE__*/function () {
  function Interceptor() {
    _classCallCheck(this, Interceptor);
  }

  _createClass(Interceptor, [{
    key: "response",
    value:
    /**
     * 接收到数据处理
     * @param config
     */
    function response(config) {
      var data = config.data.data; // 用户登录TOKEN过期

      if (data.code === 401) {
        window.location.href = '/login';
      }
    }
    /**
     * 请求时候处理数据
     * @param config
     */

  }, {
    key: "request",
    value: function request(config) {
      !config.hideLoading && _components_message__WEBPACK_IMPORTED_MODULE_0__["default"].showLoading({
        content: '加载中......'
      });
    }
  }]);

  return Interceptor;
}();

/***/ }),

/***/ "./src/components/common/layout.tsx":
/*!******************************************!*\
  !*** ./src/components/common/layout.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_message_messageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/message/messageContainer */ "./src/components/message/messageContainer.tsx");
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/one */ "./node_modules/remax/one.js");
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax */ "./node_modules/remax/index.js");





var Layout = function Layout(_ref) {
  var children = _ref.children;
  console.log(Object(remax__WEBPACK_IMPORTED_MODULE_3__["usePageInstance"])());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_message_messageContainer__WEBPACK_IMPORTED_MODULE_1__["MessageContainer"], null)
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/message/index.scss":
/*!*******************************************!*\
  !*** ./src/components/message/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/message/index.tsx":
/*!******************************************!*\
  !*** ./src/components/message/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/event */ "./src/utils/event.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/components/message/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var message = {
  /**
   * success message
   * @param props
   */
  success: function success(props) {
    return _utils_event__WEBPACK_IMPORTED_MODULE_0__["default"].init(_objectSpread({
      icon: 'roundcheck'
    }, props));
  },

  /**
   * error message
   * @param props
   */
  error: function error(props) {
    return _utils_event__WEBPACK_IMPORTED_MODULE_0__["default"].init(_objectSpread({
      icon: 'roundclose'
    }, props));
  },

  /**
   * waning message
   * @param props
   */
  waning: function waning(props) {
    return _utils_event__WEBPACK_IMPORTED_MODULE_0__["default"].init(_objectSpread({
      icon: 'warn'
    }, props));
  },

  /**
   * info message
   * @param props
   */
  info: function info(props) {
    return _utils_event__WEBPACK_IMPORTED_MODULE_0__["default"].init(props);
  },

  /**
   * show loading
   * @param props
   */
  showLoading: function showLoading(props) {
    return _utils_event__WEBPACK_IMPORTED_MODULE_0__["default"].init(_objectSpread(_objectSpread({}, props), {}, {
      type: 'showLoading'
    }));
  },

  /**
   * hide loading
   */
  hideLoading: function hideLoading() {
    return _utils_event__WEBPACK_IMPORTED_MODULE_0__["default"].init({
      type: 'hideLoading'
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (message);

/***/ }),

/***/ "./src/components/message/message.tsx":
/*!********************************************!*\
  !*** ./src/components/message/message.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var annar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! annar */ "./node_modules/annar/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Message = function Message(props) {
  var content = props.content,
      icon = props.icon,
      _props$color = props.color,
      color = _props$color === void 0 ? '#FFF' : _props$color,
      eType = props.eType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      initShow = _useState2[0],
      setShow = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      setShow(eType === 'on' && true);
    }, 50);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "g-message ".concat(initShow && eType === 'on' ? 'g-message-fade-in' : 'g-message-fade-out')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "g-message-content"
  }, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "g-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(annar__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: icon,
    color: color,
    size: 40
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "g-text"
  }, content)));
};

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./src/components/message/messageContainer.tsx":
/*!*****************************************************!*\
  !*** ./src/components/message/messageContainer.tsx ***!
  \*****************************************************/
/*! exports provided: MessageContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageContainer", function() { return MessageContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/components/message/message.tsx");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/event */ "./src/utils/event.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var MessageContainer = function MessageContainer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      initNotice = _useState2[0],
      setNotice = _useState2[1];

  var handleClose = function handleClose(data) {
    setNotice(_objectSpread(_objectSpread({}, data), {}, {
      eType: 'off'
    }));
    setTimeout(function () {
      setNotice(undefined);
    }, 400);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _utils_event__WEBPACK_IMPORTED_MODULE_2__["default"].on(function (data) {
      var _ref = data || {},
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 2000 : _ref$duration,
          type = _ref.type;

      setNotice(_objectSpread(_objectSpread({}, data), {}, {
        eType: 'on'
      }));

      if (type !== 'showLoading' && type !== 'hideLoading') {
        setTimeout(function () {
          handleClose(data);
        }, duration);
      } else {
        type === 'hideLoading' && handleClose(data);
      }
    });
  }, []);
  return initNotice ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_message__WEBPACK_IMPORTED_MODULE_1__["default"], initNotice) : null;
};

/***/ }),

/***/ "./src/config/api.ts":
/*!***************************!*\
  !*** ./src/config/api.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var configApi = {
  host: 'https://www.fastmock.site/mock/9f588bf4e3f4ca58f7257ece26d627ee/api'
};
/* harmony default export */ __webpack_exports__["default"] = (configApi);

/***/ }),

/***/ "./src/pages/index/index.entry.js":
/*!****************************************!*\
  !*** ./src/pages/index/index.entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/index/index.tsx");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index'));

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api */ "./src/api/index.ts");
/* harmony import */ var annar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! annar */ "./node_modules/annar/esm/index.js");
/* harmony import */ var _components_common_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/common/layout */ "./src/components/common/layout.tsx");
/* harmony import */ var _components_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/message */ "./src/components/message/index.tsx");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])("onShow", function () {
    _api__WEBPACK_IMPORTED_MODULE_2__["default"].get('/additional/info', {
      a: 1,
      b: 2
    }).then(function (res) {
      console.log(res);
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_components_common_layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](annar__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    onTap: function onTap() {
      _components_message__WEBPACK_IMPORTED_MODULE_5__["default"].error({
        content: '请输入部门标识码'
      });
    }
  }, "error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](annar__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    onTap: function onTap() {
      _components_message__WEBPACK_IMPORTED_MODULE_5__["default"].success({
        content: 'test'
      });
    }
  }, "success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](annar__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    onTap: function onTap() {
      _components_message__WEBPACK_IMPORTED_MODULE_5__["default"].info({
        content: '请输入部门标识码'
      });
    }
  }, "info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](annar__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    onTap: function onTap() {
      _components_message__WEBPACK_IMPORTED_MODULE_5__["default"].showLoading({
        content: '加载中......'
      });
    }
  }, "show loading"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](annar__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: "test"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](annar__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    label: "Cell"
  }, "content")));
});

/***/ }),

/***/ "./src/utils/event.ts":
/*!****************************!*\
  !*** ./src/utils/event.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventEmit = /*#__PURE__*/function () {
  function EventEmit() {
    _classCallCheck(this, EventEmit);

    _defineProperty(this, "trigger", function () {});
  }

  _createClass(EventEmit, [{
    key: "init",
    value: function init(data) {
      var _this = this;

      setTimeout(function () {
        _this.trigger(data);
      });
    }
  }, {
    key: "on",
    value: function on(callback) {
      this.trigger = callback;
    }
  }]);

  return EventEmit;
}();

/* harmony default export */ __webpack_exports__["default"] = (new EventEmit());

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./src/pages/index/index.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\1\shop-frontend\src\pages\index\index.entry.js */"./src/pages/index/index.entry.js");


/***/ })

},[[1,"runtime","remax-vendors"]]]);