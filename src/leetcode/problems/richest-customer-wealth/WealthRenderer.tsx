import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { WealthData } from "./algorithm";

export function WealthRenderer({ step }: RendererProps<WealthData>) {
  const { accounts, row, wealth, bestRow, answer } = step.data;

  const cellRole = (r: number, _c: number) => {
    if (r === row) return "current";
    if (answer !== null && r === bestRow) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-start gap-2">
        <Grid rows={accounts.length} cols={accounts[0].length} cellRole={cellRole} cellValue={(r, c) => accounts[r][c]} size="size-10" />
        <div className="flex flex-col gap-1">
          {accounts.map((acc, r) => {
            const isCur = r === row;
            const isBest = answer !== null && r === bestRow;
            return <div key={r} className={`flex h-10 items-center rounded-md border px-2 text-sm tabular-nums ${isBest ? "border-role-sorted bg-role-sorted/15 font-semibold" : isCur ? "border-role-current bg-role-current/15" : "border-border"}`}>Σ {r === row ? wealth : acc.reduce((a, b) => a + b, 0)}</div>;
          })}
        </div>
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">max wealth = {answer}</div>}

      <Legend items={[{ role: "current", label: "Summing customer" }, { role: "sorted", label: "Richest customer" }]} />
    </div>
  );
}
