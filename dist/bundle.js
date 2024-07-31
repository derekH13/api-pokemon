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

/***/ "./src/classes/Util.ts":
/*!*****************************!*\
  !*** ./src/classes/Util.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Util: () => (/* binding */ Util)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass Util {\n    static requisicao(pesquisa) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const Response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`);\n                if (!Response) {\n                    throw new Error(`requisição deu ruim ${Error}`);\n                }\n                const dados = yield Response.json();\n                const result = {\n                    height: dados.height,\n                    id: dados.id,\n                    name: dados.name,\n                    sprites: dados.sprites,\n                    types: dados.types,\n                    weight: dados.weight\n                };\n                return result;\n            }\n            catch (error) {\n                console.error(`Consulta não efetuada ${error}`);\n            }\n        });\n    }\n    static requisicaoTipos(pesquisa) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                const Response = yield fetch(`https://pokeapi.co/api/v2/type/${pesquisa}`);\n                if (!Response) {\n                    throw new Error(`requisição deu ruim ${Error}`);\n                }\n                const dados = yield Response.json();\n                const result = dados.pokemon;\n                return result;\n            }\n            catch (error) {\n                console.error(`Consulta não efetuada ${error}`);\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://poke-api/./src/classes/Util.ts?");

/***/ }),

/***/ "./src/classes/pokemon.ts":
/*!********************************!*\
  !*** ./src/classes/pokemon.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pokemon: () => (/* binding */ Pokemon)\n/* harmony export */ });\nclass Pokemon {\n    constructor(dados) {\n        this.height = dados.height;\n        this.id = dados.id;\n        this.name = dados.name;\n        this.sprites = dados.sprites;\n        this.types = dados.types;\n        this.weight = dados.weight;\n    }\n    creatEl(tag, classes) {\n        const el = document.createElement(tag);\n        el.className = classes;\n        return el;\n    }\n    montarCard(pai) {\n        const card = this.creatEl('div', 'card-poke');\n        if (this.types.length === 1) {\n            card.innerHTML = `\r\n              <div><img src=\"${this.sprites.front_default}\" alt=\"\"></div>\r\n            <h1 class=\"nome-poke\">${this.name}</h1>\r\n\r\n            <div class=\"flex tipo-poke\">\r\n                <span class = \"${this.types[0].type.name}\">${this.types[0].type.name}</span>\r\n            </div>\r\n\r\n            <div class=\"info-poke\">\r\n                <div class=\"altura\">\r\n                    <h2>${this.height} M</h2>\r\n                    <h3>Altura</h3>\r\n                </div>\r\n\r\n                <div class=\"peso\">\r\n                    <h2>${this.weight} KG</h2>\r\n                    <h3>Peso</h3>\r\n                </div>\r\n            </div><!--flex-->\r\n                <a href=\"pokemon.html\"><button>Mais Detalhes</button></a>\r\n            `;\n        }\n        if (this.types.length >= 2) {\n            card.innerHTML = `\r\n              <div><img src=\"${this.sprites.front_default}\" alt=\"\"></div>\r\n            <h1 class=\"nome-poke\">${this.name}</h1>\r\n\r\n            <div class=\"flex tipo-poke\">\r\n                <span class = \"${this.types[0].type.name}\">${this.types[0].type.name}</span>\r\n                <span class = \"${this.types[1].type.name}\">${this.types[1].type.name}</span>\r\n            </div>\r\n\r\n            <div class=\"info-poke\">\r\n                <div class=\"altura\">\r\n                    <h2>${this.height} M</h2>\r\n                    <h3>Altura</h3>\r\n                </div>\r\n\r\n                <div class=\"peso\">\r\n                    <h2>${this.weight} KG</h2>\r\n                    <h3>Peso</h3>\r\n                </div>\r\n            </div><!--flex-->\r\n                <a href=\"pokemon.html\"><button>Mais Detalhes</button></a>\r\n            `;\n        }\n        this.backColorP(card, pai);\n    }\n    backColorP(card, pai) {\n        var _a, _b, _c, _d;\n        // Verifique se `this.types` está definido e tem pelo menos um elemento\n        const type1 = (_b = (_a = this.types[0]) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.name;\n        // Verifique se existe um segundo tipo antes de acessá-lo\n        const type2 = (_d = (_c = this.types[1]) === null || _c === void 0 ? void 0 : _c.type) === null || _d === void 0 ? void 0 : _d.name;\n        // Aplique a classe CSS apropriada com base nos tipos\n        if (type1 === 'water') {\n            card.classList.add('fundo-water');\n        }\n        else if (type1 === 'fire') {\n            card.classList.add('fundo-fire');\n        }\n        else if (type1 === 'grass') {\n            card.classList.add('fundo-grass');\n        }\n        else if (type1 === 'normal') {\n            card.classList.add('fundo-normal');\n        }\n        else if (type1 === 'flying') {\n            card.classList.add('fundo-flying');\n        }\n        else if (type1 === 'poison') {\n            card.classList.add('fundo-poison');\n        }\n        else if (type1 === 'bug') {\n            card.classList.add('fundo-bug');\n        }\n        else if (type1 === 'dragon') {\n            card.classList.add('fundo-dragon');\n        }\n        else if (type1 === 'ghost') {\n            card.classList.add('fundo-ghost');\n        }\n        else if (type1 === 'steel') {\n            card.classList.add('fundo-steel');\n        }\n        else if (type1 === 'ice') {\n            card.classList.add('fundo-ice');\n        }\n        else if (type1 === 'psychic') {\n            card.classList.add('fundo-psychic');\n        }\n        else if (type1 === 'ground') {\n            card.classList.add('fundo-ground');\n        }\n        else if (type1 === 'rock') {\n            card.classList.add('fundo-rock');\n        }\n        else if (type1 === 'dark') {\n            card.classList.add('fundo-dark');\n        }\n        pai.append(card);\n    }\n}\n\n\n//# sourceURL=webpack://poke-api/./src/classes/pokemon.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Util */ \"./src/classes/Util.ts\");\n/* harmony import */ var _classes_pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/pokemon */ \"./src/classes/pokemon.ts\");\n\n\nconst InputPesq = document.querySelector('.input-group input');\nconst pai = document.querySelector('.grid-dex');\n// ============================= função ==================================\n//função de fazer a requisição do nome do pokemon\nconst pesquisarPoke = () => {\n    if (!InputPesq)\n        return;\n    const pesquisa = InputPesq.value;\n    _classes_Util__WEBPACK_IMPORTED_MODULE_0__.Util.requisicao(pesquisa).then(result => {\n        if (!result)\n            return;\n        let pokePerson = new _classes_pokemon__WEBPACK_IMPORTED_MODULE_1__.Pokemon(result);\n        if (!pai)\n            return;\n        pokePerson.montarCard(pai);\n    });\n};\n//requisição atraves do array que o tipo retorna\nconst tipoPokemon = (tipo) => {\n    const pai = document.querySelector('.grid-dex');\n    if (!pai)\n        return;\n    //limpando a grid\n    let cardDex = pai.querySelectorAll('.card-poke');\n    for (const card of cardDex) {\n        card.remove();\n    }\n    _classes_Util__WEBPACK_IMPORTED_MODULE_0__.Util.requisicaoTipos(tipo).then(data => {\n        if (!data)\n            return;\n        for (let i = 0; i < 40; i++) {\n            _classes_Util__WEBPACK_IMPORTED_MODULE_0__.Util.requisicao(data[i].pokemon.name).then(data => {\n                if (!data)\n                    return;\n                if (!pai)\n                    return;\n                let pokePerson = new _classes_pokemon__WEBPACK_IMPORTED_MODULE_1__.Pokemon(data);\n                pokePerson.montarCard(pai);\n            });\n        }\n    });\n};\n// ===================================== event ===================================\nconst btnPesquisa = document.querySelector('#button-addon2');\nconst btnPsifico = document.querySelector('.tipoPsifico');\nconst btnDark = document.querySelector('.tipoDark');\nconst btnPlanta = document.querySelector('.tipoGrass');\nconst btnBug = document.querySelector('.tipoBug');\nconst btnFlying = document.querySelector('.tipoFlying');\nconst btnNormal = document.querySelector('.tipoNormal');\nconst btnWater = document.querySelector('.tipoWater');\nconst btnDragon = document.querySelector('.tipoDragon');\nconst btnGhost = document.querySelector('.tipoGhost');\nconst btnPoison = document.querySelector('.tipoPoison');\nconst btnFire = document.querySelector('.tipoFire');\nconst btnIce = document.querySelector('.tipoIce');\nif (btnPsifico) {\n    btnPsifico.addEventListener('click', () => tipoPokemon('psychic'));\n}\nif (btnDark) {\n    btnDark.addEventListener('click', () => tipoPokemon('dark'));\n}\nif (btnPlanta) {\n    btnPlanta.addEventListener('click', () => tipoPokemon('grass'));\n}\nif (btnBug) {\n    btnBug.addEventListener('click', () => tipoPokemon('bug'));\n}\nif (btnFlying) {\n    btnFlying.addEventListener('click', () => tipoPokemon('flying'));\n}\nif (btnNormal) {\n    btnNormal.addEventListener('click', () => tipoPokemon('normal'));\n}\nif (btnWater) {\n    btnWater.addEventListener('click', () => tipoPokemon('water'));\n}\nif (btnDragon) {\n    btnDragon.addEventListener('click', () => tipoPokemon('dragon'));\n}\nif (btnGhost) {\n    btnGhost.addEventListener('click', () => tipoPokemon('ghost'));\n}\nif (btnPoison) {\n    btnPoison.addEventListener('click', () => tipoPokemon('poison'));\n}\nif (btnFire) {\n    btnFire.addEventListener('click', () => tipoPokemon('fire'));\n}\nif (btnIce) {\n    btnIce.addEventListener('click', () => tipoPokemon('ice'));\n}\nif (btnPesquisa) {\n    btnPesquisa.addEventListener('click', pesquisarPoke);\n}\ntipoPokemon('water');\n\n\n//# sourceURL=webpack://poke-api/./src/index.ts?");

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