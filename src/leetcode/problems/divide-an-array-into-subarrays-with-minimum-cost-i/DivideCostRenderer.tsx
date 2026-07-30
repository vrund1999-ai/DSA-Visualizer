import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DivideCostData } from "./algorithm";

export function DivideCostRenderer({ step }: RendererProps<DivideCostData>) {
  const { nums, scan, chosen, cost } = step.data;
  const chosenSet = new Set(chosen);

  const roleFor = (i: number) => {
    if (i === 0) return "active";
    if (chosenSet.has(i)) return "sorted";
    if (i === scan) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <ArrayCells
        values={nums}
        roleFor={roleFor}
        topLabel={(i) => (i === 0 ? "fixed" : chosenSet.has(i) ? "min" : "")}
      />

      <div className="rounded-md border px-3 py-1 text-sm">
        minimum cost = <b className="tabular-nums">{cost ?? "…"}</b>
      </div>

      <Legend
        items={[
          { role: "active", label: "Subarray 1 (fixed start)" },
          { role: "sorted", label: "Two smallest starts" },
          { role: "current", label: "Scanning" },
        ]}
      />
    </div>
  );
}
