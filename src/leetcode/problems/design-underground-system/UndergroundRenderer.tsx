import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { UndergroundData } from "./algorithm";

export function UndergroundRenderer({ step }: RendererProps<UndergroundData>) {
  const { ongoing, routes, op, activeRoute, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-current px-3 py-1 font-mono">{op}</span>
        {result !== null && <span className="rounded-md border px-3 py-1">→ {result}</span>}
      </div>

      <div className="flex flex-wrap items-start justify-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">ongoing trips</span>
          <div className="flex flex-col gap-1">
            {ongoing.length === 0 ? <span className="text-sm text-muted-foreground">none</span> : ongoing.map(([id, [st, t]]) => (
              <span key={id} className="rounded-md border px-2.5 py-1 text-sm">#{id}: {st} @ t={t}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">route totals</span>
          <div className="flex flex-col gap-1">
            {routes.length === 0 ? <span className="text-sm text-muted-foreground">none</span> : routes.map(([key, [sum, n]]) => (
              <span key={key} className={`rounded-md border px-2.5 py-1 text-sm tabular-nums ${key === activeRoute ? "border-role-current bg-role-current/15" : ""}`}>
                <span className="font-mono">{key}</span>: {sum}/{n} = {(sum / n).toFixed(1)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Active op / route" }]} />
    </div>
  );
}
