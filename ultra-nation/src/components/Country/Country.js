

import React from 'react';
import './Country.css';

const Country = (props) => {
    const{ name,population ,region,flag}=props.country;
    const handleCountry=props.handleCountry;
    const flagStyle={
        height:'50px'
    };
    const countryStyle ={
        border:'5px solid blue',
       
        margin:'10px',
        padding:'10px'
    }
    //console.log(props);
   
    return (
        <div style={countryStyle}>
            <h4>This is country:{name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>population{population}</p>
            <p><small>Region:{region}</small></p>
            <button onClick={() =>handleCountry(props.country)}>add country</button>
        </div>
    );
};

export default Country;