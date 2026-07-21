import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ProductData } from "./algorithm";

export function ProductRenderer({ step }: RendererProps<ProductData>) {
  const { nums, res, phase, running } = step.data;
  const roleForRef = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">
          {phase === "prefix"
            ? "Left product running"
            : phase === "suffix"
              ? "Right product running"
              : "Result"}
        </span>
        {phase !== "done" && (
          <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">
            {running}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            nums
          </span>
          <ArrayCells values={nums} roleFor={(idx) => roleForRef(`n${idx}`)} showIndex={false} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            result
          </span>
          <ArrayCells values={res} roleFor={(idx) => roleForRef(`r${idx}`)} showIndex={false} />
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "nums[i]" },
          { role: "swapped", label: "Left pass write" },
          { role: "target", label: "Right pass write" },
        ]}
      />
    </div>
  );
}
