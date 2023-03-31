import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Pokemon from "./components/Pokemon";
import Footer from "./components/Footer";
import CheckList from "./components/CheckList";

function App() {
  return (
    <div ><div className="App">

    
      <h1>PokeWho</h1>

      <Router>
      
        <Routes>
      
          <Route exact path="/" element={<CheckList />} />
          <Route path="/game" element={<Pokemon  />} />
        </Routes>
      </Router></div>
      <Footer />
    </div>
  );
}

export default App;
