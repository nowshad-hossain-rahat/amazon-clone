import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from '../StateProvider';
import BasketItem from './BasketItem';

export default function Checkout(){

    const [{basket}, dispatch] = useStateValue();

    let subtotal = 0;
    basket.forEach((item) => { subtotal += item.price; });

    return (
        <div className="checkout">

            <div className="checkout-left">

                <img className='ad-banner' src='ad-banner.jpg' />

                <div className="basket">

                    <h2 className="basket-title">
                        Your Shopping Basket
                    </h2>

                    {
                        (basket.length === 0) ? <p>Nothing in your basket!</p>:basket.map((item) => {

                            return <BasketItem 
                                key={item.id} 
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