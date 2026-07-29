import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { TwinSumData } from "./algorithm";

export function TwinSumRenderer({ step }: RendererProps<TwinSumData>) {
  const { vals, l, r, twin, best, answer } = step.data;

  const nodes = vals.map((v, i) => ({
    key: i,
    value: v,
    role: i === l ? "current" : i === r ? "compared" : (l !== null && i < l) || (r !== null && i > r) ? "visited" : "default",
    label: i === l ? "l" : i === r ? "r" : "",
  }));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <NodeChain nodes={nodes} showNull={false} />

      <div className="flex items-center gap-3 text-sm">
        {twin !== null && <span className="rounded-md border px-3 py-1">twin sum = {twin}</span>}
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Left twin" }, { role: "compared", label: "Right twin" }, { role: "visited", label: "Paired" }]} />
    </div>
  );
}
