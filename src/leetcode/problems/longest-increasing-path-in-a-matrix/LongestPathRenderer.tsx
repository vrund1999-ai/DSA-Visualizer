import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { LongestPathData } from "./algorithm";

export function LongestPathRenderer({ step }: RendererProps<LongestPathData>) {
  const { matrix, memo, cur, path, answer } = step.data;
  const R = matrix.length;
  const C = matrix[0].length;
  const pathIdx = new Map(path.map(([r, c], k) => [`${r},${c}`, k]));

  const cls = (r: number, c: number) => {
    if (answer !== null && pathIdx.has(`${r},${c}`)) return "bg-role-sorted text-white border-role-sorted";
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (memo[r][c] > 0) return "bg-role-active/15 border-role-active/40";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${C}, 2.75rem)` }}>
        {Array.from({ length: R }).flatMap((_, r) =>
          Array.from({ length: C }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 flex-col items-center justify-center rounded border ${cls(r, c)}`}>
              <span className="text-sm font-bold">{matrix[r][c]}</span>
              <span className="text-[9px] opacity-70">{memo[r][c] || ""}</span>
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">longest increasing path = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Computing (value·memo)" }, { role: "active", label: "Solved" }, { role: "sorted", label: "Longest path" }]} />
    </div>
  );
}
