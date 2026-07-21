import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { AddData } from "./algorithm";

export function AddRenderer({ step }: RendererProps<AddData>) {
  const { l1, l2, i, carry, result, done } = step.data;

  const chain = (vals: number[]) =>
    vals.map((v, k) => ({
      key: k,
      value: v,
      role: k < i ? "visited" : k === i && !done ? "current" : "default",
      label: k === i && !done ? "↑" : "",
    }));

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Carry</span>
        <span className="flex size-8 items-center justify-center rounded-md border border-role-pivot bg-role-pivot/15 font-semibold tabular-nums">
          {carry}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Number 1</span>
        <NodeChain nodes={chain(l1)} />
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Number 2</span>
        <NodeChain nodes={chain(l2)} />
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Sum</span>
        <NodeChain nodes={result.map((v, k) => ({ key: k, value: v, role: "target" }))} emptyLabel="∅" />
      </div>

      <Legend
        items={[
          { role: "current", label: "Current digit" },
          { role: "visited", label: "Added" },
          { role: "target", label: "Sum" },
        ]}
      />
    </div>
  );
}
