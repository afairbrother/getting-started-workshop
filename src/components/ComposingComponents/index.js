import React, { Component } from "react";

import Button from "./Button";

const styles = {
  padding: "20px",
  border: "1px solid black",
  borderRadius: "5px",
  marginBottom: "20px"
};

class SimpleCTA extends Component {
  render() {
    /*
      1. Add a button to this component
      2. Pass in the button text as props
      3. Add Two CTA containers to the Hello component
      4. Add some styles to your Button component
    */

    return (
      <div style={styles}>
        <h3>A Simple CTA Container</h3>
        <Button />
      </div>
    );
  }
}

export default SimpleCTA;
