import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { EvalDivData } from "./algorithm";

export function EvalDivRenderer({ step }: RendererProps<EvalDivData>) {
  const { variables, equations, query, current, path, acc, answer } = step.data;

  const roleOf = (v: string) => {
    if (v === current) return "border-role-current bg-role-current/20";
    if (path.includes(v)) return "border-role-visited bg-role-visited/15";
    return "border-border bg-card";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {equations.map(([a, b, k], i) => (
          <span key={i} className="rounded-md border bg-muted/30 px-2 py-1 font-mono text-xs">{a}/{b} = {k}</span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {variables.map((v) => (
          <div key={v} className={`flex size-12 items-center justify-center rounded-full border-2 text-base font-semibold ${roleOf(v)}`}>{v}</div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1 text-sm">
        <span className="text-muted-foreground">query: <b className="font-mono">{query[0]} / {query[1]}</b></span>
        {path.length > 0 && (
          <span className="font-mono text-xs text-muted-foreground">path: {path.join(" → ")}</span>
        )}
        <span>running product = <b className="tabular-nums">{+acc.toFixed(4)}</b></span>
        {answer !== null && (
          <span className={`text-base font-semibold ${answer === -1 ? "text-role-target" : "text-role-visited"}`}>
            = {answer === -1 ? "-1 (no path)" : +answer.toFixed(4)}
          </span>
        )}
      </div>

      <Legend items={[{ role: "current", label: "Visiting" }, { role: "visited", label: "On path" }]} />
    </div>
  );
}
