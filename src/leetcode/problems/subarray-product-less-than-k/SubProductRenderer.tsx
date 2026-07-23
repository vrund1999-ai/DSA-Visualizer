import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SubProductData } from "./algorithm";

export function SubProductRenderer({ step }: RendererProps<SubProductData>) {
  const { nums, k, left, right, prod, count } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">k</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{k}</span>
        <span className="text-muted-foreground">product</span>
        <span className={`rounded-md border px-2 py-0.5 font-semibold tabular-nums ${prod < k ? "border-role-sorted" : "border-role-swapped"}`}>{prod}</span>
        <span className="text-muted-foreground">count</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{count}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === left && idx === right ? "L/R" : idx === left ? "L" : idx === right ? "R" : "")} />

      <Legend
        items={[
          { role: "active", label: "Window" },
          { role: "current", label: "Right edge" },
          { role: "swapped", label: "Dropped" },
          { role: "target", label: "Counted window" },
        ]}
      />
    </div>
  );
}
