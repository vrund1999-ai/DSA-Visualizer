import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { CommonCharsData } from "./algorithm";

export function CommonCharsRenderer({ step }: RendererProps<CommonCharsData>) {
  const { words, min, wordIdx, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap justify-center gap-2">
        {words.map((w, i) => (
          <span key={i} className={`rounded-md border-2 px-3 py-1 font-mono text-sm ${i === wordIdx ? "border-role-current bg-role-current/15" : "border-border bg-muted/30"}`}>{w}</span>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">running minimum counts</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {min.map((c, i) => c > 0 && (
            <div key={i} className="flex flex-col items-center rounded-md border px-2 py-1">
              <span className="text-base font-bold">{String.fromCharCode(97 + i)}</span>
              <span className="text-xs text-muted-foreground">×{c}</span>
            </div>
          ))}
          {min.every((c) => c === 0) && <span className="text-sm text-muted-foreground">(none)</span>}
        </div>
      </div>

      {answer !== null && (
        <div className="rounded-md border px-3 py-1 text-sm font-semibold">result = [{answer.join(", ")}]</div>
      )}

      <Legend items={[{ role: "current", label: "Word being intersected" }]} />
    </div>
  );
}
