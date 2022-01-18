import React, { useEffect, useState } from "react";
import fire from '../../firebase'
import LogingForm from "../LoginForm";
import Home from "../Home";
import { CircularProgress } from "@material-ui/core";
import { set } from "react-hook-form";



const LoginAuth = () => {
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
    const [loading, setLoading] = useState(false);

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
            .catch(err => {
                switch (err.code) {
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
            .catch(err => {
                switch (err.code) {
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
    const IsLoading = () => {
        if(loading) {
            <CircularProgress/> 
        } else {
            setLoading(false);
        }
    };

    const authListener = () => {
        setLoading(true);
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
                setLoading(false)
            } else {
                setUser("");
            }
        });
    };


    useEffect(() => {
        authListener();
    }, [])

    return (
        <div >
            {/* {loading ? (<CircularProgress size={65} color="secondary"
            sx={{
                align: "center",
                top: -6,
                left:-6,
                zIndex: 1,
            }}/>) : (<></>)}  */}
            {user ? (
                <></>
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