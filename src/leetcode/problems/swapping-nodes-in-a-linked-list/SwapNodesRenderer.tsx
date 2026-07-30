import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { SwapNodesData } from "./algorithm";

export function SwapNodesRenderer({ step }: RendererProps<SwapNodesData>) {
  const { values, k, fast, slow, first, second, answer } = step.data;

  const nodes = values.map((v, i) => {
    let role = "default";
    if (i === first) role = "sorted";
    if (i === second) role = "pivot";
    if (i === fast || i === slow) role = "current";
    let label = "";
    if (i === fast && i === slow) label = "f/s";
    else if (i === fast) label = "fast";
    else if (i === slow) label = "slow";
    return { key: i, value: v, role, label };
  });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">swap the {k}th node from each end</div>

      <NodeChain nodes={nodes} showNull={false} />

      {answer && <div className="rounded-md border px-3 py-1 text-sm">result = [<b className="tabular-nums">{answer.join(", ")}</b>]</div>}

      <Legend items={[{ role: "sorted", label: "kth from start" }, { role: "pivot", label: "kth from end" }, { role: "current", label: "Pointers" }]} />
    </div>
  );
}
