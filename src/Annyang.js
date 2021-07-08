import annyang from "annyang";

class Annyang {
  // to check whether annyang is supported
  isSupported() {
    return annyang !== null;
  }

  // to start voice recognition
  start() {
    if (annyang) {
      annyang.start();
    }
  }

  // to stop voice recognition
  abort() {
    if (annyang) {
      annyang.abort();
    }
  }

  // to start voice recognition again from abort
  resume() {
    if (annyang) {
      annyang.resume();
    }
  }

  // to predefine the command word(s) you want to say. Once annyang picks up those words, it will trigger the callback corresponding to each command
  addCommands(showMickey, showDonald, showGoofy) {
    if (annyang) {
      annyang.addCommands({
        mickey: () => showMickey(),
        donald: () => showDonald(),
        goofy: () => showGoofy(),
      });
    }
  }

  // where we get the voice engine status and voice input
  addCallback(engineCallback, resultCallback) {
    if (annyang) {
      /* eslint-disable no-unused-vars */
      annyang.addCallback("start", (event) => engineCallback("on"));
      annyang.addCallback("soundstart", (event) => engineCallback("listening"));
      annyang.addCallback("end", (event) => engineCallback("off"));
      annyang.addCallback("error", (event) => engineCallback(event.error));
      annyang.addCallback("errorNetwork", (event) =>
        engineCallback("network error")
      );
      annyang.addCallback("errorPermissionBlocked", (event) =>
        engineCallback("permission blocked")
      );
      annyang.addCallback("errorPermissionDenied", (event) =>
        engineCallback("permission denied")
      );
      annyang.addCallback("result", (event) => resultCallback(event));
    }
  }
}

export default new Annyang();
