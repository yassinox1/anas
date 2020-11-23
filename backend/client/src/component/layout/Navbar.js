/* eslint-disable import/namespace */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";
import { logout } from "../../redux/actions/AuthActions";

import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const { userInfo, isAuthenticated } = props.auth;

  const classes = useStyles();
  const activeStyle = { color: "#ffffff", fontSize: "0.875rem" };
  const linkStyle = {
    padding: "6px 8px",
    fontSize: "0.875rem",
    minWidth: "64px",
    boxSizing: "border-box",
    transition:
      "backgroundColor 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "500",
    lineHeight: " 1.75",
    borderRadius: "4px",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    color: "#AAA",
  };
  //

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={
          isAuthenticated
            ? { backgroundColor: "#192D3E" }
            : { backgroundColor: "#1B1919" }
        }
      >
        <Toolbar>
          {isAuthenticated && userInfo && <Drawer role={userInfo.role.role} />}
          {isAuthenticated ? (
            <Typography variant="h6" className={classes.title}>
              Formation
            </Typography>
          ) : (
            <Typography variant="h6" className={classes.title}>
              DXC Technology
            </Typography>
          )}

          {isAuthenticated && userInfo ? (
            <>
              <NavLink to="/" activeStyle={activeStyle} style={linkStyle}>
                Welcome {userInfo.firstName}
              </NavLink>
              <NavLink
                to="/login"
                activeStyle={activeStyle}
                style={linkStyle}
                onClick={() => props.logout()}
              >
                Sign Out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" activeStyle={activeStyle} style={linkStyle}>
                Home
              </NavLink>

              <NavLink to="/login" activeStyle={activeStyle} style={linkStyle}>
                Sign in
              </NavLink>
              <NavLink
                to="/register"
                activeStyle={activeStyle}
                style={linkStyle}
              >
                Register
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
