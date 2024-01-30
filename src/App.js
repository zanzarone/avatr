import React, { useState } from "react";

const backgroundClasses = [
  { style: "bg-1", value: 0 },
  { style: "bg-2", value: 1 },
  { style: "bg-3", value: 2 },
  { style: "bg-4", value: 3 },
  { style: "bg-5", value: 4 },
  { style: "bg-6", value: 5 },
];
const skinClasses = [
  { style: "skin-pale", value: 0, class: "pale" },
  { style: "skin-white", value: 1, class: "white" },
];

const baseClasses = [
  { value: 0, path: "/assets/base/type_A", text: "A-type" },
  { value: 1, path: "/assets/base/type_B", text: "B-type" },
  // { value: 1, path: "./assets/base/TypeA" },
];

const eyeClasses = [
  { value: 0, path: "/assets/eyes/eyes1", text: "Type 1" },
  // { value: 1, path: "./assets/base/TypeA" },
];

const earClasses = [
  { value: 0, path: "/assets/ears/ears1", text: "Type 1" },
  // { value: 1, path: "./assets/base/TypeA" },
];

const noseClasses = [
  { value: 0, path: "/assets/nose/nose1", text: "Type 1" },
  // { value: 0, path: "/assets/nose/nose-test", text: "Type 1" },
  // { value: 1, path: "./assets/base/TypeA" },
];

const mouthClasses = [
  { value: 0, path: "/assets/mouth/mouth1", text: "Type 1" },
  // { value: 1, path: "./assets/base/TypeA" },
];

const hairClasses = [
  { value: 0, path: "/assets/hair/hair1", text: "Type 1" },
  // { value: 1, path: "./assets/base/TypeA" },
];

function generateRandomString(length) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset.charAt(randomIndex);
  }

  return result;
}

const Swatches = ({ classes, value, onColorChanged }) => {
  return (
    <div className="swatches">
      {classes?.map((cl, index) => {
        return (
          <label key={generateRandomString(20)}>
            <input
              // value={cl.value}
              checked={cl.value === value}
              type="radio"
              className="nes-radio"
              // name="answer"
              onChange={() => onColorChanged(index)}
            />
            <span
              className={`nes-container is-rounded swatch ${cl.style}`}
            ></span>
          </label>
        );
      })}
    </div>
  );
};

const Select = ({ defaultOption, options, onChange }) => {
  return (
    <div className="nes-select">
      <select
        value={defaultOption}
        required
        key={generateRandomString(20)}
        onChange={(e) => {
          const found = options.find((o) => o.text === e.target.value);
          console.log("pippo", e.target.value, found);
          onChange(found?.value);
          // onChange(e.target.value);
        }}
      >
        {/* {!defaultOption && (
          <option value="" disabled selected hidden>
            Select...
          </option>
        )} */}
        {options.map((option, index) => {
          return (
            <option
              // key={`${generateRandomString(20)}_${index}`}
              // selected={option.value === defaultOption}
              value={option.text}
            >
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

function App() {
  const [bg, setBg] = useState(0);
  const [skinColor, setSkinColor] = useState(0);
  const [faceType, setFaceType] = useState(0);
  const [mouthType, setMouthType] = useState(0);
  const [noseType, setNoseType] = useState(0);
  const [eyesType, setEyesType] = useState(0);
  const [earsType, setEarsType] = useState(0);
  const [hairType, setHairType] = useState(0);

  return (
    <div className="main">
      <div className="container">
        <div className="left">
          <div className="nes-container is-rounded is-centered logo">
            <h1 className="">
              Avatr
              <div className="app-info">
                by Zanzarone
                <div className="nes-badge is-splited">
                  <span className="is-dark">ver</span>
                  <span className="is-success">1.1.0</span>{" "}
                </div>
              </div>
            </h1>
          </div>
          <div className="nes-container with-title is-rounded">
            <p className="title">Face</p>
            <div className="full">
              <Select
                options={baseClasses}
                defaultOption={baseClasses[faceType].text}
                onChange={setFaceType}
              />
            </div>
          </div>
          <div className="nes-container with-title is-rounded">
            <p className="title">Mouth</p>
            <div className="full">
              <Select
                options={mouthClasses}
                defaultOption={mouthType}
                onChange={setMouthType}
              />
            </div>
          </div>
          <div className="nes-container with-title is-rounded">
            <p className="title">Skin color</p>
            <div className="full">
              <Swatches
                value={skinColor}
                onColorChanged={(v) => setSkinColor(v)}
                classes={skinClasses}
              />
            </div>
          </div>
        </div>
        <div className="center">
          <div
            className={`nes-container with-title is-rounded avatar ${backgroundClasses[bg].style}`}
          >
            <p className="title">Preview</p>
            <div className="preview">
              <img
                src={`${baseClasses[faceType].path}-${skinClasses[skinColor].class}.png`}
                height={128}
                width={128}
                alt=""
              />
              <div className="eyes">
                <img
                  src={`${eyeClasses[eyesType].path}-${skinClasses[skinColor].class}.png`}
                  height={128}
                  width={128}
                  alt=""
                />
              </div>
              <div className="ears">
                <img
                  src={`${earClasses[earsType].path}-${skinClasses[skinColor].class}.png`}
                  height={128}
                  width={128}
                  alt=""
                />
              </div>
              <div className="mouth">
                <img
                  src={`${mouthClasses[mouthType].path}-${skinClasses[skinColor].class}.png`}
                  height={128}
                  width={128}
                  alt=""
                />
              </div>
              <div className="nose">
                <img
                  src={`${noseClasses[noseType].path}-${skinClasses[skinColor].class}.png`}
                  height={128}
                  width={128}
                  alt=""
                />
              </div>
              <div className="hair">
                <img
                  src={`${hairClasses[hairType].path}-${skinClasses[skinColor].class}.png`}
                  height={128}
                  width={128}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="nes-container with-title is-rounded"
            style={{ width: 230 }}
          >
            <p className="title">Background</p>
            <Swatches
              value={bg}
              classes={backgroundClasses}
              onColorChanged={setBg}
            />
          </div>
        </div>
        <div className="right">
          <div className="nes-container with-title is-rounded">
            <p className="title">Eyes</p>
            <div className="full">
              <Select
                options={eyeClasses}
                defaultOption={eyesType}
                onChange={setEyesType}
              />
            </div>
          </div>
          <div className="nes-container with-title is-rounded">
            <p className="title">Ears</p>
            <div className="full">
              <Select
                options={earClasses}
                defaultOption={earsType}
                onChange={setEarsType}
              />
            </div>
          </div>
          <div className="nes-container with-title is-rounded">
            <p className="title">Nose</p>
            <div className="full">
              <Select
                options={noseClasses}
                defaultOption={noseType}
                onChange={setNoseType}
              />
            </div>
          </div>
          <div className="nes-container with-title is-rounded">
            <p className="title">Hair</p>
            <div className="full">
              <Select
                options={hairClasses}
                defaultOption={hairType}
                onChange={setHairType}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
