import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "react-three-fiber";
import { Box } from "./Box";
import { Plane } from "./Plane";
import { Controls } from "./Controls";

function App() {
  return (
    <div className="App">
      MY TEXT
      <Canvas>
        <Plane />
        <Controls />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
