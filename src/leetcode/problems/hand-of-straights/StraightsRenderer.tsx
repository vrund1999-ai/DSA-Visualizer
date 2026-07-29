import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { StraightsData } from "./algorithm";

export function StraightsRenderer({ step }: RendererProps<StraightsData>) {
  const { groupSize, count, group, fail, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">group size = <b className="tabular-nums">{groupSize}</b></div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">remaining card counts</span>
        <div className="flex flex-wrap justify-center gap-2">
          {count.map(([card, c]) => {
            const inGroup = group.includes(card);
            return (
              <div key={card} className={`flex flex-col items-center rounded-md border-2 px-3 py-1.5 ${inGroup ? (fail ? "border-role-compared bg-role-compared/20" : "border-role-current bg-role-current/15") : c === 0 ? "border-border/40 bg-muted/10 text-muted-foreground/50" : "border-border bg-muted/30"}`}>
                <span className="text-base font-bold tabular-nums">{card}</span>
                <span className="text-xs text-muted-foreground">×{c}</span>
              </div>
            );
          })}
        </div>
      </div>

      {group.length > 0 && <div className="rounded-md border px-3 py-1 text-sm">forming run: [{group.join(", ")}]</div>}

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "All cards form straights ✓" : "Cannot form straights ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current run" }, { role: "compared", label: "Missing card" }]} />
    </div>
  );
}
