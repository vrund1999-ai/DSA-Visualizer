import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CandiesData } from "./algorithm";

export function CandiesRenderer({ step }: RendererProps<CandiesData>) {
  const { candies, k, lo, hi, s, count, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-3">
        {candies.map((c, i) => {
          const piles = s ? Math.floor(c / s) : 0;
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-sm font-bold tabular-nums">{c}</span>
              <div className="flex flex-wrap justify-center gap-0.5" style={{ maxWidth: "4rem" }}>
                {Array.from({ length: Math.min(piles, 12) }).map((_, p) => (
                  <span key={p} className="h-3 w-3 rounded-sm bg-role-sorted" />
                ))}
              </div>
              <span className="text-[10px] text-muted-foreground">{piles} pile(s)</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">size range [{lo}, {hi}]</span>
        {s !== null && <span className="rounded-md border border-role-current px-3 py-1">try size {s} → {count} piles (need {k})</span>}
        <span className="rounded-md border px-3 py-1">answer = <b className="tabular-nums">{answer ?? "…"}</b></span>
      </div>

      <Legend items={[{ role: "sorted", label: "Sub-pile of size s" }]} />
    </div>
  );
}
