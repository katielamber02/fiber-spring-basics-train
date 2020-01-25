import React, { useState, useRef } from "react";
import { useSpring, a } from "react-spring/three";
import { extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Controls = () => {
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

export const Box = () => {
  //const myRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5, 1.5] : [1, 1, 1, 1],
    color: hovered ? "aqua" : "grey"
  });
  // useFrame(() => {
  //   myRef.current.rotation.y += 0.01;
  // });
  return (
    <a.mesh
      // ref={myRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
    >
      <Controls />
      <ambientLight />
      <spotLight position={[0, 5, 10]} />
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      {/* <a.meshBasicMaterial attach="material" color={props.color} /> */}
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};
