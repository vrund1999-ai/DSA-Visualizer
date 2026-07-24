import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { DiagonalData } from "./algorithm";

export function DiagonalRenderer({ step }: RendererProps<DiagonalData>) {
  const { mat, r, c, up, order, visited, done } = step.data;

  const cellRole = (rr: number, cc: number) => {
    if (!done && rr === r && cc === c) return "current";
    if (visited.includes(`${rr},${cc}`)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">{done ? "traversal complete" : `direction: ${up ? "↗ up-right" : "↙ down-left"}`}</div>

      <Grid rows={mat.length} cols={mat[0].length} cellRole={cellRole} cellValue={(rr, cc) => mat[rr][cc]} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">order</span>
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-1">
          {order.map((v, k) => (
            <span key={k} className={`rounded border px-2 py-0.5 font-mono text-xs tabular-nums ${k === order.length - 1 ? "border-role-current bg-role-current/20" : "bg-muted/30"}`}>{v}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Cursor" }, { role: "visited", label: "Emitted" }]} />
    </div>
  );
}
