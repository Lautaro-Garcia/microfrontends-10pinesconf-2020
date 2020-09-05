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
    this.setState({
      indiceSlideActual: this.state.indiceSlideActual + direccion,
    });
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
