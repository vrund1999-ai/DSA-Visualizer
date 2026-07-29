import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { BottomLeftData } from "./algorithm";

export function BottomLeftRenderer({ step }: RendererProps<BottomLeftData>) {
  const { heap, level, leftmost, depth, answer } = step.data;

  const roleFor = (i: number) => {
    if (answer !== null && i === leftmost) return "sorted";
    if (i === leftmost) return "current";
    if (level.includes(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">depth = {depth}</span>
        {leftmost !== null && <span className="rounded-md border border-role-current px-3 py-1">leftmost = {heap[leftmost]}</span>}
      </div>

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">bottom-left value = {answer}</div>}

      <Legend items={[{ role: "current", label: "Level's leftmost" }, { role: "active", label: "Current level" }, { role: "sorted", label: "Answer" }]} />
    </div>
  );
}
