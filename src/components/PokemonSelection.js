import React from 'react';
import { Link } from 'react-router-dom';

function PokemonSelection() {
  return (
    <div>
      <h1>Selecciona el pool de elección de Pokémon:</h1>
      <ul>
        <li><Link to="/gen1">Primera Generación</Link></li>
        <li><Link to="/gen2">Segunda Generación</Link></li>
        <li><Link to="/gen3">Tercera Generación</Link></li>
        <li><Link to="/gen4">Cuarta Generación</Link></li>
        <li><Link to="/gen5">Quinta Generación</Link></li>
        <li><Link to="/gen6">Sexta Generación</Link></li>
        <li><Link to="/gen7">Septime Generación</Link></li>
        <li><Link to="/gen8">Octava Generación</Link></li>
        <li><Link to="/genAll">Todas las generaciónes</Link></li>
      </ul>
    </div>
  );
}

export default PokemonSelection;