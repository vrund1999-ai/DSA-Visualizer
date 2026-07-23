import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { MiddleData } from "./algorithm";

export function MiddleRenderer({ step }: RendererProps<MiddleData>) {
  const { values, slow, fast, done } = step.data;

  const nodes = values.map((v, i) => ({
    key: i,
    value: v,
    role: done && i === slow ? "target" : i === slow && i === fast ? "swapped" : i === slow ? "current" : i === fast ? "active" : "default",
    label: i === slow && i === fast ? "S/F" : i === slow ? "S" : i === fast ? "F" : "",
  }));

  return (
    <div className="flex h-full flex-col gap-6">
      <NodeChain nodes={nodes} />
      {done && slow !== null && (
        <p className="text-center text-sm font-semibold text-role-target">Middle node: {values[slow]}</p>
      )}
      <Legend
        items={[
          { role: "current", label: "slow" },
          { role: "active", label: "fast" },
          { role: "target", label: "Middle" },
        ]}
      />
    </div>
  );
}
