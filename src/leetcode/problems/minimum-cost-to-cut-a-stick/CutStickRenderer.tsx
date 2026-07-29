import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CutStickData } from "./algorithm";

export function CutStickRenderer({ step }: RendererProps<CutStickData>) {
  const { n, positions, dp, i, j, k, answer } = step.data;
  const m = positions.length;
  const fmt = (v: number) => (v === Infinity ? "∞" : `${v}`);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stick (length {n})</span>
        <div className="relative h-8" style={{ width: "280px" }}>
          <div className={`absolute top-3 h-2 rounded ${i !== null && j !== null ? "" : "bg-muted"}`} style={{ left: 0, width: "100%", background: "var(--muted, #ddd)" }} />
          {i !== null && j !== null && (
            <div className="absolute top-3 h-2 rounded bg-role-current" style={{ left: `${(positions[i] / n) * 280}px`, width: `${((positions[j] - positions[i]) / n) * 280}px` }} />
          )}
          {positions.map((p, idx) => (
            <div key={idx} className="absolute -top-1" style={{ left: `${(p / n) * 280 - 1}px` }}>
              <div className={`h-6 w-0.5 ${idx === k ? "bg-role-compared" : idx === 0 || idx === m - 1 ? "bg-foreground" : "bg-role-active"}`} />
              <span className="absolute top-6 -translate-x-1/2 text-[9px] text-muted-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp[i][j] (interval cost)</span>
        <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `repeat(${m}, 2rem)` }}>
          {dp.map((row, r) => row.map((v, c) => (
            <div key={`${r}-${c}`} className={`flex h-6 items-center justify-center rounded border text-[9px] tabular-nums ${r === i && c === j ? "border-role-current bg-role-current text-white" : c > r ? "border-border bg-muted/20" : "border-transparent"}`}>{c > r ? fmt(v) : ""}</div>
          )))}
        </div>
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">min cost = {answer}</div>}

      <Legend items={[{ role: "current", label: "Current segment" }, { role: "compared", label: "First cut k" }, { role: "active", label: "Cut position" }]} />
    </div>
  );
}
