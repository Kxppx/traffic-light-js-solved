import "./Lights.css";
import { Light } from "./_component/Light/Light";

export const Lights = ({ data, activeColorIndex }) => {
  return (
    <div className="circle-container">
      {data.map((color) => (
        <Light
          active={color === data[activeColorIndex]}
          color={color}
          key={color}
        />
      ))}
    </div>
  );
};
