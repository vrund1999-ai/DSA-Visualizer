import type { RendererProps } from "@/core/types";
import { ArrayCells, ROLE_CLASS } from "@/leetcode/shared/viz";
import type { PredictWinnerData } from "./algorithm";

export function PredictWinnerRenderer({ step }: RendererProps<PredictWinnerData>) {
  const { nums, dp, cell, answer } = step.data;
  const n = nums.length;

  const roleFor = (i: number, j: number) => {
    if (cell && i === cell[0] && j === cell[1]) return "current";
    if (i > j) return "muted";
    if (i === j) return "active";
    if (dp[i][j] !== 0 || j > i) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={nums} roleFor={() => "active"} showIndex cellWidth="w-9" />

      <div className="flex justify-center overflow-x-auto">
        <table className="border-separate border-spacing-1 text-xs">
          <tbody>
            {Array.from({ length: n }).map((_, i) => (
              <tr key={i}>
                {Array.from({ length: n }).map((_, j) => {
                  const role = roleFor(i, j);
                  if (role === "muted") return <td key={j} className="size-7" />;
                  return (
                    <td key={j} className={`size-7 rounded border text-center tabular-nums ${ROLE_CLASS[role] ?? ROLE_CLASS.default}`}>
                      {dp[i][j]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        player 1 wins? <b>{answer === null ? "…" : answer ? "true" : "false"}</b>
      </div>
    </div>
  );
}
