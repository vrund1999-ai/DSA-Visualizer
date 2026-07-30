import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { LcisData } from "./algorithm";

export function LcisRenderer({ step }: RendererProps<LcisData>) {
  const { nums, i, runStart, cur, best, bestRange, answer } = step.data;

  const roleFor = (idx: number) => {
    if (answer !== null && idx >= bestRange[0] && idx <= bestRange[1]) return "sorted";
    if (idx === i) return "current";
    if (i !== null && idx >= runStart && idx < i) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(idx) => (idx === i ? "i" : "")} showIndex />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">current run = {cur}</span>
        <span className="rounded-md border border-role-sorted px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "active", label: "Current run" }, { role: "sorted", label: "Best run" }]} />
    </div>
  );
}
