import "./Light.css";

export const Light = ({ active, color }) => {
  return <div className={active ? `circle active-${color}` : "circle"}></div>;
};
