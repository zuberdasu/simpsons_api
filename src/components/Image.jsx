import React, { Component } from "react";

class Image extends Component {
  render() {
    const image = this.props.image;
    return <img src={image} alt="" />;
  }
}

export default Image;
