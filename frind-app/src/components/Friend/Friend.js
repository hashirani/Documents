import React, { useState } from 'react';
import data from "../../fakeData/index1.js";
import Cart from '../Cart/Cart.js';
import Shop from '../Shop/Shop.js';
import './Friend.css';



const Friend = () => {   
    const first=data.slice(0,15);   
    const [users , setUsers] =useState(first);
   
    const [cart,setCart] =useState([])
    const handleAdd=(inf)=>{
    const newUsers =[...cart,inf]
    setCart(newUsers);
    }

   
    return (
    <div>
        <h1 style={{marginLeft:'35%',textDecoration:"underline", 
        color:'lightskyblue'}}>Our Firends</h1>
        <div className="friend-container">
         
            <div className="name-container">
             
            
                    {
                      users.map(user =><Shop user={user}
                      handleAdd={handleAdd}></Shop>)
                    }
            </div>
         
            <div className="cart">
              <Cart cart={cart}></Cart>
            </div>
         
        </div>
        </div>
    );
};

export default Friend;