"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import fragmentShader from "../utils/fragmentShader";
import vertexShader from "../utils/vertexShader";
import { MathUtils } from "three";
import { Props3D } from "../types/interfaces";
import { OrbitControls } from "@react-three/drei";


export const Background = () => {

  const Blob = ({position, changeColor=1, radio}: Props3D) => {

    const mesh = useRef<any>();

    const uniforms = useMemo(
      () => ({
        u_time: { value: 0.0 },
        u_intensity: { value: 0.1 },
        u_color: { value: changeColor }
      }),
      []
    );

    useFrame((state) => {
      const { clock } = state;
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
        0.10,
        0.02
      );
    });

    return (
      <mesh ref={mesh} position={position} scale={2.1}>
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
    <Canvas shadows camera={{ position: [-0.5, 0, -4.9] }} style={{zIndex:20}} >
      <Blob position={[0, 1.4, 0]} radio={0.4} />
      <OrbitControls enableRotate />
    </Canvas>
  );
};
