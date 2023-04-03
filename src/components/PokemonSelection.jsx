import React from 'react';
import { Link } from 'react-router-dom';


function PokemonSelection({gens}) {
  return (
    
     <button className="bg-blue-500 flex justify-center w-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded my-4 "><Link to="/game" state={{gens}} >Select<br />Generation</Link></button>  
    
  );
}

export default PokemonSelection;