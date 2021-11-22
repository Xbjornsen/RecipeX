import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Button, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import SaveIcon from '@material-ui/icons/Save';
import Add from './DataBaseComponents/Add';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow: 1,
        margin: 10,
    },
    formStyle: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    button: {
        margin: theme.spacing(1),
    }
}));
export default function NewRecipe() {

    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    //const onSubmit = data => console.log(data);
    const onSubmit = (data) => {
        console.log(data)
        Add(data)
    }


    // const Item = styled(Paper)(({ theme }) => ({
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    // }))

    return (
                <form className={classes.formStyle} onSubmit={handleSubmit(onSubmit)}>
                    <Typography className={classes.root} variant="h3">New Recipe</Typography>
                    <TextField
                        required
                        id="outlined-basic"
                        label="Recipe Name"
                        variant="outlined"
                        {...register("recipeName")} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <TextField
                        required
                        id="filled-number"
                        label="Yeild"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        {...register("yeild")} />
                    <TextField
                        required
                        id="filled-number"
                        label="Prep Time"
                        type="number"
                        varient="outlined"
                        {...register("prepTime")} />
                    <TextField
                        required
                        id="outlined-basic"
                        label="Ingredients"
                        type="list"
                        variant="outlined"
                        {...register("ingredientsList" )} />


                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </form>

    );
}