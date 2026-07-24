import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { PathSumData } from "./algorithm";

export function PathSumRenderer({ step }: RendererProps<PathSumData>) {
  const { heap, target, path, remain, current, results, found } = step.data;

  const roleFor = (i: number) => {
    if (i === current) return found ? "target" : "current";
    if (path.includes(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
        <span>target = {target}</span>
        <span>remaining = <b className="tabular-nums text-foreground">{remain}</b></span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">paths found</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r, k) => (
            <span key={k} className={`rounded-md border px-2 py-1 font-mono text-xs ${found && k === results.length - 1 ? "border-role-target bg-role-target/15" : "bg-muted/30"}`}>[{r.join(" → ")}]</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "active", label: "On path" }, { role: "current", label: "Visiting" }, { role: "target", label: "Path found" }]} />
    </div>
  );
}
