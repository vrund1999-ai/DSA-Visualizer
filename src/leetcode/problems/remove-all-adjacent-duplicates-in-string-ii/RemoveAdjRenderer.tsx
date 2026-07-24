import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { RemoveAdjData } from "./algorithm";

export function RemoveAdjRenderer({ step }: RendererProps<RemoveAdjData>) {
  const { chars, k, i, stack, done } = step.data;
  const roleFor = roleLookup(step.highlights);
  const result = stack.map((f) => f.char.repeat(f.count)).join("");

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Remove runs of</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2 py-0.5 font-semibold tabular-nums text-primary">{k}</span>
      </div>

      <ArrayCells values={chars} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} showIndex={false} />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Stack (char × run-length)</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-2 font-mono text-sm">
          {stack.length === 0 ? <span className="text-xs text-muted-foreground">empty</span> : stack.map((f, idx) => (
            <span key={idx} className="rounded border border-role-active bg-role-active/15 px-2 py-0.5">{f.char}×{f.count}</span>
          ))}
        </div>
      </div>

      {done && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Result</span>
          <div className="rounded-lg border border-role-sorted bg-role-sorted/10 px-4 py-2 font-mono text-lg">{result || "(empty)"}</div>
        </div>
      )}

      <Legend
        items={[
          { role: "current", label: "Extends run" },
          { role: "active", label: "New run" },
          { role: "swapped", label: "Run removed" },
        ]}
      />
    </div>
  );
}
