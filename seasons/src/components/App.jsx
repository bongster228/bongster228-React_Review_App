import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    //  initialize state
    this.state = { lat: null };

    //  get user's current location
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //  use setState to update state
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err.message)
    );
  }

  render() {
    return <div className="ui container">Latitude: {this.state.lat}</div>;
  }
}
export default App;
