import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { RelativeSortData } from "./algorithm";

export function RelativeSortRenderer({ step }: RendererProps<RelativeSortData>) {
  const { arr2, activeArr2, output, phase, done } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">arr2 (priority order)</span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {arr2.map((v, i) => (
            <span
              key={i}
              className={`rounded-md border px-2 py-1 text-sm tabular-nums ${
                i === activeArr2 ? "border-role-current bg-role-current text-white" : "border-border text-muted-foreground"
              }`}
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
          output {phase === "tail" ? "(+ ascending leftovers)" : ""}
        </span>
        {output.length > 0 ? (
          <ArrayCells values={output} roleFor={() => (done ? "sorted" : "active")} showIndex={false} cellWidth="w-8" />
        ) : (
          <span className="text-sm text-muted-foreground">(empty)</span>
        )}
      </div>

      <Legend items={[{ role: "current", label: "emitting this value" }, { role: "sorted", label: "final" }]} />
    </div>
  );
}
