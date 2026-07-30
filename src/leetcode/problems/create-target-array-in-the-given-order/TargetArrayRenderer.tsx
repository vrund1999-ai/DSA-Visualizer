import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { TargetArrayData } from "./algorithm";

export function TargetArrayRenderer({ step }: RendererProps<TargetArrayData>) {
  const { nums, index, src, target, insertedAt, done } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums</span>
        <ArrayCells values={nums} roleFor={(i) => (i === src ? "current" : "default")} showIndex={false} cellWidth="w-9" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">index</span>
        <ArrayCells values={index} roleFor={(i) => (i === src ? "compared" : "default")} showIndex={false} cellWidth="w-9" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">target</span>
        {target.length > 0 ? (
          <ArrayCells
            values={target}
            roleFor={(i) => (done ? "sorted" : i === insertedAt ? "swapped" : "active")}
            showIndex
            cellWidth="w-9"
          />
        ) : (
          <span className="text-sm text-muted-foreground">(empty)</span>
        )}
      </div>

      <Legend
        items={[
          { role: "current", label: "value inserted" },
          { role: "swapped", label: "insertion point" },
        ]}
      />
    </div>
  );
}
