import React from "react";
import "../App.css";


const Pokeinfo = ({ pokemon, active }) => {
  
    return (
  
      <div className="imgbox">
    
        {!active && (<div>
          <img
            className="img-dark"
            src={pokemon.image}
            alt={pokemon.ID}
            draggable="false"
          />
          
          </div>
        )}
        {active && (<div>
          <img
            className="img-light"
            src={pokemon.image}
            alt={pokemon.ID}
            draggable="false"
          /> 
          <h2 className="pokeName">{pokemon.name.toUpperCase().split('').join(' ')}</h2></div>
        )}
            
      </div>
 
  );
};

export default Pokeinfo;
