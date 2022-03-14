import React from 'react';
import './Header.css';
import ShoppingBasketIcon from './ShoppingBasketIcon';
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


function Header(props){

    const [{basket, currentUser}, dispatch] = useStateValue();

    // if there is user logged in, then just logout
    const handleSignOut = () => {

        if(currentUser){
            signOut(auth);
        }

    };

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
                
                <Link to={!currentUser && '/login'}>
                    <div onClick={handleSignOut} className="header-option">
                        <span>Hello, {currentUser ? currentUser.email.split('@')[0]+'!':'Guest!'}</span>
                        {currentUser ? 'Sign Out':'Sign In'}
                    </div>
                </Link>

                <Link to={'/orders'}>
                    <div className="header-option">
                        <span>Returns</span>
                        & Orders
                    </div>
                </Link>

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