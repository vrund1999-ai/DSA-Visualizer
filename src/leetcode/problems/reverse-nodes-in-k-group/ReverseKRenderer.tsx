import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { ReverseKData } from "./algorithm";

export function ReverseKRenderer({ step }: RendererProps<ReverseKData>) {
  const { k, order, group, done } = step.data;

  const nodes = order.map((v, i) => ({
    key: i,
    value: v,
    role: group.includes(i) ? "current" : done.includes(i) ? "visited" : "default",
  }));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">group size k = {k}</div>
      <NodeChain nodes={nodes} />
      <Legend items={[{ role: "current", label: "Group being reversed" }, { role: "visited", label: "Finalized" }]} />
    </div>
  );
}
