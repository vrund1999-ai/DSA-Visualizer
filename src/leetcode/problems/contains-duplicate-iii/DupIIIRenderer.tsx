import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DupIIIData } from "./algorithm";

export function DupIIIRenderer({ step }: RendererProps<DupIIIData>) {
  const { nums, k, t, i, windowStart, buckets, matchIdx, answer } = step.data;

  const roleFor = (idx: number) => {
    if (idx === matchIdx) return "sorted";
    if (idx === i) return "current";
    if (i !== null && idx >= windowStart && idx < i) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">indexDiff k = {k}</span>
        <span className="rounded-md border px-3 py-1">valueDiff t = {t}</span>
      </div>

      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-11" />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">buckets (id → value, width {t + 1})</span>
        <div className="flex min-h-9 flex-wrap justify-center gap-1.5">
          {buckets.length === 0 ? <span className="text-sm text-muted-foreground">empty</span> : buckets.sort((a, b) => a[0] - b[0]).map(([id, v]) => (
            <span key={id} className="rounded-md border px-2 py-0.5 text-sm tabular-nums">#{id}: {v}</span>
          ))}
        </div>
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Near-duplicate found ✓" : "None within k/t ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current" }, { role: "active", label: "Window (k back)" }, { role: "sorted", label: "Match" }]} />
    </div>
  );
}
