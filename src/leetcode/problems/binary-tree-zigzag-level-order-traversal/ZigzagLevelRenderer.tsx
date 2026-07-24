import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { ZigzagLevelData } from "./algorithm";

export function ZigzagLevelRenderer({ step }: RendererProps<ZigzagLevelData>) {
  const { heap, current, visited, levels, ltr } = step.data;

  const roleFor = (i: number) => {
    if (i === current) return "current";
    if (visited.includes(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center text-sm text-muted-foreground">
        Next level direction: {ltr ? "→ left-to-right" : "← right-to-left"}
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Levels</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2">
          {levels.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : levels.map((l, k) => (
            <span key={k} className="rounded-md border bg-muted/30 px-2 py-1 font-mono text-xs">[{l.join(", ")}]</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Dequeued" }, { role: "sorted", label: "Visited" }]} />
    </div>
  );
}
