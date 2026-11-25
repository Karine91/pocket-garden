"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { COLORS, PLOT_SIZE } from "./constants";
import { Plot } from "./Plot";

const HALF = PLOT_SIZE / 2;

export default function GardenScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 9, 10], fov: 40, near: 0.1, far: 100 }}
    >
      <color attach="background" args={[COLORS.background]} />

      {/* Soft fill light: warm sky from above, ground bounce from below. */}
      <hemisphereLight args={["#fff8ec", "#8c7a66", 1.4]} />

      {/* Shadow-casting "sun". The shadow camera covers the plot with some margin. */}
      <directionalLight
        position={[6, 10, 4]}
        intensity={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-HALF - 1}
        shadow-camera-right={HALF + 1}
        shadow-camera-top={HALF + 1}
        shadow-camera-bottom={-HALF - 1}
        shadow-camera-near={1}
        shadow-camera-far={30}
        shadow-bias={-0.0005}
      />

      <Plot />

      {/* Constrained orbit: no panning, the camera can't go below the ground. */}
      <OrbitControls
        makeDefault
        target={[0, 0, 0]}
        enablePan={false}
        enableDamping
        minDistance={8}
        maxDistance={24}
        minPolarAngle={0.2}
        maxPolarAngle={Math.PI / 2.3}
      />
    </Canvas>
  );
}
