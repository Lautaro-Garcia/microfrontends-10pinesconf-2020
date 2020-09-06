import React from "react";
import "./root.component.css";
import logo from "./assets/logo.png";
import { titulos } from "./titulos";

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indiceSlideActual: this.obtenerNumeroDeSlidePorQueryParam(),
    };
  }

  cambiarASlide(direccion) {
    const nuevoIndice = this.state.indiceSlideActual + direccion;
    this.guardarIndiceEnQueryParams(nuevoIndice);
    this.comunicarAOtrosMicrofrontends(nuevoIndice);
    this.setState({ indiceSlideActual: nuevoIndice });
  }

  guardarIndiceEnQueryParams(nuevoIndice) {
    history.pushState({}, "", "/?i=" + nuevoIndice);
  }

  comunicarAOtrosMicrofrontends(nuevoIndice) {
    const eventoCambioDeSlide = new CustomEvent("slide", {
      detail: nuevoIndice,
    });
    const microfrontends = window.document.querySelectorAll(
      "[id^='single-spa-application:@lauta/']:not(#single-spa-application\\:\\@lauta\\/main)"
    );
    microfrontends.forEach((microfrontend) =>
      microfrontend.dispatchEvent(eventoCambioDeSlide)
    );
  }

  obtenerNumeroDeSlidePorQueryParam() {
    const queryparams = new URL(document.location);
    const indicePorQueryparam = Number(queryparams.searchParams.get("i"));
    if (isNaN(indicePorQueryparam)) {
      return 0;
    }

    return indicePorQueryparam >= titulos.length ? 0 : indicePorQueryparam;
  }

  componentDidMount() {
    this.montadoMicrofrontends = window.addEventListener(
      "single-spa:first-mount",
      () => {
        this.comunicarAOtrosMicrofrontends(this.state.indiceSlideActual);
      }
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "single-spa:first-mount",
      this.montadoMicrofrontends
    );
  }

  render() {
    const { indiceSlideActual } = this.state;
    const esPrimerSlide = indiceSlideActual === 0;
    const esUltimaSlide = indiceSlideActual === titulos.length - 1;
    const tituloActual = titulos[indiceSlideActual];

    return (
      <section id="main">
        <h1>{tituloActual}</h1>
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
        <p id="footer">Microfrontends: 1 año después</p>
        <img id="logo" src={logo} alt="logo" />
      </section>
    );
  }
}
