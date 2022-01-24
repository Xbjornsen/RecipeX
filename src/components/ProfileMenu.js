import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { makeStyles, Menu } from "@material-ui/core";
import { MenuItem, IconButton } from "@material-ui/core";
import { AccountBox } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  Menu: {},
  MenuItem: {},
  menuButton: {
      paddingLeft: 10,
      fontSize: 54,
  }, 
}));

const Profile = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = "profileMenu";


  return (
    <div>
      <IconButton edge="start" aria-label="menu" onClick={handleMenuOpen}>
        <AccountBox className={classes.menuButton}  />
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
        <MenuItem onClick={handleMenuClose} component={NavLink} to="/LoginForm">Signin</MenuItem>
        <MenuItem onClick={handleMenuClose } component={NavLink} to="/LoginForm">Signout</MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
