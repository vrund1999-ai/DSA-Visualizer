import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { EqualOccData } from "./algorithm";

export function EqualOccRenderer({ step }: RendererProps<EqualOccData>) {
  const { s, idx, freq, checking, target, answer } = step.data;
  const chars = s.split("");

  const roleFor = (i: number) => {
    if (i === idx) return "current";
    if (idx !== null && i < idx) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} showIndex={false} cellWidth="w-9" />

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">counts{target !== null && ` (target ${target})`}</span>
        <div className="flex flex-wrap justify-center gap-2">
          {freq.map(([letter, c]) => {
            const bad = target !== null && c !== target;
            const active = letter === checking;
            return (
              <div key={letter} className={`flex flex-col items-center gap-1`}>
                <div className={`flex size-11 items-center justify-center rounded-lg border-2 text-lg font-bold ${active ? (bad ? "border-role-compared bg-role-compared/20" : "border-role-sorted bg-role-sorted/15") : "border-border bg-muted/30"}`}>{letter}</div>
                <span className="text-sm tabular-nums text-muted-foreground">×{c}</span>
              </div>
            );
          })}
        </div>
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "All counts equal ✓" : "Counts differ ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Counting" }, { role: "sorted", label: "Matches target" }, { role: "compared", label: "Mismatch" }]} />
    </div>
  );
}
