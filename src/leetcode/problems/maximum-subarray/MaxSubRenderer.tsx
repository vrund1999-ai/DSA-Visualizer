import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { MaxSubData } from "./algorithm";

export function MaxSubRenderer({ step }: RendererProps<MaxSubData>) {
  const { nums, i, cur, best } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">cur (sum ending here)</span>
        <span className="rounded-md border border-role-active bg-role-active/10 px-2.5 py-1 font-semibold tabular-nums">
          {cur}
        </span>
        <span className="ml-3 text-muted-foreground">best</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">
          {best}
        </span>
      </div>

      <ArrayCells
        values={nums}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => (idx === i ? "i" : "")}
      />

      <Legend
        items={[
          { role: "active", label: "Current run" },
          { role: "current", label: "Index i" },
          { role: "target", label: "Best subarray" },
        ]}
      />
    </div>
  );
}
