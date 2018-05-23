import React from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";
// import HelloWithProps from "./components/HelloWithProps";
// import SimpleCTA from "./components/ComposingComponents";

const styles = {
  fontFamily: "Helvetica, sans-serif"
};

const App = () => (
  <div style={styles}>
    <Hello />
  </div>
);

render(<App />, document.getElementById("root"));
