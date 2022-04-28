import  { Fragment, useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';

import './ProductDetail.styles.scss'

const ProductDetail = () => {

    const location = useLocation();
    const [productDetail, setproductDetail] = useState();

    useEffect(() => {
      const id = location.state.id;
      fetch('https://fakestoreapi.com/products/'+id)
      .then((response) => response.json())
      .then((product) => {
          console.log(product)
        setproductDetail(product)
      });
    }, [])

    const cartCount = () => {
        let count = 0;

        return count++
    }


    return (
        <Fragment>
            <h1>Product Details</h1>
            {productDetail && <div className='product-card-container' key={productDetail.id} >
                <img
                    className='image-container'
                    src={productDetail.image}
                    alt={`product ${productDetail.title}`}/>
                <h2>{productDetail.title}</h2>
                <p>{productDetail.description}</p>
                <div className='price-section'>
                    <h1>{productDetail.price}</h1>
                    <button className='cart-btn' onClick={() => cartCount()}> ADD CART </button>
                </div>

            </div>}
        </Fragment>

    )
}

export default ProductDetail