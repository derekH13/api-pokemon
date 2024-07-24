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

/***/ "./src/classes/pokemon.ts":
/*!********************************!*\
  !*** ./src/classes/pokemon.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PokemonDados: () => (/* binding */ PokemonDados)\n/* harmony export */ });\n//fazer um class com requisição em cima para chamar o construtor dessa class\nclass PokemonDados {\n    constructor(e) {\n        this.name = e.name;\n        this.id = e.id;\n        this.abilities = e.abilities;\n        this.height = e.height;\n        this.types = e.types;\n        this.weight = e.weight;\n        this.sprites = e.sprites;\n        this.forms = e.forms;\n    }\n    //craete element e add class\n    createEl(div, classe) {\n        const x = document.createElement(div);\n        if (classe) {\n            const array = classe.split();\n            for (const a of array) {\n                x.className = a;\n            }\n        }\n        return x;\n    }\n    //montar card e adicina no elemento pai\n    montarCard(pai) {\n        const card = this.createEl('div', 'card-poke');\n        const inter = this.createEl('div', 'interface-1');\n        const imagem = this.createEl('img', 'imagem');\n        const nome = this.createEl('h1', 'nome-poke');\n        const flex = this.createEl('div', 'flex tipo-poke');\n        const info = this.createEl('div', 'info-poke');\n        const altura = this.createEl('div', 'altura');\n        const metro = this.createEl('h2', '');\n        const metroh3 = this.createEl('h3', '');\n        const peso = this.createEl('div', 'peso');\n        const pesoh2 = this.createEl('h2', '');\n        const pesoh3 = this.createEl('h3', '');\n        const Abutton = this.createEl('a', '');\n        const button = this.createEl('button', '');\n        nome.innerHTML = this.name;\n        metro.innerHTML = `${this.height}`;\n        metroh3.innerHTML = 'Altura';\n        pesoh2.innerHTML = `${this.weight}`;\n        pesoh3.innerHTML = `Peso`;\n        button.innerHTML = 'Mais Detalhes';\n        for (const x of this.types) {\n            const span = this.createEl('span', x);\n            span.innerHTML = x;\n            flex.append(span);\n        }\n        inter.append(imagem);\n        altura.append(metro);\n        altura.append(metroh3);\n        peso.append(pesoh2);\n        peso.append(pesoh3);\n        Abutton.append(button);\n        info.append(altura);\n        info.append(peso);\n        card.append(inter);\n        card.append(nome);\n        card.append(flex);\n        card.append(info);\n        card.append(Abutton);\n        if (!pai)\n            return;\n        pai.append(card);\n    }\n}\n\n\n//# sourceURL=webpack://poke-api/./src/classes/pokemon.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_pokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/pokemon */ \"./src/classes/pokemon.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar _a;\n\nconst gridDex = document.querySelector('.grid-dex');\nlet poke, pesquisar = '102';\n// ==================== função ==============================\n//faz a requisição/ deixando de um jeito para facilitar o uso\nfunction consultaPoke(pesquisa) {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`);\n            if (!response.ok) {\n                throw new Error(`deu ruim ${(yield response).status}`);\n            }\n            const data = yield response.json();\n            return data;\n        }\n        catch (Error) {\n            console.error(`Requisição Não Realizada ${Error}`);\n        }\n        return;\n    });\n}\n//separa as informações que eu vou usar/ usando metodo asyc para poder usar await e trabalhando com promise\nfunction separaPoke(pesquisa) {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield consultaPoke(pesquisa);\n            if (!data)\n                return null;\n            const result = {\n                name: data.name,\n                id: data.id,\n                abilities: data.abilities,\n                height: data.height,\n                types: data.types,\n                weight: data.weight,\n                sprites: data.sprites,\n                forms: data.forms\n            };\n            return result;\n        }\n        catch (error) {\n            console.error('Erro ao buscar dados do Pokémon:', error);\n            return null;\n        }\n    });\n}\n//function para pesquisar por um pokemon\nconst buscar = () => {\n    separaPoke(pesquisar).then(data => {\n        if (!data)\n            return;\n        poke = new _classes_pokemon__WEBPACK_IMPORTED_MODULE_0__.PokemonDados(data);\n        poke.montarCard(gridDex);\n    });\n};\n// ============================= event =====================\n(_a = document.querySelector('#button-addon2')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {\n    const x = document.querySelector('input.form-control');\n    if (!x)\n        return;\n    pesquisar = x.value;\n    buscar();\n});\n\n\n//# sourceURL=webpack://poke-api/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;