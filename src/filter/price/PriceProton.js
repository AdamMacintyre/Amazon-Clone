import React from 'react'
import './priceproton.css'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



function PriceProton({selectedPrice, changePrice}) {
  return (
    <div className='priceProtonContainer'>
        <p className='filter__label'>Search by price</p>
        <div className='priceProton__innter'>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>

                <input
                  className='price__searchInput low'
                  type='text'
                  placeholder='Min...'
                  value={selectedPrice}
                  onChange={changePrice}
                />
             </FormControl>
             <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
                 <input
                  className='price__searchInput high'
                  type='text'
                  placeholder='Max...'
                  value={selectedPrice}
                  onChange={changePrice}
                /> 
            </FormControl>
        </div>
    </div>
  )
}

export default PriceProton
