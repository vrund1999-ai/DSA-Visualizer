import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { PowData } from "./algorithm";

export function PowRenderer({ step }: RendererProps<PowData>) {
  const { base, exp, result, bit, done } = step.data;
  const bits = exp > 0 ? exp.toString(2) : "0";

  return (
    <div className="flex h-full flex-col items-center gap-6">
      <div className="flex items-center gap-4 text-sm">
        <span className="text-muted-foreground">base <span className="font-mono text-foreground">{base}</span></span>
        <span className="text-muted-foreground">remaining exp <span className="font-mono text-foreground">{exp}</span></span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Exponent bits (reading low → high)</span>
        <div className="flex gap-1">
          {[...bits].reverse().map((b, i) => (
            <span key={i} className={`flex size-8 items-center justify-center rounded-md border-2 font-mono text-sm ${i === 0 && bit !== null ? (bit ? "border-role-sorted bg-role-sorted/15" : "border-border bg-muted/30") : "border-border bg-muted/30 text-muted-foreground"}`}>{b}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Result</span>
        <span className={`rounded-md border px-3 py-1 font-mono text-lg font-semibold tabular-nums ${done ? "border-role-target bg-role-target/10 text-role-target" : "border-primary bg-primary/10 text-primary"}`}>{result}</span>
      </div>

      <Legend items={[{ role: "sorted", label: "Current bit = 1 (multiply)" }, { role: "target", label: "Final result" }]} />
    </div>
  );
}
