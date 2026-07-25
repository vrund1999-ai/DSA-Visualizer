import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { PostorderData } from "./algorithm";

export function PostorderRenderer({ step }: RendererProps<PostorderData>) {
  const { heap, cur, visited, out, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === cur) return "current";
    if (visited.includes(i)) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <TreeView heap={heap} roleFor={roleFor} />

      <div className="flex items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">output</span>
        <div className="flex min-h-9 items-center gap-1.5 rounded-md border px-3 py-1">
          {out.length === 0 ? <span className="text-sm text-muted-foreground">[]</span> : (answer ?? out).map((v, i) => (
            <span key={i} className="flex size-8 items-center justify-center rounded-md border-2 border-role-visited/40 bg-role-visited/15 text-sm font-medium tabular-nums">{v}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Emitting" }, { role: "visited", label: "Done" }]} />
    </div>
  );
}
