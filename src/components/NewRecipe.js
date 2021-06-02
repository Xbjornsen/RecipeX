import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({

    root: {

    },
}))

export default function NewRecipe() {

    const classes = useStyles();

    return (
        <div className={classes.root}> 
            <Container>
                New Recipe 
            </Container>
        </div>
    )
}