import React from "react";
import PlaylistHeader from "./PlaylistHeader";

import VideoSteper from "./VideoSteper";
import styled from "styled-components";
//450px
const StyledPlaylist = styled.div`
  flex: 1 1 25%;
  overflow: hidden;
  color: white;

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`;

const Playlist = ({
  videos,
  activeIndex,
  activeTitle,
  setVideoIndex,
  formationName,
}) => (
  <StyledPlaylist>
    {/* <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />*/}
    <PlaylistHeader
      activeIndex={activeIndex}
      formationName={formationName}
      total={videos.length}
    />
    {/* <PlaylistItems videos={videos} active={activeTitle} />*/}
    <VideoSteper videos={videos} setVideoIndex={setVideoIndex} />
  </StyledPlaylist>
);

export default Playlist;
