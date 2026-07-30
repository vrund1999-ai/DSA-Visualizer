import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CommonData } from "./algorithm";

export function CommonRenderer({ step }: RendererProps<CommonData>) {
  const { nums1, nums2, scan1, scan2, matched1, matched2, count1, count2, answer } = step.data;
  const m1 = new Set(matched1);
  const m2 = new Set(matched2);

  const role1 = (i: number) => (i === scan1 ? "current" : m1.has(i) ? "sorted" : "default");
  const role2 = (i: number) => (i === scan2 ? "current" : m2.has(i) ? "sorted" : "default");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums1 · count1 = {count1}</span>
        <ArrayCells values={nums1} roleFor={role1} showIndex={false} cellWidth="w-9" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums2 · count2 = {count2}</span>
        <ArrayCells values={nums2} roleFor={role2} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        answer = <b className="tabular-nums">{answer ? `[${answer[0]}, ${answer[1]}]` : "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "checking" }, { role: "sorted", label: "value shared" }]} />
    </div>
  );
}
