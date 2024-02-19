import React, { useEffect, useState } from "react";
import { generateAvatar, generateRandomString } from "./utils";
import {
  ASSETS_PATH,
  BackgroundClasses,
  BaseClasses,
  SkinClasses,
  EyesClasses,
  EyeColors,
  HairClasses,
  HairColorsClasses,
  NoseClasses,
  MouthClasses,
  EarsClasses,
  AccessoriesClasses,
} from "./config/defines";

import successIcon from "./style/icons/check-fat.png";
import errorIcon from "./style/icons/warning.png";

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
          onChange(obj);
        }}
      >
        {options.map((option, index) => {
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

const DialogNoButtons = ({ message, title, show }) => {
  return show ? (
    <div className="dialog">
      <div className={`nes-container is-rounded is-centered is-primary`}>
        {title && <span className="title">{`${title}`}</span>}
        {message}
      </div>
    </div>
  ) : null;
};

const Alert = ({ message, show, type, icon }) => {
  return show ? (
    <div className="popup">
      <div className={`nes-container is-rounded is-dark ${type}`}>
        {icon}
        {message}
      </div>
    </div>
  ) : null;
};

function App() {
  const [isLoading, loading] = useState(false);
  const [error, setError] = useState();
  const [isSuccess, success] = useState(false);
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

  const generate = async () => {
    loading(true);
    const options = {
      bg: bg.path,
      base: baseType.path,
      skin: skinColor.path,
      mouth: mouthType.path,
      nose: noseType.path,
      hair: {
        type: hairType.path,
        color: hairColor.path,
      },
      ears: earsType.path,
      eyes: {
        color: eyesColor.path,
        type: eyesType.path,
      },
    };

    setTimeout(async () => {
      try {
        await generateAvatar(options);
        success(true);
        setTimeout(() => success(false), 2000);
      } catch (error) {
        setError(error.message);
      } finally {
        loading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    let clearTimer;
    if (error) {
      clearTimer = setTimeout(() => setError(undefined), 5000);
    }
    return function cleanup() {
      clearTimeout(clearTimer);
    };
  }, [error]);

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
              src={`${ASSETS_PATH}EYES/${eyesColor.path}/${eyesType.path}.png`}
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

  return (
    <div className="root">
      <main>
        <DialogNoButtons
          show={isLoading}
          title="Loading..."
          message="Generating avatar, please wait"
        />
        <Alert
          icon={
            <img className="nes-avatar is-rounded" alt="error icon" src={errorIcon} />
          }
          show={error !== undefined}
          message={error}
          type={"is-error"}
        />
        <Alert
          show={isSuccess}
          icon={
            <img className="nes-avatar is-rounded" alt="success icon" src={successIcon} />
          }
          message={"Avatr successfully downloaded!"}
          type={"is-success"}
        />
        <div className="grid-container">
          <div className="generate-big">
            <button type="button" className="nes-btn is-primary " onClick={generate}>
              Generate
            </button>
            {/* <button type="button" className="nes-btn is-success is-disabled">
              Random
            </button> */}
          </div>

          {/*//@ PREVIEW  */}
          <div className="avatar-item grid-item">
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
            <button
              type="button"
              className="nes-btn is-primary generate-small"
              onClick={generate}
            >
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
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/samuele-scatena/"
                >
                  <i className="nes-icon linkedin is-medium"></i>
                </a>{" "}
                <a rel="noreferrer" target="_blank" href="https://github.com/zanzarone">
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
                  disabled={hairType.value === HairClasses.NONE.value}
                  options={Object.values(HairColorsClasses)}
                  defaultOption={hairColor}
                  onChange={setHairColor}
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
                      (a) => a !== AccessoriesClasses.GLASSES.KEY
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
        </div>
      </main>
    </div>
  );
}

export default App;
