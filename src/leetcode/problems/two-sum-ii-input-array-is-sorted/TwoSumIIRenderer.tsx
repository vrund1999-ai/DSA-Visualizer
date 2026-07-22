import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { TwoSumIIData } from "./algorithm";

export function TwoSumIIRenderer({ step }: RendererProps<TwoSumIIData>) {
  const { numbers, target, l, r, sum, found } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Target</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">{target}</span>
        <span className="ml-3 text-muted-foreground">Current sum</span>
        <span className="rounded-md border px-2.5 py-1 font-semibold tabular-nums">{sum ?? "—"}</span>
        {found && <span className="ml-2 font-semibold text-role-target">indices [{found[0]}, {found[1]}]</span>}
      </div>

      <ArrayCells values={numbers} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === l ? "L" : idx === r ? "R" : "")} />

      <Legend
        items={[
          { role: "current", label: "Left" },
          { role: "active", label: "Right" },
          { role: "target", label: "Answer pair" },
        ]}
      />
    </div>
  );
}
