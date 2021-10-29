import React, { useState } from "react";
import firebase from "firebase";

const Update = ({doc}) => {
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
            <input onBlur={getValue} type='text' />
            <button onClick={updateValue}>Update</button>
        </div>
    );
};

export default Update; 