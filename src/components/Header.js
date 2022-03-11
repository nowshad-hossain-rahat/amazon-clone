import React from 'react';
import './Header.css';
import ShoppingBasketIcon from './ShoppingBasketIcon';
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProvider';


function Header(props){

    const [{basket}, dispatch] = useStateValue();

    return (
        <header>

            <Link to={'/'}>
                <img className='logo' src='logo-white.png' alt="Amazon" />
            </Link>
            
            <div className="header-search">
                <input type="text" name="s" id="s" placeholder='Search products...' />
                <button id="btn header-search-submit"><i className="fa fa-search"></i></button>
            </div>

            <nav className='header-nav'>
                
                <div className="header-option">
                    <span>Hello</span>
                    <a href="/signin">Sign In</a>
                </div>

                <div className="header-option">
                    <span>Returns</span>
                    <a href="/orders">& Orders</a>
                </div>

                <div className="header-option">
                    <span>Your</span>
                    <a href="/prime">Prime</a>
                </div>

                <Link to={'/checkout'}>
                    <div className="header-option basket-icon">
                        <ShoppingBasketIcon />
                        <span className="shoping-basket-item-counter">{basket.length}</span>    
                    </div>
                </Link>

            </nav>

        </header>
    );

}

export default Header;