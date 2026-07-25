import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { Legend } from "@/leetcode/shared/viz";
import type { EvenOddData } from "./algorithm";

export function EvenOddRenderer({ step }: RendererProps<EvenOddData>) {
  const { heap, level, depth, current, violation, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === violation) return "target";
    if (i === current) return "current";
    if (level.includes(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center text-sm text-muted-foreground">
        level {depth} — {depth % 2 === 0 ? "must be increasing odd values" : "must be decreasing even values"}
      </div>

      <div className="flex flex-1 items-center justify-center">
        <TreeView heap={heap} roleFor={roleFor} />
      </div>

      {answer !== null && (
        <div className={`text-center text-base font-semibold ${answer ? "text-role-visited" : "text-role-target"}`}>
          {answer ? "even-odd tree ✓" : "not an even-odd tree ✗"}
        </div>
      )}

      <Legend items={[{ role: "active", label: "Current level" }, { role: "current", label: "Checking" }, { role: "target", label: "Violation" }]} />
    </div>
  );
}
