import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DivSubsetData } from "./algorithm";

export function DivSubsetRenderer({ step }: RendererProps<DivSubsetData>) {
  const { nums, dp, i, j, extended, answer } = step.data;

  const roleFor = (k: number) => {
    if (answer && answer.includes(k)) return "sorted";
    if (k === i) return extended ? "swapped" : "current";
    if (k === j) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">sorted values</span>
        <ArrayCells values={nums} roleFor={roleFor} topLabel={(k) => (k === i ? "i" : k === j ? "j" : "")} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp (chain length)</span>
        <ArrayCells values={dp} roleFor={(k) => (k === i ? "current" : "default")} showIndex={false} />
      </div>

      {answer !== null && (
        <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">[{answer.map((k) => nums[k]).join(", ")}]</div>
      )}

      <Legend items={[{ role: "current", label: "Current i" }, { role: "compared", label: "Divisor j" }, { role: "swapped", label: "Extended" }, { role: "sorted", label: "In subset" }]} />
    </div>
  );
}
