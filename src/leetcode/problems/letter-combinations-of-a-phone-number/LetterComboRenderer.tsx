import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import { MAP, type LetterComboData } from "./algorithm";

export function LetterComboRenderer({ step }: RendererProps<LetterComboData>) {
  const { digits, activeDigit, current, results } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2">
        {digits.map((d, i) => (
          <div key={i} className={`flex flex-col items-center gap-1 rounded-md border-2 px-3 py-1.5 transition-colors ${i === activeDigit ? "border-role-current bg-role-current/10" : "border-border bg-muted/30"}`}>
            <span className="font-mono text-lg font-semibold">{d}</span>
            <span className="font-mono text-[10px] text-muted-foreground">{MAP[d]}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Building</span>
        <span className="rounded-md border border-role-path bg-role-path/15 px-2.5 py-1 font-mono">{current || "—"}</span>
      </div>

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Combinations ({results.length})</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {results.length === 0 ? <span className="text-xs text-muted-foreground">none yet</span> : results.map((r, k) => (
            <span key={k} className="rounded-md border border-role-target bg-role-target/10 px-2 py-1 font-mono text-sm">{r}</span>
          ))}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Active digit" }, { role: "target", label: "Completed" }]} />
    </div>
  );
}
