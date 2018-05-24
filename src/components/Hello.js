import React, { Component } from "react";

// import SimpleCTA from "./ComposingComponents";
import StatefulCTA from "./ComponentState";

// Functional Component
// const Hello = () => {
//   return <h1>Hello World</h1>;
// };

// export default Hello;

// Class based component
export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <StatefulCTA />
        <StatefulCTA />
      </div>
    );
  }
}
