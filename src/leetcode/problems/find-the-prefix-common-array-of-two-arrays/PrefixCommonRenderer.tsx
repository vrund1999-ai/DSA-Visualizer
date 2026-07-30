import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PrefixCommonData } from "./algorithm";

export function PrefixCommonRenderer({ step }: RendererProps<PrefixCommonData>) {
  const { A, B, i, common, res, answer } = step.data;
  const commonSet = new Set(common);

  const roleFor = (idx: number, arr: number[]) => {
    if (i !== null && idx <= i && commonSet.has(arr[idx])) return "sorted";
    if (idx === i) return "current";
    if (i !== null && idx < i) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">A</span>
        <ArrayCells values={A} roleFor={(idx) => roleFor(idx, A)} showIndex />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">B</span>
        <ArrayCells values={B} roleFor={(idx) => roleFor(idx, B)} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">prefix common count</span>
        <ArrayCells values={res} roleFor={(idx) => (idx === i ? "current" : answer ? "sorted" : "default")} />
      </div>

      <Legend items={[{ role: "current", label: "Current index" }, { role: "sorted", label: "Common value" }, { role: "visited", label: "Processed" }]} />
    </div>
  );
}
