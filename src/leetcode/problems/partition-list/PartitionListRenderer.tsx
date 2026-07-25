import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { PartitionListData } from "./algorithm";

export function PartitionListRenderer({ step }: RendererProps<PartitionListData>) {
  const { values, x, cur, less, more, done } = step.data;

  const original = values.map((v, i) => ({
    key: i,
    value: v,
    role: i === cur ? "current" : less.includes(i) ? "active" : more.includes(i) ? "compared" : "default",
  }));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">partition around x = <b className="text-foreground">{x}</b></div>

      {!done ? (
        <>
          <NodeChain nodes={original} />
          <div className="flex gap-8">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs uppercase text-muted-foreground">less (&lt; {x})</span>
              <NodeChain nodes={less.map((i) => ({ key: i, value: values[i], role: "active" }))} emptyLabel="∅" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs uppercase text-muted-foreground">more (≥ {x})</span>
              <NodeChain nodes={more.map((i) => ({ key: i, value: values[i], role: "compared" }))} emptyLabel="∅" />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase text-muted-foreground">result (less ++ more)</span>
          <NodeChain nodes={[...less, ...more].map((i) => ({ key: i, value: values[i], role: less.includes(i) ? "active" : "compared" }))} />
        </div>
      )}

      <Legend items={[{ role: "current", label: "Routing" }, { role: "active", label: "< x" }, { role: "compared", label: "≥ x" }]} />
    </div>
  );
}
