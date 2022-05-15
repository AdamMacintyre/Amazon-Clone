import React, {useState} from 'react';
import './Login.css';

import {Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'







function Login() {
    
    //allows to change the url
    const navigate = useNavigate();
    const [email, setEmail]   = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();


        signInWithEmailAndPassword(auth, email, password);
        if (auth) {
            //this forces a redirect
            navigate('/')
            // .catch (error => alert(error.message))
        }
        
        console.log('working')

        /// Does firebase login
    }

///sdk V8 
    // const register = e => {
    //     e.preventDefault();

    //     auth.createUserWithEmailAndPassword(auth, email, password).then((auth) => {
    //              // it successfully created a new user with
    //         // email and password
    //             console.log(auth);
    //         })
    //         .catch(error => alert(error.message))

    //     /// Does firebase register
    // }

    const register = e => {

        // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password);
        console.log(auth);
        if (auth) {
            //this forces a redirect
            navigate('/')

            // .catch(error => alert(error.message))
        };

        // .catch((e) => {
        //     alert(error.message);
        // });

        

    
    
    
      }  
      






  return (
    <div className='login'>
        <Link to='/'>
            <img 
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        </Link>


        <div className='login__container'>
            <h1>Sign In</h1>
            <form>

            <h5>E-Mail</h5>
            {/* The onchange puts the function into the "value={email} creating an almost circle" */}
            <input type='text' value={email}  onChange={e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button className='login__signInButton' type='submit' onClick={signIn}> Sign In</button>

            </form>
            <p> 
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button type='submit' onClick={register} className='login__registerButton'>Create your Amazon account</button>
        </div>
</div>
  );
};

export default Login;