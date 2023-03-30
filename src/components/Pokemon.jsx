import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokeinfo from "./Pokeinfo";
import Streak from "./Streak";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Hint from "./Hint";

function Pokemon({ min, max }, gen) {
  const [pokemon, setPokemon] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    const fetchPokemon = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=905"
      );
      const randomPokemonUrl =
        response.data.results[
          Math.floor(Math.floor(Math.random() * (max - min + 1)) + min)
        ].url;

      const pokemonResponse = await axios.get(randomPokemonUrl);
      const pokemon = {
        name: pokemonResponse.data.name,
        image: pokemonResponse.data.sprites.front_default,
        ID: pokemonResponse.data.ID,
      };
      await setPokemon(pokemon);
      console.log(pokemon.name);
      await setLoaded(true);
    };

    if (!loaded) {
      fetchPokemon();
    }
  }, [loaded]);

  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handlePokemon = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=905"
    );
    const randomPokemonUrl =
      response.data.results[
        Math.floor(Math.floor(Math.random() * (max - min + 1)) + min)
      ].url;
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
    await setIsActive(true);
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
    setCount(0);

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
    <div className="App"><div className="bg">
      <Pokeinfo className="img" pokemon={pokemon} active={isActive} />
      <Hint pokemon={pokemon} showH={show} />
      <button
        onClick={() => {
          hintCount(show);
        }}
      >
        Hint
      </button>
      <Streak value={count} count={show} />

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
    </div></div>
  );
}

export default Pokemon;
