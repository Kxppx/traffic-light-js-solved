import "./Lights.css";
import { Light } from "./_component/Light/Light";

export const Lights = ({ data }) => {
  return (
    <div className="circle-container">
      {data.map(({ active, color }) => (
        <Light active={active} color={color} key={color} />
      ))}
    </div>
  );
};
