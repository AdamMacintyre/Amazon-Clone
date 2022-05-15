import React, { useState, useEffect } from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from '../StateProvider';
import { auth } from '../firebase'
import {signOut} from 'firebase/auth'

import { productData } from '../productIndex';




function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            signOut(auth)
        }
    }




    const [list, setList] = useState(productData);
    const [resultsFound, setResultsFound] = useState(true);
    const [searchInput, setSearchInput] = useState('');

    const applyFilters = () => {
        let updatedList = productData;

        // Search Filter
        if (searchInput) {
            updatedList = updatedList.filter(
              (item) =>
                item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
                -1
            );
          }

          setList(updatedList);

          !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    }

    useEffect(() => {
        applyFilters();
      }, [ searchInput ]);


  return (
    <div className='header'>
        <Link to='/'>
            <img
                className='header__logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            />
        </Link>

        <div className='header__search'>
            <SearchIcon className='header__searchIcon' />
            <input
                className='header__searchInput'
                type='text'
                placeholder='What Are You Looking For...'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
           
        </div>

        <div className='header__nav'>
            {/* this lines says if there was no user only then
            do you push to the login page */}
            <Link to={!user && '/login'}>

                <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLineOne'>
                    Welcome <br /> {!user ? 'Guest' : user.email }
                    
                    </span>

                    <span className='header__optionLineTwo'>
                         {user ? 'Sign Out' : 'Sign In'}
                         </span>
                </div>

            </Link>

            <Link to='/orders'>
         
            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            </Link>
            
            <div className='header__option'>
                <span className='header__optionLineOne'>
                     Your</span>
                <span className='header__optionLineTwo'>
                     Prime</span>
            </div>

            <Link to='/checkout'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>
                        {/* question mark makes it not freak out if therse a error */}
                       {basket?.length}
                    </span>
                </div>
            </Link>

        </div>
    </div>
  )
}

export default Header;