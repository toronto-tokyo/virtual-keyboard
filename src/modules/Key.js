import SPECIAL_KEYS from './special-keys-data';

class Key {
  constructor(container, keyData) {
    this.container = container;
    this.element = document.createElement('div');
    this.element.className = 'key';
    if (SPECIAL_KEYS.nonSymbolKeys.includes(keyData.code)) {
      this.element.classList.add(`${keyData.code.toLowerCase()}`);
      this.element.classList.add('key--special');
    }
    if (SPECIAL_KEYS.arrowKeys.includes(keyData.code)) {
      this.element.classList.add('key--special');
    }
    this.keyEnContentWrapper = document.createElement('span');
    this.keyEnContentWrapper.className = 'key__en';
    this.keyRuContentWrapper = document.createElement('span');
    this.keyRuContentWrapper.className = 'key__ru';
    this.keyRuContentWrapper.classList.add('hidden');
    this.keyData = keyData;
    this.addData(keyData);
    this.container.append(this.element);
  }

  addData(keyData) {
    this.keyEnContentWrapper.innerHTML = '';
    this.keyRuContentWrapper.innerHTML = '';
    Object.keys(keyData).forEach((el) => {
      if (el === 'en') {
        const objectKeys = Object.keys(keyData.en);
        for (let i = 0; i < objectKeys.length; i += 1) {
          const keyChar = document.createElement('span');
          keyChar.className = 'key__char';
          if (i !== 0) keyChar.classList.add('hidden');
          if (SPECIAL_KEYS.arrowKeys.includes(keyData.code)) {
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
          if (SPECIAL_KEYS.arrowKeys.includes(keyData.code)) {
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

export default Key;
