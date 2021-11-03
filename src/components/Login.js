import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "./Authentication/Authentication";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(8),
  },
  login: {
    height: 100,
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "#dcdcdc",
    padding: 30,
  },
}));

function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading ] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // loading spinner
      return;
    }
    if (user) history.replace("/dashboard");
  }, [user, loading, history]);

  return (
    <div className={classes.login}>
      <div className={classes.loginContainer}>
        <input
          type="password"
          className={classes.loginTextBox}
          value={password}
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="E-mail Address"
        ></input>
        <input
        type="password"
        className={classes.loginTextBox}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password">
        </input>
        <Button className={classes.loginButton}
        onClick={() => signInWithEmailAndPassword(email, password)}> 
            Login
        </Button>
        <Button 
        className={classes.loginGoogle} onClick={signInWithGoogle}>
            Login with Google
        </Button>
        <div>
            <Link  to="/reset">Forgot Password?</Link>
        </div>
        <div>
            Don't have an account? <Link to="/register">Register</Link> now. 
        </div>
      </div>
    </div>
  );
}

export default Login;
