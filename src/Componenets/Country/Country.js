import React from 'react';
import './Country.css';

const Country = () => {
    return (
        <section className='grid grid-cols-3 gap-2 w-11/12 mx-auto mt-2'>
            <div className='bg-red-50 rounded-md'>
            <img src="d" alt="Flag"/>
            <h2 className='text-xl font-semibold'>Country Name</h2>
            <h4 className='font-semibold'>Population: <span className='font-light'>Population</span></h4>
            <h4 className='font-semibold'>Capital: <span>Name</span></h4>
        </div>
        </section>
    );
};

export default Country;