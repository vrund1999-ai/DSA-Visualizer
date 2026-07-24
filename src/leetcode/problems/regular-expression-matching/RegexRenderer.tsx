import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { RegexData } from "./algorithm";

export function RegexRenderer({ step }: RendererProps<RegexData>) {
  const { s, p, dp, filled, cur, answer } = step.data;

  // header row/col labels: "" for the empty prefix, then chars
  const colHead = ["ε", ...p.split("")];
  const rowHead = ["ε", ...s.split("")];

  const cellRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "current";
    if (!filled[r][c]) return "default";
    return dp[r][c] ? "visited" : "default";
  };

  const cellValue = (r: number, c: number) => (!filled[r][c] ? "·" : dp[r][c] ? "T" : "F");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">
        s = <span className="font-mono">{s}</span> · p = <span className="font-mono">{p}</span>
        {answer !== null && <> → <b className={answer ? "text-role-visited" : "text-role-target"}>{String(answer)}</b></>}
      </div>

      <div className="flex items-start gap-2 overflow-x-auto">
        <div className="flex flex-col gap-1 pt-8">
          {rowHead.map((ch, r) => (
            <span key={r} className="flex size-10 items-center justify-center font-mono text-xs text-muted-foreground">{ch}</span>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            {colHead.map((ch, c) => (
              <span key={c} className="flex size-10 items-center justify-center font-mono text-xs text-muted-foreground">{ch}</span>
            ))}
          </div>
          <Grid rows={dp.length} cols={dp[0].length} cellRole={cellRole} cellValue={cellValue} />
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Computing" }, { role: "visited", label: "True" }]} />
    </div>
  );
}
