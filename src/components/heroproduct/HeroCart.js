import React from 'react'
import './herocart.css'

import secure from '../../assets/img/secure.png'

function HeroCart({id, title, image, price, rating, onClick}) {

    
  



  return (
    <>
    <div className='hp__cart'>
       

    <p>$ {price}</p>
    <button onClick={onClick}>Add to Cart</button>



    <div className='hpCartSecure'>
      <span className='secureImg'><img src={secure} /></span>

      <span className='secureSpace'>  </span>
      
      <span>  Secure transaction  </span>
    </div>
    </div>

   
    </>
  )
}

export default HeroCart