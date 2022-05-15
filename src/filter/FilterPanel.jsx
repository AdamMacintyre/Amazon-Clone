import React from 'react'

import Slider from '@mui/material/Slider';
import { makeStyles } from '@material-ui/core/styles'
import './filter.css'


import CheckBoxProton from './checkboxproton/CheckBoxProton';
import PriceProton from './price/PriceProton'




const useStyles = makeStyles({
  root: {
    width: 300,
  },
  thumb: {
    color: `purple`,
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: `purple`,
  },
});

function valuetext(value) {
  return `${value}`;
}

const FilterPanel = ({selectedPrice, changePrice, changeChecked, category}) => {
  const classes = useStyles();





  


  return (
    <div className='filterPanel__container'>

      {/* <h2>Filter By Price</h2>
            <Slider
            value={selectedPrice}
            onChange={changePrice}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={3000}
         
            step={5}

            classes={{
                thumb: classes.thumb,
                rail: classes.rail,
                track: classes.track,
              }}
            /> */}

            <div className='input-group'>
              <p className='filter__label'>Select By Category</p>
              {category.map((category) => (
                <CheckBoxProton
                  key={category.id}
                  category={category}
                  changeChecked={changeChecked}
                />
              ))}
            </div>

            <div className='input-group'>
           
              <PriceProton 
              selectedPrice={selectedPrice}
              changePrice={changePrice}
              
              
              />
            </div>

            

           


    </div>
  )
}

export default FilterPanel