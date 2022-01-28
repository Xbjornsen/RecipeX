import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import fire from "../firebase";


const Logout = (user) => {



    const handleLogout = () => {

        console.log("signout called");
        fire.auth().signOut();
      };

    return (
        <div>
            <Button onClick={handleLogout}>Signout</Button>
        </div>
    )
}

export default Logout