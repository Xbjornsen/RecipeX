import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import author from '../static/images/author.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(8),
  },
  media: {
    height: 400,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={author}
          title="Author"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Xavier Thorbjornsen
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Author
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
