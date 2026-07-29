import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ComboData } from "./algorithm";

export function ComboRenderer({ step }: RendererProps<ComboData>) {
  const { k, n, combo, remain, action, results, answer } = step.data;
  const finalResults = answer ?? results;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">k = {k}</span>
        <span className="rounded-md border px-3 py-1">target = {n}</span>
        <span className="rounded-md border px-3 py-1">remaining = <b className="tabular-nums">{remain}</b></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">current combination</span>
        <div className="flex min-h-11 items-center gap-1.5">
          {combo.length === 0 ? <span className="text-sm text-muted-foreground">∅</span> : combo.map((d, i) => (
            <div key={i} className={`flex size-10 items-center justify-center rounded-md border-2 text-lg font-bold ${action === "found" ? "border-role-sorted bg-role-sorted text-white" : "border-role-current bg-role-current/15"}`}>{d}</div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">results ({finalResults.length})</span>
        <div className="flex flex-wrap justify-center gap-2">
          {finalResults.map((r, i) => <span key={i} className="rounded-md border px-2 py-0.5 font-mono text-sm">[{r.join(",")}]</span>)}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Building" }, { role: "sorted", label: "Valid combination" }]} />
    </div>
  );
}
