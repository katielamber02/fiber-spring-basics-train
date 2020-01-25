import React from "react";

import "./App.css";
import { Canvas } from "react-three-fiber";
import { Box } from "./Box";
import { Plane } from "./Plane";
import { Controls } from "./Controls";
import * as THREE from "three";
import { SpaceShip } from "./Spaceship";
import { Heart } from "./Heart";

function App() {
  return (
    <div>
      <Canvas
        camera={{ position: [0, 0, 5] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFShadowMap;
        }}
      >
        <fog attach="fog" args={["white", 5, 10]} />
        <Controls />
        {/* <Heart /> */}
        <Box />
        <Plane />
        <SpaceShip />
      </Canvas>

      {/* <h1>hello</h1> */}
    </div>
  );
}

export default App;
