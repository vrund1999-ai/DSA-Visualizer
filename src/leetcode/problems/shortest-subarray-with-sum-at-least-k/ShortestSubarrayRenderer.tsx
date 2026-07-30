import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ShortestSubarrayData } from "./algorithm";

export function ShortestSubarrayRenderer({ step }: RendererProps<ShortestSubarrayData>) {
  const { nums, k, prefix, j, deque, best, bestWindow, answer } = step.data;
  const dqSet = new Set(deque);

  const prefixRole = (i: number) => {
    if (i === j) return "current";
    if (dqSet.has(i)) return "active";
    return "default";
  };

  const numRole = (i: number) => {
    if (bestWindow && i >= bestWindow[0] && i < bestWindow[1]) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">k = {k}</span>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums</span>
        <ArrayCells values={nums} roleFor={numRole} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">prefix sums</span>
        <ArrayCells values={prefix} roleFor={prefixRole} showIndex cellWidth="w-9" />
      </div>

      <div className="text-xs text-muted-foreground">
        deque (indices): [{deque.join(", ")}]
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        shortest length = <b className="tabular-nums">{answer ?? (best === Infinity ? "∞" : best)}</b>
      </div>

      <Legend
        items={[
          { role: "current", label: "j" },
          { role: "active", label: "in deque" },
          { role: "sorted", label: "best window" },
        ]}
      />
    </div>
  );
}
