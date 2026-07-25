import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { SparseMulData } from "./algorithm";

export function SparseMulRenderer({ step }: RendererProps<SparseMulData>) {
  const { A, B, C, aCell, skipped, done } = step.data;

  const aRole = (r: number, c: number) => {
    if (aCell && aCell[0] === r && aCell[1] === c) return skipped ? "wall" : "current";
    if (A[r][c] === 0) return "default";
    return "active";
  };
  const cRole = (r: number, c: number) => {
    if (done) return C[r][c] !== 0 ? "visited" : "default";
    if (aCell && aCell[0] === r) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase text-muted-foreground">A</span>
          <Grid rows={A.length} cols={A[0].length} cellRole={aRole} cellValue={(r, c) => A[r][c]} size="size-8" />
        </div>
        <span className="text-lg text-muted-foreground">×</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase text-muted-foreground">B</span>
          <Grid rows={B.length} cols={B[0].length} cellRole={() => "default"} cellValue={(r, c) => B[r][c]} size="size-8" />
        </div>
        <span className="text-lg text-muted-foreground">=</span>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase text-muted-foreground">C</span>
          <Grid rows={C.length} cols={C[0].length} cellRole={cRole} cellValue={(r, c) => C[r][c]} size="size-8" />
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Active A entry" }, { role: "active", label: "Nonzero A" }, { role: "wall", label: "Skipped 0" }, { role: "visited", label: "Updated C row" }]} />
    </div>
  );
}
