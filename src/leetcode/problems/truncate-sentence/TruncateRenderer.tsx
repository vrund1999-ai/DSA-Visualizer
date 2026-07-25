import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TruncateData } from "./algorithm";

export function TruncateRenderer({ step }: RendererProps<TruncateData>) {
  const { s, k, pos, count, cut, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">keep first k = <b className="tabular-nums text-foreground">{k}</b> words · counted {count}</div>

      <div className="flex max-w-3xl flex-wrap items-center justify-center gap-0.5 font-mono text-sm">
        {s.split("").map((c, i) => {
          const kept = answer !== null ? i < answer.length : cut !== null ? i < cut : i <= (pos ?? -1);
          const isCut = i === cut;
          const cls = isCut ? "bg-role-target/30 text-role-target" : i === pos ? "bg-role-current/25 text-role-current" : kept ? "text-role-visited" : "text-muted-foreground";
          return <span key={i} className={`rounded px-0.5 py-1 ${cls}`}>{c === " " ? "␣" : c}</span>;
        })}
      </div>

      {answer !== null && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs uppercase text-muted-foreground">result</span>
          <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">{answer}</div>
        </div>
      )}

      <Legend items={[{ role: "current", label: "Scanning" }, { role: "visited", label: "Kept" }, { role: "target", label: "Cut point" }]} />
    </div>
  );
}
