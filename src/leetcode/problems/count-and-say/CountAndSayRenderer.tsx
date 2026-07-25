import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CountAndSayData } from "./algorithm";

export function CountAndSayRenderer({ step }: RendererProps<CountAndSayData>) {
  const { n, terms, cur, run, next, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">building term {n}</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">current term (reading runs)</span>
        <div className="flex flex-wrap items-center justify-center gap-0.5 font-mono text-lg">
          {cur.split("").map((ch, i) => (
            <span key={i} className={`rounded px-1.5 py-0.5 ${run && i >= run[0] && i < run[1] ? "bg-role-current/25 text-role-current" : ""}`}>{ch}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">next term (so far)</span>
        <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-lg">{next || "…"}</div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
        {terms.map((t, i) => (
          <span key={i} className={`rounded border px-2 py-0.5 font-mono ${answer !== null && i === terms.length - 1 ? "border-role-visited bg-role-visited/15 text-foreground" : "bg-muted/20"}`}>{t}</span>
        ))}
      </div>

      <Legend items={[{ role: "current", label: "Current run" }, { role: "visited", label: "Final term" }]} />
    </div>
  );
}
