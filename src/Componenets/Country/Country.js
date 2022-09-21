import React from 'react';
import './Country.css';

const Country = (props) => {
    // Props Destructuring.
    const { capital, flags, name, population } = props.country;
    return (

        <div className='bg-red-50 rounded-md'>
            <img src={flags.png} alt={name.common + "Flag"} />
            <h2 className='text-xl font-semibold'>{name.common}</h2>
            <h4 className='font-semibold'>Population: <span className='font-light'>{population}</span></h4>
            <h4 className='font-semibold'>Capital: <span>{capital}</span></h4>
        </div>

    );
};

export default Country;