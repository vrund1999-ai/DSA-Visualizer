import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { DeleteMiddleData } from "./algorithm";

export function DeleteMiddleRenderer({ step }: RendererProps<DeleteMiddleData>) {
  const { list, slow, fast, removed, answer } = step.data;

  const nodes = list.map((v, i) => {
    let role = "default";
    let label = "";
    if (i === removed) role = "compared";
    else if (i === slow && i === fast) { role = "current"; label = "slow/fast"; }
    else if (i === slow) { role = "current"; label = "slow"; }
    else if (i === fast) { role = "active"; label = "fast"; }
    return { key: i, value: v, role, label };
  });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <NodeChain nodes={nodes} showNull={false} />

      {answer !== null && (
        <div className="rounded-md border px-3 py-1 text-sm font-semibold">result = {answer.length ? answer.join(" → ") : "empty"}</div>
      )}

      <Legend items={[{ role: "current", label: "slow (middle)" }, { role: "active", label: "fast" }, { role: "compared", label: "Removed" }]} />
    </div>
  );
}
