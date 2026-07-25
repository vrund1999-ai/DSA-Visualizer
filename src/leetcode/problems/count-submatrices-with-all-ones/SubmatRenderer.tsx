import type { RendererProps } from "@/core/types";
import { Grid } from "@/leetcode/shared/grid";
import { Legend } from "@/leetcode/shared/viz";
import type { SubmatData } from "./algorithm";

export function SubmatRenderer({ step }: RendererProps<SubmatData>) {
  const { mat, height, row, j, span, added, total, answer } = step.data;

  const cellRole = (r: number, c: number) => {
    if (r === row && c === j) return "current";
    if (r === row && span.includes(c)) return "compared";
    if (mat[r][c] === 1) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Grid rows={mat.length} cols={mat[0].length} cellRole={cellRole} cellValue={(r, c) => mat[r][c]} size="size-9" />

      <div className="flex gap-1">
        <span className="w-10 text-right text-[10px] text-muted-foreground">heights</span>
        {height.map((h, c) => (
          <div key={c} className={`flex size-6 items-center justify-center rounded border text-[10px] tabular-nums ${c === j ? "border-role-current" : "border-border/50"}`}>{h}</div>
        ))}
      </div>

      <div className="flex items-center gap-3 text-sm">
        {added !== null && <span className="rounded-md border px-3 py-1">+{added}</span>}
        <span className="rounded-md border px-3 py-1">total = <b className="tabular-nums">{answer ?? total}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Right column" }, { role: "compared", label: "Extending left" }, { role: "active", label: "One cell" }]} />
    </div>
  );
}
