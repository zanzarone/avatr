import React, { useState } from "react";

// const backgroundClasses = [
//   { style: "bg-1", value: 0 },
//   { style: "bg-2", value: 1 },
//   { style: "bg-3", value: 2 },
//   { style: "bg-4", value: 3 },
//   { style: "bg-5", value: 4 },
//   { style: "bg-6", value: 5 },
// ];

const BackgroundClasses = {
  BG1: { style: "bg-1", value: 0 },
  BG2: { style: "bg-2", value: 1 },
  BG3: { style: "bg-3", value: 2 },
  BG4: { style: "bg-4", value: 3 },
  BG5: { style: "bg-5", value: 4 },
  BG6: { style: "bg-6", value: 5 },
  BG_CLEAR: { style: "bg-clear", value: 6 },
  BG_7: { style: "bg-7", value: 7 },
};

const ASSETS_PATH = "/assets/";

const BaseClasses = {
  BASE_1: { path: "B1", value: "B1" },
};

const SkinClasses = {
  SKIN_1: { style: "skin-pale", value: 1, path: "S1" },
  SKIN_2: { style: "skin-white", value: 2, path: "S2" },
  SKIN_3: { style: "skin-light", value: 3, path: "S3" },
  SKIN_4: { style: "skin-medium", value: 4, path: "S4" },
  SKIN_5: { style: "skin-dark", value: 5, path: "S5" },
  SKIN_6: { style: "skin-deeply", value: 6, path: "S6" },
};

const EyeColors = {
  BLACK: { style: "eyes-black", value: 1 },
  BROWN: { style: "eyes-brown", value: 2 },
  GREEN: { style: "eyes-blue", value: 3 },
  BLUE: { style: "eyes-green", value: 4 },
  GRAY: { style: "eyes-gray", value: 5 },
  AMBER: { style: "eyes-amber", value: 6 },
};

const EyesClasses = {
  E1: { path: "E1", value: "Type E1" },
  E2: { path: "E2", value: "Type E2" },
  E3: { path: "E3", value: "Type E3" },
  E4: { path: "E4", value: "Type E4" },
  E5: { path: "E5", value: "Type E5" },
};

const HairEarsClasses = { HE1: { path: "H1", value: "Type HE1" } };

const NoseClasses = {
  N1: { path: "N1", value: "Type N1" },
  N2: { path: "N2", value: "Type N2" },
  N3: { path: "N3", value: "Type N3" },
  N4: { path: "N4", value: "Type N4" },
  N5: { path: "N5", value: "Type N5" },
  N6: { path: "N6", value: "Type N6" },
  N7: { path: "N7", value: "Type N7" },
  N8: { path: "N8", value: "Type N8" },
};

