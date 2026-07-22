import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RangeSumData } from "./algorithm";

export function RangeSumRenderer({ step }: RendererProps<RangeSumData>) {
  const { nums, prefix, phase, buildIndex, queryRange, answer } = step.data;

  const numRole = (i: number) => {
    if (phase === "query" && queryRange && i >= queryRange[0] && i <= queryRange[1]) return "active";
    if (i === buildIndex) return "current";
    return "default";
  };
  const prefixRole = (i: number) => {
    if (phase === "query" && queryRange && (i === queryRange[0] || i === queryRange[1] + 1)) return "target";
    if (buildIndex !== null && i === buildIndex + 1) return "current";
    return "default";
  };

  return (
    <div className="flex h-full flex-col gap-5">
      {phase === "query" && queryRange && (
        <p className="text-center text-sm">
          <span className="text-muted-foreground">sumRange({queryRange[0]}, {queryRange[1]}) = </span>
          <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{answer}</span>
        </p>
      )}

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">nums</span>
        <ArrayCells values={nums} roleFor={numRole} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">prefix (prefix[k] = sum of first k)</span>
        <ArrayCells values={prefix} roleFor={prefixRole} showIndex={false} />
      </div>

      <Legend
        items={[
          { role: "current", label: "Building" },
          { role: "active", label: "Query range" },
          { role: "target", label: "Prefix endpoints" },
        ]}
      />
    </div>
  );
}
