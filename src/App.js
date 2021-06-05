import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
  const [selectedimage, setSelectedimage] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedimage={setSelectedimage} />
      {selectedimage && (
        <Modal
          selectedimage={selectedimage}
          setSelectedimage={setSelectedimage}
        />
      )}
    </div>
  );
}

export default App;
