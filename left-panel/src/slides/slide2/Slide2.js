import React from "react";
import microfrontque from "../../assets/microfrontque.png";
import ale from "../../assets/ale.png";
import lucas from "../../assets/lucas.png";

import "./slide2.css";

export const Slide2 = () => (
  <div id="left-slide2">
    <img src={microfrontque} alt="microfrontque" />
    <img id="ale" src={ale} alt="ale" />
    <img id="lucas" src={lucas} alt="lucas" />
  </div>
);
