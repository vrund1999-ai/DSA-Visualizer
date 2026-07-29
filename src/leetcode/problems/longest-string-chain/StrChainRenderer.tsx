import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { StrChainData } from "./algorithm";

export function StrChainRenderer({ step }: RendererProps<StrChainData>) {
  const { words, dp, cur, predecessor, best, answer } = step.data;
  const dpMap = new Map(dp);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {words.map((w, i) => {
          const len = dpMap.get(w);
          return (
            <div key={i} className={`flex flex-col items-center rounded-md border-2 px-3 py-1.5 ${i === cur ? "border-role-current bg-role-current/15" : w === predecessor ? "border-role-compared bg-role-compared/15" : len !== undefined ? "border-role-sorted/50" : "border-border bg-muted/30"}`}>
              <span className="font-mono text-sm">{w}</span>
              {len !== undefined && <span className="text-xs text-muted-foreground">chain {len}</span>}
            </div>
          );
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">longest chain = <b className="tabular-nums">{answer ?? best}</b></div>

      <Legend items={[{ role: "current", label: "Current word" }, { role: "compared", label: "Predecessor" }, { role: "sorted", label: "Solved" }]} />
    </div>
  );
}
