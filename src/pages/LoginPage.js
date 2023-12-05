import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/data';

function LoginPage({loginSuccess}){
    async function onLogin({email, password}){
        const {error, data} = await login({email, password});

        if(!error){
            loginSuccess(data);
        }
    }

    return(
        <section className='login_page'>
            <h2>Sign-in</h2>
            <LoginInput login={onLogin} />
            <p>Dont Have Account?<Link to='/register'> Register</Link></p>
        </section>
    );

}

LoginPage.propTypes ={
    loginSuccess:Proptypes.func.isRequired,
}

export default LoginPage;