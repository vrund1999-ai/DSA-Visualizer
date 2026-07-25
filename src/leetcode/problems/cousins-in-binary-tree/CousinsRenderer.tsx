import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { CousinsData } from "./algorithm";

export function CousinsRenderer({ step }: RendererProps<CousinsData>) {
  const { heap, x, y, level, depth, xIdx, yIdx, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === xIdx || i === yIdx) return "target";
    if (level.includes(i)) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
        <span>targets: <b className="text-role-target">{x}</b>, <b className="text-role-target">{y}</b></span>
        <span>scanning depth {depth}</span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      {answer !== null && (
        <div className={`text-center text-base font-semibold ${answer ? "text-role-target" : "text-muted-foreground"}`}>
          {answer ? "cousins" : "not cousins"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current level" }, { role: "target", label: "Target node" }]} />
    </div>
  );
}
