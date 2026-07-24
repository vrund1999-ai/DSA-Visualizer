import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { MinSubarrayData } from "./algorithm";

export function MinSubarrayRenderer({ step }: RendererProps<MinSubarrayData>) {
  const { nums, target, left, right, sum, best } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">target</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{target}</span>
        <span className="text-muted-foreground">window sum</span>
        <span className={`rounded-md border px-2 py-0.5 font-semibold tabular-nums ${sum >= target ? "border-role-sorted" : ""}`}>{sum}</span>
        <span className="text-muted-foreground">shortest</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{best}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === left && idx === right ? "L/R" : idx === left ? "L" : idx === right ? "R" : "")} />

      <Legend
        items={[
          { role: "active", label: "Window" },
          { role: "current", label: "Right edge" },
          { role: "swapped", label: "Dropped" },
          { role: "target", label: "Valid window" },
        ]}
      />
    </div>
  );
}
