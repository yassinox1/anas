import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  Box,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    "&:hover": {
      cursor: "pointer",
    },
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const FormationCrad = (props) => {
  const classes = useStyles();
  const { formation, path, history } = props;

  return (
    <Box boxShadow={3} bgcolor="background.paper" m={1} p={1}>
      <Card
        className={classes.root}
        onClick={() =>
          history.push({
            pathname: path,
            state: { formation: formation },
          })
        }
        style={{ marginBottom: "30px" }}
      >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {formation.title[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={formation.title}
          subheader={moment(formation.createdAt)
            .subtract(10, "days")
            .calendar()}
        />
        <CardContent>
          <CardMedia
            className={classes.media}
            image={`/uploads/category/${formation.image}`}
            title="alt"
          />
          <Typography gutterBottom variant="h5" component="h2" className="mt-3">
            Description
          </Typography>
          <Typography variant="body2" color=" Secondary" component="p">
            {formation.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
