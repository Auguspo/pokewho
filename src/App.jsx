import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Pokemon from "./components/Pokemon";
import Footer from "./components/Footer";
import CheckList from "./components/CheckList";

function App() {
  return (
    <div className="text-center h-screen py-5">
      <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl">PokeWho</h1>

      <Router>
        <Routes>
          <Route exact path="/" element={<CheckList />} />
          <Route path="/game" element={<Pokemon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
