import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ReverseStringData } from "./algorithm";

export function ReverseStringRenderer({ step }: RendererProps<ReverseStringData>) {
  const { chars, l, r } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-6">
      <ArrayCells values={chars} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === l ? "L" : idx === r ? "R" : "")} showIndex={false} />
      <Legend
        items={[
          { role: "current", label: "Left" },
          { role: "active", label: "Right" },
          { role: "swapped", label: "Swapped" },
          { role: "sorted", label: "Reversed" },
        ]}
      />
    </div>
  );
}
