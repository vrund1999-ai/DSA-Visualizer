import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import type { LinkedListData } from "./algorithm";

export function LinkedListRenderer({ step }: RendererProps<LinkedListData>) {
  const { ops, opIndex, list, highlight, returned } = step.data;

  const nodes = list.map((v, i) => ({
    key: i,
    value: v,
    role: i === highlight ? "current" : "default",
    label: i === highlight ? "•" : "",
  }));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1.5">
        {ops.map((op, i) => (
          <span
            key={i}
            className={`rounded-md border px-2 py-1 text-xs font-medium tabular-nums ${
              i === opIndex ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
            }`}
          >
            {op}
          </span>
        ))}
      </div>

      <NodeChain nodes={nodes} />

      {returned !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          returned = <b className="tabular-nums">{returned}</b>
        </div>
      )}
    </div>
  );
}
