import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './auth-components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './payment-components/Payment';

function App(){

    const [state,  dispatch] = useStateValue();
    const stripePromise = loadStripe('pk_test_51JtYi0H83HjgsvTjFCtgvPgQxemP7y3npfqAa1ufCwlnTt2I0IY4yfGnQ7xSxYWy4pCe9nvoYU7hn66EWd9U9e3V00G94D7w2P');

    // this will only run once when the app gets loaded
    useEffect(() => {

        // when anything will be changed in authentication
        onAuthStateChanged(auth, (user) => {

            if(user){
                // if logged in or was logged in, then add as curren user into the data layer
                dispatch({
                    type: 'SET_CURRENT_USER',
                    currentUser: user
                });

            }else{

                dispatch({
                    type: 'SET_CURRENT_USER',
                    currentUser: null
                });

            }

        });

    }, []);

    return (
        <Router>

            <Routes>

                <Route 
                    path='/login' 
                    element={<Login />} 
                />

                <Route 
                    path='/checkout' 
                    element={
                        <>
                            <Header />
                            <Checkout />
                        </>
                    } 
                />
                
                <Route 
                    path='/payment' 
                    element={
                        <>
                            <Header />
                            <Elements stripe={stripePromise}>
                                <Payment />
                            </Elements>
                        </>
                    } 
                />

                <Route 
                    path='/' 
                    element={
                        <>
                            <Header />
                            <Home />
                        </>
                    }  
                />

            </Routes>
        </Router>
    );

}

export default App;