import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { HighestPeakData } from "./algorithm";

export function HighestPeakRenderer({ step }: RendererProps<HighestPeakData>) {
  const { isWater, height, frontier } = step.data;
  const rows = height.length;
  const cols = height[0].length;
  const frontierSet = new Set(frontier.map(([r, c]) => `${r},${c}`));

  const cellRole = (r: number, c: number) => {
    if (frontierSet.has(`${r},${c}`)) return "current";
    if (isWater[r][c]) return "target";
    if (height[r][c] === -1) return "default";
    return "active";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Grid rows={rows} cols={cols} cellRole={cellRole} cellValue={(r, c) => (height[r][c] === -1 ? "" : height[r][c])} size="size-9" />

      <Legend
        items={[
          { role: "target", label: "water (0)" },
          { role: "current", label: "current layer" },
          { role: "active", label: "assigned height" },
        ]}
      />
    </div>
  );
}
