import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ConsistentData } from "./algorithm";

export function ConsistentRenderer({ step }: RendererProps<ConsistentData>) {
  const { allowed, words, wordIdx, badChar, consistent, count, answer } = step.data;
  const ok = new Set(allowed);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">allowed</span>
        {allowed.split("").map((c) => (
          <span key={c} className="flex size-8 items-center justify-center rounded-md border-2 border-role-sorted bg-role-sorted/15 text-sm font-bold">{c}</span>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        {words.map((w, i) => {
          const active = i === wordIdx;
          return (
            <div key={i} className={`flex items-center gap-1 rounded-md px-2 py-1 ${active ? "ring-1 ring-role-current" : ""}`}>
              {w.split("").map((ch, c) => {
                const allowedCh = ok.has(ch);
                const isBad = active && c === badChar;
                return <span key={c} className={`flex size-7 items-center justify-center rounded border-2 text-sm ${isBad ? "border-role-compared bg-role-compared text-white" : allowedCh ? "border-border bg-muted/30" : "border-role-compared/40 bg-role-compared/10"}`}>{ch}</span>;
              })}
              {active && consistent !== null && <span className="ml-2 text-xs">{consistent ? "✓" : "✗"}</span>}
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">consistent count = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "sorted", label: "Allowed char" }, { role: "compared", label: "Disallowed" }]} />
    </div>
  );
}
