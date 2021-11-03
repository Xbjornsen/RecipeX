import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Modal } from "@material-ui/core";
import Login from "./Login";

const useStyles = makeStyles((theme) => ({
  root: {},
  profileIcon: {},
  paper: {
    position: 'relative',
    top: '40%',
    left: '40%',

  },
  alert: {
    width: 400,
  },
}));

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);

  //const [auth, setAuth] = useState(false);

  const classes = useStyles();
  const isMenuOpen = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAlertClose = () => {
    setAlertOpen(false);
    setAnchorEl(null);
  };
  const handleAlertOpen = () => {
    //  setAuth(false);
    setAlertOpen(true);
    setAnchorEl(null);
  };

  const menuId = "menu-appbar";

  const logoutBody = (
    <div className={classes.paper}>
        <Alert
          severity="success"
          open={alertOpen}
          color="success"
          onClose={handleAlertClose}
          variant="filled"
          className={classes.alert}
        >
          <AlertTitle>Sucessfully Logged out</AlertTitle>
        </Alert>
    </div>
  );

  return (
    <div className={classes.root}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={Login}
        color="inherit"
      >
        <AccountCircle className={classes.profileIcon} />
      </IconButton>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose} component={NavLink} to="/Account">
          My Account
        </MenuItem>
        <MenuItem onClick={handleAlertOpen}>Logout</MenuItem>
      </Menu>
      <Modal open={alertOpen} onClose={handleAlertClose}>
        {logoutBody}
      </Modal>
    </div>
  );
}
