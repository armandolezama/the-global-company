import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

class TheGlobalCompanyLink extends navigator(LitElement) {
  
  constructor() {
    super();
    this.href = '';
  }

  static get properties() {
    return {
      href: { type: String }
    };
  };

  linkClick(event) {
    event.preventDefault();
    this.navigate(this.href);
  };

  render() {
    return html`
        <a href='${this.href}' @click='${this.linkClick}'>
            <slot></slot>
        </a>
    `;
  };
}
customElements.define('the-global-company-link', TheGlobalCompanyLink);