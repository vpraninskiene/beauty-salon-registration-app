import React from 'react'
import { useNavigate } from 'react-router-dom';
import authStore from '../../stores/authStore/authStore';
import { Button } from '../Button/Button';
import "../LoginForm/LoginForm.css";


export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();

      await store.login();

      navigate("/");
    };

  return (
    <div className='login-card-wrapper'>
      <h3>Welcome back!</h3>
      <p>Administrator Login</p>
      <form onSubmit={handleLogin}>
        <input onChange={store.updateLoginForm} value={store.loginForm.email} type="email" name="email" placeholder='Enter email...' required/>
        <input onChange={store.updateLoginForm} value={store.loginForm.password} type="password" name="password" placeholder='Enter password...' required />
        <div className='login-btn'>
          <Button theme="primary" title="Login"/>
        </div>
      </form>
    </div> 
  );
}