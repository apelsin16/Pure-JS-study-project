import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root);
  }
  // Return component's template
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}


