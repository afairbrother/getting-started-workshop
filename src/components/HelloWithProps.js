import React, { Component } from "react";

export default class HelloWithProps extends Component {
  render() {
    return <h1>Welcome to University Week, {this.props.name}</h1>;
  }
}
