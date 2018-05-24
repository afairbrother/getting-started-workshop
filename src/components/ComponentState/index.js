import React, { Component } from "react";

import Button from "./Button";

const styles = {
  padding: "20px",
  border: "1px solid black",
  borderRadius: "5px",
  marginBottom: "20px"
};

class StatefulCTA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }
  
  render() {
    /*
      1. Write a function called handleButtonClick
      2. Add the function as an onClick to the button component
      3. Update the isActive state of the component when the button is clicked 
      4. Import and use the Button Component
      5. Pass a function down to the button that updates the state of the StatefulCTA component
    */
    return (
      <div style={styles}>
        <h3>A Stateful CTA container</h3>
        {this.state.isActive && <div>UI is a function of state!</div>}
        <button>Click Me!</button>
      </div>
    );
  }
}

export default StatefulCTA;
