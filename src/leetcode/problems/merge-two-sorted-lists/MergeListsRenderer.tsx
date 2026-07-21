import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { MergeListsData } from "./algorithm";

export function MergeListsRenderer({ step }: RendererProps<MergeListsData>) {
  const { l1, l2, i, j, merged } = step.data;

  const chain = (vals: number[], ptr: number) =>
    vals.map((v, k) => ({
      key: k,
      value: v,
      role: k < ptr ? "visited" : k === ptr ? "current" : "default",
      label: k === ptr ? "↑" : "",
    }));

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">List 1</span>
        <NodeChain nodes={chain(l1, i)} emptyLabel="∅ (exhausted)" />
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">List 2</span>
        <NodeChain nodes={chain(l2, j)} emptyLabel="∅ (exhausted)" />
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Merged</span>
        <NodeChain nodes={merged.map((v, k) => ({ key: k, value: v, role: "target" }))} emptyLabel="∅ (nothing yet)" />
      </div>

      <Legend
        items={[
          { role: "current", label: "Head being compared" },
          { role: "visited", label: "Already taken" },
          { role: "target", label: "Merged list" },
        ]}
      />
    </div>
  );
}
