import React from 'react';
import './Home.css';
import ProductList from './ProductList';

function Home(){

    return (
        <div className='home'>
            <div className="home-container">

                <div className="banner">
                    <img src="banner.jpg" alt="Banner" />
                </div>

                <ProductList />

            </div>
        </div>
    );

}


export default Home;