import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { RomanData } from "./algorithm";

export function RomanRenderer({ step }: RendererProps<RomanData>) {
  const { chars, i, total } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Running total</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">
          {total}
        </span>
      </div>

      <ArrayCells values={chars} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} showIndex={false} />

      <Legend
        items={[
          { role: "sorted", label: "Added" },
          { role: "swapped", label: "Subtracted" },
          { role: "compared", label: "Larger neighbour" },
        ]}
      />
    </div>
  );
}
