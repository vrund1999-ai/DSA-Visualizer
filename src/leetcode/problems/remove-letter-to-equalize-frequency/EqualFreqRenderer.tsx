import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { EqualFreqData } from "./algorithm";

export function EqualFreqRenderer({ step }: RendererProps<EqualFreqData>) {
  const { letters, counts, trying, distinct, success, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-7">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">letter frequencies (after trial removal)</span>
        <div className="flex flex-wrap justify-center gap-3">
          {letters.map((l, i) => (
            <div key={l} className="flex flex-col items-center gap-1">
              <div className={`flex size-12 items-center justify-center rounded-lg border-2 text-xl font-bold transition-colors ${i === trying ? "border-role-current bg-role-current text-white" : "border-border bg-muted/30"}`}>
                {l}
              </div>
              <span className="text-sm tabular-nums text-muted-foreground">×{counts[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {trying !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          remaining distinct counts = {"{"}{distinct.join(", ") || "∅"}{"}"} {success ? "→ equal ✓" : "→ unequal ✗"}
        </div>
      )}

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Can equalize with one removal" : "Cannot equalize"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Letter being removed" }]} />
    </div>
  );
}
