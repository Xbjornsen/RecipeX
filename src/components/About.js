import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
  },
  container: {
    display: "flex",
    postion: "absolute",
    width: "100%",
    height: "100%",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4">About</Typography>
      </Container>
    </div>
  );
}
