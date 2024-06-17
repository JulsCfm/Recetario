import { LitElement, html, css } from 'lit-element';

export class BarraNavegacion extends LitElement {
  static get styles() {
    return css`
    .comic-neue-light {
        font-family: "Comic Neue", cursive;
        font-weight: 300;
        font-style: normal;
      }
    .exo-<uniquifier> {
        font-family: "Exo", sans-serif;
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
      }
      
    html{
        box-sizing: border-box;
        font-size: 62.5%; /*1rem = 10px */
    }
    *,*::before, *:after{
        box-sizing: inherit;
    }
    body{
        
        font-size: 1.6rem;
        line-height: 2;
    }
    a{
        text-decoration: none;
        color: white;
        font-family: "Exo", sans-serif;
    }
    h2{ font-family: "Comic Neue", cursive;}
    .centrar-texto{
        text-align: center;
    }
    .titulo{text-align: center;
            justify-content: center;
            display: flex;
            font-size: 25px;
            -webkit-box-shadow: 10px 10px 12px 0px rgba(0,0,0,0.6);
            -moz-box-shadow: 10px 10px 12px 0px rgba(0,0,0,0.6);
            box-shadow: 10px 10px 12px 0px rgba(0,0,0,0.6);
            border-radius: 25px;
            margin: 150px 45px;
            border: autopx autopx;
    }
    .contenedor{
        max-width: 120rem;
        width: 100%;
        margin: 0 auto;
        background-color: Black;
        
    }
    .header{
        height: 10rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .header__texto{
        text-align: center;
        color: white;
        margin-top: 5rem;
    }
    @media (min-width: 768px) {
        .header__texto{
            margin-top: 15rem;
        }
    }
    .barra{
        padding-top: 1rem;      
    }
    @media (min-width: 768px) {
        .barra{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .titulo{text-align: center;
            justify-content: center;
            display: flex;
            font-size: 25px;
            -webkit-box-shadow: 10px 10px 12px 0px rgba(0,0,0,0.6);
            -moz-box-shadow: 10px 10px 12px 0px rgba(0,0,0,0.6);
            box-shadow: 10px 10px 12px 0px rgba(0,0,0,0.6);
            border-radius: 25px;
            margin: 15px 145px;
    }
    }
    .logo{
    color: white;
    font-family: "Comic Neue", cursive;    
    font-size: 25px;    
    }
    .logo__nombre{
    font-weight: 400;
    }
    .logo__bold{
    font-weight: 700;
    }
    @media (min-width: 768px) {
        .navegacion{
            display:flex;
            gap: 2rem;
        }
    
    }
    .navegacion__enlace{
        display: block;
        text-align: center;
        font-size: 1.8rem;
        color: white;
    }

    
    `;
  }
  constructor () {
    super();
    this.navegacionRecetas = "Recetas";
    this.navegacionContacto = "Contacto";
    this.navegacionInfo = "Información"
}

  render() {
    return html`
    <header class="header">
    <div class="contenedor">
        <div class="barra">
            <a class="logo" href="index.html">
                <h1 class="logo__nombre no-margin centrar-texto">Recetas<span class="logo__bold">Fast</span></h1>
            </a>

            <nav class="navegacion">
                <a href="#" class="navegacion__enlace">${this.navegacionRecetas}</a>
                <a href="#" class="navegacion__enlace">${this.navegacionContacto}</a>
                <a href="#" class="navegacion__enlace">${this.navegacionInfo}</a>
            </nav>
        </div>
    </div>
    </header>
    <div class="titulo">
       <h2>Bienvenido a tu Recetario</h2>
    </div>
    `;
  }
}

customElements.define('barra-navegacion', BarraNavegacion);