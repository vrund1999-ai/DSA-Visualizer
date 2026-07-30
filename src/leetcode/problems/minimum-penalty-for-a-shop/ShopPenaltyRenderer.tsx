import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ShopPenaltyData } from "./algorithm";

export function ShopPenaltyRenderer({ step }: RendererProps<ShopPenaltyData>) {
  const { customers, hour, penalty, best, bestHour, answer } = step.data;
  const chars = customers.split("");

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-wrap justify-center gap-1">
        {chars.map((c, i) => {
          // with closing at `hour`, hours [0, hour) are open, [hour, n) are closed
          const open = hour !== null && i < hour;
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="h-4 text-[10px] font-semibold text-role-current">{hour === i ? "▏close" : ""}</span>
              <div
                className={`flex size-9 items-center justify-center rounded-md border-2 font-mono text-sm ${
                  c === "Y" ? "border-role-active bg-role-active/20" : "border-border bg-muted/20 text-muted-foreground"
                } ${open ? "ring-2 ring-role-sorted/50" : ""}`}
              >
                {c}
              </div>
              <span className="text-[9px] text-muted-foreground">{open ? "open" : "closed"}</span>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 text-sm tabular-nums">
        <span>penalty = {penalty}</span>
        <span className="text-role-sorted">best = {best} @ hour {bestHour}</span>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        best closing hour = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>

      <Legend items={[{ role: "active", label: "'Y' customer" }, { role: "sorted", label: "open hours" }]} />
    </div>
  );
}
