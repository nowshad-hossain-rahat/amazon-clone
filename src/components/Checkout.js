import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from '../StateProvider';
import BasketItem from './BasketItem';

export default function Checkout(){

    const [{basket, currentUser}, dispatch] = useStateValue();

    let subtotal = 0;
    basket.forEach((item) => { subtotal += item.price; });

    const emptyBasket = <div className='empty-basket'>
        <span>Nothing in your basket!</span>
        <i className="fa fa-shopping-basket"></i>
    </div>;

    return (
        <div className="checkout">

            <div className="checkout-left">

                <img className='ad-banner' src='ad-banner.jpg' />

                <div className="basket">

                    <h3>Hello, {currentUser ? currentUser.email.split('@')[0]+'!':'Guest!'}</h3>

                    <h2 className="basket-title">
                        Your Shopping Basket
                    </h2>

                    {
                        (basket.length === 0) ? emptyBasket:basket.map((item, index) => {

                            return <BasketItem 
                                key={`basketItem-${index}-${item.id}`}
                                index={index} 
                                id={item.id} 
                                title={item.title} 
                                price={item.price} 
                                rating={item.rating} 
                                image={item.image} 
                            />;

                        })
                    }

                </div>

            </div>

            <div className="checkout-right">

                <Subtotal items={basket} subtotal={subtotal} />

            </div>

        </div>
    );

}