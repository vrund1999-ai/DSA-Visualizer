import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { NumTreesData } from "./algorithm";

export function NumTreesRenderer({ step }: RendererProps<NumTreesData>) {
  const { n, dp, nodes, root, answer } = step.data;
  const leftK = nodes !== null && root !== null ? root - 1 : -1;
  const rightK = nodes !== null && root !== null ? nodes - root : -1;

  const roleFor = (idx: number) => {
    if (idx === nodes) return "current";
    if (idx === leftK || idx === rightK) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">unique BSTs with {n} nodes · dp[k] = Σ dp[root−1]·dp[k−root]</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">dp</span>
        <ArrayCells values={dp} roleFor={roleFor} showIndex />
      </div>

      {nodes !== null && root !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          {nodes} nodes, root {root}: left {leftK} × right {rightK}
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">count = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "current", label: "dp[nodes]" }, { role: "compared", label: "left / right subtree counts" }]} />
    </div>
  );
}
