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

export default Screen;
