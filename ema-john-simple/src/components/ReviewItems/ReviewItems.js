import React from 'react';

const ReviewItems = (props) => {
    const {name,quantity,key,price} =props.pd;
   const removeItemStyle={
       borderBottom:'1px solid lightgray',
       marginBottom:"5px",
       paddingBottom:"5px",
       marginLeft:"200px"

   }
    return (
        <div style = {removeItemStyle}>
           <h4 className="product-name">{name}</h4> 
           <p>Quantity :{quantity}</p>
           <p><small>Price:{price}</small></p>
           <br></br>
           <button onClick={() =>props.removeProduct(key)} className="button">Remove</button>
        </div>
    );
};

export default ReviewItems;