import React from "react";
import "../App.css";


const Pokeinfo = ({ pokemon, active }) => {
  
    return (
  
      <div className="justify-center h-96 ">
    
        {!active && (<div>
          <img
            className="img-dark w-full"
            src={pokemon.image}
            alt={pokemon.ID}
            draggable="false"
          />
          
          </div>
        )}
        {active && (<div>
          <img
            className=" w-full "
            src={pokemon.image}
            alt={pokemon.ID}
            draggable="false"
          /> 
          <h2 className="text-2xl -mb-10 pb-5 float">{pokemon.name.toUpperCase().split('').join(' ')}</h2></div>
        )}
            
      </div>
 
  );
};

export default Pokeinfo;
