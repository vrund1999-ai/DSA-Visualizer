import type { RendererProps } from "@/core/types";
import { ArrayCells } from "@/leetcode/shared/viz";
import type { FindPairsData } from "./algorithm";

export function FindPairsRenderer({ step }: RendererProps<FindPairsData>) {
  const { nums1, nums2, ops, opIndex, changed, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {ops.map((op, i) => (
          <span
            key={i}
            className={`rounded border px-1.5 py-0.5 font-mono text-xs ${
              i === opIndex ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
            }`}
          >
            {op}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums1 (fixed)</span>
        <ArrayCells values={nums1} roleFor={() => "active"} showIndex={false} cellWidth="w-8" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums2 (mutable)</span>
        <ArrayCells values={nums2} roleFor={(i) => (i === changed ? "swapped" : "compared")} showIndex={false} cellWidth="w-8" />
      </div>

      {result !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          count = <b className="tabular-nums">{result}</b>
        </div>
      )}
    </div>
  );
}
