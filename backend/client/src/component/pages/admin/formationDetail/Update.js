import React, { useState, useEffect } from "react";
import SelectFieldGroupe from "../../../common/SelectFieldGroupe";

import { Button, Grid } from "@material-ui/core";
import TextFieldsGroup from "../../../common/TextFieldsGroup";
import { getRoles } from "../../../../utils/getRoles";
const Update = (props) => {
  const { formation } = props;
  const [forma, setFormation] = useState({
    access: [],
    title: formation.title,
  });

  const onChange = (e) => {
    setFormation({ ...forma, [e.target.name]: e.target.value });
  };
  const { roles, updateFormation } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormation(formation._id, forma);
  };

  return (
    <div>
      <h3>Update Formation</h3>
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextFieldsGroup
                value={forma.title}
                onChange={onChange}
                name="title"
                label="Formation Title"
              />
            </Grid>{" "}
            <Grid item xs={12} sm={12}>
              <SelectFieldGroupe
                onChange={onChange}
                selectValue={forma.access}
                selectArray={roles ? getRoles(roles) : []}
              />
            </Grid>{" "}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="my-5"
            style={{ backgroundColor: "#192D3E" }}
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Update;
