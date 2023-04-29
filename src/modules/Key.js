class Key {
  constructor(container) {
    this.container = container;
    this.element = document.createElement('div');
    this.element.className = 'keyboard__key';
    this.container.append(this.element);
  }
}

export default Key;
