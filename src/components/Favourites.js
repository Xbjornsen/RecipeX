import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
    root: {
        display: 'flex',

    },
}))


export default function Favourites() {
    const classes = useStyles();

    return (
        <div className={classes.root}> 
            <Container>
               <Typography>Favourites</Typography>  

            </Container>
        </div>
    )
}