import React from "react";
import "./root.component.css";
import logo from "./logo.png";
import { slides } from "./slides";

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { indiceSlideActual: 0 };
  }

  cambiarASlide(direccion) {
    const nuevoIndice = this.state.indiceSlideActual + direccion;
    history.pushState({}, "", "/?i=" + nuevoIndice);
    this.setState({ indiceSlideActual: nuevoIndice });
  }

  obtenerNumeroDeSlidePorQueryParam() {
    const queryparams = new URL(document.location);
    const indicePorQueryparam = Number(queryparams.searchParams.get("i"));
    if (isNaN(indicePorQueryparam)) {
      return 0;
    }

    return indicePorQueryparam > slides.length ? 0 : indicePorQueryparam;
  }

  render() {
    const { indiceSlideActual } = this.state;
    const esPrimerSlide = indiceSlideActual === 0;
    const esUltimaSlide = indiceSlideActual === slides.length - 1;
    const slideActual = slides[indiceSlideActual];

    return (
      <section id="main">
        <h1>{slideActual.titulo}</h1>
        {esPrimerSlide ? undefined : (
          <button onClick={() => this.cambiarASlide(-1)} id="slide-anterior">
            <i className="chevron" />
          </button>
        )}
        {esUltimaSlide ? undefined : (
          <button onClick={() => this.cambiarASlide(1)} id="slide-siguiente">
            <i className="chevron" />
          </button>
        )}
        <img id="logo" src={logo} alt="logo" />
      </section>
    );
  }
}
