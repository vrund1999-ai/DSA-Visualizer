import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { FlattenData } from "./algorithm";

export function FlattenRenderer({ step }: RendererProps<FlattenData>) {
  const { chain, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">current chain (following next pointers)</span>

      <NodeChain nodes={chain.map((c) => ({ key: c.id, value: c.val, role: c.role, label: c.label }))} />

      {answer && (
        <div className="rounded-md border px-3 py-1 text-sm font-semibold">
          flattened = {answer.join(" → ")}
        </div>
      )}

      <Legend items={[{ role: "current", label: "cur" }, { role: "compared", label: "Just spliced in" }, { role: "sorted", label: "Was a child node" }]} />
    </div>
  );
}
