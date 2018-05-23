import React from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";
// import ThinkingInComponents from "./components/ThinkingInComponents";

const styles = {
  fontFamily: "Helvetica, sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello />
  </div>
);

render(<App />, document.getElementById("root"));
