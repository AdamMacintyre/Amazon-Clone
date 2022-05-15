import React from 'react'

import './hproductdetails.css'


function HproductDetails({id, title, image, price, rating, brand, hover}) {
  return (
    <div className='hpDescriptionContainer'>


<div className='hp__description' id={id}>
        <h1>{title}</h1>
        { hover ? <img src={image} /> : '😁'  }
        <h3>$ {price}</h3>
     

        <div className='checkoutProduct__rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
        </div>
        </div>
        <div className='hp__productDetails'>
            <p>{brand}</p>

        </div>
    </div>
  )
}

export default HproductDetails