import React, { useState, useRef } from "react";
import { useSpring, a } from "react-spring/three";
import { extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    orbitRef.current.update();
  });
  return (
    <orbitControls
      autoRotate
      args={[camera, gl.domElement]}
      ref={orbitRef}
      maxPolarAngle={Math.PI / 3} // rotates only left and right
      minPolarAngle={Math.PI / 2} //
    />
  );
};
