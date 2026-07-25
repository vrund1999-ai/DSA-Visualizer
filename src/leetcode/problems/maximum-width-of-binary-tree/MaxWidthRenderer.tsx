import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { MaxWidthData } from "./algorithm";

export function MaxWidthRenderer({ step }: RendererProps<MaxWidthData>) {
  const { heap, level, positions, depth, levelWidth, best, answer } = step.data;

  const roleFor = (i: number) => {
    const idx = level.indexOf(i);
    if (idx === 0 || idx === level.length - 1) return "target"; // the two edges bounding width
    if (idx >= 0) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
        <span>level {depth}</span>
        {levelWidth !== null && <span>width = <b className="tabular-nums text-foreground">{levelWidth}</b></span>}
        <span>best = <b className="tabular-nums text-role-target">{answer ?? best}</b></span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      {positions.length > 0 && (
        <div className="text-center text-xs text-muted-foreground">
          position indices: {positions.join(", ")}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Level node" }, { role: "target", label: "Width endpoints" }]} />
    </div>
  );
}
