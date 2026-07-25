import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { MinDepthData } from "./algorithm";

export function MinDepthRenderer({ step }: RendererProps<MinDepthData>) {
  const { heap, level, depth, current, leaf, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === leaf) return "target";
    if (i === current) return "current";
    if (level.includes(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center text-sm text-muted-foreground">scanning depth {depth}</div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      {answer !== null && <div className="text-center text-base font-semibold text-role-target">minimum depth = {answer}</div>}

      <Legend items={[{ role: "active", label: "Current level" }, { role: "current", label: "Checking" }, { role: "target", label: "First leaf" }]} />
    </div>
  );
}
