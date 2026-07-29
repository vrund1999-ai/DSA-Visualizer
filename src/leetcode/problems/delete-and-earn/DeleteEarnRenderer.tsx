import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DeleteEarnData } from "./algorithm";

export function DeleteEarnRenderer({ step }: RendererProps<DeleteEarnData>) {
  const { nums, points, v, take, skip, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums</span>
        <ArrayCells values={nums} roleFor={(i) => (nums[i] === v ? "current" : "default")} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">points[v] = v × count (index = value)</span>
        <ArrayCells values={points} roleFor={(i) => (i === v ? "current" : "default")} showIndex cellWidth="w-9" />
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">take = <b className="tabular-nums">{take}</b></span>
        <span className="rounded-md border px-3 py-1">skip = <b className="tabular-nums">{skip}</b></span>
        {answer !== null && <span className="rounded-md border px-3 py-1 font-semibold">answer = {answer}</span>}
      </div>

      <Legend items={[{ role: "current", label: "Current value v" }]} />
    </div>
  );
}
