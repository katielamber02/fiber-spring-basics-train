import React, { Component, useState } from "react";

export const Box = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color={hovered ? "aqua" : "grey"} />
    </mesh>
  );
};
