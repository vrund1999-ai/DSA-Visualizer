import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { FinalPricesData } from "./algorithm";

export function FinalPricesRenderer({ step }: RendererProps<FinalPricesData>) {
  const { prices, res, scan, stack, resolved, done } = step.data;
  const stackSet = new Set(stack);
  const resolvedSet = new Set(resolved);

  const roleFor = (i: number) => {
    if (resolvedSet.has(i)) return "sorted";
    if (i === scan) return "current";
    if (stackSet.has(i)) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">prices</span>
        <ArrayCells values={prices} roleFor={roleFor} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">final prices</span>
        <ArrayCells values={res} roleFor={(i) => (done ? "sorted" : resolvedSet.has(i) ? "sorted" : "default")} showIndex={false} />
      </div>

      <Legend
        items={[
          { role: "current", label: "current item" },
          { role: "active", label: "on stack (unresolved)" },
          { role: "sorted", label: "discounted" },
        ]}
      />
    </div>
  );
}
