import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { DeleteNodesData } from "./algorithm";

export function DeleteNodesRenderer({ step }: RendererProps<DeleteNodesData>) {
  const { nums, list, examining, action, answer } = step.data;

  let markedOne = false;
  const nodes = list.map((v, i) => {
    let role = "default";
    let label = "";
    if (!markedOne && v === examining) {
      role = action === "remove" ? "compared" : "sorted";
      label = "prev.next";
      markedOne = true;
    }
    return { key: i, value: v, role, label };
  });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">remove set = {"{"}{nums.join(", ")}{"}"}</div>

      <NodeChain nodes={nodes} />

      {answer !== null && (
        <div className="rounded-md border px-3 py-1 text-sm font-semibold">result = {answer.join(" → ") || "empty"}</div>
      )}

      <Legend items={[{ role: "compared", label: "Removing" }, { role: "sorted", label: "Keeping" }]} />
    </div>
  );
}
