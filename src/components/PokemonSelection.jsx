import React from 'react';
import { Link } from 'react-router-dom';


function PokemonSelection({gens}) {
  return (
    
     <button><Link to="/game" state={{gens}} >Select Generation</Link></button>  
    
  );
}

export default PokemonSelection;