import type { RendererProps } from "@/core/types";
import type { PerfectData } from "./algorithm";

export function PerfectRenderer({ step }: RendererProps<PerfectData>) {
  const { num, d, pair, divisors, sum, answer } = step.data;
  const sorted = [...divisors].sort((a, b) => a - b);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-md border px-3 py-1">num = <b className="tabular-nums">{num}</b></span>
        {d !== null && <span className="rounded-md border px-3 py-1">testing d = <b className="tabular-nums">{d}</b></span>}
        <span className="rounded-md border px-3 py-1">sum = <b className="tabular-nums">{sum}</b></span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">proper divisors</span>
        <div className="flex max-w-md flex-wrap justify-center gap-2">
          {sorted.map((v) => (
            <div
              key={v}
              className={`flex size-10 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors ${
                v === d || v === pair ? "border-role-current bg-role-current text-white" : "border-border bg-muted/30"
              }`}
            >
              {v}
            </div>
          ))}
        </div>
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Perfect number ✓" : "Not perfect ✗"}
        </div>
      )}
    </div>
  );
}
