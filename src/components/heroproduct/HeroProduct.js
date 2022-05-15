
import { useState, useCallback, useRef } from "react";
import HeroCart from './HeroCart'
import './heroproduct.css'
import ImgBox from './ImgBox'

import {useStateValue} from '../../StateProvider'
import HproductDetails from './HproductDetails'


function HeroProduct({imgt1, imgt2, imgt3, imgt4, 
    title, id, image, price, rating, brand

}) {

    const [hoverRef, isHovered] = useHover();




    const [{basket}, dispatch] = useStateValue();

    console.log('this is the basket>>>',basket);
  
    const addToBasket = () => {
      //dispatch Item to the datalayer or redux
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
  
      });
    };

    



  return (
    <div className='heroProduct__container'>
        {/* <ImgBox 
        imgt1={imgt1}
        imgt2={imgt2}
        imgt3={imgt3}
        imgt4={imgt4}

        hover={isHovered}
        ref={hoverRef}
        
        /> */}
         <div className='productCardContainer'>

<div className='img__container' >

  <div className='img__store'>
    <ul>

      <li  ref={hoverRef} >
      <span>
      <img src={imgt1} alt="" />
      </span>
      </li>

      <li ref={hoverRef} >
      <span>
      <img src={imgt2} alt=""  />
      </span>
      </li>

      <li>
      <span>
      <img src={imgt3} alt=""  />
      </span>
      </li>

      <li>
      <span>
      <img src={imgt4} alt=""  />
      </span>
      </li>


    </ul>
  </div>
</div>





  <div className='img__Maindisplay'> 
  
  <div >
    {isHovered ? '😁' : '☹️'}

    {isHovered ? (<img src='' alt="" />)  : ''}
  </div>
  
  
  
  
  </div>

</div>








        <HproductDetails 
        id={id}
        title={title}
        image={image}
        price={price}
        rating={rating}
        brand={brand}

        hover={isHovered}

        
        
        />

     
    
    {/* <button onClick={addToBasket}>Add to Basket</button> */}

    <HeroCart
    onClick={addToBasket}
    price={price}
    
       
    
    
    
    />


    </div>
  )
}

export default HeroProduct




function useHover() {
  const [value, setValue] = useState(false);
    
  // Wrap in useCallback so we can use in dependencies below
  const handleMouseOver = useCallback(() => setValue(true), []);
  const handleMouseOut = useCallback(() => setValue(false), []);

  // Keep track of the last node passed to callbackRef
  // so we can remove its event listeners.
  const ref = useRef();
  
  // Use a callback ref instead of useEffect so that event listeners
  // get changed in the case that the returned ref gets added to
  // a different element later. With useEffect, changes to ref.current
  // wouldn't cause a rerender and thus the effect would run again.
  const callbackRef = useCallback(
    node => {
      if (ref.current) {
        ref.current.removeEventListener("mouseover", handleMouseOver);
        ref.current.removeEventListener("mouseout", handleMouseOut);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener("mouseover", handleMouseOver);
        ref.current.addEventListener("mouseout", handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, value];
}