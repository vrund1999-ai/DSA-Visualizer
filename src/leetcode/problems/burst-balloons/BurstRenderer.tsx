import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BurstData } from "./algorithm";

export function BurstRenderer({ step }: RendererProps<BurstData>) {
  const { a, dp, i, j, k, answer } = step.data;
  const n = a.length;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex gap-1">
        {a.map((v, idx) => {
          const isEnd = idx === i || idx === j;
          const isK = idx === k;
          const inInterval = i !== null && j !== null && idx > i && idx < j;
          return (
            <div key={idx} className={`flex size-9 items-center justify-center rounded-full border-2 text-sm font-bold tabular-nums ${isK ? "border-role-compared bg-role-compared text-white" : isEnd ? "border-role-current bg-role-current/20" : inInterval ? "border-role-active bg-role-active/15" : idx === 0 || idx === n - 1 ? "border-border bg-muted/40 text-muted-foreground" : "border-border bg-muted/30"}`}>{v}</div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp[i][j] (coins in interval)</span>
        <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `repeat(${n}, 2.1rem)` }}>
          {dp.map((row, r) => row.map((v, c) => (
            <div key={`${r}-${c}`} className={`flex h-6 items-center justify-center rounded border text-[9px] tabular-nums ${r === i && c === j ? "border-role-current bg-role-current text-white" : c > r + 1 ? "border-border bg-muted/20" : "border-transparent"}`}>{c > r + 1 ? v : ""}</div>
          )))}
        </div>
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">max coins = {answer}</div>}

      <Legend items={[{ role: "current", label: "Interval ends" }, { role: "compared", label: "Last balloon burst" }, { role: "active", label: "Inside interval" }]} />
    </div>
  );
}
