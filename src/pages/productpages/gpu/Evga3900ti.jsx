import React, { useState } from 'react'

import { productData } from '../../../productIndex.js'

import HeroProduct from '../../../components/heroproduct/HeroProduct'

import imgt1 from '../../../assets/img/gpu/evga3090ti/3090ti1.jpg'
import imgt2 from '../../../assets/img/gpu/evga3090ti/3090ti2.jpg'
import imgt3 from '../../../assets/img/gpu/evga3090ti/3090ti3.jpg'
import imgt4 from '../../../assets/img/gpu/evga3090ti/3090ti4.jpg'

const Evga3900ti = () => {
  
  const [data, setData] = useState(productData[3])

  return (
    <div>
         <HeroProduct 
        imgt1={imgt1}
        imgt2={imgt2}
        imgt3={imgt3}
        imgt4={imgt4}
        id={data.id}
        title={data.title}
        image={data.image}
        price={data.price}
        rating={data.rating}
        brand={data.brand}

        
        
        
        />



    </div>
  )
}

export default Evga3900ti