import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { KokoData } from "./algorithm";

export function KokoRenderer({ step }: RendererProps<KokoData>) {
  const { piles, h, lo, hi, mid, hours, answer } = step.data;
  const max = Math.max(...piles, 1);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Speed range</span>
        <span className="rounded-md border px-2 py-0.5 font-mono tabular-nums">[{lo}, {hi}]</span>
        {mid !== null && (
          <>
            <span className="text-muted-foreground">try</span>
            <span className="rounded-md border border-role-current bg-role-current/10 px-2 py-0.5 font-semibold tabular-nums">{mid}/h</span>
            <span className="text-muted-foreground">→</span>
            <span className={`rounded-md border px-2 py-0.5 font-semibold tabular-nums ${hours !== null && hours <= h ? "border-role-sorted bg-role-sorted/10 text-role-sorted" : "border-role-swapped bg-role-swapped/10 text-role-swapped"}`}>
              {hours} h {hours !== null && hours <= h ? "≤" : ">"} {h}
            </span>
          </>
        )}
        {answer !== null && <span className="font-semibold text-role-target">min speed = {answer}</span>}
      </div>

      <div className="flex h-44 items-end justify-center gap-2">
        {piles.map((p, i) => (
          <div key={i} className="flex h-full flex-col items-center justify-end gap-1">
            <div className="w-9 rounded-t bg-role-pivot/40" style={{ height: `${(p / max) * 100}%` }} />
            <span className="text-[11px] tabular-nums text-muted-foreground">{p}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground">Banana piles — at speed s, a pile of p takes ⌈p/s⌉ hours.</p>

      <Legend items={[{ role: "current", label: "Candidate speed" }, { role: "target", label: "Answer" }]} />
    </div>
  );
}
