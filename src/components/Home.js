import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    margin: 10,
  },
  container: {
    display: "flex",
    postion: "absolute",
    width: "100%",
    height: "100vh",
  },
  heading: {
    display: "flex",
    postion: "center",
  },
  recipieHeading: {
    display: "flex",
    postion: "absolute",
    fontSize: "14",
  },
}));

function Home() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
        <Container className={classes.container}>
            <Typography variant='h4'>Home</Typography>            
        </Container>
    </div>
  );
}

export default Home;

