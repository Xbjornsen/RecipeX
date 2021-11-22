import React, { useState } from "react";
import firebase from "firebase";


const db = firebase.firestore();
const Add = (data) => {
    db.collection("values")
        .doc(data)
        .set({
            value: data,
        })
        .then(function () {
            console.log("Value successfully written!");
        })
        .catch(function (error) {
            console.log("Error writing Value: ", error);
        });
};

export default Add;