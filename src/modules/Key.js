class Key {
  constructor(container, keyData) {
    this.container = container;
    this.element = document.createElement('div');
    this.element.className = 'key';
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
          if (keyData.code === 'ArrowUp' || keyData.code === 'ArrowLeft' || keyData.code === 'ArrowDown' || keyData.code === 'ArrowRight') {
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
          keyChar.textContent = keyData.ru[objectKeys[i]];
          this.keyRuContentWrapper.append(keyChar);
        }
      }
    });
    this.element.append(this.keyEnContentWrapper);
    this.element.append(this.keyRuContentWrapper);
  }
}

export default Key;
