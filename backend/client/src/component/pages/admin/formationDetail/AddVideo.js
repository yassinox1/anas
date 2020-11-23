import React, { useEffect, useState } from "react";
import Progress from "../../../common/Progress";
import Alert from "../../../common/Alert";

const AddVideo = (props) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const { fileName, uploadedFile, formation } = props;

  const onSubmit = async (e) => {
    e.preventDefault();

    props.uploadVideo(formation._id, file, setMessage, (e) => {
      parseInt(setProgress(Math.round((100 * e.loaded) / e.total)));
      // Clear percentage
      setTimeout(() => setProgress(0), 10000);
    });
  };

  useEffect(() => {
    setProgress(0);
    setMessage("");
    setFilename("choose File");
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <h3>Add new video</h3>
      <div>
        {message ? <Alert message={message} /> : null}
        <form onSubmit={onSubmit}>
          <div className="custom-file mb-4 mt-5">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
          </div>

          <Progress percentage={progress} />

          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-4"
          />
        </form>
        {uploadedFile.fileName ? (
          <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <p className="text-center">{uploadedFile.fileName}</p>

              <video
                style={{ width: "100%" }}
                src={`uploads/videos/${uploadedFile.fileName}`}
                controls
              >
                Your bro .
              </video>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AddVideo;
