import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ContSubData } from "./algorithm";

export function ContSubRenderer({ step }: RendererProps<ContSubData>) {
  const { nums, k, pos, sum, remainder, found, first, answer } = step.data;

  const roleFor = (i: number) => {
    if (found && i >= found[0] && i <= found[1]) return "sorted";
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
        {remainder !== null && <span className="rounded-md border-2 border-role-active bg-role-active/10 px-3 py-1">rem = {remainder}</span>}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">first index per remainder</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {first.map(([r, idx]) => (
            <span key={r} className={`rounded-md border px-2 py-1 font-mono text-xs tabular-nums ${r === remainder ? "border-role-active bg-role-active/15" : "bg-muted/30"}`}>{r}@{idx}</span>
          ))}
        </div>
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-sorted" : "text-muted-foreground"}`}>
          {answer ? "good subarray found ✓" : "none found ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current index" }, { role: "active", label: "Current remainder" }, { role: "sorted", label: "Found subarray" }]} />
    </div>
  );
}
