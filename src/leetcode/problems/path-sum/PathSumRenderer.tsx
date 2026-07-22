import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { PathSumData } from "./algorithm";

export function PathSumRenderer({ step }: RendererProps<PathSumData>) {
  const { heap, target, current, running, path, found } = step.data;

  const roleFor = (i: number) => {
    if (found && path.includes(i)) return "target";
    if (i === current) return "current";
    if (path.includes(i)) return "path";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Target</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">{target}</span>
        <span className="ml-2 text-muted-foreground">Running</span>
        <span className="rounded-md border px-2.5 py-1 font-semibold tabular-nums">{running}</span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      {found !== null && (
        <p className={`text-center text-sm font-semibold ${found ? "text-role-sorted" : "text-role-swapped"}`}>
          {found ? "Path found ✓" : "No such path ✗"}
        </p>
      )}

      <Legend
        items={[
          { role: "current", label: "Visiting" },
          { role: "path", label: "Current path" },
          { role: "target", label: "Winning path" },
        ]}
      />
    </div>
  );
}
