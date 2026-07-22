import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SquaresData } from "./algorithm";

export function SquaresRenderer({ step }: RendererProps<SquaresData>) {
  const { nums, res, l, r, k } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Input (sorted, may be negative)</span>
        <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === l ? "L" : idx === r ? "R" : "")} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Result (filled from the back)</span>
        <ArrayCells values={res} roleFor={(idx) => (idx === k ? "target" : "default")} showIndex={false} />
      </div>

      <Legend
        items={[
          { role: "current", label: "Left pointer" },
          { role: "active", label: "Right pointer" },
          { role: "swapped", label: "Chosen (bigger)" },
          { role: "target", label: "Just placed" },
        ]}
      />
    </div>
  );
}
