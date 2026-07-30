import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MonotonicData } from "./algorithm";

export function MonotonicRenderer({ step }: RendererProps<MonotonicData>) {
  const { nums, scan, inc, dec, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === scan || i === (scan ?? 0) - 1) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={nums} roleFor={roleFor} showIndex={false} />

      <div className="flex gap-4 text-sm">
        <span className={inc ? "text-role-sorted" : "text-muted-foreground line-through"}>non-decreasing</span>
        <span className={dec ? "text-role-sorted" : "text-muted-foreground line-through"}>non-increasing</span>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        monotonic? <b>{answer === null ? "…" : answer ? "true" : "false"}</b>
      </div>

      <Legend items={[{ role: "current", label: "comparing pair" }]} />
    </div>
  );
}
