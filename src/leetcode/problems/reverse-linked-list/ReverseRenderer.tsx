import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { ReverseData } from "./algorithm";

export function ReverseRenderer({ step }: RendererProps<ReverseData>) {
  const { values, cur, prev, reversedCount } = step.data;

  const original = values.map((v, i) => ({
    key: i,
    value: v,
    role: i < reversedCount ? "visited" : i === cur ? "current" : "default",
    label: i === cur ? "cur" : i === prev ? "prev" : "",
  }));

  const reversed = values
    .slice(0, reversedCount)
    .reverse()
    .map((v, i) => ({ key: i, value: v, role: "target" }));

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          List
        </span>
        <NodeChain nodes={original} />
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Reversed so far (from prev)
        </span>
        <NodeChain nodes={reversed} emptyLabel="∅ (nothing reversed yet)" />
      </div>

      <Legend
        items={[
          { role: "current", label: "cur" },
          { role: "visited", label: "Reversed" },
          { role: "target", label: "New list" },
        ]}
      />
    </div>
  );
}
