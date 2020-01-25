import React from "react";

import "./App.css";
import { Canvas } from "react-three-fiber";
import { Box } from "./Box";
import { Plane } from "./Plane";
import { Controls } from "./Controls";
import * as THREE from "three";

function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 5] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFShadowMap;
        }}
      >
        <fog attach="fog" args={["white", 5, 15]} />
        <Controls />
        <Box />
        <Plane />
      </Canvas>
      <h1>hello</h1>
    </>
  );
}

export default App;
