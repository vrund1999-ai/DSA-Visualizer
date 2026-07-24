import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MergeStringsData } from "./algorithm";

export function MergeStringsRenderer({ step }: RendererProps<MergeStringsData>) {
  const { w1, w2, i, from, result } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">word1</span>
        <ArrayCells values={w1} roleFor={(idx) => (idx === i && from === 1 ? "current" : "default")} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">word2</span>
        <ArrayCells values={w2} roleFor={(idx) => (idx === i && from === 2 ? "active" : "default")} showIndex={false} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">merged</span>
        <ArrayCells values={result} roleFor={() => "target"} showIndex={false} />
      </div>

      <Legend
        items={[
          { role: "current", label: "From word1" },
          { role: "active", label: "From word2" },
          { role: "target", label: "Result" },
        ]}
      />
    </div>
  );
}
