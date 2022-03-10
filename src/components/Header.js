import React from 'react';
import './Header.css';
import ShoppingBasketIcon from './ShoppingBasketIcon';

function Header(props){

    return (
        <header>
            <img className='logo' src={props.logo} alt="Amazon" />
            
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

                <div className="header-option basket-icon">
                    <ShoppingBasketIcon />
                    <span className="shoping-basket-item-counter">0</span>    
                </div>

            </nav>

        </header>
    );

}

export default Header;