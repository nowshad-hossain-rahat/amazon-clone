import { collection, doc, getDocs, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import Order from './Order';
import './Orders.css';

export default function Orders(){


    const [{basket, currentUser}, dispatch] = useStateValue();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);


    useEffect(() => {

        // if not logged in, then redirect to home page
        if(!currentUser){ navigate('/'); return; }

        // fetching the orders documents from firestore
        const getOrders = async () => {

            if(!currentUser){return;}

            onSnapshot(
                query(
                    collection(db, 'users', currentUser?.uid, 'orders'),
                    orderBy('created', 'desc')
                ),
                ({docs}) => {
                    setOrders(docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    })))
                }
            )

        }

        getOrders();

    });


    


    return <div className="orders">
        
        <h1 className='orders-title'>Your Orders</h1>

        <div className="order-item-list">

            {
                orders?.map((order, index) => {

                    return <Order order={order} />

                })
            }

        </div>
        
    </div>;

}