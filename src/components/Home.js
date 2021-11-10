import React from "react";
import { makeStyles, styled } from "@material-ui/styles";
import { Box, Grid, Paper } from "@material-ui/core";




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

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }))

  return (
    <div >
        <Box className={classes.root} >
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
            <Item>hi</Item>
            </Grid>
            <Grid item xs={6} md={4}> 
            <Item></Item>
            </Grid>
            <Grid item xs={6} md={4}>
            <Item></Item>
            </Grid>
            <Grid item xs={6} md={8}>
            <Item></Item>
            </Grid>
          </Grid>        
        </Box> 
    </div>
  );
}

export default Home;

