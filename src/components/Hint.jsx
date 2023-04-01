import React from 'react';

const Hint = ({pokemon,showH}) => {

//Se modifica el estado?

    return (
        <div className="hintBox">

            {showH === 1 ? <h2>{pokemon.name.toUpperCase().replace(/[A-Z]/g, "_ ")}</h2> : <> </>}
           {showH ===2 ? <h2>{pokemon.name.toUpperCase().charAt(0) + pokemon.name.toUpperCase().replace(/[A-Z]/g, "_ ").slice(1)}</h2> :  <> </>}
           
           
        </div>
    );
}

export default Hint;
