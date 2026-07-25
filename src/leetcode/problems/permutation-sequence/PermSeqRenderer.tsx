import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PermSeqData } from "./algorithm";

export function PermSeqRenderer({ step }: RendererProps<PermSeqData>) {
  const { n, k, available, remaining, blockSize, pickedIndex, res, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">{k}th permutation of 1..{n}</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">available digits</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {available.length === 0 ? <span className="text-xs text-muted-foreground">none</span> : available.map((d, i) => (
            <span key={d} className={`flex size-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${i === pickedIndex ? "border-role-current bg-role-current/20" : "border-border bg-card"}`}>{d}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">k = <b className="tabular-nums">{remaining}</b></span>
        {blockSize !== null && <span className="rounded-md border px-3 py-1">block = <b className="tabular-nums">{blockSize}</b></span>}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">result</span>
        <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-lg tabular-nums">{answer ?? (res || "…")}</div>
      </div>

      <Legend items={[{ role: "current", label: "Picked digit" }]} />
    </div>
  );
}
