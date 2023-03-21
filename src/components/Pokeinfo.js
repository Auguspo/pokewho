import React, { useState } from "react";
import "../App.css";

const Pokeinfo = ({ ID, active, name }) => {
  const [count, setCount] = useState(0);
  const [hint, setHint] = useState("");


  const letterHint = (active) => {
    if (count == 0) {
      setHint(name.toUpperCase().replace(/[A-Z]/g, "_ "));
    } else {
      setHint(name.toUpperCase().charAt(0) + name.toUpperCase().replace(/[A-Z]/g, "_ ").slice(1))
    }
    setCount(1);
  };




  return (
    <div>
      <div>
    
        {!active && (<div>
          <img
            className="img-dark"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png`}
            alt={name}
          />
          <h2>{hint}</h2>
          </div>
        )}
        {active && (<div>
          <img
            className="img-light"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png`}
            alt={name}
          /> 
          <h2>{name.toUpperCase().split('').join(' ')}</h2></div>
        )}

        <button onClick={() => letterHint()}>hint</button>
        
      </div>
    </div>
  );
};

export default Pokeinfo;
