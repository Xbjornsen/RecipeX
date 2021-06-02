import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {

    },

}))

export default function Account() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                Account Details 

            </Container>
        </div>
    )
}