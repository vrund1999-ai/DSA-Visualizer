import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { TransposeData } from "./algorithm";

export function TransposeRenderer({ step }: RendererProps<TransposeData>) {
  const { matrix, res, src, dst, answer } = step.data;

  const srcRole = (r: number, c: number) => (src && src[0] === r && src[1] === c ? "current" : "default");
  const dstRole = (r: number, c: number) => (dst && dst[0] === r && dst[1] === c ? "sorted" : res[r][c] !== null ? "visited" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">matrix</span>
          <Grid rows={matrix.length} cols={matrix[0].length} cellRole={srcRole} cellValue={(r, c) => matrix[r][c]} size="size-9" />
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">transpose</span>
          <Grid rows={res.length} cols={res[0].length} cellRole={dstRole} cellValue={(r, c) => (res[r][c] === null ? "·" : (answer ?? res)[r][c]!)} size="size-9" />
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Source cell" }, { role: "sorted", label: "Destination" }, { role: "visited", label: "Filled" }]} />
    </div>
  );
}
