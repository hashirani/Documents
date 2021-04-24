import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData/index';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart , setCart] = useState([])
    const [place ,setPlace] = useState(false)
    const handlePlaceOrder=()=>{
        setCart([]);
        setPlace(true)
        processOrder()
        //console.log('clicked')

    }
    const removeProduct = (productKey) =>{
        //console.log('clicked')
        const newCart = cart.filter(pd =>pd.key!==productKey )
       setCart(newCart)
       removeFromDatabaseCart(productKey)
    }
        useEffect(()=>{
const savedCart = getDatabaseCart();
//console.log(savedCart)
const newValue = Object.keys(savedCart);
//console.log(newValue);
const cartProduct = newValue.map(key =>{
   const product = fakeData.find(pd =>pd.key === key) 
    product.quantity= savedCart[key]
   return product;
   
})
setCart(cartProduct)
//console.log(cartProduct)

    },[])
    let thankyou
    if(place){
        thankyou=<img src={happyImage} alt=""/>
    } 
    return (
        <div className='twin-container'>
         <div className="product-container">
           {
               cart.map(pd => <ReviewItems pd={pd}
                key = {pd.key}
                removeProduct={removeProduct}
               ></ReviewItems>)
           }
           {
               thankyou
           }
           </div>
           <div className="cart-container">
           <Cart cart={cart}>
              <button onClick={handlePlaceOrder} className='button'>Place Oder</button> 
           </Cart>
              
          </div> 
        </div>
    );
};

export default Review;