import { Grid } from "@react-three/drei";
import { COLORS, PLOT_SIZE, SOIL_DEPTH, TURF_DEPTH } from "./constants";

/**
 * Diorama plot: a turf layer on top of a soil cross-section.
 * The top of the turf sits exactly at y = 0, so objects are placed at zero height.
 */
export function Plot() {
  return (
    <group>
      <mesh position={[0, -TURF_DEPTH / 2, 0]} receiveShadow>
        <boxGeometry args={[PLOT_SIZE, TURF_DEPTH, PLOT_SIZE]} />
        <meshStandardMaterial color={COLORS.turf} roughness={1} />
      </mesh>

      <mesh position={[0, -TURF_DEPTH - SOIL_DEPTH / 2, 0]} receiveShadow>
        <boxGeometry args={[PLOT_SIZE, SOIL_DEPTH, PLOT_SIZE]} />
        <meshStandardMaterial color={COLORS.soil} roughness={1} />
      </mesh>

      {/* Slightly above the turf to avoid z-fighting. */}
      <Grid
        position={[0, 0.002, 0]}
        args={[PLOT_SIZE, PLOT_SIZE]}
        cellSize={1}
        cellThickness={0.6}
        cellColor={COLORS.gridCell}
        sectionSize={4}
        sectionThickness={1}
        sectionColor={COLORS.gridSection}
        fadeDistance={40}
      />
    </group>
  );
}
