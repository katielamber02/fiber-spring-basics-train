import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect, useState } from "react";

export const Heart = () => {
  const [model, setModel] = useState();
  useEffect(() => {
    new GLTFLoader().load("/heart/scene.gltf", setModel);
  }, [model]);
  // console.log(model);
  // return null;
  return model ? <primitive object={model.scene} /> : null;
};
