import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { StoneData } from "./algorithm";

export function StoneRenderer({ step }: RendererProps<StoneData>) {
  const { piles, dp, filled, cur, answer } = step.data;
  const n = piles.length;

  const cls = (i: number, j: number) => {
    if (j < i) return "bg-transparent border-transparent";
    if (cur && cur[0] === i && cur[1] === j) return "bg-role-current text-white border-role-current";
    if (answer !== null && i === 0 && j === n - 1) return "bg-role-sorted text-white border-role-sorted";
    if (filled[i][j]) return dp[i][j] > 0 ? "bg-role-active/25 border-role-active" : "bg-role-swapped/20 border-role-swapped/40";
    return "bg-muted/30 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">piles</span>
        <ArrayCells values={piles} roleFor={() => "default"} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">dp[i][j] (score lead)</span>
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${n}, 2.5rem)` }}>
          {Array.from({ length: n }).flatMap((_, i) =>
            Array.from({ length: n }).map((__, j) => (
              <div key={`${i}-${j}`} className={`flex h-10 w-10 items-center justify-center rounded border text-xs font-semibold tabular-nums ${cls(i, j)}`}>{j >= i && filled[i][j] ? dp[i][j] : ""}</div>
            )),
          )}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        first player wins = <b className={answer === false ? "text-role-swapped" : answer ? "text-role-sorted" : ""}>{answer === null ? "…" : String(answer)}</b>
      </div>

      <Legend items={[{ role: "current", label: "Computing" }, { role: "active", label: "Mover leads" }, { role: "sorted", label: "dp[0][n−1]" }]} />
    </div>
  );
}
