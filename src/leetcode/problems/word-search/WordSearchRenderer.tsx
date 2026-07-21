import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { WordSearchData } from "./algorithm";

export function WordSearchRenderer({ step }: RendererProps<WordSearchData>) {
  const { grid, word, path, current, found } = step.data;
  const rows = grid.length;
  const cols = rows ? grid[0].length : 0;
  const pathSet = new Set(path.map(([r, c]) => `${r},${c}`));

  const role = (r: number, c: number) => {
    if (current && current[0] === r && current[1] === c) return "current";
    if (pathSet.has(`${r},${c}`)) return "path";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-1">
        <span className="mr-2 text-sm text-muted-foreground">Word</span>
        {[...word].map((ch, i) => (
          <span
            key={i}
            className={`flex size-7 items-center justify-center rounded border font-mono text-sm ${
              i < path.length ? "border-role-path bg-role-path/20" : "border-border bg-muted/30 text-muted-foreground"
            }`}
          >
            {ch}
          </span>
        ))}
      </div>

      <Grid rows={rows} cols={cols} cellRole={role} cellValue={(r, c) => grid[r][c]} />

      {found && (
        <p className="text-center text-sm font-semibold text-role-sorted">Found ✓</p>
      )}

      <Legend
        items={[
          { role: "current", label: "Trying" },
          { role: "path", label: "Matched path" },
        ]}
      />
    </div>
  );
}
