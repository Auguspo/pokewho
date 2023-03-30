import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PokemonSelection from "./components/PokemonSelection";
import Pokemon from "./components/Pokemon";
import Footer from "./components/Footer";
import CheckList from "./components/CheckList";

function App() {
  return (
    <div className="App">
      <h1>PokeWho</h1>

      <CheckList></CheckList>
      <Router>
        <Routes>
          <Route exact path="/" element={<PokemonSelection />} />
          <Route path="/genAll" element={<Pokemon min={0} max={905} />} />
          <Route path="/gen1" element={<Pokemon min={0} max={150} />} />
          <Route path="/gen2" element={<Pokemon min={151} max={251} />} />
          <Route path="/gen3" element={<Pokemon min={252} max={386} />} />
          <Route path="/gen4" element={<Pokemon min={387} max={493} />} />
          <Route path="/gen5" element={<Pokemon min={494} max={649} />} />
          <Route path="/gen6" element={<Pokemon min={650} max={721} />} />
          <Route path="/gen7" element={<Pokemon min={722} max={809} />} />
          <Route path="/gen8" element={<Pokemon min={810} max={905} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
