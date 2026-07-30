import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DivideData } from "./algorithm";

export function DivideRenderer({ step }: RendererProps<DivideData>) {
  const { sorted, k, group, failed, res, answer } = step.data;

  const roleFor = (idx: number) => {
    if (group !== null && idx >= group && idx <= group + 2) return failed ? "swapped" : "current";
    if (group !== null && idx < group) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">sorted (k = {k})</span>
        <ArrayCells values={sorted} roleFor={roleFor} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">groups</span>
        <div className="flex flex-wrap justify-center gap-2">
          {answer && answer.length === 0 ? (
            <span className="text-role-swapped">impossible → []</span>
          ) : (
            (answer ?? res).map((g, i) => (
              <span key={i} className="rounded border border-role-sorted bg-role-sorted/15 px-2 py-0.5 font-mono text-sm">[{g.join(", ")}]</span>
            ))
          )}
        </div>
      </div>

      <Legend items={[{ role: "current", label: "Valid triple" }, { role: "swapped", label: "Failed triple" }, { role: "visited", label: "Grouped" }]} />
    </div>
  );
}
