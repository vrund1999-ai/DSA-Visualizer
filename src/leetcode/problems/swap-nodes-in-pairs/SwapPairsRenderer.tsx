import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { SwapPairsData } from "./algorithm";

export function SwapPairsRenderer({ step }: RendererProps<SwapPairsData>) {
  const { values, pair, swappedUpTo } = step.data;

  const nodes = values.map((v, i) => ({
    key: i,
    value: v,
    role: pair && (i === pair[0] || i === pair[1]) ? "swapped" : i < swappedUpTo ? "sorted" : "default",
  }));

  return (
    <div className="flex h-full flex-col gap-6">
      <NodeChain nodes={nodes} />
      <Legend
        items={[
          { role: "swapped", label: "Swapping pair" },
          { role: "sorted", label: "Done" },
        ]}
      />
    </div>
  );
}
