import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { CompressData } from "./algorithm";

export function CompressRenderer({ step }: RendererProps<CompressData>) {
  const { chars, write, read, length } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Compressed length</span>
        <span className="rounded-md border border-role-target bg-role-target/10 px-2.5 py-1 font-semibold tabular-nums text-role-target">{length}</span>
      </div>

      <ArrayCells values={chars} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === write ? "w" : idx === read ? "r" : "")} showIndex={false} />

      <Legend
        items={[
          { role: "compared", label: "Run start" },
          { role: "sorted", label: "Char written" },
          { role: "swapped", label: "Count digit" },
          { role: "target", label: "Final prefix" },
        ]}
      />
    </div>
  );
}
