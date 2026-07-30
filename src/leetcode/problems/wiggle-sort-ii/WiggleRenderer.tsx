import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { WiggleData } from "./algorithm";

export function WiggleRenderer({ step }: RendererProps<WiggleData>) {
  const { sorted, mid, result, from, to, answer } = step.data;

  const sortedRole = (idx: number) => {
    if (idx === from) return "current";
    return idx < mid ? "active" : "pivot";
  };
  const resultRole = (idx: number) => {
    if (idx === to) return "current";
    if (result[idx] !== null) return idx % 2 === 0 ? "active" : "pivot";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">sorted · small half | large half</span>
        <ArrayCells values={sorted} roleFor={sortedRole} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">wiggle result (even ↓, odd ↑)</span>
        <ArrayCells values={result.map((v) => (v === null ? "·" : v))} roleFor={resultRole} showIndex />
      </div>

      {answer && <div className="rounded-md border px-3 py-1 text-sm">[<b className="tabular-nums">{answer.join(", ")}</b>]</div>}

      <Legend items={[{ role: "active", label: "Small half / even slot" }, { role: "pivot", label: "Large half / odd slot" }, { role: "current", label: "Placing" }]} />
    </div>
  );
}
