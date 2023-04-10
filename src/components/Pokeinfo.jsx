import React from "react";
import "../App.css";


const Pokeinfo = ({ pokemon, active }) => {

  return (

    <div className=" h-52 lg:h-52 xl:h-80 ">

      {!active && (<div>
        <img
          className="img-dark w-full  mb-10"
          src={pokemon.image}
          alt={pokemon.ID}
          draggable="false"
        />

      </div>
      )}
      {active && (<div>
        <img
          className=" w-full  "
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
