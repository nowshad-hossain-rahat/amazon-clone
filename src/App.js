import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';

function App(){

    return (
        <Router>

            <Header />

            <Routes>

                <Route 
                    path='/checkout' 
                    element={<Checkout />} 
                />

                <Route 
                    path='/' 
                    element={<Home />} 
                />

            </Routes>
        </Router>
    );

}

export default App;