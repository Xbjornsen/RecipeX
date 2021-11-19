import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Grid } from "@material-ui/core";




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
    <div >
        <Box className={classes.root} >
          <Grid container spacing={2}>
          </Grid>        
        </Box> 
    </div>
  );
}

export default Home;

