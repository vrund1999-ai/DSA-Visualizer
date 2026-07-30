import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { KPalinData } from "./algorithm";

export function KPalinRenderer({ step }: RendererProps<KPalinData>) {
  const { s, k, freq, oddCount, answer } = step.data;
  const maxCount = Math.max(1, ...freq.map((f) => f.count));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-lg">{s}</span>
        <span className="text-sm text-muted-foreground">k = {k}</span>
      </div>

      <div className="flex min-h-[3rem] items-end justify-center gap-2">
        {freq.map((f) => (
          <div key={f.ch} className="flex flex-col items-center gap-1">
            <div
              className={`flex w-8 items-end justify-center rounded-t ${f.odd ? "bg-role-swapped" : "bg-role-active/50"}`}
              style={{ height: `${16 + (f.count / maxCount) * 60}px` }}
            >
              <span className="pb-0.5 text-xs font-semibold text-foreground">{f.count}</span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">{f.ch}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 text-sm tabular-nums">
        {oddCount !== null && <span>odd counts = {oddCount}</span>}
        {answer !== null && (
          <span>
            can build? <b>{answer ? "true" : "false"}</b>
          </span>
        )}
      </div>

      <Legend items={[{ role: "swapped", label: "odd frequency (needs a center)" }, { role: "active", label: "even frequency" }]} />
    </div>
  );
}
