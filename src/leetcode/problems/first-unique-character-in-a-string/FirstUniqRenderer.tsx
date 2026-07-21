import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { FirstUniqData } from "./algorithm";

export function FirstUniqRenderer({ step }: RendererProps<FirstUniqData>) {
  const { chars, i, counts, phase, answer } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <p className="text-center text-sm text-muted-foreground">
        {phase === "count" ? "Counting characters…" : phase === "scan" ? "Scanning for the first unique…" : answer !== null ? `First unique at index ${answer}` : "No unique character"}
      </p>

      <ArrayCells values={chars} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Counts</span>
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-center gap-1.5 rounded-lg border bg-card/40 p-3">
          {counts.map((e) => (
            <span
              key={e.char}
              className={`rounded-md border px-2 py-1 font-mono text-xs tabular-nums ${
                e.n === 1 ? "border-role-target bg-role-target/15" : "border-border bg-muted/30 text-muted-foreground"
              }`}
            >
              {e.char}: {e.n}
            </span>
          ))}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Counting" },
          { role: "visited", label: "Repeated" },
          { role: "target", label: "First unique" },
        ]}
      />
    </div>
  );
}
