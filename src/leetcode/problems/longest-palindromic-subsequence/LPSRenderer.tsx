import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { LPSData } from "./algorithm";

export function LPSRenderer({ step }: RendererProps<LPSData>) {
  const { s, dp, cell, matched, answer } = step.data;
  const n = s.length;

  const cellClass = (i: number, j: number) => {
    if (cell && cell[0] === i && cell[1] === j) return "bg-role-current text-white border-role-current";
    if (cell && ((matched && i === cell[0] + 1 && j === cell[1] - 1) || (!matched && ((i === cell[0] + 1 && j === cell[1]) || (i === cell[0] && j === cell[1] - 1))))) return "bg-role-compared/25 border-role-compared";
    if (j < i) return "border-transparent";
    return "bg-muted/20 border-border";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 overflow-auto">
      <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `1.6rem repeat(${n}, 1.9rem)` }}>
        <div />
        {s.split("").map((c, j) => <div key={j} className="flex h-6 items-center justify-center text-xs font-semibold text-role-current">{c}</div>)}
        {dp.map((row, i) => (
          <div key={i} className="contents">
            <div className="flex items-center justify-center text-xs font-semibold text-muted-foreground">{s[i]}</div>
            {row.map((v, j) => (
              <div key={j} className={`flex h-7 items-center justify-center rounded border text-xs tabular-nums transition-colors ${cellClass(i, j)}`}>{j >= i ? v : ""}</div>
            ))}
          </div>
        ))}
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">LPS length = {answer}</div>}

      <Legend items={[{ role: "current", label: "dp[i][j]" }, { role: "compared", label: "Dependencies" }]} />
    </div>
  );
}
