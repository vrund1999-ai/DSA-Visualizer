import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { MaxOnesData } from "./algorithm";

export function MaxOnesRenderer({ step }: RendererProps<MaxOnesData>) {
  const { nums, i, run, best } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">current run</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{run}</span>
        <span className="text-muted-foreground">best</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{best}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <Legend
        items={[
          { role: "active", label: "Current run" },
          { role: "current", label: "A 1" },
          { role: "swapped", label: "A 0 (reset)" },
        ]}
      />
    </div>
  );
}
