import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ShortestPalinData } from "./algorithm";

export function ShortestPalinRenderer({ step }: RendererProps<ShortestPalinData>) {
  const { s, combined, lps, cur, k, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">s + '#' + reverse(s)</div>

      <div className="flex max-w-3xl flex-wrap items-start justify-center gap-0.5">
        {combined.split("").map((ch, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className={`flex size-8 items-center justify-center rounded border-2 font-mono text-sm ${i === cur ? "border-role-current bg-role-current/20" : i < (cur ?? -1) ? "border-border bg-muted/20" : "border-border bg-card"}`}>{ch}</span>
            <span className="text-[9px] tabular-nums text-muted-foreground">{lps[i]}</span>
          </div>
        ))}
      </div>

      {k !== null && <div className="text-sm">longest palindromic prefix length = <b className="tabular-nums text-foreground">{k}</b></div>}

      {answer !== null && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase text-muted-foreground">shortest palindrome</span>
          <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-lg">
            <span className="text-role-visited">{answer.slice(0, answer.length - s.length)}</span>{s}
          </div>
        </div>
      )}

      <Legend items={[{ role: "current", label: "Computing lps[i]" }, { role: "visited", label: "Prepended chars" }]} />
    </div>
  );
}
