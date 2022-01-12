import React, { useEffect, useState } from "react";
import fire from '../../firebase'
import LogingForm from "../LoginForm";
import HeaderMenu from "../HeaderMenu";
import { CircularProgress } from "@material-ui/core";



const LoginAuth = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [loading, isLoading] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }
  const handleLogin = () => {
    clearErrors(); 
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  }
  const handleSignup = () => {
    clearErrors(); 
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err =>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        clearInputs();
        setUser(user);   
      }else{
        setUser("");
      }    
    });
  };

  
  useEffect(() => {
    authListener();
  }, [])

  return ( 
      <div>
          { user ? (
            <><HeaderMenu handleLogout={handleLogout}></HeaderMenu></>
          ) : (
            <LogingForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            ></LogingForm>
          )}
      </div>
  );
}

export default LoginAuth;