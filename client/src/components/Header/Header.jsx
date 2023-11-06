import React from 'react';
import { Link } from 'react-router-dom';
import "../Header/Header.css";
import logo from "../../assets/logo.png";

export const Header= () => {
    return (
        <div className='header-wrapper'>
            <div className='header-content-wrapper'>
                <Link to="/">
                    <img className='logo-img' src={logo} alt="logo" />
                    </Link>
                <div className='title-wrapper'>
                    <h1>Sakura Blossom</h1>
                    <p>beauty salon</p> 
                </div>
            </div>  
        </div>   
    );
}