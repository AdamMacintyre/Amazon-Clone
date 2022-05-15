import React, { useState, useEffect } from 'react'
import './Home.css'
import Product from '../Product'
import FilterPanel from '../filter/FilterPanel';
import { productData } from '../productIndex'




function Home() {

 
  const [ product, setProduct ] = useState(productData)
  const [ selectedPrice, setSelectedPrice ] = useState([0, 3000]);
  const [ textPrice, setTextPrice ] = useState([0,1000000])

  const [category, setCategory] = useState([
    { id: 1, checked: false, label: 'cpu' },
    { id: 2, checked: false, label: 'gpu' },
    { id: 3, checked: false, label: 'monitor' },
  ]);

  const handleChangeChecked = (id) => {
    const categoryStateList = category;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategory(changeCheckedCategory);
  };


  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };


  
  const applyFilters= () => {
      let updatedList = productData;


      // Category Filter
      const categoryChecked = category
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

      if (categoryChecked.length) {
        updatedList = updatedList.filter((item) =>
          categoryChecked.includes(item.category)
        );
      }

      // Price Filter
      const minPrice=selectedPrice[0]
      const maxPrice=selectedPrice[1]

      updatedList=updatedList.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
        )


    setProduct(updatedList)
  }

  useEffect(()=>{
      applyFilters();
  },[selectedPrice, category])

  return (
    <div className='home'>
      <FilterPanel
      changePrice={handleChangePrice}
      selectedPrice={selectedPrice}
      changeChecked={handleChangeChecked}
      category={category}
       
      
      />


        <div className='home__container'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42868422_.jpg' alt='' />

            <div className='home__row'>

            {product.map((id) => {
                            return (
                              <Product 
                              id={id}
                              title={id.title}
                              price={id.price}
                              rating={id.rating}
                              image={id.image}
                              link={id.link}

                         
                            />
                            )
                        })}
            </div>

            <div className='home__row'>

            {/* {resultsFound ? <List list={list} /> : <EmptyView />} */}

            </div>
            
            {/* <div className='home__row'>
      

            </div>

            <div className='home__row'>
                <Product
                id="6"
                 title='ARCTIC Liquid Freezer II 280 - Multi Compatible All-in-One CPU AIO Water Cooler'
                 price={108.99}
                 rating={4}
                 image='https://m.media-amazon.com/images/I/51xJ+YwK+qL._AC_SY300_SX300_.jpg'
                 />
            </div> */}
        </div>
    </div>
  )
}

export default Home;