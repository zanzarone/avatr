import React, { useState } from "react";
import temp from "./style/icons/design-color-spray-2.png";

function App() {
  const [step, setStep] = useState(0);
  const [bg, setBg] = useState(1);

  const renderSwatches = () => {
    const swatches = [
      <div className={`swatch bg-1`} onClick={() => setBg(1)} />,
      <div className={`swatch bg-2`} onClick={() => setBg(2)} />,
      <div className={`swatch bg-3`} onClick={() => setBg(3)} />,
      <div className={`swatch bg-4`} onClick={() => setBg(4)} />,
      <div className={`swatch bg-5`} onClick={() => setBg(5)} />,
      <div className={`swatch bg-6`} onClick={() => setBg(6)} />,
    ];
    return swatches;
  };

  return (
    <div className="main">
      <div className="card">
        <div className="header">
          <h1 className="font-avatr">Avatar</h1>
          <div>by</div>
          <h3 className="">Samuele Scatena</h3>
        </div>
        <div className="container">
          <div className={`pix bg-${bg}`}>
            <div className="grid"></div>
          </div>
          <div className="controls">
            <button>{"<"}</button>
            <div className="selected-controls">
              <img src={temp} width={24} height={24} />
              <span>Background</span>
            </div>
            <button>{">"}</button>
          </div>
          <div className="controls-options">
            {step === 0 && renderSwatches().map((item) => item)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
