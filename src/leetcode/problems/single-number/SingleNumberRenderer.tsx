import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { SingleNumberData } from "./algorithm";

export function SingleNumberRenderer({ step }: RendererProps<SingleNumberData>) {
  const { nums, i, acc } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Running XOR</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-semibold tabular-nums text-primary">
          {acc}
        </span>
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <Legend
        items={[
          { role: "current", label: "XOR-ing now" },
          { role: "visited", label: "Folded in" },
        ]}
      />
    </div>
  );
}
