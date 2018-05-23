import React, { Component } from "react";

const styles = {
  padding: "10px",
  backgroundColor: "green",
  color: "white",
  borderRadius: "5px"
}

class Button extends Component {
  render() {
    // Button Code goes here.
    return <button style={styles}>Button</button>;
  }
}

export default Button;
