module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Util_EB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Util/EB */ "./src/client/Util/EB.js");
/* harmony import */ var _mainmenu_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainmenu/Nav */ "./src/client/mainmenu/Nav.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Routes */ "./src/client/Routes.js");
/* harmony import */ var _images_profile_picture_vertical_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/profile-picture-vertical.png */ "./src/client/images/profile-picture-vertical.png");
/* harmony import */ var _images_profile_picture_vertical_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_profile_picture_vertical_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_reactlogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/reactlogo.png */ "./src/client/images/reactlogo.png");
/* harmony import */ var _images_reactlogo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_reactlogo_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_nodelogo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/nodelogo.png */ "./src/client/images/nodelogo.png");
/* harmony import */ var _images_nodelogo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_nodelogo_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_webpacklogo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/webpacklogo.png */ "./src/client/images/webpacklogo.png");
/* harmony import */ var _images_webpacklogo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_webpacklogo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_npmlogo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/npmlogo.png */ "./src/client/images/npmlogo.png");
/* harmony import */ var _images_npmlogo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_npmlogo_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scss/main.scss */ "./src/client/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var scss_logo_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! scss/logo.scss */ "./src/client/scss/logo.scss");
/* harmony import */ var scss_logo_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(scss_logo_scss__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










 // import linkedinlogo from './images/linkedinlogo.png'




var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " change your host file when you get it working"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "headshot",
        className: "profile-grid"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _images_profile_picture_vertical_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "profile image"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
        comp: "Nave in App.js"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mainmenu_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Util_EB__WEBPACK_IMPORTED_MODULE_2__["default"], {
        comp: "Router in App.js"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content"
      }, _Routes__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (_ref) {
        var path = _ref.path,
            exact = _ref.exact,
            C = _ref.component,
            rest = _objectWithoutProperties(_ref, ["path", "exact", "component"]);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          key: path,
          path: path,
          exact: exact,
          render: function render(props) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, _extends({}, props, rest));
          }
        });
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-grid"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _images_reactlogo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "react logo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _images_nodelogo_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "node logo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _images_webpacklogo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "webpack logo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _images_npmlogo_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "npm logo"
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainmenu_endpoints_Summary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainmenu/endpoints/Summary */ "./src/client/mainmenu/endpoints/Summary.js");
/* harmony import */ var _mainmenu_endpoints_WorkExp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainmenu/endpoints/WorkExp */ "./src/client/mainmenu/endpoints/WorkExp.js");
/* harmony import */ var _mainmenu_endpoints_Skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainmenu/endpoints/Skills */ "./src/client/mainmenu/endpoints/Skills.js");
/* harmony import */ var _mainmenu_endpoints_ContactMe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainmenu/endpoints/ContactMe */ "./src/client/mainmenu/endpoints/ContactMe.js");
/* harmony import */ var _mainmenu_endpoints_Portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainmenu/endpoints/Portfolio */ "./src/client/mainmenu/endpoints/Portfolio.js");





var Routes = [{
  path: '/',
  //this is the url and the link button path
  exact: true,
  component: _mainmenu_endpoints_Summary__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: 'Home' //this is the link label

}, {
  path: '/workexp',
  component: _mainmenu_endpoints_WorkExp__WEBPACK_IMPORTED_MODULE_1__["default"],
  name: 'Work Experience & Education'
}, {
  path: '/skills',
  component: _mainmenu_endpoints_Skills__WEBPACK_IMPORTED_MODULE_2__["default"],
  name: 'Skills'
}, {
  path: '/portfolio',
  component: _mainmenu_endpoints_Portfolio__WEBPACK_IMPORTED_MODULE_4__["default"],
  name: 'Portfolio'
}, {
  path: '/contact',
  component: _mainmenu_endpoints_ContactMe__WEBPACK_IMPORTED_MODULE_3__["default"],
  name: 'Contact Me'
}];
/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./src/client/Util/EB.js":
/*!*******************************!*\
  !*** ./src/client/Util/EB.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var EB =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EB, _React$Component);

  function EB(props) {
    var _this;

    _classCallCheck(this, EB);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EB).call(this, props));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(EB, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({
        hasError: true
      });
      console.log('rendering error: ', error, info); // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Something went wrong in the ", this.props.comp, " component");
      }

      return this.props.children;
    }
  }]);

  return EB;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EB);

/***/ }),

