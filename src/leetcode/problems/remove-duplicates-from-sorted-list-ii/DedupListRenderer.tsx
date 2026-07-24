import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { DedupListData } from "./algorithm";

export function DedupListRenderer({ step }: RendererProps<DedupListData>) {
  const { nodes, inspecting, done } = step.data;

  const chainNodes = nodes.map((n) => {
    const isRun = inspecting.includes(n.id);
    const role = isRun ? (inspecting.length > 1 ? "target" : "visited") : done ? "visited" : "default";
    return { key: n.id, value: n.v, role };
  });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">removing every value that appears more than once</div>
      <NodeChain nodes={chainNodes} emptyLabel="∅ (all removed)" />
      <Legend items={[{ role: "target", label: "Duplicate run (removed)" }, { role: "visited", label: "Kept" }]} />
    </div>
  );
}
