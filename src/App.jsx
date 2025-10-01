import { useState } from "react";
import "./App.css";
import { Lights } from "./Components/Lights/Lights";
import { lightsData } from "./data/lights";

function App() {
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
    <div className="container">
      <Lights data={lights} />
      <button onClick={changeLight}>Change light</button>
    </div>
  );
}

export default App;
