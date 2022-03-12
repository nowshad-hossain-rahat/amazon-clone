import React from 'react';
import BasketItem from '../components/BasketItem';
import { useStateValue } from '../StateProvider';
import './Payment.css';

function Payment() {

    const [{basket, currentUser}, dispatch] = useStateValue();


    const emptyBasket = <div className='empty-basket'>
        <span>Nothing in your basket!</span>
        <i className="fa fa-shopping-basket"></i>
    </div>;


    return <div className="payment">
        <div className="payment-container">

            <div className="payment-header">
                Checkout ({basket.length + ' items'})
            </div>

            <div className="payment-section">

                <div className="payment-section-left">
                    <h3 className="payment-section-title">
                        Delivery Address
                    </h3>
                </div>

                <div className="payment-section-right">

                    <span className='deliver-user-email'>{currentUser?currentUser.email:'Guest'}</span>
                    <p className="delivery-address">
                        Bawni, Sreepur, Gazipur
                        <span>Dhaka, Bangladesh</span>
                    </p>

                </div>

            </div>


            <div className="payment-section">

                <div className="payment-section-left">
                    <h3 className="payment-section-title">
                        Review items & delivery
                    </h3>
                </div>

                <div className="payment-section-right">

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

        </div>
    </div>;

}

export default Payment;