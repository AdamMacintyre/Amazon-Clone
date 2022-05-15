import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  // we can change it to the local we got it from the terminal, from 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
  baseURL: 'http://localhost:5001/fir-27c8b/us-central1/api'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;
