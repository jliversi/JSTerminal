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

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactText\": () => (/* binding */ contactText),\n/* harmony export */   \"creditsText\": () => (/* binding */ creditsText),\n/* harmony export */   \"fileText\": () => (/* binding */ fileText),\n/* harmony export */   \"helpText\": () => (/* binding */ helpText),\n/* harmony export */   \"sudoText\": () => (/* binding */ sudoText),\n/* harmony export */   \"typableCharacters\": () => (/* binding */ typableCharacters),\n/* harmony export */   \"welcomeText\": () => (/* binding */ welcomeText)\n/* harmony export */ });\nconst typableCharacters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~1234567890-=!@#$%^&*()_+[]\\\\{}|;':\",./<>? `\n\nconst welcomeText = `\\\nHi!\n\nMy name is <span class=\"emphasis\">Joshua Ashmall-Liversidge</span> and I make websites :)\n\nThis site is a \"pretend\" text-based terminal in which you can run commands to learn more about me and and what I do.\n\nType '<span class=\"emphasis\">help</span>' to see a list of available commands.\n\nOr click in the <span class=\"emphasis\">top right</span> for a more standard site.\n`;\n\nconst creditsText = `\\\n    Colors: Solarized by Ethan Schoonover\n    Icons: Font Awesome and Devicons\n    Font: Fira Code\n\n    Everything else on this site was built by me using HTML, CSS, and vanilla Javascript.\n    Source code: <a href=\"https://github.com/jliversi\" target=\"_blank\">TODO THIS NEEDS TO LINK TO JSTERMINAL REPO</a>\n`;\n\nconst contactText = `\n    <span class=\"magenta-txt\">Github:</span>     <a href=\"https://github.com/jliversi\" target=\"_blank\">https://github.com/jliversi</a>\n\n    <span class=\"blue-txt\">LinkedIn:</span>   <a href=\"https://www.linkedin.com/in/jliversi/\" target=\"_blank\">https://www.linkedin.com/in/jliversi/</a>\n    \n    <span class=\"green-txt\">Email:</span>      <a href=\"mailto:jliversi.dev@gmail.com\">jliversi.dev@gmail.com</a>\n`;\n\nconst sudoText = `\\\nACCESS DENIED! (jk, but sudo won't do anything here)\n`;\n\nconst helpText = `\\\n    help            Prints this message\n    ls              Prints contents of current director\n    cat [filename]  Prints the contents of the provided file\n    cd [dirname]    Change directories\n    pwd             Print current working directory\n    theme           Changes current theme\n    clear           Clear the terminal output\n    welcome         Print the site welcome message\n    credits         Print a list of credits for creation of this site\n    contact         Prints my contact info (github, linkedin, email)\n`;\n\n\nconst sample = `\\\nThis is text in a sample file\n`;\n\nconst sample2 = `\\\nThis is text in another sample file\n`;\n\nconst contact_file_txt = `\\\nGithub: https://github.com/jliversi\n\nLinkedIn: https://www.linkedin.com/in/jliversi/\n\nEmail: jliversi.dev@gmail.com\n\nSource code: \n`;\n\nconst fileText = {\n    sample,\n    sample2,\n    contact_info: contact_file_txt,\n}\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listener_callbacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listener_callbacks */ \"./src/listener_callbacks.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ \"./src/selectors.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\n// TODO check if on mobile and in that case only go to non-terminal site\n\n// Create default settings\nconst settings = {\n    theme: \"dark\",\n    animating: false,\n    // terminal settings\n    inputText: \"\",\n    cursorIdx: 0,\n    commandHistory: [\"\"],\n    commandIdx: 0,\n    dir: \"~\",\n}\n\n// Run setup functions\n;(0,_ui__WEBPACK_IMPORTED_MODULE_2__.setupWelcomeMessage)();\n\n// Attach listeners\n// Stop animation on window resize\n// TODO: do we need this? \nlet resizeTimer;\nwindow.addEventListener(\"resize\", () => {\n  document.body.classList.add(\"resize-animation-stopper\");\n  clearTimeout(resizeTimer);\n  resizeTimer = setTimeout(() => {\n    document.body.classList.remove(\"resize-animation-stopper\");\n  }, 400);\n});\n\n// Callback listeners\nconst terminalContainer = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.getTerminal)();\nterminalContainer.addEventListener('keydown', (0,_listener_callbacks__WEBPACK_IMPORTED_MODULE_0__.typeChar)(settings));\nterminalContainer.focus();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/listener_callbacks.js":
/*!***********************************!*\
  !*** ./src/listener_callbacks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeChar\": () => (/* binding */ typeChar)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ \"./src/selectors.js\");\n/* harmony import */ var _terminal_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminal_logic */ \"./src/terminal_logic.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\n\n\nfunction typeChar(settings) {\n    const inputEle1 = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.getInput1)();\n    const inputEle2 = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.getInput2)();\n    const caretEle = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.getCaret)();\n\n    const runCommand = (0,_terminal_logic__WEBPACK_IMPORTED_MODULE_2__.buildRunCommand)(settings);\n    return (e) => {\n        if (_constants__WEBPACK_IMPORTED_MODULE_0__.typableCharacters.includes(e.key)) {\n            (0,_terminal_logic__WEBPACK_IMPORTED_MODULE_2__.insertChar)(e.key, settings);\n            \n            (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderInput)(inputEle1, inputEle2, caretEle, settings);\n        } else if (e.key === \"Backspace\") {\n            if (settings.cursorIdx === 0) return;\n            (0,_terminal_logic__WEBPACK_IMPORTED_MODULE_2__.deleteChar)(settings);\n            \n            (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderInput)(inputEle1, inputEle2, caretEle, settings);\n        } else if (e.key === \"ArrowLeft\") {\n            (0,_terminal_logic__WEBPACK_IMPORTED_MODULE_2__.cursorLeft)(settings);\n            (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderInput)(inputEle1, inputEle2, caretEle, settings);\n        } else if (e.key === \"ArrowRight\") {\n            (0,_terminal_logic__WEBPACK_IMPORTED_MODULE_2__.cursorRight)(settings);\n            (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderInput)(inputEle1, inputEle2, caretEle, settings);\n        } else if (e.key === \"ArrowUp\") {\n            (0,_terminal_logic__WEBPACK_IMPORTED_MODULE_2__.prevCommand)(settings);\n            (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderInput)(inputEle1, inputEle2, caretEle, settings);\n        } else if (e.key === \"ArrowDown\") {\n            (0,_terminal_logic__WEBPACK_IMPORTED_MODULE_2__.nextCommand)(settings);\n            (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderInput)(inputEle1, inputEle2, caretEle, settings);\n        } else if (e.key === \"Enter\") {\n            runCommand();\n        } else if (e.key === \"Tab\") {\n            e.preventDefault();\n        }\n    }\n}\n\n// export function toggleTheme(settings) {\n//     const button = getThemeButton();\n//     const icon = button.children[0];\n//     const main = getMain();\n//     const contactLinks = getContactLinks();\n\n//     return function() {\n//         if (settings.animating) return;\n//         settings.animating = true;\n//         if (settings.theme === \"dark\") {\n//             tradeClasses(main, \"dark\", \"light\");\n//             tradeClasses(button, \"dark\", \"light\");\n//             tradeClasses(contactLinks, \"dark\", \"light\");\n            \n//             settings.theme = \"light\";\n//             setTimeout(() => {\n//                 tradeClasses(icon, \"fa-sun\", \"fa-moon\");\n//                 settings.animating = false;\n//             },  200);\n//         } else {\n//             tradeClasses(main, \"light\", \"dark\");\n//             tradeClasses(contactLinks, \"light\", \"dark\");\n\n//             settings.theme = \"dark\";\n//             setTimeout(() => {\n//                 settings.animating = false;\n//                 tradeClasses(icon, \"fa-moon\", \"fa-sun\");\n//             },  200);\n//         }\n//     }\n// }\n\n//# sourceURL=webpack:///./src/listener_callbacks.js?");

