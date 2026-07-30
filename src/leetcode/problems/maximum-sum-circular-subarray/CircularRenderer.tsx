import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { CircularData } from "./algorithm";

export function CircularRenderer({ step }: RendererProps<CircularData>) {
  const { nums, i, curMax, maxSum, curMin, minSum, total, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <ArrayCells values={nums} roleFor={(idx) => (idx === i ? "current" : idx < (i ?? 0) ? "visited" : "default")} topLabel={(idx) => (idx === i ? "▼" : "")} showIndex />

      <div className="grid grid-cols-2 gap-2 text-sm">
        <span className="rounded-md border border-role-sorted px-3 py-1">curMax = <b className="tabular-nums">{curMax}</b></span>
        <span className="rounded-md border border-role-sorted px-3 py-1">maxSum = <b className="tabular-nums">{maxSum === -Infinity ? "−∞" : maxSum}</b></span>
        <span className="rounded-md border border-role-swapped px-3 py-1">curMin = <b className="tabular-nums">{curMin}</b></span>
        <span className="rounded-md border border-role-swapped px-3 py-1">minSum = <b className="tabular-nums">{minSum === Infinity ? "∞" : minSum}</b></span>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">total = {total} · answer = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "Current element" }, { role: "sorted", label: "Max Kadane" }, { role: "swapped", label: "Min Kadane" }]} />
    </div>
  );
}
