import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { AddTwoII } from "./algorithm";

export function AddTwoIIRenderer({ step }: RendererProps<AddTwoII>) {
  const { l1, l2, s1, s2, a, b, carry, result } = step.data;

  const chain = (vals: number[], consumedFrom: number[], picked: number | null) =>
    vals.map((v, i) => {
      // a value is "consumed" once the remaining stack is shorter than its position
      const consumed = i >= consumedFrom.length;
      const isPicked = picked !== null && i === consumedFrom.length && !consumed;
      return { key: i, value: v, role: isPicked ? "current" : consumed ? "sorted" : "default" };
    });

  return (
    <div className="flex h-full flex-col justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">L1</span>
        <NodeChain nodes={chain(l1, s1, a)} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">L2</span>
        <NodeChain nodes={chain(l2, s2, b)} />
      </div>

      <div className="flex items-center justify-center text-sm text-muted-foreground">carry = {carry}</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Result (high → low)</span>
        <NodeChain nodes={result.map((v, i) => ({ key: i, value: v, role: "active" }))} emptyLabel="—" />
      </div>

      <Legend items={[{ role: "current", label: "Adding" }, { role: "sorted", label: "Consumed" }, { role: "active", label: "Result" }]} />
    </div>
  );
}
