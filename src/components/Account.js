import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";
import { SettingsEthernet } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import fire from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
  },
  paper: {
    alignContent: "center",
    margin: 10,
    justifyContent: "center",
    padding: 10,
    width: 360,
  },
  editButton: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    paddingRight: 10,
  },
  form: {
    padding: 10,
  },
  button: {
    display: "flex",
    justifyContent: "right",
  },
}));

const Account = (user) => {
  const classes = useStyles();
  const [userAccount, setUserAccount] = useState([]);
  const [edit, setEdit] = useState(Boolean);
  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    fetchData()
  }, []);

  const updateDetails = () => {
    fire.auth().currentUser.updateProfile({
      displayName: newValue,
    });
    fetchData(); 
    setTimeout(() => {
        setEdit(false);
    }, 700);
  };

  const editDetails = () => {
    setEdit(true);
  };

  const fetchData = async () => {
    const auth = fire.auth();
    const currentUser = auth.currentUser;
    setUserAccount(currentUser);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={2}>
        <Typography variant="h5">Account Information</Typography>
        {edit ? (
          <>
            {" "}
            <TextField
              id="standard-basic"
              label="Display name"
              variant="standard"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            ></TextField>
            <div className={classes.button}>
              <Button onClick={updateDetails} variant="outlined">
                Update
              </Button>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemText
                    primary="Display Name"
                    secondary={userAccount.displayName}
                  ></ListItemText>
                  <Button variant="outlined" onClick={editDetails}>
                    Edit Name
                  </Button>
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Email"
                    secondary={userAccount.email}
                  ></ListItemText>
                </ListItem>
              </List>
            </div>
          </>
        )}
      </Paper>
    </div>
  );
};

export default Account;
