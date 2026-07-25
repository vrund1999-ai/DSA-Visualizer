import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { TwoSumBstData } from "./algorithm";

export function TwoSumBstRenderer({ step }: RendererProps<TwoSumBstData>) {
  const { heap, k, cur, seen, complement, found, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === cur) return found ? "sorted" : "current";
    if (heap[i] !== null && seen.includes(heap[i]!)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">target k = <b className="tabular-nums">{k}</b></div>

      <TreeView heap={heap} roleFor={roleFor} />

      <div className="flex items-center gap-3 text-sm">
        {complement !== null && <span className="rounded-md border border-role-current px-3 py-1">need {complement}</span>}
        <span className="rounded-md border px-3 py-1">seen = {"{"}{seen.join(", ")}{"}"}</span>
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Found a pair summing to k ✓" : "No such pair ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Visiting" }, { role: "visited", label: "In seen-set" }, { role: "sorted", label: "Completes the pair" }]} />
    </div>
  );
}
