/** Side of the square plot in meters. 1 three.js unit = 1 meter. */
export const PLOT_SIZE = 8;

/** Depth of the soil cross-section under the plot, visible from the side (the "pocket" look). */
export const SOIL_DEPTH = 0.6;

/** Thickness of the turf layer on top of the soil. */
export const TURF_DEPTH = 0.08;

/** Neutral placeholder palette until the visual style is settled. */
export const COLORS = {
  background: "#ece8e1",
  turf: "#9aab84",
  soil: "#7a5f4b",
  gridCell: "#7f8f6c",
  gridSection: "#5f6e4f",
} as const;
