import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ConcatData } from "./algorithm";

export function ConcatRenderer({ step }: RendererProps<ConcatData>) {
  const { nums, ans, i, done } = step.data;
  const n = nums.length;

  const numsRole = (k: number) => (k === i ? "current" : done ? "visited" : k < (i ?? 0) ? "visited" : "default");
  const ansRole = (k: number) => {
    if (done) return "sorted";
    if (i !== null && (k === i || k === i + n)) return "swapped";
    if (ans[k] !== null) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums</span>
        <ArrayCells values={nums} roleFor={numsRole} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">ans (length {2 * n})</span>
        <ArrayCells values={ans.map((v) => (v === null ? "·" : v))} roleFor={ansRole} />
      </div>

      <Legend items={[{ role: "current", label: "Source i" }, { role: "swapped", label: "Written slots" }, { role: "visited", label: "Filled" }]} />
    </div>
  );
}
