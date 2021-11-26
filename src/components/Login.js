import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();

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
        <Button className={classes.loginButton}>
            Login
        </Button>
        <Button 
        className={classes.loginGoogle} >
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
