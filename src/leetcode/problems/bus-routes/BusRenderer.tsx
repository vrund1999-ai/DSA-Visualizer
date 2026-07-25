import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BusData } from "./algorithm";

export function BusRenderer({ step }: RendererProps<BusData>) {
  const { routes, source, target, frontier, cur, seen, buses, hitStop, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border border-role-pivot px-3 py-1">source {source}</span>
        <span className="rounded-md border border-role-target px-3 py-1">target {target}</span>
        <span className="rounded-md border px-3 py-1">buses = <b className="tabular-nums">{answer ?? buses}</b></span>
      </div>

      <div className="flex flex-col gap-1.5">
        {routes.map((route, r) => {
          const isCur = r === cur;
          const inFrontier = frontier.includes(r);
          const isSeen = seen.includes(r);
          return (
            <div key={r} className={`flex items-center gap-2 rounded-md px-2 py-1 ${isCur ? "bg-role-current/15 ring-1 ring-role-current" : inFrontier ? "bg-role-active/15" : isSeen ? "bg-muted/40" : ""}`}>
              <span className="w-10 text-right text-xs text-muted-foreground">bus {r}</span>
              <div className="flex gap-1">
                {route.map((stop, i) => {
                  const role = stop === target ? (stop === hitStop ? "sorted" : "target") : stop === source ? "pivot" : "default";
                  const cls = role === "sorted" ? "border-role-sorted bg-role-sorted text-white" : role === "target" ? "border-role-target bg-role-target/15" : role === "pivot" ? "border-role-pivot bg-role-pivot/15" : "border-border bg-muted/30";
                  return <span key={i} className={`flex size-8 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${cls}`}>{stop}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>

      <Legend items={[{ role: "pivot", label: "Source stop" }, { role: "target", label: "Target stop" }, { role: "current", label: "Expanding route" }, { role: "active", label: "Frontier" }]} />
    </div>
  );
}
