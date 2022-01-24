import React, {useState, useEffect } from "react";
import { Button, makeStyles, TextField, Paper, Typography} from "@material-ui/core";
import fire from "../firebase";
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

  
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
  
  
    const clearInputs = () => {
      setEmail("");
      setPassword("");
    };
  
    const clearErrors = () => {
      setEmailError("");
      setPasswordError("");
    };
    const handleLogin = () => {
      clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
            default:
              break;
          }
        });
    };
    const handleSignup = () => {
      clearErrors();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
            default:
              break;
          }
        });
    };
    
    const handleLogout = () => {
      console.log("signout called");
      fire.auth().signOut();
    };

      
   const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);;
        } else {
          setUser("");
        }
      });
    };
  
    useEffect(() => {
      authListener();
    },[]);



  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Container className={classes.container} maxWidth="sm">
        <Paper elevation={3} className={classes.paper} >
        {user ? (<><Button onClick={handleLogout}>Logout</Button></>) : (<>
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
            </>
            )}
        </Paper>

      </Container>
        
    </div>
  );
}

export default LogingForm;
