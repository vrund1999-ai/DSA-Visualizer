import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DiffData } from "./algorithm";

export function DiffRenderer({ step }: RendererProps<DiffData>) {
  const { nums1, nums2, scan, scanSide, only1, only2 } = step.data;
  const o1 = new Set(only1);
  const o2 = new Set(only2);

  const role1 = (i: number) => (scanSide === 1 && nums1[i] === scan ? "current" : o1.has(nums1[i]) ? "sorted" : "default");
  const role2 = (i: number) => (scanSide === 2 && nums2[i] === scan ? "current" : o2.has(nums2[i]) ? "swapped" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums1</span>
        <ArrayCells values={nums1} roleFor={role1} showIndex={false} cellWidth="w-9" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums2</span>
        <ArrayCells values={nums2} roleFor={role2} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        answer = <b className="tabular-nums">[[{only1.join(", ")}], [{only2.join(", ")}]]</b>
      </div>

      <Legend items={[{ role: "sorted", label: "only in nums1" }, { role: "swapped", label: "only in nums2" }]} />
    </div>
  );
}
