import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { TripletData } from "./algorithm";

export function TripletRenderer({ step }: RendererProps<TripletData>) {
  const { nums, k, maxI, maxDiff, ans, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">maximize (nums[i] − nums[j]) × nums[k], i &lt; j &lt; k</div>

      <ArrayCells values={nums} roleFor={(idx) => (idx === k ? "current" : idx < (k ?? 0) ? "visited" : "default")} topLabel={(idx) => (idx === k ? "k" : "")} showIndex />

      <div className="grid grid-cols-3 gap-2 text-sm">
        <span className="rounded-md border px-3 py-1">maxI = <b className="tabular-nums">{maxI}</b></span>
        <span className="rounded-md border px-3 py-1">maxDiff = <b className="tabular-nums">{maxDiff}</b></span>
        <span className="rounded-md border border-role-sorted px-3 py-1">ans = <b className="tabular-nums">{answer ?? ans}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "k (last factor)" }, { role: "visited", label: "candidate i / j" }]} />
    </div>
  );
}
