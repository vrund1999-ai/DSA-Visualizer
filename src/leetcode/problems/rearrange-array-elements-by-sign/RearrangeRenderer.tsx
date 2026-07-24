import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RearrangeData } from "./algorithm";

export function RearrangeRenderer({ step }: RendererProps<RearrangeData>) {
  const { nums, res, reading, wrote, done } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">input</span>
        <ArrayCells values={nums} roleFor={(i) => (i === reading ? "current" : done ? "visited" : "default")} showIndex={false} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">result (even = +, odd = −)</span>
        <ArrayCells values={res.map((v) => (v === null ? "·" : v))} roleFor={(i) => (i === wrote ? "swapped" : res[i] !== null ? "active" : "default")} />
      </div>

      <Legend items={[{ role: "current", label: "Reading" }, { role: "swapped", label: "Just placed" }, { role: "active", label: "Filled" }]} />
    </div>
  );
}
