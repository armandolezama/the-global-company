import { LitElement, html, css } from 'lit-element';

class TheGlobalCompanyHeader extends LitElement {
  static get styles() {
    return css`
      #search-bar {
        background: rgb(147,199,237);
        background: linear-gradient(69deg, rgba(147,199,237,1) 0%, rgba(35,132,240,1) 30%, rgba(30,97,238,1) 65%, rgba(30,204,236,0.9304096638655462) 100%);
        height: 100px;
        display: flex;
        margin: 20px;
        padding: 0 20px;
        border-radius: 30px;
      }

      #input-container[show-create-account-button] {
        align-items: center;
        width: 80%;
        display: flex;
      }

      #input-container {
        display: inline-flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
      }

      #search-bar-input {
      padding: 20px;
      margin: 20px;
      width: 100%;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      background-color: white;
      background-image: url('assets/search-icon.png');
      background-position: 10px 10px; 
      background-repeat: no-repeat;
      background-size: 20px 20px;
      padding: 12px 20px 12px 40px;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out;
      }

      #create-account-container {
        display: inline-flex;
        justify-content: space-around;
        width: 20%;
        flex-direction: column;
        align-items: baseline;
      }
    `
  };

  static get properties() {
    return { prop: String };
  };

  createAccountEvent() {
    this.dispatchEvent(new CustomEvent('create-new-account'))
  };

  login() {
    this.dispatchEvent(new CustomEvent('sign-in'))
  }

  searchProduct (e) {
    this.dispatchEvent(new CustomEvent('searching-for-term', {detail : {
      term : e.target.value}}));
  };0

  render() {
    return html`
            <div 
        id="search-bar">
        <div id="input-container"
        ?show-create-account-button="${this.isCreateAccountAvailable}">
          <input 
            id="search-bar-input" 
            type="text" name="search-bar" 
            placeholder="buscar" 
            @input="${this.searchProduct}">
        </div>

        ${this.isCreateAccountAvailable ? html`
          <div id="create-account-container">
            <button
            id="create-account-button"
            @click="${this.createAccountEvent}">Crear cuenta</button>
            <button
            id="sign-in-button"
            @click="${this.login}">Iniciar sesión</button>
          </div>
        ` : html``}

      </div>`;
  };
};
customElements.define('the-global-company-header', TheGlobalCompanyHeader);