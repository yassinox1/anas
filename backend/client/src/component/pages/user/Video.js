import React from "react";
import ReactPlayer from "react-player";

import styled from "styled-components";

const StyledVideo = styled.div`
  position: relative;
  flex: 2 0 75%;

  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`;
const StyledVideoWrapper = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`;

const Video = ({ url, autoplay }) => (
  <StyledVideo>
    <StyledVideoWrapper>
      <ReactPlayer
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: "0", left: "0" }}
        playing={autoplay}
        controls={true}
        url={url}
      />
    </StyledVideoWrapper>
  </StyledVideo>
);

export default Video;
