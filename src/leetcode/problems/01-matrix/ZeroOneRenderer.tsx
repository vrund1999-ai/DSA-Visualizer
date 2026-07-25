import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { ZeroOneData } from "./algorithm";

export function ZeroOneRenderer({ step }: RendererProps<ZeroOneData>) {
  const { mat, dist, cur, frontier, phase } = step.data;

  const isFrontier = (r: number, c: number) => frontier.some(([fr, fc]) => fr === r && fc === c);

  const cellRole = (r: number, c: number) => {
    if (cur && cur[0] === r && cur[1] === c) return "current";
    if (isFrontier(r, c)) return "active";
    if (mat[r][c] === 0) return "pivot";
    if (Number.isFinite(dist[r][c])) return "visited";
    return "default";
  };

  const cellValue = (r: number, c: number) => (Number.isFinite(dist[r][c]) ? dist[r][c] : "∞");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">{phase === "seed" ? "seeding all 0 cells" : phase === "done" ? "done" : "BFS outward from zeros"}</div>

      <Grid rows={mat.length} cols={mat[0].length} cellRole={cellRole} cellValue={cellValue} />

      <Legend items={[{ role: "pivot", label: "Zero (source)" }, { role: "current", label: "Expanding" }, { role: "active", label: "Frontier" }, { role: "visited", label: "Distance set" }]} />
    </div>
  );
}
