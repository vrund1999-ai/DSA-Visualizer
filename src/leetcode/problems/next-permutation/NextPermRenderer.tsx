import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { NextPermData } from "./algorithm";

export function NextPermRenderer({ step }: RendererProps<NextPermData>) {
  const { nums, pivot, i, j } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-6">
      <ArrayCells
        values={nums}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) =>
          idx === pivot ? "pivot" : idx === i ? "i" : idx === j ? "j" : ""
        }
      />

      <Legend
        items={[
          { role: "current", label: "Scanning" },
          { role: "pivot", label: "Pivot" },
          { role: "swapped", label: "Swapped" },
          { role: "active", label: "Reversing suffix" },
          { role: "sorted", label: "Result" },
        ]}
      />
    </div>
  );
}
