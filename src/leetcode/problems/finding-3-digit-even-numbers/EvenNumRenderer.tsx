import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { EvenNumData } from "./algorithm";

export function EvenNumRenderer({ step }: RendererProps<EvenNumData>) {
  const { have, candidate, fits, res, answer } = step.data;
  const shown = answer ?? res;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">available digit counts</span>
        <div className="flex gap-1.5">
          {have.map((c, d) => (
            <div key={d} className="flex flex-col items-center gap-1">
              <div className={`flex size-9 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${c > 0 ? "border-role-active bg-role-active/20" : "border-border bg-muted/20 text-muted-foreground/40"}`}>
                {d}
              </div>
              <span className="text-[10px] tabular-nums text-muted-foreground">×{c}</span>
            </div>
          ))}
        </div>
      </div>

      {candidate !== null && (
        <div className={`rounded-md px-4 py-1.5 text-lg font-bold tabular-nums ${fits ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {candidate} {fits ? "✓" : "✗"}
        </div>
      )}

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">found ({shown.length})</span>
        <div className="flex max-w-xl flex-wrap justify-center gap-1.5">
          {shown.length === 0 ? (
            <span className="text-sm text-muted-foreground">none yet</span>
          ) : (
            shown.map((n) => (
              <span key={n} className="rounded-md border px-2 py-0.5 text-sm tabular-nums">{n}</span>
            ))
          )}
        </div>
      </div>

      <Legend items={[{ role: "sorted", label: "Kept" }, { role: "compared", label: "Rejected" }, { role: "active", label: "Available digit" }]} />
    </div>
  );
}
