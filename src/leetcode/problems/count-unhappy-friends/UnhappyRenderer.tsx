import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { UnhappyData } from "./algorithm";

export function UnhappyRenderer({ step }: RendererProps<UnhappyData>) {
  const { n, partner, x, y, culprit, unhappySet, count, answer } = step.data;

  // unique pairs
  const pairs: [number, number][] = [];
  const seen = new Set<number>();
  for (let i = 0; i < n; i++) {
    if (!seen.has(i)) { pairs.push([i, partner[i]]); seen.add(i); seen.add(partner[i]); }
  }

  const chipClass = (f: number) => {
    if (culprit && (f === culprit[0] || f === culprit[1])) return "border-role-compared bg-role-compared/15";
    if (f === x) return "border-role-current bg-role-current text-white";
    if (unhappySet.includes(f)) return "border-role-compared bg-role-compared/20";
    return "border-border bg-muted/30";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">pairings</span>
        <div className="flex flex-wrap justify-center gap-3">
          {pairs.map(([a, b], i) => (
            <div key={i} className="flex items-center gap-1 rounded-md border px-2 py-1">
              <span className={`flex size-8 items-center justify-center rounded border-2 text-sm font-medium ${chipClass(a)}`}>{a}</span>
              <span className="text-muted-foreground">↔</span>
              <span className={`flex size-8 items-center justify-center rounded border-2 text-sm font-medium ${chipClass(b)}`}>{b}</span>
            </div>
          ))}
        </div>
      </div>

      {x !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          evaluating friend <b>{x}</b> (partner {y}){culprit && <> — prefers <b>{culprit[0]}</b>, who prefers {x} over {culprit[1]}</>}
        </div>
      )}

      <div className="rounded-md border px-3 py-1 text-sm">unhappy friends = <b className="tabular-nums">{answer ?? count}</b></div>

      <Legend items={[{ role: "current", label: "Evaluating" }, { role: "compared", label: "Unhappy / culprit" }]} />
    </div>
  );
}
