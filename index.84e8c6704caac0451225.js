/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Key.js":
/*!****************************!*\
  !*** ./src/modules/Key.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _special_keys_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./special-keys-data */ "./src/modules/special-keys-data.js");

class Key {
  constructor(container, keyData, lang) {
    this.container = container;
    this.element = document.createElement('div');
    this.element.className = 'key';
    this.element.setAttribute('data-code', `${keyData.code}`);
    if (_special_keys_data__WEBPACK_IMPORTED_MODULE_0__["default"].nonSymbolKeys.includes(keyData.code)) {
      this.element.classList.add(`${keyData.code.toLowerCase()}`);
      this.element.classList.add('key--special');
    }
    if (_special_keys_data__WEBPACK_IMPORTED_MODULE_0__["default"].arrowKeys.includes(keyData.code)) {
      this.element.classList.add('key--special');
    }
    this.keyEnContentWrapper = document.createElement('span');
    this.keyEnContentWrapper.className = 'key__en';
    this.keyRuContentWrapper = document.createElement('span');
    this.keyRuContentWrapper.className = 'key__ru';
    if (lang === 'en') {
      this.keyRuContentWrapper.classList.add('hidden');
    } else if (lang === 'ru') {
      this.keyEnContentWrapper.classList.add('hidden');
    }
    this.keyData = keyData;
    this.addData(keyData);
    this.container.append(this.element);
  }
  addData(keyData) {
    this.keyEnContentWrapper.innerHTML = '';
    this.keyRuContentWrapper.innerHTML = '';
    Object.keys(keyData).forEach(el => {
      if (el === 'en') {
        const objectKeys = Object.keys(keyData.en);
        for (let i = 0; i < objectKeys.length; i += 1) {
          const keyChar = document.createElement('span');
          keyChar.className = `key__char ${objectKeys[i].toLowerCase()}`;
          if (i !== 0) keyChar.classList.add('hidden');
          if (_special_keys_data__WEBPACK_IMPORTED_MODULE_0__["default"].arrowKeys.includes(keyData.code)) {
            keyChar.innerHTML = keyData.en[objectKeys[i]];
          } else {
            keyChar.textContent = keyData.en[objectKeys[i]];
          }
          this.keyEnContentWrapper.append(keyChar);
        }
      }
      if (el === 'ru') {
        const objectKeys = Object.keys(keyData.ru);
        for (let i = 0; i < objectKeys.length; i += 1) {
          const keyChar = document.createElement('span');
          keyChar.className = `key__char ${objectKeys[i].toLowerCase()}`;
          if (i !== 0) keyChar.classList.add('hidden');
          if (_special_keys_data__WEBPACK_IMPORTED_MODULE_0__["default"].arrowKeys.includes(keyData.code)) {
            keyChar.innerHTML = keyData.ru[objectKeys[i]];
          } else {
            keyChar.textContent = keyData.ru[objectKeys[i]];
          }
          this.keyRuContentWrapper.append(keyChar);
        }
      }
    });
    this.element.append(this.keyEnContentWrapper);
    this.element.append(this.keyRuContentWrapper);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Key);

/***/ }),

/***/ "./src/modules/Keyboard.js":
/*!*********************************!*\
  !*** ./src/modules/Keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key */ "./src/modules/Key.js");
/* harmony import */ var _key_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key-data */ "./src/modules/key-data.js");
/* harmony import */ var _special_keys_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-keys-data */ "./src/modules/special-keys-data.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



