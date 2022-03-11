import React from 'react';
import { useStateValue } from '../StateProvider';
import './Product.css';

function Product({id, title, price, rating, image}) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {

        // dispatch the item into the data layer

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {id, title, price, rating, image}
        });

    };

    let priceBeforeDot = parseFloat(price).toString().split('.')[0];
    let priceAfterDot = parseFloat(price).toString().split('.')[1];

    let stars = [];

    for(let i = 1; i <= rating; i++){
        stars.push(<span key={i}><i className="fa fa-star"></i></span>);
    }

    if(rating < 5){
        for(let i = rating; i < 5; i++){
            stars.push(<span key={i+1} className='negative'><i className="fa fa-star"></i></span>);
        }
    }

    return (
        <div className="product" key={id}>
            
            <div className="product-info">

                <a className='product-title' href="#">
                    {title.substr(0, 100) + '...'}
                </a>
                
                <p className="product-price">
                    <small>$</small>    
                    <strong>
                        {priceBeforeDot}
                        <sup>{priceAfterDot}</sup>
                    </strong>
                </p>

                <div className="product-rating">
                    {stars}
                </div>

            </div>

            <img src={image} alt="Product Image" className="product-image" />

            <button onClick={addToBasket} className="add-to-basket-btn">Add to basket</button>

        </div>
    );

}

export default Product