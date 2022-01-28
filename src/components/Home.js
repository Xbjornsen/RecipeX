import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography, Paper, Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root:{

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

export default function Home() {
  const classes = useStyles();


  return (

    <div>
        <Container >
            <Typography >Home</Typography>       
        </Container>
    </div>
  );
};

