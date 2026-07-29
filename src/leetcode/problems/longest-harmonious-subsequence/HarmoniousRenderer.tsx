import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { HarmoniousData } from "./algorithm";

export function HarmoniousRenderer({ step }: RendererProps<HarmoniousData>) {
  const { count, v, hasNext, candidate, best, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">value counts</span>
        <div className="flex flex-wrap justify-center gap-2">
          {count.map(([val, c]) => {
            const isV = val === v;
            const isNext = hasNext && val === (v ?? 0) + 1;
            return (
              <div key={val} className={`flex flex-col items-center rounded-md border-2 px-3 py-1.5 ${isV ? "border-role-current bg-role-current/15" : isNext ? "border-role-compared bg-role-compared/15" : "border-border bg-muted/30"}`}>
                <span className="text-lg font-bold tabular-nums">{val}</span>
                <span className="text-xs text-muted-foreground">×{c}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm">
        {candidate !== null && <span className="rounded-md border px-3 py-1">pair length = {candidate}</span>}
        <span className="rounded-md border px-3 py-1">best = <b className="tabular-nums">{answer ?? best}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "value v" }, { role: "compared", label: "value v+1" }]} />
    </div>
  );
}
