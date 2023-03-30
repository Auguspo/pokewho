import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "grey",
        color: "white",
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: "10px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        © Augusto Poletti 2023. Todos los derechos reservados.
      </div>
      <div
        style={{
          textAlign: "right",
          marginRight: "10%",
          paddingBottom: "10px",
        }}
      >
        <a href="https://github.com/Auguspo" style={{ color: "white" }}>
          Github de Augusto Poletti
        </a>
      </div>
    </div>
  );
}

export default Footer;
