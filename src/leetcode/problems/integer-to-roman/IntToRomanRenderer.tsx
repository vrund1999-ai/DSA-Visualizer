import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import { MAP, type IntToRomanData } from "./algorithm";

export function IntToRomanRenderer({ step }: RendererProps<IntToRomanData>) {
  const { original, remaining, result, activeValue } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-4 text-sm">
        <span className="text-muted-foreground">n = {original}</span>
        <span className="text-muted-foreground">remaining <span className="font-mono text-foreground">{remaining}</span></span>
        <span className="text-muted-foreground">result <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-mono font-semibold text-role-target">{result || "—"}</span></span>
      </div>

      <div className="flex flex-1 flex-wrap items-start justify-center gap-1.5">
        {MAP.map(([v, sym]) => (
          <div key={sym} className={`flex flex-col items-center gap-0.5 rounded-md border-2 px-2 py-1 transition-colors ${v === activeValue ? "border-role-current bg-role-current/15" : remaining >= v ? "border-role-active/40 bg-role-active/5" : "border-border bg-muted/20 text-muted-foreground"}`}>
            <span className="font-mono text-sm font-semibold">{sym}</span>
            <span className="text-[10px] tabular-nums text-muted-foreground">{v}</span>
          </div>
        ))}
      </div>

      <Legend items={[{ role: "current", label: "Symbol appended" }]} />
    </div>
  );
}
