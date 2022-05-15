

//For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, } from 'firebase/firestore';





/// this is considered a object
const firebaseConfig = {

  apiKey: "AIzaSyC_u0k6Fqn8XbWDuxpVJvoVGQ5oYL6b1dQ",

  authDomain: "fir-27c8b.firebaseapp.com",

  projectId: "fir-27c8b",

  storageBucket: "fir-27c8b.appspot.com",

  messagingSenderId: "692964180484",

  appId: "1:692964180484:web:75fe18e1d73d153e80eb51",

  measurementId: "G-T4DT4Y6DQQ"


};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app)




export { db, auth};


