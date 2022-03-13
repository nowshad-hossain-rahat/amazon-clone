const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51JtYi0H83HjgsvTjsF1tDuZF3uinLsXzdaVrL4fJhHAfvLE9O1EtMc9RchpBlcHkH7amsTsBYbTTELOl824FpcNP00SQbzdN1g');

// --> API

// --> APP CONFIG
const app = express();

// --> MIDDLEWARES
app.use(cors({origin: true}));
app.use(express.json());

app.post('/payments/create', async function(req, res){

    const total = req.query.total;
    console.log('Got a payment request of $'+total);

    if(total >= 1){

        const paymentIntent = await stripe.paymentIntents.create({
            amount: parseInt(Math.round(total)), // subunit of the currency
            currency: 'usd'
        });

        res.status(201).send({
            clientSecret: paymentIntent.client_secret
        });

    }else{

        res.status(200).send({
            clientSecret: null,
            error: 'invalid_request_integer'
        });

    }

});

// --> Listen
exports.api = functions.https.onRequest(app);
