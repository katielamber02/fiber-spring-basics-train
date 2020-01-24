import React, { Component } from "react";

export default class Box extends Component {
  render() {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" color="red" />
      </mesh>
    );
  }
}
