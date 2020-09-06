import React, { Component } from "react";
import "./root.component.css";
import { slides } from "./slides";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.panel = React.createRef();
    this.state = { indiceSlide: -1 };
    this.cambiarSlide = (evento) =>
      this.setState({ indiceSlide: evento.detail });
  }

  componentDidMount() {
    this.panel.current.parentElement.addEventListener(
      "slide",
      this.cambiarSlide
    );
  }

  componentWillUnmount() {
    this.panel.current.parentElement.removeEventListener(
      "slide",
      this.cambiarSlide
    );
  }

  render() {
    const Contenido = slides[this.state.indiceSlide];

    return (
      <section ref={this.panel} id="right">
        {Contenido && <Contenido />}
      </section>
    );
  }
}
