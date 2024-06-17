import { LitElement, html, css } from 'lit-element';
import './lista-ingredientes';

export class IntroduccionRecetas extends LitElement {
  static get styles() {
    return css`
      .add {
        border: none;
        color: white;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 5px;
        background-color: #000000;
        transition: transform 0.3s ease-in-out;
      }
      .add:hover {
        background-color: #0056b3;
      }
      .add:active {
        transform: scale(0.9);
      }
      .titulo {
        font-family: "Comic Neue", cursive;
        font-size: 30px;
      }
      .ingredientes1 {
        font-family: "Exo", sans-serif;
        font-size: 18px;
      }
      .cuerpo {
        margin: 1rem;
        padding: 1rem;
        text-align: center;
      }
      .receta-guardada {
        margin-top: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 20px;
        background-color: #F1F1F1;
        position: relative;
      }
      .eliminar-receta {
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
        color: gray;
        font-size: 20px;
      }
      .inputs {
        outline: 0;
        color: #333333;
        font-size: 12px;
        padding: 9px 10px;
        width: 200px;
        font-style: italic;
        border-radius: 7px;
        border: 1px solid #d6d6d6;
        background-color: #F5F5F5FF;
        box-shadow: -10px -5px 0px #000000;
      }
      .input:active,
      .input:focus {
        background-color: #ffffff;
        color: #000000;
        border: 1px solid #830b0b;
      }
      .contenedor1 {
        font-family: "Exo", sans-serif;
      }
      @media (min-width: 768px) {
        .contenedor1 {
          display: flex;
          justify-content: space-around;
        }
      }
    `;
  }

  static properties = {
    recetasGuardadas: { type: Array },
    name: { type: String },
    _listItems: { type: Array },
  };

  constructor() {
    super();
    this.recetasGuardadas = [];
    this.name = '';
    this._listItems = [];
  }

  render() {
    return html`
      <div class="cuerpo">
        <div class="contenedor1">
          <div>
            <input class="inputs" @input=${this.changeName} .value=${this.name} placeholder="Nombre de la Receta">
            <p>${this.name}</p>
          </div>
          <div>
            <input class="inputs" id="newitem" aria-label="New item" placeholder="Escribe el Ingrediente">
            <button class="add" @click=${this.agregarIngrediente}>+</button>
            <p>Ingredientes</p>
            <ul>
              ${this._listItems.map(item => html`<li>${item.text}</li>`)}
            </ul>
          </div>
        </div>
        <div>
          <button class="add" @click=${this.guardarReceta}>Guardar Receta</button>
        </div>

        ${this.recetasGuardadas.map((receta, index) => html`
          <div class="receta-guardada">
            <p class="titulo">${receta.nombre}</p>
            <ul class="ingredientes1">
              ${receta.ingredientes.map(item => html`<li>${item.text}</li>`)}
            </ul>
            <span class="eliminar-receta" @click=${() => this.eliminarReceta(index)}>✘</span>
          </div>
        `)}
      </div>
    `;
  }

  changeName(event) {
    this.name = event.target.value;
  }

  get input() {
    return this.renderRoot.querySelector('#newitem') ?? null;
  }

  agregarIngrediente() {
    this._listItems = [
      ...this._listItems,
      { text: this.input.value, completed: false },
    ];
    this.input.value = '';
    this.requestUpdate('_listItems');
  }

  guardarReceta() {
    if (this.name.trim() === '' || this._listItems.length === 0) {
      alert('Por favor, ingresa un nombre y al menos un ingrediente para guardar la receta.');
      return;
    }

    const nuevaReceta = {
      nombre: this.name,
      ingredientes: [...this._listItems]
    };

    this.recetasGuardadas = [...this.recetasGuardadas, nuevaReceta];
    this.name = '';
    this._listItems = [];
    this.requestUpdate();
  }

  eliminarReceta(index) {
    this.recetasGuardadas.splice(index, 1);
    this.recetasGuardadas = [...this.recetasGuardadas]; // Asegura la inmutabilidad para LitElement
    this.requestUpdate();
  }
}

customElements.define('introduccion-recetas', IntroduccionRecetas);