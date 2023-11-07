import React from 'react';
import authStore from '../../stores/authStore/authStore';
import { useNavigate } from 'react-router-dom';
import "../RegisterForm/RegisterForm.css";
import { Button } from "../../components/Button/Button";


export default function RegisterForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        await store.register();
        navigate("/login");
    };

    return (
        <div className='registration-page-wrapper'>
            <div className='registration-card-internal'>
                <h3>Registration</h3>
                <form id='registration-form' onSubmit={handleRegister}>
                    <input onChange={store.updateRegisterForm} value={store.registerForm.fname} type="text" name="fname" placeholder='Enter First name...' required/>
                    <input onChange={store.updateRegisterForm} value={store.registerForm.lname} type="text" name="lname" placeholder='Enter Last name...' required/>
                    <input onChange={store.updateRegisterForm} value={store.registerForm.email} type="email" name="email" placeholder='Enter email...' required/>
                    <input onChange={store.updateRegisterForm} value={store.registerForm.password} type="password" name="password" placeholder='Enter password...' required/>
                    <Button theme="primary" title="Submit"/>
                </form>
            </div>
        </div> 
    );
}
