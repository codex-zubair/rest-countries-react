import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {

    // Making store to use the value 
    // by help of use state.
    const [countries,setCountries] = useState([])






    // Now Calling The API By Help of use Effect each Render Time...
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all').then(response=> response.json()).then(country=> setCountries(country)).catch(error=>console.log(error))
    },[])


    // Sorted Country List
    return (countries.sort((country1,country2)=> country2.population-country1.population).map(country=><Country country={country} key ={country.cca3}></Country>));
};

export default Countries;