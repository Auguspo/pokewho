import React from 'react';

const Hint = ({ pokemon, showH, active }) => {



    return (
        <div className="h-9 my-3">
            {active && <h2 className="pokefont text-md z-0 pb-5 float">{pokemon.name.toUpperCase().split('').join(' ')}</h2>}

            {showH === 1 ?
                <h2 className='pokefont text-2xl'>{pokemon.name.toUpperCase().replace(/[A-Z]/g, "_ ")}</h2> : <> </>}
            {showH === 2 ?
                <h2 className='pokefont text-2xl'>{pokemon.name.toUpperCase().charAt(0) + pokemon.name.toUpperCase().replace(/[A-Z]/g, "_ ").slice(1)}</h2> : <> </>}

        </div>
    );
}

export default Hint;
