import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import { alpha, Button, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AppBar from "@material-ui/core/AppBar";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    padding: theme.spacing(0,2,0,2),
  },
  menuButton: {
    margin: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(2),
    textDecorationLine: 'none',
    flexGrow: 1,
  },
  search: {
    paddingLeft: 22,
    justify: "right",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  },
  inputRoot: {
    paddingright: theme.spacing(1),
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  logoutIcon: {
    color: "inherit",
    marginLeft: theme.spacing(4),
  },
  alert: {
    width: 400,
  },
}));

const HeaderMenu = ({handleLogout}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
    console.log("set to null");
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = "app-bar";

  return (
    <AppBar position="static">
      <Toolbar >
        <IconButton edge="start" aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon className={classes.menuButton} />
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
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/Home">
            Home
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/Recents">
            Recents
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/Favourites"
          >
            Favourites
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/About">
            About
          </MenuItem>
        </Menu>
        <Typography component={NavLink} to="/Home" className={classes.title} variant="h5" noWrap color="inherit">Recipe Archive</Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Button className={classes.logoutIcon} onClick={handleLogout} variant="outlined">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderMenu;