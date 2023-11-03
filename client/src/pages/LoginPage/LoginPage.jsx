import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';


export const LoginPage = () => {
  return (
    <div>
       <Link to="/register">Registration</Link>
        <h1>Login</h1>
        <LoginForm/>
    </div>

  )
}