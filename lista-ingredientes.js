import { LitElement, html, css } from 'lit-element';

export class ListaIngredientes extends LitElement {
  static get properties() {
    return {
      nombreReceta: { type: String },
      ingredientes: { type: Array }
    };
  }

  static styles = css`
    .container {
      margin: 1rem;
      padding: 1rem;
      text-align: center;
    }
    .ingredientes {
      margin-top: 1rem;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div>
          <p>${this.nombreReceta}</p>
        </div>
        <div class="ingredientes">
          <ul>
            ${this.ingredientes.map(item => html`<li>${item.text}</li>`)}
          </ul>
        </div>
      </div>
    `;
  }

  
}

customElements.define('lista-ingredientes', ListaIngredientes);