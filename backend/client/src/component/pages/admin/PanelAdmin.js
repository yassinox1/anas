import React from "react";

import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import HeaderBar from "../../common/HeaderBar";
import Table from "../../common/Table";
import CardItem from "../home/CardItem";
const ButtonItem = (props) => (
  <Button variant="contained" color="secondary">
    {props.children}
  </Button>
);
const LinkItem = ({ path, title }) => (
  <Link style={LinkStyle} to={path}>
    {title}
  </Link>
);
const Title = ({ title }) => <h3 style={{ color: "#fff" }}>{title} </h3>;
const PanelAdmin = () => {
  return (
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
          <li className="cards__item">
            <Link className="cards__item__link" to="/util">
              <figure className="cards__item__pic-wrap" data-category="Users">
                <img
                  className="cards__item__img"
                  alt="Travel Image"
                  src="images/users.jpg"
                />
              </figure>
              <div className="cards__item__info">
                <h5 className="cards__item__text">Gestion Des Utilisateurs</h5>
              </div>
            </Link>
          </li>
          <li>
            <Link className="cards__item__link" to="/formations">
              <figure className="cards__item__pic-wrap" data-category="Courses">
                <img
                  className="cards__item__img"
                  alt="Travel Image"
                  src="images/formations.jpg"
                />
              </figure>
              <div className="cards__item__info">
                <h5 className="cards__item__text">Gestion Des Formations</h5>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PanelAdmin;

const LinkStyle = {
  color: "#fff",
  textDecoration: "none",
};
