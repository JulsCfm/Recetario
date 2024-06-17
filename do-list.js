import {LitElement, html} from 'lit';
 
class Dolist extends LitElement{
static properties = {
    colors: {type: Array},
    isMap:{type: Boolean}
};
 
constructor() {
    super();
    this.colors = ['red', 'green', 'blue', 'purple', 'black', 'yellow'];
    this.isMap = true;
  }
 
  cambioDeMap(e){
    console.log(this)
    console.log(e)
    this.isMap =!this.isMap
  }
 
  render(){
    const colors = this.isMap? this.colors: this.colors.filter((color)=>color.length<=4)
    return html`
    <button @click=${(e)=>this.cambioDeMap(e)}>Click para filtrar</button>
    <ul style="border:solid 1px black">
      ${colors.map((color) =>
        html`<li style="color: ${color}">${color}</li>`
      )}
    </ul>
    
  `;
  }
}
customElements.define('do-list', Dolist);