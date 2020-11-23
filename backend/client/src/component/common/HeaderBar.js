import React from "react";

const HeaderBar = (props) => {
  return (
    <div
      style={{
        background: "gray",
        marginBottom: "60px",
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      {props.children}
    </div>
  );
};

export default HeaderBar;
