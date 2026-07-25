import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ItineraryData } from "./algorithm";

export function ItineraryRenderer({ step }: RendererProps<ItineraryData>) {
  const { graph, stack, route, cur, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">remaining tickets (from → dests)</span>
        <div className="flex flex-col gap-1">
          {graph.map(([from, dests]) => (
            <div key={from} className={`flex items-center gap-2 rounded-md px-2 py-0.5 ${from === cur ? "bg-role-current/10 ring-1 ring-role-current" : ""}`}>
              <span className="w-10 text-right font-mono text-sm font-semibold">{from}</span>
              <span className="text-muted-foreground">→</span>
              <span className="font-mono text-sm">{dests.length ? dests.join(", ") : <span className="text-muted-foreground">∅</span>}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-1 text-sm">
          <span className="text-xs uppercase text-muted-foreground">stack:</span>
          {stack.map((a, i) => <span key={i} className={`rounded border px-1.5 py-0.5 font-mono text-xs ${i === stack.length - 1 ? "border-role-current bg-role-current/15" : "border-border"}`}>{a}</span>)}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        route: <b className="font-mono">{(answer ?? [...route].reverse()).join(" → ") || "…"}</b>
      </div>

      <Legend items={[{ role: "current", label: "Current airport / stack top" }]} />
    </div>
  );
}
