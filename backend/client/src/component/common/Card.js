/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
} from "@material-ui/core";

import Dialog from "../common/Dialog";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

// eslint-disable-next-line no-unused-vars
export default function ImgMediaCard({ img, text, category }) {
  const classes = useStyles();
  console.log("from", category);
  console.log("from text", text);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia title={text} />

        <CardContent>
          <img alt="e" src={`/uploads/category/${img}`} />
          <Typography gutterBottom variant="h5" component="h2">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Dialog title={text} />
        <Link
          to={{
            pathname: "/formationdetail",
            state: {
              category: category,
            },
          }}
        >
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
