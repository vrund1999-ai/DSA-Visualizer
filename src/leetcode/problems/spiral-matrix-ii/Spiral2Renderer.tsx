import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { Spiral2Data } from "./algorithm";

export function Spiral2Renderer({ step }: RendererProps<Spiral2Data>) {
  const { n, matrix, cur, answer } = step.data;

  const cls = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "bg-role-current text-white border-role-current";
    if (matrix[r][c] !== 0) return "bg-role-visited/25 border-role-visited";
    return "bg-muted/40 border-border text-muted-foreground";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${n}, 2.75rem)` }}>
        {Array.from({ length: n }).flatMap((_, r) =>
          Array.from({ length: n }).map((__, c) => (
            <div key={`${r}-${c}`} className={`flex h-11 w-11 items-center justify-center rounded border text-sm font-semibold tabular-nums ${cls(r, c)}`}>
              {matrix[r][c] !== 0 ? matrix[r][c] : ""}
            </div>
          )),
        )}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">{answer ? "complete" : "filling spiral…"}</div>

      <Legend items={[{ role: "current", label: "Placing" }, { role: "visited", label: "Filled" }]} />
    </div>
  );
}
