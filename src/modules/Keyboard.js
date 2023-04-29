import Key from './Key';

class Keyboard {
  rows = [];

  constructor(container) {
    this.container = container;
    this.wrapper = document.createElement('div');
    this.row = document.createElement('div');
    this.row.className = 'keyboard__row';
    for (let i = 0; i < 4; i += 1) {
      const row = this.row.cloneNode();
      this.wrapper.append(row);
      this.rows.push(row);
    }
    this.container.append(this.wrapper);
  }

  addKeys() {
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const key = new Key(this.rows[i]);
      }
    }
  }
}

export default Keyboard;
