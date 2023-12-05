import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/data';


function RegisterPage(){
    const navigate = useNavigate();

    async function onRegisterHandler(user){
        const {error} = await register(user);
        if (!error){
            navigate('/');
        }
    }

    return(
        <section className='register_app'>
            <h2>Create Your Account</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>You Have Account?<Link to='/'> Signin</Link></p>
        </section>
    )

}

export default RegisterPage;