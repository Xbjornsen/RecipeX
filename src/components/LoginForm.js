import React, { useEffect, useState } from "react";
import { Button, makeStyles, TextField, Paper, Typography} from "@material-ui/core";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexgrow: 1,
  },

  container: {
    display: "flex",
    padding: theme.spacing(4),
    justifyContent: 'center',
    minWidth: '40%',
  },
  paper: { 
    alignContent: "center",
    padding: theme.spacing(1),
  },
  login: {
    padding: theme.spacing(2),
    flexWrap: 'wrap',
  },
  loginButton: {
    width: "100%",
    fontSize: 14,
  },
  errorMsg: {
    color: theme.palette.warning.dark,
    fontSize: 12,
    paddingTop: theme.spacing(1),
    flexWrap: 'wrap',
    flexDirection: 'column',

  }
}));

const LogingForm = (props) => {

  const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="sm">
        <Paper elevation={3} className={classes.paper} >
          <Typography variant="h4" align="center" >Sign in</Typography> 
          <div className={classes.login} >
            <TextField 
            id="standard-basic" 
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <Typography className={classes.errorMsg}>{emailError}</Typography>

            </div>
            <div className={classes.login}>
            <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            required
            variant="standard"
            value={password}
            onChange={(e => setPassword(e.target.value))}/>
            <Typography className={classes.errorMsg} >{passwordError}</Typography>
            </div> 
            <div className={classes.login}>
              {hasAccount ? (
                <>
                  <Button className={classes.loginButton}
                    onClick={handleSignup}
                    color="primary">Sign Up</Button>
                  <Typography variant="body1" >Have an account? 
                    <Button onClick={() => setHasAccount(!hasAccount)}> Sign in</Button>
                  </Typography>
                </>
              ) : (
                <>
                    <Button className={classes.loginButton}
                    onClick={handleLogin}
                    color="primary" >Sign In</Button>
                  <Typography variant="body1" >Don't have an account? 
                    <Button component="span" onClick={() => setHasAccount(!hasAccount)}> Sign up</Button>
                  </Typography>
                </>
              )}
            </div>
        </Paper>

      </Container>

    </div>
  );
}

export default LogingForm;
