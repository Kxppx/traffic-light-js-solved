import { LightContainerFunctional } from "./Components/LightContainerFunctional/LightContainerFunctional";
import { LightContainerClass } from "./Components/LightContainerClass/LightContainerClass";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <LightContainerFunctional title="Functional Traffic Light" />
      <LightContainerClass title="Class Traffic Light" />
    </div>
  );
}

export default App;
