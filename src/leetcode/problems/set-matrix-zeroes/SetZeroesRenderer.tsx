import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SetZeroesData } from "./algorithm";

export function SetZeroesRenderer({ step }: RendererProps<SetZeroesData>) {
  const { matrix, phase, zeroRows, zeroCols } = step.data;
  const R = matrix.length;
  const C = R ? matrix[0].length : 0;
  const roleForRef = roleLookup(step.highlights);

  const role = (r: number, c: number) => {
    const hit = roleForRef(`${r},${c}`);
    if (hit !== "default") return hit;
    if (phase !== "done" && (zeroRows.includes(r) || zeroCols.includes(c))) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <p className="text-center text-sm text-muted-foreground">
        {phase === "scan" ? "Marking rows & columns with a zero…" : phase === "apply" ? "Zeroing marked rows & columns…" : "Done"}
      </p>

      <Grid rows={R} cols={C} cellRole={role} cellValue={(r, c) => matrix[r][c]} />

      <Legend
        items={[
          { role: "pivot", label: "Original zero" },
          { role: "visited", label: "Marked row/col" },
          { role: "swapped", label: "Zeroed" },
        ]}
      />
    </div>
  );
}
