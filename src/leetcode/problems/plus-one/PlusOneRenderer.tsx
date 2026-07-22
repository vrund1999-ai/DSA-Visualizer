import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { PlusOneData } from "./algorithm";

export function PlusOneRenderer({ step }: RendererProps<PlusOneData>) {
  const { digits, i } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-6">
      <ArrayCells values={digits} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} showIndex={false} />
      <p className="text-center text-xs text-muted-foreground">Digits, most significant first.</p>

      <Legend
        items={[
          { role: "swapped", label: "Carried (9→0)" },
          { role: "target", label: "Incremented" },
        ]}
      />
    </div>
  );
}