/***/ }),

/***/ "./src/selectors.js":
/*!**************************!*\
  !*** ./src/selectors.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCaret\": () => (/* binding */ getCaret),\n/* harmony export */   \"getInput1\": () => (/* binding */ getInput1),\n/* harmony export */   \"getInput2\": () => (/* binding */ getInput2),\n/* harmony export */   \"getInputBlocks\": () => (/* binding */ getInputBlocks),\n/* harmony export */   \"getInputContainer\": () => (/* binding */ getInputContainer),\n/* harmony export */   \"getMain\": () => (/* binding */ getMain),\n/* harmony export */   \"getOutputBlocks\": () => (/* binding */ getOutputBlocks),\n/* harmony export */   \"getTerminal\": () => (/* binding */ getTerminal),\n/* harmony export */   \"getTerminalContainer\": () => (/* binding */ getTerminalContainer)\n/* harmony export */ });\n\nfunction getMain() { return document.getElementById(\"main-window\"); };\n\nfunction getTerminal() { return document.getElementById(\"terminal\"); };\nfunction getTerminalContainer() { return document.getElementById(\"terminal-container\"); };\n\nfunction getOutputBlocks() { return document.querySelectorAll(\".output-block\"); };\n\nfunction getInputBlocks() { return document.querySelectorAll(\".input-block\"); };\n\nfunction getInputContainer() { return document.getElementById(\"input-container\"); }\nfunction getInput1() { return document.getElementById(\"input1\"); };\nfunction getInput2() { return document.getElementById(\"input2\"); };\nfunction getCaret() { return document.getElementById(\"caret\"); };\n\n//# sourceURL=webpack:///./src/selectors.js?");

