import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { FloodFillData } from "./algorithm";

export function FloodFillRenderer({ step }: RendererProps<FloodFillData>) {
  const { image, color, cur, filled } = step.data;

  const cellRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "current";
    if (filled.includes(`${r},${c}`)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">new color = <b className="tabular-nums text-foreground">{color}</b></div>

      <Grid rows={image.length} cols={image[0].length} cellRole={cellRole} cellValue={(r, c) => image[r][c]} />

      <Legend items={[{ role: "current", label: "Painting" }, { role: "visited", label: "Filled" }]} />
    </div>
  );
}
