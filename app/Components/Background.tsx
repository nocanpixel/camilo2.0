"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import fragmentShader from "../utils/fragmentShader";
import vertexShader from "../utils/vertexShader";
import { MathUtils } from "three";
import { Props3D } from "../types/interfaces";
import { OrbitControls } from "@react-three/drei";

export const Background = () => {


  const Blob = ({position, changeColor=1.0, radio}: Props3D) => {

    const mesh = useRef<any>();

    const uniforms = useMemo(
      () => ({
        u_time: { value: 0.0 },
        u_intensity: { value: 0.9 },
        u_color: { value: changeColor }
      }),
      []
    );

    useFrame((state) => {
      const { clock } = state;

      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        0.75,
        0.02
      );
    });

    return (
      <mesh ref={mesh} position={position} rotation={[Math.floor(Math.random() *100), 0, 0]} scale={2}>
        <octahedronGeometry args={[radio, 25]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          // wireframe
        />
      </mesh>
    );
  };

  return (
    <Canvas shadows camera={{ position: [-0.5, 0, -4.9] }}>
      <Blob position={[-6, 1, 1]} radio={2}/>
      <Blob position={[12, 15, 20]} radio={3}  />
      <Blob position={[0, 7, 10] } radio={3} />
      <Blob position={[5.6, 2, 1]} radio={2} />
      <Blob position={[-12, 15, 20]} radio={3}  />
      <OrbitControls enableRotate />
    </Canvas>
  );
};
