import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { HitCounterData } from "./algorithm";

export function HitCounterRenderer({ step }: RendererProps<HitCounterData>) {
  const { queue, op, lowerBound, evicted, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">{op}</div>

      {lowerBound !== null && <div className="text-xs text-muted-foreground">valid window: timestamp &gt; {lowerBound}</div>}
      {evicted !== null && <div className="text-xs text-role-target">evicting {evicted}</div>}

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">timestamp queue</span>
        <div className="flex min-h-[3rem] flex-wrap items-center justify-center gap-1.5">
          {queue.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : queue.map((t, i) => (
            <span key={`${t}-${i}`} className={`flex items-center justify-center rounded-md border-2 px-3 py-1.5 text-sm font-medium tabular-nums ${i === 0 && evicted !== null ? "border-role-target bg-role-target/15" : "border-role-active bg-role-active/10"}`}>{t}</span>
          ))}
        </div>
      </div>

      {result !== null && <div className="text-base font-semibold text-role-visited">count = {result}</div>}

      <Legend items={[{ role: "active", label: "In window" }, { role: "target", label: "Evicted" }]} />
    </div>
  );
}
