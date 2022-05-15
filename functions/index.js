const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51KcoRpI5nIfkAOJXTQmzDGmLpeH0NaP0aIDaCuNvsWURs4KmAeek2b1iDbEXLYCLrYhDNLIW6Smgv8uENMxVmlDk00JGUA14Cx')


// Set Up API


// API


// app config
const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // subunits of the currency
        currency: "usd",
    });

    // ok its good - it created something
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})


// Listen command

// this is where cloud functions come into play
exports.api = functions.https.onRequest(app)

//Example endpoint from the terminal after safeEmulator command
// http://localhost:5001/fir-27c8b/us-central1/api