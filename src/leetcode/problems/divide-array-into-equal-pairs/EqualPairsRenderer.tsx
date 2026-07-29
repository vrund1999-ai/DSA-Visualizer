import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { EqualPairsData } from "./algorithm";

export function EqualPairsRenderer({ step }: RendererProps<EqualPairsData>) {
  const { count, checking, odd, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">value counts (must be even)</span>
        <div className="flex flex-wrap justify-center gap-2">
          {count.map(([v, c]) => {
            const active = v === checking;
            const bad = active && odd;
            return (
              <div key={v} className={`flex flex-col items-center rounded-md border-2 px-3 py-1.5 ${bad ? "border-role-compared bg-role-compared/20" : active ? "border-role-sorted bg-role-sorted/15" : c % 2 === 0 ? "border-border bg-muted/30" : "border-border bg-muted/30"}`}>
                <span className="text-base font-bold tabular-nums">{v}</span>
                <span className={`text-xs ${c % 2 === 0 ? "text-muted-foreground" : "text-role-compared"}`}>×{c} {c % 2 === 0 ? "even" : "odd"}</span>
              </div>
            );
          })}
        </div>
      </div>

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Divides into equal pairs ✓" : "Cannot pair evenly ✗"}
        </div>
      )}

      <Legend items={[{ role: "sorted", label: "Even count" }, { role: "compared", label: "Odd count" }]} />
    </div>
  );
}
