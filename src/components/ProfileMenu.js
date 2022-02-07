import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  makeStyles,
  Menu,
  IconButton,
  Button,
  MenuItem,
  CircularProgress,
  Modal,
} from "@material-ui/core";
import { AccountBox } from "@material-ui/icons";
import fire from "../firebase";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  Menu: {},
  MenuItem: {},
  menuButton: {
    paddingLeft: 10,
    fontSize: 54,
  },
}));

const Profile = () => {
  const [user, setUser] = useState("");
  const [loaded, setLoaded] = useState(true);
  const [loading, setLoading] = useState(false);

  const firebaseCheckAuth = () => {
    setLoading(true);
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setTimeout(() => {
          setLoading(false);
          setLoaded(true);
        }, 500);
      } else {
        setUser("");
        setLoaded(false);
      }
    });
  };
  const handleLogout = () => {
    console.log("signout called");
    fire.auth().signOut();
    setUser("");
  };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuOpen = (event) => {
    firebaseCheckAuth();
    setAnchorEl(event.currentTarget);
  };

  const menuId = "profileMenu";

  return (
    <div>
      <IconButton edge="start" aria-label="menu" onClick={handleMenuOpen}>
        <AccountBox className={classes.menuButton} />
      </IconButton>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Button component={NavLink} to="/Account">
            Account
          </Button>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          {loaded ? (
            <>
                {loading ? (
                  <CircularProgress
                    size={12}
                    sx={{
                      color: green[500],
                      position: "absolute",
                      top: "50%",
                      left: '50%'
                    }}
                  >
                  </CircularProgress>
                ) : (<Button onClick={handleLogout}>Signout</Button>)}
              
            </>
          ) : (
            <>
              <Button component={NavLink} to="/LoginForm">
                Signin
              </Button>
            </>
          )}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
