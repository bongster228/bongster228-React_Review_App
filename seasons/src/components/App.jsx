import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinnder from "./Spinnder";

class App extends React.Component {
  //  initialize state
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    //  get user's current location
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinnder message="Waiting for response" />;
  }

  //  keep only one return statment in the render method
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
export default App;
