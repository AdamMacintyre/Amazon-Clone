import React, { useState } from 'react'

import { productData } from '../../../productIndex.js'
import HeroProduct from '../../../components/heroproduct/HeroProduct'


import imgt1 from '../../../assets/img/gpu/evga3090ti/3090ti1.jpg'
import imgt2 from '../../../assets/img/gpu/evga3090ti/3090ti2.jpg'
import imgt3 from '../../../assets/img/gpu/evga3090ti/3090ti3.jpg'
import imgt4 from '../../../assets/img/gpu/evga3090ti/3090ti4.jpg'


const Amd5900x = () => {

    const [data, setData] = useState(productData[0])

  return (
    <div>

        <HeroProduct 
        imgt1={imgt1}
        imgt2={imgt2}
        imgt3={imgt3}
        imgt4={imgt4}
        title={data.title}
        
        
        
        />



    </div>
  )
}

export default Amd5900x