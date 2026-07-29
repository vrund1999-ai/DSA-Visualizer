import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { IntBreakData } from "./algorithm";

export function IntBreakRenderer({ step }: RendererProps<IntBreakData>) {
  const { n, dp, i, bestJ, answer } = step.data;

  const roleFor = (k: number) => {
    if (k === i) return "current";
    if (i !== null && bestJ !== null && (k === bestJ || k === i - bestJ)) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">n = <b className="tabular-nums">{n}</b></div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp[i] = max product</span>
        <ArrayCells values={dp} roleFor={roleFor} showIndex cellWidth="w-11" />
      </div>

      {i !== null && bestJ !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">dp[{i}]: best first part = {bestJ}, remainder {i - bestJ}</div>
      )}

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">max product = {answer}</div>}

      <Legend items={[{ role: "current", label: "dp[i]" }, { role: "compared", label: "Best split parts" }]} />
    </div>
  );
}
