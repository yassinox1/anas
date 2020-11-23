import React, { useState, useEffect } from "react";

import { Col, Row } from "reactstrap";
import Sketlon from "../../common/Sketlon";
import { FormationCrad } from "../../common/FormationCrad";
import { connect } from "react-redux";
import { getUserFormations } from "../../../redux/actions/FormationActions";

import SearchBar from "../../common/SearchBar";
import { Grid } from "@material-ui/core";
const HomePage = (props) => {
  const { status } = props.auth.userInfo;
  const { userFormations, isLoading, error } = props.Formations;
  const [searchQuery, setSearchQuery] = useState("");

  const getFormationData = async () => {
    props.getUserFormations();
  };
  const delay = () => {
    setInterval(getFormationData(), 1100002);
  };
  useEffect(() => {
    delay();
  }, []);

  return (
    <div className="container mt-5">
      {!status ? (
        <h1>Wait For Admin To Activate Your Acoount</h1>
      ) : isLoading && !error ? (
        <Grid container spacing={3}>
          <Sketlon />
          <Sketlon />
          <Sketlon />
          <Sketlon />
          <Sketlon />
          <Sketlon />
        </Grid>
      ) : error ? (
        <h1> Server Error</h1>
      ) : (
        <>
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
                .map((item) => {
                  return (
                    <Col sm="4" key={item._id}>
                      <FormationCrad
                        formation={item}
                        path="/courses"
                        history={props.history}
                      />
                    </Col>
                  );
                })}
          </Row>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Formations: state.formations,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  getUserFormations,
})(HomePage);
