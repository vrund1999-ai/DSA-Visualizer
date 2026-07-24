import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { NextPointerIIData } from "./algorithm";

export function NextPointerIIRenderer({ step }: RendererProps<NextPointerIIData>) {
  const { heap, next, current, linked } = step.data;

  const roleFor = (i: number) => {
    if (i === linked) return "compared";
    if (i === current) return "current";
    return "default";
  };

  const arrows = Object.entries(next).map(([from, to]) => `${heap[+from]} → ${heap[to]}`);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">next pointers</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2">
          {arrows.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : arrows.map((a, k) => (
            <span key={k} className="rounded-md border bg-muted/30 px-2 py-1 font-mono text-xs">{a}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Parent" }, { role: "compared", label: "Just linked" }]} />
    </div>
  );
}
