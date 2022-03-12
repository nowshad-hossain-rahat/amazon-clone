import React from 'react';
import './Home.css';
import ProductList from './ProductList';

function Home(){

    return (
        <div className='home'>
            <div className="home-container">

                <div className="banner">
                    <div className="slider">
                        <img key={1} src="banner.jpg" alt="Banner 1" />
                        <img key={2} src="banner.jpg" alt="Banner 2" />
                        <img key={3} src="banner.jpg" alt="Banner 3" />
                    </div>
                </div>

                <ProductList />

            </div>
        </div>
    );

}


export default Home;