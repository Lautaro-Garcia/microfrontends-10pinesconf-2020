import React from "react";
import "./root.component.css";

export default function Root(props) {
  return <section id="left">{props.name} is mounted!</section>;
}
