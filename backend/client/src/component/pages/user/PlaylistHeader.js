import React from "react";
import styled from "styled-components";

const StyledPlaylistHeader = styled.div`
  background: #696969;
  font-family: "Hind", sans-serif;
  font-weight: 800;
  font-size: 1.6em;
  color: #fff;
  padding: 0 20px;
  margin: 0 0 20px 0;
  min-height: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StyledJourney = styled.div`
  background: #565656;
  font-size: 0.8em;
  padding: 2px 5px;
  height: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;

const PlaylistHeader = ({ formationName, activeIndex, total }) => (
  <StyledPlaylistHeader>
    <p>{formationName}</p>
    <StyledJourney>
      {activeIndex} / {total}
    </StyledJourney>
  </StyledPlaylistHeader>
);

export default PlaylistHeader;
