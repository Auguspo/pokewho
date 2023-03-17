import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Pokeinfo from "./Pokeinfo";
import Streak from "./Streak";

function Pokemon(props) {
  useEffect(() => {
    getPokemon();
  }, []);
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(0);
  let num = Math.floor(Math.random() * (902  - 1+1)+1);
  

  const handleGuess = (e) => {
    setGuess(e.target.value);
  };

  const submitGuess = (e) => {
    
    e.preventDefault();
    if (guess.toLowerCase() == pokemon.replace("-", " ")) {
      alert("correct");
      setCount(count + 1)
      
    } else {
      alert("try again");
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
    <div>
     
      <Pokeinfo info={pokemonData} />
      <Streak value={count}/>
      <form onSubmit={submitGuess}>
        <input value={guess} onChange={handleGuess}></input>
        <button type="submit">Guess</button>
      </form>
    </div>
  );
}

export default Pokemon;
