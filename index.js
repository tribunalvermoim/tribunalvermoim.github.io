/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/fetchCars.js":
/*!*************************************!*\
  !*** ./src/components/fetchCars.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cars\": () => (/* binding */ cars),\n/* harmony export */   \"fetchCars\": () => (/* binding */ fetchCars)\n/* harmony export */ });\n/* harmony import */ var _loadingSpinner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadingSpinner.js */ \"./src/components/loadingSpinner.js\");\n\n\n/**\n * List of cars imported from JSON file\n */\nvar cars = []\n\n/**\n * Get cars list file\n */\nfunction fetchCars() {\n  // show loading spinner\n  ;(0,_loadingSpinner_js__WEBPACK_IMPORTED_MODULE_0__.setLoading)(true);\n  // fetch cars list\n  fetch(\"mocks/listHero.json\")\n  .then(async response => {\n    cars = await response.json();\n    // show cars list after 1 second (emulating the response time, as if it was from a remote source/endpoint)\n    setTimeout(printCars, 1000);\n  });\n}\n\n/**\n * Show cars based on list\n */\nfunction printCars() {\n  const carsList = document.getElementById('cars-list');\n  // for each car, draw an article object\n  for (let [index, item] of cars.entries()) {\n    carsList.innerHTML +=\n    '<article id=\"car-id-' + index + '\">' +\n      '<p class=\"car-name\">' + item.modelClass + ' ' + item.version + '</p>' +\n      '<div class=\"car-box\">' +\n        '<img class=\"car-img\" src=\"' + item.imagePath + '\" alt=\"' + item.modelClass + ' ' + item.version + '\" width=\"640\" height=\"360\">' +\n        '<p class=\"car-price\">' +\n          Intl.NumberFormat(item.price.locale, { style: 'currency', currency: item.price.currency }).format(parseFloat(item.price.amount)) +\n        '</p>' +\n        '<button class=\"car-btn-add\" id=\"car-btn-add-' + index + '\" onclick=\"handleCarAdd(' + index + ')\">Add to Shopping Bag</button>' +\n      '</div>' +\n    '</article>';\n  }\n  // after rendering the cars, hide loading spinner\n  (0,_loadingSpinner_js__WEBPACK_IMPORTED_MODULE_0__.setLoading)(false);\n}\n\n\n//# sourceURL=webpack://frontend-hero-test/./src/components/fetchCars.js?");

/***/ }),

/***/ "./src/components/filterCars.js":
/*!**************************************!*\
  !*** ./src/components/filterCars.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterCars\": () => (/* binding */ filterCars)\n/* harmony export */ });\n/* harmony import */ var _fetchCars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchCars.js */ \"./src/components/fetchCars.js\");\n\n\n/**\n *\n * @param {Event} e insert new character event\n */\nfunction filterCars(e) {\n  let filter = null;\n  let filteredCars = 0;\n\n  // if length of search box is <2 keep filter=null, else set it to its value\n  if (e.target.value.length > 2) {\n    filter = e.target.value;\n  }\n\n  // for each car in the list\n  for (let [index, item] of _fetchCars_js__WEBPACK_IMPORTED_MODULE_0__.cars.entries()) {\n    const carArticle = document.getElementById('car-id-' + index);\n    // if filter exists and it does not match the name of the car (case insensitive), hide it from the list, else show it\n    if (filter != null && !(item.modelClass + ' ' + item.version).toLowerCase().includes(filter.toLowerCase()) ) {\n      carArticle.style.display = 'none';\n    } else {\n      filteredCars++;\n      carArticle.style.display = 'block';\n    }\n  }\n\n  // if no car matches the filter, show empty list message\n  const emptyList = document.getElementById('empty-list');\n  if (filteredCars == 0) {\n    emptyList.style.display = 'flex';\n  } else {\n    emptyList.style.display = 'none';\n  }\n}\n\n\n//# sourceURL=webpack://frontend-hero-test/./src/components/filterCars.js?");

/***/ }),

