import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./component/layout/Navbar";
import PageNoutFound from "./component/PageNoutFound";

import PanelAdmin from "./component/pages/admin/PanelAdmin";
import Utilisateurs from "./component/pages/admin/users/Users";
import Formations from "./component/pages/admin/formations/Formations";

import LoginForm from "./component/pages/Auth/LoginForm";
import RegisterForm from "./component/pages/Auth/RegisterForm";
import UserDashboard from "./component/pages/user/UserDashboard";
import HomePage from "./component/pages/home/HomePage";

import Courses from "./component/pages/user/Courses";
import FormationDetail from "./component/pages/admin/formationDetail/FormationDetail";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";

const Error = () => <h1>Access Denied</h1>;

const App = (props) => {
  console.log("props.auth", props.auth);
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/admin" component={PanelAdmin} />
          {/*<Route path="/util" component={Utilisateurs} />*/}
          <Route path="/dashboard" component={UserDashboard} />
          {/* <Route path="/formations" component={Formations} />*/}
          <PrivateRoute
            component={Formations}
            path="/formations"
            exact
            authed={props.auth}
          />
          <PrivateRoute
            component={Utilisateurs}
            path="/util"
            exact
            authed={props.auth}
          />
          <PrivateRoute
            component={FormationDetail}
            path="/formation"
            exact
            authed={props.auth}
          />
          {/*   <Route path="/formation" component={FormationDetail} />*/}
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/courses" component={Courses} />
          <Route path="/error" component={Error} />
          <Route component={PageNoutFound}>Page not Found</Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps, null)(App);
