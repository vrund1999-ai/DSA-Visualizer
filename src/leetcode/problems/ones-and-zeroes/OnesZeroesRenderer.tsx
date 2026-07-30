import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { OnesZeroesData } from "./algorithm";

export function OnesZeroesRenderer({ step }: RendererProps<OnesZeroesData>) {
  const { m, n, dp, current, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      {current && (
        <div className="rounded-md border border-role-current bg-role-current/10 px-3 py-1 text-sm">
          adding <b className="font-mono">"{current.s}"</b> — {current.zeros} zeros, {current.ones} ones
        </div>
      )}

      <div className="flex items-end gap-2">
        <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <span className="h-5" />
          {Array.from({ length: m + 1 }).map((_, i) => (
            <span key={i} className="flex h-9 items-center">{i}</span>
          ))}
          <span className="mt-1 text-[10px]">zeros ↓</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 text-xs text-muted-foreground">
            {Array.from({ length: n + 1 }).map((_, j) => (
              <span key={j} className="flex h-5 w-9 items-center justify-center">{j}</span>
            ))}
          </div>
          {dp.map((row, i) => (
            <div key={i} className="flex gap-1">
              {row.map((v, j) => {
                const best = answer !== null && i === m && j === n;
                return (
                  <span key={j} className={`flex h-9 w-9 items-center justify-center rounded border text-sm font-semibold tabular-nums ${best ? "bg-role-sorted text-white border-role-sorted" : v > 0 ? "bg-role-active/15 border-role-active/40" : "bg-muted/40 border-border text-muted-foreground"}`}>
                    {v}
                  </span>
                );
              })}
            </div>
          ))}
          <span className="text-center text-[10px] text-muted-foreground">ones →</span>
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">max subset size = <b className="tabular-nums">{answer ?? dp[m][n]}</b></div>

      <Legend items={[{ role: "active", label: "Reachable" }, { role: "sorted", label: "Answer dp[m][n]" }]} />
    </div>
  );
}
