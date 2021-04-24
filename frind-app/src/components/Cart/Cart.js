import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPager } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
const cart=props.cart;
//console.log(cart)
const total=cart.reduce((sum ,add) =>sum + add.salary,0);
const tax =(total/10).toFixed(2);
const grandTotal=(total-tax).toFixed(2);
    return (
        <div>
           <h3>Add Items : {cart.length}</h3> 
           <p><small>Amount : {total}</small></p>
           <p><small> Tax :{tax}</small></p>
           <p>Grandamount :{grandTotal}</p>
           <button className='btn'><FontAwesomeIcon icon={faPager} />Add Information</button>
        </div>
    );
};

export default Cart;