import type { RendererProps } from "@/core/types";
import { NodeChain } from "@/leetcode/shared/nodes";
import { Legend } from "@/leetcode/shared/viz";
import type { ZeroSumData } from "./algorithm";

export function ZeroSumRenderer({ step }: RendererProps<ZeroSumData>) {
  const { values, prefix, removed, segment, answer } = step.data;

  const nodes = values.map((v, i) => {
    let role = "default";
    if (removed[i]) role = "swapped";
    if (segment && i >= segment[0] && i <= segment[1]) role = "current";
    return { key: i, value: v, role };
  });

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <NodeChain nodes={nodes} showNull={false} />

      <div className="flex items-center gap-1">
        <span className="mr-1 text-xs text-muted-foreground">prefix:</span>
        {prefix.map((p, i) => (
          <span key={i} className="flex h-6 w-8 items-center justify-center rounded bg-muted/50 text-[10px] tabular-nums text-muted-foreground">{p}</span>
        ))}
      </div>

      {answer && <div className="rounded-md border px-3 py-1 text-sm">result = [<b className="tabular-nums">{answer.join(", ")}</b>]</div>}

      <Legend items={[{ role: "current", label: "Zero-sum run" }, { role: "swapped", label: "Removed" }]} />
    </div>
  );
}
