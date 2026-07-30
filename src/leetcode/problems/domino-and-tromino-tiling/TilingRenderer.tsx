import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { TilingData } from "./algorithm";

export function TilingRenderer({ step }: RendererProps<TilingData>) {
  const { n, dp, i, answer } = step.data;

  const roleFor = (idx: number) => {
    if (idx === i) return "current";
    if (i !== null && i >= 3 && (idx === i - 1 || idx === i - 3)) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">tilings of a 2×{n} board · dp[i] = 2·dp[i−1] + dp[i−3]</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">dp</span>
        <ArrayCells values={dp} roleFor={roleFor} showIndex />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">ways = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "dp[i]" }, { role: "compared", label: "dp[i−1], dp[i−3]" }]} />
    </div>
  );
}
