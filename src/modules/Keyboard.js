import Key from './Key';
import KEYS_DATA from './key-data';
import SPECIAL_KEYS from './special-keys-data';

class Keyboard {
  rows = [];

  keys = [];

  languages = ['en', 'ru'];

  currentLanguage = 'en';

  text = [];

  constructor(container) {
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
      while (keyIndex < KEYS_DATA.length) {
        if (keyIndex > 13 && keyIndex < 28) rowIndex = 1;
        if (keyIndex > 28 && keyIndex < 41) rowIndex = 2;
        if (keyIndex > 41 && keyIndex < 54) rowIndex = 3;
        if (keyIndex > 54) rowIndex = 4;
        const key = new Key(this.rows[rowIndex], KEYS_DATA[keyIndex], this.currentLanguage);
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
    document.addEventListener('keydown', (e) => {
      if (e.altKey || e.code === 'Tab') e.preventDefault();
      if (e.ctrlKey && e.altKey) {
        const langIndex = this.languages.indexOf(this.currentLanguage);
        const nextLangIndex = this.languages[langIndex + 1] === undefined ? 0 : langIndex + 1;
        this.currentLanguage = this.languages[nextLangIndex];
        this.changeLanguage();
      }
      if (e.code === 'CapsLock') this.caps = !this.caps;
      if (e.code === 'CapsLock' && this.caps) {
        this.keyElements.forEach((el) => {
          const charElements = Array.from(el.querySelectorAll('.key__char'));
          charElements.forEach((elem) => {
            elem.classList.add('hidden');
            if (elem.className.includes('caps') && !elem.className.includes('shift')) elem.classList.remove('hidden');
          });
        });
      }
      if (e.code === 'CapsLock' && !this.caps) {
        this.keyElements.forEach((el) => {
          const charElements = Array.from(el.querySelectorAll('.key__char'));
          charElements.forEach((elem) => {
            elem.classList.add('hidden');
            if (elem.className.includes('lowercase')) elem.classList.remove('hidden');
          });
        });
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.keyElements.forEach((el) => {
          const charElements = Array.from(el.querySelectorAll('.key__char'));
          charElements.forEach((elem) => {
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
      const element = this.keyElements.find((el) => el.dataset.code === eCode);
      element?.classList.add('active');
    });

    document.addEventListener('keyup', (e) => {
      const eCode = e.code;

      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        this.keyElements.forEach((el) => {
          const charElements = Array.from(el.querySelectorAll('.key__char'));
          charElements.forEach((elem) => {
            elem.classList.add('hidden');
            if (this.caps) {
              if (elem.className.includes('caps') && !elem.className.includes('shift')) elem.classList.remove('hidden');
            } else if (elem.className.includes('lowercase')) {
              elem.classList.remove('hidden');
            }
          });
        });
      }

      const element = this.keyElements.find((el) => el.dataset.code === eCode);
      element?.classList.remove('active');
      if (this.caps) {
        document.querySelector('[data-code="CapsLock"]').classList.add('active');
      }
    });
  }

  changeLanguage() {
    if (this.currentLanguage === 'en') {
      this.keyElements.forEach((el) => {
        el.querySelector('.key__en').classList.remove('hidden');
        el.querySelector('.key__ru').classList.add('hidden');
      });
    }
    if (this.currentLanguage === 'ru') {
      this.keyElements.forEach((el) => {
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
    this.inputArea.addEventListener('input', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
      this.inputArea.classList.add('hide-carret');
      e.preventDefault();
      if (!SPECIAL_KEYS.nonSymbolKeys.includes(e.code) || e.code === 'Space') {
        const key = this.keyElements.find((el) => el.dataset.code === e.code);
        if (key) {
          const currentLangSymbols = this.currentLanguage === 'en' ? key.querySelector('.key__en') : key.querySelector('.key__ru');
          const char = Array.from(currentLangSymbols.children).find((el) => !el.className.includes('hidden'));
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
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      this.inputArea.classList.remove('hide-carret');
      if (this.inputArea.className.includes('focus')) {
        if (!SPECIAL_KEYS.nonSymbolKeys.includes(e.code) || e.code === 'Space' || e.code === 'Backspace' || e.code === 'Delete' || e.code === 'Enter' || e.code === 'Tab') {
          this.inputArea.selectionStart = this.selectionIndex;
          this.inputArea.selectionEnd = this.selectionIndex;
          this.inputArea.setSelectionRange(this.selectionIndex, this.selectionIndex);
        }
      }
    });
  }

  clickKeyboard() {
    window.addEventListener('mousedown', (event) => {
      if (event.target.closest('textarea')) {
        this.inputArea.focus();
      }
      if (event.target.closest('.key')) {
        const key = event.target.closest('.key');

        const { code } = key.dataset;
        const e = {
          code,
        };
        if (e.code === 'CapsLock') this.caps = !this.caps;
        if (e.code === 'CapsLock' && this.caps) {
          this.keyElements.forEach((el) => {
            const charElements = Array.from(el.querySelectorAll('.key__char'));
            charElements.forEach((elem) => {
              elem.classList.add('hidden');
              if (elem.className.includes('caps') && !elem.className.includes('shift')) elem.classList.remove('hidden');
            });
          });
        }
        if (e.code === 'CapsLock' && !this.caps) {
          this.keyElements.forEach((el) => {
            const charElements = Array.from(el.querySelectorAll('.key__char'));
            charElements.forEach((elem) => {
              elem.classList.add('hidden');
              if (elem.className.includes('lowercase')) elem.classList.remove('hidden');
            });
          });
        }
        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          this.keyElements.forEach((el) => {
            const charElements = Array.from(el.querySelectorAll('.key__char'));
            charElements.forEach((elem) => {
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
        if (!SPECIAL_KEYS.nonSymbolKeys.includes(e.code) || e.code === 'Space') {
          if (key) {
            const currentLangSymbols = this.currentLanguage === 'en' ? key.querySelector('.key__en') : key.querySelector('.key__ru');
            const char = Array.from(currentLangSymbols.children).find((el) => !el.className.includes('hidden'));
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

    window.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.closest('.key')) {
        const key = event.target.closest('.key');

        const { code } = key.dataset;
        const e = {
          code,
        };

        if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
          this.keyElements.forEach((el) => {
            const charElements = Array.from(el.querySelectorAll('.key__char'));
            charElements.forEach((elem) => {
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
          if (!SPECIAL_KEYS.nonSymbolKeys.includes(e.code) || e.code === 'Space' || e.code === 'Backspace' || e.code === 'Delete' || e.code === 'Enter' || e.code === 'Tab') {
            this.inputArea.selectionStart = this.selectionIndex;
            this.inputArea.selectionEnd = this.selectionIndex;
            this.inputArea.setSelectionRange(this.selectionIndex, this.selectionIndex);
          }
        }
      }
    }, true);
  }

  click() {
    window.addEventListener('click', (e) => {
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

export default Keyboard;
