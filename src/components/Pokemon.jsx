import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokeinfo from "./Pokeinfo";
import Streak from "./Streak";
import "../App.css";
import { useNavigate, useLocation } from "react-router-dom";
import Hint from "./Hint";


function Pokemon() {
  const [pokemon, setPokemon] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const range = useLocation();
  const gens = range.state;

  const generateRandomNumberInRange = ({ gens }) => {
    const results = [];

    gens.forEach((r) => {
      const [min, max] = r;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      results.push(randomNumber);
    });

    const randomIndex = Math.floor(Math.random() * results.length);
    console.log(results[randomIndex]);
    return results[randomIndex];
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=905"
      );
      const randomPokemonUrl =
        response.data.results[generateRandomNumberInRange(gens)].url;

      const pokemonResponse = await axios.get(randomPokemonUrl);
      const pokemon = {
        name: pokemonResponse.data.name,
        image: pokemonResponse.data.sprites.front_default,
        ID: pokemonResponse.data.ID,
      };
      setPokemon(pokemon);
      console.log(pokemon.name);
      setLoaded(true);
    };

    if (!loaded) {
      fetchPokemon();
    }
  }, [loaded]);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handlePokemon = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=905"
    );
    const randomPokemonUrl =
      response.data.results[generateRandomNumberInRange(gens)].url;
    const pokemonResponse = await axios.get(randomPokemonUrl);
    const pokemon = {
      name: pokemonResponse.data.name,
      image: pokemonResponse.data.sprites.front_default,
      ID: pokemonResponse.data.ID,
    };
    setIsActive(false);
    console.log(pokemon.name);
    setPokemon(pokemon);
  };

  const handleGuess = (e) => {
    setGuess(e.target.value);
  };

  const submitGuess = async (e) => {
    e.preventDefault();
    setIsActive(true);
    if (guess.toLowerCase() === pokemon.name.replace("-", " ")) {
      alert("Correcto");

      setCount(count + 1);
    } else {
      alert("Prueba de nuevo");

      setCount(0);
    }
    setShow(0);
    await timeout(2000);
    setGuess("");
  

    handlePokemon();
  };

  const hintCount = (count) => {
    if (count === 0) {
      setShow(1);
    }

    if (count === 1) {
      setShow(2);
    }

  };

  return (
    <div className="bg">      <Streak value={count} count={show} />
      <Pokeinfo className="img" pokemon={pokemon} active={isActive} />
      <Hint  pokemon={pokemon} showH={show} />
    
      <form onSubmit={submitGuess}>
        <input value={guess} onChange={handleGuess}></input>
        <button type="submit">Guess</button>
      </form>
      <button className="hintButton"
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        Cambiar Generación
      </button> <button
        onClick={() => {
          hintCount(show);
        }}
      >
        Hint
      </button>
    </div>
  );
}

export default Pokemon;
