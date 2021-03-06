import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';

const ProductDetail = () => {
  const {productKey}= useParams();
  const product =fakeData.find(pd => pd.key === productKey);
  //console.log(product)
    return (
        <div>
          <h2>
             Product detail coming soon</h2> 
            <Product showAddToCart={false} product={product}></Product> 
        </div>
    );
};

export default ProductDetail;