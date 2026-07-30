import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { EnergyData } from "./algorithm";

export function EnergyRenderer({ step }: RendererProps<EnergyData>) {
  const { energy, k, dp, i, best, bestStart, answer } = step.data;

  // chain from bestStart
  const chain = new Set<number>();
  if (answer !== null && bestStart !== null) {
    for (let j = bestStart; j < energy.length; j += k) chain.add(j);
  }

  const dpRole = (idx: number) => {
    if (answer !== null && chain.has(idx)) return "sorted";
    if (idx === i) return "current";
    if (i !== null && idx === i + k) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">teleport distance k = {k}</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">energy</span>
        <ArrayCells values={energy} roleFor={(idx) => (idx === i ? "current" : answer !== null && chain.has(idx) ? "active" : "default")} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">dp (total from here)</span>
        <ArrayCells values={dp} roleFor={dpRole} />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">max energy = <b className="tabular-nums">{answer ?? (best === -Infinity ? "…" : best)}</b></div>

      <Legend items={[{ role: "current", label: "dp[i]" }, { role: "compared", label: "dp[i+k]" }, { role: "sorted", label: "Best chain" }]} />
    </div>
  );
}
