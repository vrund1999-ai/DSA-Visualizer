import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { MaxProductData } from "./algorithm";

export function MaxProductRenderer({ step }: RendererProps<MaxProductData>) {
  const { nums, i, max, min, best } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">max</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{max}</span>
        <span className="text-muted-foreground">min</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{min}</span>
        <span className="text-muted-foreground">best</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{best}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <Legend
        items={[
          { role: "current", label: "Current index" },
          { role: "compared", label: "Negative (swap)" },
          { role: "target", label: "New best" },
        ]}
      />
    </div>
  );
}
