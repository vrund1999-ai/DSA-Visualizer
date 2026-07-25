import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { SparseDotData } from "./algorithm";

export function SparseDotRenderer({ step }: RendererProps<SparseDotData>) {
  const { pairsA, pairsB, i, j, sum, matched, answer } = step.data;

  const pairRow = (pairs: [number, number][], ptr: number | null, label: string) => (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label} (index:value)</span>
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {pairs.length === 0 ? <span className="text-xs text-muted-foreground">all zero</span> : pairs.map(([idx, v], k) => {
          const isPtr = k === ptr;
          const isMatch = idx === matched;
          const cls = isMatch ? "border-role-visited bg-role-visited/20" : isPtr ? "border-role-current bg-role-current/20" : "border-border bg-card";
          return <span key={k} className={`rounded-md border-2 px-2 py-1 font-mono text-xs tabular-nums ${cls}`}>{idx}:{v}</span>;
        })}
      </div>
    </div>
  );

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      {pairRow(pairsA, i, "vector A")}
      {pairRow(pairsB, j, "vector B")}

      <div className="text-sm">running sum = <b className="tabular-nums text-role-visited">{answer ?? sum}</b></div>

      <Legend items={[{ role: "current", label: "Pointer" }, { role: "visited", label: "Matched index" }]} />
    </div>
  );
}
