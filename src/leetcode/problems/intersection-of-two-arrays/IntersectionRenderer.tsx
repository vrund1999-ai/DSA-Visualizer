import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { IntersectionData } from "./algorithm";

export function IntersectionRenderer({ step }: RendererProps<IntersectionData>) {
  const { nums1, nums2, set1, result } = step.data;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums1 (loaded into a set)</span>
        <ArrayCells values={nums1} roleFor={() => "default"} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums2 (scanned)</span>
        <ArrayCells values={nums2} roleFor={(j) => roleForRef(`b${j}`)} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Intersection</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3 font-mono text-sm">
          {result.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : result.join(", ")}
        </div>
      </div>

      <p className="text-center text-[11px] text-muted-foreground">Set of nums1: {"{" + set1.join(", ") + "}"}</p>

      <Legend
        items={[
          { role: "sorted", label: "In both" },
          { role: "visited", label: "Not in nums1" },
        ]}
      />
    </div>
  );
}
