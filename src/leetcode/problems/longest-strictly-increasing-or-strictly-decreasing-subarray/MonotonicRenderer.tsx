import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MonotonicData } from "./algorithm";

export function MonotonicRenderer({ step }: RendererProps<MonotonicData>) {
  const { nums, pos, inc, dec, dir, best, answer } = step.data;

  const runLen = Math.max(inc, dec);
  const roleFor = (i: number) => {
    if (pos !== null && i <= pos && i > pos - runLen) return "sorted";
    if (i === pos) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === pos ? (dir === "up" ? "↑" : dir === "down" ? "↓" : "=") : "")} />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">inc = <b className="tabular-nums">{inc}</b></span>
        <span className="rounded-md border px-3 py-1">dec = <b className="tabular-nums">{dec}</b></span>
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Current index" }, { role: "sorted", label: "Current run" }]} />
    </div>
  );
}
