import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { NiceData } from "./algorithm";

export function NiceRenderer({ step }: RendererProps<NiceData>) {
  const { nums, k, idx, odd, count, added, result, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (idx !== null && i < idx) return nums[i] & 1 ? "active" : "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">k = <b className="tabular-nums">{k}</b> odd numbers</div>

      <ArrayCells values={nums} roleFor={roleFor} showIndex cellWidth="w-11" />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">odd prefix = <b className="tabular-nums">{odd}</b></span>
        {added !== null && <span className="rounded-md border px-3 py-1">+{added}</span>}
        <span className="rounded-md border px-3 py-1">result = <b className="tabular-nums">{answer ?? result}</b></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">odd-prefix frequencies</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {count.map(([key, freq]) => (
            <span key={key} className={`rounded-md border px-2 py-0.5 text-sm tabular-nums ${key === odd - k ? "border-role-sorted bg-role-sorted/15" : key === odd ? "border-role-current" : ""}`}>{key}: {freq}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Current" }, { role: "active", label: "Odd number" }, { role: "sorted", label: "Matching prefix (odd−k)" }]} />
    </div>
  );
}
