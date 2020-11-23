/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer({ role }) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        {role === "admin" && (
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>

            <Link to="admin">
              {" "}
              <ListItemText primary="admin" />
            </Link>
          </ListItem>
        )}
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>

          <Link to="dashboard">
            {" "}
            <ListItemText primary="dashboard" />
          </Link>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {
        <React.Fragment key="left">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={state} onClose={toggleDrawer()}>
            {list("left")}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
