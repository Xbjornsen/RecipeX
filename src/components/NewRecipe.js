import { Container, Typography, Paper, Input, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import React, {useState} from "react";
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
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const onSubmit = data => {
    db.collection("Recipes")
        .add(data)
      .then(function () {
        console.log("Value successfully written!");
      })
      .catch(function (error) {
        console.log("Error writing Value: ", error);
      });
  };

  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" align="center">
            Create New Recipe
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField id='title-input'
            name="title"
            label="Title"
            {...register("Title", { required: true })} />
            {errors.firstName?.type === "required" && "Title is required"}

            <TextField
            id='serving-size'
            name='serving-size'
            label='Serving Size'{...register("Serving Size", { required: true , pattern: [0-10] })} />
            {errors.lastName && "Serving size is required"}

            <Button
            type="submit">Submit</Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
