import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import { FolderIcon, FavoriteIcon, LocationOnIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {},
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("favorites");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Gestion Des utilisateurs"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Gestion des droits d'acces"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Gestion des formation"
        value="folder"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}
