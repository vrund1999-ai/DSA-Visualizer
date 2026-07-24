import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { RotateListData } from "./algorithm";

export function RotateListRenderer({ step }: RendererProps<RotateListData>) {
  const { values, k, effectiveK, breakAfter, result, phase } = step.data;
  const n = values.length;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">k = {k}</span>
        <span className="text-muted-foreground">effective = <span className="font-mono text-foreground">{effectiveK}</span></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Original</span>
        <NodeChain
          nodes={values.map((v, i) => ({
            key: i,
            value: v,
            role: phase !== "measure" && breakAfter !== null && i > breakAfter ? "swapped" : "default",
            label: i === breakAfter ? "cut" : "",
          }))}
        />
      </div>

      {phase === "done" && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Rotated</span>
          <NodeChain nodes={result.map((v, i) => ({ key: i, value: v, role: i < effectiveK ? "target" : "sorted" }))} />
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground">The last {effectiveK} of {n} nodes move to the front.</p>

      <Legend
        items={[
          { role: "swapped", label: "Nodes moving to front" },
          { role: "target", label: "New front" },
          { role: "sorted", label: "Rest" },
        ]}
      />
    </div>
  );
}
