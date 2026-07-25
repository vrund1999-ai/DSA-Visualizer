import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ConsecData } from "./algorithm";

export function ConsecRenderer({ step }: RendererProps<ConsecData>) {
  const { s, i, run, best, runStart, answer } = step.data;
  const chars = s.split("");

  const roleFor = (k: number) => {
    if (k === i) return "current";
    if (i !== null && k >= runStart && k < i) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} showIndex cellWidth="w-9" />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-active px-3 py-1">current run = <b className="tabular-nums">{run}</b></span>
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Current char" }, { role: "active", label: "Current run" }]} />
    </div>
  );
}
