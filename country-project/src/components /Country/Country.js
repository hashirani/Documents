import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const Country = (props) => {
    const {name ,capital,flag} =props.land;

    const history=useHistory();
    const handleClick =(countryId)=>{
        history.push(`/country/${countryId}`)
    }
    const detaileStyl={
        border:'1px solid gray',
        margin:'20px',
        padding:"20px",
        borderRadius:"5px",
        width:'300px',
        textAlign:"center",
     
      
       
      
    }
  
    return (
    <div style={{display:'flex',justifyContent:"space-around", }}>
        <div style={detaileStyl}>
            <h3>{name}</h3>
            <img style={{height:'100px'}} src={flag} alt=""/>
            <h4>{capital }</h4>
            {/* <Link to ={`/country/${name}`}>{name}</Link> */}
            <button style={{backgroundColor:"cyan"}} onClick={()=>handleClick(name)}>Click here</button>
        </div>
        </div>
    );
};

export default Country;