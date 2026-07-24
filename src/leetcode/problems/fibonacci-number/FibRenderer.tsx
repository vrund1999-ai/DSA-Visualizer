import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { FibData } from "./algorithm";

export function FibRenderer({ step }: RendererProps<FibData>) {
  const { n, dp } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-6">
      <p className="text-center text-sm text-muted-foreground">dp[i] = the i-th Fibonacci number (target fib({n}))</p>
      <ArrayCells values={dp} roleFor={(idx) => roleFor(idx)} />
      <Legend
        items={[
          { role: "compared", label: "fib(i-1), fib(i-2)" },
          { role: "target", label: "fib(i) filled" },
          { role: "sorted", label: "Base cases" },
        ]}
      />
    </div>
  );
}
