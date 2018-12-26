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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/imports.js":
/*!********************************!*\
  !*** ./application/imports.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fly */ \"./application/modules/fly.js\");\n/* harmony import */ var _modules_swim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/swim */ \"./application/modules/swim.js\");\n/* harmony import */ var _modules_eat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/eat */ \"./application/modules/eat.js\");\n/* harmony import */ var _modules_hunt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hunt */ \"./application/modules/hunt.js\");\n\r\n\r\n\r\n\r\n\r\nfunction Bird(name) {\r\n    this.name = name;\r\n    this.canFly = _modules_fly__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    this.canSwim = _modules_swim__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    this.canEat = _modules_eat__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n    this.canHunt = _modules_hunt__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n\r\n}\r\n\r\nlet chicken = new Bird('chicken');\r\nlet eagle = new Bird('eagle');\r\n\r\nchicken.canFly();\r\nchicken.canSwim();\r\nchicken.canEat();\r\n\r\neagle.canHunt();\r\neagle.canEat();\r\n\n\n//# sourceURL=webpack:///./application/imports.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _imports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imports */ \"./application/imports.js\");\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/modules/eat.js":
/*!************************************!*\
  !*** ./application/modules/eat.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction eat() {\r\n    console.log(`${this.name} can eat`);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (eat);\n\n//# sourceURL=webpack:///./application/modules/eat.js?");

/***/ }),

/***/ "./application/modules/fly.js":
/*!************************************!*\
  !*** ./application/modules/fly.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction fly() {\r\n    console.log(`${this.name} can fly`);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (fly);\n\n//# sourceURL=webpack:///./application/modules/fly.js?");

/***/ }),

/***/ "./application/modules/hunt.js":
/*!*************************************!*\
  !*** ./application/modules/hunt.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction hunt() {\r\n    console.log(`${this.name} can hunt`);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (hunt);\n\n//# sourceURL=webpack:///./application/modules/hunt.js?");

/***/ }),

/***/ "./application/modules/swim.js":
/*!*************************************!*\
  !*** ./application/modules/swim.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction swim() {\r\n    console.log(`${this.name} can swim`);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (swim);\n\n//# sourceURL=webpack:///./application/modules/swim.js?");

/***/ })

/******/ });