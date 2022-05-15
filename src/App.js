import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import Orders from './Orders'
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'; // update path to your firestore config
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Amd5900x from './pages/productpages/cpu/Amd5900x';
import Evga3900ti from './pages/productpages/gpu/Evga3900ti';

const promise = loadStripe(
  "pk_test_51KcoRpI5nIfkAOJX25LldzukIjPoS4ku84d7lNFzZBKjWidFkTUgtxo4pd3n7Rg7guzssSzVmBe8L2l0OSK7IjiB00mphIp80V"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    // This is a whispherer, it's always looking for the user
    onAuthStateChanged(auth, authUser => {
      console.log('user is ', authUser);
      
      // this line says 'if there is a authUser logged in' = "if (authUser)" line below
      // sets the condition for checking if the user logged in so then you can send them data
      if (authUser) {
        /// this will shoot the user into teh data layer
        // if they log out it will remove them
        dispatch({
          // This is a object
          // we dispatch the "SET_USER" action
          // it shoots them into the data layer
          type:"SET_USER",
          user: authUser
        })
      } else {
        // User Logout
        dispatch({
        type:'SET_USER',
        user: null
      })
    }
  })
  },[])

  return (
    //BEM naming convention
  <Router>
    <div className="App">
    
      <Routes>

        <Route exact path='orders' 
          element={<><Header /> <Orders/> </>} />

          <Route exact path='login' 
          element={<Login/>} />
            
          
          <Route exact path='/checkout' 
          element={<><Header /> <Checkout /> </>} /> 

          <Route exact path='/payment' 
          element={<><Header /> <Elements stripe={promise}><Payment /> </Elements></>} /> 


          {/* DEFAULT ROUTE HAS TO BE AT THE BOTTOM OR IT WON'T BE PICKED UP */}
          <Route exact path='/'  element={<><Header /> <Home/> </>} />





          <Route exact path='/amd5900x' element={<><Header /><Amd5900x /></>} />
          <Route exact path='/evga3090ti' element={<><Header /><Evga3900ti /></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
