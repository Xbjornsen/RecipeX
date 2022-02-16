import React, { useState } from "react";
import firebase from "firebase";
import { Button, TextField } from '@material-ui/core';



const Add = () => {
    const [value, setValue ] = useState("");
    const db = firebase.firestore();

    const getValue = (event) => {
        setValue(event.target.value); 
    };
    
    const addValue = () => {
        db.collection("values")
        .doc(value)
        .set({
            value: value,
        })
        .then(function () {
            console.log("Value successfully written!");
        })
        .catch(function (error) {
            console.log("Error writing Value: ", error);
        });
    };



    return ( 
        <div >
            <TextField variant="outlined" onBlur={getValue} type='text' />
            <Button type='button' onClick={addValue}>Add</Button>

        </div>
    )
}

export default Add; 