/***/ "./src/client/images/nodelogo.png":
/*!****************************************!*\
  !*** ./src/client/images/nodelogo.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a48b9c4e96bcb73c68a0c8d034efa9f8.png";

/***/ }),

/***/ "./src/client/images/npmlogo.png":
/*!***************************************!*\
  !*** ./src/client/images/npmlogo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0b4ad021ce0b90cfbeb21b72ea6187f8.png";

/***/ }),

/***/ "./src/client/images/profile-picture-vertical.png":
/*!********************************************************!*\
  !*** ./src/client/images/profile-picture-vertical.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "75d290715d8ba26a7f0716fa5a4cdf26.png";

/***/ }),

/***/ "./src/client/images/reactlogo.png":
/*!*****************************************!*\
  !*** ./src/client/images/reactlogo.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5d858ad32f9339fe61379209badbe5bf.png";

/***/ }),

/***/ "./src/client/images/webpacklogo.png":
/*!*******************************************!*\
  !*** ./src/client/images/webpacklogo.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e869c25e0300553c446db03ec1ce2d4d.png";

/***/ }),

/***/ "./src/client/mainmenu/Nav.js":
/*!************************************!*\
  !*** ./src/client/mainmenu/Nav.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Routes */ "./src/client/Routes.js");
/* harmony import */ var scss_nav_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scss/nav.scss */ "./src/client/scss/nav.scss");
/* harmony import */ var scss_nav_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scss_nav_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var NavBar = _Routes__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (_ref) {
        var name = _ref.name,
            path = _ref.path;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "nav",
          key: path
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          activeStyle: {
            fontWeight: 'bold'
          },
          to: path
        }, name));
      });
      return NavBar;
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/ContactMe.js":
/*!****************************************************!*\
  !*** ./src/client/mainmenu/endpoints/ContactMe.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scss/main.scss */ "./src/client/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);



var ContactMe = function ContactMe() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "Think you might want to hire me?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "You can get in touch with me by:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Emailing", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:josephplaugher@gmail.com",
    style: {
      textDecoration: 'underline'
    }
  }, "josephplaugher@gmail.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Calling 971-373-1740"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Leaving me a message on", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/joseph-plaugher-911b497/",
    style: {
      textDecoration: 'underline'
    }
  }, "Linked In")));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactMe);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/Portfolio.js":
/*!****************************************************!*\
  !*** ./src/client/mainmenu/endpoints/Portfolio.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scss/main.scss */ "./src/client/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);



var Portfolio = function Portfolio() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "subheadline"
  }, "Enterprise Applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://erp.appreciateco.com"
  }, "Appreciate Enterprise Accounting"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "Integrated Payment Processing"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "Enterprise File Server")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "subheadline"
  }, "Open Source Applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://hash.appco.tech"
  }, "Hash Check Strong Password Generator.", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "GitHub"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "Blog Site. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "GitHub"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "Blog Administration Utility. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "GitHub"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "Pantry. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "GitHub")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "subheadline"
  }, "NPM Modules"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://hash.appco.tech"
  }, "ReactForm-Appco: a powerful, flexible forms and inputs module for React.", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "GitHub"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Form Validation module. From ReactForm-AppCo, but extracted for use on ordinary forms. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "GitHub"), ' ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://hash.appco.tech"
  }, "LightBox: a \"popup\" menu module.", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, "GitHub")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/Skills.js":
/*!*************************************************!*\
  !*** ./src/client/mainmenu/endpoints/Skills.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scss/main.scss */ "./src/client/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);



var Skills = function Skills() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "Technologies I Know"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Here are the technologies in the web development ecosystem I know and use every day."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Vanilla JavaScript - for simple applications that run in the browser, typically with only one view. Also useful for adding interactivity to static HTML websites generated on the server."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This can take a couple different shapes: several event handlers for directly interacting with the DOM in one or two JavaScript files or multiple JavaScript modules using import/export and bundled with Webpack into a single file.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React - for dynamic, interactive, userfriendly applications that run in the browser.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Isomorphic/Universal React - for the best of both worlds from the first two items above: the ability to render the entire view on the server so it is SEO friendly and still maintains complete interactivity.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Node with Express - from simple to complex server side business logic, or a straight-forwad CRUD server."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I am experienced with old-school JavaScript including building functional \"classes\" using prototypical inheritance and using require/module.exports to combine JavaScript files.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Electron - for building desktop applications.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "GIT - for version control.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Webpack - for bundling JavaScript modules, and other assets such as images and css, into one file to be loaded onto the HTML page in the browser"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/Summary.js":
/*!**************************************************!*\
  !*** ./src/client/mainmenu/endpoints/Summary.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scss/main.scss */ "./src/client/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);



