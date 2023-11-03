import React from 'react'
import authStore from '../../stores/authStore/authStore';
import { useNavigate } from 'react-router-dom';



export default function RegisterForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        await store.register();
        navigate("/login");
    }

    return (
        <form onSubmit={handleRegister}>
            <input onChange={store.updateRegisterForm} value={store.registerForm.fname} type="text" name="fname" />
            <input onChange={store.updateRegisterForm} value={store.registerForm.email} type="text" name="lname" />
            <input onChange={store.updateRegisterForm} value={store.registerForm.email} type="email" name="email" />
            <input onChange={store.updateRegisterForm} value={store.registerForm.password} type="password" name="password" />
            <button type='submit'>Submit</button>
        </form>
      )
}
