import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import './Subtotal.css';

function Subtotal({items, subtotal}){

    const [{basket, currentUser}, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <>
            <div className="subtotal">
                <p>Subtotal ({items.length} items) : <strong>${parseFloat(subtotal).toFixed(2)}</strong></p>
                <small className="is-a-gift">
                    <input type="checkbox" name="is-a-gift" id="is-a-gift" />
                    <label htmlFor="is-a-gift">This order contains a gift</label>
                </small>
                <button disabled={items.length === 0} onClick={() => navigate(currentUser ? '/payment':'/login')} className="proceed-to-checkout">
                    Proceed to checkout
                </button>
            </div>
        </>
    );

}

export default Subtotal