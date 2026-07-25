import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { NQueensData } from "./algorithm";

export function NQueensRenderer({ step }: RendererProps<NQueensData>) {
  const { n, queens, row, action, count, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="grid overflow-hidden rounded-md border-2 border-foreground" style={{ gridTemplateColumns: `repeat(${n}, 2.25rem)` }}>
        {Array.from({ length: n }).map((_, r) =>
          Array.from({ length: n }).map((_, c) => {
            const hasQueen = queens[r] === c;
            const dark = (r + c) % 2 === 1;
            const isSolution = action === "solution";
            return (
              <div key={`${r}-${c}`} className={`flex size-9 items-center justify-center text-xl ${dark ? "bg-muted/50" : "bg-muted/20"} ${r === row ? "ring-2 ring-inset ring-role-current" : ""}`}>
                {hasQueen && <span className={isSolution ? "text-role-sorted" : action === "backtrack" && r === row ? "text-role-compared" : "text-role-current"}>♛</span>}
              </div>
            );
          }),
        )}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">n = <b className="tabular-nums">{n}</b></span>
        <span className="rounded-md border px-3 py-1">solutions = <b className="tabular-nums">{answer ?? count}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Placing" }, { role: "compared", label: "Backtracking" }, { role: "sorted", label: "Solution" }]} />
    </div>
  );
}
