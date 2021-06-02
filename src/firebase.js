import firebase from 'firebase/app'
import 'firebase/firestore'


 // initializse firebase
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA94Jk8fbit5X4DWDfr3gxPvChZaB7aEWI",
    authDomain: "recipex-40b63.firebaseapp.com",
    databaseURL: "https://recipex-40b63-default-rtdb.firebaseio.com",
    projectId: "recipex-40b63",
    storageBucket: "recipex-40b63.appspot.com",
    messagingSenderId: "1047081265154",
    appId: "1:1047081265154:web:5cfc80984ac9514f70df1b",
    measurementId: "G-YFMRHES7NN"
  });

 var dataBase = firebaseApp.firestore();
 
export { dataBase }

  export default firebase