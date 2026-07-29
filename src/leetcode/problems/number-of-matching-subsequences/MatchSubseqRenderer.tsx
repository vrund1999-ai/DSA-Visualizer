import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MatchSubseqData } from "./algorithm";

export function MatchSubseqRenderer({ step }: RendererProps<MatchSubseqData>) {
  const { s, sIdx, waiting, justMatched, count, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">s</span>
        <ArrayCells values={s.split("")} roleFor={(i) => (i === sIdx ? "current" : i < (sIdx ?? -1) ? "visited" : "default")} showIndex={false} cellWidth="w-8" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">waiting buckets (next char → word@pos)</span>
        <div className="flex flex-wrap justify-center gap-2">
          {waiting.length === 0 ? <span className="text-sm text-muted-foreground">none</span> : waiting.sort((a, b) => a[0].localeCompare(b[0])).map(([c, list]) => (
            <div key={c} className={`flex flex-col items-center rounded-md border px-2 py-1 ${c === s[sIdx ?? -1] ? "border-role-current bg-role-current/10" : ""}`}>
              <span className="font-mono text-sm font-bold">{c}</span>
              <span className="text-[10px] text-muted-foreground">{list.join(", ")}</span>
            </div>
          ))}
        </div>
      </div>

      {justMatched.length > 0 && <div className="rounded-md bg-role-sorted px-3 py-1 text-sm font-semibold text-white">matched: {justMatched.join(", ")}</div>}

      <div className="rounded-md border px-3 py-1 text-sm">count = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "current", label: "Current char / active bucket" }, { role: "visited", label: "Read" }]} />
    </div>
  );
}