/***/ }),

/***/ "./src/terminal_logic.js":
/*!*******************************!*\
  !*** ./src/terminal_logic.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildRunCommand\": () => (/* binding */ buildRunCommand),\n/* harmony export */   \"cursorLeft\": () => (/* binding */ cursorLeft),\n/* harmony export */   \"cursorRight\": () => (/* binding */ cursorRight),\n/* harmony export */   \"deleteChar\": () => (/* binding */ deleteChar),\n/* harmony export */   \"insertChar\": () => (/* binding */ insertChar),\n/* harmony export */   \"nextCommand\": () => (/* binding */ nextCommand),\n/* harmony export */   \"prevCommand\": () => (/* binding */ prevCommand)\n/* harmony export */ });\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/selectors.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _listener_callbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listener_callbacks */ \"./src/listener_callbacks.js\");\n\n\n\n\n\n\n// Terminal input functions\nfunction insertChar(key, settings) {\n    settings.inputText = settings.inputText.slice(0, settings.cursorIdx)\n        + key\n        + settings.inputText.slice(settings.cursorIdx);\n    settings.cursorIdx += 1;\n}\n\nfunction deleteChar(settings) {\n    settings.inputText = settings.inputText.slice(0, settings.cursorIdx - 1)\n        + settings.inputText.slice(settings.cursorIdx);\n\n    settings.cursorIdx = Math.max(settings.cursorIdx - 1, 0);\n}\n\nfunction cursorLeft(settings) {\n    settings.cursorIdx = Math.max(settings.cursorIdx - 1, 0);\n}\n\nfunction cursorRight(settings) {\n    settings.cursorIdx = Math.min(settings.cursorIdx + 1, settings.inputText.length);\n}\n\nfunction prevCommand(settings) {\n    if (settings.commandIdx === settings.commandHistory.length - 1) {\n        return;\n    }\n    settings.commandIdx += 1;\n    settings.inputText = settings.commandHistory[settings.commandIdx];\n    settings.cursorIdx = settings.inputText.length;\n}\n\nfunction nextCommand(settings) {\n    if (settings.commandIdx === 0) {\n        return;\n    }\n    settings.commandIdx -= 1;\n    settings.inputText = settings.commandHistory[settings.commandIdx];\n    settings.cursorIdx = settings.inputText.length;\n}\n\n// Creating elements for terminal output\nfunction createOutputBlock() {\n    const newDiv = document.createElement(\"div\");\n    newDiv.classList.add(\"output-block\");\n    return newDiv;\n}\n\nfunction createTextEleFromInput(settings) {\n    const terminal = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.getTerminalContainer)();\n    const inputContainer = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.getInputContainer)();\n    const input1 = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.getInput1)();\n    const input2 = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.getInput2)();\n    const caret = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.getCaret)();\n\n    const newDiv = document.createElement(\"div\");\n    newDiv.classList.add(\"input-block\");\n\n    const outputPrompt = document.createElement(\"span\");\n    outputPrompt.classList.add(\"prompt\");\n    outputPrompt.classList.add(\"emphasis\");\n    outputPrompt.innerHTML = `jal@localhost:${settings.dir}:$`;\n    // outputPrompt.innerHTML = \"/Users/jliversi\" + ':$'; // TODO change this to the directory\n    const outputInput = document.createElement(\"span\");\n    outputInput.innerHTML = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.escapeHtml)(settings.inputText);\n    newDiv.appendChild(outputPrompt);\n    newDiv.appendChild(outputInput);\n\n    terminal.insertBefore(newDiv, inputContainer);\n\n    terminal.scrollTop = terminal.scrollHeight;\n\n    input1.innerHTML = \"\";\n    input2.innerHTML = \"\";\n    caret.innerHTML = \" \";\n    settings.inputText = \"\";\n    settings.cursorIdx = 0;\n}\n\nfunction outputText(outputString) {\n    const terminal = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.getTerminalContainer)();\n    const inputContainer = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.getInputContainer)();\n\n    const outputBlock = createOutputBlock();\n    outputBlock.innerHTML = outputString;\n    terminal.insertBefore(outputBlock, inputContainer);\n    terminal.scrollTop = terminal.scrollHeight;\n}\n\n// Commands\nfunction clear_fn() {\n    (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.getOutputBlocks)().forEach(el => el.remove());\n    (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.getInputBlocks)().forEach(el => el.remove());\n}\n\nfunction help_fn() {\n   outputText(_constants__WEBPACK_IMPORTED_MODULE_1__.helpText); \n}\n\nfunction welcome_fn() {\n   outputText(_constants__WEBPACK_IMPORTED_MODULE_1__.welcomeText); \n}\n\nfunction credits_fn() {\n    outputText(_constants__WEBPACK_IMPORTED_MODULE_1__.creditsText);\n}\n\nfunction contact_fn() {\n    outputText(_constants__WEBPACK_IMPORTED_MODULE_1__.contactText);\n}\n\nfunction sudo_fn() {\n    outputText(_constants__WEBPACK_IMPORTED_MODULE_1__.sudoText);\n}\n\nfunction echo_fn(...args) {\n    outputText(args.join(\" \"));\n}\n\nfunction cd_fn(...args) {\n    // Needs to change the prompt as well\n}\n\nfunction ls_fn(...args) {\n\n}\n\nfunction cat_fn(...args) {\n\n}\n\nfunction theme_fn(settings) {\n    // TODO this just needs to check the checkbox\n    const toggle_fn = (0,_listener_callbacks__WEBPACK_IMPORTED_MODULE_3__.toggleTheme)(settings);\n    return function(arg) {\n        if (arg === settings.theme) {\n            return;\n        }\n        toggle_fn();\n    }\n}\n\nfunction exit_fn(settings) {\n    const toggle_fn = toggleModeToStandard(settings);\n    const inputContainer = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.getInputContainer)();\n    const terminal = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.getTerminalContainer)();\n\n    return function() {\n        toggle_fn();\n        setTimeout(() => {\n            clear_fn();\n            const outputBlock = createOutputBlock();\n            outputBlock.innerHTML = _constants__WEBPACK_IMPORTED_MODULE_1__.welcomeText;\n            terminal.insertBefore(outputBlock, inputContainer);\n            terminal.scrollTop = terminal.scrollHeight;\n        }, 600);\n    }\n}\n\nfunction build_command_map(settings) {\n    return {\n        clear: clear_fn,\n    \n        // Prints constant text \n        help: help_fn,\n        welcome: welcome_fn,\n        credits: credits_fn,\n        sudo: sudo_fn,\n        contact: contact_fn,\n        \n        // // Functional in site\n        // theme: theme_fn(settings),\n        // switch: standard_site_fn(settings),\n        // exit: exit_fn(settings),\n        // quit: exit_fn(settings),\n    \n        echo: echo_fn,\n    };\n}\n\n\nfunction commandNotFound(commandString) {\n    const outputString = \"command not found: \" + commandString.split(\" \")[0];\n    outputText((0,_ui__WEBPACK_IMPORTED_MODULE_2__.escapeHtml)(outputString));\n}\n\nfunction processCommand(commandMap, commandString) {\n    if (commandString.length === 0) {\n        return;\n    }\n    const [cmd, ...args] = commandString.split(\" \");\n    if (cmd in commandMap) {\n        commandMap[cmd](...args);\n    } else {\n        commandNotFound(commandString);\n    }\n}\n\n// UI function runs on enter\nfunction buildRunCommand(settings) {\n    return function() {\n        settings.commandHistory[0] = settings.inputText;\n        settings.commandHistory.unshift(\"\");\n        settings.commandIdx = 0;\n        let commandString = settings.inputText.trim();\n\n        const commandMap = build_command_map(settings);\n        \n        createTextEleFromInput(settings);\n        processCommand(commandMap, commandString);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/terminal_logic.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"escapeHtml\": () => (/* binding */ escapeHtml),\n/* harmony export */   \"renderInput\": () => (/* binding */ renderInput),\n/* harmony export */   \"setupWelcomeMessage\": () => (/* binding */ setupWelcomeMessage),\n/* harmony export */   \"tradeClasses\": () => (/* binding */ tradeClasses)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ \"./src/selectors.js\");\n\n\n\nfunction escapeHtml(unsafe) {\n    return unsafe\n         .replace(/&/g, \"&amp;\")\n         .replace(/</g, \"&lt;\")\n         .replace(/>/g, \"&gt;\")\n         .replace(/\"/g, \"&quot;\")\n         .replace(/'/g, \"&#039;\");\n}\n\nfunction setupWelcomeMessage() {\n    const ele = (0,_selectors__WEBPACK_IMPORTED_MODULE_1__.getOutputBlocks)()[0];\n    ele.innerHTML = _constants__WEBPACK_IMPORTED_MODULE_0__.welcomeText;\n}\n\nfunction tradeClasses(ele, classToRemove, classToAdd) {\n    ele.classList.remove(classToRemove);\n    ele.classList.add(classToAdd);\n}\n\nfunction renderInput(input1, input2, caret, { inputText, cursorIdx }) {\n    let pt1 = escapeHtml(inputText.slice(0,cursorIdx));\n    let pt2 = escapeHtml(inputText.slice(cursorIdx + 1));\n    let cursorChar = inputText[cursorIdx];\n\n    input1.innerHTML = pt1;\n    input2.innerHTML = pt2;\n    caret.innerHTML = cursorChar ? escapeHtml(cursorChar) : \" \";\n}\n\n\n\n//# sourceURL=webpack:///./src/ui.js?");

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