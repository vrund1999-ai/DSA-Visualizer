import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { VerticalTraversalData } from "./algorithm";

export function VerticalTraversalRenderer({ step }: RendererProps<VerticalTraversalData>) {
  const { heap, visited, current, columns, sorted } = step.data;

  const roleFor = (i: number) => {
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
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          columns (left → right){sorted ? " · sorted" : ""}
        </span>
        <div className="flex min-h-[3rem] flex-wrap items-end justify-center gap-2 rounded-lg border bg-card/40 p-2">
          {columns.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : columns.map(({ col, vals }) => (
            <div key={col} className="flex flex-col items-center gap-1">
              <div className="flex flex-col gap-0.5">
                {vals.map((v, k) => (
                  <span key={k} className="rounded border bg-muted/30 px-2 py-0.5 text-center font-mono text-xs">{v}</span>
                ))}
              </div>
              <span className="text-[0.65rem] text-muted-foreground">col {col}</span>
            </div>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Recording" }, { role: "visited", label: "Visited" }]} />
    </div>
  );
}
