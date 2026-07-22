import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { DiameterData } from "./algorithm";

export function DiameterRenderer({ step }: RendererProps<DiameterData>) {
  const { heap, current, done, best, throughNode } = step.data;

  const roleFor = (i: number) => {
    if (i === throughNode) return "target";
    if (i === current) return "current";
    if (done.includes(i)) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Diameter (edges)</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{best}</span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      <Legend
        items={[
          { role: "current", label: "Descending" },
          { role: "sorted", label: "Height computed" },
          { role: "target", label: "Diameter turning point" },
        ]}
      />
    </div>
  );
}
