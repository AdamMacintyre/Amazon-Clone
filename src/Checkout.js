import React from 'react';
import './Checkout.css';

import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from './StateProvider'

import checkoutBanner from './assets/img/checkoutBanner.jpg'

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        
        <div className='checkout__left'>
            <img className='checkout__ad' 
            src={checkoutBanner} 
            alt="" />

            <div>
                {/* the ? is optional channing so it doesnt' throw an error on email=null */}
                <h3>Nice Products {user?.email}</h3>
                <h2 className='checkout__title'>
                    Your Shopping Basket
                </h2>
              
                {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                ))}
            

            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal />
        </div>

    </div>
  );
};

export default Checkout;