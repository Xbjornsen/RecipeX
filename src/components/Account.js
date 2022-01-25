import { Button } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import fire from "../firebase";
import LoginForm from './LoginForm';

const Account = (user) => {

    const handleLogout = () => {
        console.log("signout called");
        fire.auth().signOut();
      };

    return (
        <div>
            {user ?  (<><Button onClick={handleLogout}>Signout</Button></>) : (<><NavLink  to="/LoginForm" /></>)}
            
        </div>
    )
}

export default Account;