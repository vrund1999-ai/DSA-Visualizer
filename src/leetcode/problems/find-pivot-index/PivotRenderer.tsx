import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { PivotData } from "./algorithm";

export function PivotRenderer({ step }: RendererProps<PivotData>) {
  const { nums, total, i, left, right, answer } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">total</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{total}</span>
        <span className="text-muted-foreground">left</span>
        <span className="rounded-md border border-role-sorted bg-role-sorted/10 px-2 py-0.5 font-semibold tabular-nums text-role-sorted">{left}</span>
        <span className="text-muted-foreground">right</span>
        <span className="rounded-md border border-role-active bg-role-active/10 px-2 py-0.5 font-semibold tabular-nums">{right ?? "—"}</span>
        {answer !== null && <span className="font-semibold text-role-target">pivot = {answer}</span>}
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <Legend
        items={[
          { role: "sorted", label: "Left sum" },
          { role: "active", label: "Right sum" },
          { role: "current", label: "Pivot candidate" },
          { role: "target", label: "Pivot" },
        ]}
      />
    </div>
  );
}
