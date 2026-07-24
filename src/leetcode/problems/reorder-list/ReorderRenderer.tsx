import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { ReorderData } from "./algorithm";

export function ReorderRenderer({ step }: RendererProps<ReorderData>) {
  const { values, phase, front, back, result } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      {phase === "split" ? (
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Original</span>
          <NodeChain nodes={values.map((v, i) => ({ key: i, value: v, role: "default" }))} />
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Front half</span>
            <NodeChain nodes={front.map((v, i) => ({ key: i, value: v, role: "active" }))} emptyLabel="∅" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Back half (reversed)</span>
            <NodeChain nodes={back.map((v, i) => ({ key: i, value: v, role: "compared" }))} emptyLabel="∅" />
          </div>
        </>
      )}

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Reordered</span>
        <NodeChain nodes={result.map((v, i) => ({ key: i, value: v, role: phase === "done" ? "sorted" : "target" }))} emptyLabel="∅" />
      </div>

      <Legend
        items={[
          { role: "active", label: "Front" },
          { role: "compared", label: "Reversed back" },
          { role: "sorted", label: "Result" },
        ]}
      />
    </div>
  );
}
