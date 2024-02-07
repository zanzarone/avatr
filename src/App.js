import React, { useState } from "react";

const ASSETS_PATH = "/assets/";

const BackgroundClasses = {
  BG1: { style: "bg-1", value: "BG 1" },
  BG2: { style: "bg-2", value: "BG 2" },
  BG3: { style: "bg-3", value: "BG 3" },
  BG4: { style: "bg-4", value: "BG 4" },
  BG5: { style: "bg-5", value: "BG 5" },
  BG6: { style: "bg-6", value: "BG 6" },
  BG_CLEAR: { style: "bg-clear", value: "BG clear" },
  BG_7: { style: "bg-7", value: "BG 7" },
};

const BaseClasses = {
  BASE_1: { path: "B1", value: "Type B1" },
  BASE_2: { path: "B2", value: "Type B2" },
};

const SkinClasses = {
  SKIN_1: { style: "skin-pale", value: "S1", path: "S1" },
  SKIN_2: { style: "skin-white", value: "S2", path: "S2" },
  SKIN_3: { style: "skin-light", value: "S3", path: "S3" },
  SKIN_4: { style: "skin-medium", value: "S4", path: "S4" },
  SKIN_5: { style: "skin-dark", value: "S5", path: "S5" },
  SKIN_6: { style: "skin-deeply", value: "S6", path: "S6" },
};

const EyeColors = {
  BLACK: { style: "eyes-black", value: "Black", path: "E1" },
  BROWN: { style: "eyes-brown", value: "Brown", path: "E2" },
  GREEN: { style: "eyes-blue", value: "Blue", path: "E3" },
  BLUE: { style: "eyes-green", value: "Green", path: "E4" },
  GRAY: { style: "eyes-gray", value: "Gray", path: "E5" },
  AMBER: { style: "eyes-amber", value: "Amber", path: "E6" },
};

const EyesClasses = {
  E1: { path: "1", value: "Type E1" },
  E2: { path: "2", value: "Type E2" },
  E3: { path: "3", value: "Type E3" },
  E4: { path: "4", value: "Type E4" },
  E5: { path: "5", value: "Type E5" },
};

const HairClasses = {
  NONE: { path: "", value: "No hair" },
  H1: { path: "H1", value: "Type H1" },
  H2: { path: "H2", value: "Type H2" },
  H3: { path: "H3", value: "Type H3" },
  H4: { path: "H4", value: "Type H4" },
  H5: { path: "H5", value: "Type H5" },
  H6: { path: "H6", value: "Type H6" },
  H7: { path: "H7", value: "Type H7" },
  H8: { path: "H8", value: "Type H8" },
  H9: { path: "H9", value: "Type H9" },
  H10: { path: "H10", value: "Type H10" },
};
const HairColorsClasses = {
  BROWN: { path: "1", value: "Brown", style: "hair-brown" },
  GOLD: { path: "2", value: "Gold", style: "hair-gold" },
  RED: { path: "3", value: "Red", style: "hair-red" },
  GRAY: { path: "4", value: "Gray", style: "hair-gray" },
};

const NoseClasses = {
  N1: { path: "N1", value: "Type N1" },
  N2: { path: "N2", value: "Type N2" },
  N3: { path: "N3", value: "Type N3" },
  N4: { path: "N4", value: "Type N4" },
  N5: { path: "N5", value: "Type N5" },
  N6: { path: "N6", value: "Type N6" },
  N7: { path: "N7", value: "Type N7" },
  N8: { path: "N8", value: "Type N8" },
  N9: { path: "N9", value: "Type N9" },
  N10: { path: "N10", value: "Type N10" },
  N11: { path: "N11", value: "Type N11" },
  N12: { path: "N12", value: "Type N12" },
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
  M10: { path: "M10", value: "Type M10" },
  M11: { path: "M11", value: "Type M11" },
  M12: { path: "M12", value: "Type M12" },
  M13: { path: "M13", value: "Type M13" },
};

const EarsClasses = {
  EA1: { path: "EA1", value: "Type EA1" },
  EA2: { path: "EA2", value: "Type EA2" },
};

