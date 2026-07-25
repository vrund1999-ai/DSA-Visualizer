import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { GoodNumbersData } from "./algorithm";

export function GoodNumbersRenderer({ step }: RendererProps<GoodNumbersData>) {
  const { n, evens, odds, base, trace, result, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">
        n = {n} → 5<sup>{evens}</sup> × 4<sup>{odds}</sup> mod 1e9+7
      </div>

      {base !== null && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">fast power of {base} (exponent bits, LSB first)</span>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {trace.map((row, i) => (
              <span key={i} className={`flex flex-col items-center rounded-md border px-2 py-1 font-mono text-[11px] tabular-nums ${row.bit ? "border-role-current bg-role-current/15" : "bg-muted/30"}`}>
                <span className="text-muted-foreground">bit {row.bit}</span>
                <span>{row.result}</span>
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">= {result}</span>
        </div>
      )}

      {answer !== null && <div className="rounded-md border-2 border-role-visited bg-role-visited/10 px-4 py-2 font-mono text-lg font-semibold tabular-nums">{answer}</div>}

      <Legend items={[{ role: "current", label: "Set bit (multiply in)" }, { role: "visited", label: "Answer" }]} />
    </div>
  );
}
