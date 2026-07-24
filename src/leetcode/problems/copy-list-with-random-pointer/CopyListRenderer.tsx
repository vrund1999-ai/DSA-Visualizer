import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { CopyListData } from "./algorithm";

export function CopyListRenderer({ step }: RendererProps<CopyListData>) {
  const { original, cloned, wired, cur, phase } = step.data;

  const originalNodes = original.map((n, i) => ({
    key: i,
    value: n.val,
    role: i === cur ? "current" : "default",
    label: n.random !== null ? `r→${original[n.random].val}` : "",
  }));

  const copyNodes = cloned.map((i) => ({
    key: i,
    value: original[i].val,
    role: wired.includes(i) ? "visited" : i === cur && phase === "clone" ? "current" : "active",
    label: original[i].random !== null && wired.includes(i) ? `r→${original[original[i].random!].val}` : "",
  }));

  return (
    <div className="flex h-full flex-col justify-center gap-8">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">original (r→ = random target)</span>
        <NodeChain nodes={originalNodes} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          copy · {phase === "clone" ? "cloning values" : phase === "wire" ? "wiring pointers" : "done"}
        </span>
        <NodeChain nodes={copyNodes} emptyLabel="—" />
      </div>

      <Legend items={[{ role: "current", label: "Current" }, { role: "active", label: "Cloned (unwired)" }, { role: "visited", label: "Wired" }]} />
    </div>
  );
}
