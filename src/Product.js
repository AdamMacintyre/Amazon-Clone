import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

import {useStateValue} from './StateProvider'

function Product({ id, title, image, price, rating, link}) {

  const [{basket}, dispatch] = useStateValue();

  console.log('this is the basket>>>',basket);

  const addToBasket = () =>{
    //dispatch Item to the datalayer or redux
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        link: link,
      },

    });
  };

  return (

    <div className='product'>
        <Link className="card__fpContainerLink" to={link}>

        <div className='product__info'>

            <p>{title}</p>

            <p className='product__price'>
                 <small>$</small>
                 <strong>{price}</strong>
            </p>

            <div className='product__rating'>
                <p>{rating}</p>
            </div>

        </div>
        
        <img src={image} alt='' />
        </Link>
        <button onClick={addToBasket}>Add to Basket</button>
        
    </div>
  );
};

export default Product;