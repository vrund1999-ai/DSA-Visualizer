import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { DeleteNodeData } from "./algorithm";

export function DeleteNodeRenderer({ step }: RendererProps<DeleteNodeData>) {
  const { values, target, successor, phase } = step.data;

  const nodes = values.map((v, i) => ({
    key: i,
    value: v,
    role: i === target ? "current" : i === successor ? "compared" : "default",
    label: i === target ? "node" : i === successor ? "copy" : "",
  }));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">
        {phase === "copy" ? "copying successor value into the target" : phase === "unlink" ? "unlinking the successor" : phase === "done" ? "deletion complete" : "target node handed to deleteNode"}
      </div>
      <NodeChain nodes={nodes} />
      <Legend items={[{ role: "current", label: "Target node" }, { role: "compared", label: "Successor (copied)" }]} />
    </div>
  );
}
