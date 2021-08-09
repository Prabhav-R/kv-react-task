import React from "react";

const FileUpload = ({ label, name, value, handler }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="file"
        className="file-upload-input"
        onChange={(e) => handler(e.target.files[0])}
        name={name}
      />
    </>
  );
};

export default FileUpload;
