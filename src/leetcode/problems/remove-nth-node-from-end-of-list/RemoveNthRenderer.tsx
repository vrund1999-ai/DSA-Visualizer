import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { RemoveNthData } from "./algorithm";

export function RemoveNthRenderer({ step }: RendererProps<RemoveNthData>) {
  const { values, n, slow, fast, removed, phase } = step.data;

  const nodes = values.map((v, i) => ({
    key: i,
    value: v,
    role: i === removed ? "swapped" : phase === "done" ? "sorted" : i === slow ? "current" : i === fast ? "active" : "default",
    label: i === slow ? "S" : i === fast ? "F" : "",
  }));

  return (
    <div className="flex h-full flex-col gap-5">
      <p className="text-center text-sm text-muted-foreground">
        {phase === "done" ? `Removed the ${n}th node from the end` : `Remove the ${n}th node from the end (gap = ${n})`}
      </p>

      <NodeChain nodes={nodes} />

      <Legend
        items={[
          { role: "current", label: "slow" },
          { role: "active", label: "fast" },
          { role: "swapped", label: "Node removed" },
          { role: "sorted", label: "Result" },
        ]}
      />
    </div>
  );
}
