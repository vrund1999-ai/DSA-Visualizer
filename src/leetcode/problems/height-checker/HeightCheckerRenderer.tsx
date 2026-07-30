import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { HeightCheckerData } from "./algorithm";

export function HeightCheckerRenderer({ step }: RendererProps<HeightCheckerData>) {
  const { heights, expected, scan, mismatches, count, answer } = step.data;
  const misSet = new Set(mismatches);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">current</span>
        <ArrayCells
          values={heights}
          roleFor={(i) => (i === scan ? "current" : misSet.has(i) ? "swapped" : "default")}
          showIndex
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">expected (sorted)</span>
        <ArrayCells
          values={expected}
          roleFor={(i) => (i === scan ? "current" : misSet.has(i) ? "sorted" : "default")}
          showIndex={false}
        />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        out of place = <b className="tabular-nums">{answer ?? count}</b>
      </div>

      <Legend items={[{ role: "current", label: "comparing" }, { role: "swapped", label: "mismatch" }]} />
    </div>
  );
}
