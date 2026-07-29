import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxChunksData } from "./algorithm";

export function MaxChunksRenderer({ step }: RendererProps<MaxChunksData>) {
  const { arr, i, max, boundaries, chunks, answer } = step.data;

  // color cells by which chunk they belong to (split at boundaries)
  const chunkOf = (idx: number) => boundaries.filter((b) => b < idx).length;

  const roleFor = (idx: number) => {
    if (idx === i) return "current";
    if (i !== null && idx < i) return chunkOf(idx) % 2 === 0 ? "active" : "visited";
    return "default";
  };

  const badge = (idx: number) => (boundaries.includes(idx) ? "┃" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={arr} roleFor={roleFor} badge={badge} showIndex cellWidth="w-11" />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">running max = <b className="tabular-nums">{max}</b></span>
        <span className="rounded-md border px-3 py-1">chunks = <b className="tabular-nums">{answer ?? chunks}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Current index" }, { role: "active", label: "Chunk (even)" }, { role: "visited", label: "Chunk (odd)" }]} />
      <p className="text-xs text-muted-foreground">badge ┃ marks a chunk boundary (running max = index)</p>
    </div>
  );
}
