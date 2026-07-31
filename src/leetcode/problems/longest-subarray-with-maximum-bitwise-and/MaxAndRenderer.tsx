import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MaxAndData } from "./algorithm";

export function MaxAndRenderer({ step }: RendererProps<MaxAndData>) {
  const { nums, max, scan, best, bestWindow, answer } = step.data;

  const roleFor = (i: number) => {
    if (answer !== null && bestWindow && i >= bestWindow[0] && i <= bestWindow[1]) return "sorted";
    if (i === scan) return "current";
    if (nums[i] === max) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">max element = {max}</span>

      <ArrayCells values={nums} roleFor={roleFor} showIndex={false} />

      <div className="rounded-md border px-3 py-1 text-sm">
        longest run = <b className="tabular-nums">{answer ?? best}</b>
      </div>

      <Legend items={[{ role: "active", label: "equals max" }, { role: "current", label: "scanning" }, { role: "sorted", label: "best run" }]} />
    </div>
  );
}
