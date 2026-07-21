import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { SpiralData } from "./algorithm";

export function SpiralRenderer({ step }: RendererProps<SpiralData>) {
  const { matrix, current, visited, result } = step.data;
  const R = matrix.length;
  const C = R ? matrix[0].length : 0;
  const visitedSet = new Set(visited.map(([r, c]) => `${r},${c}`));

  const role = (r: number, c: number) => {
    if (current && current[0] === r && current[1] === c) return "current";
    if (visitedSet.has(`${r},${c}`)) return "path";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <Grid rows={R} cols={C} cellRole={role} cellValue={(r, c) => matrix[r][c]} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Spiral order</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1 rounded-lg border bg-card/40 p-2 font-mono text-sm">
          {result.length === 0 ? <span className="text-xs text-muted-foreground">—</span> : result.join(", ")}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Taking" },
          { role: "path", label: "Collected" },
        ]}
      />
    </div>
  );
}
