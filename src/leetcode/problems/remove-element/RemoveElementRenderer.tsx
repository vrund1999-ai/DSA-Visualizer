import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { RemoveElementData } from "./algorithm";

export function RemoveElementRenderer({ step }: RendererProps<RemoveElementData>) {
  const { nums, val, i, k } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Removing value</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{val}</span>
        <span className="ml-3 text-muted-foreground">kept</span>
        <span className="rounded-md border border-role-sorted bg-role-sorted/10 px-2 py-0.5 font-semibold tabular-nums text-role-sorted">{k}</span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === k ? "k" : idx === i ? "i" : "")} />

      <Legend
        items={[
          { role: "sorted", label: "Kept prefix" },
          { role: "current", label: "Written" },
          { role: "visited", label: "Removed" },
        ]}
      />
    </div>
  );
}
