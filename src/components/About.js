import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import author from "../static/images/author.jpg";
import GitHubIcon from '@material-ui/icons/GitHub';

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
  let url = "https://github.com/Xbjornsen/RecipeX";
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={author} title="Author" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Xavier Thorbjornsen
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Software Developer. 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I have created this web application to hold all of my favourite recipies. 
            If you have any suggestions, feel free to leave comments in the box to the right. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={url}>
          <GitHubIcon /> 
        </a>
      </CardActions>
    </Card>
  );
}
