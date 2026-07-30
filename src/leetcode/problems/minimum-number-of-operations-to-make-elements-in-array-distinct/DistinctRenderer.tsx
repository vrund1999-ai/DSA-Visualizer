import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DistinctData } from "./algorithm";

export function DistinctRenderer({ step }: RendererProps<DistinctData>) {
  const { nums, scan, distinctFrom, dupIndex, ops } = step.data;

  const roleFor = (i: number) => {
    if (i === dupIndex) return "swapped";
    if (i === scan) return "current";
    if (dupIndex !== null && i <= dupIndex) return "wall"; // prefix to remove
    if (i >= distinctFrom) return "sorted"; // distinct suffix
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells values={nums} roleFor={roleFor} showIndex />

      <div className="rounded-md border px-3 py-1 text-sm">
        operations = <b className="tabular-nums">{ops ?? "…"}</b>
      </div>

      <Legend
        items={[
          { role: "current", label: "scanning" },
          { role: "sorted", label: "distinct suffix" },
          { role: "swapped", label: "first repeat" },
          { role: "wall", label: "prefix removed" },
        ]}
      />
    </div>
  );
}
