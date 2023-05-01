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

export default Title;
