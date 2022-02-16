import {
  Container,
  Typography,
  Paper,
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import firebase from "firebase";
import { storage } from "../firebase";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  paper: {
    padding: 6,
    width: "100%",
  },
  input: {
    padding: 10,
  },
  imageUpload: {
    display: "none",
  },
  form: {},
  button: {
    justifyContent: "center",
    width: "100%",
    padding: 10,
  },
  img: {
    width: 400,
    height: 200,
  },
}));

export default function NewRecipe() {
  const classes = useStyles();

  const db = firebase.firestore();
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [uploaded, setUploaded] = useState(false);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  console.log(file ? file.name : "no file uploaded");

  function handleUpload(e) {
    e.preventDefault();
    const ref = storage.ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then((url) => {
        setFile(null);
        setURL(url);
        setUploaded(true);
      });
    });
  }



  const { control, register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    db.collection("Recipes")
      .add(data)
      .then(function () {
        console.log("Value successfully written!");
      })
      .catch(function (errors) {
        console.log("Error writing Value: ", errors);
      });
  };

  return (
    <div>
      <Container maxWidth="sm" spacing={2} className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <form className={classes.form}>
            <Typography variant="h5" align="center">
              New Recipe
            </Typography>
            <Controller
              name={"Title"}
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  className={classes.input}
                  onChange={onChange}
                  value={value}
                  label={"Title"}
                  position="start"
                  variant="outlined"
                />
              )}
            />
            <Controller
              name={"Serving Size"}
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  className={classes.input}
                  onChange={onChange}
                  type="number"
                  value={value}
                  label={"Serving Size"}
                  variant="outlined"
                />
              )}
            />
            <Controller
              name={"Ingredients"}
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  className={classes.input}
                  onChange={onChange}
                  value={value}
                  label={"Ingredients"}
                  variant="outlined"
                  multiline
                  rows={8}
                  fullWidth
                />
              )}
            />
            <Controller
              name={"Method"}
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <TextField
                  className={classes.input}
                  onChange={onChange}
                  value={value}
                  label={"Method"}
                  variant="outlined"
                  multiline
                  rows={8}
                  fullWidth
                />
              )}
              
            />
            {uploaded ? <><div className={classes.input}><input {...register("ImageUrl")} value={url} ></input></div></> : <></>}
          </form>
          <form>
            <Typography variant="subtitle1" className={classes.input}>
              Add photo? 
            </Typography>
            <input 
              accept="image/*"
              className={classes.input}
              id="image-upload"
              type="file"
              alt=""
              onChange={handleChange}
            />
            <Button disabled={!file} onClick={handleUpload}>
              Upload Image
            </Button>
          </form>
          {url ? (
            <>
              <img src={url} alt="" className={classes.img}></img>
              <Alert severity="info">Image uploaded</Alert>
            </>
          ) : (
            <></>
          )}

          <div className={classes.button}>
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              disabled={!url}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
}
