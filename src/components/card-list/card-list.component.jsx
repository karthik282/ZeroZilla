import React from 'react';
import './card-list.style.scss';
import Card from './../card/card.component';

const CardList = ({products, getProductDetails}) => {
  return (
      <div className='card-list'>
          {products.map((product) => {
            return(
              <Card key={products.id} product={product} getProductDetails={getProductDetails} />
            )}
          )}
      </div>
  )
}

export default CardList;
