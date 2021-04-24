import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country ,setCountry] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data =>setCountry(data))
    })
    return (
        <div>
            <h3 style={{textAlign:'center',textDecoration:"underline"}}>Total country : {country.length}</h3>
        {
            country.map(land =><Country land={land}></Country>)
        }
        </div>
    );
};

export default Home;