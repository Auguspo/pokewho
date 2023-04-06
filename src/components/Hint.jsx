import React from 'react';

const Hint = ({pokemon,showH}) => {



    return (
        <div className=" h-9 my-3 float">

            {showH === 1 ? 
            <h2 className='text-2xl'>{pokemon.name.toUpperCase().replace(/[A-Z]/g, "_ ")}</h2> : <> </>}
           {showH ===2 ? 
           <h2 className='text-2xl'>{pokemon.name.toUpperCase().charAt(0) + pokemon.name.toUpperCase().replace(/[A-Z]/g, "_ ").slice(1)}</h2> :  <> </>}
           
           
        </div>
    );
}

export default Hint;
