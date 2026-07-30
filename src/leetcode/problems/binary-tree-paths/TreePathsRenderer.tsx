import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { TreePathsData } from "./algorithm";

export function TreePathsRenderer({ step }: RendererProps<TreePathsData>) {
  const { heap, cur, path, res, justAdded, answer } = step.data;
  const pathSet = new Set(path);

  const roleFor = (i: number) => {
    if (i === cur) return "current";
    if (pathSet.has(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">root-to-leaf paths</span>
        <div className="flex flex-wrap justify-center gap-2">
          {(answer ?? res).map((p, i) => (
            <span key={i} className={`rounded border px-2 py-0.5 font-mono text-sm ${p === justAdded ? "border-role-sorted bg-role-sorted/15" : "border-border"}`}>{p}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Current node" }, { role: "active", label: "Path from root" }]} />
    </div>
  );
}
