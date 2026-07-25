import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { LCSData } from "./algorithm";

export function LCSRenderer({ step }: RendererProps<LCSData>) {
  const { a, b, dp, filled, cur, match, answer } = step.data;

  const colHead = ["ε", ...b.split("")];
  const rowHead = ["ε", ...a.split("")];

  const cellRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return match ? "sorted" : "current";
    if (!filled[r][c]) return "default";
    return dp[r][c] > 0 ? "visited" : "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">a = <span className="font-mono">{a}</span> · b = <span className="font-mono">{b}</span></div>

      <div className="flex items-start gap-2 overflow-x-auto">
        <div className="flex flex-col gap-1 pt-8">
          {rowHead.map((ch, r) => (
            <span key={r} className="flex size-9 items-center justify-center font-mono text-xs text-muted-foreground">{ch}</span>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            {colHead.map((ch, c) => (
              <span key={c} className="flex size-9 items-center justify-center font-mono text-xs text-muted-foreground">{ch}</span>
            ))}
          </div>
          <Grid rows={dp.length} cols={dp[0].length} cellRole={cellRole} cellValue={(r, c) => (filled[r][c] ? dp[r][c] : "·")} size="size-9" />
        </div>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-visited">LCS length = {answer}</div>}

      <Legend items={[{ role: "current", label: "Computing (no match)" }, { role: "sorted", label: "Char match" }, { role: "visited", label: "dp > 0" }]} />
    </div>
  );
}
