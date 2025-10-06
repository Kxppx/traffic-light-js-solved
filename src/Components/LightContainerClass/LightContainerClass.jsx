import { Component } from "react";
import { Lights } from "../Lights/Lights";
import { lightsData } from "../../data/lights";
import "../LightContainerFunctional/LightContainerFunctional.css";

export class LightContainerClass extends Component {
  state = {
    currentIndex: 2,
    lights: lightsData,
  };
  changeLight = () => {
    this.setState({
      lights: this.state.lights.map((light, i) => {
        return i === this.state.currentIndex
          ? { ...light, active: true }
          : { ...light, active: false };
      }),
      currentIndex:
        this.state.currentIndex === 0 ? 2 : this.state.currentIndex - 1,
    });
  };
  render() {
    const { title } = this.props;
    const { lights } = this.state;
    return (
      <div className="light-container">
        <h2>{title}</h2>
        <Lights data={lights} />
        <button onClick={this.changeLight}>Change light</button>
      </div>
    );
  }
}
