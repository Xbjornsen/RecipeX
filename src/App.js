import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import React from "react";
import Footer from "./components/Footer";
import Account from './components/Account';
import Favourites from "./components/Favourites";
import NewRecipe from "./components/NewRecipe";
import Recents from "./components/Recents";
import Home from "./components/Home";
import Authentication from "./components/DataBaseComponents/Authentication";
import About from "./components/About";

export const App = () => {
  // const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Authentication />
        <Switch>
            <Route path="/About" component={About} />
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
