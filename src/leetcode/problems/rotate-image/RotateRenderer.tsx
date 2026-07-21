import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend, roleLookup } from "@/leetcode/shared/viz";
import type { RotateData } from "./algorithm";

export function RotateRenderer({ step }: RendererProps<RotateData>) {
  const { matrix, phase } = step.data;
  const n = matrix.length;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <p className="text-center text-sm text-muted-foreground">
        {phase === "transpose"
          ? "Transposing across the diagonal…"
          : phase === "reverse"
            ? "Reversing each row…"
            : "Rotated 90° clockwise"}
      </p>

      <Grid
        rows={n}
        cols={n}
        cellRole={(r, c) => roleForRef(`${r},${c}`)}
        cellValue={(r, c) => matrix[r][c]}
      />

      <Legend
        items={[
          { role: "swapped", label: "Transpose swap" },
          { role: "active", label: "Row reverse swap" },
          { role: "sorted", label: "Result" },
        ]}
      />
    </div>
  );
}
