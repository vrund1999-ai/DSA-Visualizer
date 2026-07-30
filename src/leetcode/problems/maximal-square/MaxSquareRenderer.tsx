import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MaxSquareData } from "./algorithm";

export function MaxSquareRenderer({ step }: RendererProps<MaxSquareData>) {
  const { matrix, dp, cur, deps, best, bestCell, answer } = step.data;
  const R = matrix.length;
  const C = matrix[0].length;
  const depSet = new Set(deps.map(([r, c]) => `${r},${c}`));

  const inBestSquare = (r: number, c: number) => {
    if (!bestCell || best === 0) return false;
    return r <= bestCell[0] && r > bestCell[0] - best && c <= bestCell[1] && c > bestCell[1] - best;
  };

  const cls = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (depSet.has(`${r},${c}`)) return "bg-role-compared text-white border-role-compared";
    if (answer !== null && inBestSquare(r, c)) return "bg-role-sorted text-white border-role-sorted";
    if (matrix[r][c] === 1) return "bg-role-active/20 border-role-active";
    return "bg-muted/40 border-border text-muted-foreground";
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

      <div className="rounded-md border px-3 py-1 text-sm">max side {best} · area = <b className="tabular-nums">{answer ?? best * best}</b></div>

      <Legend items={[{ role: "current", label: "Computing" }, { role: "compared", label: "min neighbors" }, { role: "sorted", label: "Maximal square" }]} />
    </div>
  );
}
