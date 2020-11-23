import React from "react";
import { TextField } from "@material-ui/core";
const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <TextField
    id="standard-basic"
    label="Search Bar"
    value={searchQuery}
    className="w-100 my-5 p-3"
    onChange={(e) => setSearchQuery(e.target.value)}
  />
);

export default SearchBar;
