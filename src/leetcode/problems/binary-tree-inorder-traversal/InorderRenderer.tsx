import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { InorderData } from "./algorithm";

export function InorderRenderer({ step }: RendererProps<InorderData>) {
  const { heap, current, stack, visited, result } = step.data;

  const roleFor = (i: number) => {
    if (i === current) return "current";
    if (stack.includes(i)) return "active";
    if (visited.includes(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">In-order output</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1 rounded-lg border bg-card/40 p-2 font-mono text-sm">
          {result.length === 0 ? <span className="text-xs text-muted-foreground">—</span> : result.join(", ")}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Current" },
          { role: "active", label: "On stack" },
          { role: "sorted", label: "Recorded" },
        ]}
      />
    </div>
  );
}
