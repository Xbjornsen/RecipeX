import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Add from "./DataBaseComponents/Add";
import FireStoreData from "./DataBaseComponents/FireStoreData";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  container: {
    display: "flex",
    postion: "absolute",
    width: "100%",
    height: "100%",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container className={classes.container}>
            <Typography variant='h4'>Home</Typography>
            
        </Container>
        < Add />
        <FireStoreData /> 
    </div>
  );
}

export default Home;

