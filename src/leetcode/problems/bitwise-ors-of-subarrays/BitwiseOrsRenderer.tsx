import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BitwiseOrsData } from "./algorithm";

export function BitwiseOrsRenderer({ step }: RendererProps<BitwiseOrsData>) {
  const { arr, idx, cur, result, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (idx !== null && i < idx) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={arr} roleFor={roleFor} showIndex cellWidth="w-11" />

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">ORs of subarrays ending here</span>
        <div className="flex min-h-9 flex-wrap justify-center gap-1.5">
          {cur.length === 0 ? <span className="text-sm text-muted-foreground">—</span> : cur.map((v) => (
            <span key={v} className="rounded-md border-2 border-role-current bg-role-current/15 px-2.5 py-1 text-sm font-medium tabular-nums">{v}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">all distinct ORs ({answer ?? result.length})</span>
        <div className="flex max-w-xl flex-wrap justify-center gap-1">
          {result.map((v) => <span key={v} className="rounded border px-1.5 py-0.5 text-xs tabular-nums text-muted-foreground">{v}</span>)}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Current end / frontier" }, { role: "visited", label: "Processed" }]} />
    </div>
  );
}
