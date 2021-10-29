import React, { useState } from "react";
import firebase from "firebase";

export default function Update( {doc}) {
    const [value, setValue] = useState("");
    const db = firebase.firestore();

    const getValue = (event) => {
        setValue(event.target.value);
    };

    const updateValue = () => {
        db.collection("values")
        .doc(doc)
        .update({
            value: value,
        })
        .then(function () {
            console.log("Document successfully updated");
        })
        .catch(function (error) {
            console.error("Error udpating document: ", error)
        });
    };


    return (
        <div>
            <input onClick={getValue} type='text' />
            <button onClick={updateValue}>Update</button>
        </div>
    );
};