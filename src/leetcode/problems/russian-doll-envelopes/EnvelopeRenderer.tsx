import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { EnvelopeData } from "./algorithm";

export function EnvelopeRenderer({ step }: RendererProps<EnvelopeData>) {
  const { sorted, i, tails, placed, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">sorted envelopes [w, h]</span>
        <div className="flex flex-wrap justify-center gap-1">
          {sorted.map((e, idx) => (
            <span key={idx} className={`rounded border px-2 py-1 font-mono text-xs ${idx === i ? "bg-role-current text-white border-role-current" : idx < (i ?? 0) ? "bg-role-visited/25 border-role-visited" : "bg-muted/40 border-border text-muted-foreground"}`}>
              {e[0]},{e[1]}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">LIS tails (heights)</span>
        <div className="flex gap-1">
          {tails.length ? (
            tails.map((v, k) => (
              <span key={k} className={`flex h-9 w-9 items-center justify-center rounded border text-sm font-semibold tabular-nums ${k === placed ? "bg-role-sorted text-white border-role-sorted" : "bg-role-active/20 border-role-active"}`}>{v}</span>
            ))
          ) : (
            <span className="text-sm text-muted-foreground">empty</span>
          )}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">max nested = <b className="tabular-nums">{answer ?? tails.length}</b></div>

      <Legend items={[{ role: "current", label: "Current envelope" }, { role: "sorted", label: "Just placed" }, { role: "active", label: "Chain tail" }]} />
    </div>
  );
}
