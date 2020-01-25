import React, { useState, useRef } from "react";
import { useSpring, a } from "react-spring/three";
import { extend, useThree, useFrame } from "react-three-fiber";

export const Plane = () => (
  <mesh>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="white" />
  </mesh>
);
