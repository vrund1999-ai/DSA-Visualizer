import type { RendererProps } from "@/core/types";
import { TreeView } from "@/leetcode/shared/tree";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BalanceBSTData } from "./algorithm";

export function BalanceBSTRenderer({ step }: RendererProps<BalanceBSTData>) {
  const { sorted, heap, range, mid, answer } = step.data;
  const shown = answer ?? heap;
  const midVal = mid !== null ? sorted[mid] : null;

  const arrRole = (i: number) => {
    if (i === mid) return "current";
    if (range && i >= range[0] && i <= range[1]) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">sorted in-order values</span>
        <ArrayCells values={sorted} roleFor={arrRole} showIndex />
      </div>

      {shown.length > 0 && <TreeView heap={shown} roleFor={(i) => (shown[i] === midVal && midVal !== null && answer === null ? "current" : "default")} />}

      <Legend items={[{ role: "current", label: "Chosen middle (root)" }, { role: "active", label: "Current range" }]} />
    </div>
  );
}
