import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { ContainVirusData } from "./algorithm";

export function ContainVirusRenderer({ step }: RendererProps<ContainVirusData>) {
  const { grid, sealing, spread, walls, answer } = step.data;
  const rows = grid.length;
  const cols = grid[0].length;
  const sealSet = new Set(sealing.map(([r, c]) => `${r},${c}`));
  const spreadSet = new Set(spread.map(([r, c]) => `${r},${c}`));

  const cellRole = (r: number, c: number) => {
    const key = `${r},${c}`;
    if (sealSet.has(key)) return "current";
    if (grid[r][c] === 2) return "wall";
    if (spreadSet.has(key)) return "swapped";
    if (grid[r][c] === 1) return "target";
    return "default";
  };

  const cellValue = (r: number, c: number) => (grid[r][c] === 2 ? "▦" : grid[r][c] === 1 ? "●" : "");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Grid rows={rows} cols={cols} cellRole={cellRole} cellValue={cellValue} size="size-9" />

      <div className="rounded-md border px-3 py-1 text-sm">
        walls used = <b className="tabular-nums">{answer ?? walls}</b>
      </div>

      <Legend
        items={[
          { role: "target", label: "infected" },
          { role: "current", label: "sealing now" },
          { role: "wall", label: "quarantined" },
          { role: "swapped", label: "newly spread" },
        ]}
      />
    </div>
  );
}
