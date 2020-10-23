// eslint-disable-next-line require-jsdoc
import {$} from '@core/dom';

export class Excel {
  // eslint-disable-next-line require-jsdoc
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');
    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });

    return $root;
  }

  render() {
    // this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`);
    this.$el.append(this.getRoot());
    console.log(this.components);
  }
}
