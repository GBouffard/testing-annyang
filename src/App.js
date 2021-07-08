import React, { Component } from "react";
import "./App.css";
import annyang from "./Annyang";
import imagesUrls from "./imagesUrls";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      voiceStatus: "hello",
    };
  }

  componentDidMount() {
    // 1) bind with predefined words/commands on mount
    annyang.addCommands(
      this.showMickeyMouse,
      this.showDonaldDuck,
      this.showGoofy
    );

    // 2) add callbacks?
    annyang.addCallback(this.engineCallback, this.resultCallback);

    // 3) start Annyang
    annyang.start();

    this.setState({
      voiceStatus: annyang.isSupported() ? "Supported" : "Unsupported",
    });
  }

  // remove annyang on unmount
  componentWillUnmount() {
    annyang.abort();
  }

  // eslint-disable-next-line
  engineCallback = (status) => {
    // Set engine status
  };

  // eslint-disable-next-line
  resultCallback = (voiceInput) => {
    // Match voice input with player commands
  };

  showMickeyMouse = () => {
    window.alert("this will show Mickey Mouse");
  };

  showDonaldDuck = () => {
    window.alert("this will show Donald Duck");
  };

  showGoofy = () => {
    window.alert("this will show Goofy");
  };

  render() {
    return (
      <div className="App">
        {!annyang ? (
          "Speech Recognition / Annyang is not supported"
        ) : (
          <div>
            <div>Annyang status: {this.state.voiceStatus.toUpperCase()}</div>
            <img
              alt="Guillaume logo"
              className="image"
              src={imagesUrls.mickeyMouse}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
