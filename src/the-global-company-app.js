import { LitElement, html } from 'lit-element';
import { router } from 'lit-element-router';
import styles from './the-global-company-app-styles';
import 'sophos-simple-template/sophos-simple-template';
import './pages/the-global-company-login';
import './pages/the-global-company-create-account';
import './pages/the-global-company-dashboard';
import './sections/the-big-company-nav-bar';
import './sections/the-global-company-header';
import './router-components/the-global-company-main';
import './controllers/the-global-company-dm';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class TheGlobalCompanyApp extends router(LitElement) {

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
  };

  static get properties() {
    return {
      page : { type : String},
      route: { type: String },
      params: { type: Object },
      query: { type: Object }
    };
  };

  static get routes() {
    return [
      {
        name: 'dashboard',
        pattern: '/',
        data: { title: 'Home' }
      }, 
      {
        name: 'login',
        pattern: '/login'
      }, 
      {
        name: 'create-account',
        pattern: '/create-account'
      }
    ];
  }

  static get styles() {
    return styles;
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log(route, params, query, data);
  }

  signIn(e) {
    if(e){
      this.page = 'client-store';
    };
  };

  logOut() {
    this.page = 'public-store'
  };

  createAccount(e) {
    this.page = 'client-store';
  };

  cancelCreateAccount() {
    this.page = 'public-store';
  };

  showLoginPage () {
    this.page = 'login';
  };

  showCreateAccountPage() {
    this.page = 'create-account';
  };

  searchTerm(e){
    console.log(e.detail.term);
  };

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return html`
      <div id="main-app-container">

        <the-global-company-main active-route=${this.route}>
          <sophos-simple-template
          id="login-template"
          route="login">

            <the-global-company-header
            slot="header-content">
            </the-global-company-header>

            <the-global-company-login
              slot="main-view-content">
            </the-global-company-login>
          
            <the-big-company-nav-bar
              slot="nav-bar-content">
            </the-big-company-nav-bar>
          </sophos-simple-template>

          <sophos-simple-template
          id="dashboard-template"
          route="dashboard">

          <the-global-company-header
            slot="header-content">
            </the-global-company-header>

            <the-global-company-dashboard
              slot="main-view-content">
            </the-global-company-dashboard>
          
            <the-big-company-nav-bar
              slot="nav-bar-content">
            </the-big-company-nav-bar>
          </sophos-simple-template>

          <sophos-simple-template
          id="create-account-template"
          route="create-account">

          <the-global-company-header
            slot="header-content">
            </the-global-company-header>

            <the-global-company-create-account
              slot="main-view-content">
            </the-global-company-create-account>
          
            <the-big-company-nav-bar
              slot="nav-bar-content">
            </the-big-company-nav-bar>
          </sophos-simple-template>
        </the-global-company-main>
      </div>
    `;
  };
};

customElements.define('the-global-company-app', TheGlobalCompanyApp);