import React, { useEffect, useRef } from "react";
import "./root.component.css";

export default function Root(props) {
  const panel = useRef();
  useEffect(() => {
    panel.current.parentElement.addEventListener("slide", (evento) =>
      // eslint-disable-next-line no-console
      console.log(`[Left-panel]: Número de slide ${evento.detail}`)
    );
  }, [panel]);
  return (
    <section ref={panel} id="left">
      {props.name} is mounted!
    </section>
  );
}
