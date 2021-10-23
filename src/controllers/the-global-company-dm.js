import { LitElement } from 'lit-element';

class TheGlobalCompanyDm extends LitElement {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.url = '';
  };

  static get properties() {
    return { 
     };
  };
};
customElements.define('the-global-company-dm', TheGlobalCompanyDm);