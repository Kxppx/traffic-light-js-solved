import { Component } from "react";
import { Lights } from "../Lights/Lights";
import { arrLights } from "../../data/lights";
import "../LightContainerFunctional/LightContainerFunctional.css";

export class LightContainerClass extends Component {
  state = {
    currentIndex: arrLights.length - 1,
  };
  changeLight = () => {
    this.setState({
      currentIndex:
        this.state.currentIndex === 0
          ? arrLights.length - 1
          : this.state.currentIndex - 1,
    });
  };
  render() {
    const { title } = this.props;
    return (
      <div className="light-container">
        <h2>{title}</h2>
        <Lights data={arrLights} activeColorIndex={this.state.currentIndex} />
        <button onClick={this.changeLight}>Change light</button>
      </div>
    );
  }
}
