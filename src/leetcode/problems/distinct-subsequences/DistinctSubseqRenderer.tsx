import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { DistinctSubseqData } from "./algorithm";

export function DistinctSubseqRenderer({ step }: RendererProps<DistinctSubseqData>) {
  const { s, t, dp, cur, matched, answer } = step.data;
  const colHeaders = ["∅", ...t.split("")];
  const rowHeaders = ["∅", ...s.split("")];

  const cellClass = (i: number, j: number) => {
    if (cur && cur[0] === i && cur[1] === j) return "bg-role-current text-white border-role-current";
    if (cur && i === cur[0] - 1 && (j === cur[1] || (matched && j === cur[1] - 1))) return "bg-role-compared/25 border-role-compared";
    return "bg-muted/20 border-border";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 overflow-auto">
      <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `2rem repeat(${colHeaders.length}, 2rem)` }}>
        <div />
        {colHeaders.map((h, j) => (
          <div key={`ch-${j}`} className="flex h-8 items-center justify-center text-xs font-semibold text-role-current">{h}</div>
        ))}
        {dp.map((row, i) => (
          <div key={`row-${i}`} className="contents">
            <div className="flex h-8 items-center justify-center text-xs font-semibold text-muted-foreground">{rowHeaders[i]}</div>
            {row.map((v, j) => (
              <div key={`${i}-${j}`} className={`flex h-8 items-center justify-center rounded border text-xs tabular-nums transition-colors ${cellClass(i, j)}`}>{v}</div>
            ))}
          </div>
        ))}
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">distinct subsequences = {answer}</div>}

      <Legend items={[{ role: "current", label: "dp[i][j]" }, { role: "compared", label: "Cells it depends on" }]} />
    </div>
  );
}
