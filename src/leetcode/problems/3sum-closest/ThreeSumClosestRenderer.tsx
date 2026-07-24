import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ThreeSumClosestData } from "./algorithm";

export function ThreeSumClosestRenderer({ step }: RendererProps<ThreeSumClosestData>) {
  const { nums, target, i, l, r, sum, best } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">target</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{target}</span>
        <span className="text-muted-foreground">sum</span>
        <span className="rounded-md border px-2 py-0.5 font-semibold tabular-nums">{sum ?? "—"}</span>
        <span className="text-muted-foreground">closest</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{best}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : idx === l ? "L" : idx === r ? "R" : "")} />

      <Legend
        items={[
          { role: "pivot", label: "Anchor (i)" },
          { role: "current", label: "L" },
          { role: "active", label: "R" },
        ]}
      />
    </div>
  );
}
