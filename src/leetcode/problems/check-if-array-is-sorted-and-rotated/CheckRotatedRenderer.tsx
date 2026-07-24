import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { CheckRotatedData } from "./algorithm";

export function CheckRotatedRenderer({ step }: RendererProps<CheckRotatedData>) {
  const { nums, breaks, result } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Drops (nums[i] &gt; next)</span>
        <span className={`rounded-md border px-2.5 py-1 font-semibold tabular-nums ${breaks <= 1 ? "border-role-sorted" : "border-role-swapped"}`}>{breaks}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} />
      <p className="text-center text-xs text-muted-foreground">Comparisons wrap around: the last element is compared with the first.</p>

      {result !== null && (
        <p className={`text-center text-sm font-semibold ${result ? "text-role-sorted" : "text-role-swapped"}`}>{result ? "Sorted & rotated ✓" : "Not sorted & rotated ✗"}</p>
      )}

      <Legend
        items={[
          { role: "sorted", label: "In order" },
          { role: "swapped", label: "Drop here" },
          { role: "compared", label: "Next element" },
        ]}
      />
    </div>
  );
}
