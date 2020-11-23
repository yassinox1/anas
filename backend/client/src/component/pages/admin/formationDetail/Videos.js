import React from "react";
import { Row, Col } from "reactstrap";
const Videos = (props) => {
  const { formation } = props;

  return (
    <div>
      <Row>
        {formation.videos &&
          formation.videos.map((video) => (
            <Col xs="12" sm="12" className="my-3">
              <video
                src={`uploads/videos/${video.filePath}`}
                controls
                width="100%"
                height="100%"
              >
                Your bro .
              </video>{" "}
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Videos;
