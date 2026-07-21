import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { MergeSortedData } from "./algorithm";

export function MergeSortedRenderer({ step }: RendererProps<MergeSortedData>) {
  const { nums1, nums2, i, j, k } = step.data;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          nums1 (with room for nums2)
        </span>
        <ArrayCells
          values={nums1}
          roleFor={(idx) => roleForRef(`a${idx}`)}
          topLabel={(idx) => (idx === k ? "k" : idx === i ? "i" : "")}
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums2</span>
        <ArrayCells
          values={nums2}
          roleFor={(idx) => roleForRef(`b${idx}`)}
          topLabel={(idx) => (idx === j ? "j" : "")}
        />
      </div>

      <Legend
        items={[
          { role: "current", label: "nums1 tail (i)" },
          { role: "active", label: "nums2 tail (j)" },
          { role: "pivot", label: "Write slot (k)" },
          { role: "swapped", label: "Just written" },
        ]}
      />
    </div>
  );
}
