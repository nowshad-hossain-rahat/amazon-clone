import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './auth-components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './payment-components/Payment';

function App(){

    const [state,  dispatch] = useStateValue();

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
                            <Payment />
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