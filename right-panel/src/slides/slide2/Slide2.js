import React from "react";
import microfrontedsComo from "../../assets/microfrontends-como.png";
import lauta from "../../assets/lauta.png";
import erik from "../../assets/erik.png";

import "./slide2.css";

export const Slide2 = () => (
  <div id="right-slide2">
    <img src={microfrontedsComo} alt="microfrontends-como" />
    <img id="lauta" src={lauta} alt="lauta" />
    <img id="erik" src={erik} alt="erik" />
  </div>
);
