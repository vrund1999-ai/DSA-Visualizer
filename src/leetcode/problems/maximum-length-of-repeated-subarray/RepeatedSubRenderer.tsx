import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RepeatedSubData } from "./algorithm";

export function RepeatedSubRenderer({ step }: RendererProps<RepeatedSubData>) {
  const { nums1, nums2, dp, cell, matched, best, answer } = step.data;

  const cellClass = (i: number, j: number) => {
    if (cell && cell[0] === i && cell[1] === j) return "bg-role-current text-white border-role-current";
    if (cell && matched && i === cell[0] - 1 && j === cell[1] - 1) return "bg-role-compared/25 border-role-compared";
    if (dp[i][j] > 0 && dp[i][j] === best) return "bg-role-sorted/25 border-role-sorted";
    return "bg-muted/20 border-border";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 overflow-auto">
      <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `1.6rem 1.6rem repeat(${nums2.length}, 1.9rem)` }}>
        <div />
        <div />
        {nums2.map((v, j) => <div key={j} className="flex h-6 items-center justify-center text-xs font-semibold text-role-current">{v}</div>)}
        {dp.map((row, i) => (
          <div key={i} className="contents">
            <div className="flex items-center justify-center text-xs font-semibold text-muted-foreground">{i > 0 ? nums1[i - 1] : ""}</div>
            {row.map((v, j) => (
              <div key={j} className={`flex h-7 items-center justify-center rounded border text-xs tabular-nums transition-colors ${cellClass(i, j)}`}>{v}</div>
            ))}
          </div>
        ))}
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">longest repeated subarray = {answer}</div>}

      <Legend items={[{ role: "current", label: "dp[i][j]" }, { role: "compared", label: "Diagonal predecessor" }, { role: "sorted", label: "Best run" }]} />
    </div>
  );
}
