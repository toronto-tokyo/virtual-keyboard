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
    this.title = new Title(this.container, 'h1', 'RSS Виртуальная клавиатура');
    this.screen = new Screen(this.container);
    this.keyboard = new Keyboard(this.container);
    this.container.append(this.additionInfo);
    window.addEventListener('load', () => {
      this.additionInfo.classList.remove('hidden');
    });
  }
}

export default Layout;
