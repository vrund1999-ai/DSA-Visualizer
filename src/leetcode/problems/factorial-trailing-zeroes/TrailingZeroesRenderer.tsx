import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TrailingZeroesData } from "./algorithm";

export function TrailingZeroesRenderer({ step }: RendererProps<TrailingZeroesData>) {
  const { n, terms, count, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-lg font-semibold">
        {n}! <span className="text-sm font-normal text-muted-foreground">— trailing zeros</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        {terms.length === 0 ? (
          <span className="text-sm text-muted-foreground">no factors of 5 (answer 0)</span>
        ) : (
          terms.map((t, i) => (
            <div key={t.power} className={`flex items-center gap-2 rounded-md border-2 px-3 py-1.5 font-mono text-sm ${i === terms.length - 1 && answer === null ? "border-role-current bg-role-current/15" : "border-border bg-card"}`}>
              <span>⌊{n}/{t.power}⌋</span>
              <span className="text-muted-foreground">=</span>
              <span className="tabular-nums">{t.contribution}</span>
            </div>
          ))
        )}
      </div>

      <div className="text-sm">
        sum of factors of 5 = <b className="tabular-nums text-role-target">{answer ?? count}</b>
      </div>

      <Legend items={[{ role: "current", label: "Current term" }, { role: "target", label: "Answer" }]} />
    </div>
  );
}
