import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { IntersectData } from "./algorithm";

export function IntersectRenderer({ step }: RendererProps<IntersectData>) {
  const { nums1, nums2, phase, idx, count, result, matched, answer } = step.data;

  const role1 = (i: number) => (phase === "count" && i === idx ? "current" : "default");
  const role2 = (i: number) => {
    if (phase === "match" && i === idx) return matched ? "sorted" : "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums1</span>
        <ArrayCells values={nums1} roleFor={role1} showIndex={false} cellWidth="w-10" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">count map</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {count.map(([v, c]) => <span key={v} className={`rounded-md border px-2 py-0.5 text-sm tabular-nums ${nums2[idx ?? -1] === v && phase === "match" ? "border-role-current" : ""}`}>{v}:{c}</span>)}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums2</span>
        <ArrayCells values={nums2} roleFor={role2} showIndex={false} cellWidth="w-10" />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">result = [{(answer ?? result).join(", ")}]</div>

      <Legend items={[{ role: "current", label: "Counting" }, { role: "sorted", label: "Matched" }, { role: "compared", label: "No match" }]} />
    </div>
  );
}
