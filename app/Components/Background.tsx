"use client";
import {
  Center,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  HueSaturation,
  LUT,
} from "@react-three/postprocessing";
import { useRef } from "react";
export const Background = () => {

  return (
    <Canvas shadows camera={{ position: [-20, -1, 2], fov: 10 }}>
      <color attach="background" args={["#000000"]} />
      <Stars saturation={1} count={2500} speed={0.5} radius={4} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.2}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  );
};
