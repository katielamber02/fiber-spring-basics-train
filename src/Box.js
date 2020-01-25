import React, { useState } from "react";
import { useSpring, a } from "react-spring/three";

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
      castShadow
    >
      {/* <ambientLight /> */}
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      {/* <a.meshBasicMaterial attach="material" color={props.color} /> */}
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};
