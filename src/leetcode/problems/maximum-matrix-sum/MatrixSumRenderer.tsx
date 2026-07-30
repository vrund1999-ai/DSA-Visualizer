import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MatrixSumData } from "./algorithm";

export function MatrixSumRenderer({ step }: RendererProps<MatrixSumData>) {
  const { matrix, cur, sumAbs, negs, minAbs, minCell, answer } = step.data;
  const R = matrix.length;
  const C = matrix[0].length;
  const oddStuck = answer !== null && negs % 2 === 1;

  const cls = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (oddStuck && minCell && minCell[0] === r && minCell[1] === c) return "bg-role-swapped text-white border-role-swapped";
    if (matrix[r][c] < 0) return "bg-role-target/25 border-role-target";
    return "bg-role-active/20 border-role-active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.75rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-sm font-semibold tabular-nums ${cls(r, c)}`}>{matrix[r][c]}</div>
          )),
        )}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">Σ|v| = {sumAbs}</span>
        <span className="rounded-md border px-3 py-1">negatives = {negs} ({negs % 2 === 0 ? "even" : "odd"})</span>
        <span className="rounded-md border px-3 py-1">min|v| = {minAbs === Infinity ? "…" : minAbs}</span>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">maximum sum = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "target", label: "Negative" }, { role: "swapped", label: "Stuck minimum" }]} />
    </div>
  );
}
