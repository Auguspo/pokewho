import React from 'react';



const Pokeinfo = ({info}) => {

    return (<div >
        {info.map((data) => {
            return (
              <div  key={data.id} className="container">
                <img src={data.sprites["front_default"]} />
              </div>
            );
          })}
          </div>
    );
}

export default Pokeinfo;
