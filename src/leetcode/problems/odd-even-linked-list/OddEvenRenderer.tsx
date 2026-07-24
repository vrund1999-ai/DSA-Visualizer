import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { OddEvenData } from "./algorithm";

export function OddEvenRenderer({ step }: RendererProps<OddEvenData>) {
  const { nodes, active, phase } = step.data;

  const chain = nodes.map((n, i) => ({
    key: i,
    value: n.value,
    role: i === active ? "current" : phase === "done" ? "sorted" : n.parity === "odd" ? "active" : "compared",
  }));

  return (
    <div className="flex h-full flex-col gap-6">
      <NodeChain nodes={chain} />
      <p className="text-center text-xs text-muted-foreground">
        {phase === "done" ? "Odd-position nodes precede even-position nodes." : "Positions are 1-indexed: 1st, 3rd, … are 'odd'."}
      </p>
      <Legend
        items={[
          { role: "active", label: "Odd position" },
          { role: "compared", label: "Even position" },
          { role: "current", label: "Placing" },
          { role: "sorted", label: "Result" },
        ]}
      />
    </div>
  );
}
