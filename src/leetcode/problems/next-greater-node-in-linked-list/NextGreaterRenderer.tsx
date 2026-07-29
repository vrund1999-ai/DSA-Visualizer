import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { NextGreaterData } from "./algorithm";

export function NextGreaterRenderer({ step }: RendererProps<NextGreaterData>) {
  const { vals, idx, stack, ans, resolved, answer } = step.data;

  const nodes = vals.map((v, i) => ({
    key: i,
    value: v,
    role: i === idx ? "current" : resolved.includes(i) ? "sorted" : stack.includes(i) ? "active" : "default",
    label: i === idx ? "cur" : "",
  }));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <NodeChain nodes={nodes} showNull={false} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">stack (indices, values decreasing)</span>
        <div className="flex min-h-9 flex-row-reverse items-center gap-1.5 rounded-md border border-dashed px-3 py-1">
          {stack.length === 0 ? <span className="text-sm text-muted-foreground">empty</span> : stack.map((i, k) => (
            <div key={i} className={`flex size-8 items-center justify-center rounded-md border-2 text-sm tabular-nums ${k === stack.length - 1 ? "border-role-active bg-role-active/20" : "border-border bg-muted/30"}`}>{vals[i]}</div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">answer</span>
        <ArrayCells values={answer ?? ans} roleFor={(i) => (resolved.includes(i) ? "sorted" : "default")} showIndex={false} cellWidth="w-10" />
      </div>

      <Legend items={[{ role: "current", label: "Current node" }, { role: "active", label: "On stack (waiting)" }, { role: "sorted", label: "Just resolved" }]} />
    </div>
  );
}
