import React, { useState } from "react";

const UpdateFormation = (props) => {
  const [filename, setFilename] = useState("Choose File");
  const [file, setFile] = useState("r");
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const { updateFormationImage, formation } = props;
  const onSubmit = (e) => {
    e.preventDefault();
    updateFormationImage(formation._id, file);
  };

  return (
    <div>
      <h3>Update Formation Image</h3>
      <div className="my-5">
        <p> Update Image</p>
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

          <input
            type="submit"
            value="Update Iamge"
            className="btn btn-primary btn-block mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateFormation;
