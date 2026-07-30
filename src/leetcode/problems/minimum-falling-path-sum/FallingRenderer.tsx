import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { FallingData } from "./algorithm";

export function FallingRenderer({ step }: RendererProps<FallingData>) {
  const { matrix, dp, cur, chosen, answer } = step.data;
  const n = matrix.length;
  const lastRowMin = answer !== null ? answer : null;

  const cls = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (chosen && chosen[0] === r && chosen[1] === c) return "bg-role-compared text-white border-role-compared";
    if (lastRowMin !== null && r === n - 1 && dp[r][c] === lastRowMin) return "bg-role-sorted text-white border-role-sorted";
    if (dp[r][c] !== null) return "bg-role-visited/20 border-role-visited";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${n}, 3.5rem)` }}>
        {Array.from({ length: n }).flatMap((_, r) =>
          Array.from({ length: n }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-14 w-14 flex-col items-center justify-center rounded border py-1 ${cls(r, c)}`}>
              <span className="text-[10px] opacity-70">{matrix[r][c]}</span>
              <span className="text-sm font-bold tabular-nums">{dp[r][c] === null ? "·" : dp[r][c]}</span>
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">minimum falling path = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Computing" }, { role: "compared", label: "Chosen parent" }, { role: "visited", label: "Solved" }, { role: "sorted", label: "Answer" }]} />
    </div>
  );
}
