import React, { useState } from "react";
import temp from "./style/icons/design-color-spray-2.png";
import baseA from "./assets/base/baseA.png";
function App() {
  const [step, setStep] = useState(0);
  const [bg, setBg] = useState(1);

  const renderSwatches = () => {
    const swatches = [
      <button
        type="button"
        className={`nes-btn btn-swtaches bg-1 nes-pointer`}
        onClick={() => setBg(1)}
      />,
      <button
        type="button"
        className={`nes-btn btn-swtaches bg-2 nes-pointer`}
        onClick={() => setBg(2)}
      />,
      <button
        type="button"
        className={`nes-btn btn-swtaches bg-3 nes-pointer`}
        onClick={() => setBg(3)}
      />,
      <button
        type="button"
        className={`nes-btn btn-swtaches bg-4 nes-pointer`}
        onClick={() => setBg(4)}
      />,
      <button
        type="button"
        className={`nes-btn btn-swtaches bg-5 nes-pointer`}
        onClick={() => setBg(5)}
      />,
      <button
        type="button"
        className={`nes-btn btn-swtaches bg-6 nes-pointer`}
        onClick={() => setBg(6)}
      />,
    ];
    return swatches;
  };

  // return <div className="main">a</div>;

  return (
    <div className="main">
      <div style={{ marginTop: 50 }} className="nes-container is-rounded card">
        <div className="header">
          <h1 className="font-joystix">Avatr</h1>
          <a href="#" class="nes-badge is-splited">
            <span class="is-dark">ver.</span>
            <span class="is-primary">1.1.0</span>
          </a>
        </div>
      </div>

      <div className="nes-container is-rounded card">
        <div className="container">
          <div
            style={{ display: "flex", flexDirection: "row", columnGap: 10 }}
            className=""
          >
            <div style={{ display: "flex", flexDirection: "column", rowGap: 10 }}>
              <div class="nes-container with-title">
                <p class="title">Eyes</p>
                <div class="nes-select">
                  <select required id="default_select">
                    <option value="" disabled selected hidden>
                      Select...
                    </option>
                    <option value="0">To be</option>
                    <option value="1">Not to be</option>
                  </select>
                </div>
              </div>
              <div class="nes-container with-title">
                <p class="title">Ears</p>
              </div>
            </div>
            <div className={`nes-container is-rounded pix bg-${bg}`}>
              <div className="base">
                <img src={baseA} height={128} width={128} alt="" />
              </div>
            </div>
            <div>
              <div class="nes-container with-title">
                <p class="title">Ears</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }} class="nes-container with-title">
            <p class="title">Background</p>
            <div className="controls-options">
              {step === 0 && renderSwatches().map((item) => item)}
            </div>
          </div>
        </div>
      </div>
      <div className="nes-container is-rounded card">
        <div className="header">
          <div>by</div>
          <div className="font-joystix">Samuele Scatena</div>
        </div>
      </div>
    </div>
  );
}

export default App;
