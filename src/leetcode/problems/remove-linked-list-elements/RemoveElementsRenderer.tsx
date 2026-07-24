import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { RemoveElementsData } from "./algorithm";

export function RemoveElementsRenderer({ step }: RendererProps<RemoveElementsData>) {
  const { values, val, inspecting, removed, done } = step.data;

  const nodes = values.map((v, i) => ({
    key: i,
    value: v,
    role: i === removed ? "target" : i === inspecting ? "current" : done ? "visited" : v === val ? "compared" : "default",
    label: i === inspecting && removed === null ? "prev.next" : "",
  }));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">removing all nodes equal to <b className="text-foreground">{val}</b></div>
      <NodeChain nodes={nodes} />
      <Legend items={[{ role: "current", label: "Inspecting" }, { role: "target", label: "Unlinking" }, { role: "visited", label: "Kept" }]} />
    </div>
  );
}
