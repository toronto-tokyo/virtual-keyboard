import Title from './Title';
import Screen from './Screen';
import Keyboard from './Keyboard';

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
    this.title = new Title(this.container, 'h1', 'RSS Виртуальная клавиатура');
    this.screen = new Screen(this.container);
    this.keyboard = new Keyboard(this.container);
    this.keyboard.addKeys();
    this.keyboard.pressKeys();
  }
}

export default Layout;
