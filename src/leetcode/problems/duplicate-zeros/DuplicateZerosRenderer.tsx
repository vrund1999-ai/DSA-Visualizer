import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DuplicateZerosData } from "./algorithm";

export function DuplicateZerosRenderer({ step }: RendererProps<DuplicateZerosData>) {
  const { original, result, readPtr, wrote, done } = step.data;
  const wroteSet = new Set(wrote);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">original</span>
        <ArrayCells values={original} roleFor={(i) => (i === readPtr ? "current" : "default")} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">result</span>
        <ArrayCells
          values={result.map((v) => (v === null ? "·" : v))}
          roleFor={(i) => (done ? "sorted" : wroteSet.has(i) ? "swapped" : result[i] === null ? "default" : "active")}
          showIndex={false}
        />
      </div>

      <Legend
        items={[
          { role: "current", label: "reading" },
          { role: "swapped", label: "just written" },
          { role: "active", label: "filled" },
        ]}
      />
    </div>
  );
}
