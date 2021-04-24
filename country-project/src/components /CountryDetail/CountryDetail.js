import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryname} = useParams();
    const [user,setUser] =useState({})
  
   
    useEffect(()=>{
    const url =`https://restcountries.eu/rest/v2/name/${countryname}`
    fetch(url)
    .then(res=>res.json())
    .then(data =>setUser(data[0]))   
},[])

const detaileStyle={
    border:'1px solid blue',
    margin:'20px',
    padding:"20px",
    borderRadius:"5px",
    width:'400px',
    textAlign:"center",
  
}

    return (
        <div style={{display:'flex',justifyContent:"space-around",flexDirection:"row", marginTop:'50px'}}>
        <div style={detaileStyle}>
           <p>Country name is : {countryname}</p>          
            <h1>Name : {user.name}</h1> 
            <img style={{height:'100px'}} src={user.flag} alt=""/>
            <h1>Code : {user.cioc}</h1>  
            <h1>Population : {user.population}</h1>  
            <h1>Capital : {user.capital}</h1>           
        </div>
        </div>
    );
};

export default CountryDetail;