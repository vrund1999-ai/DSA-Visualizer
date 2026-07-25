import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DivByKData } from "./algorithm";

export function DivByKRenderer({ step }: RendererProps<DivByKData>) {
  const { nums, k, pos, sum, count, residue, added, ans, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pos) return "current";
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">k = <b className="tabular-nums text-foreground">{k}</b></div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === pos ? "i" : "")} showIndex={false} />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">prefix = <b className="tabular-nums">{sum}</b></span>
        {residue !== null && <span className="rounded-md border-2 border-role-active bg-role-active/10 px-3 py-1">rem {residue} → +{added}</span>}
        <span className="rounded-md border px-3 py-1">count = <b className="tabular-nums">{answer ?? ans}</b></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">remainder buckets</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {count.map((c, r) => (
            <span key={r} className={`flex flex-col items-center rounded-md border px-2 py-1 font-mono text-xs tabular-nums ${r === residue ? "border-role-active bg-role-active/15" : "bg-muted/30"}`}>
              <span className="text-muted-foreground">r{r}</span>
              <span>{c}</span>
            </span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Current index" }, { role: "active", label: "Current remainder" }, { role: "visited", label: "Processed" }]} />
    </div>
  );
}