var Summary = function Summary() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "Skilled and Capable Web Developer For Hire"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Self Taught And Motivated"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p2", {
    className: "text"
  }, "Today's JavaScript ecosystem can be confusing! I've invested my own time in learning it anyway. The internet is changing the world and I am not going to be left behind. I am not throwing away my shot!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheadline"
  }, "Not just a code jockey"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p2", {
    className: "text"
  }, "While I believe I have the skills needed to be successful in web development, I also have a Bachelor's Degress in Accounting and working for an engineering firm as a Project Accountant I have absorbed knowledge of the financial side of consulting and engineering and am aware of the financial aspects of business decisions wthin a consulting firm. These same lessons apply to software consulting."));
};

/* harmony default export */ __webpack_exports__["default"] = (Summary);

/***/ }),

/***/ "./src/client/mainmenu/endpoints/WorkExp.js":
/*!**************************************************!*\
  !*** ./src/client/mainmenu/endpoints/WorkExp.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scss/main.scss */ "./src/client/scss/main.scss");
/* harmony import */ var scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);



var WorkExp = function WorkExp() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "Formal Education"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Concordia University-Portland", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Bachelor of Arts, Accounting", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "2015"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "headline"
  }, "Recent Work Experience"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Project Accountant | HDR Engineering", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Oct 2015 \u2013 Present", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Portland, Oregon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Synthesize new project information and create project profile in Oracle EBS.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Review draft invoices for accuracy and adherence to client contracts.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Work with project managers to correct invoices\u200B errors as needed.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Coordinate with legal team to draft subcontractor agreements.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Validate subcontractor invoices for adherence to contracts.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Oversee budgets and keep project managers apprised. ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Analyze and summarize costs using various MS Excel techniques to provide meaningful data."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "Accountant/Bookkeeper | Self-Employed", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Dec. 2013 - Mar 2017", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Portland, Oregon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tailor my services to new clients to meet their specific needs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Continually communicate financial results so clients can make educated decisions about their business.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Collaborate with various members of the client's business team to achieve their business goals.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "General bookkeeping, payroll, tax strategy collaboration. A few words from a couple of my clients:"))));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkExp);

/***/ }),

/***/ "./src/client/scss/logo.scss":
/*!***********************************!*\
  !*** ./src/client/scss/logo.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/scss/main.scss":
/*!***********************************!*\
  !*** ./src/client/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/client/scss/nav.scss":
/*!**********************************!*\
  !*** ./src/client/scss/nav.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ServerUtil_SetUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ServerUtil/SetUrl */ "./src/server/ServerUtil/SetUrl.js");
/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/App */ "./src/client/App.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var app = express__WEBPACK_IMPORTED_MODULE_2___default()();
  app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static('public'));
  app.set('view engine', 'ejs');
  app.set('views', './src/views');
  var port = "3024";
  app.listen(port, function () {
    console.log('server started in ' + "development" + ' mode on port ' + port);
  });
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', Object(ServerUtil_SetUrl__WEBPACK_IMPORTED_MODULE_4__["default"])());
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, authorization');
    next();
  });
  app.get('*', function (req, res, next) {
    var AppString = react_dom_server__WEBPACK_IMPORTED_MODULE_0___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], {
      location: req.url,
      context: {
        data: 'context'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
    res.render('index', {
      App: AppString
    });
  });
});

/***/ }),

/***/ "./src/server/ServerUtil/SetUrl.js":
/*!*****************************************!*\
  !*** ./src/server/ServerUtil/SetUrl.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SetUrl = function SetUrl() {
  //returns the correct url whether in dev or prod
  var url;

  if (true) {
    url = "http://localhost:3024";
  } else {}

  return url;
};

/* harmony default export */ __webpack_exports__["default"] = (SetUrl);

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map