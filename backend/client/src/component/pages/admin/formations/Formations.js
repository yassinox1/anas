/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { getAllRoles } from "../../../../redux/actions/AdminActions";
import { getAdminFormation } from "../../../../redux/actions/FormationActions";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import Sketlon from "../../../common/Sketlon";
import NewFormation from "./NewFormation";
import { FormationCrad } from "../../../common/FormationCrad";
import SearchBar from "../../../common/SearchBar";
import { Grid } from "@material-ui/core";
import { Alert, AlertTitle, Pagination } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Formations = (props) => {
  const classes = useStyles();
  const {
    userFormations,
    isLoading,
    error,
    totalFormations,
  } = props.Formations;

  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = React.useState(1);
  const handlePagination = (event, value) => {
    setPage(value);
    console.log("page", page);
  };
  useEffect(() => {
    props.getAdminFormation(page);
    props.getAllRoles();
  }, [page]);
  return (
    <div className={classes.root}>
      <Container>
        {isLoading && !error ? (
          <Grid container spacing={3}>
            <Sketlon />
            <Sketlon />
            <Sketlon />
          </Grid>
        ) : error ? (
          <Alert severity="error" className="mt-5 w-100 p-5">
            <AlertTitle>Error</AlertTitle>
            <h1> {error.error}</h1>
          </Alert>
        ) : (
          <>
            <NewFormation roles={props.admin.roles} history={props.history} />
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <Row>
              {userFormations &&
                userFormations
                  .filter((formation) => {
                    const targetString = formation.title.toLowerCase();
                    return searchQuery.length === 0
                      ? true
                      : targetString.includes(searchQuery);
                  })
                  .map((formation) => (
                    <Col xs="6" sm="4">
                      {" "}
                      <FormationCrad
                        key={formation._id}
                        formation={formation}
                        path={`/formation`}
                        history={props.history}
                      />
                    </Col>
                  ))}
            </Row>
            <Pagination
              count={totalFormations}
              page={page}
              onChange={handlePagination}
              color="primary"
              className="my-5"
            />
          </>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { admin: state.admin, Formations: state.formations };
};

export default connect(mapStateToProps, {
  getAdminFormation,
  getAllRoles,
})(Formations);
