import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokeinfo from "./Pokeinfo";
import Streak from "./Streak";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Pokemon({ min, max }) {

  useEffect(() => {
    getPokemon();
  }, []);

  const [pokemon, setPokemon] = useState("");
  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [pokemonID, setPokemonID] = useState(Math.floor(Math.random() * (max - min + 1)) + min)  
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handleGuess = (e) => {
    setGuess(e.target.value);
  };

  const submitGuess = async (e) => {
    e.preventDefault();
    setIsActive(true);
    if (guess.toLowerCase() === pokemon.replace("-", " ")) {
      alert("Correcto");

      setCount(count + 1);
    } else {
      alert("Prueba de nuevo");
      setCount(0);
    }
    await timeout(1000);
    setPokemonID(Math.floor(Math.random() * (max - min + 1)) + min)
    getPokemon();

    setGuess("");
  };

  const getPokemon = async () => {
    const toArray = [];
   
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
      const res = await axios.get(url);
      await toArray.push(res.data);
      setPokemon(toArray[0].name);
      console.log(toArray[0].name);
    } catch (e) {
      console.log(e);
    }
    setIsActive(false);
  };

  return (
    <div className="App">
      <Pokeinfo ID={pokemonID} name={pokemon} active={isActive} />

      <Streak value={count} />

      <form onSubmit={submitGuess}>
        <input value={guess} onChange={handleGuess}></input>
        <button type="submit">Guess</button>
      </form>
      <button
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        Cambiar Generación
      </button>
    </div>
  );
}

export default Pokemon;