class Keyboard {
  constructor(container) {
    _defineProperty(this, "rows", []);
    _defineProperty(this, "keys", []);
    _defineProperty(this, "languages", ['en', 'ru']);
    _defineProperty(this, "currentLanguage", 'en');
    _defineProperty(this, "text", []);
    this.container = container;
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'keyboard hidden';
    this.row = document.createElement('div');
    this.row.className = 'keyboard__row';
    for (let i = 0; i < 5; i += 1) {
      const row = this.row.cloneNode();
      this.wrapper.append(row);
      this.rows.push(row);
    }
    this.container.append(this.wrapper);
    this.setCurrentLanguage();
    this.getCurrentLanguage();
    this.addKeys();
    this.click();
    window.addEventListener('load', () => {
      this.wrapper.classList.remove('hidden');
    });
  }
  addKeys() {
    window.addEventListener('load', () => {
      if (localStorage.getItem('lang')) {
        this.currentLanguage = localStorage.getItem('lang');
      }
      let rowIndex = 0;
      let keyIndex = 0;
      while (keyIndex < _key_data__WEBPACK_IMPORTED_MODULE_1__["default"].length) {
        if (keyIndex > 13 && keyIndex < 28) rowIndex = 1;
        if (keyIndex > 28 && keyIndex < 41) rowIndex = 2;
        if (keyIndex > 41 && keyIndex < 54) rowIndex = 3;
        if (keyIndex > 54) rowIndex = 4;
        const key = new _Key__WEBPACK_IMPORTED_MODULE_0__["default"](this.rows[rowIndex], _key_data__WEBPACK_IMPORTED_MODULE_1__["default"][keyIndex], this.currentLanguage);
        this.keys.push(key);
        keyIndex += 1;
      }
      this.pressKeys();
      this.print();
      this.clickKeyboard();
    });
  }
  pressKeys() {
    this.keyElements = Array.from(document.querySelectorAll('.key'));
    this.caps = false;
    document.addEventListener('keydown', e => {
      if (e.altKey || e.code === 'Tab') e.preventDefault();
      if (e.ctrlKey && e.altKey) {
        const langIndex = this.languages.indexOf(this.currentLanguage);
        const nextLangIndex = this.languages[langIndex + 1] === undefined ? 0 : langIndex + 1;
        this.currentLanguage = this.languages[nextLangIndex];
        this.changeLanguage();
      }
      if (e.code === 'CapsLock') this.caps = !this.caps;
      if (e.code === 'CapsLock' && this.caps) {
        this.keyElements.forEach(el => {
          const charElements = Array.from(el.querySelectorAll('.key__char'));
          charElements.forEach(elem => {
            elem.classList.add('hidden');
            if (elem.className.includes('caps') && !elem.className.includes('shift')) elem.classList.remove('hidden');
          });
        });
      }
      if (e.code === 'CapsLock' && !this.caps) {
        this.keyElements.forEach(el => {
          const charElements = Array.from(el.querySelectorAll('.key__char'));
          charElements.forEach(elem => {
            elem.classList.add('hidden');
            if (elem.className.includes('lowercase')) elem.classList.remove('hidden');
          });
        });
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.keyElements.forEach(el => {
          const charElements = Array.from(el.querySelectorAll('.key__char'));
          charElements.forEach(elem => {
            elem.classList.add('hidden');
            if (this.caps) {
              if (elem.className.includes('capsshift')) elem.classList.remove('hidden');
            } else if (elem.className.includes('shift') && !elem.className.includes('caps')) {
              elem.classList.remove('hidden');
            }
          });
        });
      }
      const eCode = e.code;
      const element = this.keyElements.find(el => el.dataset.code === eCode);
      element?.classList.add('active');
    });
    document.addEventListener('keyup', e => {
      const eCode = e.code;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.keyElements.forEach(el => {
          const charElements = Array.from(el.querySelectorAll('.key__char'));
          charElements.forEach(elem => {
            elem.classList.add('hidden');
            if (this.caps) {
              if (elem.className.includes('caps') && !elem.className.includes('shift')) elem.classList.remove('hidden');
            } else if (elem.className.includes('lowercase')) {
              elem.classList.remove('hidden');
            }
          });
        });
      }
      const element = this.keyElements.find(el => el.dataset.code === eCode);
      element?.classList.remove('active');
      if (this.caps) {
        document.querySelector('[data-code="CapsLock"]').classList.add('active');
      }
    });
  }
  changeLanguage() {
    if (this.currentLanguage === 'en') {
      this.keyElements.forEach(el => {
        el.querySelector('.key__en').classList.remove('hidden');
        el.querySelector('.key__ru').classList.add('hidden');
      });
    }
    if (this.currentLanguage === 'ru') {
      this.keyElements.forEach(el => {
        el.querySelector('.key__en').classList.add('hidden');
        el.querySelector('.key__ru').classList.remove('hidden');
      });
    }
  }
  setCurrentLanguage() {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('lang', this.currentLanguage);
    });
  }
  getCurrentLanguage() {
    window.addEventListener('load', () => {
      if (localStorage.getItem('lang')) {
        this.currentLanguage = localStorage.getItem('lang');
      }
    });
  }
  print() {
    this.inputArea = document.querySelector('textarea');
    this.inputArea.addEventListener('input', e => e.preventDefault());
    document.addEventListener('keydown', e => {
      this.inputArea.classList.add('hide-carret');
      e.preventDefault();
      if (!_special_keys_data__WEBPACK_IMPORTED_MODULE_2__["default"].nonSymbolKeys.includes(e.code) || e.code === 'Space') {
        const key = this.keyElements.find(el => el.dataset.code === e.code);
        if (key) {
          const currentLangSymbols = this.currentLanguage === 'en' ? key.querySelector('.key__en') : key.querySelector('.key__ru');
          const char = Array.from(currentLangSymbols.children).find(el => !el.className.includes('hidden'));
          if (this.inputArea.className.includes('focus')) {
            this.text.splice(this.selectionIndex, 0, char.textContent);
            this.selectionIndex += 1;
          } else {
            this.text.push(char.textContent);
          }
        }
      }
      if (e.code === 'Backspace') {
        if (this.inputArea.className.includes('focus')) {
          if (this.selectionIndex - 1 >= 0) {
            this.text.splice(this.selectionIndex - 1, 1);
            this.selectionIndex = this.selectionIndex - 1 < 0 ? 0 : this.selectionIndex - 1;
          }
        } else {
          this.text.pop();
        }
      }
      if (e.code === 'Enter') {
        if (this.inputArea.className.includes('focus')) {
          this.text.splice(this.selectionIndex, 0, '\n');
          this.selectionIndex += 1;
        } else {
          this.text.push('\n');
        }
      }
      if (e.code === 'Tab') {
        if (this.inputArea.className.includes('focus')) {
          this.text.splice(this.selectionIndex, 0, '\t');
          this.selectionIndex += 1;
        } else {
          this.text.push('\t');
        }
      }
      if (e.code === 'Delete') {
        if (this.inputArea.className.includes('focus')) {
          this.text.splice(this.selectionIndex, 1);
          this.selectionIndex -= 0;
        }
      }
      this.inputArea.value = this.text.join('');
    });
    document.addEventListener('keyup', e => {
      e.preventDefault();
      this.inputArea.classList.remove('hide-carret');
      if (this.inputArea.className.includes('focus')) {
        if (!_special_keys_data__WEBPACK_IMPORTED_MODULE_2__["default"].nonSymbolKeys.includes(e.code) || e.code === 'Space' || e.code === 'Backspace' || e.code === 'Delete' || e.code === 'Enter' || e.code === 'Tab') {
          this.inputArea.selectionStart = this.selectionIndex;
          this.inputArea.selectionEnd = this.selectionIndex;
          this.inputArea.setSelectionRange(this.selectionIndex, this.selectionIndex);
        }
      }
    });
  }
  clickKeyboard() {
    window.addEventListener('mousedown', event => {
      if (event.target.closest('textarea')) {
        this.inputArea.focus();
      }
      if (event.target.closest('.key')) {
        const key = event.target.closest('.key');
        const {
          code
        } = key.dataset;
        const e = {
          code
        };
        if (e.code === 'CapsLock') this.caps = !this.caps;
        if (e.code === 'CapsLock' && this.caps) {
          this.keyElements.forEach(el => {
            const charElements = Array.from(el.querySelectorAll('.key__char'));
            charElements.forEach(elem => {
              elem.classList.add('hidden');
              if (elem.className.includes('caps') && !elem.className.includes('shift')) elem.classList.remove('hidden');
            });
          });
        }
        if (e.code === 'CapsLock' && !this.caps) {
          this.keyElements.forEach(el => {
            const charElements = Array.from(el.querySelectorAll('.key__char'));
            charElements.forEach(elem => {
              elem.classList.add('hidden');
              if (elem.className.includes('lowercase')) elem.classList.remove('hidden');
            });
          });
        }
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          this.keyElements.forEach(el => {
            const charElements = Array.from(el.querySelectorAll('.key__char'));
            charElements.forEach(elem => {
              elem.classList.add('hidden');
              if (this.caps) {
                if (elem.className.includes('capsshift')) elem.classList.remove('hidden');
              } else if (elem.className.includes('shift') && !elem.className.includes('caps')) {
                elem.classList.remove('hidden');
              }
            });
          });
        }
        key?.classList.add('active');
        this.inputArea.classList.add('hide-carret');
        if (!_special_keys_data__WEBPACK_IMPORTED_MODULE_2__["default"].nonSymbolKeys.includes(e.code) || e.code === 'Space') {
          if (key) {
            const currentLangSymbols = this.currentLanguage === 'en' ? key.querySelector('.key__en') : key.querySelector('.key__ru');
            const char = Array.from(currentLangSymbols.children).find(el => !el.className.includes('hidden'));
            if (this.inputArea.className.includes('focus')) {
              this.text.splice(this.selectionIndex, 0, char.textContent);
              this.selectionIndex += 1;
            } else {
              this.text.push(char.textContent);
            }
          }
        }
        if (e.code === 'Backspace') {
          if (this.inputArea.className.includes('focus')) {
            if (this.selectionIndex - 1 >= 0) {
              this.text.splice(this.selectionIndex - 1, 1);
              this.selectionIndex = this.selectionIndex - 1 < 0 ? 0 : this.selectionIndex - 1;
            }
          } else {
            this.text.pop();
          }
        }
        if (e.code === 'Enter') {
          if (this.inputArea.className.includes('focus')) {
            this.text.splice(this.selectionIndex, 0, '\n');
            this.selectionIndex += 1;
          } else {
            this.text.push('\n');
          }
        }
        if (e.code === 'Tab') {
          if (this.inputArea.className.includes('focus')) {
            this.text.splice(this.selectionIndex, 0, '\t');
            this.selectionIndex += 1;
          } else {
            this.text.push('\t');
          }
        }
        if (e.code === 'Delete') {
          if (this.inputArea.className.includes('focus')) {
            this.text.splice(this.selectionIndex, 1);
            this.selectionIndex -= 0;
          }
        }
        this.inputArea.value = this.text.join('');
      }
    }, true);
    window.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.closest('.key')) {
        const key = event.target.closest('.key');
        const {
          code
        } = key.dataset;
        const e = {
          code
        };
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          this.keyElements.forEach(el => {
            const charElements = Array.from(el.querySelectorAll('.key__char'));
            charElements.forEach(elem => {
              elem.classList.add('hidden');
              if (this.caps) {
                if (elem.className.includes('caps') && !elem.className.includes('shift')) elem.classList.remove('hidden');
              } else if (elem.className.includes('lowercase')) {
                elem.classList.remove('hidden');
              }
            });
          });
        }
        key?.classList.remove('active');
        if (this.caps) {
          document.querySelector('[data-code="CapsLock"]').classList.add('active');
        }
        this.inputArea.classList.remove('hide-carret');
        if (this.inputArea.className.includes('focus')) {
          if (!_special_keys_data__WEBPACK_IMPORTED_MODULE_2__["default"].nonSymbolKeys.includes(e.code) || e.code === 'Space' || e.code === 'Backspace' || e.code === 'Delete' || e.code === 'Enter' || e.code === 'Tab') {
            this.inputArea.selectionStart = this.selectionIndex;
            this.inputArea.selectionEnd = this.selectionIndex;
            this.inputArea.setSelectionRange(this.selectionIndex, this.selectionIndex);
          }
        }
      }
    }, true);
  }
  click() {
    window.addEventListener('click', e => {
      e.preventDefault();
      this.removeFocus();
      if (e.target.closest('textarea')) {
        this.selectionIndex = this.inputArea.selectionStart;
        this.inputArea.classList.add('focus');
      }
      if (!e.target.closest('textarea') && !e.target.closest('.keyboard')) {
        this.inputArea.classList.remove('focus');
        this.inputArea.blur();
      }
    }, true);
  }
  removeFocus() {
    document.querySelector('textarea').addEventListener('blur', () => {
      if (this.inputArea.className.includes('focus')) {
        this.inputArea.focus();
      } else {
        this.inputArea.blur();
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);

/***/ }),

/***/ "./src/modules/Layout.js":
/*!*******************************!*\
  !*** ./src/modules/Layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title */ "./src/modules/Title.js");
