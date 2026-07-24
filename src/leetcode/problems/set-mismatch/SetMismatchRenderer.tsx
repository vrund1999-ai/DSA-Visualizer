import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SetMismatchData } from "./algorithm";

export function SetMismatchRenderer({ step }: RendererProps<SetMismatchData>) {
  const { nums, i, dup, missing } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        {dup >= 0 && (
          <>
            <span className="text-muted-foreground">duplicate</span>
            <span className="rounded-md border border-role-swapped bg-role-swapped/10 px-2 py-0.5 font-semibold tabular-nums text-role-swapped">{dup}</span>
          </>
        )}
        {missing !== null && (
          <>
            <span className="text-muted-foreground">missing</span>
            <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{missing}</span>
          </>
        )}
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <Legend
        items={[
          { role: "current", label: "First seen" },
          { role: "swapped", label: "Duplicate" },
          { role: "target", label: "Missing value" },
        ]}
      />
    </div>
  );
}
