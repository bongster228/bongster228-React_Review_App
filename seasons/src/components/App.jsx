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

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinnder />;
  }
}
export default App;
