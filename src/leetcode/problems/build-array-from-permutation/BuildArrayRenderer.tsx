import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BuildArrayData } from "./algorithm";

export function BuildArrayRenderer({ step }: RendererProps<BuildArrayData>) {
  const { nums, ans, i, mid, done } = step.data;

  const numsRole = (k: number) => {
    if (k === mid) return "swapped"; // second lookup target
    if (k === i) return "current"; // first lookup index
    return "default";
  };

  const ansRole = (k: number) => {
    if (done) return "sorted";
    if (k === i) return "swapped";
    if (ans[k] !== null) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums (index → value)</span>
        <ArrayCells values={nums} roleFor={numsRole} topLabel={(k) => (k === i ? "i" : k === mid ? "nums[i]" : "")} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">ans</span>
        <ArrayCells values={ans.map((v) => (v === null ? "·" : v))} roleFor={ansRole} showIndex={false} />
      </div>

      <Legend items={[{ role: "current", label: "i" }, { role: "swapped", label: "nums[i] (2nd lookup)" }, { role: "visited", label: "Filled" }]} />
    </div>
  );
}
