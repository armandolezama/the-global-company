import { LitElement, html, css } from 'lit-element';

class TheGlobalCompanyDashboard extends LitElement {
  static get styles() {
    return css`...`
  };

  static get properties() {
    return { prop: String };
  };

  render() {
    return html`
    <div id="main-container">
      
    </div>
    `
  };
};
customElements.define('the-global-company-dashboard', TheGlobalCompanyDashboard);