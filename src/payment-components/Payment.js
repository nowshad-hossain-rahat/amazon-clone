import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Link, useNavigate } from 'react-router-dom';
import BasketItem from '../components/BasketItem';
import { useStateValue } from '../StateProvider';
import './Payment.css';
import axios from '../axios';


function Payment() {

    const [{basket, currentUser}, dispatch] = useStateValue();
    
    // getting the total price
    let totalPrice = 0;
    [...basket].map((item) => { totalPrice += item.price; return item; });

    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [proccessing, setProccessing] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(null);


    useEffect(() => {
        
        const getClientSecret = async () => {

            const response = await axios({
                method: 'POST',
                url: `/payments/create?total=${totalPrice * 100}`
            });

            setClientSecret(response.data.clientSecret || response.data.error);

            console.log(response);

        }

        getClientSecret();

    }, [basket]);
    


    const handlePaymentSubmit = async e => {

        e.preventDefault();
        setProccessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            // payment confirmation
            setSucceeded(true);
            setError(null);
            setProccessing(false);

            navigate('/orders');

        });

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

                <div className="payment-section-left">
                    <h3 className="payment-section-title"> Payment </h3>
                </div>
                
                <div className="payment-section-right">

                    <form onSubmit={handlePaymentSubmit}>
                        <CardElement onChange={handleCardChange} />
                        <div className="order-total-info">
                            <h4>Order Total : ${totalPrice.toFixed(2)}</h4>
                        </div>
                        <button disabled={proccessing || disabled || succeeded} type="submit">
                            {proccessing ? 'Proccessing...':'Buy Now'}
                        </button>
                    </form>
                    
                    {error ? <div className='error-msg'>{error}</div>:null}

                </div>

            </div>


        </div>
    </div>;

}

export default Payment;