import React from 'react';
import './card.style.scss';

const Card = ({product, getProductDetails }) => {
  const {id, title, price, image} = product;
  return (
      <div className='card-container' key={id} onClick={() => getProductDetails(id)} >
          <img
            className='image-container'
              src={image}
              alt={`product ${title}`}/>
          <h2>{title}</h2>
          <p>{price}</p>
      </div>
  )
}

export default Card;
