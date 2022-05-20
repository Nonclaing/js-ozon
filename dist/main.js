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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Работа с корзиной\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n// Загрузка рендера\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n// Поиск по сайту\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n// Поиск по каталогу\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n// Поиск по цене\r\n(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack://js-ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\r\nfunction cart() {\r\n    const cartButton = document.getElementById('cart');\r\n    const cart = document.querySelector('.cart');\r\n    const goodsWrapper = document.querySelector('.goods');\r\n    const cartTotal = cart.querySelector('.cart-total > span');\r\n    const cartWrapper = cart.querySelector('.cart-wrapper');\r\n    const cartSendBtn = cart.querySelector('.cart-confirm');\r\n    const cartsCounter = cartButton.querySelector('.counter');\r\n\r\n    changeTotalCounter();\r\n\r\n    cartButton.addEventListener('click', openCart);\r\n\r\n    cart.addEventListener('click', (Event) => {\r\n        if (Event.target == event.currentTarget || Event.target.className.indexOf('cart-close') != -1) {\r\n            closeCart();\r\n        }\r\n    });\r\n\r\n    goodsWrapper.addEventListener('click', (Event) => {\r\n        if (Event.target.classList.contains('btn-primary')) {\r\n            addToCart(Event);\r\n        }\r\n    });\r\n\r\n    cartWrapper.addEventListener('click', (Event) => {\r\n        if (Event.target.classList.contains('btn-primary')) {\r\n            removeToCart(Event);\r\n        }\r\n    });\r\n\r\n    cartSendBtn.addEventListener('click', (Event) => {\r\n        const cartArray = getCarts();\r\n\r\n        (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cartArray).then((data) => {\r\n            localStorage.removeItem('cart');\r\n            cartRender(getCarts());\r\n            changeTotalCounter();\r\n        });\r\n\r\n    });\r\n\r\n    function openCart() {\r\n        const cartArray = getCarts();\r\n\r\n        cart.style.display = 'flex';\r\n        document.body.style.overflowY = 'hidden';\r\n\r\n        cartRender(cartArray);\r\n    }\r\n\r\n    function closeCart() {\r\n        cart.style.display = 'none';\r\n        document.body.style.overflowY = 'auto';\r\n    }\r\n\r\n    function addToCart(Event) {\r\n        const card = Event.target.closest('.card');\r\n        const key = card.dataset.key;\r\n        const goods = JSON.parse(localStorage.getItem('goods'));\r\n        const cartArray = getCarts();\r\n\r\n        const goodItem = goods.find((item) => {\r\n            return item.id === +key;\r\n        });\r\n\r\n        if (goodItem) {\r\n            cartArray.push(goodItem);\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cartArray));\r\n\r\n            changeTotalCounter();\r\n        }\r\n    }\r\n\r\n    function removeToCart(Event) {\r\n        const card = Event.target.closest('.card');\r\n        const key = card.dataset.key;\r\n        const cartArray = getCarts();\r\n        const index = cartArray.findIndex((item) => {\r\n            return item.id ===  +key;\r\n        });\r\n\r\n        cartArray.splice(index, 1);\r\n\r\n        localStorage.setItem('cart', JSON.stringify(cartArray));\r\n\r\n        changeTotalCounter();\r\n\r\n        cartRender(cartArray);\r\n    }\r\n\r\n    function getCarts() {\r\n         return localStorage.getItem('cart') ?\r\n            JSON.parse(localStorage.getItem('cart')) :\r\n            [];\r\n    }\r\n\r\n    function cartRender(cartArray) {\r\n        (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cartArray);\r\n        cartTotal.textContent = getTotalPrice(cartArray);\r\n    }\r\n\r\n    function getTotalPrice(cartArray) {\r\n        return cartArray.reduce((res, cur) => {\r\n            return res + cur.price;\r\n        }, 0);\r\n    }\r\n\r\n    function changeTotalCounter() {\r\n        const cartArray = getCarts();\r\n        cartsCounter.textContent = cartArray.length;\r\n    }\r\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\r\nfunction catalog() {\r\n    const catalog =  document.querySelector('.catalog-button');\r\n    const btnCatalog = catalog.querySelector('button');\r\n    const catalogModal = document.querySelector('.catalog');\r\n\r\n    let isOpen = false;\r\n\r\n    btnCatalog.addEventListener('click', () => toggleModal());\r\n\r\n    catalogModal.addEventListener('click', (Event) => {\r\n        if (Event.target.tagName == 'LI') {\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, Event.target.textContent));\r\n            });\r\n            toggleModal();\r\n        }\r\n    });\r\n\r\n    document.addEventListener('click', (Event) => {\r\n       if (!catalog.contains(Event.target) && isOpen) {\r\n           toggleModal();\r\n       }\r\n    });\r\n\r\n    function toggleModal() {\r\n        if (isOpen) {\r\n            catalogModal.style.display = 'none';\r\n        }\r\n        else {\r\n            catalogModal.style.display = 'block';\r\n        }\r\n        isOpen = !isOpen;\r\n    }\r\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\r\n\r\nfunction filter() {\r\n    const filter = document.querySelector('.filter');\r\n    const saleCheck = filter.querySelector('#discount-checkbox');\r\n    const checkMark = filter.querySelector('.filter-check_checkmark');\r\n    let price = {\r\n        minPrice: '',\r\n        maxPrice: '',\r\n    };\r\n\r\n    filter.addEventListener('input', (Event) => {\r\n        switch (Event.target.id) {\r\n            case 'min':\r\n                price.minPrice = Event.target.value;\r\n                changeFilter();\r\n                break;\r\n            case 'max': {\r\n                price.maxPrice = Event.target.value;\r\n                changeFilter();\r\n                break;\r\n            }\r\n        }\r\n    });\r\n\r\n    saleCheck.addEventListener('change', () => {\r\n        checkMark.classList.toggle('checked');\r\n        changeFilter();\r\n    });\r\n\r\n    function changeFilter() {\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, price, saleCheck.checked));\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter)\n/* harmony export */ });\n\r\n\r\nfunction searchFilter(items, value) {\r\n    return  items.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));\r\n}\r\n\r\nfunction categoryFilter(items, value) {\r\n    return  items.filter((item) => item.category.includes(value));\r\n}\r\n\r\nfunction priceFilter(items, values, sale) {\r\n    return items.filter((item) => {\r\n        if (values.maxPrice != '') {\r\n            if (sale) {\r\n                return +item.price >= +values.minPrice && +item.price  <= +values.maxPrice && item.sale == sale;\r\n            }\r\n            else {\r\n                console.log(2);\r\n                return +item.price >= +values.minPrice && +item.price  <= +values.maxPrice;\r\n            }\r\n        }\r\n        else if (sale) {\r\n            return +item.price >= +values.minPrice && item.sale == sale;\r\n        }\r\n        else {\r\n            return +item.price >= +values.minPrice;\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\r\nfunction getData() {\r\n    return fetch('https://ozon-f435b-default-rtdb.europe-west1.firebasedatabase.app/goods.json')\r\n        .then((res) => res.json());\r\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\r\nfunction load() {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\r\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\r\nfunction postData(cart) {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify(cart),\r\n        headers: {\r\n            'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n    }).then(res => res.json());\r\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\r\nfunction renderCart(goods) {\r\n    const  cartWrapper = document.querySelector('.cart-wrapper');\r\n\r\n    cartWrapper.innerHTML = \"\";\r\n\r\n    if (goods.length === 0) {\r\n        cartWrapper.insertAdjacentHTML('beforeend', `\r\n            <div id=\"cart-empty\">\r\n                Ваша корзина пока пуста\r\n            </div>\r\n        `);\r\n    } else  {\r\n        goods.forEach((data) => {\r\n            cartWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"card\" data-key=\"${data.id}\">\r\n                <div class=\"card-img-wrapper\">\r\n                    ${data.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                    <span class=\"card-img-top\"\r\n                    style=\"background-image: url('${data.img}')\"></span>\r\n                </div>\r\n                <div class=\"card-body justify-content-between\">\r\n                    <div class=\"card-price\">${data.price} ₽</div>\r\n                    <h5 class=\"card-title\">${data.title}</h5>\r\n                    <button class=\"btn btn-primary\">Удалить</button>\r\n                </div>\r\n            </div>\r\n        `\r\n            );\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\r\nfunction renderGoods(goods) {\r\n    const  goodsWrapper = document.querySelector('.goods');\r\n\r\n    localStorage.setItem('goods', JSON.stringify(goods));\r\n\r\n    goodsWrapper.innerHTML = \"\";\r\n\r\n    goods.forEach((data) => {\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"card\" data-key=\"${data.id}\">\r\n                    <div class=\"card-img-wrapper\">\r\n                        ${data.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                        <span class=\"card-img-top\"\r\n                        style=\"background-image: url('${data.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${data.price} ₽</div>\r\n                        <h5 class=\"card-title\">${data.title}</h5>\r\n                        <button class=\"btn btn-primary\">В корзину</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        `\r\n        );\r\n    });\r\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\r\nfunction search() {\r\n    const searchInput = document.querySelector('.search-wrapper_input');\r\n\r\n    searchInput.addEventListener('input', (Event) => {\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n           (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, searchInput.value));\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://js-ozon/./src/modules/search.js?");

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