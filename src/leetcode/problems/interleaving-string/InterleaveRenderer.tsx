import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { InterleaveData } from "./algorithm";

export function InterleaveRenderer({ step }: RendererProps<InterleaveData>) {
  const { s1, s2, s3, dp, filled, cur, answer } = step.data;

  const colHead = ["ε", ...s2.split("")];
  const rowHead = ["ε", ...s1.split("")];

  const cellRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "current";
    if (!filled[r][c]) return "default";
    return dp[r][c] ? "visited" : "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">
        s1=<span className="font-mono">{s1}</span> · s2=<span className="font-mono">{s2}</span> · s3=<span className="font-mono">{s3}</span>
      </div>

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
          <Grid rows={dp.length} cols={dp[0].length} cellRole={cellRole} cellValue={(r, c) => (!filled[r][c] ? "·" : dp[r][c] ? "T" : "F")} size="size-9" />
        </div>
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-visited" : "text-muted-foreground"}`}>
          {answer ? "valid interleaving ✓" : "not an interleaving ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Computing" }, { role: "visited", label: "Reachable (T)" }]} />
    </div>
  );
}
