import React from 'react';
import './Product.css';

function Product() {

    return (
        <div className="product">
            
            <div className="product-info">

                <a className='product-title' href="#">Fiodio Mechanical Gaming Keyboard, LED Rainbow Gaming Backlit, 104 Anti-ghosting Keys, Quick-Response Black Switches, Multimedia Control for PC and Desktop Computer, with Removable Hand Rest</a>
                
                <p className="product-price">
                    <small>$</small>    
                    <strong>59<sup>99</sup></strong>
                </p>

                <div className="product-rating">
                    <span ><i className="fa fa-star"></i></span>
                    <span ><i className="fa fa-star"></i></span>
                    <span ><i className="fa fa-star"></i></span>
                    <span ><i className="fa fa-star"></i></span>
                    <span className='negative'><i className="fa fa-star"></i></span>
                </div>

            </div>

            <img src="keyboard.jpg" alt="Product Image" className="product-image" />

            <button className="add-to-basket-btn">Add to basket</button>

        </div>
    );

}

export default Product