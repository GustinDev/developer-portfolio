import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  {
    /* Importamos el modelo */
  }
  const earth = useGLTF("./planet/scene.gltf");
  {
    /* Lo mostramos, definimos en que eje rota y lo posicionamos */
  }
  return (
    <primitive object={earth.scene} scale={2.2} position-y={0} rotation-y={0} />
  );
};

{
  /* Posicionamos la cámara, las luces y el suspense (el loading... mientras carga se muestra Canvas Loader)*/
}
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Sacamos el modelo - El esperar*/}
      <Suspense fallback={<CanvasLoader />}>
        {/* Lo hacemos rotar */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