const AccessoriesClasses = {
  GLASSES: {
    KEY: "GLASSES",
    COLORS: {
      BLACK: { path: "2", value: "Black", style: "glasses-black" },
      MAGENTA: { path: "1", value: "Magenta", style: "glasses-magenta" },
    },
    TYPES: {
      NONE: { path: "", value: "None" },
      G1: { path: "G1", value: "Type G1" },
      G2: { path: "G2", value: "Type G2" },
      G3: { path: "G3", value: "Type G3" },
      G4: { path: "G4", value: "Type G4" },
    },
  },
};

function generateRandomString(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset.charAt(randomIndex);
  }

  return result;
}

const Select = ({ disabled = false, defaultOption, options, onChange }) => {
  // console.log(defaultOption);
  return (
    <div className={`nes-select `}>
      <select
        disabled={disabled}
        className={`${defaultOption?.style}`}
        value={defaultOption.value}
        required
        key={generateRandomString(20)}
        onChange={(e) => {
          const obj = options.find((o) => o.value === e.target.value);
          // console.log("pippo", obj);
          onChange(obj);
        }}
      >
        {options.map((option, index) => {
          // console.log(option);
          return (
            <option key={`${generateRandomString(20)}_${index}`} value={option.value}>
              {option.value !== undefined && option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const GenericContainer = ({ children, title }) => {
  return (
    <div className={`nes-container ${title ? "with-title" : ""} is-rounded `}>
      {title && <p className="title">{title}</p>}
      {children}
    </div>
  );
};

function App() {
  const [bg, setBg] = useState(BackgroundClasses.BG1);
  const [baseType, setBaseType] = useState(BaseClasses.BASE_1);
  const [skinColor, setSkinColor] = useState(SkinClasses.SKIN_1);
  const [eyesType, setEyesType] = useState(EyesClasses.E1);
  const [eyesColor, setEyesColor] = useState(EyeColors.BLACK);
  const [hairType, setHairType] = useState(HairClasses.H1);
  const [hairColor, setHairColor] = useState(HairColorsClasses.BROWN);
  const [noseType, setNoseType] = useState(NoseClasses.N1);
  const [mouthType, setMouthType] = useState(MouthClasses.M1);
  const [earsType, setEarsType] = useState(EarsClasses.EA1);

  const [accessories, setAccessories] = useState([]);
  const [glassesType, setGlassesType] = useState(AccessoriesClasses.GLASSES.TYPES.NONE);
  const [glassesColors, setGlassesColors] = useState(
    AccessoriesClasses.GLASSES.COLORS.BLACK
  );

  const Preview = () => {
    return (
      <div className={`nes-container with-title is-rounded avatar ${bg.style}`}>
        <p className="title">Preview</p>
        <div className="preview">
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
              src={`${ASSETS_PATH}EYES/${eyesType.path}/${eyesColor.path}.png`}
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
          {hairType !== HairClasses.NONE && (
            <div className="hair">
              <img
                src={`${ASSETS_PATH}HAIR/${hairColor.path}/${hairType.path}.png`}
                height={128}
                width={128}
                alt=""
              />
            </div>
          )}
          <div className="ears">
            <img
              src={`${ASSETS_PATH}EARS/${skinColor.path}/${earsType.path}.png`}
              height={128}
              width={128}
              alt=""
            />
          </div>
          {accessories.length > 0 && (
            <div className="accessories">
              {accessories.some((key) => key === AccessoriesClasses.GLASSES.KEY) && (
                <div className="glasses">
                  <img
                    src={`${ASSETS_PATH}GOOGLES/${glassesColors.path}/${glassesType.path}.png`}
                    height={128}
                    width={128}
                    alt=""
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  console.info(
    accessories,
    accessories.some((a) => a.KEY === AccessoriesClasses.GLASSES.KEY)
  );

  return (
    <div className="main">
      {/* <header></header> */}
      <main>
        <div className="grid-container">
          {/*//@ PREVIEW  */}
          <div className="grid-item">
            <Preview />
          </div>
          <div className="grid-item">
            {/*//@ BASE  */}
            <GenericContainer title="Base">
              <Select
                options={Object.values(BaseClasses)}
                defaultOption={baseType}
                onChange={setBaseType}
              />
            </GenericContainer>
            {/*//@ MOUTH  */}
            <GenericContainer title="Mouth">
              <Select
                options={Object.values(MouthClasses)}
                defaultOption={mouthType}
                onChange={setMouthType}
              />
            </GenericContainer>
          </div>
          {/*  */}
          <div className="grid-item">
            <GenericContainer title="Nose">
              {/*//@ NOSE  */}
              <Select
                options={Object.values(NoseClasses)}
                defaultOption={noseType}
                onChange={setNoseType}
              />
            </GenericContainer>
            {/*//@ EARS  */}
            <GenericContainer title="Ears">
              <Select
                options={Object.values(EarsClasses)}
                defaultOption={earsType}
                onChange={setEarsType}
              />
            </GenericContainer>
          </div>
          {/*  */}
          <div className="grid-item">
            <button type="button" className="nes-btn is-primary">
              Generate
            </button>
            <div className="app-info">
              <span className="name">AvatR</span>
              <span className="author">by zanzarone</span>
              <div className="nes-badge is-splited">
                <span className="is-dark">ver</span>
                <span className="is-success">1.1.0</span>{" "}
              </div>
              <div className="social">
                <a href="#">
                  <i className="nes-icon linkedin is-medium"></i>
                </a>{" "}
                <a href="#">
                  <i className="nes-icon github is-medium"></i>
                </a>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="grid-item">
            {/* //@ SKIN */}
            <GenericContainer title="Skin">
              <Select
                options={Object.values(SkinClasses)}
                defaultOption={skinColor}
                onChange={setSkinColor}
              />
            </GenericContainer>
            {/* //@ BG */}
            <GenericContainer title="Background">
              <Select
                options={Object.values(BackgroundClasses)}
                defaultOption={bg}
                onChange={setBg}
              />
            </GenericContainer>
          </div>
          {/* //@ HAIR */}
          <div className="hair-item grid-item">
            <GenericContainer title="Hair">
              <div className="container-item">
                <span>Type:</span>
                <Select
                  options={Object.values(HairClasses)}
                  defaultOption={hairType}
                  onChange={setHairType}
                />
              </div>
              <div className="container-item">
                <span>Color:</span>
                <Select
                  options={Object.values(HairColorsClasses)}
                  defaultOption={hairColor}
                  onChange={setHairColor}
                />
              </div>
            </GenericContainer>
          </div>
          <div className="accessories-item grid-item">
            <GenericContainer title="Accessories">
              {/* //@ GLASSES */}
              <div className="container-item">
                <span>Glasses type:</span>
                <Select
                  defaultOption={glassesType}
                  options={Object.values(AccessoriesClasses.GLASSES.TYPES)}
                  onChange={(v) => {
                    let acc = accessories.filter(
                      (a) => a.KEY !== AccessoriesClasses.GLASSES.KEY
                    );
                    if (v.value !== AccessoriesClasses.GLASSES.TYPES.NONE.value) {
                      acc.push(AccessoriesClasses.GLASSES.KEY);
                    }
                    setAccessories(acc);
                    setGlassesType(v);
                  }}
                />
              </div>
              <div className="container-item">
                <span>Glasses color:</span>
                <Select
                  disabled={
                    glassesType.value === AccessoriesClasses.GLASSES.TYPES.NONE.value
                  }
                  defaultOption={glassesColors}
                  options={Object.values(AccessoriesClasses.GLASSES.COLORS)}
                  onChange={setGlassesColors}
                />
              </div>
            </GenericContainer>
          </div>
          {/* //@ EYES */}
          <div className="eyes-item grid-item">
            <GenericContainer title="Eyes">
              <div className="container-item">
                <span>Type:</span>
                <Select
                  options={Object.values(EyesClasses)}
                  defaultOption={eyesType}
                  onChange={setEyesType}
                />
              </div>
              <div className="container-item">
                <span>Color:</span>
                <Select
                  options={Object.values(EyeColors)}
                  defaultOption={eyesColor}
                  onChange={setEyesColor}
                />
              </div>
            </GenericContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
