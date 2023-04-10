import React from "react";
import "../App.css";


const Pokeinfo = ({ pokemon, active }) => {

  return (

    <div className=" h-64 my-2 ">

      {!active && (<div className="justify-center mx-auto overflow-hidden flex flex-col items-center max-w-sm">
        <img
          className="img-dark w-full sm:w-64 "
          src={pokemon.image}
          alt={pokemon.ID}
          draggable="false"
        />

      </div>
      )}
      {active && (<div className="justify-center mx-auto overflow-hidden flex flex-col items-center max-w-sm">
        <img
          className=" w-full sm:w-64  "
          src={pokemon.image}
          alt={pokemon.ID}
          draggable="false"
        />
      </div>
      )}

    </div>

  );
};

export default Pokeinfo;
