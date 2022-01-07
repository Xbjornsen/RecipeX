import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';
import fire from '../firebase'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexgrow: 1,
  },
  container: {
    display: "flex",
    postion: "absolute",
    width: "100%",
    height: "100%",
  },
}));

const LoginPage = (props) => {

  const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props; 

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Container>
        <Paper elevation={3} >
          {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")}></input>
          <inut {...register("password")}></inut>
          <input type="submit"></input>
        </form> */}
          <div>Login Page</div>
        </Paper>

      </Container>

    </div>
  );
}

export default LoginPage;
