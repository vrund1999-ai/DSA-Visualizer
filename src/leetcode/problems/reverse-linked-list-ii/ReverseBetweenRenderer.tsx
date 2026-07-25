import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { ReverseBetweenData } from "./algorithm";

export function ReverseBetweenRenderer({ step }: RendererProps<ReverseBetweenData>) {
  const { order, values, left, right, moved, done } = step.data;

  const nodes = order.map((id, i) => {
    const pos = i + 1;
    const inWindow = pos >= left && pos <= right;
    return {
      key: id,
      value: values[id],
      role: id === moved ? "swapped" : done && inWindow ? "sorted" : inWindow ? "active" : "default",
    };
  });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">reversing positions <b className="text-foreground">{left}</b>..<b className="text-foreground">{right}</b></div>
      <NodeChain nodes={nodes} />
      <Legend items={[{ role: "active", label: "Reversal window" }, { role: "swapped", label: "Just moved" }, { role: "sorted", label: "Reversed" }]} />
    </div>
  );
}
