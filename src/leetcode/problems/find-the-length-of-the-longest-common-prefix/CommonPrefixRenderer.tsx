import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CommonPrefixData } from "./algorithm";

export function CommonPrefixRenderer({ step }: RendererProps<CommonPrefixData>) {
  const { arr1, arr2, prefixes, phase, active, matched, best, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">arr1 (build prefix set)</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {arr1.map((x, i) => (
            <span key={i} className={`rounded border px-2 py-0.5 font-mono text-sm ${phase === "build" && i === active ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"}`}>{x}</span>
          ))}
        </div>
      </div>

      <div className="flex max-w-lg flex-wrap justify-center gap-1">
        {prefixes.map((p) => (
          <span key={p} className={`rounded px-1.5 py-0.5 font-mono text-xs ${p === matched ? "bg-role-sorted text-white" : "bg-muted/40"}`}>{p}</span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">arr2 (match)</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {arr2.map((x, i) => (
            <span key={i} className={`rounded border px-2 py-0.5 font-mono text-sm ${phase === "match" && i === active ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"}`}>{x}</span>
          ))}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        longest common prefix = <b className="tabular-nums">{answer ?? best}</b>
      </div>

      <Legend items={[{ role: "current", label: "processing" }, { role: "sorted", label: "matched prefix" }]} />
    </div>
  );
}
