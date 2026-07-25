import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MinAddData } from "./algorithm";

export function MinAddRenderer({ step }: RendererProps<MinAddData>) {
  const { s, idx, open, add, kind, answer } = step.data;
  const chars = s.split("");

  const roleFor = (i: number) => {
    if (i !== idx) return "default";
    if (kind === "stray") return "compared";
    if (kind === "match") return "sorted";
    return "current";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} showIndex cellWidth="w-10" />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">open = <b className="tabular-nums">{open}</b></span>
        <span className="rounded-md border px-3 py-1">add = <b className="tabular-nums">{add}</b></span>
        <span className="rounded-md border px-3 py-1">insertions = <b className="tabular-nums">{answer ?? add + open}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "'(' opened" }, { role: "sorted", label: "')' matched" }, { role: "compared", label: "stray ')'" }]} />
    </div>
  );
}
