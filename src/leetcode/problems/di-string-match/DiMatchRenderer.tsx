import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DiMatchData } from "./algorithm";

export function DiMatchRenderer({ step }: RendererProps<DiMatchData>) {
  const { s, lo, hi, i, res, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex gap-1">
        {s.split("").map((ch, idx) => (
          <span key={idx} className={`flex h-10 w-9 items-center justify-center rounded border font-mono text-lg font-bold ${idx === i ? "bg-role-current text-white border-role-current" : idx < (i ?? 0) ? "bg-role-visited/25 border-role-visited" : "bg-muted/40 border-border"} ${ch === "I" ? "text-role-active" : "text-role-target"}`}>{ch}</span>
        ))}
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-active px-3 py-1">lo = {lo}</span>
        <span className="rounded-md border border-role-target px-3 py-1">hi = {hi}</span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">permutation</span>
        <ArrayCells values={res} roleFor={(idx) => (idx === res.length - 1 && !answer ? "current" : "sorted")} />
      </div>

      <Legend items={[{ role: "active", label: "'I' (take low)" }, { role: "target", label: "'D' (take high)" }, { role: "sorted", label: "Placed" }]} />
    </div>
  );
}
