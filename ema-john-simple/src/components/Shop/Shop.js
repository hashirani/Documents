import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';



const Shop = () => {
  const first = fakeData.slice(0 , 10);
  const [products , setProdects] = useState(first);
  const [cart , setCart] =useState([])

  
  useEffect(() =>{
const savedCart=getDatabaseCart()
const productKets = Object.keys(savedCart)
const previousCart = productKets.map(existingKey =>{
  const product =fakeData.find(pd =>pd.key === existingKey)
  product.quantity=savedCart[existingKey]
  return product;
})
setCart(previousCart);
  },[])
  const handleAddProduct =(product)=>{
      //console.log('add product',product)
      const sameProduct=cart.find(pd=>pd.key===product.key);
      let count=1;
      let newCart;
      if(sameProduct){
        count =sameProduct.quantity +1;
        sameProduct.quantity=count;
        const others =cart.filter(pd =>pd.key !== product.key );
        newCart=[...others,sameProduct]
      }
      else{
        product.quantity = 1;
        newCart = [...cart,product]
      }
      //const count=sameCount.length;
      //const newCart =[...cart,product]
      setCart(newCart)
     
      // const sameCount=newCart.filter(pd=>pd.key===product.key);
      // const count=sameCount.length;
      addToDatabaseCart(product.key ,count)

  }
    return (
    <div className='twin-container'>         
          <div className="product-container">                                 
             {
               products.map(pd =><Product
               key={pd.key}
               showAddToCart={true}
               handleAddProduct={handleAddProduct}
                 product={pd}>

                 </Product>)
             }
          </div>
          <div className="cart-container">
            <Cart cart={cart}>
            <Link to="/review"> <button className="button">Review Order</button></Link>
            </Cart>
              
          </div>      
    </div>
    );
};

export default Shop;