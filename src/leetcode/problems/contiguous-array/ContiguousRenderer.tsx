import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ContiguousData } from "./algorithm";

export function ContiguousRenderer({ step }: RendererProps<ContiguousData>) {
  const { nums, pos, sum, best, bestRange, first, answer } = step.data;

  const roleFor = (i: number) => {
    if (answer !== null && bestRange && i >= bestRange[0] && i <= bestRange[1]) return "sorted";
    if (i === pos) return "current";
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === pos ? "i" : "")} showIndex={false} />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">running sum = <b className="tabular-nums">{sum}</b></span>
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">first index of each sum</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {first.map(([k, v]) => (
            <span key={k} className={`rounded-md border px-2 py-1 font-mono text-xs tabular-nums ${k === sum ? "border-role-active bg-role-active/15" : "bg-muted/30"}`}>{k}@{v}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Current index" }, { role: "sorted", label: "Best balanced span" }, { role: "active", label: "Current sum bucket" }]} />
    </div>
  );
}
