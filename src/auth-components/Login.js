import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';

function Login() {
    
    const [state] = useStateValue();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const signIn = (evt) => {

        evt.preventDefault();

        signInWithEmailAndPassword(auth, email, pass)
            .then((user) => {
                alert('Login successful!');
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            });

    };


    const signUp = (evt) => {

        evt.preventDefault();
        
        createUserWithEmailAndPassword(auth, email, pass)
            .then((user) => {
                // success
                alert('Account created successfully!');
                // redirect to home
                navigate('/');

            })
            .catch((err) => {
                alert(err.message);
            });

    };

    return <div className="login-form">

        <Link to={'/'}>
            <img className='login-form-logo' src="/logo.png" alt="Amazon" />
        </Link>

        <form method='post'>

            <h1 className="login-form-title">Sign In</h1>

            <label htmlFor="login-email">E-mail</label>
            <input 
                onChange={(evt) => setEmail(evt.target.value)} value={email} 
                onKeyUp={(evt) => setEmail(evt.target.value)}
                type="email" 
                name="login-email" 
                id="login-email" 
                required
            />
            
            <label htmlFor="login-pass">Password</label>
            <input 
                onChange={(evt) => setPass(evt.target.value)}
                value={pass} 
                type="password" 
                name="login-pass" 
                id="login-pass" 
                required
            />

            <button onClick={signIn} id="login-submit-btn" type="submit">Sign In</button>

            <p className="login-form-notice">
                By signing-in you agree to Amazon's Conditions of Use & Sale. 
                Please see our Privacy Notice and our Cookie Notice and our interest-Based Ad Notice.
            </p>

            <button onClick={signUp} id="login-form-create-account-btn">Create your Amazon Account</button>

        </form>

    </div>;

}

export default Login