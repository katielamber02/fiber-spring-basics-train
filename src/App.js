import React from "react";

import "./App.css";
import { Canvas } from "react-three-fiber";
import { Box } from "./Box";
import { Plane } from "./Plane";
import { Controls } from "./Controls";

function App() {
  return (
    <div className="App">
      MY TEXT
      <Canvas camera={{ position: [0, 0, 5] }}>
        <fog attach="fog" args={["white", 5, 15]} />
        <Controls />
        <Box />
        <Plane />
      </Canvas>
    </div>
  );
}

export default App;
