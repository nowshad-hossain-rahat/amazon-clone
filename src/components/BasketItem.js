import { n } from 'nhrquery';
import React from 'react';
import { useStateValue } from '../StateProvider';
import './BasketItem.css';

export default function BasketItem({index, id, title, price, rating, image}) {

    const [state, dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {id, title, price, rating, image},
            index
        });

        // animate the basket icon
        n('.header-option.basket-icon i').addClass('put-item');
        setTimeout(() => {
            n('.header-option.basket-icon i').removeClass('put-item');
        }, 510);

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
        <div className="basket-item" id={`basket-item-${index}-${id}`}>
            
            <img src={image} alt="Basket Item Image" className="basket-item-image" />

            <div className="basket-item-info">

                <a className='basket-item-title' href="#">
                    {title.substr(0, 100) + '...'}
                </a>
                
                <p className="basket-item-price">
                    <small>$</small>    
                    <strong>
                        {priceBeforeDot}
                        <sup>{priceAfterDot}</sup>
                    </strong>
                </p>

                <div className="basket-item-rating">
                    {stars}
                </div>
                
                <button onClick={removeFromBasket} className="remove-from-basket-btn">Remove from basket</button>

            </div>

        </div>
    );

}