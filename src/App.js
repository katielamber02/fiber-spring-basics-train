import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "react-three-fiber";

import Box from "./Box";

function App() {
  return (
    <div className="App">
      MY TEXT
      <Canvas>
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
