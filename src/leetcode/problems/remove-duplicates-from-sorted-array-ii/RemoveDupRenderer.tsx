import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RemoveDupData } from "./algorithm";

export function RemoveDupRenderer({ step }: RendererProps<RemoveDupData>) {
  const { nums, read, write, length } = step.data;

  const roleFor = (i: number) => {
    if (length !== null) return i < length ? "sorted" : "default";
    if (i === read) return "current";
    if (i === write) return "target";
    if (i < write) return "visited";
    return "default";
  };

  const topLabel = (i: number) => {
    const parts: string[] = [];
    if (i === write) parts.push("w");
    if (i === read) parts.push("r");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} topLabel={topLabel} />

      {length !== null && <div className="text-base font-semibold text-role-sorted">new length = {length}</div>}

      <Legend items={[{ role: "current", label: "read" }, { role: "target", label: "write slot" }, { role: "visited", label: "Kept" }, { role: "sorted", label: "Result" }]} />
    </div>
  );
}
