import React, { Component } from "react";
import "./App.css";
import annyang from "./Annyang";
import imagesUrls from "./imagesUrls";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      voiceStatus: "hello",
      selectedName: "boubou",
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
    this.setState({
      selectedName: "mickeyMouse",
    });
  };

  showDonaldDuck = () => {
    this.setState({
      selectedName: "donaldDuck",
    });
  };

  showGoofy = () => {
    this.setState({
      selectedName: "goofy",
    });
  };

  render() {
    const { voiceStatus, selectedName } = this.state;

    return (
      <div className="App">
        <div className="App__annyang-status">
          {!annyang
            ? "Speech Recognition / Annyang is not supported"
            : `Annyang is ${voiceStatus}!!`}
        </div>

        {annyang && (
          <>
          <div className="App__instructions">Say one of these names</div>
            <ul>
              <li>Mickey Mouse</li>
              <li>Donald Duck</li>
              <li>Goofy</li>
            </ul>

            <img
              alt="Guillaume logo"
              className="image"
              src={imagesUrls[selectedName]}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
