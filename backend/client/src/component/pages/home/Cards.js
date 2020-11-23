import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Nos Services</h1>
      <h3 className="text-center">
        Des Solutions Complètes, une Couverture en 24/7 et un Support en 9
        Langues
      </h3>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/datacenter.png"
              text="Hébergez vos Données en toute sécurité"
              label="DATA CENTER"
              path="http://dxc-technlogy-maroc.com/#lt-video-materializecss-data"
            />
            <CardItem
              src="images/cloud.jpg"
              text="Pilotez vos infrastructres"
              label="CLOUD & INFRASTRUCTURE"
              path="http://dxc-technlogy-maroc.com/#lt-video-materializecss-cloud"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/APPLICATIFS.jpg"
              text="Digitalisez et Modernisez votre Patrimoine"
              label="SERVICES APPLICATIFS"
              path="http://dxc-technlogy-maroc.com/#lt-video-materializecss-application"
            />
            <CardItem
              src="images/bi.jpg"
              text="Maximisez vos Insights & Anticipez"
              label="BI & ANALYTICS"
              path="http://dxc-technlogy-maroc.com/#lt-video-materializecss-analytics"
            />
            <CardItem
              src="images/process.png"
              text="Digitalisez et Optimisez vos Activités Clients"
              label="BUSINESS PROCESS"
              path="http://dxc-technlogy-maroc.com/#lt-video-materializecss-business"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
