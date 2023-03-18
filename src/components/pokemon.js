import React,{ useEffect, useState } from "react";
import axios from "axios";
import Pokeinfo from "./Pokeinfo";
import Streak from "./Streak";
import "../App.css"
import { useNavigate } from 'react-router-dom';

function Pokemon({ min, max }) {
  useEffect(() => {
    getPokemon();
  }, []);

  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  let num = Math.floor(Math.random() * (max - min + 1)) + min;

  const handleGuess = (e) => {
    setGuess(e.target.value);
  };

  const submitGuess = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === pokemon.replace("-", " ")) {
      alert("Correcto");
      setCount(count + 1);
    } else {
      alert("Prueba de nuevo");
      setCount(0);
    }
    getPokemon();

    setGuess("");
  };

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
      const res = await axios.get(url);
      await toArray.push(res.data);
      setPokemonData(toArray);
      setPokemon(toArray[0].name);
      console.log(toArray[0].name);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='App'>
     
      <Pokeinfo info={pokemonData} />
      <Streak value={count} />

      <form onSubmit={submitGuess}>
        <input value={guess} onChange={handleGuess}></input>
        <button type="submit">Guess</button>
      </form>
      <button onClick={() => {
		navigate('/', {replace: true});
	}}>Cambiar Generación</button>	
    </div>
  );
}

export default Pokemon;
