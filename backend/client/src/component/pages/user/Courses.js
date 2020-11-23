/* eslint-disable react/prop-types */
import React, { useState } from "react";

import Video from "./Video";

import Playlist from "./Playlist";

import styled from "styled-components";
const StyledWbnPlayer = styled.div`
  background: ${(props) => props.theme.bgcolor};
  border: ${(props) => props.theme.border};
  max-width: 1800px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  max-height: 863px;
  transition: all 0.5s ease;

  @media screen and (max-width: 1400px) {
    display: block;
    max-height: 10000px;
  }
`;
const Courses = (props) => {
  const formation = props.location.state.formation;

  const videos = formation.videos;

  const [videoIndex, setVideoIndex] = useState(0);

  const video = videos[videoIndex];

  return (
    <>
      {video && (
        <StyledWbnPlayer>
          <Video url={"uploads/videos/" + video.filePath} autoplay={false} />

          <Playlist
            activeIndex={videoIndex + 1}
            videos={videos}
            formationName={formation.title}
            setVideoIndex={setVideoIndex}
          />
        </StyledWbnPlayer>
      )}
    </>
  );
};

export default Courses;
