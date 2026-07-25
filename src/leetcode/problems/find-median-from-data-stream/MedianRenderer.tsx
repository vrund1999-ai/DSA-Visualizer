import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MedianData } from "./algorithm";

export function MedianRenderer({ step }: RendererProps<MedianData>) {
  const { lo, hi, added, median } = step.data;

  const cell = (v: number, isTop: boolean) => (
    <span className={`flex size-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${isTop ? "border-role-current bg-role-current/20" : "border-border bg-card"}`}>{v}</span>
  );

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      {added !== null && <div className="text-sm text-muted-foreground">added <b className="tabular-nums text-foreground">{added}</b></div>}

      <div className="flex items-end gap-8">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">low half (max-heap)</span>
          <div className="flex items-center gap-1">
            {lo.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : lo.map((v, i) => <span key={i}>{cell(v, i === lo.length - 1)}</span>)}
          </div>
          <span className="text-[10px] text-muted-foreground">top = max ↑</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">high half (min-heap)</span>
          <div className="flex items-center gap-1">
            {hi.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : hi.map((v, i) => <span key={i}>{cell(v, i === 0)}</span>)}
          </div>
          <span className="text-[10px] text-muted-foreground">↑ top = min</span>
        </div>
      </div>

      {median !== null && <div className="text-base font-semibold text-role-current">median = {median}</div>}

      <Legend items={[{ role: "current", label: "Heap top" }]} />
    </div>
  );
}
