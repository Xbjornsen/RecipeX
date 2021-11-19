import React, { useState } from "react";
import firebase from "firebase";



const Add = ({data}) => {
    console.log(data)
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

        </div>
    )
}

export default Add; 