import { Container, Typography, Paper, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import React, {useState} from "react";
import Add from "./DataBaseComponents/Add";
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
  //const onSubmit = data => console.log(data);

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
            Add New Recipe
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Title", { required: true })} />
            {errors.firstName?.type === "required" && "Title is required"}

            <input {...register("Serving Size", { required: true })} />
            {errors.lastName && "Serving size is required"}

            <input type="submit" />
          </form>
        </Paper>
      </Container>
    </div>
  );
}
