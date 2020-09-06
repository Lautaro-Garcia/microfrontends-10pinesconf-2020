import React from "react";
import microfrontendWordArt from "../../assets/microfrontends.png";
import "./slide1.css";

export const Slide1 = () => (
  <div id="right-slide1">
    <p>En esta charla vamos a hablar de</p>
    <img src={microfrontendWordArt} alt="microfrontends" />
    <p>y algunas experiencias de usarlo en producción en el último año</p>
  </div>
);
