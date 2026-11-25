"use client";

import dynamic from "next/dynamic";

/**
 * three.js only runs in the browser (WebGL), so the scene is not prerendered
 * on the server and loads as a separate chunk; the page shell renders right away.
 * `ssr: false` is only allowed in a Client Component, hence this wrapper.
 */
const GardenScene = dynamic(() => import("./GardenScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-sm text-zinc-500">
      Loading scene…
    </div>
  ),
});

export function SceneLoader() {
  return (
    <div className="absolute inset-0">
      <GardenScene />
    </div>
  );
}