/***/ "./src/components/loadingSpinner.js":
/*!******************************************!*\
  !*** ./src/components/loadingSpinner.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLoading\": () => (/* binding */ setLoading)\n/* harmony export */ });\n/**\n *\n * @param {bool} set turn on or off the loading spinner\n */\nfunction setLoading(set) {\n  if (set) {\n    document.getElementById('is-loading').style.display = \"table-cell\";\n    document.getElementById('cars').style.display = \"none\";\n  } else {\n    document.getElementById('is-loading').style.display = \"none\";\n    document.getElementById('cars').style.display = \"block\";\n  }\n}\n\n\n//# sourceURL=webpack://frontend-hero-test/./src/components/loadingSpinner.js?");

/***/ }),

/***/ "./src/components/shoppingBag.js":
/*!***************************************!*\
  !*** ./src/components/shoppingBag.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleCarAdd\": () => (/* binding */ handleCarAdd)\n/* harmony export */ });\n/* harmony import */ var _fetchCars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchCars.js */ \"./src/components/fetchCars.js\");\n\n\nvar addedCars = []\n\n/**\n * Add or remove an item (car) from the shopping bag\n * @param {int} index index of the list of cars to add/remove from shopping bag\n */\nfunction handleCarAdd(index) {\n  // get current shopping bag price\n  let bagPrice = parseFloat(getBagPrice());\n  const carArticle = document.getElementById('car-id-' + index);\n  const carAddBtn = document.getElementById('car-btn-add-' + index);\n\n  // if car to add is already on the list\n  if (addedCars.includes(index)) {\n    // remove car from list of added cars\n    addedCars = addedCars.filter(function(value){\n        return value != index;\n    });\n    // remove car price from bag price\n    setBagPrice(bagPrice - parseFloat(_fetchCars_js__WEBPACK_IMPORTED_MODULE_0__.cars[index].price.amount), _fetchCars_js__WEBPACK_IMPORTED_MODULE_0__.cars[index].price);\n    // change item look\n    carArticle.classList.remove('in-bag');\n    // change add button text\n    carAddBtn.innerText = 'Add to Shopping Bag';\n  } else {\n    // add car to list of added cars\n    addedCars.push(index);\n    // add car price to bag price\n    setBagPrice(bagPrice + parseFloat(_fetchCars_js__WEBPACK_IMPORTED_MODULE_0__.cars[index].price.amount), _fetchCars_js__WEBPACK_IMPORTED_MODULE_0__.cars[index].price);\n    // change item look\n    carArticle.classList.add('in-bag');\n    // change add button text\n    carAddBtn.innerText = 'Remove from Shopping Bag';\n  }\n}\n// put handleCarAdd in window so it can be used outside the module scope (ie, in the onclick event)\nwindow.handleCarAdd = handleCarAdd\n\n/**\n * Set shopping bag price\n * @param {float} bagPrice bag price to set\n * @param {object} carPrice car to add price\n */\nfunction setBagPrice(bagPrice, carPrice) {\n  const bagElement = document.getElementById('bag-price');\n  // Set inner text of shopping bag, adapted to locale float style and price currency\n  bagElement.innerText = Intl.NumberFormat(carPrice.locale, { style: 'currency', currency: carPrice.currency }).format(bagPrice);\n  // Set value of shopping bag\n  bagElement.value = bagPrice;\n}\n\n/**\n * Get current shopping bag price\n * @return {float} current bag price\n */\nfunction getBagPrice() {\n  const bagElement = document.getElementById('bag-price');\n  return bagElement.value;\n}\n\n\n//# sourceURL=webpack://frontend-hero-test/./src/components/shoppingBag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_shoppingBag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shoppingBag.js */ \"./src/components/shoppingBag.js\");\n/* harmony import */ var _components_fetchCars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/fetchCars.js */ \"./src/components/fetchCars.js\");\n/* harmony import */ var _components_filterCars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filterCars.js */ \"./src/components/filterCars.js\");\n\n\n\n\n// get cars list\n(0,_components_fetchCars_js__WEBPACK_IMPORTED_MODULE_1__.fetchCars)();\n// add event listener to input on filtering cars\ndocument.getElementById('cars-search').addEventListener('input', _components_filterCars_js__WEBPACK_IMPORTED_MODULE_2__.filterCars);\n\n\n//# sourceURL=webpack://frontend-hero-test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;