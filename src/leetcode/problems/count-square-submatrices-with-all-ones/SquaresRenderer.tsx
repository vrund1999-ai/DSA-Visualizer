import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SquaresData } from "./algorithm";

export function SquaresRenderer({ step }: RendererProps<SquaresData>) {
  const { matrix, dp, cur, deps, total, answer } = step.data;
  const R = matrix.length;
  const C = matrix[0].length;
  const depSet = new Set(deps.map(([r, c]) => `${r},${c}`));

  const cls = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (depSet.has(`${r},${c}`)) return "bg-role-compared text-white border-role-compared";
    if (matrix[r][c] === 0) return "bg-muted/40 border-border text-muted-foreground";
    return "bg-role-active/20 border-role-active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.75rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 flex-col items-center justify-center rounded border ${cls(r, c)}`}>
              <span className="text-[9px] opacity-70">{matrix[r][c]}</span>
              <span className="text-sm font-bold tabular-nums">{dp[r][c] || ""}</span>
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">square count = <b className="tabular-nums">{answer ?? total}</b></div>

      <Legend items={[{ role: "current", label: "Computing" }, { role: "compared", label: "min neighbors" }, { role: "active", label: "1 cell" }]} />
    </div>
  );
}
