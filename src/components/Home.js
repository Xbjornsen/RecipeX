import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
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

const Home = () => {
  const classes = useStyles();
  console.log("here");



  return (

    <div className={classes.root}>
        <Container className={classes.container} >
            <Typography variant='h4' color="primary">Home</Typography>            
        </Container>
    </div>
  );
}

export default Home;

