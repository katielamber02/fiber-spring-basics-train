import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect, useState } from "react";

export const SpaceShip = () => {
  const [model, setModel] = useState();
  useEffect(() => {
    new GLTFLoader().load("/sphere/scene.gltf", setModel);
  }, [model]);
  // console.log(model);
  // return null;
  return model ? <primitive object={model.scene} /> : null;
};
