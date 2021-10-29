import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import About from "./components/About";
import { CssBaseline } from "@material-ui/core";
import theme from "./styles/theme";
import React from "react";
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";
import Account from './components/Account';
import Favourites from "./components/Favourites";
import NewRecipe from "./components/NewRecipe";
import Recents from "./components/Recents";

export const App = () => {
  // const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderMenu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/about" component={About} />
            <Route path="/Account" component={Account} />
            <Route path="/Favourites" component={Favourites} />
            <Route path="/NewRecipe" component={NewRecipe} />
            <Route path="/Recents" component={Recents} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};