/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screen */ "./src/modules/Screen.js");
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Keyboard */ "./src/modules/Keyboard.js");



class Layout {
  constructor() {
    this.bodyElement = document.querySelector('body');
    this.main = document.createElement('main');
    this.container = document.createElement('div');
    this.bodyElement.className = 'body';
    this.container.className = 'container';
    this.bodyElement.append(this.main);
    this.main.append(this.container);
  }
  createElements() {
    this.additionInfo = document.createElement('div');
    this.additionInfo.className = 'addition-info hidden';
    this.additionInfoSystem = document.createElement('p');
    this.additionInfoSwitchLang = document.createElement('p');
    this.additionInfoSystem.className = 'addition-info__content';
    this.additionInfoSwitchLang.className = 'addition-info__content';
    this.additionInfoSystem.textContent = 'Клавиатура создана в операционной системе Windows';
    this.additionInfoSwitchLang.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
    this.additionInfo.append(this.additionInfoSystem);
    this.additionInfo.append(this.additionInfoSwitchLang);
    this.title = new _Title__WEBPACK_IMPORTED_MODULE_0__["default"](this.container, 'h1', 'RSS Виртуальная клавиатура');
    this.screen = new _Screen__WEBPACK_IMPORTED_MODULE_1__["default"](this.container);
    this.keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_2__["default"](this.container);
    this.container.append(this.additionInfo);
    window.addEventListener('load', () => {
      this.additionInfo.classList.remove('hidden');
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/modules/Screen.js":
/*!*******************************!*\
  !*** ./src/modules/Screen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Screen {
  constructor(container) {
    this.container = container;
    this.wrapper = document.createElement('div');
    this.inputArea = document.createElement('textarea');
    this.wrapper.className = 'text-field';
    this.inputArea.className = 'text-field__content';
    this.inputArea.rows = '10';
    this.wrapper.append(this.inputArea);
    this.container.append(this.wrapper);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Screen);

/***/ }),

/***/ "./src/modules/Title.js":
/*!******************************!*\
  !*** ./src/modules/Title.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Title {
  constructor(container, tag, content) {
    this.container = container;
    this.content = content;
    this.element = document.createElement(`${tag}`);
    this.element.className = 'title';
    this.element.textContent = this.content;
    this.container.append(this.element);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./src/modules/key-data.js":
/*!*********************************!*\
  !*** ./src/modules/key-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const KEYS_DATA = [{
  code: 'Backquote',
  en: {
    lowerCase: '`',
    caps: '`',
    shift: '~',
    capsShift: '~'
  },
  ru: {
    lowerCase: 'ё',
    caps: 'Ё',
    shift: 'Ё',
    capsShift: 'ё'
  }
}, {
  code: 'Digit1',
  en: {
    lowerCase: '1',
    caps: '1',
    shift: '!',
    capsShift: '!'
  },
  ru: {
    lowerCase: '1',
    caps: '1',
    shift: '!',
    capsShift: '!'
  }
}, {
  code: 'Digit2',
  en: {
    lowerCase: '2',
    caps: '2',
    shift: '@',
    capsShift: '@'
  },
  ru: {
    lowerCase: '2',
    caps: '2',
    shift: '"',
    capsShift: '"'
  }
}, {
  code: 'Digit3',
  en: {
    lowerCase: '3',
    caps: '3',
    shift: '#',
    capsShift: '#'
  },
  ru: {
    lowerCase: '3',
    caps: '3',
    shift: '№',
    capsShift: '№'
  }
}, {
  code: 'Digit4',
  en: {
    lowerCase: '4',
    caps: '4',
    shift: '$',
    capsShift: '$'
  },
  ru: {
    lowerCase: '4',
    caps: '4',
    shift: ';',
    capsShift: ';'
  }
}, {
  code: 'Digit5',
  en: {
    lowerCase: '5',
    caps: '5',
    shift: '%',
    capsShift: '%'
  },
  ru: {
    lowerCase: '5',
    caps: '5',
    shift: '%',
    capsShift: '%'
  }
}, {
  code: 'Digit6',
  en: {
    lowerCase: '6',
    caps: '6',
    shift: '^',
    capsShift: '^'
  },
  ru: {
    lowerCase: '6',
    caps: '6',
    shift: ':',
    capsShift: ':'
  }
}, {
  code: 'Digit7',
  en: {
    lowerCase: '7',
    caps: '7',
    shift: '&',
    capsShift: '&'
  },
  ru: {
    lowerCase: '7',
    caps: '7',
    shift: '?',
    capsShift: '?'
  }
}, {
  code: 'Digit8',
  en: {
    lowerCase: '8',
    caps: '8',
    shift: '*',
    capsShift: '*'
  },
  ru: {
    lowerCase: '8',
    caps: '8',
    shift: '*',
    capsShift: '*'
  }
}, {
  code: 'Digit9',
  en: {
    lowerCase: '9',
    caps: '9',
    shift: '(',
    capsShift: '('
  },
  ru: {
    lowerCase: '9',
    caps: '9',
    shift: '(',
    capsShift: '('
  }
}, {
  code: 'Digit0',
  en: {
    lowerCase: '0',
    caps: '0',
    shift: ')',
    capsShift: ')'
  },
  ru: {
    lowerCase: '0',
    caps: '0',
    shift: ')',
    capsShift: ')'
  }
}, {
  code: 'Minus',
  en: {
    lowerCase: '-',
    caps: '-',
    shift: '_',
    capsShift: '_'
  },
  ru: {
    lowerCase: '-',
    caps: '-',
    shift: '_',
    capsShift: '_'
  }
}, {
  code: 'Equal',
  en: {
    lowerCase: '=',
    caps: '=',
    shift: '+',
    capsShift: '+'
  },
  ru: {
    lowerCase: '=',
    caps: '=',
    shift: '+',
    capsShift: '+'
  }
}, {
  code: 'Backspace',
  en: {
    lowerCase: 'Backspace',
    caps: 'Backspace',
    shift: 'Backspace',
    capsShift: 'Backspace'
  },
  ru: {
    lowerCase: 'Backspace',
    caps: 'Backspace',
    shift: 'Backspace',
    capsShift: 'Backspace'
  }
}, {
  code: 'Tab',
  en: {
    lowerCase: 'Tab',
    caps: 'Tab',
    shift: 'Tab',
    capsShift: 'Tab'
  },
  ru: {
    lowerCase: 'Tab',
    caps: 'Tab',
    shift: 'Tab',
    capsShift: 'Tab'
  }
}, {
  code: 'KeyQ',
  en: {
    lowerCase: 'q',
    caps: 'Q',
    shift: 'Q',
    capsShift: 'q'
  },
  ru: {
    lowerCase: 'й',
    caps: 'Й',
    shift: 'Й',
    capsShift: 'й'
  }
}, {
  code: 'KeyW',
  en: {
    lowerCase: 'w',
    caps: 'W',
    shift: 'W',
    capsShift: 'w'
  },
  ru: {
    lowerCase: 'ц',
    caps: 'Ц',
    shift: 'Ц',
    capsShift: 'ц'
  }
}, {
  code: 'KeyE',
  en: {
    lowerCase: 'e',
    caps: 'E',
    shift: 'E',
    capsShift: 'e'
  },
  ru: {
    lowerCase: 'у',
    caps: 'У',
    shift: 'У',
    capsShift: 'У'
  }
}, {
  code: 'KeyR',
  en: {
    lowerCase: 'r',
    caps: 'R',
    shift: 'R',
    capsShift: 'r'
  },
  ru: {
    lowerCase: 'к',
    caps: 'К',
    shift: 'К',
    capsShift: 'к'
  }
}, {
  code: 'KeyT',
  en: {
    lowerCase: 't',
    caps: 'T',
    shift: 'T',
    capsShift: 't'
  },
  ru: {
    lowerCase: 'е',
    caps: 'Е',
    shift: 'Е',
    capsShift: 'е'
  }
}, {
  code: 'KeyY',
  en: {
    lowerCase: 'y',
    caps: 'Y',
    shift: 'Y',
    capsShift: 'y'
  },
  ru: {
    lowerCase: 'н',
    caps: 'Н',
    shift: 'Н',
    capsShift: 'н'
  }
}, {
  code: 'KeyU',
  en: {
    lowerCase: 'u',
    caps: 'U',
    shift: 'U',
    capsShift: 'u'
  },
  ru: {
    lowerCase: 'г',
    caps: 'Г',
    shift: 'Г',
    capsShift: 'г'
  }
}, {
  code: 'KeyI',
  en: {
    lowerCase: 'i',
    caps: 'I',
    shift: 'I',
    capsShift: 'i'
  },
  ru: {
    lowerCase: 'ш',
    caps: 'Ш',
    shift: 'Ш',
    capsShift: 'ш'
  }
}, {
  code: 'KeyO',
  en: {
    lowerCase: 'o',
    caps: 'O',
    shift: 'O',
    capsShift: 'o'
  },
  ru: {
    lowerCase: 'щ',
    caps: 'Щ',
    shift: 'Щ',
    capsShift: 'щ'
  }
}, {
  code: 'KeyP',
  en: {
    lowerCase: 'p',
    caps: 'P',
    shift: 'P',
    capsShift: 'p'
  },
  ru: {
    lowerCase: 'з',
    caps: 'З',
    shift: 'З',
    capsShift: 'з'
  }
}, {
  code: 'BracketLeft',
  en: {
    lowerCase: '[',
    caps: '[',
    shift: '{',
    capsShift: '{'
  },
  ru: {
    lowerCase: 'х',
    caps: 'Х',
    shift: 'Х',
    capsShift: 'х'
  }
}, {
  code: 'BracketRight',
  en: {
    lowerCase: ']',
    caps: ']',
    shift: '}',
    capsShift: '}'
  },
  ru: {
    lowerCase: 'ъ',
    caps: 'Ъ',
    shift: 'Ъ',
    capsShift: 'ъ'
  }
}, {
  code: 'Backslash',
  en: {
    lowerCase: '\\',
    caps: '\\',
    shift: '|',
    capsShift: '|'
  },
  ru: {
    lowerCase: '\\',
    caps: '\\',
    shift: '/',
    capsShift: '/'
  }
}, {
  code: 'Delete',
  en: {
    lowerCase: 'Del',
    caps: 'Del',
    shift: 'Del',
    capsShift: 'Del'
  },
  ru: {
    lowerCase: 'Del',
    caps: 'Del',
    shift: 'Del',
    capsShift: 'Del'
  }
}, {
  code: 'CapsLock',
  en: {
    lowerCase: 'CapsLock',
    caps: 'CapsLock',
    shift: 'CapsLock',
    capsShift: 'CapsLock'
  },
  ru: {
    lowerCase: 'CapsLock',
    caps: 'CapsLock',
    shift: 'CapsLock',
    capsShift: 'CapsLock'
  }
}, {
  code: 'KeyA',
  en: {
    lowerCase: 'a',
    caps: 'A',
    shift: 'A',
    capsShift: 'a'
  },
  ru: {
    lowerCase: 'ф',
    caps: 'Ф',
    shift: 'Ф',
    capsShift: 'ф'
  }
}, {
  code: 'KeyS',
  en: {
    lowerCase: 's',
    caps: 'S',
    shift: 'S',
    capsShift: 's'
  },
  ru: {
    lowerCase: 'ы',
    caps: 'Ы',
    shift: 'Ы',
    capsShift: 'ы'
  }
}, {
  code: 'KeyD',
  en: {
    lowerCase: 'd',
    caps: 'D',
    shift: 'D',
    capsShift: 'd'
  },
  ru: {
    lowerCase: 'в',
    caps: 'В',
    shift: 'В',
    capsShift: 'в'
  }
}, {
  code: 'KeyF',
  en: {
    lowerCase: 'f',
    caps: 'F',
    shift: 'F',
    capsShift: 'f'
  },
  ru: {
    lowerCase: 'а',
    caps: 'А',
    shift: 'А',
    capsShift: 'а'
  }
}, {
  code: 'KeyG',
  en: {
    lowerCase: 'g',
    caps: 'G',
    shift: 'G',
    capsShift: 'g'
  },
  ru: {
    lowerCase: 'п',
    caps: 'П',
    shift: 'П',
    capsShift: 'п'
  }
}, {
  code: 'KeyH',
  en: {
    lowerCase: 'h',
    caps: 'H',
    shift: 'H',
    capsShift: 'h'
  },
  ru: {
    lowerCase: 'р',
    caps: 'Р',
    shift: 'Р',
    capsShift: 'р'
  }
}, {
  code: 'KeyJ',
  en: {
    lowerCase: 'j',
    caps: 'J',
    shift: 'J',
    capsShift: 'j'
  },
  ru: {
    lowerCase: 'о',
    caps: 'О',
    shift: 'О',
    capsShift: 'о'
  }
}, {
  code: 'KeyK',
  en: {
    lowerCase: 'k',
    caps: 'K',
    shift: 'K',
    capsShift: 'k'
  },
  ru: {
    lowerCase: 'л',
    caps: 'Л',
    shift: 'Л',
    capsShift: 'л'
  }
}, {
  code: 'KeyL',
  en: {
    lowerCase: 'l',
    caps: 'L',
    shift: 'L',
    capsShift: 'l'
  },
  ru: {
    lowerCase: 'д',
    caps: 'Д',
    shift: 'Д',
    capsShift: 'д'
  }
}, {
  code: 'Semicolon',
  en: {
    lowerCase: ';',
    caps: ';',
    shift: ':',
    capsShift: ':'
  },
  ru: {
    lowerCase: 'ж',
    caps: 'Ж',
    shift: 'Ж',
    capsShift: 'ж'
  }
}, {
  code: 'Quote',
  en: {
    lowerCase: '\'',
    caps: '\'',
    shift: '"',
    capsShift: '"'
  },
  ru: {
    lowerCase: 'э',
    caps: 'Э',
    shift: 'Э',
    capsShift: 'э'
  }
}, {
  code: 'Enter',
  en: {
    lowerCase: 'Enter',
    caps: 'Enter',
    shift: 'Enter',
    capsShift: 'Enter'
  },
  ru: {
    lowerCase: 'Enter',
    caps: 'Enter',
    shift: 'Enter',
    capsShift: 'Enter'
  }
}, {
  code: 'ShiftLeft',
  en: {
    lowerCase: 'Shift',
    caps: 'Shift',
    shift: 'Shift',
    capsShift: 'Shift'
  },
  ru: {
    lowerCase: 'Shift',
    caps: 'Shift',
    shift: 'Shift',
    capsShift: 'Shift'
  }
}, {
  code: 'KeyZ',
  en: {
    lowerCase: 'z',
    caps: 'Z',
    shift: 'Z',
    capsShift: 'z'
  },
  ru: {
    lowerCase: 'я',
    caps: 'Я',
    shift: 'Я',
    capsShift: 'я'
  }
}, {
  code: 'KeyX',
  en: {
    lowerCase: 'x',
    caps: 'X',
    shift: 'X',
    capsShift: 'x'
  },
  ru: {
    lowerCase: 'ч',
    caps: 'Ч',
    shift: 'Ч',
    capsShift: 'ч'
  }
}, {
  code: 'KeyC',
  en: {
    lowerCase: 'c',
    caps: 'C',
    shift: 'C',
    capsShift: 'c'
  },
  ru: {
    lowerCase: 'с',
    caps: 'С',
    shift: 'С',
    capsShift: 'с'
  }
}, {
  code: 'KeyV',
  en: {
    lowerCase: 'v',
    caps: 'V',
    shift: 'V',
    capsShift: 'v'
  },
  ru: {
    lowerCase: 'м',
    caps: 'М',
    shift: 'М',
    capsShift: 'м'
  }
}, {
  code: 'KeyB',
  en: {
    lowerCase: 'b',
    caps: 'B',
    shift: 'B',
    capsShift: 'b'
  },
  ru: {
    lowerCase: 'и',
    caps: 'И',
    shift: 'И',
    capsShift: 'и'
  }
}, {
  code: 'KeyN',
  en: {
    lowerCase: 'n',
    caps: 'N',
    shift: 'N',
    capsShift: 'n'
  },
  ru: {
    lowerCase: 'т',
    caps: 'Т',
    shift: 'Т',
    capsShift: 'т'
  }
}, {
  code: 'KeyM',
  en: {
    lowerCase: 'm',
    caps: 'M',
    shift: 'M',
    capsShift: 'm'
  },
  ru: {
    lowerCase: 'ь',
    caps: 'Ь',
    shift: 'Ь',
    capsShift: 'ь'
  }
}, {
  code: 'Comma',
  en: {
    lowerCase: ',',
    caps: ',',
    shift: '<',
    capsShift: '<'
  },
  ru: {
    lowerCase: 'б',
    caps: 'Б',
    shift: 'Б',
    capsShift: 'б'
  }
}, {
  code: 'Period',
  en: {
    lowerCase: '.',
    caps: '.',
    shift: '>',
    capsShift: '>'
  },
  ru: {
    lowerCase: 'ю',
    caps: 'Ю',
    shift: 'Ю',
    capsShift: 'ю'
  }
}, {
  code: 'Slash',
  en: {
    lowerCase: '/',
    caps: '/',
    shift: '?',
    capsShift: '?'
  },
  ru: {
    lowerCase: '.',
    caps: '.',
    shift: ',',
    capsShift: ','
  }
}, {
  code: 'ArrowUp',
  en: {
    lowerCase: '&#x25B2;',
    caps: '&#x25B2;',
    shift: '&#x25B2;',
    capsShift: '&#x25B2;'
  },
  ru: {
    lowerCase: '&#x25B2;',
    caps: '&#x25B2;',
    shift: '&#x25B2;',
    capsShift: '&#x25B2;'
  }
}, {
  code: 'ShiftRight',
  en: {
    lowerCase: 'Shift',
    caps: 'Shift',
    shift: 'Shift',
    capsShift: 'Shift'
  },
  ru: {
    lowerCase: 'Shift',
    caps: 'Shift',
    shift: 'Shift',
    capsShift: 'Shift'
  }
}, {
  code: 'ControlLeft',
  en: {
    lowerCase: 'Ctrl',
    caps: 'Ctrl',
    shift: 'Ctrl',
    capsShift: 'Ctrl'
  },
  ru: {
    lowerCase: 'Ctrl',
    caps: 'Ctrl',
    shift: 'Ctrl',
    capsShift: 'Ctrl'
  }
}, {
  code: 'MetaLeft',
  en: {
    lowerCase: 'Win',
    caps: 'Win',
    shift: 'Win',
    capsShift: 'Win'
  },
  ru: {
    lowerCase: 'Win',
    caps: 'Win',
    shift: 'Win',
    capsShift: 'Win'
  }
}, {
  code: 'AltLeft',
  en: {
    lowerCase: 'Alt',
    caps: 'Alt',
    shift: 'Alt',
    capsShift: 'Alt'
  },
  ru: {
    lowerCase: 'Alt',
    caps: 'Alt',
    shift: 'Alt',
    capsShift: 'Alt'
  }
}, {
  code: 'Space',
  en: {
    lowerCase: ' ',
    caps: ' ',
    shift: ' ',
    capsShift: ' '
  },
  ru: {
    lowerCase: ' ',
    caps: ' ',
    shift: ' ',
    capsShift: ' '
  }
}, {
  code: 'AltRight',
  en: {
    lowerCase: 'Alt',
    caps: 'Alt',
    shift: 'Alt',
    capsShift: 'Alt'
  },
  ru: {
    lowerCase: 'Alt',
    caps: 'Alt',
    shift: 'Alt',
    capsShift: 'Alt'
  }
}, {
  code: 'ArrowLeft',
  en: {
    lowerCase: '&#x25C4;',
    caps: '&#x25C4;',
    shift: '&#x25C4;',
    capsShift: '&#x25C4;'
  },
  ru: {
    lowerCase: '&#x25C4;',
    caps: '&#x25C4;',
    shift: '&#x25C4;',
    capsShift: '&#x25C4;'
  }
}, {
  code: 'ArrowDown',
  en: {
    lowerCase: '&#x25BC;',
    caps: '&#x25BC;',
    shift: '&#x25BC;',
    capsShift: '&#x25BC;'
  },
  ru: {
    lowerCase: '&#x25BC;',
    caps: '&#x25BC;',
    shift: '&#x25BC;',
    capsShift: '&#x25BC;'
  }
}, {
  code: 'ArrowRight',
  en: {
    lowerCase: '&#x25BA;',
    caps: '&#x25BA;',
    shift: '&#x25BA;',
    capsShift: '&#x25BA;'
  },
  ru: {
    lowerCase: '&#x25BA;',
    caps: '&#x25BA;',
    shift: '&#x25BA;',
    capsShift: '&#x25BA;'
  }
}, {
  code: 'ControlRight',
  en: {
    lowerCase: 'Ctrl',
    caps: 'Ctrl',
    shift: 'Ctrl',
    capsShift: 'Ctrl'
  },
  ru: {
    lowerCase: 'Ctrl',
    caps: 'Ctrl',
    shift: 'Ctrl',
    capsShift: 'Ctrl'
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KEYS_DATA);

/***/ }),

/***/ "./src/modules/special-keys-data.js":
/*!******************************************!*\
  !*** ./src/modules/special-keys-data.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SPECIAL_KEYS = {
  arrowKeys: ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
  nonSymbolKeys: ['Tab', 'Backspace', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'Space']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SPECIAL_KEYS);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n}\n*,*:before,*:after{\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n}\n:focus,:active{outline: none;}\na:focus,a:active{outline: none;}\n\nnav,footer,header,aside{display: block;}\n\nhtml,body{\n\theight: 100%;\n\twidth: 100%;\n\tfont-size: 100%;\n\tline-height: 1;\n\tfont-size: 14px;\n\t-ms-text-size-adjust: 100%;\n\t-moz-text-size-adjust: 100%;\n\t-webkit-text-size-adjust: 100%;\n}\ninput,button,textarea{font-family:inherit;}\n\ninput::-ms-clear{display: none;}\nbutton{cursor: pointer;}\nbutton::-moz-focus-inner {padding:0;border:0;}\na, a:visited{text-decoration: none;}\na:hover{text-decoration: none;}\nul li{list-style: none;}\nimg{vertical-align: top;}\n\nh1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}\n\n.body{\n  background-color: rgba(176, 176, 176, 0.1);\n  font-family: \"Trebuchet MS\", \"Helvetica\", sans-serif;\n  font-size: 16px;\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 737px;\n  padding: 10px;\n}\n\n.title {\n  margin: 20px 0 40px;\n  text-align: center;\n  font-size: 40px;\n  font-weight: bold;\n  color: rgb(255, 111, 0);\n}\n\n.text-field {\n  margin-bottom: 20px;\n}\n\n.text-field__content {\n  width: 100%;\n  border: 1px solid black;\n  border-radius: 5px;\n  font-size: 1.4rem;\n  padding: 5px;\n}\n\n.text-field__content:focus {\n  border: 2px solid black;\n  margin: -1px;\n}\n\n.keyboard {\n  border: 3px solid black;\n  padding: 5px 3px;\n  border-radius: 5px;\n  background-color: rgb(168, 168, 168);\n}\n\n.keyboard__row {\n  display: flex;\n  margin-bottom: 8px;\n}\n\n.key{\n  flex: 0 0 auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  border-radius: 3px;\n  margin: 0px 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: rgb(99, 99, 99);\n  cursor: pointer;\n  user-select: none;\n  box-shadow: inset;\n  box-shadow: 1px 3px 1px 0px rgba(255, 255, 255, 1);\n  transform: translate(0);\n  transition: 0.15s;\n}\n\n.active {\n  transform: translate(1px, 3px);\n  box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);\n}\n\n.key--special {\n  background-color: #414141;\n  font-weight: 700;\n}\n\n.backspace,\n.capslock,\n.shiftleft {\n  width: 100px;\n}\n\n.tab {\n  width: 50px;\n}\n\n.delete {\n  width: 44px;\n}\n\n.enter,\n.shiftright {\n  width: 86px;\n}\n\n.space {\n  width: 330px;\n}\n\n.hidden {\n  display: none;\n}\n\n.addition-info {\n  margin: 30px 0;\n}\n\n.addition-info__content{\n  text-align: center;\n  margin: 15px;\n  font-size: 1.3rem;\n}\n\n.hide-carret{\n  caret-color: transparent;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,SAAS;CACT,SAAS;AACV;AACA;CACC,2BAA2B;CAC3B,8BAA8B;CAC9B,sBAAsB;AACvB;AACA,eAAe,aAAa,CAAC;AAC7B,iBAAiB,aAAa,CAAC;;AAE/B,wBAAwB,cAAc,CAAC;;AAEvC;CACC,YAAY;CACZ,WAAW;CACX,eAAe;CACf,cAAc;CACd,eAAe;CACf,0BAA0B;CAC1B,2BAA2B;CAC3B,8BAA8B;AAC/B;AACA,sBAAsB,mBAAmB,CAAC;;AAE1C,iBAAiB,aAAa,CAAC;AAC/B,OAAO,eAAe,CAAC;AACvB,0BAA0B,SAAS,CAAC,QAAQ,CAAC;AAC7C,aAAa,qBAAqB,CAAC;AACnC,QAAQ,qBAAqB,CAAC;AAC9B,MAAM,gBAAgB,CAAC;AACvB,IAAI,mBAAmB,CAAC;;AAExB,kBAAkB,iBAAiB,CAAC,gBAAgB,CAAC;;AAErD;EACE,0CAA0C;EAC1C,oDAAoD;EACpD,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,iCAAiC;EACjC,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,kDAAkD;EAClD,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,kDAAkD;AACpD;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;;;EAGE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;AAC1B","sourcesContent":["*{\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n}\n*,*:before,*:after{\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n}\n:focus,:active{outline: none;}\na:focus,a:active{outline: none;}\n\nnav,footer,header,aside{display: block;}\n\nhtml,body{\n\theight: 100%;\n\twidth: 100%;\n\tfont-size: 100%;\n\tline-height: 1;\n\tfont-size: 14px;\n\t-ms-text-size-adjust: 100%;\n\t-moz-text-size-adjust: 100%;\n\t-webkit-text-size-adjust: 100%;\n}\ninput,button,textarea{font-family:inherit;}\n\ninput::-ms-clear{display: none;}\nbutton{cursor: pointer;}\nbutton::-moz-focus-inner {padding:0;border:0;}\na, a:visited{text-decoration: none;}\na:hover{text-decoration: none;}\nul li{list-style: none;}\nimg{vertical-align: top;}\n\nh1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}\n\n.body{\n  background-color: rgba(176, 176, 176, 0.1);\n  font-family: \"Trebuchet MS\", \"Helvetica\", sans-serif;\n  font-size: 16px;\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 737px;\n  padding: 10px;\n}\n\n.title {\n  margin: 20px 0 40px;\n  text-align: center;\n  font-size: 40px;\n  font-weight: bold;\n  color: rgb(255, 111, 0);\n}\n\n.text-field {\n  margin-bottom: 20px;\n}\n\n.text-field__content {\n  width: 100%;\n  border: 1px solid black;\n  border-radius: 5px;\n  font-size: 1.4rem;\n  padding: 5px;\n}\n\n.text-field__content:focus {\n  border: 2px solid black;\n  margin: -1px;\n}\n\n.keyboard {\n  border: 3px solid black;\n  padding: 5px 3px;\n  border-radius: 5px;\n  background-color: rgb(168, 168, 168);\n}\n\n.keyboard__row {\n  display: flex;\n  margin-bottom: 8px;\n}\n\n.key{\n  flex: 0 0 auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  border-radius: 3px;\n  margin: 0px 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: rgb(99, 99, 99);\n  cursor: pointer;\n  user-select: none;\n  box-shadow: inset;\n  box-shadow: 1px 3px 1px 0px rgba(255, 255, 255, 1);\n  transform: translate(0);\n  transition: 0.15s;\n}\n\n.active {\n  transform: translate(1px, 3px);\n  box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 1);\n}\n\n.key--special {\n  background-color: #414141;\n  font-weight: 700;\n}\n\n.backspace,\n.capslock,\n.shiftleft {\n  width: 100px;\n}\n\n.tab {\n  width: 50px;\n}\n\n.delete {\n  width: 44px;\n}\n\n.enter,\n.shiftright {\n  width: 86px;\n}\n\n.space {\n  width: 330px;\n}\n\n.hidden {\n  display: none;\n}\n\n.addition-info {\n  margin: 30px 0;\n}\n\n.addition-info__content{\n  text-align: center;\n  margin: 15px;\n  font-size: 1.3rem;\n}\n\n.hide-carret{\n  caret-color: transparent;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Virtual Keyboard</title>\n</head>\n<body>\n  \n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Layout */ "./src/modules/Layout.js");



const layout = new _modules_Layout__WEBPACK_IMPORTED_MODULE_2__["default"]();
layout.createElements();
})();

/******/ })()
;
//# sourceMappingURL=index.84e8c6704caac0451225.js.map