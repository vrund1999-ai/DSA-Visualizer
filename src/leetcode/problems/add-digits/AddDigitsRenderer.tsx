import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { AddDigitsData } from "./algorithm";

export function AddDigitsRenderer({ step }: RendererProps<AddDigitsData>) {
  const { chain, current, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-2">
        {chain.map((c, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="flex size-10 items-center justify-center rounded-md border-2 border-border bg-card font-semibold tabular-nums">{c.value}</span>
            <span className="text-muted-foreground">→</span>
            <span className="font-mono text-muted-foreground">{c.digits.join(" + ")}</span>
            <span className="text-muted-foreground">=</span>
            <span className="flex size-10 items-center justify-center rounded-md border-2 border-role-current bg-role-current/15 font-semibold tabular-nums">{c.sum}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase text-muted-foreground">current</span>
        <div className={`flex size-16 items-center justify-center rounded-lg border-2 text-2xl font-bold tabular-nums ${answer !== null ? "border-role-target bg-role-target/15" : "border-role-current bg-role-current/15"}`}>{current}</div>
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-target">digital root = {answer}</div>}

      <Legend items={[{ role: "current", label: "Digit sum" }, { role: "target", label: "Answer" }]} />
    </div>
  );
}
