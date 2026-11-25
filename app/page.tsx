import { SceneLoader } from "@/components/scene/SceneLoader";

export default function Home() {
  return (
    <div className="flex h-dvh flex-col">
      <header className="flex h-12 shrink-0 items-center border-b border-black/10 px-4">
        <h1 className="text-sm font-semibold tracking-tight">Pocket Garden</h1>
      </header>
      <main className="relative flex-1">
        <SceneLoader />
      </main>
    </div>
  );
}
