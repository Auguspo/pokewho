import React from 'react';

const Streak = ({value}) => {
   
    return (
        <div>
            <h1 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl my-2'>X {value}</h1>
        </div>
    );
};


export default Streak;
