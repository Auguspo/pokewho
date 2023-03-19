import React from "react";
import "../App.css";

const Pokeinfo = ({ info, active }) => {
  return (
    <div>
      {info.map((data) => {
        return (
          <div>
            {active && (
              <img
                className="img-light"
                src={data.sprites["front_default"]}
                alt={data.name}
              />
            )}
            {active && <h2>{info[0].name.toUpperCase()}</h2>}
            {!active && (
              <img
                className="img-dark"
                src={data.sprites["front_default"]}
                alt={data.name}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Pokeinfo;
