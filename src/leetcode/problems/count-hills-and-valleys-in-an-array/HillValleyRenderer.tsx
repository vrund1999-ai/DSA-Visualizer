import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { HillValleyData } from "./algorithm";

export function HillValleyRenderer({ step }: RendererProps<HillValleyData>) {
  const { nums, idx, kind, count, answer } = step.data;

  const roleFor = (i: number) => {
    if (i !== idx) return "default";
    if (kind === "hill") return "sorted";
    if (kind === "valley") return "compared";
    return "current";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-11" />

      <div className="flex items-center gap-3 text-sm">
        {kind && idx !== null && <span className="rounded-md border px-3 py-1">index {idx}: {kind}</span>}
        <span className="rounded-md border px-3 py-1">count = <b className="tabular-nums">{answer ?? count}</b></span>
      </div>

      <Legend items={[{ role: "sorted", label: "Hill" }, { role: "compared", label: "Valley" }, { role: "current", label: "Neither / plateau" }]} />
    </div>
  );
}
