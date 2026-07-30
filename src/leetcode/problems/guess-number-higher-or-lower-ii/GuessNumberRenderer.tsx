import type { RendererProps } from "@/core/types";
import { ROLE_CLASS } from "@/leetcode/shared/viz";
import type { GuessNumberData } from "./algorithm";

export function GuessNumberRenderer({ step }: RendererProps<GuessNumberData>) {
  const { n, dp, cell, guess, answer } = step.data;
  const nums = Array.from({ length: n }, (_, i) => i + 1);

  const roleFor = (i: number, j: number) => {
    if (cell && i === cell[0] && j === cell[1]) return "current";
    if (i > j) return "muted";
    if (dp[i][j] > 0) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex justify-center overflow-x-auto">
        <table className="border-separate border-spacing-1 text-xs">
          <thead>
            <tr>
              <th className="size-7" />
              {nums.map((j) => (
                <th key={j} className={`size-7 font-medium ${j === guess ? "text-role-current" : "text-muted-foreground"}`}>{j}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {nums.map((i) => (
              <tr key={i}>
                <td className="size-7 text-center font-medium text-muted-foreground">{i}</td>
                {nums.map((j) => {
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
        min guaranteed cost = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>
    </div>
  );
}
