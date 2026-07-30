import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { Game21Data } from "./algorithm";

export function Game21Renderer({ step }: RendererProps<Game21Data>) {
  const { n, k, maxPts, dp, i, result, answer } = step.data;
  const maxP = Math.max(...dp, 0.01);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="text-sm text-muted-foreground">n={n}, k={k}, maxPts={maxPts} · P(score ≤ n)</div>

      <div className="flex items-end gap-0.5" style={{ height: "150px" }}>
        {dp.map((p, idx) => {
          const inStop = idx >= k && idx <= n;
          const cls = idx === i ? "bg-role-current" : inStop ? "bg-role-sorted/70" : "bg-role-active/50";
          return (
            <div key={idx} className="flex flex-col items-center justify-end gap-0.5">
              <div className={`w-5 rounded-t ${cls}`} style={{ height: `${(p / maxP) * 120 + 2}px` }} />
              <span className="text-[8px] tabular-nums text-muted-foreground">{idx}</span>
            </div>
          );
        })}
      </div>

      <div className="text-xs text-muted-foreground">bars ≥ k (score {k}…{n}) count toward the answer</div>

      <div className="rounded-md border px-3 py-1 text-sm">probability = <b className="tabular-nums">{(answer ?? result).toFixed(5)}</b></div>

      <Legend items={[{ role: "current", label: "Computing dp[i]" }, { role: "sorted", label: "Stop zone (≥ k)" }, { role: "active", label: "Still drawing" }]} />
    </div>
  );
}
