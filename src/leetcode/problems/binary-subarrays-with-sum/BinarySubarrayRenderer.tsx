import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { BinarySubarrayData } from "./algorithm";

export function BinarySubarrayRenderer({ step }: RendererProps<BinarySubarrayData>) {
  const { nums, goal, pos, sum, ans, seen, lookedUp, added, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pos) return "current";
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">goal sum = <b className="tabular-nums text-foreground">{goal}</b></div>

      <ArrayCells values={nums} roleFor={roleFor} topLabel={(i) => (i === pos ? "i" : "")} showIndex={false} />

      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">prefix sum = <b className="tabular-nums">{sum}</b></span>
        {lookedUp !== null && (
          <span className="rounded-md border-2 border-role-active bg-role-active/10 px-3 py-1">need {lookedUp} → +{added}</span>
        )}
        <span className="rounded-md border px-3 py-1">count = <b className="tabular-nums">{answer ?? ans}</b></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">prefix-sum counts</span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {seen.map(([k, v]) => (
            <span key={k} className={`rounded-md border px-2 py-1 font-mono text-xs tabular-nums ${k === lookedUp ? "border-role-active bg-role-active/15" : "bg-muted/30"}`}>{k}:{v}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Current index" }, { role: "active", label: "Looked-up prefix" }, { role: "visited", label: "Processed" }]} />
    </div>
  );
}
