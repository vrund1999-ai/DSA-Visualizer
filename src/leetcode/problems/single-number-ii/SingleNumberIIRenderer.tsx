import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SingleNumberIIData } from "./algorithm";

export function SingleNumberIIRenderer({ step }: RendererProps<SingleNumberIIData>) {
  const { nums, i, bits, width, result, phase } = step.data;

  return (
    <div className="flex h-full flex-col gap-5">
      <ArrayCells values={nums} roleFor={(idx) => (idx === i ? "current" : "default")} topLabel={(idx) => (idx === i ? "i" : "")} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Bit tallies (bit b → count, high → low)</span>
        <div className="flex items-end gap-1">
          {Array.from({ length: width }, (_, b) => width - 1 - b).map((b) => (
            <div key={b} className="flex flex-col items-center gap-1">
              <span className={`flex size-8 items-center justify-center rounded-md border-2 text-sm tabular-nums ${bits[b] % 3 ? "border-role-target bg-role-target/15 text-role-target" : "border-border bg-muted/30 text-muted-foreground"}`}>{bits[b]}</span>
              <span className="text-[10px] text-muted-foreground">b{b}</span>
              <span className="text-[10px] font-mono">{bits[b] % 3 ? "1" : "0"}</span>
            </div>
          ))}
        </div>
      </div>

      {(phase === "build" || phase === "done") && result !== null && (
        <p className="text-center text-sm">
          <span className="text-muted-foreground">Unique number = </span>
          <span className="rounded-md border border-role-target bg-role-target/10 px-2 py-0.5 font-semibold tabular-nums text-role-target">{result}</span>
        </p>
      )}

      <Legend
        items={[
          { role: "current", label: "Tallying" },
          { role: "target", label: "count mod 3 ≠ 0" },
        ]}
      />
    </div>
  );
}
