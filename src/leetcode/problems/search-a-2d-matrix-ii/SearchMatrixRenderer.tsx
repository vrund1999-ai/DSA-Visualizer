import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { SearchMatrixData } from "./algorithm";

export function SearchMatrixRenderer({ step }: RendererProps<SearchMatrixData>) {
  const { matrix, target, r, c, path, found } = step.data;

  const onPath = (rr: number, cc: number) => path.some(([pr, pc]) => pr === rr && pc === cc);

  const cellRole = (rr: number, cc: number) => {
    if (rr === r && cc === c) return found ? "target" : "current";
    if (onPath(rr, cc)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">target = <b className="tabular-nums text-foreground">{target}</b></div>

      <Grid rows={matrix.length} cols={matrix[0].length} cellRole={cellRole} cellValue={(rr, cc) => matrix[rr][cc]} />

      {found !== null && (
        <div className={`text-base font-semibold ${found ? "text-role-target" : "text-muted-foreground"}`}>
          {found ? "Found" : "Not present"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Cursor" }, { role: "visited", label: "Staircase path" }, { role: "target", label: "Found" }]} />
    </div>
  );
}
