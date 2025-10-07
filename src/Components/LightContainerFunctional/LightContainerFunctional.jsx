import { useState } from "react";
import { Lights } from "../Lights/Lights";
import { arrLights } from "../../data/lights";
import "./LightContainerFunctional.css";

export const LightContainerFunctional = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(arrLights.length - 1);
  const changeLight = () => {
    setCurrentIndex(
      currentIndex === 0 ? arrLights.length - 1 : currentIndex - 1
    );
  };
  return (
    <div className="light-container">
      <h2>{title}</h2>
      <Lights data={arrLights} activeColorIndex={currentIndex} />
      <button onClick={changeLight}>Change light</button>
    </div>
  );
};
