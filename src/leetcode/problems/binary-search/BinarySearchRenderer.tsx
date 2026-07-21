import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { BinarySearchData } from "./algorithm";

export function BinarySearchRenderer({ step }: RendererProps<BinarySearchData>) {
  const { nums, target, lo, hi, mid, found } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Target</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">
          {target}
        </span>
        <span className="ml-3 text-muted-foreground">
          {found !== null ? `found at index ${found}` : mid === null ? "not found" : `range [${lo}, ${hi}]`}
        </span>
      </div>

      <ArrayCells
        values={nums}
        roleFor={(idx) => roleFor(idx)}
        topLabel={(idx) =>
          idx === mid ? "mid" : idx === lo && idx === hi ? "lo/hi" : idx === lo ? "lo" : idx === hi ? "hi" : ""
        }
      />

      <Legend
        items={[
          { role: "current", label: "Middle" },
          { role: "swapped", label: "Just discarded" },
          { role: "visited", label: "Out of range" },
          { role: "target", label: "Found" },
        ]}
      />
    </div>
  );
}
