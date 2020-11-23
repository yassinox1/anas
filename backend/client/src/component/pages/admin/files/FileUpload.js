/* eslint-disable react/prop-types */
import React, { Fragment, useState } from "react";

import { uploadVideo } from "../../../../redux/actions/AdminActions";
import { connect } from "react-redux";

const FileUpload = (props) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const { fileName, uploadedFile } = props.category;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    props.uploadVideo(props.title, formData);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
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

        {/*<Progress percentage={uploadPercentage} />*/}

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
              src={`http://localhost:5000/uploads/videos/${uploadedFile.fileName}`}
              controls
            >
              Your bro .
            </video>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return { category: state.admin };
};

export default connect(mapStateToProps, { uploadVideo })(FileUpload);
