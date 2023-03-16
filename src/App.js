import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Pokemon from "./components/pokemon";

const App = () => {

  useEffect(() => {
    getPokemon();
    
  }, []);
  const [pokemon, setPokemon] = useState();
  const [pokemonData, setPokemonData] = useState([]);
  const [guess, setGuess] =useState("")
  let num= Math.floor(Math.random() * (898 -  + 0)) ;


  const handleGuess = (e) => {
    setGuess(e.target.value.toLowerCase());
  };

  const submitGuess = (e)=>{
    
    e.preventDefault();
    if(guess == pokemonData[0].name){getPokemon(); alert("correct")}
      else {
        alert("try again");getPokemon();
      }
  }
  


  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
      const res = await axios.get(url);
      await toArray.push(res.data);
      await setPokemonData(toArray);
       console.log(toArray[0].name)
      
       
    } catch (e) {
      console.log(e); 
    }
  };



  return (
    <div className="App">
  <Pokemon/>
    </div>
  );
};

export default App;
