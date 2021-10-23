import { LitElement, html, css } from 'lit-element';
import '../router-components/the-global-company-link';

class TheBigCompanyNavBar extends LitElement {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.buttons = [
      {
        label : 'home',
        path : '/'
      },
      {
        label : 'login',
        path : '/login'
      },
      {
        label : 'create-account',
        path : '/create-account'
      }
    ];
  };

  static get styles() {
    return css`
      #main-container{
        display: flex;
        flex-direction: column;
      }

      .nav-bar-button {
        margin: 10px;
        font-size : 16px;
      }
    `;
  };

  static get properties() {
    return { 
      buttons: { type: Array}
    };
  };

  render() {
    return html`
    <div id="main-container">
      ${this.buttons.map(button => html`
        
        <the-global-company-link
          href="${button.path}">
          
          <button
            class="nav-bar-button"> 
            ${button.label}
          </button>
        </the-global-company-link>
      `)}
    </div>
    `;
  };
};
customElements.define('the-big-company-nav-bar', TheBigCompanyNavBar);