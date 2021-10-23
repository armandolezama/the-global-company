import { LitElement, html } from 'lit-element';
import { outlet } from 'lit-element-router';

class TheGlobalCompanyMain extends outlet(LitElement) {

  render() {
    return html`
      <slot></slot>
    `;
  }
};
customElements.define('the-global-company-main', TheGlobalCompanyMain);