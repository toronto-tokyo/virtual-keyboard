import Key from './Key';
import KEYS_DATA from './key-data';

class Keyboard {
  rows = [];

  keys = [];

  constructor(container) {
    this.container = container;
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'keyboard';
    this.row = document.createElement('div');
    this.row.className = 'keyboard__row';
    for (let i = 0; i < 5; i += 1) {
      const row = this.row.cloneNode();
      this.wrapper.append(row);
      this.rows.push(row);
    }
    this.container.append(this.wrapper);
  }

  addKeys() {
    let rowIndex = 0;
    let keyIndex = 0;
    while (keyIndex < KEYS_DATA.length) {
      if (keyIndex > 13 && keyIndex < 28) rowIndex = 1;
      if (keyIndex > 28 && keyIndex < 41) rowIndex = 2;
      if (keyIndex > 41 && keyIndex < 54) rowIndex = 3;
      if (keyIndex > 54) rowIndex = 4;
      const key = new Key(this.rows[rowIndex], KEYS_DATA[keyIndex]);
      this.keys.push(key);
      keyIndex += 1;
    }
  }

  pressKeys() {
    this.keyElements = Array.from(document.querySelectorAll('.key'));
    this.caps = false;
    document.addEventListener('keydown', (e) => {
      if (e.altKey || e.code === 'Tab') e.preventDefault();
      if (e.code === 'CapsLock') this.caps = !this.caps;
      if (e.code === 'CapsLock' && this.caps) {
        this.keyElements.forEach((el) => {
          const charElements = Array.from(el.querySelectorAll('.key__char'));
          charElements.forEach((elem) => {
            elem.classList.add('hidden');
            if (elem.className.includes('caps') && !elem.className.includes('shift')) elem.classList.remove('hidden');
          });
        });
      } else {
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
}

export default Keyboard;
