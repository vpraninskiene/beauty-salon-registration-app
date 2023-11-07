import "../RegisterLinkCard/RegisterLinkCard.css";
import React from 'react';
import { Link } from "react-router-dom"
import { Button } from '../Button/Button';

export const RegisterLinkCard = () => {
    return (
        <div className='reg-card-wrapper'>
            <h3>New Administrator?</h3>
            <p>An admin account has privileges to manage services for clients. The Admin console is only available when you're signed in to an admin account. If you don't have access to an admin account, get help from IT</p>
            <Link to="/register">
                <Button theme="secondary" title="Create an account"/>
            </Link>
        </div>
    );
}