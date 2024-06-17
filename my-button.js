import { LitElement, html, render, css } from "lit";

export class Mybutton extends LitElement{
    static styles = css`p { color: red }`;


    static properties = {
        label: {type: String},
        contador: {tupe: Number},
    };

    constructor () {
        super();
        this.label = "Pulsame";
        this.contador = 0;
    }

    render() {
        return html `
        <button @click=${this.sumaContador}> ${this.label} </button>
        <p>Presionaste el boton ${this.contador} Veces </p>  
        `;
    }

    sumaContador(event){
        const input = event.target;
        this.contador +=1;
    }
}
customElements.define('my-button', Mybutton);