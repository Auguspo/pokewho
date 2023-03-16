import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Pokemon(props) {
    useEffect(() => {
        getPokemon();
        
      }, []);

      const [pokemonData, setPokemonData] = useState([]);
      const [guess, setGuess] =useState("")
      let num= Math.floor(Math.random() * (898 -  + 0)) ;
    
    
      const handleGuess = (e) => {
        setGuess(e.target.value);
       
      };
    
      const submitGuess = (e)=>{
        
        e.preventDefault();
        if(guess.toLowerCase().replace("-", " ") == pokemonData[0].name){ alert("correct")}
          else {
            alert("try again");
          }
          getPokemon()
          
         setGuess("")
          
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
        <div>
                  {pokemonData.map((data) => {
        return (
          <div  key={data.id} className="container">
            <img src={data.sprites["front_default"]} />
          </div>
        );
      })}
      <form onSubmit={submitGuess}>
      <input value={guess} onChange={handleGuess}></input>
      </form> 
        </div>
    );
}

export default Pokemon;