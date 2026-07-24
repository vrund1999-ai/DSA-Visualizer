import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ShipData } from "./algorithm";

export function ShipRenderer({ step }: RendererProps<ShipData>) {
  const { weights, days, lo, hi, cap, need, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">package weights (in order)</span>
        <ArrayCells values={weights} roleFor={() => "default"} showIndex={false} />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1.5">lo = <b className="tabular-nums">{lo}</b></span>
        {cap !== null && (
          <span className="rounded-md border-2 border-role-current bg-role-current/15 px-3 py-1.5">
            cap = <b className="tabular-nums">{cap}</b>
          </span>
        )}
        <span className="rounded-md border px-3 py-1.5">hi = <b className="tabular-nums">{hi}</b></span>
      </div>

      <div className="text-sm text-muted-foreground">
        {need !== null ? (
          <>needs <b className={need <= days ? "text-role-visited" : "text-role-target"}>{need}</b> day(s) · limit {days}</>
        ) : (
          <>target: ship within {days} days</>
        )}
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-target">Answer: capacity {answer}</div>}

      <Legend items={[{ role: "current", label: "Candidate capacity" }, { role: "visited", label: "Feasible" }, { role: "target", label: "Infeasible / answer" }]} />
    </div>
  );
}
