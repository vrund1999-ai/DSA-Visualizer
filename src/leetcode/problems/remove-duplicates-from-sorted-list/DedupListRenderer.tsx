import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { DedupListData } from "./algorithm";

export function DedupListRenderer({ step }: RendererProps<DedupListData>) {
  const { values, cur, removed, done } = step.data;

  const nodes = values.map((v, i) => ({
    key: `${i}-${v}`,
    value: v,
    role: done ? "sorted" : i === removed ? "swapped" : i === cur ? "current" : "default",
    label: i === cur ? "cur" : "",
  }));

  return (
    <div className="flex h-full flex-col gap-6">
      <NodeChain nodes={nodes} />
      <Legend
        items={[
          { role: "current", label: "Cursor" },
          { role: "swapped", label: "Duplicate removed" },
          { role: "sorted", label: "Result" },
        ]}
      />
    </div>
  );
}
