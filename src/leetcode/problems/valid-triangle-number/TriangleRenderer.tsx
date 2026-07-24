import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { TriangleData } from "./algorithm";

export function TriangleRenderer({ step }: RendererProps<TriangleData>) {
  const { nums, k, l, r, count } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Valid triangles</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{count}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === k ? "k" : idx === l ? "L" : idx === r ? "R" : "")} />

      <Legend
        items={[
          { role: "pivot", label: "Longest side (k)" },
          { role: "current", label: "L" },
          { role: "active", label: "R" },
        ]}
      />
    </div>
  );
}
