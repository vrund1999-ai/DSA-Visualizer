import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SortColorsData } from "./algorithm";

export function SortColorsRenderer({ step }: RendererProps<SortColorsData>) {
  const { nums, low, mid, high, done } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-6">
      <ArrayCells
        values={nums}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) => {
          if (done) return "";
          const parts = [];
          if (idx === low) parts.push("lo");
          if (idx === mid) parts.push("mid");
          if (idx === high) parts.push("hi");
          return parts.join("/");
        }}
      />
      <p className="text-center text-xs text-muted-foreground">
        0 = red, 1 = white, 2 = blue — sorted in a single pass.
      </p>

      <Legend
        items={[
          { role: "current", label: "Scanner (mid)" },
          { role: "swapped", label: "Swapped" },
          { role: "sorted", label: "Placed" },
        ]}
      />
    </div>
  );
}
