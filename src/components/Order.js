import React from 'react';
import './Order.css';
import OrderItem from './OrderItem';
import { datetime, beautifyDateTimeStr } from '../functions';

function Order({order}) {


    return <div className="order-items">
        
        <div className="order-info">
            <span>Date : <i>{beautifyDateTimeStr( datetime(order.created) )}</i></span>
            <span>Delivered : <i>No</i></span>
            <span>Order ID : <i>{order.id}</i></span>
        </div>

        {
            order?.basket.map((orderItem, index) => {
                return <OrderItem 
                    key={index}
                    id={orderItem.id}
                    title={orderItem.title}
                    image={orderItem.image}
                    rating={orderItem.rating}
                    price={orderItem.price}
                />
            })
        }

        <div className="order-total">
            Order Total : {order.currency === 'usd' ? '$':'EUR'}{order.amount.toFixed(2)}
        </div>

    </div>

}

export default Order;