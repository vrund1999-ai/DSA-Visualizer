import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PartitionData } from "./algorithm";

export function PartitionRenderer({ step }: RendererProps<PartitionData>) {
  const { arr, k, dp, i, j, cur, answer } = step.data;

  const arrRole = (idx: number) => {
    if (i !== null && j !== null && idx >= i - j && idx < i) return "current";
    if (i !== null && idx < i) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">arr (k = {k}){j !== null ? ` · block max ${cur}` : ""}</span>
        <ArrayCells values={arr} roleFor={arrRole} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">dp (best sum for first i elements)</span>
        <ArrayCells values={dp} roleFor={(idx) => (idx === i ? "sorted" : idx === (i !== null && j !== null ? i - j : -2) ? "compared" : "default")} />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">maximum sum = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Current block" }, { role: "visited", label: "Already partitioned" }, { role: "sorted", label: "dp[i]" }, { role: "compared", label: "dp[i−j]" }]} />
    </div>
  );
}
