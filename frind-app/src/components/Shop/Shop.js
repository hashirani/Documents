import React from 'react';
import './Shop.css';
import Flex from '@react-css/flex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPager } from '@fortawesome/free-solid-svg-icons'
import FlexItem from '@react-css/flex/dist/src/components/FlexItem';

const Shop = (props) => {
 const{name,img,email,hobby ,country,salary}=props.user;
 
   return (
    
 
    
    
        <div className='flex-container'>
         
         <div >
             <img style={{height:'100px',marginTop:'10px'}}src={img} alt=""/> 
         
         
              <h2 style={{textDecoration:"underline", color:'lightskyblue'}}>Name:{name}</h2>
              <p>Salary:{salary}</p>
              <h4>Email:{email}</h4>
              <h4>Hobby:{hobby}</h4>
              <h3>Home Country:{country}</h3>
              <button className='btn' onClick={() =>props.handleAdd(props.user)}><FontAwesomeIcon icon={faPager} />Add Me</button>
          </div>
        
        </div>
      
     
     
     
        
    );
};

export default Shop;