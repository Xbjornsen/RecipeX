import {
  Container,
  Typography,
  Paper,
  Input,
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 5,
  },
  paper: {
    padding: 5,
  },
}));

export default function NewRecipe() {
  const classes = useStyles();
  const db = firebase.firestore();

  const {
    control,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // db.collection("Recipes")
    //   .add(data)
    //   .then(function () {
    //     console.log("Value successfully written!");
    //   })
    //   .catch(function (errors) {
    //     console.log("Error writing Value: ", errors);
    //   });
  };

  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" align="center">
            New Recipe
          </Typography>
          <form >
            <Controller
            name={"Title"}
            control={control}
            defaultValue=""
            render={({field: { onChange, value } }) => (
              <TextField onChange={onChange} value={value} label={"Title"} />
            )} />
            <Controller
            name={"Serving Size"}
            control={control}
            defaultValue=""
            render={({field: { onChange, value } }) => (
              <TextField onChange={onChange} value={value} label={"Serving Size"} />
            )} />

              <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
