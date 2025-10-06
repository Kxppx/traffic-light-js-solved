import { useState } from "react";
import { Lights } from "../Lights/Lights";
import { lightsData } from "../../data/lights";
import "./LightContainerFunctional.css";

export const LightContainerFunctional = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [lights, setLights] = useState(lightsData);
  const changeLight = () => {
    setLights(
      lights.map((light, i) => {
        return i === currentIndex
          ? { ...light, active: true }
          : { ...light, active: false };
      })
    );
    setCurrentIndex(currentIndex === 0 ? 2 : currentIndex - 1);
  };
  return (
    <div className="light-container">
      <h2>{title}</h2>
      <Lights data={lights} />
      <button onClick={changeLight}>Change light</button>
    </div>
  );
};
