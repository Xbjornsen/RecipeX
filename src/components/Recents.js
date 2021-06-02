import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from  'react';

const useStyles = makeStyles((theme) => ({

    root: {

    },
}))

export default function Recents() {
    const classes = useStyles();
    return (
        <div className={classes.root}> 
        <Container>
            <Typography>
                Recents
                </Typography> 
        </Container>
        </div>
    )
}