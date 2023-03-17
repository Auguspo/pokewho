import React, { useState, useEffect } from "react";
import "./App.css";


import Pokemon from "./components/pokemon";

function App() {
  return (

    <div className="App">
      <h1>Whos That Pokemon?</h1>
      <Pokemon min={1} max={151}/>
    </div>
  );
}

export default App;
