import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CandySwapData } from "./algorithm";

export function CandySwapRenderer({ step }: RendererProps<CandySwapData>) {
  const { alice, bob, sumA, sumB, delta, scan, answer } = step.data;

  const aliceRole = (i: number) => (answer && alice[i] === answer[0] && i === scan ? "sorted" : i === scan ? "current" : "active");
  const bobRole = (i: number) => (answer && bob[i] === answer[1] ? "sorted" : "compared");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">Alice (sum {sumA})</span>
        <ArrayCells values={alice} roleFor={aliceRole} showIndex={false} cellWidth="w-9" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">Bob (sum {sumB})</span>
        <ArrayCells values={bob} roleFor={bobRole} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="text-xs text-muted-foreground tabular-nums">delta = {delta}</div>

      <div className="rounded-md border px-3 py-1 text-sm">
        swap = <b className="tabular-nums">{answer ? `[${answer[0]}, ${answer[1]}]` : "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "trying Alice box" }, { role: "sorted", label: "swap pair" }]} />
    </div>
  );
}