const MouthClasses = {
  M1: { path: "M1", value: "Type M1" },
  M2: { path: "M2", value: "Type M2" },
  M3: { path: "M3", value: "Type M3" },
  M4: { path: "M4", value: "Type M4" },
  M5: { path: "M5", value: "Type M5" },
  M6: { path: "M6", value: "Type M6" },
  M7: { path: "M7", value: "Type M7" },
  M8: { path: "M8", value: "Type M8" },
  M9: { path: "M9", value: "Type M9" },
  // M10: { path: "mouthM10", value: "Type M10" },
};

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
      {classes?.map((cl) => {
        // console.log(cl, value);
        return (
          <label className="" key={generateRandomString(20)}>
            <input
              // value={cl.value}
              checked={cl.value === value}
              type="radio"
              className="nes-radio"
              // name="answer"
              onChange={() => onColorChanged(cl.value)}
            />
            {/* <span
              className={`nes-container is-rounded swatch ${cl.style}`}
            ></span> */}
            <span className={`swatch ${cl.style}`}></span>
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
          const obj = options.find((o) => o.value === e.target.value);
          // console.log("pippo", e.target.value, found);
          onChange(obj);
        }}
      >
        {options.map((option, index) => {
          return (
            <option
              key={`${generateRandomString(20)}_${index}`}
              value={option.value}
            >
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

function App() {
  const [bg, setBg] = useState(BackgroundClasses.BG_CLEAR);
  const [baseType, setBaseType] = useState(BaseClasses.BASE_1);
  const [skinColor, setSkinColor] = useState(SkinClasses.SKIN_1);
  const [eyesType, setEyesType] = useState(EyesClasses.E1);
  const [eyesColor, setEyesColor] = useState(EyeColors.BLACK);
  const [hairType, setHairType] = useState(HairEarsClasses.HE1);
  const [noseType, setNoseType] = useState(NoseClasses.N1);
  const [mouthType, setMouthType] = useState(MouthClasses.M1);
  // const [earsType, setEarsType] = useState(0);

  const Preview = () => {
    return (
      <div className={`nes-container with-title is-rounded avatar ${bg.style}`}>
        <p className="title">Preview</p>
        <div className="preview">
          {/* BASE */}
          <img
            src={`${ASSETS_PATH}BASE/${baseType.path}.png`}
            height={128}
            width={128}
            alt=""
          />
          <div className="skin">
            <img
              src={`${ASSETS_PATH}SKIN/${baseType.path}/${skinColor.path}.png`}
              height={128}
              width={128}
              alt=""
            />
          </div>
          <div className="eyes">
            <img
              src={`${ASSETS_PATH}EYES/${eyesColor.value}/${eyesType.path}.png`}
              height={128}
              width={128}
              alt=""
            />
          </div>
          <div className="mouth">
            <img
              src={`${ASSETS_PATH}MOUTH/${mouthType.path}.png`}
              height={128}
              width={128}
              alt=""
            />
          </div>
          <div className="nose">
            <img
              src={`${ASSETS_PATH}NOSE/${noseType.path}.png`}
              height={128}
              width={128}
              alt=""
            />
          </div>
          {/* <div className="hair_ears">
            <img
              src={`${ASSETS_PATH}h_e/${skinColor.value}/${hairType.path}.png`}
              height={128}
              width={128}
              alt=""
            />
          </div> */}
        </div>
      </div>
    );
  };

  const GenericContainer = ({ children, title }) => {
    return (
      <div className={`nes-container ${title ? "with-title" : ""} is-rounded`}>
        {title && <p className="title">{title}</p>}
        {children}
      </div>
    );
  };

  const LeftColumn = () => {
    return (
      <div className="left">
        <GenericContainer title="Background">
          <Swatches
            value={bg.value}
            classes={Object.values(BackgroundClasses)}
            onColorChanged={(value) => {
              const newBg = Object.values(BackgroundClasses).find(
                (obj) => obj.value === value
              );
              setBg(newBg);
            }}
          />
        </GenericContainer>
        <GenericContainer title="Skin">
          <Swatches
            value={skinColor.value}
            onColorChanged={(value) => {
              const newSkinColor = Object.values(SkinClasses).find(
                (obj) => obj.value === value
              );
              setSkinColor(newSkinColor);
            }}
            classes={Object.values(SkinClasses)}
          />
        </GenericContainer>
      </div>
    );
  };

  const CenterColumn = () => {
    return (
      <div className="center">
        <GenericContainer title="Face">
          <Select
            options={Object.values(BaseClasses)}
            defaultOption={baseType.value}
            onChange={setBaseType}
          />
        </GenericContainer>

        <GenericContainer title="Mouth">
          <Select
            options={Object.values(MouthClasses)}
            defaultOption={mouthType.value}
            onChange={setMouthType}
          />
        </GenericContainer>
        <GenericContainer title="Nose">
          <Select
            options={Object.values(NoseClasses)}
            defaultOption={noseType.value}
            onChange={setNoseType}
          />
        </GenericContainer>
      </div>
    );
  };

  const RightColumn = () => {
    return (
      <div className="right">
        <GenericContainer title="Eyes">
          <Select
            options={Object.values(EyesClasses)}
            defaultOption={eyesType.value}
            onChange={setEyesType}
          />
          <div>
            <p>Eye colors</p>
            <Swatches
              value={eyesColor.value}
              classes={Object.values(EyeColors)}
              onColorChanged={(value) => {
                const newEyesColor = Object.values(EyeColors).find(
                  (obj) => obj.value === value
                );
                setEyesColor(newEyesColor);
              }}
            />
          </div>
        </GenericContainer>

        <GenericContainer title="Hair+Eyes">
          <Select
            options={Object.values(HairEarsClasses)}
            defaultOption={hairType.value}
            onChange={setHairType}
          />
        </GenericContainer>
      </div>
    );
  };

  return (
    <div className="main">
      <header>
        <div className="subpippo">
          <span className="name">
            AvatR
            {/* AvatR<sub className="author">by zanzarone</sub> */}
          </span>
          <span className="author">by zanzarone</span>
          <div className="nes-badge is-splited">
            <span className="is-dark">ver</span>
            <span className="is-success">1.1.0</span>{" "}
          </div>
        </div>
        <i className="nes-icon github is-medium"></i>
      </header>
      <div>
        <Preview />
      </div>
      <div className="container">
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default App;
