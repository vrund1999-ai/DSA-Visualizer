import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { RightViewData } from "./algorithm";

export function RightViewRenderer({ step }: RendererProps<RightViewData>) {
  const { heap, current, visited, view } = step.data;

  const roleFor = (i: number) => {
    if (view.includes(i)) return "target";
    if (i === current) return "current";
    if (visited.includes(i)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">right side view</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {view.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : view.map((i) => (
            <span key={i} className="rounded-md border-2 border-role-target bg-role-target/15 px-2 py-1 font-mono text-sm tabular-nums">{heap[i]}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Dequeued" }, { role: "visited", label: "Visited" }, { role: "target", label: "In view" }]} />
    </div>
  );
}
