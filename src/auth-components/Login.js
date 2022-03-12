import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import { n } from 'nhrquery/nhrQuery';

function Login() {
    
    const [state] = useStateValue();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const signIn = (evt) => {

        evt.preventDefault();

        // validating form
        if(email === '' || pass === ''){
            alert('Fill the form correctly!');
            return;
        }

        // disabling the signIn and signUp buttons
        n('#login-submit-btn').text('Signing In...').disabled();
        n('#login-form-create-account-btn').disabled();

        signInWithEmailAndPassword(auth, email, pass)
            .then((user) => {

                // redirect to homepage
                navigate('/');
                
            })
            .catch((err) => {

                alert(err.message.replace('Firebase: ', ''));

            }).finally(() => {
                // enabling the signIn and signUp buttons
                n('#login-submit-btn').text('Sign In').enabled();
                n('#login-form-create-account-btn').enabled();
            });

    };


    const signUp = (evt) => {

        evt.preventDefault();

        // validating form
        if(email === '' || pass === ''){
            alert('Fill the form correctly!');
            return;
        }

        // disabling the signIn and signUp buttons
        n('#login-submit-btn').disabled();
        n('#login-form-create-account-btn').text('Creating an Amazon Account...').disabled();
        
        createUserWithEmailAndPassword(auth, email, pass)
            .then((user) => {

                // redirect to home
                navigate('/');

            })
            .catch((err) => {

                alert(err.message.replace('Firebase: ', ''));

            }).finally(() => {

                // enabling the signIn and signUp buttons
                n('#login-submit-btn').enabled();
                n('#login-form-create-account-btn').text('Create an Amazon Account').enabled();

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