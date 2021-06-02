import React from "react";
import { makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexgrow: 1,
  },
  container: {
    display: "flex",
    postion: "absolute",
    width: "100%",
    height: "100%",
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data);
  console.log('here');

  return (
    <div className={classes.root}>
      <Container>
      <Paper elevation={3} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")}></input>
          <inut {...register("password")}></inut>
          <input type="submit"></input>
        </form>
        <div>Login Page</div>
      </Paper>

      </Container>

    </div>
  );
}
