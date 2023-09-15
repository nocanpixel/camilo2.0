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
//   function SecondBox(props: any) {
//     const ref = useRef();

//     return (
//       <group {...props} dispose={null}>
//         <mesh position={[1, 1, 3]}>
//           <sphereGeometry args={[0.06, 32]} />
//           <meshStandardMaterial
//             toneMapped={false}
//             emissive="hotpink"
//             color="orange"
//             emissiveIntensity={4}
//           />
//         </mesh>
//       </group>
//     );
//   }

  function Env() {
    return (
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_sunset_1k.hdr"
        resolution={1024}
      >
        <group rotation={[0, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={10}
            position={[0, 10, -10]}
            scale={10}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
          <Lightformer
            intensity={0.1}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[-5, 1, -1]}
            rotation-y={Math.PI / 2}
            scale={[50, 10, 1]}
          />
          <Lightformer
            intensity={0.1}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[10, 1, 0]}
            rotation-y={-Math.PI / 2}
            scale={[50, 10, 1]}
          />
          <Lightformer
            color="white"
            intensity={0.2}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
            position={[0, 1, 0]}
            scale={[10, 100, 1]}
          />
        </group>
      </Environment>
    );
  }

  const ambient = useRef(null);
  const spot = useRef(null);
  return (
    <Canvas shadows camera={{ position: [-20, -1, 2], fov: 10 }}>
      {/* Lights */}
      <ambientLight ref={ambient} intensity={10} />
      <pointLight position={[10, -10, 0]} intensity={0.05} />
      <pointLight position={[0, 10, 0]} intensity={0.05} />
      <pointLight position={[-10, 0, 0]} intensity={0.05} />
      <spotLight
        ref={spot}
        intensity={1}
        distance={7}
        angle={1}
        penumbra={1}
        position={[0, 0, 1]}
      />
      <color attach="background" args={["#000000"]} />
      <Stars saturation={1} count={2500} speed={0.5} radius={4} />
      <Env />
      <EffectComposer disableNormalPass>
        <Bloom mipmapBlur luminanceThreshold={1} />
        <BrightnessContrast brightness={0} contrast={0.1} />
        <HueSaturation hue={0} saturation={-0.25} />
      </EffectComposer>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.2}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  );
};
