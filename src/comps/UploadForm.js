import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

function Uploadform() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select valid file type (PNG/JPEG)");
    }
  };
  return (
    <div>
      <form action="">
        <label>
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
}

export default Uploadform;
