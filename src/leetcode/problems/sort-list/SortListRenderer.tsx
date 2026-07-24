import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { SortListData } from "./algorithm";

export function SortListRenderer({ step }: RendererProps<SortListData>) {
  const { values, range, writing, wrote, sorted } = step.data;

  const nodes = values.map((v, i) => {
    let role = "default";
    if (sorted) role = "sorted";
    else if (i === wrote) role = "swapped";
    else if (writing.includes(i)) role = "active";
    else if (range && i >= range[0] && i < range[1]) role = "compared";
    return { key: i, value: v, role };
  });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <NodeChain nodes={nodes} />
      <Legend items={[{ role: "compared", label: "Merging run" }, { role: "active", label: "Written" }, { role: "swapped", label: "Just wrote" }, { role: "sorted", label: "Sorted" }]} />
    </div>
  );
}
