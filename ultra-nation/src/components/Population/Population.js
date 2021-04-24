import React from 'react';

const Population = (props) => {
    const addcountry=props.addcountry;
    // let totalPopulation =0;
    // for (let i = 0; i < addcountry.length; i++) {
    //     let element = addcountry[i];
    //     //console.log(element);
    //     totalPopulation=totalPopulation+element.population;
        const totalPopulation=addcountry.reduce((sum ,country) => sum + country.population ,0)
    // }
    return (
        <div>
            <h3>This is population:{addcountry.length}</h3>
            <h4>Total Population :{totalPopulation}</h4>
        </div>
    );
};

export default Population;