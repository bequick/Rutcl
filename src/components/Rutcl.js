import React, { Component } from "react";

export default class Rutcl extends Component {
  constructor() {
    super();
    this.state = { estado: false };
  }

  render() {
    return (
      <input
        type="text"
        placeholder="11.111.111-1"
        name="title"
        size="12"
        maxLength="12"
      />
    );
  }
}
