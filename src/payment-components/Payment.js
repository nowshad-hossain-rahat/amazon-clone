import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
import BasketItem from '../components/BasketItem';
import { useStateValue } from '../StateProvider';
import './Payment.css';


function Payment() {

    const [{basket, currentUser}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);



    const handlePaymentSubmit = e => {



    }


    const handleCardChange = e => {



    }


    const emptyBasket = <div className='empty-basket'>
        <span>Nothing in your basket!</span>
        <i className="fa fa-shopping-basket"></i>
    </div>;


    return <div className="payment">
        <div className="payment-container">

            <div className="payment-header">
                Checkout <Link to={'/checkout'}>({basket.length + ' items'})</Link>
            </div>

            <div className="payment-section">

                <div className="payment-section-left">
                    <h3 className="payment-section-title">
                        Delivery Address
                    </h3>
                </div>

                <div className="payment-section-right delivery-address">

                    <p className='deliver-email'>{currentUser?currentUser.email:'Guest'}</p >
                    <p>
                        Bawni, Sreepur, Gazipur
                    </p>
                    <p>Dhaka, Bangladesh</p>

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


            <div className="payment-section">

                <div className="payment-section-right">
                    <h3 className="payment-section-title"> Payment </h3>
                </div>
                
                <div className="payment-section-right">

                    <form onSubmit={handlePaymentSubmit}>
                        <CardElement onChange={handleCardChange} />
                    </form>

                </div>

            </div>


        </div>
    </div>;

}

export default Payment;