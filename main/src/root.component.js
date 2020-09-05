import React from "react";
import "./root.component.css";
import logo from "./logo.png";

export default function Root(props) {
  return (
    <section id="main">
      <h1>Un título cualquiera</h1>
      <img id="logo" src={logo} alt="logo" />
    </section>
  );
}
