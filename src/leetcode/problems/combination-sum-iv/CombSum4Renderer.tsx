import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CombSum4Data } from "./algorithm";

export function CombSum4Renderer({ step }: RendererProps<CombSum4Data>) {
  const { nums, target, dp, t, sources, answer } = step.data;
  const srcSet = new Set(sources);

  const roleFor = (idx: number) => {
    if (idx === t) return "current";
    if (srcSet.has(idx)) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">ordered combinations from [{nums.join(", ")}] summing to {target}</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">dp (indexed by target sum)</span>
        <ArrayCells values={dp} roleFor={roleFor} showIndex />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">count = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "dp[t]" }, { role: "compared", label: "dp[t − num] sources" }]} />
    </div>
  );
}
